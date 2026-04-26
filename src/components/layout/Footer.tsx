import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Websites", href: "/services" },
      { name: "Web Applications", href: "/services" },
      { name: "Mobile Applications", href: "/services" },
      { name: "SaaS Platforms", href: "/services" },
    ],
  },
  {
    title: "Explore",
    links: [
      { name: "Solutions", href: "/solutions" },
      { name: "Process", href: "/process" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refund" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-background-dark border-t border-white/5 pt-32 pb-16 overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          {/* Brand Identity */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-10 group">
              <span className="text-4xl font-display font-extrabold tracking-tighter">
                DEV<span className="text-accent group-hover:text-white transition-colors duration-500">SHUTTLE</span>
              </span>
            </Link>

            <p className="text-xl text-brand-gray-500 max-w-md mb-12 leading-relaxed">
              DevShuttle is an engineering-led software studio building launch-ready websites, SaaS MVPs, dashboards, client portals, and custom web applications for startups and growing businesses.
            </p>

            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-accent hover:border-accent hover:text-white transition-all duration-500 group"
                >
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-16">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="eyebrow !mb-10 opacity-40">
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-6">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white hover:text-accent transition-all duration-300 flex items-center gap-2 group text-sm font-medium"
                      >
                        <span className="hover-line">{link.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-16 gap-8">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <p className="text-xs uppercase tracking-widest text-brand-gray-600">
              © 2026 DevShuttle Studio. Built for launch, performance, security, and scale.
            </p>
            <p className="text-[10px] text-brand-gray-700 uppercase tracking-widest">
              Founded by an IIIT graduate with a background in software engineering, backend development, and modern web architecture.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-[10px] uppercase tracking-widest text-brand-gray-500 font-bold">
            <span className="cursor-default hover:text-white transition-colors">Launch</span>
            <span className="cursor-default hover:text-white transition-colors">Performance</span>
            <span className="cursor-default hover:text-white transition-colors">Security</span>
            <span className="cursor-default hover:text-white transition-colors">Scalability</span>
            <span className="cursor-default hover:text-white transition-colors hidden lg:inline">Product Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
