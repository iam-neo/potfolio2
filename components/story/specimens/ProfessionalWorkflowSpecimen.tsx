import React from "react";
import { Users, User, ArrowDown, Code2, Workflow, Layers } from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";

/**
 * ProfessionalWorkflowSpecimen:
 * Layered architectural diagram showing Neo working alongside Senior Developers
 * on real company software projects.
 */
export function ProfessionalWorkflowSpecimen() {
  const layers = [
    {
      level: "Tier 01",
      role: "Neo (Intern)",
      desc: "Bringing existing foundation in PHP, C#, databases, and systems to company tasks.",
      icon: User,
      highlight: false,
    },
    {
      level: "Tier 02",
      role: "Senior Developers",
      desc: "Providing professional context, architectural standards, and guidance on project scope.",
      icon: Users,
      highlight: true,
    },
    {
      level: "Tier 03",
      role: "Company Software Projects",
      desc: "Building practical web applications and system modules using PHP & Laravel.",
      icon: Workflow,
      highlight: false,
    },
    {
      level: "Tier 04",
      role: "Implementation & Delivery",
      desc: "Developing assigned features and standalone project modules individually for the company.",
      icon: Code2,
      highlight: false,
    },
    {
      level: "Tier 05",
      role: "Cumulative Practical Knowledge",
      desc: "Understanding the distinction between isolated student code and professional engineering.",
      icon: Layers,
      highlight: true,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1e202b] pb-2.5">
        <div className="flex items-center gap-2 text-[#d9825b]">
          <Workflow className="w-3.5 h-3.5" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold">
            Professional Collaboration Model
          </span>
        </div>
        <MonoLabel variant="muted" size="xs">
          Team Dynamics
        </MonoLabel>
      </div>

      {/* Layered Stack */}
      <div className="space-y-2">
        {layers.map((l, idx) => {
          const Icon = l.icon;
          return (
            <div key={l.level} className="space-y-1.5">
              <div
                className={`p-2.5 rounded border transition-colors ${
                  l.highlight
                    ? "bg-[#161722] border-[#252838]"
                    : "bg-[#0a0b0e] border-[#1e202b]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#5e6171]">
                      {l.level}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#d9825b]" />
                      <span className="font-mono text-xs font-semibold text-[#f0f0f4]">
                        {l.role}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="font-mono text-[10px] text-[#8e91a2] leading-relaxed mt-1">
                  {l.desc}
                </p>
              </div>

              {idx < layers.length - 1 && (
                <div className="flex justify-center my-0.5">
                  <ArrowDown className="w-3 h-3 text-[#3a3d4d]" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Rule */}
      <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
        <span>Environment Shift</span>
        <span className="text-[#d9825b]">Isolated Coding → Team Context</span>
      </div>
    </div>
  );
}
