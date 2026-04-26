"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const leftLinks = [
  { name: "Services", href: "/services" },
  { name: "Works", href: "/work" },
];

const rightLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const allLinks = [
  { name: "Services", href: "/services" },
  { name: "Works", href: "/work" },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center">
      {/* Centered pill navbar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "mt-4 px-2 py-2 rounded-full border transition-all duration-700 ease-in-out flex items-center",
          isScrolled
            ? "bg-background-dark/80 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-background-dark/70 backdrop-blur-xl border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
        )}
      >
        {/* Left Links */}
        <div className="hidden lg:flex items-center gap-1">
          {leftLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-5 py-2.5 text-[12px] font-medium tracking-[0.08em] uppercase text-brand-gray-400 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/[0.04]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <Link href="/" className="group flex items-center mx-6 lg:mx-8 px-4 py-1.5">
          <span className="text-xl font-display font-extrabold tracking-tighter whitespace-nowrap">
            DEV<span className="text-accent transition-colors duration-300 group-hover:text-white">SHUTTLE</span>
          </span>
        </Link>

        {/* Right Links */}
        <div className="hidden lg:flex items-center gap-1">
          {rightLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-5 py-2.5 text-[12px] font-medium tracking-[0.08em] uppercase text-brand-gray-400 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/[0.04]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-5 h-5 text-white" />
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[500] bg-background-dark p-8 md:p-16 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              <div className="flex justify-between items-center mb-12 md:mb-24">
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
                {allLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white hover:text-accent transition-colors duration-500"
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
