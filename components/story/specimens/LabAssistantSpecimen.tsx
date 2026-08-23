import React from "react";
import { Monitor, Building2, Wrench, Users, HelpCircle, ShieldCheck } from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";

/**
 * LabAssistantSpecimen:
 * Archival card representing Neo's initial transition into Nepalgunj Technical College
 * as a Computer Lab Assistant.
 */
export function LabAssistantSpecimen() {
  const facets = [
    {
      label: "Institution",
      value: "Nepalgunj Technical College",
      detail: "Technical and vocational education college in Nepalgunj",
      icon: Building2,
    },
    {
      label: "Initial Role",
      value: "Computer Lab Assistant",
      detail: "First formal engagement at the institution",
      icon: Monitor,
    },
    {
      label: "Lab Responsibilities",
      value: "Technical & Student Support",
      detail: "Maintaining workstations, assisting learners, supporting practical sessions",
      icon: Wrench,
    },
    {
      label: "Operational Context",
      value: "Educational Environment",
      detail: "Shift from building inside a software company to supporting learners",
      icon: Users,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1e202b] pb-2.5">
        <div className="flex items-center gap-2 text-[#d9825b]">
          <Monitor className="w-3.5 h-3.5" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold">
            Institutional Engagement Record
          </span>
        </div>
        <MonoLabel variant="accent" size="xs">
          College Lab
        </MonoLabel>
      </div>

      {/* Detail Rows */}
      <div className="space-y-2">
        {facets.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#5e6171] uppercase">
                  {item.label}
                </span>
                <Icon className="w-3.5 h-3.5 text-[#d9825b]" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#f0f0f4]">
                  {item.value}
                </span>
                <span className="font-mono text-[10px] text-[#8e91a2]">
                  {item.detail}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Note */}
      <div className="p-3 rounded border border-[#252838] bg-[#121318] flex items-start gap-2.5">
        <ShieldCheck className="w-3.5 h-3.5 text-[#d9825b] shrink-0 mt-0.5" />
        <p className="font-mono text-[10px] text-[#c4c7d7] leading-relaxed">
          The lab was a daily intersection of computing hardware, practical curriculum, and student problem-solving.
        </p>
      </div>

      {/* Footer Rule */}
      <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
        <span>Environment</span>
        <span className="text-[#d9825b]">Institutional Computing Lab</span>
      </div>
    </div>
  );
}
