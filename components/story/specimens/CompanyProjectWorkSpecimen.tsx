import React from "react";
import { FolderGit2, Code2, Database, Layers, UserCheck, ShieldCheck } from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";

/**
 * CompanyProjectWorkSpecimen:
 * Factual specimen card detailing the nature of software projects built
 * during the internship at Ninja Infosys, highlighting individual development assignments.
 */
export function CompanyProjectWorkSpecimen() {
  const facets = [
    {
      label: "Project Scope",
      tech: "Company Software Systems",
      detail: "Working on internal applications and company software solutions rather than academic prototypes.",
      icon: FolderGit2,
    },
    {
      label: "Backend Framework",
      tech: "PHP & Laravel",
      detail: "Building server-side routing, controllers, authentication, and structured business logic.",
      icon: Code2,
    },
    {
      label: "Data Layer",
      tech: "Relational Databases",
      detail: "Designing database tables, relational schemas, and managing query interactions.",
      icon: Database,
    },
    {
      label: "Individual Responsibility",
      tech: "Independent Implementation",
      detail: "Assigned specific projects to engineer end-to-end independently for the company.",
      icon: UserCheck,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1e202b] pb-2.5">
        <div className="flex items-center gap-2 text-[#d9825b]">
          <Layers className="w-3.5 h-3.5" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold">
            Company Project Scope
          </span>
        </div>
        <MonoLabel variant="accent" size="xs">
          Assigned Work
        </MonoLabel>
      </div>

      {/* Grid of Facets */}
      <div className="grid grid-cols-1 gap-2">
        {facets.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.label}
              className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-[#d9825b]" />
                  <span className="font-mono text-xs font-semibold text-[#f0f0f4]">
                    {f.label}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#d9825b] px-1.5 py-0.5 rounded bg-[#1e1511] border border-[#382318]">
                  {f.tech}
                </span>
              </div>
              <p className="font-mono text-[10px] text-[#8e91a2] leading-relaxed">
                {f.detail}
              </p>
            </div>
          );
        })}
      </div>

      {/* Narrative Statement Box */}
      <div className="p-3 rounded border border-[#252838] bg-[#121318] flex items-start gap-2.5">
        <ShieldCheck className="w-3.5 h-3.5 text-[#d9825b] shrink-0 mt-0.5" />
        <p className="font-mono text-[11px] text-[#c4c7d7] leading-relaxed italic">
          &ldquo;Some of the projects I worked on were mine to build individually for the company.&rdquo;
        </p>
      </div>

      {/* Footer Rule */}
      <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
        <span>Responsibility</span>
        <span className="text-[#d9825b]">Direct End-to-End Build Duties</span>
      </div>
    </div>
  );
}
