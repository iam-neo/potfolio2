"use client";

import React from "react";
import { useStoryEngine } from "./StoryContext";
import { cn } from "@/lib/utils";

export interface StoryProgressProps {
  className?: string;
}

/**
 * StoryProgress: Subtle editorial indicator showing current chapter title,
 * current scene indicator, and proportional story progress.
 */
export function StoryProgress({ className }: StoryProgressProps) {
  const { chapters, currentChapterId, overallProgress } = useStoryEngine();

  const currentChapter = chapters.find((c) => c.id === currentChapterId) || chapters[0];

  return (
    <aside
      aria-label="Story Progress"
      className={cn(
        "fixed bottom-6 left-6 z-30 hidden md:flex items-center gap-3 py-2 px-3.5 bg-[#101116]/90 backdrop-blur border border-[#1e202b] rounded-full shadow-2xl transition-all select-none",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#d9825b]" aria-hidden="true" />
        <span className="font-mono text-xs font-semibold text-[#f0f0f4]">
          CH {currentChapter?.number || "01"}
        </span>
        <span className="text-[#3c3f52]" aria-hidden="true">/</span>
        <span className="font-mono text-[11px] text-[#9496a4] max-w-[140px] truncate">
          {currentChapter?.title || "Story"}
        </span>
      </div>

      {/* Progress Track */}
      <div className="w-16 h-1 bg-[#1e202b] rounded-full overflow-hidden ml-1">
        <div
          className="h-full bg-gradient-to-r from-[#d9825b] to-[#e89b78] transition-all duration-300 ease-out"
          style={{ width: `${Math.max(overallProgress * 100, 5)}%` }}
        />
      </div>

      <span className="font-mono text-[10px] text-[#5e6171] pl-1">
        {Math.round(overallProgress * 100)}%
      </span>
    </aside>
  );
}
