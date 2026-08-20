import React from "react";
import { StoryScene } from "@/types/story";
import { cn } from "@/lib/utils";

export interface StorySectionProps {
  scene: StoryScene;
  className?: string;
}

export function StorySection({ scene, className }: StorySectionProps) {
  return (
    <section
      id={scene.id}
      data-scene-type={scene.type}
      className={cn(
        "relative min-h-[50vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12",
        className
      )}
    >
      <div className="mx-auto max-w-4xl space-y-4">
        {scene.title && (
          <h2 className="font-display text-2xl sm:text-3xl text-[#f0f0f4]">
            {scene.title}
          </h2>
        )}
        {scene.body && scene.body.map((paragraph, idx) => (
          <p key={idx} className="font-body text-base text-[#9496a4] leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
