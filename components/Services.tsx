"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    index: "01",
    title: "Full Stack Development",
    shortline: "React · Next.js · Node.js · PostgreSQL",
    body: "End-to-end application engineering — data model through deployed UI. I design schemas, build APIs, and craft the interface. When you need one person who can own an entire product, that's where I thrive.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    index: "02",
    title: "Frontend Engineering",
    shortline: "TypeScript · Performance · Accessibility",
    body: "Interfaces that feel instant. I obsess over Core Web Vitals, bundle size, and render performance — because speed is a feature. Every component is typed, accessible, and tested before it ships.",
    tags: ["TypeScript", "Tailwind CSS", "Framer Motion", "WCAG", "Web Vitals"],
  },
  {
    index: "03",
    title: "Connected Device UIs",
    shortline: "Smart TV · Xbox · Streaming · Spatial Nav",
    body: "Specialized experience building UI for Samsung Smart TV, Xbox, and other non-standard platforms. Spatial navigation, focus management, remote-control interaction patterns — I've owned the architecture on streaming apps at scale.",
    tags: ["Smart TV", "Xbox", "Spatial Nav", "Streaming", "Next.js"],
  },
  {
    index: "04",
    title: "API & Backend Systems",
    shortline: "Node.js · Express · PostgreSQL · AWS",
    body: "Robust backend services built for longevity. Authentication, rate limiting, data modeling, and API design done right the first time — with documentation and test coverage to prove it.",
    tags: ["Node.js", "Express", "PostgreSQL", "AWS", "Auth"],
  },
  {
    index: "05",
    title: "Maintenance & Performance",
    shortline: "Audits · Refactors · Ongoing Support",
    body: "Inherited a codebase that's slowing you down? I audit, refactor, and modernize. Ongoing retainers available for teams that need a reliable engineer on call without a full-time commitment.",
    tags: ["Audits", "Refactoring", "TypeScript", "SEO", "Security"],
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="rule">
      <div className="wrap py-14 sm:py-20 md:py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            What I can
            <br />
            <span className="font-extralight italic text-[#8B7355]">do for you</span>
          </h2>
          <p className="text-[#78716C] text-sm leading-relaxed mt-4 max-w-lg">
            From greenfield builds to legacy rescues. Whether you need a complete product
            or a specialist to fill a gap — here's where I can help.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-[#D6CFC4]">
          {services.map((s, i) => (
            <motion.div
              key={s.index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 sm:py-6 text-left group"
              >
                <div className="flex items-baseline gap-4 sm:gap-6 min-w-0 pr-4">
                  <span className="text-[11px] text-[#78716C] tabular-nums shrink-0">{s.index}</span>
                  <div className="min-w-0">
                    <span className="text-base sm:text-lg md:text-xl font-semibold group-hover:text-[#8B7355] transition-colors">
                      {s.title}
                    </span>
                    <span className="ml-3 text-xs text-[#78716C] hidden sm:inline">{s.shortline}</span>
                  </div>
                </div>
                <span className="text-[#78716C] shrink-0">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-7 sm:pl-11 pb-7 sm:pb-8 pr-2 sm:pr-8">
                      <p className="text-sm leading-relaxed text-[#78716C] max-w-2xl mb-5">
                        {s.body}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span key={t} className="chip">{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
