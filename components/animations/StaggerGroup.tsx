"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer } from "@/animations/variants";

/** Stagger container for grids (Services → Stagger). Reduced-motion safe. */
export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
