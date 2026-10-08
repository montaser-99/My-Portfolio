import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Focus", href: "#focus" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleMenuKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleMenuKey);
    return () => document.removeEventListener("keydown", handleMenuKey);
  }, [menuOpen]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          key="top-nav"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="fixed top-4 left-0 right-0 z-50 mx-auto flex h-[60px] w-[calc(100%-24px)] max-w-[1080px] items-center justify-between rounded-xl border border-[var(--border)] bg-[#0a1017]/85 px-4 backdrop-blur-gpu sm:w-[calc(100%-40px)]"
        >
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--accent)]/40 bg-[var(--accent)]/10 font-mono text-xs font-bold text-[var(--accent)]">
              MM
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-[var(--text)] sm:block">
              Mahmoud Montaser
            </span>
          </a>

          <nav
            className="hidden items-center gap-6 text-[13px] text-[var(--muted)] md:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-[var(--accent)]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-lg border border-[var(--accent)]/50 bg-[var(--accent)]/10 px-4 py-2 text-[13px] font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)]/20 sm:inline-flex"
            >
              Get in touch
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              ref={menuButtonRef}
              className="grid h-11 w-11 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] md:hidden"
            >
              {menuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="absolute left-0 right-0 top-[68px] mx-auto flex w-[calc(100%-24px)] max-w-[1080px] flex-col gap-1 rounded-xl border border-[var(--border)] bg-[#0a1017]/97 p-2 backdrop-blur-gpu sm:w-[calc(100%-40px)] md:hidden"
                aria-label="Mobile navigation"
                id="mobile-navigation"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="min-h-11 rounded-lg px-3 py-3 text-sm text-[var(--muted)] transition hover:bg-[var(--surface-2)] hover:text-[var(--accent)]"
                  >
                    {link.name}
                  </a>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

export default Navbar;
