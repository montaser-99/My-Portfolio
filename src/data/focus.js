import { FaBrain, FaCode, FaMicrochip } from "react-icons/fa6";

/**
 * "Engineering Focus" — three interconnected areas (replaces the old
 * freelance "Services" section). These are focus areas within one
 * engineering identity, not three separate job titles.
 */
export const focusAreas = [
  {
    id: "ai",
    title: "AI & Intelligent Systems",
    icon: FaBrain,
    description:
      "Machine learning and intelligent applications — data-driven solutions, AI systems, and agents/automation where they genuinely fit the problem.",
    points: [
      "Machine learning & data-driven solutions",
      "AI systems and API integration",
      "Agents & automation where applicable",
    ],
  },
  {
    id: "software",
    title: "Software Engineering",
    icon: FaCode,
    description:
      "Backend systems, APIs, and databases — the software architecture and full-stack experience that turns a model or device into a usable product.",
    points: [
      "Backend systems & REST APIs",
      "Databases & data modelling",
      "Scalable, maintainable software architecture",
    ],
  },
  {
    id: "embedded",
    title: "Embedded & Connected Systems",
    icon: FaMicrochip,
    description:
      "Embedded systems, IoT, and hardware/software integration — connecting physical devices to data, networks, and intelligence.",
    points: [
      "Embedded systems & firmware",
      "IoT and connected devices",
      "Hardware / software integration",
    ],
  },
];
