import React from "react";
import { ArrowRight, Layers, ArrowDown } from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";

/**
 * SystemEvolutionSpecimen:
 * Visual comparison showing the architectural evolution from the Minor Project
 * (passive lookup) to the Major Project (active two-sided admissions workflow).
 */
export function SystemEvolutionSpecimen() {
  const minorSteps = ["Student", "Search Directory", "Institution Info", "Contact Details"];
  const majorSteps = [
    "Student Account",
    "Course Discovery",
    "Online Application",
    "Institution Review",
    "Direct Decision & Contact",
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-[#1e202b] pb-2.5">
        <div className="flex items-center gap-2 text-[#d9825b]">
          <Layers className="w-3.5 h-3.5" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold">
            Architectural Evolution
          </span>
        </div>
        <MonoLabel variant="muted" size="xs">
          Minor → Major
        </MonoLabel>
      </div>

      {/* Minor Project Architecture */}
      <div className="p-3.5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-[#5e6171] uppercase tracking-wider">
            Phase 1: Minor Project (5th Sem)
          </span>
          <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#14151c] text-[#717485] border border-[#1e202b]">
            Passive Directory
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[#a8abbf]">
          {minorSteps.map((step, idx) => (
            <React.Fragment key={step}>
              <span className="px-2 py-1 rounded bg-[#121318] border border-[#1e202b] text-[11px]">
                {step}
              </span>
              {idx < minorSteps.length - 1 && (
                <ArrowRight className="w-3 h-3 text-[#3c4054] shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Downward Evolution Indicator */}
      <div className="flex items-center justify-center gap-2 text-[#5e6171]">
        <ArrowDown className="w-3.5 h-3.5 text-[#d9825b]" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#d9825b]">
          Scope Expansion
        </span>
      </div>

      {/* Major Project Architecture */}
      <div className="p-3.5 rounded bg-[#0e1017] border border-[#2a2c3a] space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-[#d9825b] uppercase tracking-wider font-semibold">
            Phase 2: Major Project (6th Sem)
          </span>
          <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#251b14] text-[#e09673] border border-[#482c1e]">
            Two-Sided Platform
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[#f0f0f4]">
          {majorSteps.map((step, idx) => (
            <React.Fragment key={step}>
              <span className="px-2 py-1 rounded bg-[#181a24] border border-[#2e3244] text-[11px] font-medium">
                {step}
              </span>
              {idx < majorSteps.length - 1 && (
                <ArrowRight className="w-3 h-3 text-[#d9825b] shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
        <span>Transformation</span>
        <span className="text-[#d9825b]">Lookup Directory → Application Platform</span>
      </div>
    </div>
  );
}
