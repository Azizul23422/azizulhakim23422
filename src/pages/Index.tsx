import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { MorphingText } from "@/components/ui/MorphingText";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { caseStudies } from "@/data/caseStudies";

const Index = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24">
        <div className="container-wide">
          <div className="max-w-4xl">
            {/* Caption */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="caption block mb-6"
            >
              UI/UX Designer — Based in Dhaka
            </motion.span>

            {/* Main headline with morphing text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="heading-display mb-8"
            >
              <span className="block">Crafting</span>
              <span className="block">
                <MorphingText
                  originalText="有意义的"
                  morphedText="meaningful"
                  className="text-text-secondary"
                  delay={1000}
                />
              </span>
              <span className="block">digital experiences</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="body-lg max-w-2xl mb-12"
            >
              I'm Azizul Hakim, a product-focused designer who believes that 
              great design is invisible — felt, not seen. I help companies 
              build interfaces that solve real problems with clarity and intention.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/case-studies" className="btn-primary">
                View case studies
                <ArrowRight size={18} />
              </Link>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Resume
                <ArrowUpRight size={18} />
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-16 bg-gradient-to-b from-transparent via-text-tertiary to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section border-t border-border">
        <div className="container-wide">
          <SectionHeader
            caption="Selected Work"
            title="Case Studies"
            description="Deep dives into product design challenges, from research to outcomes."
          />

          <div className="grid-case-studies">
            {caseStudies.slice(0, 2).map((study, index) => (
              <CaseStudyCard
                key={study.id}
                id={study.id}
                title={study.title}
                subtitle={study.subtitle}
                role={study.role}
                year={study.year}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              to="/case-studies"
              className="link-subtle inline-flex items-center gap-2 text-lg"
            >
              View all case studies
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section bg-card border-t border-b border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="caption block mb-6">Design Philosophy</span>
              <h2 className="heading-xl mb-6">
                <MorphingText
                  originalText="简约至上"
                  morphedText="Simplicity"
                  delay={500}
                />
                <span className="block">is the ultimate</span>
                <span className="block">sophistication</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="body-lg mb-6">
                I approach design as a problem-solving discipline, not a decorative one. 
                Every element serves a purpose, every interaction guides the user forward.
              </p>
              <p className="body-md mb-8">
                My process combines deep user research, iterative prototyping, and 
                close collaboration with engineering to create products that are both 
                beautiful and functional.
              </p>
              <Link to="/about" className="link-subtle inline-flex items-center gap-2">
                Learn more about my approach
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Writing Preview */}
      <section className="section">
        <div className="container-wide">
          <SectionHeader
            caption="Writing"
            title="Thoughts on design"
            description="Essays on UX thinking, process, and the craft of building digital products."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-0"
          >
            {[
              { title: "Designing with Constraints", date: "Jan 2024" },
              { title: "The UX of Waiting", date: "Dec 2023" },
              { title: "Living Design Systems", date: "Nov 2023" },
            ].map((post, index) => (
              <Link
                key={post.title}
                to="/blog"
                className="group block py-6 border-b border-border hover:border-text-tertiary transition-colors duration-500"
              >
                <div className="flex items-center justify-between">
                  <h3 className="heading-sm group-hover:text-text-secondary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-text-tertiary hidden md:block">{post.date}</span>
                    <ArrowRight size={18} className="text-text-tertiary group-hover:text-foreground transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <Link
              to="/blog"
              className="link-subtle inline-flex items-center gap-2 text-lg"
            >
              Read all articles
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-card border-t border-border">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="caption block mb-6">Let's Connect</span>
            <h2 className="heading-xl mb-8 max-w-3xl mx-auto">
              Have a project in mind? Let's create something meaningful together.
            </h2>
            <Link to="/contact" className="btn-primary">
              Get in touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
