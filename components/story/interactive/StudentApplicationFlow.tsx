"use client";

import React, { useState } from "react";
import { UserPlus, Search, Building2, Send, ClockCheck, CheckCircle2 } from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

/**
 * StudentApplicationFlow:
 * Interactive step-by-step reconstruction of the Major Project student workflow.
 * (Account -> Search -> Select -> Submit -> Await Status).
 */
export function StudentApplicationFlow() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: "account",
      number: "01",
      title: "Create Account & Profile",
      icon: UserPlus,
      role: "Student Registration",
      desc: "Students registered their individual account, filling in basic academic background, contact details, and intended study preferences.",
      systemAction: "STORE: student_profiles (name, qualification, contact, preferences)",
    },
    {
      id: "search",
      number: "02",
      title: "Discover Courses & Training",
      icon: Search,
      role: "Course Search Engine",
      desc: "Filtering available courses across diploma, undergraduate, and technical training categories with localized search parameters.",
      systemAction: "QUERY: courses JOIN institutions ON course.inst_id = institution.id",
    },
    {
      id: "institution",
      number: "03",
      title: "Explore Institution Profile",
      icon: Building2,
      role: "Verified Directory",
      desc: "Reviewing college details, available seats, location, faculty information, and admission criteria.",
      systemAction: "FETCH: institutional_data, course_catalog, direct_contacts",
    },
    {
      id: "submit",
      number: "04",
      title: "Submit Online Application",
      icon: Send,
      role: "Direct Digital Dispatch",
      desc: "Submitting preliminary admission application directly through the portal without needing an in-person campus visit.",
      systemAction: "INSERT: applications (student_id, institution_id, course_id, status: 'pending')",
    },
    {
      id: "status",
      number: "05",
      title: "Admission Response Tracking",
      icon: ClockCheck,
      role: "Status Monitoring",
      desc: "Tracking whether the institution has reviewed, accepted, or initiated direct contact regarding the submitted application.",
      systemAction: "STATE: application.status ('reviewed' | 'accepted' | 'contacted')",
    },
  ];

  const current = steps[activeStep];
  const Icon = current.icon;

  return (
    <div className="rounded border border-[#2a2c3a] bg-[#121318] p-6 space-y-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1e202b] pb-3">
        <div className="flex items-center gap-2">
          <UserPlus className="w-4 h-4 text-[#d9825b]" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#f0f0f4]">
            Major Project {"//"} Student Application Pipeline
          </span>
        </div>
        <MonoLabel variant="muted" size="xs">
          Conceptual Reconstruction
        </MonoLabel>
      </div>

      {/* Step Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {steps.map((s, idx) => {
          const isSelected = activeStep === idx;
          return (
            <button
              key={s.id}
              onClick={() => setActiveStep(idx)}
              className={cn(
                "p-2.5 rounded border text-left space-y-1 transition-all cursor-pointer",
                isSelected
                  ? "bg-[#221711] border-[#d9825b]"
                  : "bg-[#0a0b0e] border-[#1e202b] hover:bg-[#141620]"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#5e6171]">
                  STEP {s.number}
                </span>
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    isSelected ? "bg-[#d9825b]" : "bg-transparent"
                  )}
                />
              </div>
              <p
                className={cn(
                  "font-mono text-[11px] font-semibold truncate",
                  isSelected ? "text-[#f0f0f4]" : "text-[#8e91a2]"
                )}
              >
                {s.title.split(" ")[0]} {s.title.split(" ")[1] || ""}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Step Details */}
      <div className="p-5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#181a24] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-[#181a24] text-[#d9825b]">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#5e6171] uppercase block">
                Step {current.number} {"//"} {current.role}
              </span>
              <h4 className="font-display text-base text-[#f0f0f4]">
                {current.title}
              </h4>
            </div>
          </div>
          <MonoLabel variant="accent" size="xs">
            Student Workflow
          </MonoLabel>
        </div>

        <p className="font-body text-xs sm:text-sm text-[#9496a4] leading-relaxed">
          {current.desc}
        </p>

        <div className="p-2.5 rounded bg-[#121318] border border-[#1e202b] text-[11px] font-mono text-[#d9825b]">
          &gt; {current.systemAction}
        </div>
      </div>

      {/* Footer Constraint Badge */}
      <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#d9825b]" />
          Platform Transformation
        </span>
        <span className="text-[#d9825b]">Passive Search → Active Application</span>
      </div>
    </div>
  );
}
