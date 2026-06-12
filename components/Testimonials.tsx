"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="rule">
      <div className="wrap py-14 sm:py-20 md:py-24">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            What people
            <br />
            <span className="font-extralight italic text-[#E35336]">say</span>
          </h2>
          <p className="text-[#9988A1] text-sm leading-relaxed mt-4 max-w-lg">
            Feedback from colleagues, managers, and collaborators across
            every role I&apos;ve held.
          </p>
        </motion.div>

        {/* Responsive grid: 1 → 2 → 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#EAC8B0]">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-[#FFF8F2] p-6 sm:p-8 flex flex-col"
            >
              <p className="text-[36px] sm:text-[40px] leading-none text-[#FFD3AC] font-serif mb-4 select-none">
                &ldquo;
              </p>
              <p className="text-sm leading-[1.8] text-[#2A0E06] flex-1 mb-6 sm:mb-8">
                {t.quote}
              </p>
              <div className="border-t border-[#EAC8B0] pt-4 sm:pt-5">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-[11px] text-[#9988A1] mt-0.5 uppercase tracking-wider">
                  {t.role} · {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
