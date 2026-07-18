"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerItem } from "@/animations/variants";

/** A single staggered grid item (used inside StaggerGroup). Reduced-motion safe. */
export function StaggerItemClient({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return <motion.div variants={staggerItem}>{children}</motion.div>;
}
