"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  highlight: string;
  description: string;
};

export default function SectionHeader({
  title,
  highlight,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <h2 className="text-4xl md:text-5xl font-bold">
        {title}{" "}
        <span className="gradient-text">{highlight}</span>
      </h2>

      <p className="text-slate-400 mt-4 max-w-2xl">{description}</p>
    </motion.div>
  );
}
