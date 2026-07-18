"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp } from "@/animations/variants";

/**
 * Scroll-reveal wrapper (Scroll Animations). Respects prefers-reduced-motion:
 * when reduced motion is requested, content appears instantly with no transform.
 */
export function Reveal({
  children,
  variants = fadeUp,
  className,
  as = "div",
  delay = 0,
}: {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  as?: "div" | "section" | "li" | "article";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
