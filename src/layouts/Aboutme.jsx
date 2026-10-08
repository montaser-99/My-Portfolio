import { motion } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";
import { profile } from "../data/profile";

function Aboutme() {
  return (
    <section
      id="about"
      className="engineering-section engineering-about relative mx-auto w-[calc(100%-32px)] max-w-[1080px] py-20 sm:w-[calc(100%-44px)] sm:py-28"
    >
      <SectionHeading
        eyebrow="About"
        title="Engineering across software, hardware, and intelligence"
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col justify-center"
        >
          <p className="text-base font-medium leading-relaxed text-[var(--text)]">
            {profile.about.intro}
          </p>
          {profile.about.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-4 text-sm leading-relaxed text-[var(--muted)]"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Interconnection pillars */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {profile.about.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="card-surface rounded-xl p-4 transition-colors hover:border-[var(--accent)]/45"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                  {pillar.label}
                </h3>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
