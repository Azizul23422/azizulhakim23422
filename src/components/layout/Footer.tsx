import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Work", path: "/case-studies" },
    { name: "Writing", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
  social: [
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Dribbble", url: "https://dribbble.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-wide section-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link 
              to="/" 
              className="font-display text-xl font-medium tracking-tight text-foreground"
            >
              Azizul Hakim
            </Link>
            <p className="mt-4 body-sm max-w-sm">
              UI/UX Designer crafting thoughtful digital experiences that balance 
              aesthetics with meaningful functionality.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="caption mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="link-subtle text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-4">
            <h4 className="caption mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-subtle text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} Azizul Hakim. All rights reserved.
          </p>
          <p className="text-xs text-text-tertiary">
            Designed & built with intention
          </p>
        </div>
      </div>
    </footer>
  );
};
