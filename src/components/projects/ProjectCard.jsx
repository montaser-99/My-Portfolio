import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaMicrochip,
} from "react-icons/fa6";
import ProjectDetails from "./ProjectDetails";

function ProjectCard({ project, index }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const detailsTriggerRef = useRef(null);
  const tags = project.tags ?? [];
  const technologies = project.technologies ?? [];

  function closeDetails() {
    setDetailsOpen(false);
    requestAnimationFrame(() => detailsTriggerRef.current?.focus());
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="card-surface group flex min-w-0 flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative h-44 w-full overflow-hidden border-b border-[var(--border)] bg-[var(--bg-2)]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} cover`}
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`project-art project-art-${project.category.toLowerCase()} flex h-full w-full items-center justify-center`}
            aria-label={`${project.category} project visual`}
          >
            <svg
              viewBox="0 0 420 180"
              className="h-full w-full"
              aria-hidden="true"
            >
              <path d="M0 135h90l28-28h64l28-28h58l26-26h126M34 0v52l32 32v40l32 32M280 180v-38l28-28h56l24-24" />
              <path d="M0 32h80l24 24h64M176 180v-28l26-26h42M420 140h-70l-22-22v-35" />
              <circle cx="210" cy="79" r="24" />
              <circle cx="210" cy="79" r="5" />
              <circle cx="118" cy="107" r="4" />
              <circle cx="294" cy="53" r="4" />
              <circle cx="372" cy="114" r="4" />
            </svg>
            <FaMicrochip
              aria-hidden="true"
              className="absolute text-3xl text-[var(--accent)]/65"
            />
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-md border border-[var(--accent)]/40 bg-[#04121a]/85 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--accent)] backdrop-blur-gpu">
          {project.category}
        </span>
        {project.temporary && (
          <span className="absolute right-3 top-3 rounded-md border border-amber-200/35 bg-[#17150f]/90 px-2.5 py-1 font-mono text-[10px] font-semibold text-amber-100">
            CONCEPT
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        {project.temporary && (
          <p className="mt-1 font-mono text-[10px] tracking-wide text-amber-100/70">
            Temporary visual concept · not completed work
          </p>
        )}
        <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
          {project.description}
        </p>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[var(--border)] bg-[var(--bg-2)] px-2 py-1 text-[11px] font-medium text-[var(--muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {technologies.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[11px] text-[var(--faint)]">
            {technologies.map((technology, technologyIndex) => (
              <span key={technology}>
                {technology}
                {technologyIndex < technologies.length - 1 && (
                  <span className="ml-2 text-[var(--border)]">·</span>
                )}
              </span>
            ))}
          </div>
        )}

        {(project.github || project.demo) && (
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[var(--border-soft)] pt-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-lg bg-[var(--accent)] px-3.5 py-2 text-xs font-semibold text-[#04121a] transition hover:bg-[#5ee0f5]"
              >
                Live Demo <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-[var(--border)] px-3.5 py-2 text-xs font-semibold text-[var(--muted)] transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
              >
                <FaGithub aria-hidden="true" className="text-sm" /> Source
              </a>
            )}
          </div>
        )}

        <button
          ref={detailsTriggerRef}
          type="button"
          onClick={() => setDetailsOpen(true)}
          className="mt-5 min-h-11 self-start border-b border-cyan-100/35 pb-1 text-sm font-medium text-cyan-100/85 transition hover:border-cyan-100 hover:text-white"
        >
          {project.temporary ? "Explore concept" : "View project details"}
          <span aria-hidden="true"> ↗</span>
        </button>
      </div>

      {detailsOpen && (
        <ProjectDetails project={project} onClose={closeDetails} />
      )}
    </motion.article>
  );
}

export default ProjectCard;
