"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Counter — animates a number up when scrolled into view. Supports two APIs:
 *  1) <Counter to={10} suffix="+" prefix="" />
 *  2) <Counter value="10+" />  (parses a leading number; renders non-numeric
 *     strings like "B.D.S." unchanged)
 * Reduced-motion users see the final value immediately.
 */
export function Counter({
  to,
  prefix = "",
  suffix = "",
  value,
  duration = 1400,
}: {
  to?: number;
  prefix?: string;
  suffix?: string;
  value?: string;
  duration?: number;
}) {
  // Normalise the two APIs into { target, pre, post }.
  let target = to ?? null;
  let pre = prefix;
  let post = suffix;

  if (target == null && value != null) {
    const m = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
    if (m) {
      target = parseFloat(m[2]);
      pre = m[1];
      post = m[3];
    } else {
      // Non-numeric (e.g. "B.D.S.") — render as-is.
      return <span>{value}</span>;
    }
  }

  return <CountUp target={target ?? 0} pre={pre} post={post} duration={duration} decimals={String(target).includes(".") ? 1 : 0} />;
}

function CountUp({
  target,
  pre,
  post,
  duration,
  decimals,
}: {
  target: number;
  pre: string;
  post: string;
  duration: number;
  decimals: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? target : 0);

  useEffect(() => {
    if (reduce || !inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(eased * target);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, reduce]);

  return (
    <span ref={ref}>
      {pre}
      {n.toFixed(decimals)}
      {post}
    </span>
  );
}
