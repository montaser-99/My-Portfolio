/**
 * Filter bar driven by `activeProjectCategories` — only categories that
 * actually contain projects are shown, always prefixed with "All".
 * Filters operate on the project's PRIMARY category.
 */
function ProjectFilters({ categories, active, onChange }) {
  if (categories.length <= 1) return null;

  return (
    <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={`min-h-11 rounded-lg border px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.1em] transition ${
              isActive
                ? "border-[var(--accent)]/60 bg-[var(--accent)]/12 text-[var(--accent)]"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--accent)]/40 hover:text-[var(--text)]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default ProjectFilters;
