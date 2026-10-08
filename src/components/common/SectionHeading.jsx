import { motion } from "framer-motion";

/**
 * Consistent section header: eyebrow label, title, optional description.
 * Keeps visual hierarchy uniform across all sections.
 */
function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`mb-12 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
        {eyebrow}
      </span>
      <h2 className="font-display mt-5 text-[clamp(2.2rem,5vw,3.7rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
