import React from "react";
import { StoryScene, SceneActivation } from "@/types/story";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

export interface SceneComponentProps {
  scene: StoryScene;
  activation: SceneActivation;
  className?: string;
}

export function TextScene({ scene, activation, className }: SceneComponentProps) {
  const isLeaving = activation === "leaving";
  const isEntering = activation === "entering";

  return (
    <div
      className={cn(
        "relative w-full max-w-4xl mx-auto py-16 sm:py-24 px-4 sm:px-6 space-y-6 transition-all duration-700 ease-out",
        isLeaving ? "opacity-40 translate-y-2" : isEntering ? "opacity-70 translate-y-1" : "opacity-100 translate-y-0",
        className
      )}
    >
      {/* Optional Metadata Badge */}
      {scene.metadata?.context && (
        <div className="flex items-center gap-2">
          <MonoLabel variant="muted" size="xs">
            {scene.metadata.context}
          </MonoLabel>
          {scene.metadata.date && (
            <MonoLabel variant="subtle" size="xs">
              {scene.metadata.date}
            </MonoLabel>
          )}
        </div>
      )}

      {/* Scene Title */}
      {scene.title && (
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#f0f0f4] tracking-tight">
          {scene.title}
        </h3>
      )}

      {/* Lead Text */}
      {scene.lead && (
        <p className="font-display italic text-lg sm:text-xl text-[#d9825b] font-light leading-relaxed">
          &ldquo;{scene.lead}&rdquo;
        </p>
      )}

      {/* Narrative Body Paragraphs */}
      {scene.body && scene.body.length > 0 && (
        <div className="space-y-4 pt-2">
          {scene.body.map((paragraph, idx) => (
            <p
              key={idx}
              className="font-body text-base sm:text-lg text-[#9496a4] leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
