"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "A standard marketing website usually takes 3-4 weeks, while a complex SaaS MVP or custom web application can take 8-12 weeks depending on scope and integrations.",
  },
  {
    question: "Do you offer fixed-price projects?",
    answer: "Yes, we typically work on a fixed-scope, fixed-price basis for well-defined projects to ensure transparency and predictability for both parties.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We are experts in Next.js, React, and Tailwind for the front-end, and FastAPI or Spring Boot for high-performance back-ends. We also specialize in PostgreSQL, MongoDB, and AWS infrastructure.",
  },
  {
    question: "Can you help with app modernization?",
    answer: "Absolutely. We specialize in legacy system audits and migrating legacy monolithic applications to modern, scalable cloud architectures while improving the UI/UX.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer ongoing maintenance and support contracts to ensure your digital product stays secure, performant, and up-to-date with the latest tech standards.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background-light py-32 lg:py-56 relative z-10">
      <div className="container-wide">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 text-center lg:text-left transition-all">
            <span className="eyebrow !text-accent/60">Common Questions</span>
            <h2 className="text-section-title text-brand-gray-900 !leading-none mb-10">
              Clear answers for curious founders.
            </h2>
            <p className="text-xl text-brand-gray-500 max-w-2xl leading-relaxed font-light">
               Everything you need to know about our process, pricing, and how we build the technical future of your startup.
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
