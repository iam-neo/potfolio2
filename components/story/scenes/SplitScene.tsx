import React from "react";
import { StoryScene, SceneActivation } from "@/types/story";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Disc, HelpCircle, Power, RotateCw, Globe, Search, Eye, Cpu, Clock, HardDrive, Laptop, ShieldAlert, GraduationCap, Layers, Lightbulb, CheckCheck, Workflow, Code2, Briefcase } from "lucide-react";
import { MinorProjectArchitectureSpecimen } from "../specimens/MinorProjectArchitectureSpecimen";
import { SystemEvolutionSpecimen } from "../specimens/SystemEvolutionSpecimen";
import { BusinessModelSpecimen } from "../specimens/BusinessModelSpecimen";
import { ProfessionalTransitionSpecimen } from "../specimens/ProfessionalTransitionSpecimen";
import { InternshipRecordSpecimen } from "../specimens/InternshipRecordSpecimen";
import { ProfessionalWorkflowSpecimen } from "../specimens/ProfessionalWorkflowSpecimen";
import { CompanyProjectWorkSpecimen } from "../specimens/CompanyProjectWorkSpecimen";
import { cn } from "@/lib/utils";

export interface SplitSceneProps {
  scene: StoryScene;
  activation: SceneActivation;
  className?: string;
}

export function SplitScene({ scene, activation, className }: SplitSceneProps) {
  const isLeaving = activation === "leaving";
  const isEntering = activation === "entering";

  // Helper to render contextual visual specimen content based on scene ID
  const renderSpecimenContent = () => {
    // 1. Try -> Break -> Understand -> Fix Cycle for Class 8 Scene
    if (scene.id === "scene-01-class-8-first-laptop") {
      const steps = [
        { num: "01", label: "TRY", desc: "Exploring new controls and settings" },
        { num: "02", label: "BREAK", desc: "System errors, corrupted configs" },
        { num: "03", label: "UNDERSTAND", desc: "Tracing what caused the issue" },
        { num: "04", label: "FIX", desc: "Restoring and learning the solution" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <RotateCw className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              The Learning Loop
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#d9825b]">
                    {step.label}
                  </span>
                  <span className="font-mono text-[10px] text-[#5e6171]">
                    {step.num}
                  </span>
                </div>
                <p className="font-mono text-[10px] text-[#8e91a2] leading-tight">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Methodology</span>
            <span className="text-[#d9825b]">Self-Directed Repair</span>
          </div>
        </div>
      );
    }

    // 2. Class 5: First Contact Power Sequence
    if (scene.id === "scene-01-first-touch-class-5") {
      const sequence = [
        { step: "Step 1", title: "Cabinet Power Button", detail: "Main system power switch" },
        { step: "Step 2", title: "Keyboard Key Tap", detail: "Trigger boot prompt" },
        { step: "Step 3", title: "Initial Screen Life", detail: "First visual confirmation" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <Power className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              First Startup Sequence
            </span>
          </div>

          <div className="space-y-2">
            {sequence.map((item) => (
              <div
                key={item.step}
                className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] flex items-center justify-between gap-3"
              >
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] uppercase text-[#5e6171] block">
                    {item.step}
                  </span>
                  <span className="font-mono text-xs text-[#f0f0f4]">
                    {item.title}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#717485] text-right">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Instructor</span>
            <span className="text-[#d9825b]">Cousin Guidance</span>
          </div>
        </div>
      );
    }

    // 3. Unanswered Childhood Questions (Discs, Memory, Software)
    if (scene.id === "scene-01-unanswered-questions") {
      const questions = [
        { label: "CDs & DVDs", query: "How can a CD or DVD contain a movie or song?" },
        { label: "Memory & Storage", query: "Where does the information actually exist?" },
        { label: "Software & Logic", query: "How does a computer know what to do?" },
        { label: "Everyday Machines", query: "How do these devices actually work?" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Questions I Remember Having
            </span>
          </div>

          <div className="space-y-2">
            {questions.map((q) => (
              <div
                key={q.label}
                className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-1"
              >
                <div className="flex items-center gap-2">
                  <Disc className="w-3 h-3 text-[#5e6171]" />
                  <span className="font-mono text-xs font-semibold text-[#a8abbf]">
                    {q.label}
                  </span>
                </div>
                <p className="font-body text-xs text-[#8e91a2]">
                  {q.query}
                </p>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Context</span>
            <span className="text-[#9496a4]">No Technical Guidance Available</span>
          </div>
        </div>
      );
    }

    // 4. Cyber Café Training — Internet Skills Checklist
    if (scene.id === "scene-02-cyber-cafe-training") {
      const skills = [
        { label: "Email Account", detail: "Creating and using a personal email address" },
        { label: "Web Browsing", detail: "Navigating websites using a browser" },
        { label: "Search Engine", detail: "Typing questions and finding answers" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <Globe className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Training Curriculum
            </span>
          </div>

          <div className="space-y-2">
            {skills.map((s) => (
              <div
                key={s.label}
                className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] flex items-center justify-between gap-3"
              >
                <div className="space-y-0.5">
                  <span className="font-mono text-xs font-semibold text-[#f0f0f4]">
                    {s.label}
                  </span>
                  <p className="font-mono text-[10px] text-[#8e91a2] leading-tight">
                    {s.detail}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#3c4054]">●</span>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Venue</span>
            <span className="text-[#d9825b]">Cyber Café</span>
          </div>
        </div>
      );
    }

    // 5. Self-Directed Learning Cycle
    if (scene.id === "scene-02-building-knowledge") {
      const steps = [
        { num: "01", label: "SEARCH", desc: "Type the question into a search engine" },
        { num: "02", label: "WATCH", desc: "Find a video or article explaining it" },
        { num: "03", label: "TRY", desc: "Attempt to apply what was learned" },
        { num: "04", label: "FAIL", desc: "Encounter a new problem or gap" },
        { num: "05", label: "SEARCH AGAIN", desc: "Return to the search engine with a better question" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <Search className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              The Learning Cycle
            </span>
          </div>

          <div className="space-y-2">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] flex items-center gap-3"
              >
                <span className="font-mono text-[10px] text-[#5e6171] w-5 shrink-0">
                  {step.num}
                </span>
                <div className="space-y-0.5 flex-1">
                  <span className="font-mono text-xs font-bold text-[#d9825b]">
                    {step.label}
                  </span>
                  <p className="font-mono text-[10px] text-[#8e91a2] leading-tight">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Pattern</span>
            <span className="text-[#d9825b]">Iterative Self-Teaching</span>
          </div>
        </div>
      );
    }

    // 6. Websites Are Built by People — Perspective Shift
    if (scene.id === "scene-02-websites-are-built") {
      const observations = [
        { label: "Observation", text: "Every website has layouts, buttons, text, images" },
        { label: "Realization", text: "Someone designed and built each one" },
        { label: "Implication", text: "If they learned how, perhaps I could too" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <Eye className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              A Shift in Perspective
            </span>
          </div>

          <div className="space-y-2">
            {observations.map((o, idx) => (
              <div
                key={o.label}
                className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase text-[#5e6171]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#a8abbf]">
                    {o.label}
                  </span>
                </div>
                <p className="font-body text-xs text-[#8e91a2]">{o.text}</p>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Shift</span>
            <span className="text-[#d9825b]">Consumer → Potential Builder</span>
          </div>
        </div>
      );
    }

    // 7. Chapter 03: Learning C — Programming Pipeline
    if (scene.id === "scene-03-learning-c") {
      const pipeline = [
        { step: "01", stage: "Problem", desc: "Define the input, required calculation, and desired output" },
        { step: "02", stage: "Algorithm", desc: "Formulate finite sequential logical steps in plain terms" },
        { step: "03", stage: "Flowchart", desc: "Map decision branching and loop conditions visually" },
        { step: "04", stage: "C Code", desc: "Translate steps into structured C syntax & variables" },
        { step: "05", stage: "Output", desc: "Execute in Yogisoft and verify result accuracy" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <Cpu className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              The Programming Pipeline
            </span>
          </div>

          <div className="space-y-2">
            {pipeline.map((p) => (
              <div
                key={p.step}
                className="p-2.5 rounded bg-[#0a0b0e] border border-[#1e202b] flex items-center gap-3"
              >
                <span className="font-mono text-[10px] text-[#5e6171] w-4 shrink-0">
                  {p.step}
                </span>
                <div className="space-y-0.5 flex-1">
                  <span className="font-mono text-xs font-bold text-[#f0f0f4]">
                    {p.stage}
                  </span>
                  <p className="font-mono text-[10px] text-[#8e91a2] leading-tight">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Mindset</span>
            <span className="text-[#d9825b]">Sequential Problem Solving</span>
          </div>
        </div>
      );
    }

    // 8. Chapter 03: Eight Hours Competition Sequence
    if (scene.id === "scene-03-eight-hours") {
      const milestones = [
        { time: "T - 24H", title: "CSS Tutorial", detail: "~29-minute tutorial video shared by a friend" },
        { time: "Hour 01–03", title: "Site Build", detail: "Constructed college website HTML & styling" },
        { time: "Hour 04–08", title: "Event Duration", detail: "8-hour official competition timeframe" },
        { time: "Next Day", title: "Presentation", detail: "Demonstrating the finished site to judges" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Competition Sequence
            </span>
          </div>

          <div className="space-y-2">
            {milestones.map((m) => (
              <div
                key={m.time}
                className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] flex items-center justify-between gap-3"
              >
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] uppercase text-[#d9825b] block">
                    {m.time}
                  </span>
                  <span className="font-mono text-xs text-[#f0f0f4] font-semibold">
                    {m.title}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#717485] text-right max-w-[160px]">
                  {m.detail}
                </span>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Project</span>
            <span className="text-[#d9825b]">College Website Prototype</span>
          </div>
        </div>
      );
    }

    // 9. Chapter 03: Laptop Failure & Recovery Flow
    if (scene.id === "scene-03-laptop-failure") {
      const flow = [
        { phase: "01. Failure", event: "Laptop Sudden Shutdown", status: "Hardware unresponsive" },
        { phase: "02. Safety", event: "Pendrive Backup Intact", status: "Code & slides preserved" },
        { phase: "03. Workaround", event: "Borrowed Senior's Laptop", status: "Hardware substituted" },
        { phase: "04. Delivery", event: "Presented Website On Stage", status: "Delivered under pressure" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <HardDrive className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Failure Recovery Sequence
            </span>
          </div>

          <div className="space-y-2">
            {flow.map((item) => (
              <div
                key={item.phase}
                className="p-3 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#5e6171] uppercase">
                    {item.phase}
                  </span>
                  <span className="font-mono text-[10px] text-[#d9825b]">
                    {item.status}
                  </span>
                </div>
                <p className="font-mono text-xs text-[#f0f0f4] font-medium">
                  {item.event}
                </p>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Outcome</span>
            <span className="text-[#d9825b]">Participation Certificate</span>
          </div>
        </div>
      );
    }

    // 10. Chapter 04: Visual Studio & Desktop Software
    if (scene.id === "scene-04-desktop-software") {
      const concepts = [
        { label: "Environment", val: "Visual Studio (IDE)", note: "Full desktop compiler & form designer (≠ VS Code)" },
        { label: "Language", val: "C# (.NET Framework)", note: "Object-oriented event-driven programming" },
        { label: "Interface", val: "Windows Forms", note: "Visual drag-and-drop buttons, grids, textboxes" },
        { label: "Execution", val: "Standalone Application", note: "Compiles to native executable window" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <Layers className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Desktop Software Architecture
            </span>
          </div>

          <div className="space-y-2">
            {concepts.map((c) => (
              <div
                key={c.label}
                className="p-2.5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#5e6171] uppercase">
                    {c.label}
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#f0f0f4]">
                    {c.val}
                  </span>
                </div>
                <p className="font-mono text-[10px] text-[#8e91a2]">
                  {c.note}
                </p>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Clarification</span>
            <span className="text-[#d9825b]">Visual Studio ≠ VS Code</span>
          </div>
        </div>
      );
    }

    // 11. Chapter 04: Supermarket Idea & Design Loop
    if (scene.id === "scene-04-the-supermarket-idea") {
      const loop = [
        { step: "01", phase: "OBSERVE", desc: "Friend notices Bhat-Bhateni supermarket retail software" },
        { step: "02", phase: "QUESTION", desc: "Can we design an even more practical system for local shops?" },
        { step: "03", phase: "RESEARCH", desc: "Studying inventory, billing, vendor, and customer requirements" },
        { step: "04", phase: "BUILD", desc: "Developing original C# Windows Forms desktop management tool" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <Lightbulb className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Observation to Implementation
            </span>
          </div>

          <div className="space-y-2">
            {loop.map((item) => (
              <div
                key={item.step}
                className="p-2.5 rounded bg-[#0a0b0e] border border-[#1e202b] flex items-center gap-3"
              >
                <span className="font-mono text-[10px] text-[#5e6171] w-4 shrink-0">
                  {item.step}
                </span>
                <div className="space-y-0.5 flex-1">
                  <span className="font-mono text-xs font-bold text-[#d9825b]">
                    {item.phase}
                  </span>
                  <p className="font-mono text-[10px] text-[#8e91a2] leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Methodology</span>
            <span className="text-[#d9825b]">Operational Needs First</span>
          </div>
        </div>
      );
    }

    // 12. Chapter 04: Instructor Role at Ninja Software Service
    if (scene.id === "scene-04-the-teacher") {
      const duties = [
        { label: "Company", text: "Ninja Software Service Pvt. Ltd." },
        { label: "Formal Role", text: "Computer Instructor (Not Developer)" },
        { label: "Subjects Taught", text: "Computer Concepts, Hardware, Software Fundamentals" },
        { label: "Personal Shift", text: "From shy student to confident technical communicator" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Instruction Record
            </span>
          </div>

          <div className="space-y-2">
            {duties.map((d) => (
              <div
                key={d.label}
                className="p-2.5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-0.5"
              >
                <span className="font-mono text-[10px] text-[#5e6171] uppercase block">
                  {d.label}
                </span>
                <p className="font-mono text-xs text-[#f0f0f4] font-medium">
                  {d.text}
                </p>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Tenure</span>
            <span className="text-[#d9825b]">&gt; 3 Months // 4th Semester</span>
          </div>
        </div>
      );
    }

    // 13. Chapter 04: Security Awareness Framework
    if (scene.id === "scene-04-security-curiosity") {
      const securityFlow = [
        { stage: "01. Trust", desc: "Users implicitly trust familiar communication contexts" },
        { stage: "02. Manipulation", desc: "Attackers exploit psychological pressure and human habits" },
        { stage: "03. Disclosure", desc: "Information or permissions revealed without technical breach" },
        { stage: "04. Risk", desc: "Account security compromised through human factor vulnerability" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Security Awareness Framework
            </span>
          </div>

          <div className="space-y-2">
            {securityFlow.map((item) => (
              <div
                key={item.stage}
                className="p-2.5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-0.5"
              >
                <span className="font-mono text-xs font-bold text-[#d9825b]">
                  {item.stage}
                </span>
                <p className="font-mono text-[10px] text-[#8e91a2] leading-tight">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Teaching Focus</span>
            <span className="text-[#d9825b]">Human Factor & Defense</span>
          </div>
        </div>
      );
    }

    // 14. Chapter 04: Serious Laptop Hardware Spec Card
    if (scene.id === "scene-04-first-serious-laptop") {
      const specs = [
        { component: "Memory", spec: "16 GB DDR4 RAM", upgrade: "4x increase over previous setup" },
        { component: "Storage", spec: "500 GB SSD", upgrade: "Fast solid-state read/write" },
        { component: "Graphics", spec: "NVIDIA GTX 1050 Ti", upgrade: "4 GB dedicated VRAM" },
        { component: "Location", spec: "Acquired in Kathmandu", upgrade: "Dedicated development workstation" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <Laptop className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Hardware Upgrade Specifications
            </span>
          </div>

          <div className="space-y-2">
            {specs.map((s) => (
              <div
                key={s.component}
                className="p-2.5 rounded bg-[#0a0b0e] border border-[#1e202b] flex items-center justify-between gap-3"
              >
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] text-[#5e6171] uppercase block">
                    {s.component}
                  </span>
                  <span className="font-mono text-xs text-[#f0f0f4] font-semibold">
                    {s.spec}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#717485] text-right">
                  {s.upgrade}
                </span>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Milestone</span>
            <span className="text-[#d9825b]">Machine Matching Ambition</span>
          </div>
        </div>
      );
    }

    // 15. Chapter 05: Minor Project Problem Genesis Loop
    if (scene.id === "scene-05-minor-project") {
      const progression = [
        { step: "01", stage: "Personal Problem", desc: "One-year gap spent searching for the right course and institution" },
        { step: "02", stage: "Observation", desc: "Widespread student confusion across Nepal after SEE / +2" },
        { step: "03", stage: "General Problem", desc: "No centralized directory for course availability and direct contacts" },
        { step: "04", stage: "System Idea", desc: "Building a dedicated Online Enrollment System portal" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <Workflow className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Problem to Architecture Loop
            </span>
          </div>

          <div className="space-y-2">
            {progression.map((p) => (
              <div
                key={p.step}
                className="p-2.5 rounded bg-[#0a0b0e] border border-[#1e202b] flex items-center gap-3"
              >
                <span className="font-mono text-[10px] text-[#5e6171] w-4 shrink-0">
                  {p.step}
                </span>
                <div className="space-y-0.5 flex-1">
                  <span className="font-mono text-xs font-bold text-[#d9825b]">
                    {p.stage}
                  </span>
                  <p className="font-mono text-[10px] text-[#8e91a2] leading-tight">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Foundation</span>
            <span className="text-[#d9825b]">Lived Experience First</span>
          </div>
        </div>
      );
    }

    // 16. Chapter 05: Core PHP + Native MySQL Stack
    if (scene.id === "scene-05-no-framework") {
      const stack = [
        { layer: "Backend Logic", tech: "Core PHP 7.x", note: "Pure native scripting without framework routing or ORM abstractions" },
        { layer: "Database", tech: "Native MySQL", note: "Direct relational SQL schemas, queries, and connection pipelines" },
        { layer: "Constraint", tech: "Academic Standard", note: "Rule enforcing mastery of fundamental server-side programming" },
        { layer: "Interface", tech: "HTML5 / CSS3 / JS", note: "Clean responsive presentation connecting to raw PHP endpoints" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <Code2 className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Fundamental Technology Stack
            </span>
          </div>

          <div className="space-y-2">
            {stack.map((s) => (
              <div
                key={s.layer}
                className="p-2.5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#5e6171] uppercase">
                    {s.layer}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#f0f0f4]">
                    {s.tech}
                  </span>
                </div>
                <p className="font-mono text-[10px] text-[#8e91a2]">
                  {s.note}
                </p>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Constraint</span>
            <span className="text-[#d9825b]">No Modern Frameworks Permitted</span>
          </div>
        </div>
      );
    }

    // 17. Chapter 05: Pre-Evaluation Readiness Checklist
    if (scene.id === "scene-05-production-ready") {
      const checklist = [
        { item: "System Codebase", status: "Verified", note: "Course discovery & directory workflows operational" },
        { item: "Database Schemas", status: "Structured", note: "Relational tables indexed for institution profiles" },
        { item: "Project Report", status: "Drafted", note: "Complete documentation with DFDs and data dictionary" },
        { item: "Presentation Slides", status: "Rehearsed", note: "Slide deck finalized for academic evaluation panel" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <CheckCheck className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Pre-Evaluation Status
            </span>
          </div>

          <div className="space-y-2">
            {checklist.map((c) => (
              <div
                key={c.item}
                className="p-2.5 rounded bg-[#0a0b0e] border border-[#1e202b] flex items-center justify-between gap-3"
              >
                <div className="space-y-0.5">
                  <span className="font-mono text-xs font-semibold text-[#f0f0f4] block">
                    {c.item}
                  </span>
                  <p className="font-mono text-[10px] text-[#8e91a2]">
                    {c.note}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#d9825b] font-bold">
                  ✓ {c.status}
                </span>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Status Before Interruption</span>
            <span className="text-[#d9825b]">100% Prepared for Defense</span>
          </div>
        </div>
      );
    }

    // 18. Chapter 05: Professional Internship at Ninja Infosys
    if (scene.id === "scene-05-ninja-infosys") {
      const details = [
        { label: "Company", text: "Ninja Infosys Pvt. Ltd. (≠ Ninja Software Service)" },
        { label: "Role", text: "Software Engineering Intern (6 Months)" },
        { label: "Primary Stack", text: "PHP & Laravel Framework" },
        { label: "Environment", text: "Collaborating with Senior Software Engineers" },
      ];

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#d9825b]">
            <Briefcase className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Professional Development Record
            </span>
          </div>

          <div className="space-y-2">
            {details.map((d) => (
              <div
                key={d.label}
                className="p-2.5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-0.5"
              >
                <span className="font-mono text-[10px] text-[#5e6171] uppercase block">
                  {d.label}
                </span>
                <p className="font-mono text-xs text-[#f0f0f4] font-medium">
                  {d.text}
                </p>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
            <span>Transition</span>
            <span className="text-[#d9825b]">Academic Projects → Industry Engineering</span>
          </div>
        </div>
      );
    }

    // 19. Chapter 06: Minor Project Architecture
    if (
      scene.id === "scene-06-the-minor-project-was-not-enough" ||
      scene.id === "scene-06-the-minor-project"
    ) {
      return <MinorProjectArchitectureSpecimen />;
    }

    // 20. Chapter 06: System Evolution Specimen
    if (scene.id === "scene-06-expanding-the-system") {
      return <SystemEvolutionSpecimen />;
    }

    // 21. Chapter 06: Business Model Specimen
    if (scene.id === "scene-06-the-business-question") {
      return <BusinessModelSpecimen />;
    }

    // 22. Chapter 07: Cumulative Technical Progression Specimen
    if (scene.id === "scene-07-before-the-internship") {
      return <ProfessionalTransitionSpecimen />;
    }

    // 23. Chapter 07: Internship Work Record Specimen
    if (scene.id === "scene-07-joining-ninja-infosys") {
      return <InternshipRecordSpecimen />;
    }

    // 24. Chapter 07: Working Beside Senior Developers Specimen
    if (scene.id === "scene-07-working-with-senior-developers") {
      return <ProfessionalWorkflowSpecimen />;
    }

    // 25. Chapter 07: Company Project Work Specimen
    if (scene.id === "scene-07-building-for-the-company") {
      return <CompanyProjectWorkSpecimen />;
    }

    // Generic Default Fallback Specimen
    return (
      <div className="min-h-[160px] flex items-center justify-center bg-[#0a0b0e] rounded p-4 text-center border border-[#1a1b24]">
        <p className="font-mono text-xs text-[#717485]">
          {scene.visual?.caption || "[Archival Observation]"}
        </p>
      </div>
    );
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-5xl mx-auto py-16 sm:py-24 px-4 sm:px-6 transition-all duration-700 ease-out",
        isLeaving ? "opacity-40" : isEntering ? "opacity-70" : "opacity-100",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Column: Narrative */}
        <div className="space-y-5">
          {scene.metadata?.context && (
            <MonoLabel variant="muted" size="xs">
              {scene.metadata.context}
            </MonoLabel>
          )}

          {scene.title && (
            <h3 className="font-display text-2xl sm:text-3xl text-[#f0f0f4]">
              {scene.title}
            </h3>
          )}

          {scene.lead && (
            <p className="font-display italic text-base sm:text-lg text-[#d9825b] font-light">
              {scene.lead}
            </p>
          )}

          {scene.body && scene.body.length > 0 && (
            <div className="space-y-3">
              {scene.body.map((paragraph, idx) => (
                <p key={idx} className="font-body text-sm sm:text-base text-[#9496a4] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Specimen / Visual Box */}
        <div className="relative rounded border border-[#1e202b] bg-[#121318] p-6 space-y-4 shadow-lg overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#1e202b] pb-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#a8abbf]">
              {scene.visual?.alt || "Observation Record"}
            </span>
            <MonoLabel variant="accent" size="xs">
              Record
            </MonoLabel>
          </div>

          {renderSpecimenContent()}

          {scene.metadata?.date && (
            <div className="flex justify-between items-center text-[10px] font-mono text-[#5e6171] pt-1 border-t border-[#1e202b]/40">
              <span>REF // {scene.id}</span>
              <span>{scene.metadata.date}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
