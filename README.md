<p align="center">
  <img src="./public/favicon.svg" alt="Mahmoud Montaser Portfolio" width="90">
</p>

<h1 align="center">Mahmoud Montaser — Engineering Portfolio</h1>

<h3 align="center">
Communication & Electronics Engineering Student · AI · Software · Embedded · Connected Systems
</h3>

<p align="center">
"I combine software, hardware, and AI to engineer intelligent systems that solve real-world problems."
</p>

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-0055FF?logo=framer&logoColor=white)

</div>

---

## About

A fast, fully **static, data-driven** portfolio for **Mahmoud Montaser**, a Communication & Electronics Engineering student working across the boundary of software, AI, embedded systems, and connected hardware.

The public site has **no backend dependency** — it builds and runs entirely from centralized data files in `src/data/`. It presents one cohesive engineering identity rather than separate "AI / software / embedded" personas.

---

## Sections

| #   | Section           | Anchor        | Description                                             |
| --- | ----------------- | ------------- | ------------------------------------------------------- |
| 1   | Hero              | `#home`       | Name, role, positioning statement, circuit/neural visual |
| 2   | About             | `#about`      | Engineering intro + four interconnection pillars        |
| 3   | Engineering Focus | `#focus`      | AI, Software, Embedded & Connected Systems              |
| 4   | Skills            | `#skills`     | Technical toolkit grouped by area (chips, no bars)      |
| 5   | Projects          | `#projects`   | One filterable gallery (All / AI / Software / Embedded / IoT) |
| 6   | Experience        | `#experience` | Real roles only                                         |
| 7   | Education         | `#education`  | B.Sc. Communication & Electronics Engineering           |
| 8   | Contact           | `#contact`    | Configurable channels & socials                         |

---

## Content & Data Architecture

All editable content lives under `src/data/`:

| File             | Purpose                                                        |
| ---------------- | -------------------------------------------------------------- |
| `profile.js`     | Name, role, tagline, about copy, education, contact/social links |
| `focus.js`       | The three Engineering Focus areas                               |
| `skills.js`      | Skill groups (AI & Data, Software Engineering, Embedded & Hardware) |
| `projects.js`    | The single source of truth for projects + category config       |
| `experience.js`  | Real experience entries                                         |

Nothing is fabricated. Empty fields (links, dates, images) are hidden in the UI rather than showing placeholders, and the Projects section shows a professional "coming soon" empty state until real work is added.

### Adding a project

Append **one object** to the `projects` array in `src/data/projects.js`. The gallery, filters, and category list update automatically — no component changes needed.

```js
{
  id: "01",
  title: "Project name",
  description: "Short summary.",
  image: "/cover.png",           // optional; technical fallback shown when missing
  category: "AI",                 // PRIMARY category: AI | Software | Embedded | IoT
  tags: ["ML", "Python"],         // SECONDARY tags shown on the card (not filters)
  technologies: ["Python", "scikit-learn"], // optional
  github: "https://github.com/...",         // optional; button hidden when empty
  demo: "https://...",                      // optional; button hidden when empty
}
```

### Category hierarchy

- **Primary categories** (portfolio-level, used as filters): `AI`, `Software`, `Embedded`, `IoT`.
- **Secondary tags** (shown on cards only): Machine Learning, Deep Learning, Computer Vision, NLP, Agents, AI Automation, n8n, Python, PyTorch, TensorFlow, OpenCV, LangChain, APIs, C++, Microcontrollers, etc.

A project has exactly one primary category and may carry many secondary tags. Filters never expose secondary tags as top-level categories, and empty categories are not shown.

### Contact & social links

Set real values in `profile.links` (`resume`, `github`, `linkedin`, `email`, `phone`, `location`). Hero CTAs, the Contact section, and the Footer render only the links that are present.

---

## Project Structure

```text
protofilo/
├── public/                     # favicon + (add resume/project images here)
├── src/
│   ├── App.jsx                 # renders the loader → landing page
│   ├── App.css                 # shell, reusable utilities, circuit animations
│   ├── index.css               # Tailwind import + theme tokens
│   ├── main.jsx
│   ├── pages/                  # Landingpage, Lodingpage (loader)
│   ├── layouts/                # Navbar, Hero, Aboutme, EngineeringFocus, Projects,
│   │                           #   Experience, Education, Contact, Footer
│   ├── components/             # common/, contact/, focus/, hero/, loader/, projects/, skills/
│   └── data/                   # profile, focus, skills, projects, experience
├── index.html                  # SEO metadata
├── vite.config.js
└── package.json
```

---

## Tech Stack

| Category        | Package         | Version |
| --------------- | --------------- | ------- |
| UI Library      | `react`         | 19.x    |
| Build Tool      | `vite`          | 8.x     |
| Styling         | `tailwindcss`   | 4.x     |
| Animation       | `framer-motion` | 13.x    |
| Icons           | `react-icons`   | 5.x     |

---

## Getting Started

```bash
npm install
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build
npm run preview   # preview the build
npm run lint      # lint
```

No environment variables are required — the public portfolio is fully static.

---

<p align="center">
  <strong>© 2026 Mahmoud Montaser • All Rights Reserved</strong><br/>
  <em>Software · AI · Embedded · Systems Engineering</em>
</p>
