"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email",    href: "mailto:eric@example.com",             external: false },
  { label: "GitHub",   href: "https://github.com/yourusername",     external: true  },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", external: true  },
];

export default function Contact() {
  return (
    <section id="contact" className="rule bg-[#1C1917] text-[#F5F0E8]">
      <div className="wrap py-16 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#78716C] mb-6 sm:mb-8">
            Get in touch
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 sm:mb-10 max-w-4xl">
            Have a project
            <br />
            <span className="font-extralight italic text-[#8B7355]">
              in mind?
            </span>
          </h2>

          <p className="text-[#78716C] text-base leading-relaxed max-w-lg mb-10 sm:mb-14">
            I&apos;m currently open to new opportunities — freelance builds,
            contract roles, or full-time positions. If you&apos;re building
            something interesting, let&apos;s talk.
          </p>

          <div className="divide-y divide-[#78716C]/20 max-w-xs sm:max-w-sm">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between py-4 sm:py-5 hover:text-[#8B7355] transition-colors"
              >
                <span className="text-base sm:text-lg font-semibold">{l.label}</span>
                <ArrowUpRight
                  size={18}
                  className="text-[#78716C] group-hover:text-[#8B7355] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
