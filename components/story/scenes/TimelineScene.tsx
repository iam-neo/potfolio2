import React from "react";
import { StoryScene, SceneActivation } from "@/types/story";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

export interface TimelineSceneProps {
  scene: StoryScene;
  activation: SceneActivation;
  className?: string;
}

export function TimelineScene({ scene, activation, className }: TimelineSceneProps) {
  const isLeaving = activation === "leaving";
  const isEntering = activation === "entering";

  return (
    <div
      className={cn(
        "relative w-full max-w-4xl mx-auto py-16 sm:py-24 px-4 sm:px-6 space-y-8 transition-all duration-700 ease-out",
        isLeaving ? "opacity-40" : isEntering ? "opacity-70" : "opacity-100",
        className
      )}
    >
      <div className="space-y-3">
        {scene.metadata?.context && (
          <MonoLabel variant="muted" size="xs">
            {scene.metadata.context}
          </MonoLabel>
        )}
        {scene.title && (
          <h3 className="font-display text-2xl sm:text-3xl text-[#f0f0f4]">
            {scene.title}
          </h3>
        )}
      </div>

      {/* Timeline Steps */}
      {scene.timeline && scene.timeline.length > 0 && (
        <div className="relative pl-6 sm:pl-8 border-l border-[#222430] space-y-8 my-6">
          {scene.timeline.map((entry, idx) => (
            <div key={idx} className="relative group space-y-1.5">
              {/* Dot */}
              <div
                className={cn(
                  "absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full border-2 bg-[#0a0b0e] transition-colors",
                  entry.highlight
                    ? "border-[#d9825b] bg-[#251b14]"
                    : "border-[#3c3f52] group-hover:border-[#9496a4]"
                )}
                aria-hidden="true"
              />

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#d9825b]">
                  {entry.year}
                </span>
                <h4 className="font-mono text-sm text-[#f0f0f4] font-medium">
                  {entry.label}
                </h4>
              </div>

              {entry.description && (
                <p className="font-body text-xs sm:text-sm text-[#9496a4] leading-relaxed">
                  {entry.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {scene.body && scene.body.length > 0 && (
        <div className="space-y-3 pt-4">
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
