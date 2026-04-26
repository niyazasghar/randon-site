"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TextReveal } from "@/components/animations/TextReveal";

const services = [
  {
    title: "Launch-Ready Websites",
    description: "Fast, responsive, conversion-focused websites for startups and growing businesses that need credibility and inbound leads.",
    category: "Web Presence",
  },
  {
    title: "SaaS MVPs",
    description: "Working MVPs for founders who need to validate an idea, onboard users, collect payments, and launch quickly.",
    category: "Product Development",
  },
  {
    title: "Business Dashboards",
    description: "Internal dashboards that help teams manage customers, orders, reports, users, workflows, and operational data.",
    category: "Internal Systems",
  },
  {
    title: "Client Portals",
    description: "Secure portals where customers, clients, teams, or partners can log in, access information, submit requests, and track progress.",
    category: "User Experience",
  },
  {
    title: "Booking & Workflow Systems",
    description: "Custom systems for appointments, service requests, task flows, reminders, payments, and admin management.",
    category: "Operations",
  },
  {
    title: "Custom Web Applications",
    description: "Business-specific web platforms built around your workflows, users, data, and long-term growth needs.",
    category: "Software Development",
  },
];

export default function WhatWeBuild() {
  return (
    <section className="bg-background-surface py-32 lg:py-56 relative z-10 overflow-hidden">
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-1/4 -right-[20%] w-[60%] h-[60%] border border-white/20 rounded-full" />
      </div>

      <div className="container-wide">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 lg:mb-40 gap-16">
          <div className="max-w-3xl">
             <span className="eyebrow">What We Build</span>
             <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold text-white leading-[1.05] tracking-tight mb-8">
                <TextReveal delay={0.1}>Software solutions for startups</TextReveal> <br />
                <TextReveal delay={0.3} className="text-accent/80">and growing businesses.</TextReveal>
             </h2>
             <div className="text-lg md:text-xl text-brand-gray-500 leading-relaxed font-light text-balance mb-12">
                <TextReveal delay={0.5} wordStagger={0.02}>
                   We build digital products that help businesses launch faster, generate leads, automate workflows, manage operations, and serve users better.
                </TextReveal>
             </div>
             
             <Link href="/services" className="btn-premium w-fit py-5 px-12 group">
                <span>Explore All Solutions</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
             </Link>
          </div>
          
          <div className="lg:w-1/3 flex flex-col gap-8 pt-12 border-t border-white/10">
             <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Core Focus</span>
             <ul className="flex flex-col gap-6">
                {["Performance-First Approach", "Scalable Architecture", "Modern Tech Stack", "Security by Design"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-white font-medium text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
             </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {services.map((service, idx) => (
             <motion.div
               key={service.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: idx * 0.1 }}
               className="group relative h-[420px] bg-white/5 border border-white/5 rounded-sm p-12 flex flex-col justify-between overflow-hidden cursor-pointer hover:bg-white/[0.08] transition-all duration-500"
             >
                {/* Background Accent Indicator */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-[40px] transition-all duration-700 group-hover:bg-accent/20" />
                
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent/60 block mb-6 px-3 py-1 bg-white/5 border border-white/5 rounded-full w-fit">
                    {service.category}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-white mb-6 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray-500 leading-relaxed font-light text-balance group-hover:text-brand-gray-400 transition-colors">
                    {service.description}
                  </p>
                </div>

                <Link href="/services" className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white/40 group-hover:text-white transition-all">
                  <span className="hover-line">Learn More</span>
                  <ArrowUpRight className="w-4 h-4 text-accent transform group-hover:-translate-y-0.5" />
                </Link>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
