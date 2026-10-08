import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { profile } from "../../data/profile";

const { links } = profile;

/**
 * Contact channels + socials, all driven by src/data/profile.js.
 * Only entries with a real value render — nothing is invented, and no
 * private information is hardcoded here.
 */
function ContactInfoCard() {
  const channels = [
    {
      id: "email",
      label: "Email",
      value: links.email,
      href: links.email ? `mailto:${links.email}` : "",
      icon: FaEnvelope,
    },
    {
      id: "phone",
      label: "Phone / WhatsApp",
      value: links.phone,
      href: links.phone ? `tel:${links.phone}` : "",
      icon: FaPhone,
    },
    {
      id: "location",
      label: "Location",
      value: links.location,
      href: "",
      icon: FaLocationDot,
    },
  ].filter((channel) => channel.value);

  const socials = [
    { id: "github", label: "GitHub", href: links.github, icon: FaGithub },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: links.linkedin,
      icon: FaLinkedinIn,
    },
  ].filter((social) => social.href);

  if (channels.length === 0 && socials.length === 0) {
    return (
      <div className="card-surface rounded-2xl p-6 text-[13px] leading-relaxed text-[var(--muted)]">
        Contact details are being finalised. Add an email, phone, or social
        link in <span className="font-mono text-[var(--accent)]">src/data/profile.js</span>{" "}
        and it will appear here automatically.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {channels.map(({ id, label, value, href, icon: Icon }) => {
        const inner = (
          <>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[var(--accent)]/25 bg-[var(--accent)]/10 text-[var(--accent)]">
              <Icon className="text-base" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-[11px] uppercase tracking-[0.12em] text-[var(--faint)]">
                {label}
              </span>
              <span className="break-all text-sm font-semibold text-[var(--text)] sm:break-normal">
                {value}
              </span>
            </span>
          </>
        );

        return href ? (
          <a
            key={id}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="card-surface flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-[var(--accent)]/45"
          >
            {inner}
          </a>
        ) : (
          <div
            key={id}
            className="card-surface flex items-center gap-4 rounded-2xl p-4"
          >
            {inner}
          </div>
        );
      })}

      {socials.length > 0 && (
        <div className="mt-1 flex items-center gap-3 border-t border-[var(--border-soft)] pt-4">
          {socials.map(({ id, label, href, icon: Icon }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
            >
              <Icon className="text-lg" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactInfoCard;
