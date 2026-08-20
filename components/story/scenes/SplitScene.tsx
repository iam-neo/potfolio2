import React from "react";
import { StoryScene, SceneActivation } from "@/types/story";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

export interface SplitSceneProps {
  scene: StoryScene;
  activation: SceneActivation;
  className?: string;
}

export function SplitScene({ scene, activation, className }: SplitSceneProps) {
  const isLeaving = activation === "leaving";
  const isEntering = activation === "entering";

  return (
    <div
      className={cn(
        "relative w-full max-w-5xl mx-auto py-16 sm:py-24 px-4 sm:px-6 transition-all duration-700 ease-out",
        isLeaving ? "opacity-40" : isEntering ? "opacity-70" : "opacity-100",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Column: Narrative */}
        <div className="space-y-5">
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

          {scene.lead && (
            <p className="font-display italic text-base sm:text-lg text-[#d9825b] font-light">
              &ldquo;{scene.lead}&rdquo;
            </p>
          )}

          {scene.body && scene.body.length > 0 && (
            <div className="space-y-3">
              {scene.body.map((paragraph, idx) => (
                <p key={idx} className="font-body text-sm sm:text-base text-[#9496a4] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Specimen / Visual Box */}
        <div className="relative rounded border border-[#1e202b] bg-[#121318] p-6 space-y-4 shadow-lg overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#1e202b] pb-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#a8abbf]">
              {scene.visual?.alt || "Archival Observation"}
            </span>
            <MonoLabel variant="accent" size="xs">
              Record
            </MonoLabel>
          </div>

          <div className="min-h-[160px] flex items-center justify-center bg-[#0a0b0e] rounded p-4 text-center border border-[#1a1b24]">
            <p className="font-mono text-xs text-[#717485]">
              {scene.visual?.caption || "[Split Scene Visual / Architectural Specimen]"}
            </p>
          </div>

          {scene.metadata?.date && (
            <div className="flex justify-between items-center text-[10px] font-mono text-[#5e6171] pt-1">
              <span>REF // {scene.id}</span>
              <span>{scene.metadata.date}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
