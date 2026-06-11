"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding relative">
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
            What People{" "}
            <span className="gradient-text">Say</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl">
            Feedback from colleagues, managers, and collaborators.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 card-hover"
            >
              <div className="mb-4 text-4xl leading-none text-purple-400/40 font-serif">
                "
              </div>

              <p className="mb-6 text-sm leading-relaxed text-slate-400">
                {testimonial.quote}
              </p>

              <div>
                <p className="font-semibold text-white">
                  {testimonial.name}
                </p>

                <p className="text-sm text-cyan-400 mt-0.5">
                  {testimonial.role}
                </p>

                <p className="text-sm text-slate-500">
                  {testimonial.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
