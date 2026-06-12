"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email",    href: "mailto:cadiz.edward@gmail.com",        external: false },
  { label: "GitHub",   href: "https://github.com/userFame",          external: true  },
  { label: "LinkedIn", href: "https://linkedin.com/in/edwardcadiz",  external: true  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#8A2B0E] text-[#FFF8F2]">
      <div className="wrap py-14 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#FFD3AC]/70 mb-6 sm:mb-8">
            Get in touch
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 sm:mb-10 max-w-4xl">
            Have a project
            <br />
            <span className="font-extralight italic text-[#FFD3AC]">
              in mind?
            </span>
          </h2>

          <p className="text-[#FFD3AC]/75 text-base leading-relaxed max-w-lg mb-10 sm:mb-14">
            I&apos;m currently open to new opportunities — freelance builds,
            contract roles, or full-time positions. If you&apos;re building
            something interesting, let&apos;s talk.
          </p>

          <div className="divide-y divide-[#FFD3AC]/20 max-w-xs sm:max-w-sm">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between py-4 sm:py-5 hover:text-[#FFD3AC] transition-colors"
              >
                <span className="text-base sm:text-lg font-semibold">{l.label}</span>
                <ArrowUpRight
                  size={18}
                  className="text-[#FFD3AC]/60 group-hover:text-[#FFD3AC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
