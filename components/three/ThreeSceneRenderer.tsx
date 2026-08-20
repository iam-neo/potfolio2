"use client";

import React, { useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Box, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ThreeSceneRendererProps {
  sceneId: string;
  active: boolean;
  className?: string;
}

/**
 * ThreeSceneRenderer: Architecture harness for lazy-loading 3D WebGL scenes.
 * - Tracks mounting state when `active` triggers.
 * - Respects `prefers-reduced-motion` preferences.
 */
export function ThreeSceneRenderer({
  sceneId,
  active,
  className,
}: ThreeSceneRendererProps) {
  const prefersReducedMotion = useReducedMotion();
  const [hasBeenActive, setHasBeenActive] = useState(false);

  if (active && !hasBeenActive) {
    setHasBeenActive(true);
  }

  const isMounted = active || hasBeenActive;

  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[280px] flex items-center justify-center bg-[#0a0b0e] overflow-hidden transition-opacity duration-700",
        active ? "opacity-100" : "opacity-40",
        className
      )}
      data-scene-id={sceneId}
      data-scene-active={active}
      data-scene-mounted={isMounted}
    >
      {/* Background Matrix/Grid Ambience */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#1e202b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center space-y-3">
        <div className="p-3 rounded-full bg-[#181a24] border border-[#2e3244] text-[#d9825b]">
          {active ? (
            <Sparkles className="w-6 h-6 animate-pulse" />
          ) : (
            <Box className="w-6 h-6 text-[#5e6171]" />
          )}
        </div>

        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-widest text-[#f0f0f4] font-semibold block">
            Three.js WebGL Harness
          </span>
          <span className="font-mono text-[11px] text-[#9496a4] block">
            Scene Target: <code className="text-[#e09673]">{sceneId}</code>
          </span>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <span
            className={cn(
              "inline-flex items-center gap-1 font-mono text-[10px] uppercase px-2 py-0.5 rounded border",
              active
                ? "bg-[#251b14] text-[#e09673] border-[#482c1e]"
                : "bg-[#121318] text-[#5e6171] border-[#1e202b]"
            )}
          >
            {active ? "Active in Viewport" : "Standby (Lazy)"}
          </span>
          {prefersReducedMotion && (
            <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#161720] text-[#717485] border border-[#1e202b]">
              Static Motion Mode
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
