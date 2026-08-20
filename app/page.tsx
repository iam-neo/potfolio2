import React from "react";
import Link from "next/link";
import { Story } from "@/components/story/Story";
import { STORY_CHAPTERS } from "@/data/chapters";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SITE_METADATA } from "@/lib/constants";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen pb-32 film-grain">
      {/* Quiet Cinematic Editorial Opening */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 border-b border-[#1e202b]/40">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Phase Badge */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <MonoLabel variant="accent" size="sm" dot>
              {SITE_METADATA.phase}
            </MonoLabel>
            <MonoLabel variant="default" size="sm">
              Digital Documentary Archive
            </MonoLabel>
          </div>

          {/* Opening Statement */}
          <div className="space-y-4">
            <h1 className="text-display-hero text-[#f0f0f4]">
              Origin / <br />
              <span className="italic text-[#d9825b] font-normal">The Curiosity</span>
            </h1>
            <p className="font-body text-base sm:text-lg text-[#9496a4] max-w-xl mx-auto leading-relaxed">
              A chronological narrative of early contact with technology, unguided questions, self-directed experimentation, and the discovery of the internet.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <MagneticButton>
              <a href="#story-container">
                <Button variant="primary" icon={<ArrowDown className="w-3.5 h-3.5" />}>
                  Begin Narrative
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
        </div>
      </section>

      {/* The Story Container */}
      <div className="w-full">
        <Story chapters={STORY_CHAPTERS} />
      </div>
    </div>
  );
}
