import React from "react";
import { StoryChapter } from "@/types/story";
import { Scene } from "./Scene";
import { StoryTransition } from "./StoryTransition";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

export interface ChapterProps {
  chapter: StoryChapter;
  isLast?: boolean;
  nextChapter?: StoryChapter;
  className?: string;
}

/**
 * Chapter component: Renders chapter prologue/header, list of child scenes,
 * and transition to the subsequent chapter.
 */
export function Chapter({
  chapter,
  isLast = false,
  nextChapter,
  className,
}: ChapterProps) {
  return (
    <article
      id={chapter.id}
      data-chapter-id={chapter.id}
      data-chapter-number={chapter.number}
      className={cn("relative w-full scroll-mt-16", className)}
    >
      {/* Chapter Editorial Header */}
      <header className="py-20 sm:py-32 px-4 sm:px-6 max-w-5xl mx-auto border-b border-[#1e202b]/60 space-y-6">
        <div className="flex items-center gap-3">
          <MonoLabel variant="accent" size="sm" dot>
            Chapter {chapter.number}
          </MonoLabel>
          <MonoLabel variant="muted" size="sm">
            {chapter.era}
          </MonoLabel>
        </div>

        <div className="space-y-3">
          <h2 className="text-display-hero text-[#f0f0f4]">
            {chapter.title}
          </h2>
          {chapter.subtitle && (
            <p className="font-display italic text-lg sm:text-2xl text-[#9496a4] font-light">
              {chapter.subtitle}
            </p>
          )}
        </div>

        {chapter.description && (
          <p className="font-body text-base sm:text-lg text-[#717485] max-w-2xl leading-relaxed pt-2">
            {chapter.description}
          </p>
        )}
      </header>

      {/* Chapter Scenes */}
      <div className="divide-y divide-[#1e202b]/30">
        {chapter.scenes.map((scene) => (
          <Scene key={scene.id} scene={scene} />
        ))}
      </div>

      {/* Chapter Transition */}
      {!isLast && (
        <StoryTransition
          fromChapter={`CH ${chapter.number}`}
          toChapter={nextChapter ? `CH ${nextChapter.number}: ${nextChapter.title}` : undefined}
        />
      )}
    </article>
  );
}
