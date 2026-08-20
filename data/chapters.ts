import { StoryChapter } from "@/types/story";

/**
 * Story Chapter Outline for the Chronological Documentary Narrative.
 * Content and full scene texts will be populated in subsequent phases.
 */
export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: "chapter-01",
    number: "01",
    title: "Origins & Curiosity",
    subtitle: "The spark of mechanical curiosity",
    description: "Childhood curiosity, first encounters with technology, mobile devices, and early computing hardware.",
    era: "Early Years",
    scenes: [
      {
        id: "scene-01-01",
        chapterId: "chapter-01",
        type: "cinematic",
        title: "Curiosity Before Code",
        body: [
          "Before syntax and systems, there was simply a relentless urge to understand how things work.",
        ],
        metadata: {
          context: "Early exploration",
        },
      },
    ],
  },
  {
    id: "chapter-02",
    number: "02",
    title: "Discovery & First Code",
    subtitle: "Connecting to the global network",
    description: "Discovering the internet, self-directed learning, writing the first lines of code and publishing the first website.",
    era: "The Awakening",
    scenes: [
      {
        id: "scene-02-01",
        chapterId: "chapter-02",
        type: "text",
        title: "The First Window",
        body: [
          "The internet transformed curiosity from a local puzzle into an infinite frontier of self-learning.",
        ],
      },
    ],
  },
  {
    id: "chapter-03",
    number: "03",
    title: "The Crucible of Competition",
    subtitle: "Building software under pressure",
    description: "Coding competitions, hardware failures, supermarket management software, and the tech exhibition podium.",
    era: "Foundational Projects",
    scenes: [
      {
        id: "scene-03-01",
        chapterId: "chapter-03",
        type: "cinematic",
        title: "Constraints as Catalyst",
        body: [
          "When hardware failed, determination took over. Building desktop software and competing against odds.",
        ],
      },
    ],
  },
  {
    id: "chapter-04",
    number: "04",
    title: "Engineering Under Fire",
    subtitle: "Systems, crises, and midnight rebuilds",
    description: "Teaching, cybersecurity, Online Enrollment System, pandemic challenges, and rebuilding backends in real time.",
    era: "Academic & Systems Era",
    scenes: [
      {
        id: "scene-04-01",
        chapterId: "chapter-04",
        type: "text",
        title: "Resilience in Production",
        body: [
          "Real engineering is learned when production breaks and the solution must be delivered before dawn.",
        ],
      },
    ],
  },
  {
    id: "chapter-05",
    number: "05",
    title: "Present Work & Future Horizons",
    subtitle: "Real-world impact and modern architecture",
    description: "Nepalgunj Technical College, Nepalgunj Skin Center, current ventures, and upcoming engineering directions.",
    era: "Current & Future",
    scenes: [
      {
        id: "scene-05-01",
        chapterId: "chapter-05",
        type: "cinematic",
        title: "The Continuous Journey",
        body: [
          "Building scalable systems with refined aesthetics, technical precision, and human purpose.",
        ],
      },
    ],
  },
];
