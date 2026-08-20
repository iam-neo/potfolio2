import React from "react";
import { ArrowDown } from "lucide-react";
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
        "py-24 sm:py-36 px-4 flex flex-col items-center justify-center text-center space-y-6",
        className
      )}
      aria-hidden="true"
    >
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#3c4054] to-transparent" />
      
      {fromChapter && (
        <div className="space-y-2 max-w-md">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#5e6171] block">
            End of {fromChapter}
          </span>
          {toChapter && (
            <div className="p-4 rounded border border-[#1e202b] bg-[#0e0f14] space-y-1">
              <span className="font-mono text-[10px] uppercase text-[#d9825b] block font-semibold">
                Up Next // Roadmap
              </span>
              <p className="font-display text-base text-[#f0f0f4]">
                {toChapter}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-2 text-[#3c4054]">
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </div>
  );
}
