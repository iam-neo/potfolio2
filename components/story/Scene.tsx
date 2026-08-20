"use client";

import React, { useEffect } from "react";
import { StoryScene } from "@/types/story";
import { useSceneObserver } from "@/hooks/useSceneObserver";
import { useStoryEngine } from "./StoryContext";
import { SceneRenderer } from "./SceneRenderer";
import { cn } from "@/lib/utils";

export interface SceneProps {
  scene: StoryScene;
  className?: string;
}

/**
 * Scene component: Attaches IntersectionObserver, tracks activation lifecycle,
 * and delegates presentation to SceneRenderer.
 */
export function Scene({ scene, className }: SceneProps) {
  const { reportSceneActivation } = useStoryEngine();
  const { ref, activation } = useSceneObserver();

  // Synchronize activation changes with centralized engine context
  useEffect(() => {
    reportSceneActivation(scene.id, activation);
  }, [scene.id, activation, reportSceneActivation]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={scene.id}
      data-scene-id={scene.id}
      data-scene-type={scene.type}
      data-scene-activation={activation}
      className={cn(
        "relative w-full scroll-mt-20",
        scene.layout?.minHeight ? `min-h-[${scene.layout.minHeight}]` : "",
        className
      )}
    >
      <SceneRenderer scene={scene} activation={activation} />
    </section>
  );
}
