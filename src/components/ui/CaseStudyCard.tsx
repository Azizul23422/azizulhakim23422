import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface CaseStudyCardProps {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  image?: string;
  projectUrl?: string;
  index?: number;
}

export const CaseStudyCard = ({
  id,
  title,
  subtitle,
  role,
  year,
  image,
  projectUrl,
  index = 0,
}: CaseStudyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        to={`/case-studies/${id}`}
        className="group block"
      >
        <article className="card-elevated p-6 md:p-8 h-full flex flex-col">
          {/* Meta */}
          <div className="flex items-center justify-between mb-6">
            <span className="caption">{role}</span>
            <span className="text-xs text-text-tertiary">{year}</span>
          </div>

          {/* Image */}
          <div className="aspect-[16/10] rounded-md bg-muted mb-6 overflow-hidden relative">
            {image ? (
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-accent opacity-50" />
            )}
            <motion.div
              className="absolute inset-0 bg-foreground/5"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="heading-sm mb-3 group-hover:text-text-secondary transition-colors duration-300">
              {title}
            </h3>
            <p className="body-sm line-clamp-2">
              {subtitle}
            </p>
          </div>

          {/* Arrow */}
          <div className="mt-6 flex items-center gap-2 text-text-tertiary group-hover:text-foreground transition-colors duration-300">
            <span className="text-sm font-medium">View case study</span>
            <motion.div
              initial={{ x: 0, y: 0 }}
              whileHover={{ x: 4, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight size={16} />
            </motion.div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};
