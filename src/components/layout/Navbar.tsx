"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out",
        isScrolled ? "py-4 glass-nav" : "py-8 bg-transparent"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-2xl font-display font-extrabold tracking-tighter">
            DEV<span className="text-accent transition-colors group-hover:text-white">SHUTTLE</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          
          <Link href="/contact" className="btn-premium py-2.5 px-7">
            <span className="text-[10px] uppercase font-bold tracking-widest text-white">Book a Discovery Call</span>
            <ArrowUpRight className="w-4 h-4 text-white/50" />
          </Link>
        </div>

        {/* Mobile Menu Button - Circular like Baunfire */}
        <button
          className="lg:hidden w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Mobile Menu Overlay - Full Screen with Stagged Links */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[200] bg-background-dark p-8 md:p-16 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-24">
                <span className="text-2xl font-display font-extrabold tracking-tighter">
                  DEV<span className="text-accent">SHUTTLE</span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <X className="w-8 h-8 text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-6 md:gap-10">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="text-5xl md:text-7xl font-display font-bold text-white hover:text-accent transition-colors duration-500"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div className="flex flex-col gap-4">
                <p className="eyebrow !mb-2 opacity-50">Get in touch</p>
                <a href="mailto:niyazasghar12@gmail.com" className="text-2xl md:text-3xl font-bold border-b border-accent pb-2 w-fit hover:pr-4 transition-all">
                  niyazasghar12@gmail.com
                </a>
              </div>
              
              <p className="text-xs text-brand-gray-600 uppercase tracking-widest">
                © {new Date().getFullYear()} DevShuttle Studio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
