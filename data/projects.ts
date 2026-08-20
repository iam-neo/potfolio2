import { Project } from "@/types/project";

/**
 * Initial typed project records corresponding to key milestones.
 * Detailed case studies and media will be populated during Project phases.
 */
export const PROJECTS_DATA: Project[] = [
  {
    slug: "supermarket-management-system",
    title: "Supermarket Management System",
    year: "Archive",
    category: "Desktop Software / Exhibition",
    description: "Inventory tracking, billing, and automated sales reporting built for technical exhibition competition.",
    technologies: ["Visual Basic / .NET", "SQL Database", "Crystal Reports"],
    role: "Lead Developer",
    outcome: "Secured 3rd place in Regional Technical Exhibition.",
    featured: true,
    chapterRef: "chapter-03",
  },
  {
    slug: "online-enrollment-system",
    title: "Online Enrollment & Academic Portal",
    year: "Archive",
    category: "Full Stack Web Application",
    description: "End-to-end student admissions, document verification, and registration workflow under high-traffic peak conditions.",
    technologies: ["PHP", "MySQL", "JavaScript", "REST APIs"],
    role: "Full Stack Engineer",
    outcome: "Processed institutional admissions with real-time verification.",
    featured: true,
    chapterRef: "chapter-04",
  },
  {
    slug: "nepalgunj-skin-center",
    title: "Nepalgunj Skin Center",
    year: "Production",
    category: "Healthcare Platform",
    description: "Clinical patient management, digital appointments, and dermatology service portal.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    role: "System Architect & Developer",
    outcome: "Digitized clinic operations and patient appointment flow.",
    featured: true,
    chapterRef: "chapter-05",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return PROJECTS_DATA.find((p) => p.slug === slug);
};
