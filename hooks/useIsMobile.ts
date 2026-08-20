"use client";

import { useMediaQuery } from "./useMediaQuery";

/**
 * Convenience hook to detect if the viewport is mobile width (< 768px).
 */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}
