export const SITE_METADATA = {
  title: "NEO / Story Experience",
  tagline: "A chronological narrative portfolio",
  author: "Neo",
  phase: "STORY ENGINE / 02",
  totalPhases: 7,
  version: "0.2.0",
} as const;

export const PHASE_STATUS = [
  { id: 1, name: "Foundation + Design System", status: "completed", description: "Design tokens, typography, layout, typed schemas" },
  { id: 2, name: "Story Engine & Experience Architecture", status: "active", description: "Scroll choreography, chapter triggers, timeline mechanics, scene renderer" },
  { id: 3, name: "Prologue & Origin Scenes", status: "upcoming", description: "Childhood curiosity, first hardware, discovering the internet" },
  { id: 4, name: "Programming & Exhibition Era", status: "upcoming", description: "First code, competition, supermarket software, exhibition" },
  { id: 5, name: "Professional & Crisis Era", status: "upcoming", description: "College, online enrollment, midnight backend rebuild" },
  { id: 6, name: "Present & Future Projects", status: "upcoming", description: "Nepalgunj Skin Center, current ventures, future roadmap" },
  { id: 7, name: "Selective 3D & Final Polish", status: "upcoming", description: "Restrained 3D artifacts, audio cues, documentary refinement" },
] as const;

export const NAVIGATION_LINKS = [
  { label: "Story", href: "/#story-container" },
  { label: "Work", href: "/work" },
] as const;
