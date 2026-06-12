"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="rule">
      <div className="wrap py-14 sm:py-20 md:py-24">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Where I&apos;ve
            <br />
            <span className="font-extralight italic text-[#E35336]">been</span>
          </h2>
          <p className="text-[#9988A1] text-sm leading-relaxed mt-4 max-w-lg">
            Seven years across agencies, startups, and connected-device platforms —
            from building admin dashboards early in my career to owning streaming app
            architecture at scale.
          </p>
        </motion.div>

        <div className="divide-y divide-[#EAC8B0]">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="py-8 sm:py-10"
            >
              {/* Meta row — always visible */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-4">
                <div>
                  <p className="font-semibold text-base sm:text-lg leading-tight">{job.company}</p>
                  <p className="text-sm text-[#E35336] font-medium mt-0.5">{job.role}</p>
                </div>
                <p className="text-[11px] uppercase tracking-widest text-[#9988A1] shrink-0">
                  {job.period}
                </p>
              </div>

              {/* Detail */}
              <p className="text-sm leading-relaxed text-[#9988A1] mb-4 max-w-2xl">
                {job.summary}
              </p>
              <ul className="space-y-2">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#2A0E06]">
                    <span className="text-[#FFD3AC] mt-[3px] shrink-0 text-xs">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
