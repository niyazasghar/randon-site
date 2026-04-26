"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send, Mail, MapPin, ArrowRight } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
       const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
             "Content-Type": "application/json",
             Accept: "application/json",
          },
          body: JSON.stringify({
             access_key: "YOUR_ACCESS_KEY_HERE", // Replace with your real Web3Forms key
             subject: `New Contact from ${data.name}`,
             from_name: data.name,
             email: data.email,
             message: data.message,
          }),
       });

       const result = await response.json();
       if (result.success) {
          toast.success("Message sent! We'll get back to you soon.");
          reset();
       } else {
          toast.error("Something went wrong. Please try again.");
          console.error("Web3Forms Error:", result);
       }
    } catch (error) {
       toast.error("Failed to send message. Please check your connection.");
       console.error("Submission Error:", error);
    } finally {
       setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background-dark py-32 lg:py-64 relative z-20 overflow-hidden">
      {/* Immersive Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 blur-[200px] pointer-events-none opacity-40" />
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start">
          
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow !mb-10">Contact Us</span>
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-bold text-white mb-10 leading-[1.1] tracking-tight">
               Ready to build your <br />
               <span className="text-accent">next digital product?</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-gray-400 mb-16 max-w-xl leading-relaxed font-light">
              Tell us what you are trying to build. We will help you clarify the scope, choose the right technical direction, and plan the best way to launch.
            </p>

            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                   <Mail className="w-6 h-6 text-brand-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                   <span className="text-[10px] uppercase tracking-widest text-brand-gray-600 block mb-1">Email Us Directly</span>
                   <a href="mailto:hello@devshuttle.com" className="text-xl font-bold text-white hover:text-accent transition-colors block mb-1">
                      hello@devshuttle.com
                   </a>
                   <a href="mailto:niyazasghar12@gmail.com" className="text-sm font-semibold text-brand-gray-500 hover:text-white transition-colors">
                      niyazasghar12@gmail.com
                   </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                   <MapPin className="w-6 h-6 text-brand-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                   <span className="text-[10px] uppercase tracking-widest text-brand-gray-600 block mb-1">Location</span>
                   <span className="text-xl font-bold text-white transition-colors">
                      Based in India, serving globally
                   </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border border-white/5 p-10 md:p-16 rounded-sm relative overflow-hidden group"
          >
             {/* Subtle internal glow */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[50px]" />
             
             <form onSubmit={(e) => { e.preventDefault(); handleSubmit(onSubmit)(e); }} className="flex flex-col gap-12 relative z-10">
                <div className="flex flex-col gap-2">
                   <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray-600 ml-1">Full Name</label>
                   <input
                      {...register("name")}
                      placeholder="Enter your name"
                      className="bg-transparent border-b border-white/10 focus:border-accent pb-4 pt-2 text-white placeholder:text-white/20 outline-none transition-all text-lg"
                   />
                   {errors.name && <span className="text-xs text-accent/60 mt-1">{errors.name.message}</span>}
                </div>

                <div className="flex flex-col gap-2">
                   <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray-600 ml-1">Email Address</label>
                   <input
                      {...register("email")}
                      type="email"
                      placeholder="Enter your email"
                      className="bg-transparent border-b border-white/10 focus:border-accent pb-4 pt-2 text-white placeholder:text-white/20 outline-none transition-all text-lg"
                   />
                   {errors.email && <span className="text-xs text-accent/60 mt-1">{errors.email.message}</span>}
                </div>

                <div className="flex flex-col gap-2">
                   <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray-600 ml-1">Project Details</label>
                   <textarea
                      {...register("message")}
                      placeholder="Tell us about your project"
                      rows={4}
                      className="bg-transparent border-b border-white/10 focus:border-accent pb-4 pt-2 text-white placeholder:text-white/20 outline-none transition-all text-lg resize-none"
                   />
                   {errors.message && <span className="text-xs text-accent/60 mt-1">{errors.message.message}</span>}
                </div>

                <button
                   type="submit"
                   disabled={isSubmitting}
                   className="btn-premium w-full py-6 text-lg group disabled:opacity-50"
                >
                   <span>{isSubmitting ? "Sending..." : "Book a Project Discussion"}</span>
                   <Send className={`w-5 h-5 transition-transform ${isSubmitting ? "" : "group-hover:translate-x-1.5 group-hover:-translate-y-1"}`} />
                </button>
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
