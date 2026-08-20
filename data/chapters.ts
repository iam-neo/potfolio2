import { StoryChapter } from "@/types/story";

/**
 * Story Chapters Data
 * 
 * Chapter 01 contains Neo's authentic factual narrative ("Origin / The Curiosity").
 * Chapters 02–05 serve as structural roadmap placeholders for upcoming phases.
 */
export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: "chapter-01",
    number: "01",
    title: "Origin / The Curiosity",
    subtitle: "How does this thing work?",
    description: "Childhood curiosity, first contact with mobile phones, unguided questions, Class 5 computer access, the Class 8 family laptop, and connecting to the internet.",
    era: "Childhood — Class 8 // The Origin",
    scenes: [
      {
        id: "scene-01-before-code",
        chapterId: "chapter-01",
        type: "cinematic",
        title: "Before Code, There Was Curiosity",
        lead: "It didn't begin with a desire to build software. It began with a simple question: How does this thing work?",
        body: [
          "Around age four or five, technology was rare in my surroundings. When I encountered machines, what drew my attention wasn't just what they did, but the mystery of how they functioned.",
          "I wanted to understand how things worked long before I knew enough to ask the right technical questions.",
        ],
        metadata: {
          context: "Origin",
          date: "Approx. Age 4–5",
        },
      },
      {
        id: "scene-01-mobile-discovery",
        chapterId: "chapter-01",
        type: "text",
        title: "The Handheld Telephone",
        lead: "A device that could be carried anywhere and used to call from almost anywhere.",
        body: [
          "Before handheld phones, I had seen landline telephones in other people's homes, fixed to walls and connected by physical wires.",
          "Seeing a mobile phone for the first time was completely different. Mobile phones were not yet common, and the idea that a machine could be carried around and used to call from almost anywhere fascinated me.",
          "When my family eventually had a mobile phone at home, one of the first things I discovered was that it could play games. Before that, my understanding was that video games required dedicated gaming devices or consoles. Realizing a phone could also contain games expanded my curiosity even further.",
        ],
        metadata: {
          context: "First Contact",
          date: "Childhood",
        },
      },
      {
        id: "scene-01-unanswered-questions",
        chapterId: "chapter-01",
        type: "split",
        title: "Questions Without Answers",
        lead: "Seeing a computer for the first time and wondering how it functioned.",
        body: [
          "Around that same childhood period, I saw a computer for the first time. People told me it could do many things, but instead of simply accepting that, I became curious about how it worked.",
          "At home, we had CD and DVD players, and television was consumed through cable connections. Movies and songs were played using physical discs.",
          "There wasn't anyone around me who could explain how these things actually worked. My family did not have a technical background to answer these questions, so the curiosity remained unanswered.",
        ],
        visual: {
          type: "document",
          alt: "Questions I Remember Having",
          caption: "Optical discs, cable connections, memory, and unexplained mechanics",
        },
        metadata: {
          context: "The Questions",
          date: "Early Childhood",
        },
      },
      {
        id: "scene-01-learning-by-watching",
        chapterId: "chapter-01",
        type: "text",
        title: "Learning by Watching",
        lead: "Learning by observing what people did.",
        body: [
          "Without anyone around to teach me about technology, I began learning by watching what people did.",
          "I observed how others used machines, then tried it myself. Sometimes it worked, sometimes it failed, but I experimented, explored, and figured things out.",
          "This self-directed experimentation became an important pattern in my life.",
        ],
        metadata: {
          context: "Methodology",
          date: "Childhood",
        },
      },
      {
        id: "scene-01-first-touch-class-5",
        chapterId: "chapter-01",
        type: "split",
        title: "Class 5: First Contact",
        lead: "Physically using a computer for the first time.",
        body: [
          "In Class 5, I physically used a computer for the first time.",
          "A cousin taught me how to turn the computer on, showing me which button to press first and which keyboard key to use.",
          "I still did not understand computers deeply, and there was limited opportunity to learn because I was not staying there for long. But the curiosity remained.",
        ],
        visual: {
          type: "document",
          alt: "First Power-On Sequence",
          caption: "The power button sequence and initial keyboard startup",
        },
        metadata: {
          context: "First Contact",
          date: "Class 5",
        },
      },
      {
        id: "scene-01-class-8-first-laptop",
        chapterId: "chapter-01",
        type: "split",
        title: "Class 8: The Family Laptop",
        lead: "Our first family laptop and learning through experimentation.",
        body: [
          "In Class 8, our family got our first laptop. I was extremely excited.",
          "My father taught me some basic things, including how the touchpad could function like a mouse, and he bought a physical mouse because it could sometimes be easier to use.",
          "I continued exploring the laptop by myself, learning through experimentation. I sometimes broke or messed up things, then tried to solve the problems I had created.",
          "This established an enduring learning pattern: Try → Break → Understand → Fix.",
        ],
        visual: {
          type: "document",
          alt: "The Experimentation Loop",
          caption: "TRY → BREAK → UNDERSTAND → FIX",
        },
        metadata: {
          context: "The Sandbox",
          date: "Class 8",
        },
      },
      {
        id: "scene-01-the-modem-and-internet",
        chapterId: "chapter-01",
        type: "cinematic",
        title: "The USB Modem & The Open World",
        lead: "Plugging in a SIM modem and discovering the internet.",
        body: [
          "Later, my father bought a modem containing a SIM card. He explained how to use it: plug the modem into the laptop's USB port, make sure the SIM had balance or data, and connect to the internet.",
          "I began exploring the internet extensively, learning how to download videos and songs, exploring websites, and discovering new information.",
          "Within approximately a month of experimenting with the laptop and internet, I had learned a surprising amount. The internet became another teacher.",
        ],
        metadata: {
          context: "The Frontier",
          date: "Class 8 // Internet",
        },
      },
    ],
  },
  {
    id: "chapter-02",
    number: "02",
    title: "Discovery & First Code",
    subtitle: "Connecting to the global network",
    description: "Self-directed internet learning, writing the first lines of code, and publishing the first website.",
    era: "Roadmap // Phase 4",
    scenes: [],
  },
  {
    id: "chapter-03",
    number: "03",
    title: "The Crucible of Competition",
    subtitle: "Building software under pressure",
    description: "Coding competitions, hardware failures, supermarket management software, and the technical exhibition.",
    era: "Roadmap // Phase 4",
    scenes: [],
  },
  {
    id: "chapter-04",
    number: "04",
    title: "Engineering Under Fire",
    subtitle: "Systems, crises, and midnight rebuilds",
    description: "Teaching, cybersecurity, Online Enrollment System, pandemic challenges, and rebuilding backends in real time.",
    era: "Roadmap // Phase 5",
    scenes: [],
  },
  {
    id: "chapter-05",
    number: "05",
    title: "Present Work & Future Horizons",
    subtitle: "Real-world impact and modern architecture",
    description: "Nepalgunj Technical College, Nepalgunj Skin Center, current ventures, and upcoming engineering directions.",
    era: "Roadmap // Phase 6",
    scenes: [],
  },
];
