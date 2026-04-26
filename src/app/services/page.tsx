"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const services = [
  {
    name: "Website Design & Development",
    outcome: "Build trust, explain your offer clearly, and turn visitors into inquiries.",
  },
  {
    name: "Startup Landing Pages",
    outcome: "Validate your idea, collect leads, and create a strong first impression.",
  },
  {
    name: "SaaS MVP Development",
    outcome: "Launch faster, test the market, and avoid wasting months on unnecessary features.",
  },
  {
    name: "Custom Web Applications",
    outcome: "Replace manual work, reduce operational chaos, and create a system that fits your business.",
  },
  {
    name: "Admin Dashboards",
    outcome: "Manage your business from one clean internal system.",
  },
  {
    name: "Client Portals",
    outcome: "Improve communication, access, transparency, and customer experience.",
  },
  {
    name: "Booking & Workflow Systems",
    outcome: "Reduce manual admin work and make booking or service delivery easier.",
  },
  {
    name: "App Modernization",
    outcome: "Rebuild with a cleaner architecture, better performance, and a more scalable foundation.",
  },
];

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export default function ServicesPage() {
  const pageTopRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);

  // CTA section background sweep
  const { scrollYProgress: ctaScrollProgress } = useScroll({
    target: ctaSectionRef,
    offset: ["start end", "start 0.3"],
  });
  const ctaBgScaleX = useTransform(ctaScrollProgress, [0, 0.6], [0, 1]);
  const ctaBgOpacity = useTransform(ctaScrollProgress, [0, 0.3], [0, 1]);

  // Track scroll progress for the top wrapper (Hero Text + Image Section)
  const { scrollYProgress } = useScroll({
    target: pageTopRef,
    // Start animation immediately when scrolling from the top of the page
    offset: ["start start", "end end"]
  });

  // Transform scroll progress across the entire wrapper duration
  // Starts at 100% visible, clips 15% from the left side.
  // Using explicit percentage units for all 4 values ensures Framer Motion interpolates perfectly!
  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 55%)"]);

  return (
    <div className="bg-background-light min-h-screen text-primary-dark">

      {/* Wrapper to track scroll from the very top of the page */}
      <div ref={pageTopRef} className="overflow-x-hidden">
        {/* 1. Hero Text Section */}
        <section className="relative pt-32 lg:pt-48 pb-16 overflow-hidden">
          {/* Background Circles Pattern */}
          <div className="absolute top-[-10%] right-[-5%] w-[80vw] h-[80vw] opacity-[0.03] pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full text-primary-dark">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.1" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.1" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.1" />
            </svg>
          </div>

          <div className="container-wide relative z-10">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
              <div className="max-w-4xl">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-accent font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-6 block"
                >
                  WHAT WE DO
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold leading-[0.92] tracking-tighter mb-8 text-primary-dark font-display"
                >
                  Development services <br />
                  built around <br />
                  business outcomes.
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-12 h-[1px] bg-primary-dark/20" />
                  <p className="text-lg md:text-xl text-brand-gray-500 font-light max-w-md leading-relaxed text-balance">
                    We help startups and growing businesses build websites, MVPs, dashboards, portals, and custom web applications that support launch, growth, and operations.
                  </p>
                </motion.div>
              </div>

              {/* Vertical text on right */}
              <div className="hidden lg:flex absolute right-8 xl:right-16 top-40 flex-col items-center pointer-events-none">
                <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-primary-dark/30 [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                  WHAT WE DO
                </span>
                <div className="w-[1px] h-20 bg-primary-dark/20 my-6" />
                <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-primary-dark/30 [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                  SCROLL DOWN
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Hero Image Animation Section */}
        <section className="relative w-full bg-background-light z-20">
          <div className="h-screen w-full flex flex-col justify-center overflow-hidden">
            <div className="w-full h-full px-0">
              <motion.div
                style={{ clipPath }}
                className="relative h-full w-full overflow-hidden bg-brand-gray-100 shadow-2xl shadow-black/10 rounded-none"
              >
                <div className="w-full h-full relative">
                  <Image
                    src="/images/services-hero.png"
                    alt="Our Workspace"
                    fill
                    className="object-cover grayscale-[0.2]"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
              </motion.div>
            </div>
          </div>
        </section>
      </div> {/* End of pageTopRef wrapper */}

      {/* 3. Services List Section */}
      <section className="bg-white pt-16 pb-20 lg:pt-24 lg:pb-32 border-t border-black/5 relative z-30">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            {/* Left column: sticky heading */}
            <div className="lg:w-5/12 lg:self-start lg:sticky lg:top-40">
              <motion.h2
                variants={{
                  initial: {},
                  animate: { transition: { staggerChildren: 0.08 } }
                }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1] tracking-tighter text-primary-dark font-display"
              >
                {"Services built around real business needs.".split(" ").map((word, idx) => (
                  <span key={idx} className="inline-block overflow-hidden mr-[0.25em] pb-4 -mb-4 pt-2">
                    <motion.span
                      variants={{
                        initial: { y: "100%", opacity: 0 },
                        animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.h2>
            </div>

            {/* Right column: services list scrolls past */}
            <div className="lg:w-7/12">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-col w-full"
              >
                {services.map((service, idx) => (
                  <motion.div
                    key={service.name}
                    variants={{
                      initial: { opacity: 0, y: 15 },
                      animate: { opacity: 1, y: 0 }
                    }}
                    className="group flex items-center justify-between py-7 border-b border-black/5 hover:border-accent/30 transition-all cursor-pointer"
                  >
                    <div className="flex-1">
                      <span className="text-lg md:text-xl font-medium text-brand-gray-700 group-hover:text-primary-dark transition-colors block mb-1">
                        {service.name}
                      </span>
                      <span className="text-sm text-brand-gray-400 group-hover:text-brand-gray-500 transition-colors">
                        {service.outcome}
                      </span>
                    </div>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border border-transparent group-hover:border-accent/20 transition-all shrink-0 ml-4">
                      <Plus className="w-4 h-4 text-accent opacity-30 group-hover:opacity-100 transition-all transform group-hover:rotate-90" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Section — Dark */}
      <section className="bg-primary-dark text-white py-32 lg:py-48 relative z-30">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

            {/* Left column: sticky heading */}
            <div className="lg:w-5/12 lg:self-start lg:sticky lg:top-40">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-accent font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-8 block"
              >
                OUR PROCESS
              </motion.span>
              <motion.h2
                variants={{
                  initial: {},
                  animate: { transition: { staggerChildren: 0.08 } }
                }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1] tracking-tighter font-display"
              >
                {"A clear process from idea to launch.".split(" ").map((word, idx) => (
                  <span key={idx} className="inline-block overflow-hidden mr-[0.25em] pb-4 -mb-4 pt-2">
                    <motion.span
                      variants={{
                        initial: { y: "100%", opacity: 0 },
                        animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.h2>
            </div>

            {/* Right column: process steps */}
            <div className="lg:w-7/12">
              {[
                {
                  num: "01",
                  title: "Discover",
                  desc: "We understand your business, users, goals, pain points, budget, and timeline."
                },
                {
                  num: "02",
                  title: "Scope",
                  desc: "We define exactly what will be built, what will not be built, and how the project will be delivered."
                },
                {
                  num: "03",
                  title: "Design",
                  desc: "We plan the structure, user flow, interface, and experience before development begins."
                },
                {
                  num: "04",
                  title: "Develop",
                  desc: "We build the frontend, backend, database, APIs, integrations, and core product features."
                },
                {
                  num: "05",
                  title: "Test",
                  desc: "We test core flows, responsiveness, performance, bugs, and production readiness."
                },
                {
                  num: "06",
                  title: "Launch",
                  desc: "We deploy your product, configure hosting, connect domains, and provide handover support."
                }
              ].map((step, idx) => (
                <div
                  key={step.num}
                  className="py-12 lg:py-16 border-b border-white/10 first:border-t first:border-white/10"
                >
                  <div className="flex items-start gap-6">
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="text-accent font-bold text-sm tracking-wider mt-1 shrink-0"
                    >
                      {step.num}
                    </motion.span>
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-2xl md:text-3xl font-bold font-display tracking-tight mb-4"
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="text-brand-gray-400 text-base md:text-lg leading-relaxed max-w-lg"
                      >
                        {step.desc}
                      </motion.p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Partnership Section — High End Editorial */}
      <section className="bg-white py-32 lg:py-56 relative z-30 border-t border-black/5 overflow-hidden">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">

            {/* Left side: Sticky Heading & Image */}
            <div className="lg:w-5/12 lg:sticky lg:top-40">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col"
              >
                <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-8 block">HOW WE WORK</span>
                <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1] tracking-tight text-primary-dark font-display mb-12">
                  How we <br className="hidden lg:block" /> work with <br className="hidden lg:block" /> you.
                </h2>
                <div className="relative aspect-video w-full overflow-hidden rounded-sm shadow-2xl group">
                  <Image
                    src="/images/team-partner.png"
                    alt="Team collaboration"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary-dark/5 group-hover:bg-transparent transition-colors duration-700" />
                </div>
              </motion.div>
            </div>

            {/* Right side: High-end Typography & Details */}
            <div className="lg:w-7/12 pt-10 lg:pt-0">
              {[
                {
                  title: "Fixed-Scope Projects",
                  desc: "Best for websites, landing pages, MVPs, dashboards, and clearly defined builds.",
                  bullets: ["Clear scope", "Fixed timeline", "Milestone checkpoints"]
                },
                {
                  title: "Milestone-Based Development",
                  desc: "Best for larger products where features need to be built in stages.",
                  bullets: ["Phased delivery", "Controlled progress", "Reduced project risk"]
                },
                {
                  title: "Long-Term Technical Partner",
                  desc: "Best for startups and growing businesses that need ongoing product development.",
                  bullets: ["Feature development", "Performance updates", "Post-launch support"]
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-24 last:mb-0 group"
                >
                  <div className="flex items-baseline gap-6 mb-8">
                    <span className="text-accent font-display text-3xl font-light italic opacity-50 group-hover:opacity-100 transition-opacity duration-500">0{idx + 1}</span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-primary-dark group-hover:text-accent transition-colors duration-500">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-brand-gray-500 text-xl lg:text-2xl leading-relaxed mb-12 max-w-xl font-light">
                    {item.desc}
                  </p>
                  <div className="flex flex-col gap-5">
                    {item.bullets.map((bullet, bIdx) => (
                      <motion.div
                        key={bullet}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx * 0.2) + (bIdx * 0.1) + 0.5 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-12 h-[1px] bg-accent/20 group-hover:w-16 group-hover:bg-accent/40 transition-all duration-700" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-dark/40 group-hover:text-primary-dark/70 transition-colors duration-500">{bullet}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section — Accent Background Sweep */}
      <section
        ref={ctaSectionRef}
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
              Ready to build your next <br className="hidden md:block" />
              digital product?
            </motion.p>

            {/* CTA Button */}
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
                <span className="relative z-10 text-white">Start Your Project</span>
                <svg className="relative z-10 w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
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
                <circle key={i} cx={col * 12 + 6} cy={row * 12 + 6} r="1.5" fill="white" />
              );
            })}
          </svg>
        </motion.div>

        {/* Vertical side text */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 text-white text-[10px] font-bold tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180 pointer-events-none"
        >
          What We Do
        </motion.span>
      </section>
    </div>
  );
}
