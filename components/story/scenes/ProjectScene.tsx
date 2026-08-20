import React from "react";
import Link from "next/link";
import { StoryScene, SceneActivation } from "@/types/story";
import { PROJECTS_DATA } from "@/data/projects";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectSceneProps {
  scene: StoryScene;
  activation: SceneActivation;
  className?: string;
}

export function ProjectScene({ scene, activation, className }: ProjectSceneProps) {
  // Look up corresponding project data by chapterRef or slug matching
  const project = PROJECTS_DATA.find((p) => p.chapterRef === scene.chapterId) || PROJECTS_DATA[0];
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
      <div className="flex items-center gap-2">
        <MonoLabel variant="accent" size="xs" dot>
          Project Milestone
        </MonoLabel>
        <MonoLabel variant="muted" size="xs">
          {project?.year || "Archive"}
        </MonoLabel>
      </div>

      <div className="space-y-3">
        <h3 className="font-display text-2xl sm:text-3xl text-[#f0f0f4]">
          {scene.title || project?.title}
        </h3>
        {scene.lead && (
          <p className="font-display italic text-lg text-[#d9825b] font-light">
            &ldquo;{scene.lead}&rdquo;
          </p>
        )}
      </div>

      {/* Project Card */}
      {project && (
        <div className="rounded border border-[#1e202b] bg-[#121318] p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#1e202b] pb-4">
            <div>
              <h4 className="font-display text-xl text-[#f0f0f4]">
                {project.title}
              </h4>
              <p className="font-mono text-xs text-[#717485] pt-1">
                {project.category}
              </p>
            </div>
            <Link href={`/work/${project.slug}`}>
              <Button variant="outline" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                Case Study
              </Button>
            </Link>
          </div>

          <p className="font-body text-sm sm:text-base text-[#9496a4] leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] text-[#a8abbf] bg-[#181a22] px-2.5 py-1 rounded border border-[#222430]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
