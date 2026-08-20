import React from "react";
import { StoryScene, SceneActivation } from "@/types/story";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Disc, HelpCircle, Power, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SplitSceneProps {
  scene: StoryScene;
  activation: SceneActivation;
  className?: string;
}

export function SplitScene({ scene, activation, className }: SplitSceneProps) {
  const isLeaving = activation === "leaving";
  const isEntering = activation === "entering";

  // Helper to render contextual visual specimen content based on scene ID
  const renderSpecimenContent = () => {
    // 1. Try -> Break -> Understand -> Fix Cycle for Class 8 Scene
    if (scene.id === "scene-01-class-8-first-laptop") {
      const steps = [
        { num: "01", label: "TRY", desc: "Exploring new controls and settings" },
        { num: "02", label: "BREAK", desc: "System errors, corrupted configs" },
        { num: "03", label: "UNDERSTAND", desc: "Tracing what caused the issue" },
        { num: "04", label: "FIX", desc: "Restoring and learning the solution" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <RotateCw className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              The Learning Loop
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#d9825b]">
                    {step.label}
                  </span>
                  <span className="font-mono text-[10px] text-[#5e6171]">
                    {step.num}
                  </span>
                </div>
                <p className="font-mono text-[10px] text-[#8e91a2] leading-tight">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Methodology</span>
            <span className="text-[#d9825b]">Self-Directed Repair</span>
          </div>
        </div>
      );
    }

    // 2. Class 5: First Contact Power Sequence
    if (scene.id === "scene-01-first-touch-class-5") {
      const sequence = [
        { step: "Step 1", title: "Cabinet Power Button", detail: "Main system power switch" },
        { step: "Step 2", title: "Keyboard Key Tap", detail: "Trigger boot prompt" },
        { step: "Step 3", title: "Initial Screen Life", detail: "First visual confirmation" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <Power className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              First Startup Sequence
            </span>
          </div>

          <div className="space-y-2">
            {sequence.map((item) => (
              <div
                key={item.step}
                className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] flex items-center justify-between gap-3"
              >
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] uppercase text-[#5e6171] block">
                    {item.step}
                  </span>
                  <span className="font-mono text-xs text-[#f0f0f4]">
                    {item.title}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#717485] text-right">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Instructor</span>
            <span className="text-[#d9825b]">Cousin Guidance</span>
          </div>
        </div>
      );
    }

    // 3. Unanswered Childhood Questions (Discs, Memory, Software)
    if (scene.id === "scene-01-unanswered-questions") {
      const questions = [
        { label: "CDs & DVDs", query: "How can a CD or DVD contain a movie or song?" },
        { label: "Memory & Storage", query: "Where does the information actually exist?" },
        { label: "Software & Logic", query: "How does a computer know what to do?" },
        { label: "Everyday Machines", query: "How do these devices actually work?" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Questions I Remember Having
            </span>
          </div>

          <div className="space-y-2">
            {questions.map((q) => (
              <div
                key={q.label}
                className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-1"
              >
                <div className="flex items-center gap-2">
                  <Disc className="w-3 h-3 text-[#5e6171]" />
                  <span className="font-mono text-xs font-semibold text-[#a8abbf]">
                    {q.label}
                  </span>
                </div>
                <p className="font-body text-xs text-[#8e91a2]">
                  {q.query}
                </p>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Context</span>
            <span className="text-[#9496a4]">No Technical Guidance Available</span>
          </div>
        </div>
      );
    }

    // Generic Default Fallback Specimen
    return (
      <div className="min-h-[160px] flex items-center justify-center bg-[#0a0b0e] rounded p-4 text-center border border-[#1a1b24]">
        <p className="font-mono text-xs text-[#717485]">
          {scene.visual?.caption || "[Archival Observation]"}
        </p>
      </div>
    );
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-5xl mx-auto py-16 sm:py-24 px-4 sm:px-6 transition-all duration-700 ease-out",
        isLeaving ? "opacity-40" : isEntering ? "opacity-70" : "opacity-100",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Column: Narrative */}
        <div className="space-y-5">
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

          {scene.lead && (
            <p className="font-display italic text-base sm:text-lg text-[#d9825b] font-light">
              {scene.lead}
            </p>
          )}

          {scene.body && scene.body.length > 0 && (
            <div className="space-y-3">
              {scene.body.map((paragraph, idx) => (
                <p key={idx} className="font-body text-sm sm:text-base text-[#9496a4] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Specimen / Visual Box */}
        <div className="relative rounded border border-[#1e202b] bg-[#121318] p-6 space-y-4 shadow-lg overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#1e202b] pb-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#a8abbf]">
              {scene.visual?.alt || "Observation Record"}
            </span>
            <MonoLabel variant="accent" size="xs">
              Record
            </MonoLabel>
          </div>

          {renderSpecimenContent()}

          {scene.metadata?.date && (
            <div className="flex justify-between items-center text-[10px] font-mono text-[#5e6171] pt-1 border-t border-[#1e202b]/40">
              <span>REF // {scene.id}</span>
              <span>{scene.metadata.date}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
