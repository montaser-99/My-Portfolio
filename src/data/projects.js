/**
 * Centralized project data — the single source of truth for the portfolio.
 *
 * To add a project, append ONE object to `projects` below. The Projects
 * section renders, filters, and derives its category list automatically;
 * you never need to touch the component.
 *
 * Shape:
 * {
 *   id: "01",
 *   title: "Project name",
 *   description: "One or two sentence summary.",
 *   image: "/cover.png",            // optional; a technical fallback is shown when missing
 *   category: "AI",                  // PRIMARY category — one of PROJECT_CATEGORIES
 *   tags: ["ML", "Python"],          // SECONDARY tags shown on the card (not filters)
 *   technologies: ["Python", "scikit-learn"], // optional tool list
 *   github: "https://github.com/...", // optional; button hidden when empty
 *   demo: "https://...",              // optional; button hidden when empty
 * }
 *
 * Category hierarchy:
 *   PRIMARY categories (top-level engineering areas, used as filters):
 *     AI · Software · Embedded · IoT
 *   SECONDARY tags (specialisations / tools, shown on cards only):
 *     Machine Learning, Deep Learning, Computer Vision, NLP, Agents,
 *     AI Systems, AI Automation, n8n, Python, PyTorch, TensorFlow,
 *     OpenCV, LangChain, APIs, C++, Microcontrollers, etc.
 *   A project has exactly ONE primary category and MAY have many secondary tags.
 */

export const PROJECT_CATEGORIES = ["AI", "Software", "Embedded", "IoT"];

// Temporary demo projects — replace with real projects before publishing.
export const projects = [
  { id: "demo-doc-analysis", title: "Intelligent Document Analysis", description: "A concept for extracting structure and meaning from complex documents with language processing.", category: "AI", tags: ["NLP", "AI", "Python"], technologies: ["Python", "NLP"], image: "", images: [], github: "", demo: "", video: "", temporary: true },
  { id: "demo-vision-monitor", title: "Computer Vision Monitoring System", description: "A concept for interpreting visual data and surfacing useful events from camera streams.", category: "AI", tags: ["Computer Vision", "Deep Learning", "Python"], technologies: ["Python", "Computer Vision"], image: "", images: [], github: "", demo: "", video: "", temporary: true },
  { id: "demo-collaboration", title: "AI-Powered Collaboration Platform", description: "A concept for a collaborative workspace supported by structured backend services and intelligent assistance.", category: "Software", tags: ["Backend", "TypeScript", "PostgreSQL"], technologies: ["TypeScript", "PostgreSQL"], image: "", images: [], github: "", demo: "", video: "", temporary: true },
  { id: "demo-task-management", title: "Intelligent Task Management System", description: "A concept for organizing work through a REST API and context-aware task suggestions.", category: "Software", tags: ["Node.js", "REST API", "AI"], technologies: ["Node.js", "REST API"], image: "", images: [], github: "", demo: "", video: "", temporary: true },
  { id: "demo-environment-monitor", title: "Smart Environmental Monitoring Device", description: "A concept for a sensor-based embedded device that samples and reports environmental conditions.", category: "Embedded", tags: ["C++", "Embedded", "Sensors"], technologies: ["C++", "Sensors"], image: "", images: [], github: "", demo: "", video: "", temporary: true },
  { id: "demo-iot-control", title: "Embedded IoT Control System", description: "A concept for connecting a microcontroller control loop with a remote device interface.", category: "Embedded", tags: ["Embedded", "IoT", "C++"], technologies: ["C++", "IoT"], image: "", images: [], github: "", demo: "", video: "", temporary: true },
  { id: "demo-smart-monitor", title: "Connected Smart Monitoring Platform", description: "A concept for sending sensor readings to a cloud service for monitoring across connected devices.", category: "IoT", tags: ["IoT", "Sensors", "Cloud"], technologies: ["IoT", "Cloud"], image: "", images: [], github: "", demo: "", video: "", temporary: true },
];

/**
 * Primary categories that actually contain at least one project, prefixed with
 * "All". Used to build the filter bar so empty categories are never shown.
 */
export const activeProjectCategories = ["All", ...PROJECT_CATEGORIES];
