import { motion } from "framer-motion";

function SkillCategoryCard({ group, index }) {
  const Icon = group.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card-surface rounded-2xl p-6 transition-colors hover:border-[var(--accent)]/40 sm:p-7"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]">
          <Icon className="text-lg" />
        </span>
        <div>
          <h3 className="text-base font-bold text-white">{group.title}</h3>
          <p className="text-[11px] text-[var(--faint)]">{group.note}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--border-soft)] pt-5">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-[var(--border)] bg-[var(--bg-2)] px-3 py-1.5 font-mono text-[11.5px] font-medium text-[var(--muted)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCategoryCard;
