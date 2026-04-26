"use client";

import { motion } from "framer-motion";
import CommonCard from "@/components/CommonCard";

const projects = [
  {
    title: "Custom Development",
    subtitle: "Tailored Solutions",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    href: "/custom-development",
    bgColor: "#e8a828",
  },
  {
    title: "SaaS Prebuilt",
    subtitle: "Starting @ ₹50,000",
    image: "/swiftbase_crm.png",
    href: "/packages",
    bgColor: "#3b82f6",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-32 lg:py-44 relative z-10 bg-white">
      <div className="container-wide flex flex-col items-center">

        {/* Section heading */}
        <div className="mb-24 w-full max-w-6xl text-center  lg:text-left transition-all">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="eyebrow !text-accent/60"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-section-title text-brand-gray-900 !leading-none mb-10"
          >
            Streamline Business with our Flexible Options.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-xl text-brand-gray-500 max-w-2xl leading-relaxed font-light"
          >
            From custom-built platforms to ready-to-launch SaaS products, we offer flexible options to match your pace and budget.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {projects.map((project, idx) => (
            <CommonCard
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              href={project.href}
              bgColor={project.bgColor}
              delay={idx * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
