"use client";

import React, { useState } from "react";
import { Building2, Inbox, KeyRound, Megaphone, PhoneForwarded, ArrowRight } from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

/**
 * InstitutionResponseFlow:
 * Interactive two-sided system flow explaining how colleges & institutes
 * managed profiles, received applications, and contacted students in the Major Project.
 */
export function InstitutionResponseFlow() {
  const [activeTab, setActiveTab] = useState<string>("provisioning");

  const modules = [
    {
      id: "provisioning",
      label: "Account Provisioning",
      icon: KeyRound,
      badge: "Platform Control",
      title: "Company-Managed Account Creation",
      desc: "Colleges did not self-register online. To maintain authenticity and prevent fraudulent listings, institutional accounts were verified and created manually by the platform administration.",
      flow: "PLATFORM ADMIN → VERIFY INSTITUTION → CREATE CREDENTIALS → ISSUE ACCESS",
    },
    {
      id: "profile",
      label: "Profile Management",
      icon: Building2,
      badge: "Institutional Data",
      title: "Academic Programs & Offerings",
      desc: "Institution staff logged in to update course listings, admission intake capacities, tuition guidelines, faculty details, and campus facilities.",
      flow: "INSTITUTION PORTAL → UPDATE COURSES → SET SEAT QUOTAS → PUBLISH DIRECTORY",
    },
    {
      id: "promotion",
      label: "Program Promotion",
      icon: Megaphone,
      badge: "Visibility",
      title: "Digital Representation & Outreach",
      desc: "Institutions could highlight upcoming admission seasons, scholarship schemes, and newly accredited technical courses directly to students searching the portal.",
      flow: "PROMOTIONAL LISTINGS → CATEGORY HIGHLIGHTS → TARGETED STUDENT DISCOVERY",
    },
    {
      id: "inbox",
      label: "Application Inbox",
      icon: Inbox,
      badge: "Admissions Desk",
      title: "Reviewing Incoming Submissions",
      desc: "Admissions personnel received submitted student profiles in a structured inbox, examining applicant qualifications, SEE/+2 grades, and contact details.",
      flow: "STUDENT SUBMISSION → INBOX NOTIFICATION → APPLICANT REVIEW → EVALUATION",
    },
    {
      id: "outreach",
      label: "Decision & Outreach",
      icon: PhoneForwarded,
      badge: "Direct Contact",
      title: "Accepting & Contacting Students",
      desc: "The institution could mark an application as accepted or initiate direct telephone and email contact with the applicant for final enrollment steps.",
      flow: "STATUS: ACCEPTED → ACCESS CONTACT DETAILS → DIRECT ADMISSION CALL",
    },
  ];

  const current = modules.find((m) => m.id === activeTab) || modules[0];
  const Icon = current.icon;

  return (
    <div className="rounded border border-[#2a2c3a] bg-[#121318] p-6 space-y-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1e202b] pb-3">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-[#d9825b]" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#f0f0f4]">
            Major Project {"//"} Institution Operations
          </span>
        </div>
        <MonoLabel variant="accent" size="xs">
          Two-Sided Bridge
        </MonoLabel>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {modules.map((m) => {
          const TabIcon = m.icon;
          const isSelected = activeTab === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setActiveTab(m.id)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded font-mono text-xs transition-all cursor-pointer",
                isSelected
                  ? "bg-[#d9825b] text-[#0a0b0e] font-semibold"
                  : "bg-[#181a24] text-[#8e91a2] hover:bg-[#252838] hover:text-[#f0f0f4]"
              )}
            >
              <TabIcon className="w-3.5 h-3.5" />
              <span>{m.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Card */}
      <div className="p-5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#181a24] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-[#181a24] text-[#d9825b]">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#5e6171] uppercase block">
                {current.badge}
              </span>
              <h4 className="font-display text-base text-[#f0f0f4]">
                {current.title}
              </h4>
            </div>
          </div>
          <MonoLabel variant="muted" size="xs">
            Admin Controlled
          </MonoLabel>
        </div>

        <p className="font-body text-xs sm:text-sm text-[#9496a4] leading-relaxed">
          {current.desc}
        </p>

        <div className="p-2.5 rounded bg-[#121318] border border-[#1e202b] text-[11px] font-mono text-[#d9825b] flex items-center gap-1.5 flex-wrap">
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          <span>{current.flow}</span>
        </div>
      </div>

      {/* Two-Column Relationship Schematic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <div className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-1">
          <span className="font-mono text-[10px] text-[#5e6171] uppercase block">
            Student → Institution
          </span>
          <p className="font-mono text-xs text-[#f0f0f4]">
            Discovers Course → Submits Application Form
          </p>
        </div>
        <div className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-1">
          <span className="font-mono text-[10px] text-[#5e6171] uppercase block">
            Institution → Student
          </span>
          <p className="font-mono text-xs text-[#e09673]">
            Reviews Credentials → Accepts & Initiates Direct Contact
          </p>
        </div>
      </div>
    </div>
  );
}
