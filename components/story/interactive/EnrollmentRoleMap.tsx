"use client";

import React, { useState } from "react";
import { Users, Building2, Shield, CheckCircle2, KeyRound, UserCheck, ShieldAlert } from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

/**
 * EnrollmentRoleMap:
 * Interactive 3-role system map illustrating the exact access boundaries
 * and operational workflows for Students, Provisioned Institutions, and Super Admin.
 */
export function EnrollmentRoleMap() {
  const [activeRole, setActiveRole] = useState<"student" | "institution" | "admin">("student");

  const roles = {
    student: {
      id: "student",
      title: "Student Account",
      badge: "Self-Registered",
      icon: Users,
      summary: "Prospective learners exploring post-SEE/+2 education tracks and submitting applications online.",
      accessControl: "Open registration: Students sign up with personal credentials.",
      capabilities: [
        "Create and maintain personal academic profile",
        "Search colleges and technical training programs by course or stream",
        "View comprehensive institutional details and admission requirements",
        "Submit digital application forms directly to selected institutions",
        "Track application status and connect with admissions offices",
      ],
      systemNote: "Eliminated the need for in-person campus visits just to pick up and submit inquiry forms.",
    },
    institution: {
      id: "institution",
      title: "Institution Account",
      badge: "Admin-Provisioned (No Self-Registration)",
      icon: Building2,
      summary: "Colleges and training institutes managing course offerings, promotion, and application review.",
      accessControl: "Restricted: Accounts were created and verified strictly by platform administrators.",
      capabilities: [
        "Receive administrative credentials issued by the platform",
        "Manage and update institutional profile, faculty, and facility details",
        "Publish and advertise accredited courses, intakes, and training programs",
        "Access structured inbox of incoming student applications",
        "Review applicant credentials and initiate direct contact with students",
      ],
      systemNote: "Prevented fraudulent institutional listings through centralized onboarding control.",
    },
    admin: {
      id: "admin",
      title: "Super Admin",
      badge: "System Governance",
      icon: Shield,
      summary: "Central platform administrators overseeing data integrity, institutional accounts, and system operations.",
      accessControl: "Root level: Full operational control across all database schemas and platform services.",
      capabilities: [
        "Verify and create institutional accounts with secure access tokens",
        "Manage global course taxonomy and institutional categories",
        "Monitor platform health, application pipelines, and data synchronization",
        "Correct institutional information and resolve technical discrepancies",
        "Maintain platform governance, moderation, and operational oversight",
      ],
      systemNote: "Ensured overall platform stability and authentic institutional data quality.",
    },
  };

  const cur = roles[activeRole];
  const Icon = cur.icon;

  return (
    <div className="rounded border border-[#2a2c3a] bg-[#121318] p-6 space-y-6 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1e202b] pb-3">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#d9825b]" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#f0f0f4]">
            Major Project {"//"} Three-Tier Role Architecture
          </span>
        </div>
        <MonoLabel variant="accent" size="xs">
          Role-Based Access
        </MonoLabel>
      </div>

      {/* Role Selection Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {(["student", "institution", "admin"] as const).map((key) => {
          const r = roles[key];
          const TabIcon = r.icon;
          const isSelected = activeRole === key;
          return (
            <button
              key={key}
              onClick={() => setActiveRole(key)}
              className={cn(
                "p-3 rounded border text-left space-y-1 transition-all cursor-pointer",
                isSelected
                  ? "bg-[#221711] border-[#d9825b]"
                  : "bg-[#0a0b0e] border-[#1e202b] hover:bg-[#141620]"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TabIcon
                    className={cn(
                      "w-4 h-4",
                      isSelected ? "text-[#d9825b]" : "text-[#5e6171]"
                    )}
                  />
                  <span
                    className={cn(
                      "font-mono text-xs font-bold",
                      isSelected ? "text-[#f0f0f4]" : "text-[#8e91a2]"
                    )}
                  >
                    {r.title}
                  </span>
                </div>
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    isSelected ? "bg-[#d9825b]" : "bg-transparent"
                  )}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Role Specimen Card */}
      <div className="p-5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#181a24] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-[#181a24] text-[#d9825b]">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#5e6171] uppercase block">
                Access Level
              </span>
              <h4 className="font-display text-base text-[#f0f0f4]">
                {cur.title}
              </h4>
            </div>
          </div>
          <span className="font-mono text-[10px] text-[#d9825b] uppercase px-2 py-0.5 rounded bg-[#1f1612] border border-[#3d2417]">
            {cur.badge}
          </span>
        </div>

        <p className="font-body text-xs sm:text-sm text-[#9496a4] leading-relaxed">
          {cur.summary}
        </p>

        {/* Capabilities Checklist */}
        <div className="space-y-2 pt-1">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#5e6171] block">
            System Capabilities:
          </span>
          <div className="space-y-1.5">
            {cur.capabilities.map((cap, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs font-mono text-[#f0f0f4]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d9825b] shrink-0 mt-0.5" />
                <span className="text-[#a8abbf]">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Rule Note */}
        <div className="p-2.5 rounded bg-[#121318] border border-[#1e202b] text-[11px] font-mono text-[#d9825b] flex items-center gap-2">
          {activeRole === "institution" ? (
            <KeyRound className="w-3.5 h-3.5 shrink-0" />
          ) : activeRole === "student" ? (
            <UserCheck className="w-3.5 h-3.5 shrink-0" />
          ) : (
            <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
          )}
          <span>{cur.accessControl}</span>
        </div>
      </div>

      {/* Footer Rule */}
      <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
        <span>Operational Model</span>
        <span className="text-[#d9825b]">Verified Onboarding // No Public Signups for Colleges</span>
      </div>
    </div>
  );
}
