"use client";

import { motion } from "framer-motion";

// Example Contact Data

// export const contact = {
//   email: "eric@example.com",
//   github: "https://github.com/yourusername",
//   linkedin: "https://linkedin.com/in/yourusername",
// };

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-container section-padding"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight">
          Let's Build Something Great
        </h2>

        <p className="mt-4 text-muted-foreground">
          I'm always interested in discussing new opportunities,
          collaborating on projects, or simply connecting with
          other developers.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:eric@example.com"
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 transition hover:bg-white/10"
          >
            Email Me
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 transition hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 transition hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}