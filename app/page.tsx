import React from "react";
import Link from "next/link";
import { Story } from "@/components/story/Story";
import { TEST_STORY_CHAPTERS } from "@/data/testStory";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SITE_METADATA } from "@/lib/constants";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen pb-32 film-grain">
      {/* Top Editorial Prologue & Engine Verification Banner */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#1e202b]/60">
        <div className="max-w-4xl mx-auto space-y-8 text-center sm:text-left">
          {/* Phase Badge */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <MonoLabel variant="accent" size="sm" dot>
              {SITE_METADATA.phase}
            </MonoLabel>
            <MonoLabel variant="default" size="sm">
              Experience Architecture Active
            </MonoLabel>
            <MonoLabel variant="muted" size="sm" className="hidden sm:inline-flex">
              Interactive Digital Documentary
            </MonoLabel>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-display-hero text-[#f0f0f4]">
              Story Engine & <br />
              <span className="italic text-[#d9825b] font-normal">Experience Architecture</span>
            </h1>
            <p className="font-body text-base sm:text-lg text-[#9496a4] max-w-2xl leading-relaxed">
              A flexible, scroll-driven storytelling engine built with centralized scene activation, IntersectionObserver lifecycle tracking, and non-blocking chapter navigation.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
            <MagneticButton>
              <a href="#story-container">
                <Button variant="primary" icon={<ArrowDown className="w-3.5 h-3.5" />}>
                  Enter Story Experience
                </Button>
              </a>
            </MagneticButton>
            <MagneticButton>
              <Link href="/work">
                <Button variant="outline" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Selected Work
                </Button>
              </Link>
            </MagneticButton>
          </div>

          {/* Engine Capability Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#1e202b]/40">
            <div className="p-3 rounded border border-[#1e202b] bg-[#121318]/50 space-y-1">
              <span className="font-mono text-[10px] text-[#5e6171] uppercase block">Engine</span>
              <span className="font-mono text-xs text-[#f0f0f4]">9 Scene Types</span>
            </div>
            <div className="p-3 rounded border border-[#1e202b] bg-[#121318]/50 space-y-1">
              <span className="font-mono text-[10px] text-[#5e6171] uppercase block">Observer</span>
              <span className="font-mono text-xs text-[#d9825b]">Lifecycle Tracking</span>
            </div>
            <div className="p-3 rounded border border-[#1e202b] bg-[#121318]/50 space-y-1">
              <span className="font-mono text-[10px] text-[#5e6171] uppercase block">Navigation</span>
              <span className="font-mono text-xs text-[#f0f0f4]">Accessible Drawer</span>
            </div>
            <div className="p-3 rounded border border-[#1e202b] bg-[#121318]/50 space-y-1">
              <span className="font-mono text-[10px] text-[#5e6171] uppercase block">3D WebGL</span>
              <span className="font-mono text-xs text-[#e09673]">Lazy Harness Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Engine Container */}
      <div className="w-full">
        <Story chapters={TEST_STORY_CHAPTERS} />
      </div>
    </div>
  );
}
