"use client";

import React, { useState } from "react";
import { FileText, CalendarCheck, Clock, Layers, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

/**
 * ExamResponsibilityMap:
 * Interactive 4-tier examination coordination explorer documenting Neo's ~4-year tenure
 * as Exam Coordinator at Nepalgunj Technical College.
 */
export function ExamResponsibilityMap() {
  const [activeCategory, setActiveCategory] = useState<string>("internal");

  const examTiers = {
    internal: {
      id: "internal",
      num: "01",
      title: "Internal Examinations",
      scope: "Institutional Assessments",
      icon: FileText,
      summary: "Coordinating internal term-based evaluations and departmental testing throughout the academic cycle.",
      responsibilities: [
        "Scheduling internal evaluation periods across academic departments",
        "Coordinating question paper collections and seating allocations",
        "Ensuring smooth day-to-day conduct of internal college tests",
        "Assisting faculty and administrative staff with evaluation documentation",
      ],
      operationalNote: "Maintained consistent testing standards within the institution.",
    },
    final: {
      id: "final",
      num: "02",
      title: "Final Examinations",
      scope: "Term-Ending Assessments",
      icon: Award,
      summary: "Managing comprehensive final evaluations marking the completion of academic terms.",
      responsibilities: [
        "Organizing examination halls, seating arrangements, and invigilation rosters",
        "Overseeing secure collection and distribution of examination materials",
        "Resolving logistical or operational discrepancies during active test sessions",
        "Coordinating with administrative staff for result record archiving",
      ],
      operationalNote: "Required high logistical accuracy and operational discipline.",
    },
    semester: {
      id: "semester",
      num: "03",
      title: "Semester Examinations",
      scope: "Diploma Semester Cycles",
      icon: CalendarCheck,
      summary: "Coordinating recurring semester-based examination cycles for multi-year diploma programs.",
      responsibilities: [
        "Managing multi-department examination schedules across semester cohorts",
        "Coordinating student attendance verification and examination eligibility rosters",
        "Aligning room capacities with semester program enrollment figures",
        "Supporting cross-departmental administrative coordination",
      ],
      operationalNote: "Handled multi-cohort scheduling across technical curricula.",
    },
    yearly: {
      id: "yearly",
      num: "04",
      title: "Yearly Examinations",
      scope: "Annual Academic Cycles",
      icon: Clock,
      summary: "Coordinating annual examination schedules and long-cycle institutional testing routines.",
      responsibilities: [
        "Planning full-year institutional testing calendars with college administration",
        "Coordinating multi-day examination setups and support staff duties",
        "Ensuring operational readiness across computing labs and lecture halls",
        "Facilitating structured end-of-year record closures",
      ],
      operationalNote: "Ensured seamless execution of institutional yearly benchmarks.",
    },
  };

  const cur = examTiers[activeCategory as keyof typeof examTiers];
  const Icon = cur.icon;

  return (
    <div className="rounded border border-[#2a2c3a] bg-[#121318] p-6 space-y-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1e202b] pb-3">
        <div className="flex items-center gap-2">
          <CalendarCheck className="w-4 h-4 text-[#d9825b]" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#f0f0f4]">
            Exam Coordinator {"//"} Responsibility Scope
          </span>
        </div>
        <MonoLabel variant="accent" size="xs">
          ~4 Years &amp; Several Months
        </MonoLabel>
      </div>

      {/* Category Selection Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {Object.entries(examTiers).map(([key, item]) => {
          const ItemIcon = item.icon;
          const isSelected = activeCategory === key;
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={cn(
                "p-3 rounded border text-left space-y-1 transition-all cursor-pointer",
                isSelected
                  ? "bg-[#221711] border-[#d9825b]"
                  : "bg-[#0a0b0e] border-[#1e202b] hover:bg-[#141620]"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-[#5e6171]">
                  Tier {item.num}
                </span>
                <ItemIcon
                  className={cn(
                    "w-3.5 h-3.5",
                    isSelected ? "text-[#d9825b]" : "text-[#717485]"
                  )}
                />
              </div>
              <span
                className={cn(
                  "font-mono text-xs font-bold block truncate",
                  isSelected ? "text-[#f0f0f4]" : "text-[#8e91a2]"
                )}
              >
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Category Specimen Card */}
      <div className="p-5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#181a24] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-[#181a24] text-[#d9825b]">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#5e6171] uppercase block">
                Category {cur.num}
              </span>
              <h4 className="font-display text-base text-[#f0f0f4]">
                {cur.title}
              </h4>
            </div>
          </div>
          <span className="font-mono text-[10px] text-[#d9825b] uppercase px-2 py-0.5 rounded bg-[#1f1612] border border-[#3d2417]">
            {cur.scope}
          </span>
        </div>

        <p className="font-body text-xs sm:text-sm text-[#9496a4] leading-relaxed">
          {cur.summary}
        </p>

        {/* Key Responsibilities */}
        <div className="space-y-1.5 pt-1">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#5e6171] block">
            Coordination Duties:
          </span>
          {cur.responsibilities.map((resp, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs font-mono text-[#a8abbf]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#d9825b] shrink-0 mt-0.5" />
              <span>{resp}</span>
            </div>
          ))}
        </div>

        {/* Operational Note */}
        <div className="p-2.5 rounded bg-[#121318] border border-[#1e202b] text-[11px] font-mono text-[#c4c7d7] flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#d9825b] shrink-0" />
          <span>{cur.operationalNote}</span>
        </div>
      </div>

      {/* Footer Rule */}
      <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
        <span>Institutional Role</span>
        <span className="text-[#d9825b]">Exam Coordinator // Nepalgunj Technical College</span>
      </div>
    </div>
  );
}
