"use client";

import React, { useState } from "react";
import { useStoryEngine } from "./StoryContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Bug, ChevronDown, ChevronUp } from "lucide-react";

/**
 * StoryDebugOverlay: Development-only HUD showing active scene, chapter,
 * overall progress, and reduced-motion status.
 */
export function StoryDebugOverlay() {
  const [collapsed, setCollapsed] = useState(true);
  const { currentChapterId, currentSceneId, overallProgress, chapterProgress, sceneActivations } = useStoryEngine();
  const prefersReducedMotion = useReducedMotion();

  // Never render in production
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  const currentSceneActivation = currentSceneId ? sceneActivations.get(currentSceneId) || "inactive" : "inactive";

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 font-mono text-xs select-none">
      <div className="bg-[#0b0c10]/95 backdrop-blur-md border border-[#2e3244] rounded-lg shadow-2xl overflow-hidden transition-all">
        {/* Header Toggle */}
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="w-full flex items-center justify-between gap-4 px-3 py-1.5 bg-[#14151e] text-[#a8abbf] hover:text-[#f0f0f4] cursor-pointer"
        >
          <div className="flex items-center gap-1.5">
            <Bug className="w-3.5 h-3.5 text-[#d9825b]" />
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              Engine Debug HUD
            </span>
          </div>
          {collapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {/* Debug Content */}
        {!collapsed && (
          <div className="p-3 space-y-1.5 text-[11px] text-[#9496a4] divide-y divide-[#1e202b]">
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 pb-2">
              <div>Chapter: <span className="text-[#f0f0f4]">{currentChapterId || "none"}</span></div>
              <div>Scene: <span className="text-[#f0f0f4]">{currentSceneId || "none"}</span></div>
              <div>State: <span className="text-[#e09673]">{currentSceneActivation}</span></div>
              <div>Progress: <span className="text-[#d9825b]">{Math.round(overallProgress * 100)}%</span></div>
              <div>Chapter Prog: <span className="text-[#a8abbf]">{Math.round(chapterProgress * 100)}%</span></div>
              <div>Reduced Motion: <span className={prefersReducedMotion ? "text-[#d9825b]" : "text-[#5e6171]"}>{prefersReducedMotion ? "ON" : "OFF"}</span></div>
            </div>
            <div className="pt-1.5 text-[10px] text-[#5e6171] text-center">
              Active Observers: {sceneActivations.size}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
