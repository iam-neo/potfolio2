"use client";

import React, { useState } from "react";
import { Globe, GitFork, Cpu, Cog, Database, SendHorizontal, CheckCircle2, Terminal } from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

/**
 * LaravelFlowSpecimen:
 * Interactive educational visualization of the conceptual Laravel request lifecycle
 * (Request → Route → Controller → Application Logic → Database → Response).
 */
export function LaravelFlowSpecimen() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const lifecycle = [
    {
      id: "request",
      stepNum: "01",
      title: "HTTP Request",
      sub: "Client Initiation",
      icon: Globe,
      summary: "An incoming HTTP request arrives at the public web server entry point (e.g. index.php).",
      details: [
        "Encapsulates HTTP method (GET, POST, PUT, DELETE), headers, and payload data",
        "Passes through preliminary web server configurations and environment bindings",
        "Instantiates the Laravel application container instance",
      ],
      codeConcept: "// Incoming HTTP Request\n$request = Request::capture();",
    },
    {
      id: "route",
      stepNum: "02",
      title: "Router & Middleware",
      sub: "URI Matching",
      icon: GitFork,
      summary: "The router inspects the URI path, applies route middleware, and matches the endpoint definition.",
      details: [
        "Parses defined application web and API routes in routes/web.php",
        "Executes session initialization, CSRF token checks, and authentication verification",
        "Dispatches the incoming request to the targeted Controller action",
      ],
      codeConcept: "// Route Dispatching\nRoute::get('/dashboard', [DashboardController::class, 'index']);",
    },
    {
      id: "controller",
      stepNum: "03",
      title: "Controller",
      sub: "Action Handler",
      icon: Cpu,
      summary: "The controller method receives validated input parameters and coordinates the execution flow.",
      details: [
        "Extracts and validates input parameters via Request or FormRequest classes",
        "Acts as an orchestrator between presentation layers and backend services",
        "Prevents fat routing closures by enforcing structured class methods",
      ],
      codeConcept: "public function index(Request $request) {\n    // Delegate processing to application services\n}",
    },
    {
      id: "logic",
      stepNum: "04",
      title: "Application Logic",
      sub: "Domain Processing",
      icon: Cog,
      summary: "Core business rules, computations, transformations, and security verifications are applied.",
      details: [
        "Processes data calculations, authorization checks, and formatting rules",
        "Enforces domain constraints before querying or modifying persistent state",
        "Prepares query arguments for database interaction",
      ],
      codeConcept: "// Domain Processing\n$userPermissions = $this->authService->resolvePermissions($user);",
    },
    {
      id: "database",
      stepNum: "05",
      title: "Database Layer",
      sub: "Relational Persistence",
      icon: Database,
      summary: "Eloquent ORM or Query Builder executes optimized SQL statements against relational MySQL schemas.",
      details: [
        "Maps database records to structured object models via Eloquent ORM",
        "Executes parameterized queries preventing SQL injection vulnerabilities",
        "Manages relational joins, transactions, timestamps, and indexes",
      ],
      codeConcept: "// Relational Query\n$records = Project::where('active', true)->with('author')->get();",
    },
    {
      id: "response",
      stepNum: "06",
      title: "Structured Response",
      sub: "Client Output",
      icon: SendHorizontal,
      summary: "The application renders views or serializes JSON payloads and sends the response to the client.",
      details: [
        "Generates rendered Blade templates or structured JSON API responses",
        "Attaches appropriate HTTP status codes (200 OK, 201 Created, etc.) and security headers",
        "Flushes buffers and terminates the request lifecycle cleanly",
      ],
      codeConcept: "// Returned Response\nreturn response()->json(['status' => 'success', 'data' => $records]);",
    },
  ];

  const cur = lifecycle[activeStep];
  const Icon = cur.icon;

  return (
    <div className="rounded border border-[#2a2c3a] bg-[#121318] p-6 space-y-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1e202b] pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#d9825b]" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#f0f0f4]">
            PHP / Laravel {"//"} Conceptual Request Lifecycle
          </span>
        </div>
        <MonoLabel variant="muted" size="xs">
          Conceptual Architecture
        </MonoLabel>
      </div>

      {/* Lifecycle Step Indicators / Tracker */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {lifecycle.map((item, idx) => {
          const ItemIcon = item.icon;
          const isSelected = activeStep === idx;
          return (
            <button
              key={item.id}
              onClick={() => setActiveStep(idx)}
              className={cn(
                "p-2.5 rounded border text-left space-y-1 transition-all cursor-pointer",
                isSelected
                  ? "bg-[#221711] border-[#d9825b]"
                  : "bg-[#0a0b0e] border-[#1e202b] hover:bg-[#141620]"
              )}
              aria-label={`Step ${item.stepNum}: ${item.title}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-[#5e6171]">
                  {item.stepNum}
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

      {/* Active Step Deep Dive Card */}
      <div className="p-5 rounded bg-[#0a0b0e] border border-[#1e202b] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#181a24] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-[#181a24] text-[#d9825b]">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#5e6171] uppercase block">
                Lifecycle Stage {cur.stepNum}
              </span>
              <h4 className="font-display text-base text-[#f0f0f4]">
                {cur.title}
              </h4>
            </div>
          </div>
          <span className="font-mono text-[10px] text-[#d9825b] uppercase px-2 py-0.5 rounded bg-[#1f1612] border border-[#3d2417]">
            {cur.sub}
          </span>
        </div>

        <p className="font-body text-xs sm:text-sm text-[#9496a4] leading-relaxed">
          {cur.summary}
        </p>

        {/* Mechanism Bullet List */}
        <div className="space-y-1.5 pt-1">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#5e6171] block">
            Execution Details:
          </span>
          {cur.details.map((detail, dIdx) => (
            <div key={dIdx} className="flex items-start gap-2 text-xs font-mono text-[#a8abbf]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#d9825b] shrink-0 mt-0.5" />
              <span>{detail}</span>
            </div>
          ))}
        </div>

        {/* Code Illustration */}
        <div className="pt-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#5e6171] block mb-1">
            Conceptual Code Representation:
          </span>
          <pre className="p-3 rounded bg-[#121318] border border-[#1e202b] text-[11px] font-mono text-[#e09673] overflow-x-auto">
            {cur.codeConcept}
          </pre>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between pt-1">
        <button
          onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
          disabled={activeStep === 0}
          className="px-3 py-1.5 rounded text-xs font-mono border border-[#1e202b] bg-[#0a0b0e] text-[#a8abbf] hover:bg-[#141620] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
        >
          ← Previous Stage
        </button>

        <span className="font-mono text-[11px] text-[#5e6171]">
          {activeStep + 1} of {lifecycle.length}
        </span>

        <button
          onClick={() => setActiveStep((prev) => Math.min(lifecycle.length - 1, prev + 1))}
          disabled={activeStep === lifecycle.length - 1}
          className="px-3 py-1.5 rounded text-xs font-mono border border-[#d9825b]/60 bg-[#1f1612] text-[#f0f0f4] hover:bg-[#2d1f18] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
        >
          Next Stage →
        </button>
      </div>

      {/* Disclaimer */}
      <div className="p-2.5 rounded bg-[#161722] border border-[#252838] flex items-center justify-between text-[11px] font-mono text-[#a8abbf]">
        <span>Model Notice</span>
        <span className="text-[#d9825b]">Educational Demonstration // Conceptual Laravel Architecture</span>
      </div>
    </div>
  );
}
