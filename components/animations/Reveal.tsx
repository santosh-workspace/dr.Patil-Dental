"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fade, fadeUp, scaleIn, slideInLeft, slideInRight, staggerContainer } from "./presets";

const VARIANTS: Record<string, Variants> = {
  "fade-up": fadeUp,
  fade,
  "scale-in": scaleIn,
  "slide-left": slideInLeft,
  "slide-right": slideInRight,
};

interface RevealProps {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  delay?: number;
  className?: string;
}

/** Scroll-entry reveal: animates once, disabled entirely under prefers-reduced-motion. */
export function Reveal({ children, variant = "fade-up", delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={VARIANTS[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

/** Parent that staggers its <StaggerItem> children on scroll entry. */
export function Stagger({ children, className }: StaggerProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "fade-up",
}: {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof VARIANTS;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={VARIANTS[variant]}>
      {children}
    </motion.div>
  );
}
