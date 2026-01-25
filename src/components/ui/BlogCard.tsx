import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  index?: number;
}

export const BlogCard = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  index = 0,
}: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        to={`/blog/${id}`}
        className="group block py-8 border-b border-border hover:border-text-tertiary transition-colors duration-500"
      >
        <article className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
          {/* Date */}
          <div className="md:w-32 shrink-0">
            <span className="text-sm text-text-tertiary">{date}</span>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="heading-sm mb-2 group-hover:text-text-secondary transition-colors duration-300">
              {title}
            </h3>
            <p className="body-sm line-clamp-2 mb-4">
              {excerpt}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-text-tertiary">{readTime}</span>
              <motion.span
                className="inline-flex items-center gap-1 text-sm text-text-tertiary group-hover:text-foreground transition-colors duration-300"
                whileHover={{ x: 4 }}
              >
                Read article
                <ArrowRight size={14} />
              </motion.span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};
