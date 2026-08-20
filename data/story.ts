import { STORY_CHAPTERS } from "./chapters";
import { StoryChapter, StoryScene } from "@/types/story";

export const getAllChapters = (): StoryChapter[] => {
  return STORY_CHAPTERS;
};

export const getChapterById = (id: string): StoryChapter | undefined => {
  return STORY_CHAPTERS.find((c) => c.id === id);
};

export const getAllScenes = (): StoryScene[] => {
  return STORY_CHAPTERS.flatMap((chapter) => chapter.scenes);
};

export const getTotalSceneCount = (): number => {
  return getAllScenes().length;
};
