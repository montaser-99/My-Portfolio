import { motion } from "framer-motion";
import { profile } from "../../data/profile";

function LoaderContent({ progress }) {
  return (
    <>
      <div className="flex w-full max-w-5xl items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--faint)]">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {profile.name}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Engineering Portfolio
        </motion.span>
      </div>

      <div className="my-auto flex flex-col items-center text-center">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            className="text-4xl font-extrabold tracking-tight sm:text-6xl"
          >
            <span className="text-white">MAHMOUD </span>
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">
              MONTASER
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]"
        >
          Communication &amp; Electronics Engineering
        </motion.p>

        <div className="relative mt-10 h-1.5 w-64 overflow-hidden rounded-full bg-[var(--surface-2)] sm:w-80">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] shadow-[0_0_12px_var(--accent)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-4 font-mono text-3xl font-bold tracking-tighter text-[var(--accent)]"
        >
          {progress}
          <span className="text-sm font-normal text-[var(--accent-2)]">%</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--faint)]"
      >
        <span className="h-2 w-2 animate-ping rounded-full bg-[var(--accent)]" />
        <span>Initialising systems…</span>
      </motion.div>
    </>
  );
}

export default LoaderContent;
