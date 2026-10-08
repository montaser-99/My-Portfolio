import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa6";
import SectionHeading from "../components/common/SectionHeading";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="engineering-section engineering-experience relative mx-auto w-[calc(100%-32px)] max-w-[1080px] py-20 sm:w-[calc(100%-44px)] sm:py-28"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Where I've contributed"
        description="Experience across engineering and technical learning."
      />

      <div className="relative border-l border-[var(--border)] pl-6 sm:pl-8">
        {experiences.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative mb-6 last:mb-0"
          >
            {/* Timeline node */}
            <span className="absolute -left-[31px] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-[var(--accent)]/50 bg-[var(--bg)] sm:-left-[39px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </span>

            <div className="card-surface rounded-2xl p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {item.role}
                </h3>
                {item.period && (
                  <span className="rounded-md border border-[var(--border)] bg-[var(--bg-2)] px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--accent)]">
                    {item.period}
                  </span>
                )}
              </div>

              <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[13px] text-[var(--muted)]">
                <FaBriefcase className="text-[var(--accent)]" />
                <span>{item.company}</span>
                {item.location && (
                  <>
                    <span className="text-[var(--border)]">•</span>
                    <span className="text-[var(--faint)]">{item.location}</span>
                  </>
                )}
              </div>

              {item.summary && (
                <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted)]">
                  {item.summary}
                </p>
              )}

              {item.bullets?.length > 0 && (
                <ul className="mt-3 flex flex-col gap-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-[13px] leading-relaxed text-[var(--muted)]"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {item.skills?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[var(--border-soft)] pt-4">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[var(--border)] bg-[var(--bg-2)] px-2 py-0.5 font-mono text-[11px] text-[var(--muted)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
