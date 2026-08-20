import React from "react";
import Link from "next/link";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ChapterIndicator } from "@/components/layout/ChapterIndicator";
import { PHASE_STATUS, SITE_METADATA } from "@/lib/constants";
import { STORY_CHAPTERS } from "@/data/chapters";
import { PROJECTS_DATA } from "@/data/projects";
import { ARTIFACTS_DATA } from "@/data/artifacts";
import {
  Layers,
  Palette,
  Type,
  FolderGit2,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] px-4 py-12 sm:px-6 md:py-20 lg:px-8 film-grain">
      <div className="mx-auto max-w-5xl space-y-16 sm:space-y-24">
        {/* Section 1: Hero Editorial / Phase 1 Status */}
        <section className="space-y-8 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <MonoLabel variant="accent" size="sm" dot>
              {SITE_METADATA.phase}
            </MonoLabel>
            <MonoLabel variant="default" size="sm">
              Architecture & Tokens Active
            </MonoLabel>
            <MonoLabel variant="muted" size="sm" className="hidden sm:inline-flex">
              Story Engine Next (Phase 2)
            </MonoLabel>
          </div>

          <div className="space-y-4">
            <h1 className="text-display-hero text-[#f0f0f4]">
              Story Experience <br />
              <span className="italic text-[#d9825b] font-normal">Foundation</span>
            </h1>
            <p className="max-w-2xl font-body text-base sm:text-lg text-[#9496a4] leading-relaxed">
              Technical foundation, architecture, design tokens, and typed data schemas initialized for the forthcoming chronological narrative portfolio.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
            <MagneticButton>
              <Link href="/work">
                <Button variant="primary" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Inspect Work Routes
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a href="#design-system">
                <Button variant="outline">
                  View Design Tokens
                </Button>
              </a>
            </MagneticButton>
          </div>
        </section>

        {/* Section 2: Phase Roadmap & Architecture Status */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#1e202b] pb-4">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#d9825b]" />
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#f0f0f4]">
                7-Phase Architecture Roadmap
              </h2>
            </div>
            <span className="font-mono text-[11px] text-[#5e6171]">
              Phase 1 of 7 In Progress
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PHASE_STATUS.map((phase) => {
              const isCurrent = phase.id === 1;
              return (
                <div
                  key={phase.id}
                  className={`relative p-5 rounded border transition-all ${
                    isCurrent
                      ? "bg-[#14151c] border-[#382318] shadow-[0_0_20px_rgba(217,130,91,0.06)]"
                      : "bg-[#0d0e13] border-[#1a1b24] opacity-75"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#a8abbf]">
                        0{phase.id}
                      </span>
                      <span className="text-[#3c3f52]">/</span>
                      <h3 className="font-mono text-xs font-semibold text-[#f0f0f4]">
                        {phase.name}
                      </h3>
                    </div>
                    {isCurrent ? (
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[#e09673] bg-[#251b14] px-2 py-0.5 rounded border border-[#482c1e]">
                        <CheckCircle2 className="w-3 h-3 text-[#d9825b]" />
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[#5e6171]">
                        <Clock className="w-3 h-3 text-[#5e6171]" />
                        Queued
                      </span>
                    )}
                  </div>
                  <p className="font-body text-xs text-[#9496a4] leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Story Data Schemas & Chapter Outline Preview */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#1e202b] pb-4">
            <div className="flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-[#d9825b]" />
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#f0f0f4]">
                Chronological Narrative Structure
              </h2>
            </div>
            <span className="font-mono text-[11px] text-[#5e6171]">
              {STORY_CHAPTERS.length} Chapters Initialized
            </span>
          </div>

          <div className="flex justify-center sm:justify-start">
            <ChapterIndicator />
          </div>

          <div className="space-y-3">
            {STORY_CHAPTERS.map((chapter) => (
              <div
                key={chapter.id}
                className="p-4 sm:p-5 rounded border border-[#1e202b] bg-[#0f1015] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#d9825b]">
                      CH {chapter.number}
                    </span>
                    <h3 className="font-display text-lg text-[#f0f0f4]">
                      {chapter.title}
                    </h3>
                  </div>
                  <p className="font-body text-xs text-[#9496a4]">
                    {chapter.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <MonoLabel variant="muted" size="xs">
                    {chapter.era}
                  </MonoLabel>
                  <MonoLabel variant="subtle" size="xs">
                    {chapter.scenes.length} scene(s)
                  </MonoLabel>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Design System Showcase (Tokens, Typography, UI Elements) */}
        <section id="design-system" className="space-y-8 pt-6">
          <div className="flex items-center justify-between border-b border-[#1e202b] pb-4">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#d9825b]" />
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#f0f0f4]">
                Design System & Typography Tokens
              </h2>
            </div>
            <MonoLabel variant="accent" size="xs">
              Dark Restrained
            </MonoLabel>
          </div>

          {/* Color Tokens Swatches */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            <div className="p-3 rounded border border-[#1e202b] bg-[#0a0b0e] space-y-2">
              <div className="w-full h-8 rounded bg-[#0a0b0e] border border-[#2a2c3a]" />
              <div className="font-mono text-[10px] text-[#9496a4]">bg-primary</div>
              <div className="font-mono text-[9px] text-[#5e6171]">#0a0b0e</div>
            </div>
            <div className="p-3 rounded border border-[#1e202b] bg-[#0a0b0e] space-y-2">
              <div className="w-full h-8 rounded bg-[#121318] border border-[#2a2c3a]" />
              <div className="font-mono text-[10px] text-[#9496a4]">bg-surface</div>
              <div className="font-mono text-[9px] text-[#5e6171]">#121318</div>
            </div>
            <div className="p-3 rounded border border-[#1e202b] bg-[#0a0b0e] space-y-2">
              <div className="w-full h-8 rounded bg-[#181a22] border border-[#2a2c3a]" />
              <div className="font-mono text-[10px] text-[#9496a4]">bg-raised</div>
              <div className="font-mono text-[9px] text-[#5e6171]">#181a22</div>
            </div>
            <div className="p-3 rounded border border-[#1e202b] bg-[#0a0b0e] space-y-2">
              <div className="w-full h-8 rounded bg-[#f0f0f4]" />
              <div className="font-mono text-[10px] text-[#9496a4]">text-primary</div>
              <div className="font-mono text-[9px] text-[#5e6171]">#f0f0f4</div>
            </div>
            <div className="p-3 rounded border border-[#1e202b] bg-[#0a0b0e] space-y-2">
              <div className="w-full h-8 rounded bg-[#9496a4]" />
              <div className="font-mono text-[10px] text-[#9496a4]">text-secondary</div>
              <div className="font-mono text-[9px] text-[#5e6171]">#9496a4</div>
            </div>
            <div className="p-3 rounded border border-[#1e202b] bg-[#0a0b0e] space-y-2">
              <div className="w-full h-8 rounded bg-[#d9825b]" />
              <div className="font-mono text-[10px] text-[#e09673]">accent (amber)</div>
              <div className="font-mono text-[9px] text-[#5e6171]">#d9825b</div>
            </div>
          </div>

          {/* Typography Specimens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded border border-[#1e202b] bg-[#0e0f14]">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Type className="w-3.5 h-3.5 text-[#d9825b]" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#a8abbf]">
                  Display (Newsreader)
                </span>
              </div>
              <p className="font-display text-2xl text-[#f0f0f4] italic">
                &ldquo;I&apos;ve always wanted to know how things work.&rdquo;
              </p>
              <p className="font-mono text-[10px] text-[#5e6171]">
                Role: Major emotional statements & scene titles
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Type className="w-3.5 h-3.5 text-[#9496a4]" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#a8abbf]">
                  Body (Inter)
                </span>
              </div>
              <p className="font-body text-sm text-[#9496a4] leading-relaxed">
                Before code, there was hardware disassembled on the floor. Readable, balanced typography engineered for long-form narrative pacing.
              </p>
              <p className="font-mono text-[10px] text-[#5e6171]">
                Role: Narrative paragraphs & descriptions
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Type className="w-3.5 h-3.5 text-[#9496a4]" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#a8abbf]">
                  Mono (JetBrains Mono)
                </span>
              </div>
              <div className="font-mono text-xs text-[#a8abbf] space-y-1">
                <div>CH_01 // 2026.08.20</div>
                <div>STATUS: VERIFIED</div>
                <div>PROJECTS: {PROJECTS_DATA.length} | ARTIFACTS: {ARTIFACTS_DATA.length}</div>
              </div>
              <p className="font-mono text-[10px] text-[#5e6171]">
                Role: Chapters, metadata, code, timestamps
              </p>
            </div>
          </div>

          {/* Interactive UI Element Verification */}
          <div className="p-6 rounded border border-[#1e202b] bg-[#0e0f14] space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d9825b]" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#a8abbf]">
                Component Foundation Verification
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" size="sm">Primary Button</Button>
              <Button variant="secondary" size="sm">Secondary Button</Button>
              <Button variant="outline" size="sm">Outline Button</Button>
              <Button variant="ghost" size="sm">Ghost Button</Button>
              <MonoLabel variant="default" size="sm">Default Tag</MonoLabel>
              <MonoLabel variant="accent" size="sm" dot>Active Tag</MonoLabel>
              <MonoLabel variant="muted" size="sm">Muted Tag</MonoLabel>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
