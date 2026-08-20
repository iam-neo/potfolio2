import { Artifact } from "@/types/artifact";

/**
 * Initial typed artifact registry for archival documents, photographs, and exhibition records.
 */
export const ARTIFACTS_DATA: Artifact[] = [
  {
    id: "art-exhibition-certificate",
    title: "Technical Exhibition Award Certificate",
    type: "certificate",
    year: "Archive",
    description: "Third place merit certificate awarded during regional technical exhibition for software demonstration.",
    image: "/images/artifacts/placeholder-certificate.svg",
    caption: "Official award certificate for Supermarket Management System",
    chapterRef: "chapter-03",
  },
  {
    id: "art-first-setup",
    title: "First Development Workstation",
    type: "photograph",
    year: "Archive",
    description: "Archival record of early computing setup where initial desktop software was written.",
    image: "/images/artifacts/placeholder-setup.svg",
    caption: "Early workstation configuration",
    chapterRef: "chapter-01",
  },
];

export const getArtifactById = (id: string): Artifact | undefined => {
  return ARTIFACTS_DATA.find((a) => a.id === id);
};
