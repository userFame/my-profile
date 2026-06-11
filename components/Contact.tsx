"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Something{" "}
            <span className="gradient-text">Great</span>
          </h2>

          <p className="mt-4 text-slate-400 max-w-xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities,
            collaborating on projects, or simply connecting with other
            developers.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:eric@example.com"
              className="glass rounded-xl px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              Email Me
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
