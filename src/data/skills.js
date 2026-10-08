import { FaBrain, FaServer, FaMicrochip } from "react-icons/fa6";

/**
 * Skills grouped by engineering area. Only skills that are genuinely part of
 * the toolkit are listed — no invented expertise, no percentage bars.
 * Each group renders as a card of technical chips.
 */
export const skillGroups = [
  {
    title: "AI & Data",
    icon: FaBrain,
    note: "Intelligent, data-driven behaviour",
    skills: ["Python", "Machine Learning", "AI / API Integration"],
  },
  {
    title: "Software Engineering",
    icon: FaServer,
    note: "Backends, APIs, and data stores",
    skills: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Git & GitHub",
    ],
  },
  {
    title: "Embedded & Hardware",
    icon: FaMicrochip,
    note: "Firmware and connected devices",
    skills: ["C / C++", "Embedded Systems", "IoT", "VHDL"],
  },
];
