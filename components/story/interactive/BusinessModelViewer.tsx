"use client";

import React, { useState } from "react";
import { DollarSign, MapPin, Building, AlertCircle, Sparkles } from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

/**
 * BusinessModelViewer:
 * Interactive archival card illustrating the original pricing concept
 * and regional market exploration in Nepalgunj (Unlaunched Concept).
 */
export function BusinessModelViewer() {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">("monthly");

  const plans = {
    monthly: {
      tier: "Monthly Representation",
      fee: "Rs. 2,000",
      period: "per month",
      scope: "Continuous Portal Presence & Application Intake",
      notes: "Lower barrier for smaller training institutes and private vocational centers.",
    },
    yearly: {
      tier: "Annual Subscription",
      fee: "Rs. 5,000",
      period: "per year",
      scope: "Full Academic Year Representation & Featured Promotion",
      notes: "Discounted annual commitment tailored for larger colleges and technical campuses.",
    },
  };

  const cur = plans[selectedPlan];

  return (
    <div className="rounded border border-[#2a2c3a] bg-[#121318] p-6 space-y-6 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1e202b] pb-3">
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-[#d9825b]" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#f0f0f4]">
            Exploratory Business Model {"//"} Regional Concept
          </span>
        </div>
        <MonoLabel variant="muted" size="xs">
          Original Idea (Unlaunched)
        </MonoLabel>
      </div>

      {/* Market Context Banner */}
      <div className="p-4 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <MapPin className="w-3.5 h-3.5" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider">
              Launch Territory
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#717485] uppercase">
            Initial Target
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-1">
          <span className="font-display text-lg text-[#f0f0f4]">
            Nepalgunj Regional Hub
          </span>
          <span className="font-mono text-xs text-[#a8abbf] flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-[#5e6171]" />
            150–200+ colleges & institutes (estimated at the time)
          </span>
        </div>
      </div>

      {/* Pricing Model Selector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-[#9496a4]">
            Considered Pricing Structure:
          </span>
          <div className="flex gap-1.5 p-1 rounded bg-[#0a0b0e] border border-[#1e202b]">
            <button
              onClick={() => setSelectedPlan("monthly")}
              className={cn(
                "px-3 py-1 rounded font-mono text-xs transition-colors cursor-pointer",
                selectedPlan === "monthly"
                  ? "bg-[#d9825b] text-[#0a0b0e] font-semibold"
                  : "text-[#8e91a2] hover:text-[#f0f0f4]"
              )}
            >
              Model A (Monthly)
            </button>
            <button
              onClick={() => setSelectedPlan("yearly")}
              className={cn(
                "px-3 py-1 rounded font-mono text-xs transition-colors cursor-pointer",
                selectedPlan === "yearly"
                  ? "bg-[#d9825b] text-[#0a0b0e] font-semibold"
                  : "text-[#8e91a2] hover:text-[#f0f0f4]"
              )}
            >
              Model B (Yearly)
            </button>
          </div>
        </div>

        {/* Selected Plan Specimen Card */}
        <div className="p-5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#181a24] pb-3">
            <div>
              <span className="font-mono text-[10px] text-[#5e6171] uppercase block">
                Plan Structure
              </span>
              <h4 className="font-display text-base text-[#f0f0f4]">
                {cur.tier}
              </h4>
            </div>
            <div className="text-left sm:text-right">
              <span className="font-mono text-xl font-bold text-[#d9825b]">
                {cur.fee}
              </span>
              <span className="font-mono text-xs text-[#717485] ml-1.5">
                {cur.period}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d9825b] shrink-0 mt-0.5" />
              <p className="font-mono text-xs text-[#a8abbf]">
                {cur.scope}
              </p>
            </div>
            <p className="font-body text-xs text-[#717485] pl-5 leading-relaxed">
              {cur.notes}
            </p>
          </div>
        </div>
      </div>

      {/* Factual Disclaimer Banner */}
      <div className="p-3.5 rounded border border-[#2e2017] bg-[#1a1410] flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-[#d9825b] shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#d9825b] font-semibold block">
            Archival Record Note
          </span>
          <p className="font-body text-xs text-[#b89582] leading-relaxed">
            This represents the business model and pricing structure considered by the team at the time. The software was fully completed as a Major Project, but the commercial service was never launched due to a lack of funding.
          </p>
        </div>
      </div>
    </div>
  );
}
