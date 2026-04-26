"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most website projects take 2 to 6 weeks. MVPs, dashboards, portals, and custom web applications usually take 4 to 12 weeks depending on scope, features, integrations, and feedback speed.",
  },
  {
    question: "Do you offer fixed-price projects?",
    answer: "Yes. For clearly defined websites, landing pages, MVPs, and dashboards, we can work with fixed-scope pricing. Larger or evolving products are usually better handled through milestone-based development.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We work with modern full-stack technologies including Next.js, React, TypeScript, Node.js, PostgreSQL, MongoDB, Firebase, Supabase, AWS, Vercel, Stripe, and related cloud tools.",
  },
  {
    question: "Can you build SaaS MVPs?",
    answer: "Yes. We build SaaS MVPs with user authentication, dashboards, database architecture, payments, admin panels, and deployment setup.",
  },
  {
    question: "Can you help with app modernization?",
    answer: "Yes. We can audit, rebuild, or modernize outdated websites, dashboards, portals, and web applications using a cleaner and more scalable architecture.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes. We offer post-launch support for bug fixes, improvements, monitoring, performance updates, and ongoing feature development.",
  },
  {
    question: "Can you help if I only have an idea?",
    answer: "Yes. We can help you turn your idea into a clear scope, feature list, technical roadmap, and development plan.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background-light py-32 lg:py-56 relative z-10">
      <div className="container-wide">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 text-center lg:text-left transition-all">
            <span className="eyebrow !text-accent/60">FAQ</span>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold text-primary-dark leading-[1.05] tracking-tight mb-8">
              Clear answers for founders <br className="hidden lg:block" /> and business owners.
            </h2>
            <p className="text-lg md:text-xl text-brand-gray-500 max-w-3xl leading-[1.8] font-light">
               Everything you need to know about our process, pricing, timelines, technology, and support before starting your project.
            </p>
          </div>

          <div className="flex flex-col border-t border-brand-gray-200">
             {faqs.map((faq, idx) => {
               const isOpen = openIndex === idx;
               return (
                 <div key={idx} className="border-b border-brand-gray-200">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full py-10 flex items-center justify-between text-left group gap-10"
                    >
                      <h3 className="text-2xl md:text-3xl font-display font-medium text-brand-gray-900 group-hover:text-accent transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <div className={`w-12 h-12 flex items-center justify-center border border-brand-gray-200 rounded-full transition-all duration-500 ${isOpen ? 'bg-accent border-accent text-white scale-110 rotate-180' : 'text-brand-gray-300 group-hover:border-brand-gray-400'}`}>
                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-12 max-w-3xl">
                             <p className="text-lg md:text-xl text-brand-gray-500 leading-relaxed font-light">
                               {faq.answer}
                             </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>
               );
             })}
          </div>
        </div>
      </div>
    </section>
  );
}
