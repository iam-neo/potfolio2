"use client";

import { useSyncExternalStore } from "react";

/**
 * Reusable hook to evaluate responsive CSS media queries.
 * Uses useSyncExternalStore for optimal React 19 performance and SSR safety.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = (onStoreChange: () => void) => {
    const mediaQuery = window.matchMedia(query);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", onStoreChange);
      return () => mediaQuery.removeEventListener("change", onStoreChange);
    } else {
      mediaQuery.addListener(onStoreChange);
      return () => mediaQuery.removeListener(onStoreChange);
    }
  };

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => {
    return false;
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
