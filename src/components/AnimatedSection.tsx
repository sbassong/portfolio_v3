"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 24 }}
      animate={prefersReduced ? { opacity: 1, y: 0 } : undefined}
      whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
      viewport={prefersReduced ? undefined : { once: true, margin: "-60px" }}
      transition={prefersReduced ? { duration: 0 } : { duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
