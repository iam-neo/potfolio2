export type SceneType =
  | "prologue"
  | "text"
  | "dialogue"
  | "artifact"
  | "project-reveal"
  | "turning-point"
  | "reflection"
  | "epilogue";

export interface SceneVisual {
  type: "image" | "document" | "video" | "code-snippet" | "three-scene";
  src?: string;
  alt?: string;
  caption?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/4" | "cinematic";
}

export interface StoryScene {
  id: string;
  chapterId: string;
  type: SceneType;
  title?: string;
  lead?: string;
  body?: string[];
  visual?: SceneVisual;
  artifactId?: string;
  threeSceneId?: string;
  metadata?: {
    date?: string;
    location?: string;
    context?: string;
  };
}

export interface StoryChapter {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description?: string;
  era: string;
  scenes: StoryScene[];
}
