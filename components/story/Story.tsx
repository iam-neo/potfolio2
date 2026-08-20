import React from "react";
import { StoryChapter } from "@/types/story";
import { Chapter } from "./Chapter";

export interface StoryProps {
  chapters: StoryChapter[];
  className?: string;
}

/**
 * Story component: Container for the sequential chapter flow.
 * In Phase 1, it provides the structural container for future scroll mechanics.
 */
export function Story({ chapters, className }: StoryProps) {
  return (
    <div className={className} id="story-container">
      {chapters.map((chapter) => (
        <Chapter key={chapter.id} chapter={chapter} />
      ))}
    </div>
  );
}
