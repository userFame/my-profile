"use client";

import { motion } from "framer-motion";

const cols = [
  {
    heading: "Work",
    links: [
      { label: "DevFlow AI",        href: "#projects" },
      { label: "Smart TV App",      href: "#projects" },
      { label: "Realtime Chat",     href: "#projects" },
      { label: "Portfolio Builder", href: "#projects" },
      { label: "Finance Tracker",   href: "#projects" },
    ],
  },
  {
    heading: "Navigate",
    links: [
      { label: "Services",     href: "#services"     },
      { label: "Experience",   href: "#experience"   },
      { label: "Skills",       href: "#skills"       },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Email",    href: "mailto:eric@example.com"               },
      { label: "GitHub",   href: "https://github.com/yourusername"       },
      { label: "LinkedIn", href: "https://linkedin.com/in/yourusername"  },
      { label: "Résumé",   href: "/resume.pdf"                           },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#8A2B0E] text-[#FFF8F2] border-t border-[#FFD3AC]/15">
      <div className="wrap py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Ghost name */}
          <h2 className="text-[clamp(48px,10vw,120px)] font-bold leading-none tracking-tight mb-12 sm:mb-16 text-[#FFD3AC]/10 select-none">
            Edward Cadiz.
          </h2>

          {/* Link grid: 1 col → 2 col → 3 col */}
          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-14">
            {cols.map((col) => (
              <div key={col.heading}>
                <p className="text-[11px] uppercase tracking-widest text-[#FFD3AC]/60 mb-4 sm:mb-5">
                  {col.heading}
                </p>
                <ul className="space-y-2.5 sm:space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-[#FFF8F2]/55 hover:text-[#FFD3AC] transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#FFD3AC]/15 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="text-xs text-[#FFD3AC]/60">
              © {year} Edward Cadiz. — All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs text-[#FFD3AC]/60 hover:text-[#FFD3AC] transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
