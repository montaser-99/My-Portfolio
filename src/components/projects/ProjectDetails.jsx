import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function ProjectDetails({ project, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.stopPropagation();
      onClose();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = [
      ...dialogRef.current.querySelectorAll("button:not([disabled]), a[href]"),
    ];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (!first) {
      event.preventDefault();
      dialogRef.current.focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return createPortal(
    <div
      className="project-modal fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/80 p-4"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.id}`}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className="card-surface relative my-auto max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl p-5 sm:p-8"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 min-h-11 rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)] hover:text-white"
        >
          Close
        </button>
        <p className="font-mono text-xs tracking-[0.16em] text-cyan-100">
          {project.category}
          {project.temporary ? " · TEMPORARY CONCEPT" : ""}
        </p>
        <h2
          id={`project-title-${project.id}`}
          className="font-display mt-3 pr-16 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          {project.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">
          {project.description}
        </p>

        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} cover`}
            loading="lazy"
            className="mt-6 max-h-80 w-full rounded-xl object-cover"
          />
        )}
        {project.images?.length > 0 && (
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${project.title} detail ${index + 1}`}
                loading="lazy"
                className="w-full rounded-lg object-cover"
              />
            ))}
          </div>
        )}
        {project.video && (
          <video className="mt-5 w-full rounded-xl" controls src={project.video}>
            Your browser does not support embedded video.
          </video>
        )}

        {project.tags?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {project.technologies?.length > 0 && (
          <p className="mt-4 text-sm text-[var(--faint)]">
            Built with: {project.technologies.join(" · ")}
          </p>
        )}
        <div className="mt-7 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-white"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[#04121a]"
            >
              Live demo
            </a>
          )}
        </div>
      </section>
    </div>,
    document.body,
  );
}

export default ProjectDetails;
