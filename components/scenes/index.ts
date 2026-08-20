/**
 * Scene Components Registry
 * Scene implementations will be developed in Phases 3 through 6.
 */

export const SCENE_NAMES = [
  "Opening",
  "Origin",
  "Discovery",
  "Programming",
  "Projects",
  "Professional",
  "Present",
  "Ending",
] as const;

export type SceneName = (typeof SCENE_NAMES)[number];
