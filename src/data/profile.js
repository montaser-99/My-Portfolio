/**
 * Central personal brand + contact configuration.
 *
 * Every field here is safe to edit. Empty strings ("") are treated as
 * "not provided yet" — the UI hides the matching link/CTA instead of
 * rendering a dead or placeholder URL. Fill these in as real details
 * become available; no other file needs to change.
 */
export const profile = {
  name: "Mahmoud Montaser",
  shortName: "Mahmoud",
  role: "Communication & Electronics Engineering Student",
  tagline:
    "I combine software, hardware, and AI to engineer intelligent systems that solve real-world problems.",

  // Rotating hero phrases (kept authentic to the engineering focus areas).
  heroPhrases: [
    "Communication & Electronics Engineering",
    "AI & Intelligent Systems",
    "Software Engineering",
    "Embedded & Connected Systems",
  ],

  // Contact / social links. Leave "" until a real URL exists.
  links: {
    resume: "/Mahmoud_Montaser_CV.pdf", // replace when the real CV is available
    github: "https://github.com/montaser-99",
    linkedin: "https://www.linkedin.com/in/mahmoud-montaser99",
    email: "mahmoudmontaser185@gmail.com",
    phone: "+201211866923",
    location: "Egypt",
  },

  media: {
    portrait: "/mahmoud-montaser.png", // expected portrait path; add the real image to /public
  },

  about: {
    intro:
      "I'm a Communication & Electronics Engineering student working across the boundary where software, hardware, and intelligence meet.",
    body: [
      "My engineering background ties together four areas that are usually treated separately: software, AI, embedded systems, and connected hardware. I like building things where a model, a circuit, and a backend have to work as one system rather than as isolated pieces.",
      "I'm actively learning and building across AI and data, backend software, and embedded/IoT — treating them as parts of the same engineering discipline, not three unrelated careers.",
    ],
    pillars: [
      {
        label: "Software",
        description: "Backends, APIs, and the logic that makes a system useful.",
      },
      {
        label: "AI",
        description: "Machine learning and intelligent, data-driven behaviour.",
      },
      {
        label: "Embedded",
        description: "Firmware and hardware that interacts with the physical world.",
      },
      {
        label: "Connected Systems",
        description: "IoT and the links that tie devices, data, and models together.",
      },
    ],
  },

  education: {
    degree: "B.Sc. Communication & Electronics Engineering",
    // University name, GPA, and dates are intentionally left empty —
    // add them here once confirmed. Empty fields are hidden in the UI.
    institution: "",
    period: "",
    details: [],
  },
};

/** Convenience helper: is a configured link actually present? */
export const hasLink = (key) => Boolean(profile.links[key]);
