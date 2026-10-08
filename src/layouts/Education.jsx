import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import SectionHeading from "../components/common/SectionHeading";
import { profile } from "../data/profile";

function Education() {
  const { degree, institution, period, details } = profile.education;

  return (
    <section
      id="education"
      className="engineering-section engineering-education relative mx-auto w-[calc(100%-32px)] max-w-[1080px] py-20 sm:w-[calc(100%-44px)] sm:py-28"
    >
      <SectionHeading eyebrow="Education" title="Academic background" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="card-surface flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:p-7"
      >
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]">
          <FaGraduationCap className="text-2xl" />
        </span>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-white">{degree}</h3>
          {(institution || period) && (
            <p className="mt-1 flex flex-wrap items-center gap-2 text-[13px] text-[var(--muted)]">
              {institution && <span>{institution}</span>}
              {institution && period && (
                <span className="text-[var(--border)]">•</span>
              )}
              {period && (
                <span className="font-mono text-[var(--accent)]">{period}</span>
              )}
            </p>
          )}
          {details?.length > 0 && (
            <ul className="mt-3 flex flex-col gap-1.5">
              {details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-2 text-[13px] leading-relaxed text-[var(--muted)]"
                >
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
