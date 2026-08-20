import React, { useState } from "react";
import Image from "next/image";
import { StoryScene, SceneActivation } from "@/types/story";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImageSceneProps {
  scene: StoryScene;
  activation: SceneActivation;
  className?: string;
}

export function ImageScene({ scene, activation, className }: ImageSceneProps) {
  const [hasError, setHasError] = useState(false);
  const isLeaving = activation === "leaving";
  const isEntering = activation === "entering";

  return (
    <div
      className={cn(
        "relative w-full max-w-4xl mx-auto py-16 sm:py-24 px-4 sm:px-6 space-y-6 transition-all duration-700 ease-out",
        isLeaving ? "opacity-40" : isEntering ? "opacity-70" : "opacity-100",
        className
      )}
    >
      <div className="space-y-3 text-center sm:text-left">
        {scene.metadata?.context && (
          <MonoLabel variant="muted" size="xs">
            {scene.metadata.context}
          </MonoLabel>
        )}
        {scene.title && (
          <h3 className="font-display text-2xl sm:text-3xl text-[#f0f0f4]">
            {scene.title}
          </h3>
        )}
      </div>

      {/* Image Container with Fallback */}
      <div className="relative w-full rounded border border-[#1e202b] bg-[#121318] overflow-hidden">
        {scene.visual?.src && !hasError ? (
          <div className="relative aspect-video w-full bg-[#0a0b0e]">
            <Image
              src={scene.visual.src}
              alt={scene.visual.alt || scene.title || "Story visual"}
              fill
              className="object-cover"
              onError={() => setHasError(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            />
          </div>
        ) : (
          <div className="aspect-video w-full flex flex-col items-center justify-center bg-[#0d0e13] p-6 text-center space-y-2">
            <ImageIcon className="w-8 h-8 text-[#3c3f52]" />
            <span className="font-mono text-xs text-[#a8abbf]">
              {scene.visual?.alt || "Visual Record"}
            </span>
            <span className="font-mono text-[11px] text-[#5e6171]">
              {hasError ? "Image placeholder (source unavailable)" : scene.visual?.caption || "Archival imagery placeholder"}
            </span>
          </div>
        )}

        {scene.visual?.caption && (
          <div className="p-3 bg-[#0e0f14] border-t border-[#1e202b] flex items-center justify-between text-[11px] font-mono text-[#717485]">
            <span>{scene.visual.caption}</span>
            {scene.metadata?.date && <span>{scene.metadata.date}</span>}
          </div>
        )}
      </div>

      {scene.body && scene.body.length > 0 && (
        <div className="space-y-3 pt-2">
          {scene.body.map((p, idx) => (
            <p key={idx} className="font-body text-base text-[#9496a4] leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
