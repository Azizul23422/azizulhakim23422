import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { MorphingText } from "@/components/ui/MorphingText";
import { caseStudies } from "@/data/caseStudies";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === id);
  const currentIndex = caseStudies.findIndex((s) => s.id === id);
  const nextStudy = caseStudies[currentIndex + 1] || caseStudies[0];

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-wide">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-text-tertiary hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to case studies
          </Link>

          <motion.div {...fadeInUp}>
            <span className="caption block mb-4">{study.role} — {study.year}</span>
            <h1 className="heading-display mb-6">
              <MorphingText
                originalText="案例研究"
                morphedText={study.title}
                delay={300}
              />
            </h1>
            <p className="body-lg max-w-3xl">{study.subtitle}</p>
          </motion.div>

          {/* Meta */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-border"
          >
            <div>
              <span className="caption block mb-2">Client</span>
              <p className="text-foreground font-medium">{study.client}</p>
            </div>
            <div>
              <span className="caption block mb-2">Duration</span>
              <p className="text-foreground font-medium">{study.duration}</p>
            </div>
            <div>
              <span className="caption block mb-2">Team</span>
              <p className="text-foreground font-medium">{study.team}</p>
            </div>
            <div>
              <span className="caption block mb-2">Role</span>
              <p className="text-foreground font-medium">{study.role}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <motion.div
            {...fadeInUp}
            className="aspect-[21/9] rounded-lg bg-muted overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-muted to-accent" />
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-sm border-t border-border">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <span className="caption block mb-4">The Challenge</span>
            <h2 className="heading-lg mb-6">Problem Statement</h2>
            <p className="body-lg">{study.problem}</p>
          </motion.div>
        </div>
      </section>

      {/* Goals */}
      <section className="section-sm">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <span className="caption block mb-4">Objectives</span>
            <h2 className="heading-lg mb-8">Project Goals</h2>
            <ul className="space-y-4">
              {study.goals.map((goal, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 body-md"
                >
                  <span className="text-text-tertiary font-mono text-sm mt-1">0{index + 1}</span>
                  {goal}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Research */}
      <section className="section-sm bg-card border-t border-b border-border">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <span className="caption block mb-4">Discovery</span>
            <h2 className="heading-lg mb-8">Research & Insights</h2>
            <ul className="space-y-4">
              {study.research.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 body-md"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary mt-2.5 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-sm">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <span className="caption block mb-4">User Problems</span>
            <h2 className="heading-lg mb-8">Key Pain Points</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <span className="text-text-tertiary font-mono text-sm">0{index + 1}</span>
                  <p className="body-md mt-2">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-sm bg-card border-t border-b border-border">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <span className="caption block mb-4">Approach</span>
            <h2 className="heading-lg mb-6">The Solution</h2>
            <p className="body-lg">{study.solution}</p>
          </motion.div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section">
        <div className="container-wide">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="caption block mb-4">Results</span>
            <h2 className="heading-lg">Measurable Outcomes</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {study.outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-lg border border-border bg-card"
              >
                <span className="heading-xl block mb-2">{outcome.metric}</span>
                <span className="body-sm">{outcome.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="section-sm border-t border-border">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <span className="caption block mb-4">Reflection</span>
            <h2 className="heading-lg mb-8">Key Learnings</h2>
            <ul className="space-y-6">
              {study.learnings.map((learning, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-2xl font-display font-medium text-text-tertiary">
                    {index + 1}
                  </span>
                  <p className="body-md pt-1">{learning}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Next Project */}
      <section className="section bg-card border-t border-border">
        <div className="container-wide text-center">
          <motion.div {...fadeInUp}>
            <span className="caption block mb-4">Next Project</span>
            <Link
              to={`/case-studies/${nextStudy.id}`}
              className="group inline-block"
            >
              <h2 className="heading-xl group-hover:text-text-secondary transition-colors duration-300">
                {nextStudy.title}
              </h2>
              <span className="inline-flex items-center gap-2 mt-4 text-text-tertiary group-hover:text-foreground transition-colors">
                View case study
                <ArrowRight size={18} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CaseStudyDetail;
