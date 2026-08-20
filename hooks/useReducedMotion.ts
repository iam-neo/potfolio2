"use client";

import { useMediaQuery } from "./useMediaQuery";

/**
 * Hook to detect whether the user has requested reduced motion in their OS preferences.
 * Safe for Server-Side Rendering (SSR) and React 19 external store synchronization.
 */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
