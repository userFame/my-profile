"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="gradient-text">Projects</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl">
            A selection of things I've built — from full-stack apps to
            frontend UIs and backend services.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid gap-6 md:grid-cols-2">
          {resume.projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass rounded-2xl p-6 card-hover group"
            >
              <h3 className="text-lg font-semibold group-hover:text-white transition-colors">
                {project.name}
              </h3>

              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
