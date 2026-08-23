import React from "react";
import { Search, Building2, PhoneCall, Code2 } from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";

/**
 * MinorProjectArchitectureSpecimen:
 * Clean architectural specimen showing the bounded 5th-semester Minor Project
 * (Course search -> Institution profile -> Verified contact info in Core PHP/MySQL).
 */
export function MinorProjectArchitectureSpecimen() {
  const steps = [
    {
      step: "01",
      icon: Search,
      label: "Course Search",
      desc: "Filter vocational & degree courses across regions",
    },
    {
      step: "02",
      icon: Building2,
      label: "Institution Directory",
      desc: "Structured profile and academic stream details",
    },
    {
      step: "03",
      icon: PhoneCall,
      label: "Contact Access",
      desc: "Direct telephone and location information for inquiries",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-[#1e202b] pb-2.5">
        <div className="flex items-center gap-2 text-[#d9825b]">
          <Code2 className="w-3.5 h-3.5" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold">
            Minor Project Scope
          </span>
        </div>
        <MonoLabel variant="muted" size="xs">
          Core PHP + MySQL
        </MonoLabel>
      </div>

      <div className="space-y-2">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.step}
              className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] flex items-center gap-3.5"
            >
              <span className="font-mono text-[10px] text-[#5e6171] w-4 shrink-0">
                {s.step}
              </span>
              <div className="p-2 rounded bg-[#14151c] text-[#d9825b] shrink-0">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="space-y-0.5 flex-1 min-w-0">
                <span className="font-mono text-xs font-bold text-[#f0f0f4] block truncate">
                  {s.label}
                </span>
                <p className="font-mono text-[10px] text-[#8e91a2] leading-tight">
                  {s.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
        <span>Constraint</span>
        <span className="text-[#d9825b]">Read-Only Directory // No Framework</span>
      </div>
    </div>
  );
}
