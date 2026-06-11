"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
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
            My{" "}
            <span className="gradient-text">Skills</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl">
            I work across both frontend and backend systems,
            building full-stack applications with modern tools
            and scalable architecture.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="glass rounded-2xl p-6 card-hover"
            >
              {/* Title */}

              <h3 className="text-xl font-semibold mb-6">
                {group.title}
              </h3>

              {/* Skills List */}

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3
                      py-1
                      text-sm
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                      text-slate-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}