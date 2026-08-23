import React from "react";
import { MapPin, Building, DollarSign, AlertCircle } from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";

/**
 * BusinessModelSpecimen:
 * Static archival card showing the proposed (never-launched) pricing model
 * and regional market context for the Online Enrollment System in Nepalgunj.
 */
export function BusinessModelSpecimen() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-[#1e202b] pb-2.5">
        <div className="flex items-center gap-2 text-[#d9825b]">
          <DollarSign className="w-3.5 h-3.5" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold">
            Proposed Business Model
          </span>
        </div>
        <MonoLabel variant="muted" size="xs">
          Unlaunched
        </MonoLabel>
      </div>

      {/* Regional Context */}
      <div className="p-3.5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-2">
        <div className="flex items-center gap-2 text-[#d9825b]">
          <MapPin className="w-3.5 h-3.5" />
          <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
            Initial Target Region
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-0.5">
          <span className="font-display text-base text-[#f0f0f4]">
            Nepalgunj
          </span>
          <span className="font-mono text-xs text-[#a8abbf] flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-[#5e6171]" />
            150–200+ colleges &amp; institutes (our estimate at the time)
          </span>
        </div>
      </div>

      {/* Pricing Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="p-3.5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-1.5">
          <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#14151c] text-[#717485] border border-[#1e202b]">
            Option A
          </span>
          <div className="pt-1">
            <span className="font-mono text-lg font-bold text-[#d9825b]">
              Rs. 2,000
            </span>
            <span className="font-mono text-xs text-[#717485] ml-1">
              / month
            </span>
          </div>
          <p className="font-mono text-[10px] text-[#8e91a2] leading-tight">
            Monthly institutional presence and application intake.
          </p>
        </div>

        <div className="p-3.5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-1.5">
          <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#14151c] text-[#717485] border border-[#1e202b]">
            Option B
          </span>
          <div className="pt-1">
            <span className="font-mono text-lg font-bold text-[#d9825b]">
              Rs. 5,000
            </span>
            <span className="font-mono text-xs text-[#717485] ml-1">
              / year
            </span>
          </div>
          <p className="font-mono text-[10px] text-[#8e91a2] leading-tight">
            Annual subscription for full academic year representation.
          </p>
        </div>
      </div>

      {/* Factual Disclaimer */}
      <div className="p-3 rounded border border-[#2e2017] bg-[#1a1410] flex items-start gap-2.5">
        <AlertCircle className="w-3.5 h-3.5 text-[#d9825b] shrink-0 mt-0.5" />
        <p className="font-mono text-[10px] text-[#b89582] leading-relaxed">
          This was the pricing model we considered at the time. The platform was never commercially launched. No institutions were charged. No revenue was generated.
        </p>
      </div>
    </div>
  );
}
