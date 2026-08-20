export type ArtifactType =
  | "certificate"
  | "photograph"
  | "notebook"
  | "screenshot"
  | "document"
  | "project_image"
  | "presentation_slide";

export interface Artifact {
  id: string;
  title: string;
  type: ArtifactType;
  year: string;
  description: string;
  image: string;
  caption?: string;
  chapterRef?: string;
  metadata?: {
    source?: string;
    originalDate?: string;
    condition?: string;
    dimensions?: string;
  };
}
