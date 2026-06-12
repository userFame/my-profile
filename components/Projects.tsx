"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "DevFlow AI",
    year: "2025",
    category: "Full Stack",
    description: "AI-powered task manager that breaks down features into structured implementation steps using the OpenAI API.",
    tech: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    link: "https://github.com/yourname/devflow-ai",
    accent: "#C4B49A",
  },
  {
    name: "Smart TV Streaming App",
    year: "2024",
    category: "Connected Device",
    description: "Samsung Smart TV + Xbox sports streaming app. Defined spatial navigation patterns and owned the architecture end-to-end.",
    tech: ["Next.js", "TypeScript", "Node.js", "Spatial Nav"],
    link: null,
    accent: "#B8C4B8",
  },
  {
    name: "Realtime Chat",
    year: "2024",
    category: "Full Stack",
    description: "WebSocket chat with rooms, typing indicators, and PostgreSQL-backed message history.",
    tech: ["Next.js", "Socket.io", "Prisma", "PostgreSQL"],
    link: "https://github.com/yourname/chat-app",
    accent: "#C4BAB8",
  },
  {
    name: "Portfolio Builder",
    year: "2024",
    category: "Full Stack",
    description: "Drag-and-drop portfolio builder for developers — live preview, exportable templates, Node.js backend.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/yourname/portfolio-builder",
    accent: "#B8C0C4",
  },
  {
    name: "Finance Tracker UI",
    year: "2023",
    category: "Frontend",
    description: "Dashboard UI for personal finance — expenses, savings goals, and interactive Chart.js visualisations.",
    tech: ["Next.js", "Chart.js", "Tailwind CSS"],
    link: "https://github.com/yourname/finance-ui",
    accent: "#C4C2B8",
  },
  {
    name: "API Rate Limiter",
    year: "2023",
    category: "Backend",
    description: "Token-bucket rate limiting service for REST APIs. Redis-backed, horizontally scalable.",
    tech: ["Node.js", "Redis", "Express"],
    link: "https://github.com/yourname/rate-limiter",
    accent: "#C8C4BC",
  },
  {
    name: "Noble Studios Refresh",
    year: "2021",
    category: "Frontend",
    description: "Sitewide Core Web Vitals and accessibility improvements across a portfolio of client WordPress sites.",
    tech: ["WordPress", "PHP", "JavaScript", "CSS"],
    link: null,
    accent: "#C4BCB4",
  },
  {
    name: "Admin Dashboard Suite",
    year: "2020",
    category: "Full Stack",
    description: "Messaging, notifications, and auth system for an AngularJS + Express admin platform.",
    tech: ["AngularJS", "Express", "Node.js", "MySQL"],
    link: null,
    accent: "#C0C4BC",
  },
];

const filters = ["All", "Full Stack", "Frontend", "Backend", "Connected Device"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="rule">
      <div className="wrap py-14 sm:py-20 md:py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Selected
            <br />
            <span className="font-extralight italic text-[#8B7355]">work</span>
          </h2>

          {/* Filters — scrollable on mobile */}
          <div className="flex flex-wrap gap-1.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-sm border transition-all duration-200 font-medium whitespace-nowrap ${
                  active === f
                    ? "bg-[#1C1917] text-[#F5F0E8] border-[#1C1917]"
                    : "border-[#D6CFC4] text-[#78716C] hover:border-[#1C1917] hover:text-[#1C1917]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project rows */}
        <div className="divide-y divide-[#D6CFC4]">
          {list.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative py-5 sm:py-6 transition-colors duration-200"
              style={{ backgroundColor: hovered === i ? p.accent + "28" : "transparent" }}
            >
              {/* Top row: year + name + category + link */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-baseline gap-3 sm:gap-5 min-w-0">
                  <span className="text-xs tabular-nums text-[#78716C] shrink-0 w-9 sm:w-10">{p.year}</span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                      <span className="text-base sm:text-lg font-semibold">{p.name}</span>
                      <span className="chip">{p.category}</span>
                    </div>
                    {/* Description — visible on all sizes */}
                    <p className="text-sm text-[#78716C] leading-relaxed mt-1.5 max-w-2xl">
                      {p.description}
                    </p>
                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {p.tech.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 mt-1">
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs text-[#78716C] hover:text-[#1C1917] transition-colors font-medium uppercase tracking-wider"
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                      <span className="hidden sm:inline">View</span>
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="text-xs text-[#D6CFC4] uppercase tracking-wider hidden sm:inline">
                      Private
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
