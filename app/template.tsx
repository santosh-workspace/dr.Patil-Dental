"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Route template — remounts on navigation, giving a smooth premium page
 * transition (fade + subtle rise). Reduced-motion users get an instant swap.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
