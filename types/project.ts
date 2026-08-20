export interface ProjectLink {
  label: string;
  url: string;
  type?: "live" | "github" | "archive" | "demo" | "document";
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  category: string;
  description: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  role?: string;
  outcome?: string;
  featured?: boolean;
  chapterRef?: string; // links back to a chapter in the chronological story
  images?: ProjectImage[];
  links?: ProjectLink[];
}
