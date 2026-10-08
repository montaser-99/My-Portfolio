import { motion } from "framer-motion";

function FocusCard({ area, index }) {
  const Icon = area.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className={`focus-card focus-card-${area.id} card-surface group relative overflow-hidden rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-7`}
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl border border-[var(--accent)]/35 bg-[var(--accent)]/10 text-[var(--accent)]">
        <Icon className="text-xl" />
      </span>

      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--faint)]">
        0{index + 1}
      </p>
      <h3 className="mt-1 text-lg font-bold text-white">{area.title}</h3>
      <p className="mt-2.5 text-[13px] leading-relaxed text-[var(--muted)]">
        {area.description}
      </p>

      <ul className="mt-5 flex flex-col gap-2 border-t border-[var(--border-soft)] pt-4">
        {area.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 text-[13px] text-[var(--muted)]"
          >
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
            {point}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default FocusCard;
