"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ProgressBar() {
  const progress = useScrollProgress();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent"
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Story Reading Progress"
    >
      <div
        className="h-full bg-gradient-to-r from-[#d9825b] via-[#e89b78] to-[#d9825b] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(217,130,91,0.4)]"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
