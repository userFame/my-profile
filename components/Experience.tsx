"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Work{" "}
            <span className="gradient-text">
              Experience
            </span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl">
            A timeline of my professional experience building
            frontend systems, backend services, and full-stack applications.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="space-y-10 relative">
          {/* Vertical line */}

          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-white/10" />

          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative pl-10"
            >
              {/* Dot */}

              <div className="absolute left-2 top-2 w-3 h-3 rounded-full bg-cyan-400" />

              {/* Card */}

              <div className="glass rounded-2xl p-6 card-hover">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h3 className="text-xl font-semibold">
                    {job.role}
                  </h3>

                  <span className="text-sm text-slate-400">
                    {job.period}
                  </span>
                </div>

                <p className="text-cyan-400 mt-1">
                  {job.company}
                </p>

                <p className="text-slate-400 mt-4">
                  {job.summary}
                </p>

                <ul className="mt-4 space-y-2">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-300 flex gap-2"
                    >
                      <span className="text-cyan-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}