import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  caption?: string;
  title: string | ReactNode;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({
  caption,
  title,
  description,
  align = "left",
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      {caption && (
        <span className="caption block mb-4">{caption}</span>
      )}
      <h2 className="heading-xl mb-4">
        {title}
      </h2>
      {description && (
        <p className={`body-lg max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};
