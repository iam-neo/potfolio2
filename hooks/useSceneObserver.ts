"use client";

import { useEffect, useRef, useState } from "react";
import type { SceneActivation } from "@/types/story";

interface UseSceneObserverOptions {
  /** Threshold ratios for entering / active / leaving transitions. */
  thresholds?: number[];
  /** Root margin for the observer. */
  rootMargin?: string;
  /** Callback when activation changes. */
  onActivationChange?: (activation: SceneActivation) => void;
}

/**
 * Observes a single scene element and derives its SceneActivation state
 * (inactive → entering → active → leaving → inactive) using IntersectionObserver.
 *
 * Returns:
 * - ref: attach to the scene's root element
 * - activation: current lifecycle state
 * - ratio: raw intersection ratio (0..1)
 */
export function useSceneObserver(options: UseSceneObserverOptions = {}) {
  const {
    thresholds = [0, 0.15, 0.5, 0.85, 1],
    rootMargin = "0px 0px -10% 0px",
    onActivationChange,
  } = options;

  const ref = useRef<HTMLElement | null>(null);
  const [activation, setActivation] = useState<SceneActivation>("inactive");
  const [ratio, setRatio] = useState(0);
  const prevActivationRef = useRef<SceneActivation>("inactive");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        const r = entry.intersectionRatio;
        setRatio(r);

        let next: SceneActivation;
        if (!entry.isIntersecting || r === 0) {
          next = "inactive";
        } else if (r < 0.25) {
          // Determine direction: entering or leaving based on previous state
          next = prevActivationRef.current === "active" || prevActivationRef.current === "leaving"
            ? "leaving"
            : "entering";
        } else if (r >= 0.25 && r < 0.5) {
          next = prevActivationRef.current === "active" || prevActivationRef.current === "leaving"
            ? "leaving"
            : "entering";
        } else {
          next = "active";
        }

        if (next !== prevActivationRef.current) {
          prevActivationRef.current = next;
          setActivation(next);
          onActivationChange?.(next);
        }
      },
      { threshold: thresholds, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [thresholds, rootMargin, onActivationChange]);

  return { ref, activation, ratio };
}
