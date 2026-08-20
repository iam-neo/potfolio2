import React from "react";
import { StoryScene, SceneActivation } from "@/types/story";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FallbackSceneProps {
  scene: StoryScene;
  activation: SceneActivation;
  className?: string;
}

export function FallbackScene({ scene, className }: FallbackSceneProps) {
  const isDev = process.env.NODE_ENV === "development";

  if (!isDev) {
    // In production, render basic text fallback gracefully without error badges
    return (
      <div className={cn("py-12 px-4 max-w-4xl mx-auto space-y-4", className)}>
        {scene.title && <h3 className="font-display text-2xl text-[#f0f0f4]">{scene.title}</h3>}
        {scene.body?.map((p, i) => (
          <p key={i} className="font-body text-base text-[#9496a4]">{p}</p>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("p-6 my-8 rounded border border-[#523318] bg-[#1c140d] max-w-4xl mx-auto space-y-3", className)}>
      <div className="flex items-center gap-2 text-[#e09673]">
        <AlertTriangle className="w-4 h-4 text-[#d9825b]" />
        <span className="font-mono text-xs uppercase tracking-wider font-semibold">
          Engine Fallback // Unsupported Scene Type: &quot;{scene.type}&quot;
        </span>
      </div>
      <p className="font-mono text-xs text-[#9496a4]">
        Scene ID: {scene.id} in Chapter: {scene.chapterId}
      </p>
      {scene.title && (
        <p className="font-display text-lg text-[#f0f0f4]">{scene.title}</p>
      )}
    </div>
  );
}
