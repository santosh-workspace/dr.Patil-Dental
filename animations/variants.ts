import type { Variants } from "framer-motion";

/**
 * Approved motion presets (Motion Rules / Framer Motion Patterns).
 * Durations follow the documented scale (Fast 0.2 / Standard 0.3 / Medium 0.5),
 * easing is easeOut / easeInOut. Never exceed 1s. Reused everywhere — never
 * re-invented inside components.
 */

const EASE = [0.22, 1, 0.36, 1] as const; // smooth easeOut

// Hero → Fade (Generator animation mapping)
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

// Generic upward reveal
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

// Gallery / cards → Reveal
export const reveal: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

// CTA → Scale
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
};

// Services → Stagger container
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

// Mask/clip image reveal (premium image entrance)
export const maskReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
  show: {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

// Slide-in from left/right
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

// Word reveal (used by TextReveal)
export const wordContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
};

export const wordItem: Variants = {
  hidden: { opacity: 0, y: "0.5em" },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};
