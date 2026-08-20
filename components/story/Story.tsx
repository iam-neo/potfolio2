"use client";

import React from "react";
import { StoryChapter } from "@/types/story";
import { StoryProvider } from "./StoryContext";
import { Chapter } from "./Chapter";
import { StoryProgress } from "./StoryProgress";
import { StoryNavigation } from "./StoryNavigation";
import { StoryDebugOverlay } from "./StoryDebugOverlay";
import { cn } from "@/lib/utils";

export interface StoryProps {
  chapters: StoryChapter[];
  className?: string;
}

/**
 * Story component: Top-level story container wrapping chapter sequences
 * in StoryProvider and orchestrating progress, navigation, and debug tools.
 */
export function Story({ chapters, className }: StoryProps) {
  return (
    <StoryProvider chapters={chapters}>
      <div className={cn("relative w-full", className)} id="story-container">
        {/* Sequential Chapters */}
        <div className="space-y-0">
          {chapters.map((chapter, index) => (
            <Chapter
              key={chapter.id}
              chapter={chapter}
              isLast={index === chapters.length - 1}
              nextChapter={chapters[index + 1]}
            />
          ))}
        </div>

        {/* Global Story Navigation & Progress HUDs */}
        <StoryProgress />
        <StoryNavigation />
        <StoryDebugOverlay />
      </div>
    </StoryProvider>
  );
}
