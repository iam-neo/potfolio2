// ─── Scene Types ───────────────────────────────────────────────
// Each type maps to a dedicated scene component via SceneRenderer.

export type SceneType =
  | "text"
  | "cinematic"
  | "split"
  | "image"
  | "artifact"
  | "timeline"
  | "project"
  | "interactive"
  | "three";

// ─── Scene Activation ──────────────────────────────────────────
// Lifecycle state of a scene relative to the viewport.

export type SceneActivation = "inactive" | "entering" | "active" | "leaving";

// ─── Scene Visual ──────────────────────────────────────────────

export interface SceneVisual {
  type: "image" | "document" | "video" | "code-snippet" | "three-scene";
  src?: string;
  alt?: string;
  caption?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/4" | "cinematic";
}

// ─── Scene Layout Hints ────────────────────────────────────────
// Optional layout modifiers that scene components may use.

export interface SceneLayout {
  minHeight?: string;             // e.g. "100vh", "50vh", "auto"
  maxWidth?: "narrow" | "default" | "wide" | "full";
  textAlign?: "left" | "center";
  verticalAlign?: "start" | "center" | "end";
  background?: string;            // CSS color or gradient
}

// ─── Timeline Entry ────────────────────────────────────────────
// Used by the timeline scene type.

export interface TimelineEntry {
  year: string;
  label: string;
  description?: string;
  highlight?: boolean;
}

// ─── Story Scene ───────────────────────────────────────────────

export interface StoryScene {
  id: string;
  chapterId: string;
  type: SceneType;
  title?: string;
  lead?: string;
  body?: string[];
  visual?: SceneVisual;
  artifactId?: string;
  threeSceneId?: string;
  layout?: SceneLayout;
  timeline?: TimelineEntry[];
  metadata?: {
    date?: string;
    location?: string;
    context?: string;
  };
}

// ─── Story Chapter ─────────────────────────────────────────────

export interface StoryChapter {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description?: string;
  era: string;
  scenes: StoryScene[];
}

// ─── Story Engine State ────────────────────────────────────────
// Centralized state exposed by StoryContext.

export interface StoryEngineState {
  chapters: StoryChapter[];
  currentChapterId: string | null;
  currentSceneId: string | null;
  overallProgress: number;          // 0..1
  chapterProgress: number;          // 0..1 within current chapter
  sceneActivations: Map<string, SceneActivation>;
}
