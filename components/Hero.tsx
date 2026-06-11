"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techStack: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "AWS",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        pt-32
        pb-20
        relative
        overflow-hidden
        min-h-screen
        flex
        items-center
      "
    >
      {/* Background */}

      <div className="absolute inset-0 grid-background" />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
        }}
        className="
          blob
          blob-purple
          w-[500px]
          h-[500px]
          top-0
          left-0
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
        className="
          blob
          blob-cyan
          w-[400px]
          h-[400px]
          bottom-0
          right-0
        "
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}

          <div>
            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                inline-flex
                items-center
                rounded-full
                glass
                px-4
                py-2
                text-sm
                text-cyan-400
              "
            >
              Full Stack Developer
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
              className="
                mt-6
                text-5xl
                md:text-7xl
                font-bold
                leading-tight
              "
            >
              Building
              <span className="gradient-text">
                {" "}Modern Web
              </span>
              <br />
              Experiences
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="
                mt-6
                max-w-2xl
                text-lg
                text-slate-400
                leading-relaxed
              "
            >
              I create scalable backend systems and
              high-performance frontend applications
              using modern technologies such as
              React, Next.js, TypeScript, Node.js,
              PostgreSQL and AWS.
            </motion.p>

            {/* Actions */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-600
                  to-cyan-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:scale-105
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  glass
                  rounded-xl
                  px-8
                  py-4
                  font-semibold
                "
              >
                Contact Me
              </a>
            </motion.div>

            {/* Tech Pills */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
              }}
              className="
                mt-12
                flex
                flex-wrap
                gap-3
              "
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="
                    glass
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    text-slate-300
                  "
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              flex
              justify-center
              lg:justify-end
            "
          >
            <div className="relative">
              {/* Gradient Ring */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-r
                  from-purple-500
                  via-cyan-400
                  to-emerald-400
                  blur-md
                "
              />

              <div
                className="
                  relative
                  h-[350px]
                  w-[350px]
                  rounded-full
                  overflow-hidden
                  border
                  border-white/10
                  bg-slate-900
                "
              >
                <Image
                  src="/profile_pic.jpg"
                  alt="Profile photo of Edward Cadiz"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 350px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}