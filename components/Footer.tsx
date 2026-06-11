"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="section-container py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <div>
            <p className="font-medium">
              Eric C
            </p>

            <p className="text-sm text-muted-foreground">
              © {year} All Rights Reserved
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              LinkedIn
            </a>

            <a
              href="#top"
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              Back to Top
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}