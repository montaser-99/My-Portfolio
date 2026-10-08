import { motion } from "framer-motion";
import TypewriterHeading from "../components/hero/TypewriterHeading";
import HeroCTAs from "../components/hero/HeroCTAs";
import { profile } from "../data/profile";
import { useState } from "react";

function Hero() {
  const [portraitUnavailable, setPortraitUnavailable] = useState(false);
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-24 sm:px-8"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-9 lg:grid-cols-[1fr_0.72fr] lg:gap-5">
        <div className="order-2 flex justify-center lg:order-2">
          {!portraitUnavailable ? (
            <img
              src={profile.media.portrait}
              alt="Portrait of Mahmoud Montaser"
              fetchPriority="high"
              decoding="async"
              onError={() => setPortraitUnavailable(true)}
              className="hero-portrait h-auto max-h-[72svh] w-[min(88vw,380px)] object-contain lg:w-[min(100%,440px)]"
            />
          ) : (
            <span className="self-center font-display text-5xl font-semibold tracking-tight text-white">
              MM
            </span>
          )}
        </div>
        <div className="order-1 text-center lg:order-1 lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-4 py-1.5 backdrop-blur-gpu"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
          <TypewriterHeading />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display text-[clamp(3.3rem,8vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white"
        >
          {profile.name.split(" ")[0]}{" "}
          <span className="text-cyan-200">
            {profile.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-4 text-base font-medium tracking-wide text-[var(--muted)] sm:text-lg"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-9 flex justify-center lg:justify-start"
        >
          <HeroCTAs />
        </motion.div>
        </div>
      </div>

      {/* Bottom fade into the page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[var(--bg)]" />
    </section>
  );
}

export default Hero;
