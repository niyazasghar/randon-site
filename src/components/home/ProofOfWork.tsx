"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CommonCard from "@/components/CommonCard";

const projects = [
  {
    title: "Lal Sweets",
    subtitle: "Ecom Website",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    href: "/work",
    bgColor: "#e8a828",
  },
  {
    title: "Kirtilals",
    subtitle: "Luxury Website",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    href: "/work",
    bgColor: "#1e293b",
  },
  {
    title: "Tradescribe",
    subtitle: "Trading Platform",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    href: "/work",
    bgColor: "#059669",
  },
  {
    title: "Murzban",
    subtitle: "Clothing Luxury",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop",
    href: "/work",
    bgColor: "#7c3aed",
  },
  {
    title: "Greenfeels",
    subtitle: "Sustainable Ecom",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    href: "/work",
    bgColor: "#16a34a",
  },
  {
    title: "Momentz",
    subtitle: "Premium Gifting",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800&auto=format&fit=crop",
    href: "/work",
    bgColor: "#dc2626",
  },
];

export default function ProofOfWork() {
  return (
    <section className="py-32 lg:py-44 relative z-10 bg-white">
      <div className="container-wide flex flex-col items-center">

        {/* Section heading */}
        <div className="mb-24 w-full max-w-6xl text-center lg:text-left transition-all">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="eyebrow !text-accent/60"
          >
            From Idea to Working Product
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-display font-bold text-primary-dark leading-[1.1] mb-10"
          >
            We turn business ideas into usable digital systems.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-lg md:text-xl text-brand-gray-500 max-w-3xl leading-[1.8] font-light"
          >
            We help founders and business owners move from scattered ideas, outdated websites, spreadsheets, and manual workflows to clean, scalable, production-ready digital products.
          </motion.p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16">
          {projects.map((project, idx) => (
            <CommonCard
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              href={project.href}
              bgColor={project.bgColor}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* View All button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <Link
            href="/work"
            className="inline-block px-8 py-3 rounded-full border border-brand-gray-300 text-sm font-semibold text-brand-gray-700 hover:bg-brand-gray-100 transition-all duration-300 active:scale-[0.98]"
          >
            View All
          </Link>
        </motion.div>
      </div>

      {/* Scrolling banner */}
      <div className="mt-20 w-full bg-gradient-to-r from-brand-gray-900 via-brand-gray-800 to-brand-gray-900 py-4 overflow-hidden">
        <div className="flex animate-marquee-left whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-0">
              {["Plan it right", "Build it once", "Launch with confidence", "Scale without chaos"].map((text, j) => (
                <span key={j} className="flex items-center">
                  <span className="text-sm font-semibold tracking-wide text-white/90 px-4">
                    {text}
                  </span>
                  <span className="text-accent text-lg">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
