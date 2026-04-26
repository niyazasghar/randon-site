"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram, Terminal, ChevronDown } from "lucide-react";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-background-light min-h-screen text-primary-dark [overflow-x:clip] relative">
      
      {/* Fixed vertical side text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 text-primary-dark text-[10px] font-bold tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180 pointer-events-none z-40"
      >
        Contact Us
      </motion.span>

      {/* ─── Section 1: Hero ─── */}
      <section className="relative pt-36 md:pt-48 pb-24 md:pb-36 overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-24">
            <div className="lg:w-7/12">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-accent font-bold tracking-[0.25em] text-[10px] uppercase mb-8"
              >
                Get in touch
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1] tracking-tighter font-display text-primary-dark"
              >
                Let&apos;s build your <br />
                next website, MVP, <br />
                dashboard, or <br />
                custom platform.
              </motion.h1>
            </div>
            <div className="lg:w-5/12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-brand-gray-500 text-base md:text-lg leading-relaxed max-w-sm"
              >
                Whether you are launching a startup, rebuilding an old system, or creating a custom business tool, DevShuttle can help you plan and build the right technical solution.
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

        {/* Decorative dot grid — top right */}
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
              return (
                <circle
                  key={i}
                  cx={col * 12 + 6}
                  cy={row * 12 + 6}
                  r="1.5"
                  fill="currentColor"
                />
              );
            })}
          </svg>
        </motion.div>
      </section>

      {/* ─── Section 2: Contact Form & Info Grid ─── */}
      <section className="bg-white py-28 lg:py-40 border-t border-black/5 relative z-10">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
             
             {/* Form Column */}
             <div className="lg:col-span-7">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="max-w-3xl"
                >
                   <motion.div variants={itemVariants} className="mb-16">
                      <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-dark mb-6 tracking-tight">
                        Tell us about your project.
                      </h2>
                      <p className="text-brand-gray-500 text-[15px] md:text-base leading-[1.85]">
                         Share what you want to build, what problem you are trying to solve, and where you are in the process. We will help you understand the right next step.
                      </p>
                   </motion.div>

                   <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                      <motion.div variants={itemVariants} className="flex flex-col gap-3 group">
                         <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-400 transition-colors group-hover:text-accent">Full Name</label>
                         <input 
                           type="text" 
                           placeholder="John Doe" 
                           className="bg-transparent border-b border-brand-gray-200 py-4 text-primary-dark text-lg focus:outline-none focus:border-accent transition-colors w-full"
                         />
                      </motion.div>
                      
                      <motion.div variants={itemVariants} className="flex flex-col gap-3 group">
                         <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-400 transition-colors group-hover:text-accent">Email Address</label>
                         <input 
                           type="email" 
                           placeholder="john@example.com" 
                           className="bg-transparent border-b border-brand-gray-200 py-4 text-primary-dark text-lg focus:outline-none focus:border-accent transition-colors w-full"
                         />
                      </motion.div>

                      <motion.div variants={itemVariants} className="flex flex-col gap-3 group">
                         <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-400 transition-colors group-hover:text-accent">Company</label>
                         <input 
                           type="text" 
                           placeholder="Your Company" 
                           className="bg-transparent border-b border-brand-gray-200 py-4 text-primary-dark text-lg focus:outline-none focus:border-accent transition-colors w-full"
                         />
                      </motion.div>

                      <motion.div variants={itemVariants} className="flex flex-col gap-3 group">
                         <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-400 transition-colors group-hover:text-accent">Project Type</label>
                         <div className="relative">
                            <select 
                              defaultValue=""
                              className="bg-transparent border-b border-brand-gray-200 py-4 text-primary-dark text-lg focus:outline-none focus:border-accent transition-colors w-full appearance-none pr-10 cursor-pointer"
                            >
                               <option value="" disabled>Select project type...</option>
                               <option value="Business Website">Business Website</option>
                               <option value="Startup Landing Page">Startup Landing Page</option>
                               <option value="SaaS MVP">SaaS MVP</option>
                               <option value="Web Application">Web Application</option>
                               <option value="Admin Dashboard">Admin Dashboard</option>
                               <option value="Client Portal">Client Portal</option>
                               <option value="Booking / Workflow System">Booking / Workflow System</option>
                               <option value="App Modernization">App Modernization</option>
                               <option value="Not Sure Yet">Not Sure Yet</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gray-400 pointer-events-none" />
                         </div>
                      </motion.div>

                      <motion.div variants={itemVariants} className="flex flex-col gap-3 group">
                         <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-400 transition-colors group-hover:text-accent">Budget Range</label>
                         <input 
                           type="text" 
                           placeholder="$10k - $20k" 
                           className="bg-transparent border-b border-brand-gray-200 py-4 text-primary-dark text-lg focus:outline-none focus:border-accent transition-colors w-full"
                         />
                      </motion.div>

                      <motion.div variants={itemVariants} className="flex flex-col gap-3 group">
                         <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-400 transition-colors group-hover:text-accent">Timeline</label>
                         <input 
                           type="text" 
                           placeholder="e.g. 1-2 months" 
                           className="bg-transparent border-b border-brand-gray-200 py-4 text-primary-dark text-lg focus:outline-none focus:border-accent transition-colors w-full"
                         />
                      </motion.div>

                      <motion.div variants={itemVariants} className="flex flex-col gap-3 group sm:col-span-2">
                         <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-400 transition-colors group-hover:text-accent">Project Description</label>
                         <textarea 
                           placeholder="Describe your vision, technical requirements, and goals." 
                           rows={4}
                           className="bg-transparent border-b border-brand-gray-200 py-4 text-primary-dark text-lg focus:outline-none focus:border-accent transition-colors resize-none w-full"
                         />
                      </motion.div>
                      
                      <motion.div variants={itemVariants} className="sm:col-span-2 pt-10">
                         <button className="group relative inline-flex items-center justify-center gap-3 w-full py-5 rounded-full text-sm font-bold tracking-wide uppercase overflow-hidden active:scale-[0.98] transition-transform duration-300 bg-primary-dark">
                            <span className="absolute inset-0 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
                            <span className="relative z-10 text-white">Start Your Project</span>
                            <ArrowRight className="relative z-10 w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
                         </button>
                      </motion.div>
                   </form>
                </motion.div>
             </div>
             
             {/* Sidebar Info Column */}
             <div className="lg:col-span-5 flex flex-col gap-20 lg:pt-4">
                <div className="flex flex-col gap-10">
                   <h3 className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-gray-400">Direct Contact</h3>
                   <div className="flex flex-col gap-6">
                      <a href="mailto:hello@devshuttle.com" className="group flex items-center gap-6 text-xl lg:text-2xl font-display font-medium text-primary-dark">
                         <div className="w-12 h-12 flex items-center justify-center border border-brand-gray-200 rounded-full group-hover:bg-accent group-hover:border-accent transition-all duration-300 shrink-0">
                            <Mail className="w-5 h-5 text-primary-dark group-hover:text-white transition-colors" />
                         </div>
                         <span className="hover-line">hello@devshuttle.com</span>
                      </a>
                      
                      <a href="mailto:niyazasghar12@gmail.com" className="group flex items-center gap-6 text-xl lg:text-2xl font-display font-medium text-primary-dark break-all">
                         <div className="w-12 h-12 flex items-center justify-center border border-brand-gray-200 rounded-full group-hover:bg-accent group-hover:border-accent transition-all duration-300 shrink-0">
                            <Mail className="w-5 h-5 text-primary-dark group-hover:text-white transition-colors" />
                         </div>
                         <span className="hover-line">niyazasghar12@gmail.com</span>
                      </a>
                   </div>
                </div>

                <div className="flex flex-col gap-10">
                   <h3 className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-gray-400">Social Connect</h3>
                   <div className="flex flex-wrap gap-4">
                      {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                        <a 
                          key={i} 
                          href="#" 
                          className="w-14 h-14 flex items-center justify-center border border-brand-gray-200 rounded-full hover:bg-accent hover:border-accent text-brand-gray-500 hover:text-white transition-all duration-500 hover:scale-110"
                        >
                           <Icon className="w-5 h-5" />
                        </a>
                      ))}
                   </div>
                </div>
                
                <div className="p-10 bg-brand-gray-100 rounded-sm border border-brand-gray-200 mt-auto">
                   <div className="w-10 h-10 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-lg mb-6">
                      <Terminal className="w-5 h-5 text-accent" />
                   </div>
                   <h4 className="text-xl font-bold text-primary-dark mb-4 uppercase tracking-tighter">Engineering-led from planning to deployment.</h4>
                   <p className="text-brand-gray-500 text-[15px] leading-[1.85]">
                      DevShuttle helps founders and growing businesses handle the technical layer of their digital product, from product planning and architecture to development, deployment, and post-launch support.
                   </p>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* ─── Section 3: Studio Location ─── */}
      <section className="bg-background-light py-28 lg:py-40 border-t border-black/5 relative overflow-hidden">
         <div className="container-wide relative z-10 text-center">
            <span className="inline-block text-accent font-bold tracking-[0.25em] text-[10px] uppercase mb-8">Studio Location</span>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-[clamp(1.5rem,3vw,2rem)] font-display font-extrabold text-primary-dark opacity-80">
               <MapPin className="w-8 h-8 text-accent shrink-0" />
               <span>REMOTE WORLDWIDE, HEADQUARTERED IN INDIA</span>
            </div>
         </div>
      </section>
    </div>
  );
}
