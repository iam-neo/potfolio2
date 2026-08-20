"use client";

import React from "react";
import { STORY_CHAPTERS } from "@/data/chapters";
import { cn } from "@/lib/utils";

export interface ChapterIndicatorProps {
  currentChapterId?: string;
  className?: string;
  onSelectChapter?: (chapterId: string) => void;
}

export function ChapterIndicator({
  currentChapterId = "chapter-01",
  className,
  onSelectChapter,
}: ChapterIndicatorProps) {
  return (
    <nav
      aria-label="Story Chapters"
      className={cn(
        "flex items-center gap-3 py-2 px-3 bg-[#121318]/90 backdrop-blur border border-[#1e202b] rounded-full shadow-lg",
        className
      )}
    >
      <span className="font-mono text-[10px] uppercase tracking-widest text-[#5e6171] pl-1">
        Chapters
      </span>
      <div className="flex items-center gap-1.5" role="list">
        {STORY_CHAPTERS.map((chapter) => {
          const isActive = chapter.id === currentChapterId;
          return (
            <button
              key={chapter.id}
              onClick={() => onSelectChapter?.(chapter.id)}
              className={cn(
                "group relative flex items-center justify-center h-6 px-2 rounded-full font-mono text-[11px] transition-all cursor-pointer focus-visible:outline-2",
                isActive
                  ? "bg-[#251b14] text-[#e09673] border border-[#482c1e] font-semibold"
                  : "text-[#717485] hover:text-[#f0f0f4] hover:bg-[#181a22]"
              )}
              aria-current={isActive ? "step" : undefined}
              title={`${chapter.number}: ${chapter.title}`}
            >
              <span>{chapter.number}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
