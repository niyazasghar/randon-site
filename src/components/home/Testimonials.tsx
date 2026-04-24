"use client";

import { motion } from "framer-motion";
import { Play, VolumeX } from "lucide-react";

const testimonials = [
  {
    name: "Muktesh Narula",
    company: "DOVESOFT",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400&h=600",
  },
  {
    name: "Shriya Sadneni",
    company: "MURZBAN",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=600",
  },
  {
    name: "Yash Goswami",
    company: "BITEBEE FOUNDER",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=600",
  },
  {
    name: "Ajay Agarwal",
    company: "AVEENA CO-FOUNDER",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=600",
  },
];

export default function Testimonials() {
  return (
    <section className="pt-16 pb-32 lg:pt-24 lg:pb-44 relative z-10 bg-white">
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
            Client Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-section-title text-brand-gray-900 !leading-none mb-10"
          >
            Happy Clients Testimonials.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-xl text-brand-gray-500 max-w-2xl leading-relaxed font-light"
          >
            Hear from the founders and teams who trusted us to build their digital products.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
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
              className="relative aspect-[9/16]  overflow-hidden group cursor-pointer"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay for Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Top Icons */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                <div className="bg-black/30 backdrop-blur-md p-2 rounded-full">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                  <VolumeX className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="text-white font-display font-bold text-lg mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-white/70 text-xs font-semibold tracking-wider uppercase">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
