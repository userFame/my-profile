"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const marqueeItems = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL",
  "AWS", "Framer Motion", "Tailwind CSS", "Connected Devices", "REST APIs",
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col pt-[60px]">

      {/* ── Main grid ─────────────────────────────────── */}
      <div className="flex-1 grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_500px]">

        {/* LEFT — text */}
        <div className="flex flex-col justify-between px-5 sm:px-8 md:px-10 lg:px-16 py-10 sm:py-14 lg:py-20">

          {/* Top: status */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.2em] text-[#9988A1]"
          >
            Alexandria, VA — Available for work
          </motion.p>

          {/* Middle: name + bio + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="my-8 lg:my-auto"
          >
            <h1 className="text-[clamp(64px,11vw,150px)] font-extrabold leading-[0.88] tracking-tight">
              Edward
              <br />
              <span className="font-light italic text-[#E35336]">C.</span>
            </h1>

            {/* Mobile photo — shown only below lg */}
            <div className="relative mt-8 mb-8 h-[280px] sm:h-[340px] w-full overflow-hidden bg-[#FFD3AC] lg:hidden rounded-sm">
              <Image
                src="/profile.jpg"
                alt="Edward Cadiz — Full Stack Developer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E06]/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="inline-flex items-center gap-2 bg-[#FFF8F2]/85 backdrop-blur-sm rounded-sm px-3 py-1.5 text-xs font-medium">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E35336]" />
                  Full Stack Developer
                </div>
              </div>
            </div>

            <p className="max-w-md text-[15px] leading-[1.75] text-[#9988A1]">
              Full-stack developer crafting fast, thoughtful web experiences —
              from backend APIs to pixel-perfect UIs. 7 years across
              agencies, startups, and connected-device platforms.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2 text-sm font-medium"
              >
                <span className="inline-block h-px w-10 bg-[#2A0E06] transition-all duration-300 group-hover:w-16" />
                View Work
              </button>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-[#9988A1] hover-line pb-px hover:text-[#2A0E06] transition-colors"
              >
                Get in touch
              </button>
            </div>
          </motion.div>

          {/* Bottom: stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-x-8 gap-y-4 sm:gap-x-12 pt-8 rule"
          >
            {[
              { n: "7+",  label: "Years exp."  },
              { n: "20+", label: "Projects"    },
              { n: "4",   label: "Companies"   },
            ].map(({ n, label }) => (
              <div key={label}>
                <p className="text-2xl sm:text-3xl font-bold">{n}</p>
                <p className="text-[11px] text-[#9988A1] uppercase tracking-wider mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — photo, desktop only */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block bg-[#FFD3AC] overflow-hidden"
        >
          <Image
            src="/profile.jpg"
            alt="Edward Cadiz — Full Stack Developer"
            fill
            priority
            sizes="500px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E06]/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="inline-flex items-center gap-2 bg-[#FFF8F2]/80 backdrop-blur-sm rounded-sm px-4 py-2 text-xs font-medium">
              <span className="inline-block h-2 w-2 rounded-full bg-[#E35336]" />
              Full Stack Developer
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Marquee bar ───────────────────────────────── */}
      <div className="rule overflow-hidden py-3">
        <div className="marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 sm:mx-8 text-[11px] uppercase tracking-[0.15em] text-[#9988A1] whitespace-nowrap">
              {item}
              <span className="ml-6 sm:ml-8 text-[#FFD3AC]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
