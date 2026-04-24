"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export interface CommonCardProps {
    /** Project / card title */
    title: string;
    /** Short subtitle or category label */
    subtitle: string;
    /** Image URL (local or remote) */
    image: string;
    /** Link destination */
    href: string;
    /** Background accent colour – accepts any CSS colour value */
    bgColor?: string;
    /** Stagger delay for scroll reveal (seconds) */
    delay?: number;
}

export default function CommonCard({
    title,
    subtitle,
    image,
    href,
    bgColor = "#e8a828",
    delay = 0,
}: CommonCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.16, 1, 0.3, 1] as const,
            }}
        >
            <Link href={href} className="group block">
                {/* Tilting image card */}
                <div
                    className="relative overflow-hidden shadow-lg aspect-[3/4] sm:aspect-[4/5] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:shadow-2xl"
                    style={{
                        transformOrigin: "right center",
                        transform: "perspective(800px) rotateY(0deg)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "perspective(800px) rotateY(-5deg)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "perspective(800px) rotateY(0deg)";
                    }}
                >
                    {/* Full background image */}
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* White text area — bottom-right edge */}
                    <div className="absolute bottom-0 right-0 bg-white px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 rounded-tl-2xl z-10">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-display font-extrabold text-brand-gray-900 leading-tight">
                            {title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-brand-gray-500 mt-0.5 font-medium">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
