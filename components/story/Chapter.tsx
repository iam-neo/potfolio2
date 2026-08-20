import React from "react";
import { StoryChapter } from "@/types/story";
import { StorySection } from "./StorySection";

export interface ChapterProps {
  chapter: StoryChapter;
  className?: string;
}

export function Chapter({ chapter, className }: ChapterProps) {
  return (
    <article
      id={chapter.id}
      data-chapter-number={chapter.number}
      className={className}
    >
      {chapter.scenes.map((scene) => (
        <StorySection key={scene.id} scene={scene} />
      ))}
    </article>
  );
}
