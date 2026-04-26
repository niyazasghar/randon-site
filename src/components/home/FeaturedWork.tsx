"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Globe, Blocks, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Launch Websites",
    description:
      "For startups and service businesses that need credibility, clarity, and better lead conversion.",
    icon: Globe,
    href: "/services",
  },
  {
    title: "SaaS MVPs",
    description:
      "For founders who need to validate an idea, onboard users, and launch a working product.",
    icon: Blocks,
    href: "/services",
  },
  {
    title: "Dashboards and Portals",
    description:
      "For growing businesses that need better control over users, data, workflows, and operations.",
    icon: LayoutDashboard,
    href: "/services",
  },
  {
    title: "Custom Web Applications",
    description:
      "For teams that have outgrown spreadsheets, manual processes, and disconnected tools.",
    icon: Code2,
    href: "/custom-development",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-32 lg:py-44 relative z-10 bg-white">
      <div className="container-wide flex flex-col items-center">

        {/* Section heading */}
        <div className="mb-20 w-full max-w-6xl text-center lg:text-left transition-all">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="eyebrow !text-accent/60"
          >
            Built for Launch, Growth, and Operations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold text-primary-dark leading-[1.05] tracking-tight mb-8"
          >
            Digital products built around <br className="hidden lg:block" /> real business problems.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-lg md:text-xl text-brand-gray-500 max-w-3xl leading-[1.8] font-light"
          >
            From startup launch websites to SaaS MVPs, dashboards, portals, and workflow systems, we build the technical foundation your business needs to move faster, operate better, and scale with less chaos.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link href={feature.href} className="group block h-full">
                <div className="h-full bg-brand-gray-100/50 border border-brand-gray-200 rounded-2xl p-10 lg:p-12 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
                  {/* Hover Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-primary-dark mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-brand-gray-500 text-base leading-relaxed mb-10">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-primary-dark mt-auto">
                    <span className="relative">
                      Explore
                      <span className="absolute left-0 bottom-0 w-full h-px bg-primary-dark scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-accent" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
