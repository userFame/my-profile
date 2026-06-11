"use client";

import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  href: `#${string}`;
}

const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = (href: NavLink["href"]): void => {
    const section: HTMLElement | null =
      document.querySelector<HTMLElement>(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMenuOpen(false);
  };

  const toggleMenu = (): void => {
    setIsMenuOpen((prev: boolean) => !prev);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          fixed
          top-5
          left-1/2
          z-50
          w-[95%]
          max-w-7xl
          -translate-x-1/2
          rounded-2xl
          border
          border-white/10
          bg-slate-950/70
          backdrop-blur-xl
          shadow-2xl
        "
      >
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo */}

          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="
              bg-gradient-to-r
              from-purple-500
              via-cyan-400
              to-emerald-400
              bg-clip-text
              text-xl
              font-bold
              tracking-tight
              text-transparent
            "
          >
            YourName.dev
          </motion.a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link: NavLink) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="
                  relative
                  text-sm
                  font-medium
                  text-slate-300
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {link.name}
              </button>
            ))}

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-purple-600
                to-cyan-500
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-lg
              "
            >
              <Download size={16} />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}

          <button
            type="button"
            aria-label="Toggle Navigation Menu"
            onClick={toggleMenu}
            className="text-white lg:hidden"
          >
            {isMenuOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="
                fixed
                inset-0
                z-40
                bg-black/60
                backdrop-blur-sm
                lg:hidden
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              initial={{
                opacity: 0,
                y: -30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                fixed
                left-4
                right-4
                top-24
                z-50
                rounded-3xl
                border
                border-white/10
                bg-slate-900/95
                p-6
                backdrop-blur-xl
                lg:hidden
              "
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((link: NavLink) => (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="
                      text-left
                      text-lg
                      text-slate-300
                      transition-colors
                      duration-300
                      hover:text-cyan-400
                    "
                  >
                    {link.name}
                  </button>
                ))}

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-3
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-purple-600
                    to-cyan-500
                    px-5
                    py-3
                    font-medium
                    text-white
                  "
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;