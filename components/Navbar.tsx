"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work",       href: "#projects"   },
  { label: "Services",   href: "#services"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [solid, setSolid]     = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? "bg-[#FFF8F2]/90 backdrop-blur-sm border-b border-[#EAC8B0]" : ""
        }`}
      >
        <div className="wrap flex h-[60px] items-center justify-between">
          <a
            href="#home"
            onClick={(e: React.MouseEvent) => { e.preventDefault(); go("#home"); }}
            className="text-sm font-semibold tracking-tight hover-line pb-px"
          >
            Edward Cadiz.
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-sm text-[#9988A1] hover-line pb-px hover:text-[#2A0E06] transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-xs font-medium uppercase tracking-widest border-b border-[#2A0E06] pb-px hover:text-[#E35336] hover:border-[#E35336] transition-colors"
          >
            Résumé ↗
          </a>

          <button className="md:hidden" onClick={() => setOpen((p: boolean) => !p)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#FFF8F2] border-b border-[#EAC8B0] px-6 py-8 flex flex-col gap-6 md:hidden"
          >
            {links.map((l) => (
              <button key={l.href} onClick={() => go(l.href)} className="text-left text-2xl font-semibold">
                {l.label}
              </button>
            ))}
            <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`} target="_blank" rel="noopener noreferrer" className="text-sm text-[#9988A1] mt-2">
              Download Résumé ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
