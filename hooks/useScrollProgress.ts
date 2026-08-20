"use client";

import { useSyncExternalStore } from "react";

/**
 * Tracks overall page scroll progress (0.0 to 1.0) with passive listeners
 * and useSyncExternalStore for optimal performance and SSR safety.
 */
export function useScrollProgress(): number {
  const subscribe = (onStoreChange: () => void) => {
    window.addEventListener("scroll", onStoreChange, { passive: true });
    window.addEventListener("resize", onStoreChange, { passive: true });
    return () => {
      window.removeEventListener("scroll", onStoreChange);
      window.removeEventListener("resize", onStoreChange);
    };
  };

  const getSnapshot = () => {
    if (typeof window === "undefined") return 0;
    const scrollY = window.scrollY || window.pageYOffset;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return 0;
    return Math.min(Math.max(scrollY / totalHeight, 0), 1);
  };

  const getServerSnapshot = () => 0;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
