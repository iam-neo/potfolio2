import React from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Selected Work & Systems",
  description: "Chronological archive of software projects, applications, and engineering milestones.",
};

export default function WorkIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20 lg:px-8 space-y-12">
      {/* Top Header */}
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9496a4] hover:text-[#f0f0f4] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Story Home</span>
        </Link>
        <h1 className="text-display-hero text-[#f0f0f4]">
          Selected Work
        </h1>
        <p className="font-body text-base text-[#9496a4] max-w-xl">
          An archival index of software projects, applications, and engineering milestones built across different eras.
        </p>
      </div>

      {/* Projects List */}
      <div className="divide-y divide-[#1e202b] border-y border-[#1e202b]">
        {PROJECTS_DATA.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 transition-colors hover:bg-[#121318]/50 px-2 rounded-sm"
          >
            <div className="space-y-1 max-w-xl">
              <div className="flex items-center gap-2">
                <h2 className="font-display text-xl sm:text-2xl text-[#f0f0f4] group-hover:text-[#d9825b] transition-colors">
                  {project.title}
                </h2>
                <ArrowUpRight className="w-4 h-4 text-[#5e6171] opacity-0 group-hover:opacity-100 group-hover:text-[#d9825b] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="font-body text-xs sm:text-sm text-[#9496a4]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] text-[#717485] bg-[#14151c] px-2 py-0.5 rounded border border-[#1e202b]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
              <MonoLabel variant="accent" size="xs">
                {project.year}
              </MonoLabel>
              <span className="font-mono text-[11px] text-[#5e6171]">
                {project.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
