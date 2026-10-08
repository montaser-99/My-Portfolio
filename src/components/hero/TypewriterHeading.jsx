import { useState, useEffect, memo } from "react";
import { profile } from "../../data/profile";

const phrases = profile.heroPhrases;

/** Typewriter that cycles through the engineering focus phrases. */
const TypewriterHeading = memo(function TypewriterHeading() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[textIndex];
    let speed = isDeleting ? 32 : 70;

    if (!isDeleting && charIndex === current.length) {
      speed = 2000;
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % phrases.length);
      speed = 320;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <span className="font-mono text-sm sm:text-base tracking-wide text-[var(--accent)]">
      {phrases[textIndex].substring(0, charIndex)}
      <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[2px] animate-pulse bg-[var(--accent)]" />
    </span>
  );
});

export default TypewriterHeading;
