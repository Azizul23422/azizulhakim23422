import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { MorphingText } from "@/components/ui/MorphingText";

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  };

  const links = [
    { name: "LinkedIn", url: "https://linkedin.com/in/azizulhakim", icon: ArrowUpRight },
    { name: "Dribbble", url: "https://dribbble.com/azizulhakim", icon: ArrowUpRight },
    { name: "Twitter", url: "https://twitter.com/azizulhakim", icon: ArrowUpRight },
  ];

  return (
    <PageTransition>
      <section className="min-h-screen flex items-center pt-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Info */}
            <motion.div {...fadeInUp}>
              <span className="caption block mb-6">Contact</span>
              <h1 className="heading-display mb-8">
                <MorphingText
                  originalText="联系我"
                  morphedText="Let's talk"
                  delay={300}
                />
              </h1>
              <p className="body-lg mb-12 max-w-md">
                Have a project in mind? I'd love to hear about it. 
                Send me an email or connect on social media.
              </p>

              {/* Email */}
              <div className="mb-12">
                <span className="caption block mb-3">Email</span>
                <a
                  href="mailto:azizulhakim1549@gmail.com"
                  className="heading-sm link-subtle"
                >
                  azizulhakim1549@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="mb-12">
                <span className="caption block mb-3">Location</span>
                <p className="body-md flex items-center gap-2">
                  <MapPin size={16} className="text-text-tertiary" />
                  Dhaka, Bangladesh
                </p>
              </div>

              {/* Social Links */}
              <div>
                <span className="caption block mb-4">Connect</span>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-foreground transition-colors group"
                      >
                        {link.name}
                        <link.icon size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: CTA Card */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <div className="w-full p-8 md:p-12 rounded-lg border border-border bg-card">
                <div className="mb-8">
                  <Mail size={32} className="text-text-tertiary mb-6" />
                  <h2 className="heading-md mb-4">Send me a message</h2>
                  <p className="body-sm">
                    I typically respond within 24-48 hours. 
                    Looking forward to hearing from you.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:azizulhakim1549@gmail.com"
                    className="btn-primary w-full justify-center"
                  >
                    <Mail size={18} />
                    Send email
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full justify-center"
                  >
                    Download resume
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                {/* Availability */}
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-text-secondary">
                      Available for new projects
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
