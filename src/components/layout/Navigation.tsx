import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Work", path: "/case-studies" },
  { name: "Writing", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/case-studies") {
      return location.pathname.startsWith("/case-studies");
    }
    if (path === "/blog") {
      return location.pathname.startsWith("/blog");
    }
    return location.pathname === path;
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-subtle"
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-display text-lg md:text-xl font-medium tracking-tight text-foreground hover:opacity-70 transition-opacity duration-300"
          >
            Azizul Hakim
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-foreground"
                    : "text-text-secondary hover:text-foreground"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-outline text-sm py-2 px-4"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container-wide py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-2xl font-display font-medium transition-colors duration-300 ${
                      isActive(link.path)
                        ? "text-foreground"
                        : "text-text-secondary hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
