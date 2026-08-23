"use client";

import React, { useState } from "react";
import { StoryScene, SceneActivation } from "@/types/story";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { Sliders, Terminal, LayoutGrid, Users, Receipt, Truck, Settings2, Gamepad2, Globe, Monitor, Compass, Search, Building2, PhoneCall, Clock, AlertOctagon, CheckCircle2, RefreshCw } from "lucide-react";
import { StudentApplicationFlow } from "../interactive/StudentApplicationFlow";
import { InstitutionResponseFlow } from "../interactive/InstitutionResponseFlow";
import { EnrollmentRoleMap } from "../interactive/EnrollmentRoleMap";
import { BusinessModelViewer } from "../interactive/BusinessModelViewer";
import { LaravelFlowSpecimen } from "../interactive/LaravelFlowSpecimen";
import { cn } from "@/lib/utils";

export interface InteractiveSceneProps {
  scene: StoryScene;
  activation: SceneActivation;
  className?: string;
}

export function InteractiveScene({ scene, activation, className }: InteractiveSceneProps) {
  const isLeaving = activation === "leaving";
  const isEntering = activation === "entering";

  // State for scene-03-future-prediction
  const [initial, setInitial] = useState<string>("N");
  const [weight, setWeight] = useState<number>(55);

  // State for scene-04-supermarket-system
  const [activeModule, setActiveModule] = useState<string>("billing");

  // State for scene-04-four-projects
  const [activeProject, setActiveProject] = useState<number>(0);

  // State for scene-05-online-enrollment
  const [enrollmentTab, setEnrollmentTab] = useState<string>("search");

  // State for scene-05-overnight-rebuild
  const [activeHourIndex, setActiveHourIndex] = useState<number>(0);

  // Fallback perspective state
  const [activeTab, setActiveTab] = useState<number>(0);

  const calculatePrediction = (init: string, wt: number): string => {
    const code = init.charCodeAt(0) + wt;
    const predictions = [
      "Curiosity about systems will lead to building real tools.",
      "Practical exploration will outpace theoretical assumptions.",
      "Persistence through errors will uncover core solutions.",
      "A small experiment today will grow into larger software.",
      "The questions you ask will shape the machines you build.",
    ];
    return predictions[code % predictions.length];
  };

  const isPredictionScene = scene.id === "scene-03-future-prediction";
  const isSupermarketScene = scene.id === "scene-04-supermarket-system";
  const isFourProjectsScene = scene.id === "scene-04-four-projects";
  const isEnrollmentScene = scene.id === "scene-05-online-enrollment";
  const isOvernightRebuildScene = scene.id === "scene-05-overnight-rebuild";
  const isStudentSideScene = scene.id === "scene-06-the-student-side";
  const isInstitutionSideScene = scene.id === "scene-06-the-institution-side";
  const isRoleMapScene = scene.id === "scene-06-three-roles";
  const isBusinessIdeaScene =
    scene.id === "scene-06-the-business-question" ||
    scene.id === "scene-06-the-business-idea";
  const isLaravelFlowScene = scene.id === "scene-07-php-and-laravel";

  // Online enrollment system modules (Minor Project Scope)
  const enrollmentModules = [
    {
      id: "search",
      label: "Course Discovery",
      icon: Search,
      scope: "Student Search",
      desc: "Allows students after SEE/+2 to search and filter colleges and technical training programs by desired subject or discipline.",
      constraint: "Focused query lookup using native MySQL indexing without full text search engines.",
    },
    {
      id: "directory",
      label: "Institutional Directory",
      icon: Building2,
      scope: "College Profiles",
      desc: "Structured profiles of colleges and training institutes detailing course offerings, physical location, and academic tracks.",
      constraint: "Direct relational schema mapping colleges to their respective academic streams.",
    },
    {
      id: "contact",
      label: "Verified Contact Access",
      icon: PhoneCall,
      scope: "Direct Connection",
      desc: "Direct contact details, telephone numbers, and administrative addresses to enable students to connect directly with institutions.",
      constraint: "Provides immediate connection info without requiring an intermediary registration barrier.",
    },
    {
      id: "boundary",
      label: "Scope Boundaries",
      icon: Settings2,
      scope: "Minor Project Scope",
      desc: "Intentionally limited to discovery and directory contact lookup. Student accounts and application processing were explicitly reserved for the future Major Project.",
      constraint: "Academic requirement: Core PHP + MySQL without third-party frameworks or ORMs.",
    },
  ];

  // Overnight rebuild hourly progression (11:00 PM to 7:00 AM)
  const overnightTimeline = [
    {
      time: "11:00 PM",
      status: "FAILURE",
      statusColor: "text-[#d9825b]",
      icon: AlertOctagon,
      title: "Unexpected Backend Error",
      desc: "During pre-presentation verification on defense eve, the system stops working. Repeated debugging fails to resolve the backend breakdown as midnight approaches.",
    },
    {
      time: "12:00 AM",
      status: "DECISION",
      statusColor: "text-[#f0f0f4]",
      icon: RefreshCw,
      title: "Decision: Rebuild From Scratch",
      desc: "With seven hours remaining, endless troubleshooting is abandoned. Frontend templates are kept; the broken backend will be rewritten from the ground up.",
    },
    {
      time: "01:00 AM",
      status: "REBUILD",
      statusColor: "text-[#8e91a2]",
      icon: Clock,
      title: "Core Database & Connection Layer",
      desc: "Rewriting the native MySQL database connection, parameter binding handlers, and data schemas in clean core PHP.",
    },
    {
      time: "02:00 AM",
      status: "REBUILD",
      statusColor: "text-[#8e91a2]",
      icon: Clock,
      title: "Course Catalog & Directory Endpoints",
      desc: "Re-implementing course search filters, institution profile queries, and category sorting routines.",
    },
    {
      time: "03:00 AM",
      status: "REBUILD",
      statusColor: "text-[#8e91a2]",
      icon: Clock,
      title: "Data Pipelines & Sanitization",
      desc: "Writing input sanitization, error handling, and structured data pipelines to prevent query regressions.",
    },
    {
      time: "04:00 AM",
      status: "INTEGRATION",
      statusColor: "text-[#a8abbf]",
      icon: Clock,
      title: "Frontend Reconnection",
      desc: "Linking the rewritten PHP backend endpoints back to the existing HTML/CSS interface components and testing data binding.",
    },
    {
      time: "05:00 AM",
      status: "VERIFICATION",
      statusColor: "text-[#d9825b]",
      icon: CheckCircle2,
      title: "End-to-End Functional Pass",
      desc: "Verifying institution discovery, course filtering, and contact lookup across the entire rebuilt application.",
    },
    {
      time: "06:00 AM",
      status: "READY",
      statusColor: "text-[#d9825b]",
      icon: CheckCircle2,
      title: "Rebuild Complete & Functional",
      desc: "The functional backend required for the presentation is restored after six hours of continuous overnight execution.",
    },
    {
      time: "07:00 AM",
      status: "DELIVERED",
      statusColor: "text-[#f0f0f4]",
      icon: CheckCircle2,
      title: "Presentation to Evaluation Panel",
      desc: "Arrived at college at 7:00 AM and successfully demonstrated the working Online Enrollment System on schedule.",
    },
  ];

  // Supermarket architecture modules
  const supermarketModules = [
    {
      id: "billing",
      label: "Billing & Invoicing",
      icon: Receipt,
      scope: "Point of Sale",
      details: "Itemized calculation, transaction summaries, and invoice generation designed for quick retail checkouts.",
      logic: "INPUT: Line items → PROCESS: Subtotals & Taxes → OUTPUT: Receipt formatting",
    },
    {
      id: "printing",
      label: "Bill Printing",
      icon: Monitor,
      scope: "Hardware Output",
      details: "Direct communication with printer devices to output formatted paper receipts for customers.",
      logic: "INPUT: Completed invoice record → PROCESS: Print spooling → OUTPUT: Physical receipt",
    },
    {
      id: "customers",
      label: "Customer Details",
      icon: Users,
      scope: "Records",
      details: "Basic customer profiling, purchase logging, and ledger records to track frequent store patrons.",
      logic: "INPUT: Contact info & ledger entries → PROCESS: Record storage → OUTPUT: Profile lookup",
    },
    {
      id: "vendors",
      label: "Vendor Management",
      icon: Truck,
      scope: "Supply",
      details: "Managing supplier information, purchase logs, and incoming inventory entries.",
      logic: "INPUT: Vendor details & supply invoices → PROCESS: Supply accounting → OUTPUT: Balance sheet",
    },
    {
      id: "operations",
      label: "Shop Operations",
      icon: Settings2,
      scope: "Scale Configuration",
      details: "Configurable operational rules to adapt the system from small retail counters to multi-counter supermarket flows.",
      logic: "INPUT: Store tier configuration → PROCESS: Workflows adapted → OUTPUT: Tailored terminal interface",
    },
  ];

  // Four exhibition projects
  const exhibitionProjects = [
    {
      num: "01",
      name: "Supermarket & Shop Management System",
      tech: "Visual Studio // C# .NET // WinForms",
      category: "Desktop Software",
      icon: Monitor,
      desc: "Comprehensive desktop management system handling billing, customer ledger records, vendor accounts, and direct receipt printing.",
      note: "Primary semester coursework submission developed for retail operations.",
    },
    {
      num: "02",
      name: "2D Video Game",
      tech: "Macromedia 8",
      category: "Interactive Media",
      icon: Gamepad2,
      desc: "Two-dimensional interactive game exploring asset rendering, frame loops, collision detection, and user controls.",
      note: "Built during the overnight preparation session using Macromedia 8 authoring environment.",
    },
    {
      num: "03",
      name: "Custom Web Browser",
      tech: "Visual Studio // Desktop Framework",
      category: "Desktop Application",
      icon: Compass,
      desc: "Desktop web browsing application providing address bar navigation, page rendering controls, and session navigation.",
      note: "Exploring desktop-to-web container interfaces and UI controls.",
    },
    {
      num: "04",
      name: "College Website",
      tech: "WordPress CMS",
      category: "Web Platform",
      icon: Globe,
      desc: "Complete college portal featuring department structures, event announcements, and institutional information pages.",
      note: "Deployed and customized via WordPress CMS architecture.",
    },
  ];

  return (
    <div
      className={cn(
        "relative w-full max-w-4xl mx-auto py-16 sm:py-24 px-4 sm:px-6 space-y-6 transition-all duration-700 ease-out",
        isLeaving ? "opacity-40" : isEntering ? "opacity-70" : "opacity-100",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <MonoLabel variant="accent" size="xs" dot>
          Interactive Specimen
        </MonoLabel>
        <MonoLabel variant="muted" size="xs">
          {isPredictionScene
            ? "Reconstructed C Program"
            : isSupermarketScene
            ? "System Architecture Explorer"
            : isFourProjectsScene
            ? "Exhibition Project Archive"
            : "Touch / Click Enabled"}
        </MonoLabel>
      </div>

      <div className="space-y-2">
        <h3 className="font-display text-2xl sm:text-3xl text-[#f0f0f4]">
          {scene.title || "Interactive Inspection"}
        </h3>
        {scene.lead && (
          <p className="font-display italic text-base sm:text-lg text-[#d9825b] font-light">
            {scene.lead}
          </p>
        )}
      </div>

      {isPredictionScene ? (
        /* C Program Simulation Box */
        <div className="rounded border border-[#2a2c3a] bg-[#121318] p-6 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#1e202b] pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#d9825b]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#f0f0f4]">
                Lab Program {"//"} predict.c
              </span>
            </div>
            <MonoLabel variant="muted" size="xs">
              Yogisoft C Environment
            </MonoLabel>
          </div>

          {/* Interactive Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2 bg-[#0a0b0e] p-3.5 rounded border border-[#1e202b]">
              <label htmlFor="char-select" className="font-mono text-[11px] text-[#a8abbf] uppercase flex items-center justify-between">
                <span>1. Name First Letter</span>
                <span className="text-[#d9825b] font-bold">char: &apos;{initial}&apos;</span>
              </label>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["A", "D", "K", "N", "R", "S", "V"].map((letter) => (
                  <button
                    key={letter}
                    onClick={() => {
                      setInitial(letter);
                    }}
                    className={cn(
                      "w-8 h-8 rounded font-mono text-xs transition-colors",
                      initial === letter
                        ? "bg-[#d9825b] text-[#0a0b0e] font-bold"
                        : "bg-[#181a24] text-[#8e91a2] hover:bg-[#252838]"
                    )}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 bg-[#0a0b0e] p-3.5 rounded border border-[#1e202b]">
              <label htmlFor="weight-slider" className="font-mono text-[11px] text-[#a8abbf] uppercase flex items-center justify-between">
                <span>2. Weight (kg)</span>
                <span className="text-[#d9825b] font-bold">int: {weight} kg</span>
              </label>
              <input
                id="weight-slider"
                type="range"
                min="40"
                max="80"
                step="5"
                value={weight}
                onChange={(e) => {
                  setWeight(Number(e.target.value));
                }}
                className="w-full accent-[#d9825b] bg-[#181a24] h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between font-mono text-[10px] text-[#5e6171]">
                <span>40 kg</span>
                <span>60 kg</span>
                <span>80 kg</span>
              </div>
            </div>
          </div>

          {/* Program Output Terminal */}
          <div className="p-4 rounded bg-[#07080a] border border-[#1e202b] space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between text-[#5e6171] border-b border-[#181a24] pb-2 text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#3c4054]" />
                <span>EXECUTION OUTPUT</span>
              </div>
              <span>RETURN 0</span>
            </div>

            <div className="text-[#8e91a2] space-y-1 pt-1">
              <p>&gt; Initializing C runtime...</p>
              <p>&gt; Input registered: initial=&apos;{initial}&apos;, weight={weight}</p>
              <p className="text-[#d9825b] pt-1">
                &gt;&gt; [PREDICTION]: &ldquo;{calculatePrediction(initial, weight)}&rdquo;
              </p>
            </div>
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Significance</span>
            <span className="text-[#d9825b]">First Self-Written Working Program</span>
          </div>
        </div>
      ) : isSupermarketScene ? (
        /* Supermarket Architecture Module Explorer */
        <div className="rounded border border-[#2a2c3a] bg-[#121318] p-6 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#1e202b] pb-3">
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-[#d9825b]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#f0f0f4]">
                Desktop Software Architecture
              </span>
            </div>
            <MonoLabel variant="muted" size="xs">
              Visual Studio // Windows Forms
            </MonoLabel>
          </div>

          {/* Module Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {supermarketModules.map((mod) => {
              const Icon = mod.icon;
              const isSelected = activeModule === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded font-mono text-xs transition-colors",
                    isSelected
                      ? "bg-[#d9825b] text-[#0a0b0e] font-semibold"
                      : "bg-[#181a24] text-[#8e91a2] hover:bg-[#252838]"
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{mod.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Module Details */}
          {(() => {
            const current = supermarketModules.find((m) => m.id === activeModule) || supermarketModules[0];
            return (
              <div className="p-4 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-3">
                <div className="flex items-center justify-between border-b border-[#181a24] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#f0f0f4]">
                      {current.label}
                    </span>
                    <MonoLabel variant="muted" size="xs">
                      {current.scope}
                    </MonoLabel>
                  </div>
                  <span className="font-mono text-[10px] text-[#5e6171] uppercase">
                    System Component
                  </span>
                </div>

                <p className="font-body text-xs sm:text-sm text-[#9496a4] leading-relaxed">
                  {current.details}
                </p>

                <div className="p-2.5 rounded bg-[#121318] border border-[#1e202b] text-[11px] font-mono text-[#d9825b]">
                  {current.logic}
                </div>
              </div>
            );
          })()}

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Operational Scale</span>
            <span className="text-[#d9825b]">Small Retail Shop → Supermarket</span>
          </div>
        </div>
      ) : isFourProjectsScene ? (
        /* Exhibition Project Archive Explorer */
        <div className="rounded border border-[#2a2c3a] bg-[#121318] p-6 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#1e202b] pb-3">
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-[#d9825b]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#f0f0f4]">
                Technical Exhibition Archive {"//"} 4 Projects
              </span>
            </div>
            <MonoLabel variant="muted" size="xs">
              One-Night Preparation
            </MonoLabel>
          </div>

          {/* Project Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {exhibitionProjects.map((p, idx) => {
              const isSelected = activeProject === idx;
              return (
                <button
                  key={p.num}
                  onClick={() => setActiveProject(idx)}
                  className={cn(
                    "p-3 rounded border text-left space-y-1 transition-colors",
                    isSelected
                      ? "bg-[#1f1915] border-[#d9825b]"
                      : "bg-[#0a0b0e] border-[#1e202b] hover:bg-[#141620]"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#5e6171]">
                      {p.num}
                    </span>
                    <span className={cn("w-1.5 h-1.5 rounded-full", isSelected ? "bg-[#d9825b]" : "bg-transparent")} />
                  </div>
                  <p className={cn("font-mono text-xs font-semibold truncate", isSelected ? "text-[#f0f0f4]" : "text-[#8e91a2]")}>
                    {p.category}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Project Card */}
          {(() => {
            const cur = exhibitionProjects[activeProject];
            const Icon = cur.icon;
            return (
              <div className="p-5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#181a24] pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded bg-[#181a24] text-[#d9825b]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#5e6171] uppercase block">
                        Project {cur.num} {"//"} {cur.category}
                      </span>
                      <h4 className="font-display text-base text-[#f0f0f4]">
                        {cur.name}
                      </h4>
                    </div>
                  </div>
                  <MonoLabel variant="accent" size="xs">
                    {cur.tech}
                  </MonoLabel>
                </div>

                <p className="font-body text-sm text-[#9496a4] leading-relaxed">
                  {cur.desc}
                </p>

                <div className="p-2.5 rounded bg-[#121318] border border-[#1e202b] flex items-center justify-between text-[11px] font-mono text-[#717485]">
                  <span>Context</span>
                  <span className="text-[#a8abbf]">{cur.note}</span>
                </div>
              </div>
            );
          })()}

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Exhibition Outcome</span>
            <span className="text-[#d9825b]">3rd Position Awarded</span>
          </div>
        </div>
      ) : isEnrollmentScene ? (
        /* Online Enrollment System Minor Project Explorer */
        <div className="rounded border border-[#2a2c3a] bg-[#121318] p-6 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#1e202b] pb-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#d9825b]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#f0f0f4]">
                Minor Project Architecture {"//"} Online Enrollment
              </span>
            </div>
            <MonoLabel variant="muted" size="xs">
              Core PHP + Native MySQL
            </MonoLabel>
          </div>

          {/* Module Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {enrollmentModules.map((mod) => {
              const Icon = mod.icon;
              const isSelected = enrollmentTab === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setEnrollmentTab(mod.id)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded font-mono text-xs transition-colors",
                    isSelected
                      ? "bg-[#d9825b] text-[#0a0b0e] font-semibold"
                      : "bg-[#181a24] text-[#8e91a2] hover:bg-[#252838]"
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{mod.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Module Details */}
          {(() => {
            const current = enrollmentModules.find((m) => m.id === enrollmentTab) || enrollmentModules[0];
            return (
              <div className="p-4 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-3">
                <div className="flex items-center justify-between border-b border-[#181a24] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#f0f0f4]">
                      {current.label}
                    </span>
                    <MonoLabel variant="muted" size="xs">
                      {current.scope}
                    </MonoLabel>
                  </div>
                  <span className="font-mono text-[10px] text-[#5e6171] uppercase">
                    Scope Definition
                  </span>
                </div>

                <p className="font-body text-xs sm:text-sm text-[#9496a4] leading-relaxed">
                  {current.desc}
                </p>

                <div className="p-2.5 rounded bg-[#121318] border border-[#1e202b] text-[11px] font-mono text-[#d9825b]">
                  {current.constraint}
                </div>
              </div>
            );
          })()}

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Constraint Rule</span>
            <span className="text-[#d9825b]">No Modern Frameworks Permitted</span>
          </div>
        </div>
      ) : isOvernightRebuildScene ? (
        /* Interactive 6-Hour Midnight Rebuild Timeline */
        <div className="rounded border border-[#2a2c3a] bg-[#121318] p-6 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#1e202b] pb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#d9825b]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#f0f0f4]">
                The Midnight Sprint {"//"} Hourly Sequence
              </span>
            </div>
            <MonoLabel variant="muted" size="xs">
              11:00 PM → 07:00 AM
            </MonoLabel>
          </div>

          {/* Time Selector Track */}
          <div className="grid grid-cols-3 sm:grid-cols-9 gap-1.5 overflow-x-auto pb-1">
            {overnightTimeline.map((item, idx) => {
              const isSelected = activeHourIndex === idx;
              return (
                <button
                  key={item.time}
                  onClick={() => setActiveHourIndex(idx)}
                  className={cn(
                    "p-2 rounded border text-center space-y-1 transition-colors",
                    isSelected
                      ? "bg-[#221711] border-[#d9825b]"
                      : "bg-[#0a0b0e] border-[#1e202b] hover:bg-[#141620]"
                  )}
                >
                  <span className="font-mono text-[10px] text-[#5e6171] block">
                    {item.time}
                  </span>
                  <span className={cn("font-mono text-[9px] font-bold block truncate", isSelected ? "text-[#d9825b]" : "text-[#717485]")}>
                    {item.status}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Hour Narrative Box */}
          {(() => {
            const cur = overnightTimeline[activeHourIndex];
            const Icon = cur.icon;
            return (
              <div className="p-5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-3">
                <div className="flex items-center justify-between border-b border-[#181a24] pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded bg-[#181a24] text-[#d9825b]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-[#f0f0f4]">
                        {cur.time} — {cur.title}
                      </span>
                    </div>
                  </div>
                  <MonoLabel variant="accent" size="xs">
                    {cur.status}
                  </MonoLabel>
                </div>

                <p className="font-body text-xs sm:text-sm text-[#9496a4] leading-relaxed">
                  {cur.desc}
                </p>
              </div>
            );
          })()}

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Execution Window</span>
            <span className="text-[#d9825b]">6 Hours Continuous Rebuild</span>
          </div>
        </div>
      ) : isStudentSideScene ? (
        /* Chapter 06: Student Application Flow */
        <StudentApplicationFlow />
      ) : isInstitutionSideScene ? (
        /* Chapter 06: Institution Response Flow */
        <InstitutionResponseFlow />
      ) : isRoleMapScene ? (
        /* Chapter 06: Enrollment Role Map */
        <EnrollmentRoleMap />
      ) : isBusinessIdeaScene ? (
        /* Chapter 06: Business Model Viewer */
        <BusinessModelViewer />
      ) : isLaravelFlowScene ? (
        /* Chapter 07: Laravel Request Lifecycle */
        <LaravelFlowSpecimen />
      ) : (
        /* Fallback Exploration Box */
        <div className="rounded border border-[#1e202b] bg-[#121318] p-6 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#1e202b] pb-3">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#d9825b]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#f0f0f4]">
                Select Perspective
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#5e6171]">
              MODE // EXPLORE
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { label: "Hardware", note: "Direct interaction with motherboards, jumpers, and soldering irons." },
              { label: "Software", note: "Writing algorithms line by line in low-resource environments." },
              { label: "Network", note: "The early dial-up handshake connecting local terminals to the world." },
            ].map((p, idx) => (
              <Button
                key={p.label}
                variant={activeTab === idx ? "primary" : "secondary"}
                size="sm"
                onClick={() => setActiveTab(idx)}
              >
                {p.label}
              </Button>
            ))}
          </div>

          <div className="p-4 rounded bg-[#0a0b0e] border border-[#1e202b] min-h-[90px] flex items-center">
            <p className="font-mono text-xs sm:text-sm text-[#e09673] leading-relaxed">
              &gt; {
                [
                  "Direct interaction with motherboards, jumpers, and soldering irons.",
                  "Writing algorithms line by line in low-resource environments.",
                  "The early dial-up handshake connecting local terminals to the world.",
                ][activeTab]
              }
            </p>
          </div>
        </div>
      )}

      {scene.body && scene.body.length > 0 && (
        <div className="space-y-3 pt-2">
          {scene.body.map((p, idx) => (
            <p key={idx} className="font-body text-base text-[#9496a4] leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}


