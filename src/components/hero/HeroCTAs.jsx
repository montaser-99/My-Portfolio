import { FaFileLines, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "../../data/profile";

/**
 * Primary hero CTAs. Each button renders ONLY when its URL is configured in
 * src/data/profile.js — no dead or invented links. Drop real URLs into
 * profile.links and the buttons appear automatically.
 */
function HeroCTAs() {
  const ctas = [
    {
      key: "resume",
      label: "Resume",
      href: profile.links.resume,
      icon: FaFileLines,
      primary: true,
      download: true,
    },
    { key: "github", label: "GitHub", href: profile.links.github, icon: FaGithub },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: profile.links.linkedin,
      icon: FaLinkedinIn,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      {ctas.map(({ key, label, href, icon: Icon, primary, download }) =>
        primary ? (
          <a
            key={key}
            href={href}
            download={download || undefined}
            target={download ? undefined : "_blank"}
            rel={download ? undefined : "noreferrer"}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[#04121a] shadow-[0_0_24px_rgba(34,211,238,0.2)] transition hover:-translate-y-0.5 hover:bg-[#5ee0f5]"
          >
            <Icon className="text-base" /> {label}
          </a>
        ) : href ? (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
          >
            <Icon className="text-base" /> {label}
          </a>
        ) : (
          <span
            key={key}
            aria-disabled="true"
            title={`Add the real ${label} URL in src/data/profile.js`}
            className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]/50 px-5 py-2.5 text-sm font-semibold text-[var(--faint)]"
          >
            <Icon className="text-base" /> {label}
          </span>
        )
      )}
    </div>
  );
}

export default HeroCTAs;
