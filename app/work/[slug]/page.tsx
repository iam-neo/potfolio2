import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS_DATA, getProjectBySlug } from "@/data/projects";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { ArrowLeft, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-20 lg:px-8 space-y-12">
      {/* Back Link */}
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9496a4] hover:text-[#f0f0f4] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to All Projects</span>
      </Link>

      {/* Case Study Header */}
      <header className="space-y-6 border-b border-[#1e202b] pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <MonoLabel variant="accent" size="xs">
            {project.year}
          </MonoLabel>
          <MonoLabel variant="default" size="xs">
            {project.category}
          </MonoLabel>
        </div>

        <h1 className="text-display-hero text-[#f0f0f4]">
          {project.title}
        </h1>

        <p className="font-body text-lg text-[#9496a4] leading-relaxed">
          {project.description}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
          <div className="p-3 rounded border border-[#1e202b] bg-[#121318]">
            <span className="font-mono text-[10px] uppercase text-[#5e6171] block mb-1">
              Role & Responsibility
            </span>
            <span className="font-mono text-xs text-[#f0f0f4]">
              {project.role || "Developer"}
            </span>
          </div>

          <div className="p-3 rounded border border-[#1e202b] bg-[#121318]">
            <span className="font-mono text-[10px] uppercase text-[#5e6171] block mb-1">
              Timeline Status
            </span>
            <span className="font-mono text-xs text-[#f0f0f4]">
              {project.year}
            </span>
          </div>

          <div className="p-3 rounded border border-[#1e202b] bg-[#121318]">
            <span className="font-mono text-[10px] uppercase text-[#5e6171] block mb-1">
              Key Outcome
            </span>
            <span className="font-mono text-xs text-[#e09673]">
              {project.outcome || "Production System"}
            </span>
          </div>
        </div>
      </header>

      {/* Technologies & Architecture */}
      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[#f0f0f4]">
          Technology Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-[#a8abbf] bg-[#14151c] px-3 py-1.5 rounded border border-[#1e202b]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Project Outcome / Status Box */}
      {project.outcome && (
        <section className="p-5 rounded border border-[#2e2017] bg-[#1a1410] flex items-start gap-3">
          <CheckCircle className="w-4 h-4 text-[#d9825b] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#e09673] font-semibold">
              Archival Milestone Note
            </span>
            <p className="font-body text-xs text-[#c4a491]">
              {project.outcome}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
