import React from "react";
import { Shield, Users, Building2, Server } from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";

/**
 * SuperAdminHierarchySpecimen:
 * Three-tier system architecture specimen for the Major Project
 * (Super Admin -> Institutions [Company Provisioned] -> Students).
 */
export function SuperAdminHierarchySpecimen() {
  const tiers = [
    {
      tier: "TIER 01",
      role: "Super Admin",
      icon: Shield,
      badge: "Governance",
      color: "text-[#d9825b]",
      desc: "Centralized control, institution provisioning, system settings, and error resolution.",
    },
    {
      tier: "TIER 02",
      role: "Colleges & Institutes",
      icon: Building2,
      badge: "Managed Accounts",
      color: "text-[#a8abbf]",
      desc: "Company-provisioned accounts to update programs, receive applications, and contact students.",
    },
    {
      tier: "TIER 03",
      role: "Prospective Students",
      icon: Users,
      badge: "User Accounts",
      color: "text-[#9496a4]",
      desc: "Self-registered accounts to explore courses, maintain academic profiles, and submit applications.",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-[#1e202b] pb-2.5">
        <div className="flex items-center gap-2 text-[#d9825b]">
          <Server className="w-3.5 h-3.5" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold">
            Three-Tier Hierarchy
          </span>
        </div>
        <MonoLabel variant="accent" size="xs">
          Centralized Control
        </MonoLabel>
      </div>

      <div className="space-y-2">
        {tiers.map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.tier}
              className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-[#14151c] text-[#d9825b]">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#f0f0f4]">
                    {t.role}
                  </span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#14151c] text-[#717485] border border-[#1e202b]">
                  {t.badge}
                </span>
              </div>
              <p className="font-mono text-[10px] text-[#8e91a2] pl-8">
                {t.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
        <span>Security Rule</span>
        <span className="text-[#d9825b]">No Institution Self-Registration</span>
      </div>
    </div>
  );
}
