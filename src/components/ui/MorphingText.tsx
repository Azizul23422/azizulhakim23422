import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MorphingTextProps {
  originalText: string;
  morphedText: string;
  className?: string;
  delay?: number;
}

export const MorphingText = ({
  originalText,
  morphedText,
  className = "",
  delay = 0,
}: MorphingTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayText, setDisplayText] = useState(originalText);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      setIsAnimating(true);
      morphText();
    }, delay + 500);

    return () => clearTimeout(timer);
  }, [isInView, delay]);

  const morphText = () => {
    const chars = morphedText.split("");
    const originalChars = originalText.split("");
    const maxLength = Math.max(chars.length, originalChars.length);

    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex >= maxLength) {
        clearInterval(interval);
        setDisplayText(morphedText);
        setIsAnimating(false);
        return;
      }

      setDisplayText((prev) => {
        const prevChars = prev.split("");
        if (currentIndex < chars.length) {
          prevChars[currentIndex] = chars[currentIndex];
        }
        return prevChars.slice(0, Math.max(chars.length, currentIndex + 1)).join("");
      });

      currentIndex++;
    }, 50);
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      {displayText.split("").map((char, index) => (
        <motion.span
          key={`${index}-${char}`}
          className="inline-block"
          initial={isAnimating && index === displayText.length - 1 ? { opacity: 0, y: 10 } : {}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};
