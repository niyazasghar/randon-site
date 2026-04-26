"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Subtle spring for the inner dot
  const dotSpring = { damping: 35, stiffness: 450, mass: 0.2 };
  const dotX = useSpring(mouseX, dotSpring);
  const dotY = useSpring(mouseY, dotSpring);

  // Slightly more trailing spring for the outer circle
  const circleSpring = { damping: 30, stiffness: 250, mass: 0.4 };
  const circleX = useSpring(mouseX, circleSpring);
  const circleY = useSpring(mouseY, circleSpring);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Add visual feedback when hovering over interactive elements
    const handleElementMouseEnter = () => setIsHovering(true);
    const handleElementMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, select, textarea, [role='button']"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleElementMouseEnter);
      el.addEventListener("mouseleave", handleElementMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementMouseEnter);
        el.removeEventListener("mouseleave", handleElementMouseLeave);
      });
    };
  }, [mouseX, mouseY, isVisible]);

  // If running on a touch device, don't render the custom cursor
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div className="hidden lg:block">
      {/* Outer Circle (Trailing) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-gray-300/20 pointer-events-none z-[9999] flex items-center justify-center"
        initial={{
          width: 26,
          height: 26,
          backgroundColor: "rgba(255, 255, 255, 0)"
        }}
        animate={{
          width: isHovering ? 38 : 26,
          height: isHovering ? 38 : 26,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0)",
        }}
        style={{
          x: circleX,
          y: circleY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Inner Dot (Exact pointer) */}
      <motion.div
        className="fixed top-0 left-0 w-[5.6px] h-[5.6px] rounded-full bg-accent pointer-events-none z-[10000]"
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  );
}
