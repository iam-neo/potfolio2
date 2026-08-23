import React from "react";
import { Building2, Briefcase, Clock, Code2, ShieldAlert } from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";

/**
 * InternshipRecordSpecimen:
 * Restrained archival work record card documenting the paid internship at Ninja Infosys Pvt. Ltd.
 */
export function InternshipRecordSpecimen() {
  const record = [
    {
      label: "Organization",
      value: "Ninja Infosys Pvt. Ltd.",
      note: "Separate company from Ninja Software Service",
      icon: Building2,
    },
    {
      label: "Formal Position",
      value: "Paid Intern",
      note: "Professional software development role",
      icon: Briefcase,
    },
    {
      label: "Duration & Timing",
      value: "~6 Months",
      note: "Completed prior to 6th semester Diploma",
      icon: Clock,
    },
    {
      label: "Core Technologies",
      value: "PHP & Laravel Framework",
      note: "Relational databases & application architecture",
      icon: Code2,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1e202b] pb-2.5">
        <div className="flex items-center gap-2 text-[#d9825b]">
          <Briefcase className="w-3.5 h-3.5" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold">
            Work Record // Professional Internship
          </span>
        </div>
        <MonoLabel variant="accent" size="xs">
          Archival Record
        </MonoLabel>
      </div>

      {/* Primary Detail Rows */}
      <div className="space-y-2">
        {record.map((item) => {
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
                  {item.note}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Factual Integrity Distinction */}
      <div className="p-3 rounded border border-[#2e2017] bg-[#1a1410] flex items-start gap-2.5">
        <ShieldAlert className="w-3.5 h-3.5 text-[#d9825b] shrink-0 mt-0.5" />
        <p className="font-mono text-[10px] text-[#b89582] leading-relaxed">
          <span className="font-semibold text-[#d9825b]">Factual Distinction:</span> Ninja Software Service (4th Sem — Computer Instructor) and Ninja Infosys Pvt. Ltd. (Pre-6th Sem — Software Engineering Intern) were two separate organizational engagements.
        </p>
      </div>

      {/* Footer Rule */}
      <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
        <span>Employment Type</span>
        <span className="text-[#d9825b]">Paid Industry Internship</span>
      </div>
    </div>
  );
}
