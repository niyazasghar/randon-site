"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Muktesh Narula",
    company: "DOVESOFT",
    quote: "They understood exactly what our business needed. DevShuttle didn't just write code; they helped us reduce manual work and automate our core operations.",
  },
  {
    name: "Shriya Sadneni",
    company: "MURZBAN",
    quote: "Our new website launched much faster than we expected. It's clean, fast, and has already improved our lead flow and customer experience.",
  },
  {
    name: "Yash Goswami",
    company: "BITEBEE FOUNDER",
    quote: "Building our MVP with them was the best technical decision we made. We avoided months of wasted time and launched a product our users actually want.",
  },
  {
    name: "Ajay Agarwal",
    company: "AVEENA CO-FOUNDER",
    quote: "Their engineering discipline is incredible. The dashboard they built completely replaced our messy spreadsheets with a clean, scalable system.",
  },
];

export default function Testimonials() {
  return (
    <section className="pt-16 pb-32 lg:pt-24 lg:pb-44 relative z-10 bg-brand-gray-50">
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
            Client Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold text-primary-dark leading-[1.05] tracking-tight mb-8"
          >
            Trusted by founders <br className="hidden lg:block" /> and growing teams.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-lg md:text-xl text-brand-gray-500 max-w-3xl leading-[1.8] font-light"
          >
            Hear from clients who worked with DevShuttle to launch websites, MVPs, dashboards, portals, and custom software systems.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="bg-white border border-brand-gray-200 rounded-2xl p-10 lg:p-12 shadow-sm hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-brand-gray-100 rotate-180" />
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-xl lg:text-2xl font-display font-medium text-primary-dark leading-relaxed mb-10">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto pt-8 border-t border-brand-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-bold text-accent">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark tracking-tight">{testimonial.name}</h4>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-gray-400 mt-1">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
