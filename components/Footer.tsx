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
    <footer className="bg-[#1C1917] text-[#F5F0E8] border-t border-[#F5F0E8]/10">
      <div className="wrap py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Ghost name */}
          <h2 className="text-[clamp(48px,10vw,120px)] font-bold leading-none tracking-tight mb-12 sm:mb-16 text-[#F5F0E8]/10 select-none">
            Eric C.
          </h2>

          {/* 3-col grid: stacks to 2-col on sm, 3-col on md+ */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-14">
            {cols.map((col) => (
              <div key={col.heading}>
                <p className="text-[11px] uppercase tracking-widest text-[#78716C] mb-4 sm:mb-5">
                  {col.heading}
                </p>
                <ul className="space-y-2.5 sm:space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-[#F5F0E8]/50 hover:text-[#F5F0E8] transition-colors"
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
          <div className="border-t border-[#F5F0E8]/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="text-xs text-[#78716C]">
              © {year} Eric C. — All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs text-[#78716C] hover:text-[#F5F0E8] transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
