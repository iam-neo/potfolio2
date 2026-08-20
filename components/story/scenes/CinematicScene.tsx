import React from "react";
import { StoryScene, SceneActivation } from "@/types/story";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

export interface CinematicSceneProps {
  scene: StoryScene;
  activation: SceneActivation;
  className?: string;
}

export function CinematicScene({ scene, activation, className }: CinematicSceneProps) {
  const isLeaving = activation === "leaving";
  const isEntering = activation === "entering";

  return (
    <div
      className={cn(
        "relative w-full min-h-[70vh] sm:min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 py-20 overflow-hidden transition-all duration-1000 ease-out",
        isLeaving ? "opacity-30 scale-[0.98]" : isEntering ? "opacity-60 scale-[0.99]" : "opacity-100 scale-100",
        className
      )}
    >
      {/* Background Ambience / Subtle Vignette */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#181a24]/40 via-[#0a0b0e]/80 to-[#0a0b0e] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 z-10">
        {scene.metadata?.context && (
          <MonoLabel variant="accent" size="xs" dot className="mx-auto">
            {scene.metadata.context}
          </MonoLabel>
        )}

        {scene.title && (
          <h3 className="font-display text-display-hero text-[#f0f0f4]">
            {scene.title}
          </h3>
        )}

        {scene.lead && (
          <p className="font-display italic text-xl sm:text-2xl md:text-3xl text-[#d9825b] font-light max-w-2xl mx-auto leading-snug">
            {scene.lead}
          </p>
        )}

        {scene.body && scene.body.length > 0 && (
          <div className="space-y-4 max-w-2xl mx-auto pt-2">
            {scene.body.map((paragraph, idx) => (
              <p key={idx} className="font-body text-base sm:text-lg text-[#9496a4] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
