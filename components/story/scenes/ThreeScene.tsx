import React from "react";
import { StoryScene, SceneActivation } from "@/types/story";
import { ThreeSceneRenderer } from "@/components/three/ThreeSceneRenderer";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

export interface ThreeSceneProps {
  scene: StoryScene;
  activation: SceneActivation;
  className?: string;
}

export function ThreeScene({ scene, activation, className }: ThreeSceneProps) {
  const isLeaving = activation === "leaving";
  const isEntering = activation === "entering";

  return (
    <div
      className={cn(
        "relative w-full max-w-5xl mx-auto py-16 sm:py-24 px-4 sm:px-6 space-y-6 transition-all duration-700 ease-out",
        isLeaving ? "opacity-40" : isEntering ? "opacity-70" : "opacity-100",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <MonoLabel variant="accent" size="xs" dot>
          3D Spatial Specimen
        </MonoLabel>
        <MonoLabel variant="muted" size="xs">
          WebGL Active
        </MonoLabel>
      </div>

      <div className="space-y-3">
        {scene.title && (
          <h3 className="font-display text-2xl sm:text-3xl text-[#f0f0f4]">
            {scene.title}
          </h3>
        )}
        {scene.lead && (
          <p className="font-display italic text-base sm:text-lg text-[#d9825b] font-light">
            &ldquo;{scene.lead}&rdquo;
          </p>
        )}
      </div>

      {/* 3D Canvas Container */}
      <div className="relative w-full aspect-video rounded border border-[#1e202b] bg-[#0c0d12] overflow-hidden shadow-2xl">
        <ThreeSceneRenderer
          sceneId={scene.threeSceneId || scene.id}
          active={activation === "active" || activation === "entering"}
        />
      </div>

      {scene.body && scene.body.length > 0 && (
        <div className="space-y-3 pt-2">
          {scene.body.map((p, idx) => (
            <p key={idx} className="font-body text-base text-[#9496a4] leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
