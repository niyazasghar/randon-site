"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Tushar Rawat",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Aastha Negi",
    role: "Co-founder",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Aditya Agarwal",
    role: "Chief Operations Head",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Utkarsh Rajoriya",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Yatendra Sharma",
    role: "Flutter Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Mansingh",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Deepak Kumar",
    role: "Flutter Developer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Manish Das Sharma",
    role: "Chief Technical Officer",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=600&auto=format&fit=crop",
  },
];

export default function OurTeam() {
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
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-section-title text-brand-gray-900 !leading-none mb-10"
          >
            Team Behind Wonders.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-xl text-brand-gray-500 max-w-2xl leading-relaxed font-light"
          >
            The passionate engineers, designers, and strategists powering every project we deliver.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="relative aspect-square sm:aspect-[4/5]  overflow-hidden group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Info Pill */}
              <div className="absolute bottom-4 left-4 right-4 z-10 mx-auto max-w-[90%]">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl py-3 px-4 text-center shadow-sm">
                  <h3 className="text-brand-gray-900 font-display font-bold text-sm mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-brand-gray-500 text-[11px] font-semibold tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
