"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import type {
  StoryChapter,
  StoryEngineState,
  SceneActivation,
} from "@/types/story";

// ─── Context Shape ─────────────────────────────────────────────

interface StoryContextValue extends StoryEngineState {
  /** Register a scene activation change (called by useSceneObserver). */
  reportSceneActivation: (sceneId: string, activation: SceneActivation) => void;
  /** Navigate to a chapter by id (smooth scroll). */
  navigateToChapter: (chapterId: string) => void;
  /** Whether the dev debug overlay is visible. */
  debugMode: boolean;
  toggleDebugMode: () => void;
}

const StoryContext = createContext<StoryContextValue | null>(null);

// ─── Provider ──────────────────────────────────────────────────

interface StoryProviderProps {
  chapters: StoryChapter[];
  children: React.ReactNode;
}

export function StoryProvider({ chapters, children }: StoryProviderProps) {
  const [currentChapterId, setCurrentChapterId] = useState<string | null>(null);
  const [currentSceneId, setCurrentSceneId] = useState<string | null>(null);
  const [debugMode, setDebugMode] = useState(false);

  // Track activations in a ref to avoid re-renders on every observer tick.
  // Only promote to state when the *active* scene changes.
  const activationsRef = useRef<Map<string, SceneActivation>>(new Map());
  const [activationsSnapshot, setActivationsSnapshot] = useState<Map<string, SceneActivation>>(new Map());

  // Build a flat scene→chapter lookup once.
  const sceneToChapter = useMemo(() => {
    const map = new Map<string, string>();
    for (const chapter of chapters) {
      for (const scene of chapter.scenes) {
        map.set(scene.id, chapter.id);
      }
    }
    return map;
  }, [chapters]);

  // All scene ids in order, for progress calculation.
  const allSceneIds = useMemo(
    () => chapters.flatMap((c) => c.scenes.map((s) => s.id)),
    [chapters]
  );

  const reportSceneActivation = useCallback(
    (sceneId: string, activation: SceneActivation) => {
      activationsRef.current.set(sceneId, activation);

      // Find the highest-priority "active" scene (first one in document order).
      // If none is "active", take the first "entering" one.
      let bestActive: string | null = null;
      let bestEntering: string | null = null;

      for (const id of allSceneIds) {
        const a = activationsRef.current.get(id);
        if (a === "active" && !bestActive) {
          bestActive = id;
          break; // First active wins
        }
        if (a === "entering" && !bestEntering) {
          bestEntering = id;
        }
      }

      const resolvedScene = bestActive ?? bestEntering ?? null;
      const resolvedChapter = resolvedScene
        ? sceneToChapter.get(resolvedScene) ?? null
        : null;

      setCurrentSceneId(resolvedScene);
      setCurrentChapterId(resolvedChapter);
      // Snapshot activations map for consumers that need it.
      setActivationsSnapshot(new Map(activationsRef.current));
    },
    [allSceneIds, sceneToChapter]
  );

  const navigateToChapter = useCallback((chapterId: string) => {
    const el = document.getElementById(chapterId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const toggleDebugMode = useCallback(() => {
    setDebugMode((prev) => !prev);
  }, []);

  // ── Derived progress values ────────────────────────────────

  const overallProgress = useMemo(() => {
    if (!currentSceneId || allSceneIds.length === 0) return 0;
    const idx = allSceneIds.indexOf(currentSceneId);
    if (idx === -1) return 0;
    return (idx + 1) / allSceneIds.length;
  }, [currentSceneId, allSceneIds]);

  const chapterProgress = useMemo(() => {
    if (!currentChapterId || !currentSceneId) return 0;
    const chapter = chapters.find((c) => c.id === currentChapterId);
    if (!chapter) return 0;
    const sceneIds = chapter.scenes.map((s) => s.id);
    const idx = sceneIds.indexOf(currentSceneId);
    if (idx === -1) return 0;
    return (idx + 1) / sceneIds.length;
  }, [currentChapterId, currentSceneId, chapters]);

  const value: StoryContextValue = useMemo(
    () => ({
      chapters,
      currentChapterId,
      currentSceneId,
      overallProgress,
      chapterProgress,
      sceneActivations: activationsSnapshot,
      reportSceneActivation,
      navigateToChapter,
      debugMode,
      toggleDebugMode,
    }),
    [
      chapters,
      currentChapterId,
      currentSceneId,
      overallProgress,
      chapterProgress,
      activationsSnapshot,
      reportSceneActivation,
      navigateToChapter,
      debugMode,
      toggleDebugMode,
    ]
  );

  return (
    <StoryContext.Provider value={value}>{children}</StoryContext.Provider>
  );
}

// ─── Consumer Hook ─────────────────────────────────────────────

export function useStoryEngine(): StoryContextValue {
  const ctx = useContext(StoryContext);
  if (!ctx) {
    throw new Error("useStoryEngine must be used within a <StoryProvider>.");
  }
  return ctx;
}
