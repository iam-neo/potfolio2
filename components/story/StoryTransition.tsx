import React from "react";
import { cn } from "@/lib/utils";

export interface StoryTransitionProps {
  fromChapter?: string;
  toChapter?: string;
  className?: string;
}

export function StoryTransition({
  fromChapter,
  toChapter,
  className,
}: StoryTransitionProps) {
  return (
    <div
      className={cn(
        "py-16 sm:py-24 flex items-center justify-center text-center",
        className
      )}
      aria-hidden="true"
    >
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#2a2c3a] to-transparent" />
      {fromChapter && toChapter && (
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#5e6171] px-4">
          {fromChapter} → {toChapter}
        </span>
      )}
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#2a2c3a] to-transparent" />
    </div>
  );
}
