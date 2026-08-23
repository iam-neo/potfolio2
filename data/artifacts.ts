import { Artifact } from "@/types/artifact";

/**
 * Initial typed artifact registry for archival documents, photographs, and exhibition records.
 */
export const ARTIFACTS_DATA: Artifact[] = [
  {
    id: "art-competition-pendrive",
    title: "Competition Code & Presentation Backup Drive",
    type: "document",
    year: "Diploma 2nd Sem",
    description: "Original storage drive containing the 8-hour coding competition college website code and presentation slides.",
    image: "",
    caption: "REAL ARTIFACT — TO BE ADDED",
    chapterRef: "chapter-03",
  },
  {
    id: "art-exhibition-certificate",
    title: "Technical Exhibition Award Certificate",
    type: "certificate",
    year: "Diploma 4th Sem",
    description: "Third place certificate awarded during college technical exhibition for multi-project presentation.",
    image: "",
    caption: "REAL ARTIFACT — TO BE ADDED",
    chapterRef: "chapter-04",
  },
  {
    id: "art-first-serious-laptop",
    title: "Kathmandu Hardware Upgrade",
    type: "photograph",
    year: "Diploma 4th Sem",
    description: "First dedicated personal machine: 16 GB DDR4 RAM, 500 GB SSD, NVIDIA GTX 1050 Ti (4 GB VRAM).",
    image: "",
    caption: "REAL ARTIFACT — TO BE ADDED",
    chapterRef: "chapter-04",
  },
  {
    id: "art-minor-project-report",
    title: "Online Enrollment System Project Documentation",
    type: "document",
    year: "Diploma 5th Sem",
    description: "Original project documentation, database schemas, and data flow diagrams for the Minor Project.",
    image: "",
    caption: "REAL ARTIFACT — TO BE ADDED",
    chapterRef: "chapter-05",
  },
  {
    id: "art-internship-record",
    title: "Ninja Infosys Internship Record",
    type: "document",
    year: "Pre-6th Sem",
    description: "Documentation of six-month software engineering internship at Ninja Infosys Pvt. Ltd.",
    image: "",
    caption: "REAL ARTIFACT — TO BE ADDED",
    chapterRef: "chapter-05",
  },
  {
    id: "art-first-setup",
    title: "First Development Workstation",
    type: "photograph",
    year: "Archive",
    description: "Archival record of early computing setup where initial desktop software was written.",
    image: "",
    caption: "REAL ARTIFACT — TO BE ADDED",
    chapterRef: "chapter-01",
  },
];

export const getArtifactById = (id: string): Artifact | undefined => {
  return ARTIFACTS_DATA.find((a) => a.id === id);
};
