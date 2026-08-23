import React from "react";
import { Sparkles, Terminal, Code2, Layers, Building2 } from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";

/**
 * ProfessionalTransitionSpecimen:
 * Visual progression establishing the cumulative technical foundation Neo had
 * developed before entering Ninja Infosys Pvt. Ltd. as a paid intern.
 */
export function ProfessionalTransitionSpecimen() {
  const progression = [
    {
      stage: "01",
      title: "Curiosity",
      tech: "Hardware & Operating Systems",
      detail: "First contact, CD inquiries, modem setups, and trial-and-error repair loops.",
      icon: Sparkles,
    },
    {
      stage: "02",
      title: "Experiments",
      tech: "C & Desktop Logic",
      detail: "Procedural programming, algorithms, first standalone prediction programs.",
      icon: Terminal,
    },
    {
      stage: "03",
      title: "Practical Projects",
      tech: "C# / Windows Forms / Web",
      detail: "Supermarket management desktop software, exhibition sprints, teaching fundamentals.",
      icon: Code2,
    },
    {
      stage: "04",
      title: "Academic Systems",
      tech: "Core PHP / MySQL",
      detail: "Online Enrollment System minor and major project architectures, relational databases.",
      icon: Layers,
    },
    {
      stage: "05",
      title: "Professional Environment",
      tech: "PHP / Laravel",
      detail: "Stepping inside Ninja Infosys Pvt. Ltd. alongside senior software engineers.",
      icon: Building2,
      active: true,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-[#1e202b] pb-2.5">
        <div className="flex items-center gap-2 text-[#d9825b]">
          <Layers className="w-3.5 h-3.5" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold">
            Cumulative Technical Progression
          </span>
        </div>
        <MonoLabel variant="accent" size="xs">
          Pre-Internship
        </MonoLabel>
      </div>

      <div className="space-y-2">
        {progression.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.stage}
              className={`p-2.5 rounded border transition-colors ${
                p.active
                  ? "bg-[#1f1712] border-[#d9825b]/60 shadow-sm"
                  : "bg-[#0a0b0e] border-[#1e202b]"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono text-[10px] ${
                      p.active ? "text-[#d9825b] font-bold" : "text-[#5e6171]"
                    }`}
                  >
                    {p.stage}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Icon
                      className={`w-3.5 h-3.5 ${
                        p.active ? "text-[#d9825b]" : "text-[#717485]"
                      }`}
                    />
                    <span
                      className={`font-mono text-xs font-semibold ${
                        p.active ? "text-[#f0f0f4]" : "text-[#a8abbf]"
                      }`}
                    >
                      {p.title}
                    </span>
                  </div>
                </div>
                <span
                  className={`font-mono text-[10px] ${
                    p.active ? "text-[#d9825b]" : "text-[#717485]"
                  }`}
                >
                  {p.tech}
                </span>
              </div>
              <p className="font-mono text-[10px] text-[#8e91a2] leading-relaxed mt-1 pl-6">
                {p.detail}
              </p>
            </div>
          );
        })}
      </div>

      <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
        <span>Foundation</span>
        <span className="text-[#d9825b]">Existing Experience Entering Industry</span>
      </div>
    </div>
  );
}
