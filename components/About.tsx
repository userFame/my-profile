"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        {/* Header */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          About{" "}
          <span className="gradient-text">Me</span>
        </motion.h2>

        {/* Grid Layout */}

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE — STORY */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I’m a Full Stack Developer focused on building scalable web applications
              with modern technologies like React, Next.js, Node.js, and PostgreSQL.
            </p>

            <p className="text-slate-400 leading-relaxed">
              I enjoy working across the entire stack — from crafting intuitive UI
              experiences to designing robust backend systems and APIs that scale.
            </p>

            <p className="text-slate-400 leading-relaxed">
              My focus is building clean, maintainable, and performant applications
              that solve real problems and deliver smooth user experiences.
            </p>

            {/* Philosophy Card */}

            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2">
                Engineering Philosophy
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Simplicity scales better than complexity. I prefer systems that are
                modular, readable, and predictable over overly clever abstractions.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE — STATS */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {/* Stat Card */}

            <div className="glass rounded-2xl p-6 text-center card-hover">
              <h3 className="text-3xl font-bold gradient-text">
                2+
              </h3>
              <p className="text-slate-400 mt-2">
                Years Experience
              </p>
            </div>

            <div className="glass rounded-2xl p-6 text-center card-hover">
              <h3 className="text-3xl font-bold gradient-text">
                15+
              </h3>
              <p className="text-slate-400 mt-2">
                Projects Built
              </p>
            </div>

            <div className="glass rounded-2xl p-6 text-center card-hover">
              <h3 className="text-3xl font-bold gradient-text">
                10+
              </h3>
              <p className="text-slate-400 mt-2">
                Technologies
              </p>
            </div>

            <div className="glass rounded-2xl p-6 text-center card-hover">
              <h3 className="text-3xl font-bold gradient-text">
                Full Stack
              </h3>
              <p className="text-slate-400 mt-2">
                Focus Area
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}