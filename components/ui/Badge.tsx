import type { ReactNode } from "react";

type BadgeTone = "primary" | "mint" | "neutral";

const TONES: Record<BadgeTone, string> = {
  primary: "bg-primary-50 text-primary-800 ring-primary-200",
  mint: "bg-mint-50 text-primary-800 ring-mint-200",
  neutral: "bg-neutral-100 text-neutral-700 ring-neutral-200",
};

export function Badge({
  children,
  tone = "primary",
  className = "",
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold ring-1 ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
