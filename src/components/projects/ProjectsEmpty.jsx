import { FaMicrochip } from "react-icons/fa6";

/** Shown when there are no projects (or none in the selected category). */
function ProjectsEmpty({ filtered }) {
  return (
    <div className="card-surface tech-grid flex flex-col items-center justify-center rounded-2xl px-6 py-16 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]">
        <FaMicrochip className="text-2xl" />
      </span>
      <p className="mt-5 text-base font-semibold text-white">
        {filtered
          ? "No projects in this category yet."
          : "Projects are currently being built. Check back soon."}
      </p>
      <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-[var(--muted)]">
        Real AI, software, embedded, and IoT work will appear here as it&apos;s
        completed — no filler, no placeholders.
      </p>
    </div>
  );
}

export default ProjectsEmpty;
