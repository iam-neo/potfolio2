"use client";

import React, { Suspense } from "react";
import { cn } from "@/lib/utils";

export interface SceneCanvasProps {
  sceneId?: string;
  className?: string;
  fallback?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * SceneCanvas: Lightweight lazy mounting harness for future 3D/WebGL experiences.
 * In Phase 1, it renders a lightweight fallback container without bundling heavy Three.js runtimes.
 */
export function SceneCanvas({
  sceneId,
  className,
  fallback,
  children,
}: SceneCanvasProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden rounded border border-[#1e202b] bg-[#0d0e13]",
        className
      )}
      data-scene-id={sceneId}
    >
      <Suspense
        fallback={
          fallback || (
            <div className="flex items-center justify-center p-6 text-center">
              <span className="font-mono text-xs text-[#5e6171]">
                [Scene {sceneId || "Default"} — 3D Harness Ready]
              </span>
            </div>
          )
        }
      >
        {children || (
          <div className="flex flex-col items-center justify-center p-6 text-center space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9496a4]">
              WebGL Canvas Harness
            </span>
            <span className="font-mono text-[11px] text-[#5e6171]">
              Phase 7 Scene: {sceneId || "placeholder"}
            </span>
          </div>
        )}
      </Suspense>
    </div>
  );
}
