"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import OurTeam from "@/components/home/OurTeam";
import { useRef } from "react";

const values = [
  {
    title: "Forward-Thinking",
    desc: "We pride ourselves on pushing the boundaries of digital design and development. We combine relevant trends and best practices to build platforms with longevity.",
  },
  {
    title: "Constant Growth",
    desc: "Our team is composed of ambitious creatives and strategists; each member is dedicated to perfecting their craft and taking brands to the next level.",
  },
  {
    title: "Detail-Oriented",
    desc: "We sweat the small stuff, because we believe that the details make the design. A time-tested and true platform values quality over quantity.",
  },
  {
    title: "Great Character",
    desc: "More than skill, drive, or experience, great work is rooted in great character. We value integrity, honesty, and mutual respect above all.",
  },
];

export default function AboutPage() {
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "start 0.3"],
  });
  const ctaBgScaleX = useTransform(ctaProgress, [0, 0.6], [0, 1]);
  const ctaBgOpacity = useTransform(ctaProgress, [0, 0.3], [0, 1]);

  return (
    <div className="bg-background-light min-h-screen text-primary-dark [overflow-x:clip] relative">

      {/* Fixed vertical side text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 text-primary-dark text-[10px] font-bold tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180 pointer-events-none z-40"
      >
        Who We Are
      </motion.span>

      {/* ─── Section 1: Hero ─── */}
      <section className="relative pt-36 md:pt-48 pb-24 md:pb-36 overflow-hidden">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-24">
            {/* Left: Eyebrow + Heading */}
            <div className="lg:w-7/12">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-accent font-bold tracking-[0.25em] text-[10px] uppercase mb-8"
              >
                Who We Are
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1] tracking-tighter font-display text-primary-dark"
              >
                A passionate <br />
                team, rooted in <br />
                digital.
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
                Building great things in the heart of innovation. We&apos;re a digital agency that combines design thinking with technical excellence.
              </motion.p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-12 h-[2px] bg-primary-dark/20 mt-6 origin-left"
              />
            </div>
          </div>
        </div>



        {/* Decorative dot grid */}
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
              return <circle key={i} cx={col * 12 + 6} cy={row * 12 + 6} r="1.5" fill="currentColor" />;
            })}
          </svg>
        </motion.div>

        {/* Decorative arc */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] pointer-events-none"
        >
          <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
            <circle cx="250" cy="250" r="240" stroke="currentColor" strokeWidth="1" />
          </svg>
        </motion.div>
      </section>

       {/* ─── Section 3: Culture & Values ─── */}
      <section className="relative py-28 lg:py-40 bg-white">
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">

            {/* Sub-section 1: Shaping the Digital Landscape */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-extrabold leading-[1.15] tracking-tight font-display text-primary-dark mb-8">
                Shaping the Digital Landscape
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-brand-gray-500 text-[15px] md:text-base leading-[1.85] mb-6"
              >
                At DevShuttle, we see technology as a catalyst for meaningful change &mdash; not just lines of code, but a bridge between bold ideas and real-world impact. Born from a drive to empower ambitious founders, growing businesses, and enterprise teams, we&apos;ve become a trusted partner for brands across India, the Middle East, and North America, delivering high-performance digital products that move the needle.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-brand-gray-500 text-[15px] md:text-base leading-[1.85]"
              >
                From a tight-knit crew of problem-solvers to a full-service digital studio, our path has always been guided by one conviction &mdash; make technology accessible, scalable, and genuinely useful for the people it serves.
              </motion.p>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-[1.5px] bg-primary-dark/15 mx-auto my-16 lg:my-20 origin-center"
            />

            {/* Sub-section 2: What Drives Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-[clamp(1.4rem,3vw,2rem)] font-extrabold leading-[1.2] tracking-tight font-display text-primary-dark mb-8">
                What Drives Us
              </h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-brand-gray-500 text-[15px] md:text-base leading-[1.85] mb-6"
              >
                We are a collective of engineers, designers, and strategists who believe great products are born at the intersection of craft and curiosity. Our strength is in listening &mdash; deeply understanding each client&apos;s vision, then translating it into a digital experience that resonates, whether that&apos;s a consumer marketplace, an enterprise SaaS platform, a fintech dashboard, or a complete brand ecosystem.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-brand-gray-500 text-[15px] md:text-base leading-[1.85]"
              >
                We offer both rapid-launch solutions for teams that need speed and fully bespoke builds for those who demand something singular. At DevShuttle, every pixel, every interaction, and every deployment is engineered with a clear purpose &mdash; to help your business thrive in a digital-first world.
              </motion.p>
            </motion.div>

          </div>
        </div>

        {/* Decorative dot grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-16 right-20 z-0 pointer-events-none"
        >
          <svg width="80" height="80" viewBox="0 0 80 80">
            {Array.from({ length: 36 }).map((_, i) => {
              const row = Math.floor(i / 6);
              const col = i % 6;
              return <circle key={i} cx={col * 14 + 7} cy={row * 14 + 7} r="1.5" fill="currentColor" />;
            })}
          </svg>
        </motion.div>
      </section>

      {/* ─── Section 2: Mission Statement ─── */}
      <section className="relative py-24 md:py-36 border-t border-black/5 overflow-hidden">
        <div className="container-wide">
          <div className="max-w-5xl">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-primary-dark/40 font-bold tracking-[0.25em] text-[10px] uppercase mb-8"
            >
              A Digital Agency
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight font-display text-primary-dark mb-14"
            >
              Building great websites for <br className="hidden md:block" />
              industry-leading brands.
            </motion.h2>

            {/* Our Work Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/work"
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs font-bold tracking-wide uppercase overflow-hidden active:scale-[0.98] transition-transform duration-300 bg-primary-dark"
              >
                <span className="absolute inset-0 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
                <span className="relative z-10 text-white">Our Work</span>
                <svg className="relative z-10 w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>



        {/* Decorative dot grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-10 right-24 z-0 pointer-events-none"
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            {Array.from({ length: 64 }).map((_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              return <circle key={i} cx={col * 12 + 6} cy={row * 12 + 6} r="1.5" fill="currentColor" />;
            })}
          </svg>
        </motion.div>

        {/* Decorative arc */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.04 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-48 right-0 w-[600px] h-[600px] pointer-events-none"
        >
          <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
            <circle cx="300" cy="300" r="290" stroke="currentColor" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:flex absolute right-8 bottom-12 flex-col items-center gap-3 pointer-events-none"
        >
          <div className="w-[1px] h-8 bg-primary-dark/30" />
          <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-primary-dark/40 [writing-mode:vertical-rl]">Scroll</span>
        </motion.div>
      </section>

     

      {/* ─── Section 4: Stats ─── */}
      <section className="bg-white py-20 lg:py-32 border-y border-black/5 relative z-10">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {[
              { label: "Founded by", value: "IIIT Graduate" },
              { label: "Technical Standard", value: "Modern Stack" },
              { label: "Deployment Speed", value: "4-12 Weeks" },
              { label: "Software Support", value: "24/7 Monitoring" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-2 group cursor-default"
              >
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent/60 group-hover:text-accent transition-colors">
                  {stat.label}
                </span>
                <span className="text-2xl md:text-3xl font-display font-extrabold text-primary-dark group-hover:text-accent transition-colors duration-500">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5: Our Team ─── */}
      <OurTeam />

      {/* ─── Section 6: CTA — Accent Sweep ─── */}
      <section
        ref={ctaRef}
        className="relative z-30 py-28 lg:py-40 overflow-hidden"
      >
        {/* Animated accent background — sweeps left to right */}
        <motion.div
          className="absolute inset-0 bg-accent"
          style={{
            scaleX: ctaBgScaleX,
            opacity: ctaBgOpacity,
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
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-eyebrow uppercase tracking-[0.25em] text-white/70 mb-8"
            >
              Work With Us
            </motion.span>

            {/* Main text */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-white leading-snug tracking-[-0.01em] mb-12"
            >
              Let&apos;s work together to <br className="hidden md:block" />
              build something great.
            </motion.p>

            {/* Say Hello Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-bold tracking-wide uppercase overflow-hidden active:scale-[0.98] transition-transform duration-300 border border-white/20"
              >
                <span className="absolute inset-0 bg-white/[0.08] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
                <span className="relative z-10 text-white">Say Hello</span>
                <svg className="relative z-10 w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative dot grid */}
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
              return <circle key={i} cx={col * 12 + 6} cy={row * 12 + 6} r="1.5" fill="white" />;
            })}
          </svg>
        </motion.div>

        {/* Decorative arc */}
        <div className="absolute -bottom-32 right-16 w-[400px] h-[400px] pointer-events-none opacity-10">
          <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
            <circle cx="200" cy="200" r="190" stroke="white" strokeWidth="1" />
          </svg>
        </div>
      </section>
    </div>
  );
}
