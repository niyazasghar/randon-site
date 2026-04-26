"use client";

import { motion } from "framer-motion";
import CommonCard from "@/components/CommonCard";

const allProjects = [
  {
    name: "Nextera",
    subtitle: "Corporate Website",
    image: "/assets/project-1.jpg",
    href: "#",
    tags: ["UX Design", "Development"],
  },
  {
    name: "FinVault",
    subtitle: "SaaS Platform",
    image: "/assets/project-2.jpg",
    href: "#",
    tags: ["Product Design", "Branding"],
  },
  {
    name: "MediCore",
    subtitle: "Corporate Website",
    image: "/assets/project-3.jpg",
    href: "#",
    tags: ["Strategy", "Development"],
  },
  {
    name: "RoboSync",
    subtitle: "Product Website",
    image: "/assets/project-4.jpg",
    href: "#",
    tags: ["Creative Direction", "UI/UX"],
  },
  {
    name: "CloudPeak",
    subtitle: "Dashboard",
    image: "/assets/project-1.jpg",
    href: "#",
    tags: ["Data Visualization", "UX"],
  },
  {
    name: "TradeFlow",
    subtitle: "Fintech App",
    image: "/assets/project-2.jpg",
    href: "#",
    tags: ["Mobile Design", "Development"],
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background-light text-primary-dark">
      {/* Hero Section */}
      <section className="container-wide pt-36 md:pt-48 pb-20 md:pb-32 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-24">
          {/* Left: Eyebrow + Heading */}
          <div className="lg:w-7/12">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-accent font-bold tracking-[0.25em] text-[10px] uppercase mb-8"
            >
              Case Studies
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1] tracking-tighter font-display text-primary-dark"
            >
              Some of our <br />
              finest work.
            </motion.h1>
          </div>

          {/* Right: Description */}
          <div className="lg:w-5/12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand-gray-500 text-base md:text-lg leading-relaxed max-w-sm"
            >
              Solving diverse business needs through great design and UX.
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-12 h-[2px] bg-primary-dark/20 mt-6 origin-left"
            />
          </div>
        </div>

        {/* Vertical side text */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 text-primary-dark text-[10px] font-bold tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180 pointer-events-none"
        >
          Case Studies
        </motion.span>

        {/* Decorative dot grid — top right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-16 right-16 z-0 pointer-events-none"
        >
          <svg width="120" height="120" viewBox="0 0 120 120">
            {Array.from({ length: 100 }).map((_, i) => {
              const row = Math.floor(i / 10);
              const col = i % 10;
              return (
                <circle
                  key={i}
                  cx={col * 12 + 6}
                  cy={row * 12 + 6}
                  r="1.5"
                  fill="currentColor"
                />
              );
            })}
          </svg>
        </motion.div>
      </section>

      {/* Projects Grid — Offset Masonry Layout */}
      <section className="container-wide pb-32 md:pb-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12 lg:gap-y-16">
          {allProjects.map((project, i) => (
            <div
              key={`${project.name}-${i}`}
              className={i % 3 === 1 ? "md:mt-16 lg:mt-20" : i % 3 === 2 ? "md:mt-8 lg:mt-10" : ""}
            >
              <CommonCard
                title={project.name}
                subtitle={project.subtitle}
                image={project.image}
                href={project.href}
                delay={i * 0.08}
              />

              {/* Tags below the card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 + 0.3 }}
                className="flex flex-wrap gap-2 mt-5 pl-1"
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-gray-400 border border-black/8 px-3 py-1 bg-black/[0.02]"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-black/5 py-24 md:py-32">
        <div className="container-wide text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-brand-gray-500 text-base mb-6"
          >
            Interested in working together?
          </motion.p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-bold tracking-wide uppercase overflow-hidden active:scale-[0.98] transition-transform duration-300 bg-primary-dark"
          >
            <span className="absolute inset-0 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
            <span className="relative z-10 text-white">Start a Project</span>
            <svg
              className="relative z-10 w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </div>
      </section>
    </div>
  );
}
