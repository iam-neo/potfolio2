import { StoryChapter } from "@/types/story";

/**
 * ENGINE VALIDATION TEST STORY (Development Use Only)
 * 
 * Fictional test story with varied scene types designed specifically
 * to test the scroll mechanics, activation lifecycle, scene renderer,
 * and progress tracking of the Phase 2 Story Engine.
 */
export const TEST_STORY_CHAPTERS: StoryChapter[] = [
  {
    id: "chapter-01",
    number: "01",
    title: "Origins & Mechanical Curiosity",
    subtitle: "The initial spark of disassembly",
    description: "Testing text scenes, cinematic opening statements, and interactive hardware perspectives.",
    era: "Era // Early Explorations",
    scenes: [
      {
        id: "scene-01-cinematic",
        chapterId: "chapter-01",
        type: "cinematic",
        title: "Something Begins in the Quiet",
        lead: "I didn't know where this was going, but curiosity kept moving.",
        body: [
          "Before compilers and internet protocols, there was the simple sound of screws meeting the desk. An instinctive need to see what lived beneath the casing.",
        ],
        metadata: {
          context: "Prologue / Engine Test",
          date: "ARCHIVE // RECORD 01",
        },
      },
      {
        id: "scene-01-text",
        chapterId: "chapter-01",
        type: "text",
        title: "The Logic of First Encounters",
        lead: "Every device was a puzzle waiting to be decoded.",
        body: [
          "Without access to formal documentation, reverse engineering became the primary method of comprehension. Every circuit board was an uncharted map of pathways and switches.",
          "This paragraph validates readable text rendering, typography scales, line-height balancing, and observer activation thresholds.",
        ],
        metadata: {
          context: "Observation",
          date: "RECORD 02",
        },
      },
      {
        id: "scene-01-interactive",
        chapterId: "chapter-01",
        type: "interactive",
        title: "Triangulating Technical Perspectives",
        lead: "A system can only be truly understood when observed from multiple angles.",
        body: [
          "Toggle between different operational perspectives below to verify interactive scene states and non-blocking event handling.",
        ],
        metadata: {
          context: "Interactive Test",
        },
      },
    ],
  },
  {
    id: "chapter-02",
    number: "02",
    title: "The Digital Window",
    subtitle: "Connecting to the global network",
    description: "Testing split-screen layouts, image scenes with fallback recovery, and timeline structures.",
    era: "Era // Connectivity",
    scenes: [
      {
        id: "scene-02-split",
        chapterId: "chapter-02",
        type: "split",
        title: "The First Modem Handshake",
        lead: "A dial tone that bridged isolation into boundless curiosity.",
        body: [
          "When the connection succeeded, the physical constraints of geography dissolved. Information was no longer scarce; it was a river requiring navigational discipline.",
        ],
        visual: {
          type: "document",
          alt: "Network Handshake Protocol Specimen",
          caption: "Audio spectrum modulation record for 56k modem connection",
        },
        metadata: {
          context: "Specimen / Network",
          date: "RECORD 03",
        },
      },
      {
        id: "scene-02-timeline",
        chapterId: "chapter-02",
        type: "timeline",
        title: "Chronology of Early Discoveries",
        lead: "Incremental milestones compounding into systemic understanding.",
        timeline: [
          { year: "Phase A", label: "First Terminal Session", description: "Writing command-line scripts to automate basic local file operations.", highlight: false },
          { year: "Phase B", label: "Markup & Web Pages", description: "Authoring initial HTML documents and stylesheet rules.", highlight: true },
          { year: "Phase C", label: "Dynamic Application Logic", description: "Connecting databases to server scripts and rendering responsive templates.", highlight: false },
        ],
        body: [
          "Verifying the timeline micro-structure, connecting vertical guide lines, and date badges.",
        ],
        metadata: {
          context: "Chronology",
        },
      },
      {
        id: "scene-02-image",
        chapterId: "chapter-02",
        type: "image",
        title: "Visualizing the Workstation",
        visual: {
          type: "image",
          src: "/images/artifacts/placeholder-setup.svg",
          alt: "Development Workstation Configuration",
          caption: "Archival record: Early dual-monitor workstation configuration",
        },
        body: [
          "Testing Next/Image lazy loading, aspect ratio constraints, caption borders, and image error boundaries.",
        ],
        metadata: {
          context: "Archival Image",
          date: "RECORD 04",
        },
      },
    ],
  },
  {
    id: "chapter-03",
    number: "03",
    title: "Engineering Under Pressure",
    subtitle: "Real-world projects, awards, and WebGL harnesses",
    description: "Testing artifact evidence cards, project case study hooks, and lazy-loaded 3D WebGL scenes.",
    era: "Era // Systems & Impact",
    scenes: [
      {
        id: "scene-03-artifact",
        chapterId: "chapter-03",
        type: "artifact",
        title: "Exhibition Award Record",
        artifactId: "art-exhibition-certificate",
        body: [
          "Testing artifact metadata resolution from data/artifacts.ts, merit badge display, and certificate rendering.",
        ],
        metadata: {
          context: "Evidence",
          date: "RECORD 05",
        },
      },
      {
        id: "scene-03-project",
        chapterId: "chapter-03",
        type: "project",
        title: "Supermarket Management Architecture",
        lead: "Building a standalone production billing and inventory engine for high-traffic operations.",
        body: [
          "Testing project card routing to /work/supermarket-management-system, technology pill tags, and milestone badges.",
        ],
        metadata: {
          context: "Project Reveal",
        },
      },
      {
        id: "scene-03-three",
        chapterId: "chapter-03",
        type: "three",
        title: "Spatial Hardware Representation",
        lead: "A three-dimensional representation of hardware architecture.",
        threeSceneId: "scene-hardware-motherboard",
        body: [
          "Testing lazy WebGL canvas mounting, activation state tracking, and reduced-motion static fallback.",
        ],
        metadata: {
          context: "3D Harness Test",
        },
      },
    ],
  },
];
