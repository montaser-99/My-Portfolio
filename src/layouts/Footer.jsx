import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { profile } from "../data/profile";

const { links } = profile;

function Footer() {
  const socials = [
    { id: "github", href: links.github, icon: FaGithub, label: "GitHub" },
    { id: "linkedin", href: links.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
    {
      id: "email",
      href: links.email ? `mailto:${links.email}` : "",
      icon: FaEnvelope,
      label: "Email",
    },
  ].filter((social) => social.href);

  const year = new Date().getFullYear();

  return (
    <footer className="engineering-section engineering-footer mx-auto flex w-[calc(100%-32px)] max-w-[1080px] flex-col items-center justify-between gap-4 border-t border-[var(--border)] py-8 text-[13px] text-[var(--faint)] sm:w-[calc(100%-44px)] sm:flex-row">
      <span>
        © {year} {profile.name} · All Rights Reserved
      </span>

      {socials.length > 0 && (
        <div className="flex items-center gap-3">
          {socials.map(({ id, href, icon: Icon, label }) => (
            <a
              key={id}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
            >
              <Icon className="text-sm" />
            </a>
          ))}
        </div>
      )}

      <span className="font-mono text-[11px]">
        Software · AI · Embedded · Systems
      </span>
    </footer>
  );
}

export default Footer;
