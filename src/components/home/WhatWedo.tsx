"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhatWedo() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.3"],
  });

  // Background reveal: scales from 0 to 1 (left to right via scaleX)
  const bgScaleX = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-28 lg:py-40 overflow-hidden"
    >
      {/* Animated accent background — sweeps left to right */}
      <motion.div
        className="absolute inset-0 bg-accent"
        style={{
          scaleX: bgScaleX,
          opacity: bgOpacity,
          transformOrigin: "left center",
        }}
      />

      {/* Content */}
      <div className="container-wide max-w-6xl relative z-10">
        <div className="max-w-5xl mx-auto lg:mx-0">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="inline-block  text-eyebrow uppercase tracking-[0.25em] text-white/70 mb-8"
          >
            A Digital Agency
          </motion.span>

          {/* Main text */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="text-2xl  sm:text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-white leading-snug tracking-[-0.01em]"
          >
            We are a web design and development company, building websites that
            drive traffic, engagement, and conversion for industry-leading brands
            and startups.
            {/* <span className="inline-block ml-2 align-middle">🚀</span> */}
          </motion.p>
        </div>
      </div>

      {/* Decorative dot grid — top right */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-8 right-8 lg:top-12 lg:right-12 z-10 pointer-events-none"
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
                fill="white"
              />
            );
          })}
        </svg>
      </motion.div>
    </section>
  );
}
