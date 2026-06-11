"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-container section-padding"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight">
          Testimonials
        </h2>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          Feedback from colleagues, managers, and collaborators.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="mb-4 text-4xl leading-none text-muted-foreground/30">
              "
            </div>

            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              {testimonial.quote}
            </p>

            <div>
              <p className="font-medium">
                {testimonial.name}
              </p>

              <p className="text-sm text-muted-foreground">
                {testimonial.role}
              </p>

              <p className="text-sm text-muted-foreground">
                {testimonial.company}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}