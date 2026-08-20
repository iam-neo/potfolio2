import React from "react";
import { StoryScene, SceneActivation } from "@/types/story";
import { TextScene } from "./scenes/TextScene";
import { CinematicScene } from "./scenes/CinematicScene";
import { SplitScene } from "./scenes/SplitScene";
import { ImageScene } from "./scenes/ImageScene";
import { ArtifactScene } from "./scenes/ArtifactScene";
import { TimelineScene } from "./scenes/TimelineScene";
import { ProjectScene } from "./scenes/ProjectScene";
import { InteractiveScene } from "./scenes/InteractiveScene";
import { ThreeScene } from "./scenes/ThreeScene";
import { FallbackScene } from "./scenes/FallbackScene";

export interface SceneRendererProps {
  scene: StoryScene;
  activation: SceneActivation;
  className?: string;
}

/**
 * SceneRenderer: Central scene dispatcher that selects and renders the appropriate
 * component variant based on scene.type.
 */
export function SceneRenderer({ scene, activation, className }: SceneRendererProps) {
  switch (scene.type) {
    case "text":
      return <TextScene scene={scene} activation={activation} className={className} />;

    case "cinematic":
      return <CinematicScene scene={scene} activation={activation} className={className} />;

    case "split":
      return <SplitScene scene={scene} activation={activation} className={className} />;

    case "image":
      return <ImageScene scene={scene} activation={activation} className={className} />;

    case "artifact":
      return <ArtifactScene scene={scene} activation={activation} className={className} />;

    case "timeline":
      return <TimelineScene scene={scene} activation={activation} className={className} />;

    case "project":
      return <ProjectScene scene={scene} activation={activation} className={className} />;

    case "interactive":
      return <InteractiveScene scene={scene} activation={activation} className={className} />;

    case "three":
      return <ThreeScene scene={scene} activation={activation} className={className} />;

    default:
      return <FallbackScene scene={scene} activation={activation} className={className} />;
  }
}
