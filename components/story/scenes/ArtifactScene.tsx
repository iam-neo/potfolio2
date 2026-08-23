import React from "react";
import Image from "next/image";
import { StoryScene, SceneActivation } from "@/types/story";
import { getArtifactById } from "@/data/artifacts";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { FileText, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ArtifactSceneProps {
  scene: StoryScene;
  activation: SceneActivation;
  className?: string;
}

export function ArtifactScene({ scene, activation, className }: ArtifactSceneProps) {
  const artifact = scene.artifactId ? getArtifactById(scene.artifactId) : undefined;
  const isLeaving = activation === "leaving";
  const isEntering = activation === "entering";

  return (
    <div
      className={cn(
        "relative w-full max-w-4xl mx-auto py-16 sm:py-24 px-4 sm:px-6 space-y-8 transition-all duration-700 ease-out",
        isLeaving ? "opacity-40" : isEntering ? "opacity-70" : "opacity-100",
        className
      )}
    >
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <MonoLabel variant="accent" size="xs" dot>
            Artifact Archive
          </MonoLabel>
          <MonoLabel variant="muted" size="xs">
            {artifact?.year || scene.metadata?.date || "Record"}
          </MonoLabel>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl text-[#f0f0f4]">
          {scene.title || artifact?.title || "Archival Evidence"}
        </h3>
      </div>

      {/* Artifact Card Presentation */}
      <div className="rounded border border-[#2a2c3a] bg-[#121318] p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-[#1e202b] pb-4">
          <div className="flex items-center gap-2">
            {artifact?.type === "certificate" ? (
              <Award className="w-4 h-4 text-[#d9825b]" />
            ) : (
              <FileText className="w-4 h-4 text-[#a8abbf]" />
            )}
            <span className="font-mono text-xs uppercase tracking-wider text-[#f0f0f4]">
              {artifact?.title || "Archival Document"}
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#5e6171] uppercase">
            REF // {artifact?.id || scene.id}
          </span>
        </div>

        {artifact?.image ? (
          <div className="relative aspect-[4/3] sm:aspect-video w-full rounded border border-[#1e202b] bg-[#0a0b0e] overflow-hidden">
            <Image
              src={artifact.image}
              alt={artifact.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        ) : (
          <div className="aspect-[4/3] sm:aspect-video w-full rounded border border-dashed border-[#2a2c3a] bg-[#0a0b0e] flex flex-col items-center justify-center p-6 text-center space-y-2">
            <MonoLabel variant="accent" size="xs">
              REAL ARTIFACT — TO BE ADDED
            </MonoLabel>
            <p className="font-mono text-xs text-[#717485] max-w-sm">
              Archival physical specimen / original file pending digitization
            </p>
          </div>
        )}

        <div className="space-y-2">
          <p className="font-body text-sm sm:text-base text-[#9496a4] leading-relaxed">
            {artifact?.description || scene.body?.[0]}
          </p>
          {artifact?.caption && (
            <p className="font-mono text-xs text-[#717485] italic">
              Note: {artifact.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
