"use client";

import { ArrowRight, Code, Database, Layout, LineChart, Lock, Settings, Users, Zap, Calendar, Briefcase, BarChart, Workflow } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const solutionCategories = [
  {
    group: "Business & Marketing",
    subtitle: "For startups and service businesses that need credibility, clarity, and better lead conversion.",
    outcome: "Build trust, explain your offer, and turn visitors into inquiries.",
    solutions: [
      {
        title: "Business Websites",
        icon: Layout,
        description: "Professional, responsive, and conversion-focused websites for startups and growing businesses.",
        features: ["Responsive Design", "Core Pages", "Contact Forms"]
      },
      {
        title: "Startup Landing Pages",
        icon: Zap,
        description: "High-impact landing pages for product launches, waitlists, campaigns, and early-stage offers.",
        features: ["Lead Capture", "Conversion-Focused", "Fast Deployment"]
      },
      {
        title: "Client Portals",
        icon: Users,
        description: "Secure portals where customers, clients, teams, or partners can log in, access information, and track progress.",
        features: ["Secure Login", "Request Tracking", "Document Access"]
      }
    ]
  },
  {
    group: "Internal Operations",
    subtitle: "For growing businesses that need better systems instead of spreadsheets, WhatsApp messages, and manual tracking.",
    outcome: "Reduce manual work, improve visibility, and manage operations from one place.",
    solutions: [
      {
        title: "Admin Dashboards",
        icon: Settings,
        description: "Internal dashboards that help teams manage customers, orders, reports, users, workflows, and operational data.",
        features: ["User Management", "Data Visualization", "Activity Monitoring"]
      },
      {
        title: "CRM & Inventory Systems",
        icon: Database,
        description: "Custom systems to manage sales pipelines, customer interactions, and stock workflows.",
        features: ["Lead Tracking", "Order Management", "Inventory Control"]
      },
      {
        title: "Reporting & Analytics",
        icon: BarChart,
        description: "Systems designed to analyze business data and generate actionable insights.",
        features: ["Data Visualization", "Exportable Reports", "Live Tracking"]
      }
    ]
  },
  {
    group: "Startups & SaaS",
    subtitle: "For founders who need to validate, launch, and improve a software product.",
    outcome: "Launch faster, test the market, and build a scalable product foundation.",
    solutions: [
      {
        title: "SaaS MVP Platforms",
        icon: Code,
        description: "Working MVPs for founders who need to validate an idea, onboard users, collect payments, and launch quickly.",
        features: ["Auth & Payments", "Product Dashboard", "Admin Panel"]
      },
      {
        title: "Full Web Applications",
        icon: Lock,
        description: "Business-specific web platforms built around your workflows, users, data, and long-term growth needs.",
        features: ["Scalable Architecture", "Role-Based Access", "Custom Logic"]
      },
      {
        title: "Founder Dashboards",
        icon: LineChart,
        description: "Internal dashboards for founders to track users, revenue, subscriptions, and product metrics.",
        features: ["Subscription Tracking", "User Analytics", "Revenue Reports"]
      }
    ]
  },
  {
    group: "Booking & Workflow Systems",
    subtitle: "For service businesses that manage appointments, requests, schedules, teams, and repeat customer interactions.",
    outcome: "Simplify operations and reduce admin work.",
    solutions: [
      {
        title: "Booking Systems",
        icon: Calendar,
        description: "Custom systems for appointments, service requests, reminders, payments, and admin management.",
        features: ["Slot Management", "Calendar Sync", "Auto Notifications"]
      },
      {
        title: "Workflow Automation",
        icon: Workflow,
        description: "Platforms that automate business processes using form inputs and automated pipelines.",
        features: ["Pipeline Automation", "Data Collection", "Third-party Sync"]
      },
      {
        title: "Legacy App Rebuilds",
        icon: Briefcase,
        description: "Audit, rebuild, or modernize outdated websites, dashboards, portals, and web applications.",
        features: ["Technical Audit", "Modern Frontend", "Performance Boost"]
      }
    ]
  }
];

export default function SolutionsPage() {
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "start 0.3"],
  });
  const ctaBgScaleX = useTransform(ctaProgress, [0, 0.6], [0, 1]);
  const ctaBgOpacity = useTransform(ctaProgress, [0, 0.3], [0, 1]);

  return (
    <div className="bg-background-light min-h-screen [overflow-x:clip] relative">

      {/* Fixed vertical side text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 text-primary-dark text-[10px] font-bold tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180 pointer-events-none z-40"
      >
        Solutions
      </motion.span>

      {/* ─── Hero ─── */}
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
                Solutions
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1] tracking-tighter font-display text-primary-dark"
              >
                Software solutions <br />
                for launch, growth, <br />
                and operations.
              </motion.h1>
            </div>
            <div className="lg:w-5/12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-brand-gray-500 text-base md:text-lg leading-relaxed max-w-sm"
              >
                From high-performance startup websites to internal dashboards and custom platforms, DevShuttle builds digital systems that help your business move faster and operate better.
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

        {/* Decorative dot grid */}
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
              return <circle key={i} cx={col * 12 + 6} cy={row * 12 + 6} r="1.5" fill="currentColor" />;
            })}
          </svg>
        </motion.div>
      </section>

      {/* ─── Solution Categories ─── */}
      {solutionCategories.map((category, catIdx) => (
        <section key={catIdx} className={`py-28 lg:py-40 border-t border-black/5 ${catIdx % 2 === 0 ? 'bg-white' : 'bg-background-light'}`}>
          <div className="container-wide">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="mb-20 lg:mb-28"
             >
                <span className="text-xs uppercase tracking-[0.4em] font-bold text-accent mb-6 block">
                   {category.group}
                </span>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-dark mb-4 max-w-3xl">
                   {category.subtitle}
                </h2>
                <p className="text-base text-brand-gray-500 font-light">
                   <span className="text-accent font-semibold">Outcome:</span> {category.outcome}
                </p>
             </motion.div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.solutions.map((solution, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="group p-10 lg:p-12 bg-white border border-black/5 rounded-sm hover:shadow-lg hover:shadow-black/5 transition-all duration-500"
                  >
                     <div className="w-14 h-14 flex items-center justify-center bg-accent/5 border border-accent/10 rounded-xl mb-10 group-hover:bg-accent transition-all duration-500">
                        <solution.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                     </div>
                     <h3 className="text-2xl lg:text-3xl font-display font-bold text-primary-dark mb-5 group-hover:text-accent transition-colors">
                        {solution.title}
                     </h3>
                     <p className="text-brand-gray-500 font-light leading-relaxed mb-10 min-h-[72px]">
                        {solution.description}
                     </p>
                     <ul className="flex flex-col gap-4 border-t border-black/5 pt-8">
                        {solution.features.map(f => (
                          <li key={f} className="flex items-center gap-4 text-xs font-bold text-brand-gray-400 uppercase tracking-widest">
                             <div className="w-1 h-1 bg-accent rounded-full" />
                             {f}
                          </li>
                        ))}
                     </ul>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>
      ))}

      {/* ─── CTA — Accent Sweep ─── */}
      <section
        ref={ctaRef}
        className="relative z-30 py-28 lg:py-40 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-accent"
          style={{
            scaleX: ctaBgScaleX,
            opacity: ctaBgOpacity,
            transformOrigin: "left center",
          }}
        />

        <div className="container-wide max-w-6xl relative z-10">
          <div className="max-w-5xl mx-auto lg:mx-0">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-eyebrow uppercase tracking-[0.25em] text-white/70 mb-8"
            >
              Get Started
            </motion.span>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-white leading-snug tracking-[-0.01em] mb-12"
            >
              Need a custom technical <br className="hidden md:block" />
              roadmap for your business?
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-bold tracking-wide uppercase overflow-hidden active:scale-[0.98] transition-transform duration-300 border border-white/20"
              >
                <span className="absolute inset-0 bg-white/[0.08] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
                <span className="relative z-10 text-white">Discuss Your Solution</span>
                <svg className="relative z-10 w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
