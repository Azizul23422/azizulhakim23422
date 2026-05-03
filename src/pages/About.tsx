import { motion } from "framer-motion";
import azizPhoto from "@/assets/aziz-photo.jpg";
import { PageTransition } from "@/components/layout/PageTransition";
import { MorphingText } from "@/components/ui/MorphingText";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  };

  const values = [
    {
      title: "Clarity over decoration",
      description: "Good design removes barriers between users and their goals. I prioritize clear communication and intuitive interactions over visual complexity."
    },
    {
      title: "Research-driven decisions",
      description: "Assumptions are the enemy of good UX. I ground every design decision in user research, data analysis, and validated hypotheses."
    },
    {
      title: "Systematic thinking",
      description: "I build design systems, not just screens. Every component, pattern, and interaction should work together as part of a cohesive whole."
    },
    {
      title: "Collaborative craft",
      description: "The best products emerge from close collaboration between design, engineering, and product. I thrive in cross-functional environments."
    }
  ];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="section pt-32 md:pt-40">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div 
              {...fadeInUp}
              className="lg:col-span-7"
            >
              <span className="caption block mb-6">About Me</span>
              <h1 className="heading-display mb-8">
                <MorphingText
                  originalText="你好"
                  morphedText="Hello,"
                  delay={300}
                />
                <span className="block">I'm Azizul.</span>
              </h1>
              <p className="body-lg mb-6">
                I'm a product-focused UI/UX designer based in Dhaka, Bangladesh. 
                I specialize in creating digital experiences that balance aesthetics 
                with meaningful functionality.
              </p>
              <p className="body-md mb-6">
                With over 5 years of experience working with startups and established 
                companies, I've developed a deep appreciation for the intersection of 
                design, technology, and human behavior.
              </p>
              <p className="body-md">
                My approach is rooted in empathy and research. I believe that great 
                design is invisible — it feels natural, intuitive, and serves the 
                user's needs without drawing attention to itself.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="aspect-[4/5] rounded-lg bg-muted overflow-hidden">
                <img src={azizPhoto} alt="Azizul Hakim working at his desk" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="section bg-card border-t border-b border-border">
        <div className="container-narrow">
          <motion.div {...fadeInUp}>
            <span className="caption block mb-6">Background</span>
            <h2 className="heading-xl mb-8">How I got here</h2>
            <div className="space-y-6">
              <p className="body-lg">
                My journey into design began with a fascination for how digital 
                products shape human behavior. I started as a self-taught designer, 
                spending countless hours studying interfaces, reading about cognitive 
                psychology, and practicing my craft.
              </p>
              <p className="body-md">
                Over the years, I've worked across fintech, healthcare, SaaS, and 
                e-commerce — each domain teaching me something new about user needs, 
                business constraints, and the art of balancing both.
              </p>
              <p className="body-md">
                Today, I focus on end-to-end product design: from early research and 
                strategy through to detailed UI and design system development. I'm 
                particularly passionate about complex problems that require both 
                analytical thinking and creative solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-wide">
          <motion.div {...fadeInUp} className="mb-12 md:mb-16">
            <span className="caption block mb-4">Design Philosophy</span>
            <h2 className="heading-xl">What I believe</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 rounded-lg border border-border bg-card"
              >
                <span className="text-2xl font-display font-medium text-text-tertiary mb-4 block">
                  0{index + 1}
                </span>
                <h3 className="heading-sm mb-4">{value.title}</h3>
                <p className="body-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-sm bg-card border-t border-b border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div {...fadeInUp}>
              <span className="caption block mb-4">Research & Strategy</span>
              <ul className="space-y-2">
                {["User Research", "Competitive Analysis", "Journey Mapping", "Information Architecture", "Usability Testing"].map((skill) => (
                  <li key={skill} className="body-sm">{skill}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <span className="caption block mb-4">Design & Craft</span>
              <ul className="space-y-2">
                {["UI Design", "Interaction Design", "Prototyping", "Design Systems", "Motion Design"].map((skill) => (
                  <li key={skill} className="body-sm">{skill}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <span className="caption block mb-4">Tools</span>
              <ul className="space-y-2">
                {["Figma", "Framer", "Principle", "Notion", "Webflow"].map((skill) => (
                  <li key={skill} className="body-sm">{skill}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-wide text-center">
          <motion.div {...fadeInUp}>
            <h2 className="heading-xl mb-8">Want to work together?</h2>
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

export default About;
