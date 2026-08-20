"use client";

import React, { useState, useEffect, useRef } from "react";
import { useStoryEngine } from "./StoryContext";
import { Compass, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StoryNavigationProps {
  className?: string;
}

/**
 * StoryNavigation: An interactive story chapter drawer and index.
 * Accessible, keyboard friendly, closes with Escape key.
 */
export function StoryNavigation({ className }: StoryNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { chapters, currentChapterId, navigateToChapter } = useStoryEngine();
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSelectChapter = (chapterId: string) => {
    setIsOpen(false);
    navigateToChapter(chapterId);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className={cn("fixed bottom-6 right-6 z-30", className)}>
        <button
          ref={triggerRef}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-2 py-2 px-4 rounded-full bg-[#121318]/90 hover:bg-[#1a1b24] backdrop-blur border border-[#1e202b] hover:border-[#3c3f52] text-[#f0f0f4] shadow-2xl transition-all cursor-pointer focus-visible:outline-2"
          aria-expanded={isOpen}
          aria-controls="story-chapter-drawer"
          aria-label="Story Chapter Navigation"
        >
          <Compass className="w-4 h-4 text-[#d9825b]" />
          <span className="font-mono text-xs uppercase tracking-wider font-medium">
            Chapters
          </span>
        </button>
      </div>

      {/* Backdrop & Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            ref={drawerRef}
            id="story-chapter-drawer"
            className="w-full max-w-md h-full bg-[#0d0e13] border-l border-[#1e202b] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Chapter Index"
          >
            {/* Drawer Header */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#1e202b] pb-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#d9825b]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[#f0f0f4] font-semibold">
                    Story Index
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded text-[#9496a4] hover:text-[#f0f0f4] hover:bg-[#181a22] transition-colors focus-visible:outline-2 cursor-pointer"
                  aria-label="Close Chapter Index (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chapters List */}
              <div className="space-y-2">
                {chapters.map((chapter) => {
                  const isActive = chapter.id === currentChapterId;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => handleSelectChapter(chapter.id)}
                      className={cn(
                        "w-full text-left p-4 rounded border transition-all flex items-start justify-between gap-3 group cursor-pointer focus-visible:outline-2",
                        isActive
                          ? "bg-[#161720] border-[#382318] shadow-[0_0_15px_rgba(217,130,91,0.08)]"
                          : "bg-[#101116] border-[#1a1b24] hover:border-[#2e3244] hover:bg-[#14151c]"
                      )}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "font-mono text-xs font-bold",
                              isActive ? "text-[#d9825b]" : "text-[#5e6171] group-hover:text-[#a8abbf]"
                            )}
                          >
                            CH {chapter.number}
                          </span>
                          <span className="text-[#2a2c3a]" aria-hidden="true">•</span>
                          <span className="font-mono text-[10px] uppercase text-[#717485]">
                            {chapter.era}
                          </span>
                        </div>
                        <h4 className="font-display text-base text-[#f0f0f4] group-hover:text-[#d9825b] transition-colors">
                          {chapter.title}
                        </h4>
                      </div>

                      <ArrowRight
                        className={cn(
                          "w-4 h-4 shrink-0 transition-transform mt-1",
                          isActive
                            ? "text-[#d9825b] translate-x-0.5"
                            : "text-[#3c3f52] group-hover:text-[#a8abbf] group-hover:translate-x-0.5"
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="pt-6 border-t border-[#1e202b] flex items-center justify-between text-[11px] font-mono text-[#5e6171]">
              <span>Press ESC to close</span>
              <span>{chapters.length} Chapters</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
