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
          "Around age four or five, technology was rare in my surroundings. When I encountered machines, what struck me wasn't their utility, but the mystery of what was happening inside them.",
          "I wanted to understand how things worked long before I had the vocabulary to ask the right technical questions.",
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
        lead: "A device that could connect from anywhere.",
        body: [
          "Before handheld phones, telephones were fixed to walls in other people's homes, tethered by physical wires. They belonged to specific rooms.",
          "Seeing a mobile phone for the first time felt completely different. The idea that a small device could be carried in a pocket and used to speak to someone from almost anywhere was fascinating.",
          "When my family eventually got a mobile phone at home, I discovered something else: it had games inside. Until then, video games were something that required dedicated consoles or gaming machines. Realizing that a communication device could also run interactive games expanded my curiosity even further.",
        ],
        metadata: {
          context: "First Contact",
          date: "Age 4–5",
        },
      },
      {
        id: "scene-01-unanswered-questions",
        chapterId: "chapter-01",
        type: "split",
        title: "Questions Without Answers",
        lead: "How does a spinning disc become a moving picture?",
        body: [
          "Around that same period, I saw a computer for the first time. People told me it could do many things, but rather than just accepting that, I wanted to know how it actually functioned.",
          "At home, we had CD and DVD players, and television came through cable lines. Movies and songs played from spinning physical discs. How did music live inside a machine? Where was the information stored? How did the computer know what to do next?",
          "My family did not have a technical or educational background that could answer these questions, and there was no one around to explain how these systems worked. So the questions accumulated.",
        ],
        visual: {
          type: "document",
          alt: "Unguided Questions",
          caption: "Optical discs, cable signals, and unexplained mechanics",
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
        lead: "Without someone to teach me, observation became the only way forward.",
        body: [
          "Because I had no formal guidance, I began paying close attention to what people did whenever they interacted with technology.",
          "I watched their hands. I memorized which buttons they pressed, which sequences they followed, and what happened on the screen immediately afterward.",
          "Then, whenever I had a chance, I tried it myself. Sometimes it worked. Often it failed. But through trial, error, and repetition, I began connecting actions to outcomes. Experimentation became a habit.",
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
        lead: "Learning which button to press first.",
        body: [
          "In Class 5, I physically touched and operated a computer for the very first time.",
          "A cousin showed me the essential sequence: which button on the cabinet to press to turn the power on, and which key on the keyboard to tap to start the boot process.",
          "My stay there was short, and I still didn't understand what the operating system was doing under the hood. But knowing how to turn the machine on made it feel real. The curiosity had a foothold.",
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
        lead: "A machine to explore without fear of breaking.",
        body: [
          "In Class 8, our family bought our first laptop. The excitement was overwhelming.",
          "My father showed me some basic controls—explaining that the touchpad could be used like a mouse, and later buying a physical external mouse because it made navigating easier.",
          "Having regular access changed everything. I explored settings, changed configurations, and frequently broke software. Whenever something stopped working, I spent hours figuring out how to repair it myself.",
          "Through this, a defining learning pattern took root: Try → Break → Understand → Fix.",
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
        lead: "Within a month of getting online, the internet became my greatest teacher.",
        body: [
          "Later, my father bought a USB modem that used a SIM card. He explained the process: insert the SIM, ensure there was data balance, and plug it into the laptop's USB port to connect.",
          "Plugging that modem in was a turning point. Suddenly, answers to every question I had wondered about as a child were accessible.",
          "I began exploring websites, downloading songs and videos, and researching how things were made. Within about a month of experimenting with the laptop and internet, I had discovered and learned a surprising amount.",
          "Curiosity now had a direct line to the world. The foundation was set.",
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
