"use client";

import { motion, useReducedMotion } from "framer-motion";
import { wordContainer, wordItem } from "@/animations/variants";
import { cn } from "@/lib/utils";

/**
 * TextReveal — word-by-word rise-in for headings (premium text reveal).
 * Renders real text (SEO-safe) and is reduced-motion aware. Words contained in
 * the `highlight` phrase get the animated gradient treatment.
 */
export function TextReveal({
  text,
  as: Tag = "h1",
  className,
  highlight = "",
}: {
  text: string;
  as?: "h1" | "h2" | "span";
  className?: string;
  highlight?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const hi = highlight ? highlight.split(" ").filter(Boolean) : [];
  const isHi = (w: string) => hi.includes(w.replace(/[.,]/g, ""));
  const MotionTag = motion[Tag];

  if (reduce) {
    const Plain = Tag;
    return (
      <Plain className={className}>
        {words.map((w, i) =>
          isHi(w) ? <span key={i} className="text-gradient">{w} </span> : <span key={i}>{w} </span>
        )}
      </Plain>
    );
  }

  return (
    <MotionTag
      className={className}
      variants={wordContainer}
      initial="hidden"
      animate="show"
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden="true">
          <motion.span className={cn("inline-block", isHi(w) && "text-gradient")} variants={wordItem}>
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
