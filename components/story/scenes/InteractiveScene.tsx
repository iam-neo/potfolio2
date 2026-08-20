"use client";

import React, { useState } from "react";
import { StoryScene, SceneActivation } from "@/types/story";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { Sliders } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InteractiveSceneProps {
  scene: StoryScene;
  activation: SceneActivation;
  className?: string;
}

export function InteractiveScene({ scene, activation, className }: InteractiveSceneProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const isLeaving = activation === "leaving";
  const isEntering = activation === "entering";

  const perspectives = [
    { label: "Hardware", note: "Direct interaction with motherboards, jumpers, and soldering irons." },
    { label: "Software", note: "Writing algorithms line by line in low-resource environments." },
    { label: "Network", note: "The early dial-up handshake connecting local terminals to the world." },
  ];

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
          Interactive Specimen
        </MonoLabel>
        <MonoLabel variant="muted" size="xs">
          Touch / Click Enabled
        </MonoLabel>
      </div>

      <div className="space-y-2">
        <h3 className="font-display text-2xl sm:text-3xl text-[#f0f0f4]">
          {scene.title || "Interactive Inspection"}
        </h3>
        {scene.lead && (
          <p className="font-display italic text-base sm:text-lg text-[#d9825b] font-light">
            &ldquo;{scene.lead}&rdquo;
          </p>
        )}
      </div>

      {/* Interactive Exploration Box */}
      <div className="rounded border border-[#1e202b] bg-[#121318] p-6 space-y-5 shadow-xl">
        <div className="flex items-center justify-between border-b border-[#1e202b] pb-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#d9825b]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#f0f0f4]">
              Select Perspective
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#5e6171]">
            MODE // EXPLORE
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2">
          {perspectives.map((p, idx) => (
            <Button
              key={p.label}
              variant={activeTab === idx ? "primary" : "secondary"}
              size="sm"
              onClick={() => setActiveTab(idx)}
            >
              {p.label}
            </Button>
          ))}
        </div>

        {/* Dynamic Perspective Content */}
        <div className="p-4 rounded bg-[#0a0b0e] border border-[#1e202b] min-h-[90px] flex items-center">
          <p className="font-mono text-xs sm:text-sm text-[#e09673] leading-relaxed">
            &gt; {perspectives[activeTab].note}
          </p>
        </div>
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
