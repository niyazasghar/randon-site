"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen mt-8 sm:mt-10 md:mt-14 flex items-center justify-center overflow-hidden">
      {/* Subtle background glow effects */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-1/4 -left-[10%] w-[80%] h-[80%] bg-accent/5 rounded-full blur-[180px] animate-pulse duration-[10s]" />
        <div className="absolute bottom-[10%] -right-[5%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center text-center px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >

          {/* Large Tagline Text */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8 md:mb-12 mt-4 sm:mt-6 md:mt-8">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-gray-400 font-light leading-relaxed max-w-xs sm:max-w-lg md:max-w-2xl text-balance">
              We help startups and growing businesses launch high-performance websites, SaaS MVPs, dashboards, and client-facing platforms.
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2rem,6vw,5.5rem)] font-display font-bold leading-[1.08] tracking-[-0.03em] text-white mb-8 sm:mb-10 md:mb-14 max-w-xs sm:max-w-xl md:max-w-5xl"
          >
            Build your Product{" "}
            <br className="hidden sm:block" />
            with <span className="text-accent">DevShuttle</span>
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center mb-10 sm:mb-12 md:mb-16 w-full sm:w-auto"
          >
            <Link
              href="/services"
              className="group relative px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase overflow-hidden active:scale-[0.98] w-full sm:w-auto sm:min-w-[200px] text-center transition-transform duration-300"
            >
              <span className="absolute inset-0 bg-white/[0.08] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
              <span className="relative z-10 text-white">Let&apos;s Explore</span>
            </Link>

            <Link
              href="/contact"
              className="group relative px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase overflow-hidden active:scale-[0.98] w-full sm:w-auto sm:min-w-[200px] text-center transition-transform duration-300"
            >
              <span className="absolute inset-0 bg-white/[0.08] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
              <span className="relative z-10 text-white">Contact Us</span>
            </Link>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 sm:gap-4"
          >
            {/* Avatar stack */}
            <div className="flex -space-x-2.5 sm:-space-x-3">
              {[
                "bg-gradient-to-br from-accent to-orange-400",
                "bg-gradient-to-br from-blue-500 to-cyan-400",
                "bg-gradient-to-br from-purple-500 to-pink-400",
              ].map((bg, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full ${bg} border-2 border-background-dark flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-white`}
                >
                  {["N", "A", "S"][i]}
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-brand-gray-400 font-medium">
              Trusted by{" "}
              <span className="text-accent font-bold">20+</span>{" "}
              Startups &amp; Brands
            </p>
          </motion.div>

          {/* Brand Marquee */}
          <motion.div
            variants={itemVariants}
            className="w-screen mt-12 sm:mt-16 md:mt-24 mb-4 overflow-hidden select-none pointer-events-none"
          >
            {/* Row 1 — scrolls left */}
            <div className="mb-3 sm:mb-4 overflow-hidden">
              <div className="flex animate-marquee-left whitespace-nowrap">
                {[...Array(2)].map((_, setIdx) => (
                  <div key={setIdx} className="flex shrink-0 items-center gap-8 sm:gap-12 md:gap-16 px-4 sm:px-8">
                    {["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "Firebase", "MongoDB", "PostgreSQL"].map((brand) => (
                      <span
                        key={brand}
                        className="text-base sm:text-lg md:text-2xl font-display font-bold tracking-tight text-white/40 whitespace-nowrap"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 — scrolls right */}
            <div className="overflow-hidden">
              <div className="flex animate-marquee-right whitespace-nowrap">
                {[...Array(2)].map((_, setIdx) => (
                  <div key={setIdx} className="flex shrink-0 items-center gap-8 sm:gap-12 md:gap-16 px-4 sm:px-8">
                    {["Figma", "Vercel", "Stripe", "AWS", "Docker", "GraphQL", "Prisma", "Supabase"].map((brand) => (
                      <span
                        key={brand}
                        className="text-base sm:text-lg md:text-2xl font-display font-bold tracking-tight text-white/40 whitespace-nowrap"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
