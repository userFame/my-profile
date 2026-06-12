"use client";

import { motion } from "framer-motion";

const capabilities = [
  "Full-Stack Web Applications",
  "Connected Device UIs (Smart TV / Xbox)",
  "REST API Design & Integration",
  "TypeScript Architecture",
  "Database Modeling & Optimization",
  "Performance & Core Web Vitals",
  "WCAG Accessibility",
  "CI/CD & Deployment Pipelines",
];

const tools = [
  "Next.js", "React", "Node.js", "Express", "PostgreSQL",
  "Prisma", "Tailwind CSS", "Framer Motion", "Socket.io",
  "Docker", "AWS", "Vercel", "Git", "Figma", "Redis",
];

const marqueeItems = [...tools, ...tools];

export default function Skills() {
  return (
    <section id="skills" className="rule">
      <div className="wrap py-14 sm:py-20 md:py-24">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Tools of
            <br />
            <span className="font-extralight italic text-[#8B7355]">the trade</span>
          </h2>
          <p className="text-[#78716C] text-sm leading-relaxed mt-4 max-w-lg">
            Technologies I reach for daily — chosen for reliability,
            developer experience, and real-world performance.
          </p>
        </motion.div>

        {/* Capability grid: 1 col → 2 col → 3 col → 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#D6CFC4] mb-12 sm:mb-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="bg-[#F5F0E8] p-5 sm:p-6 hover:bg-[#EDE8DF] transition-colors"
            >
              <span className="text-[11px] text-[#78716C] uppercase tracking-widest block mb-2.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-medium leading-snug">{cap}</p>
            </motion.div>
          ))}
        </div>

        {/* Tools marquee — bleed to edges */}
        <div className="border-t border-b border-[#D6CFC4] py-4 sm:py-5 -mx-5 sm:-mx-8 md:-mx-10 lg:-mx-16 px-5 sm:px-8 md:px-10 lg:px-16 overflow-hidden">
          <p className="text-[11px] uppercase tracking-widest text-[#78716C] mb-3.5">
            Libraries &amp; Tools
          </p>
          <div className="overflow-hidden">
            <div className="marquee-inner">
              {marqueeItems.map((t, i) => (
                <span key={i} className="mx-6 sm:mx-7 text-sm font-medium text-[#1C1917] whitespace-nowrap">
                  {t}
                  <span className="ml-6 sm:ml-7 text-[#D6CFC4]">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
