export const SITE_METADATA = {
  title: "NEO / Story Experience",
  tagline: "A chronological narrative portfolio",
  author: "Neo",
  phase: "CHAPTER 01–07 / ORIGIN → PROFESSIONAL",
  totalPhases: 9,
  version: "0.9.0",
} as const;

export const PHASE_STATUS = [
  { id: 1, name: "Foundation + Design System", status: "completed", description: "Design tokens, typography, layout, typed schemas" },
  { id: 2, name: "Story Engine & Experience Architecture", status: "completed", description: "Scroll choreography, chapter triggers, timeline mechanics, scene renderer" },
  { id: 3, name: "Chapter 01: Origin / The Curiosity", status: "completed", description: "Childhood curiosity, handheld phone discovery, Class 5 startup, Class 8 laptop & modem" },
  { id: 4, name: "Chapter 02: Discovery / The Digital Window", status: "completed", description: "Class 9 computer course, Cyber Café, self-directed internet learning, Class 10 decisions" },
  { id: 5, name: "Chapter 03: Building / From Code to Systems", status: "completed", description: "Diploma 1st & 2nd sem, C programming, first prediction code, 8-hour competition, laptop failure & recovery" },
  { id: 6, name: "Chapter 04: Systems / From Experiments to Real Projects", status: "completed", description: "Visual Studio desktop software, supermarket system, 4-project exhibition sprint, 3rd place award, Ninja Software Service instructor" },
  { id: 7, name: "Chapter 05: Pressure / Failure, Rebuild & Professional Direction", status: "completed", description: "Minor Project Online Enrollment System, COVID lockdown, 11 PM backend failure, 6-hour rebuild, Ninja Infosys internship" },
  { id: 8, name: "Chapter 06: Scale / The Major Project & Expansion", status: "completed", description: "Major Project evolution, two-sided platform, student & institution workflows, Nepalgunj business model, unlaunched reality" },
  { id: 9, name: "Chapter 07: Professional / Into the Real World", status: "active", description: "Ninja Infosys paid internship, PHP & Laravel, working with senior developers, independent company projects, professional transition" },
] as const;

export const NAVIGATION_LINKS = [
  { label: "Story", href: "/#story-container" },
  { label: "Work", href: "/work" },
] as const;
