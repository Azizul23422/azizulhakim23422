import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface MorphingTextProps {
  originalText: string;
  morphedText: string;
  className?: string;
  delay?: number;
}

// Characters used during the morph transition for a "decoding" feel
const MORPH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export const MorphingText = ({
  originalText,
  morphedText,
  className = "",
  delay = 0,
}: MorphingTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayChars, setDisplayChars] = useState<string[]>(originalText.split(""));
  const [phase, setPhase] = useState<"original" | "scrambling" | "resolved">("original");
  const animFrameRef = useRef<number>();

  const scrambleAndResolve = useCallback(() => {
    setPhase("scrambling");
    const target = morphedText.split("");
    const maxLen = Math.max(originalText.length, target.length);
    const resolved = new Array(maxLen).fill(false);
    const current = originalText.split("").concat(
      new Array(Math.max(0, maxLen - originalText.length)).fill(" ")
    );

    let tick = 0;
    const totalTicks = maxLen * 4 + 20;

    const step = () => {
      tick++;

      // Progressively resolve characters from left to right
      for (let i = 0; i < maxLen; i++) {
        if (resolved[i]) continue;

        const resolveAt = i * 3 + 8;
        if (tick >= resolveAt) {
          resolved[i] = true;
          current[i] = target[i] || "";
        } else if (tick > i * 2) {
          // Scramble phase: random intermediate characters
          current[i] = MORPH_CHARS[Math.floor(Math.random() * MORPH_CHARS.length)];
        }
      }

      // Trim trailing empty strings
      const trimmed = current.slice(0, target.length);
      setDisplayChars([...trimmed]);

      if (tick < totalTicks && !resolved.every(Boolean)) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        setDisplayChars(target);
        setPhase("resolved");
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  }, [originalText, morphedText]);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      scrambleAndResolve();
    }, delay + 400);

    return () => {
      clearTimeout(timer);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isInView, delay, scrambleAndResolve]);

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      aria-label={morphedText}
      role="text"
    >
      <AnimatePresence mode="popLayout">
        {displayChars.map((char, index) => (
          <motion.span
            key={`${index}-${phase === "resolved" ? "final" : "morph"}`}
            className="inline-block"
            style={{
              opacity: phase === "scrambling" && char !== morphedText[index] ? 0.6 : 1,
              filter: phase === "scrambling" && char !== morphedText[index] ? "blur(0.5px)" : "none",
              transition: "opacity 0.1s, filter 0.15s",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </motion.span>
  );
};
