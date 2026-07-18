import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionTone = "white" | "neutral" | "mint" | "dark";

const TONES: Record<SectionTone, string> = {
  white: "bg-white",
  neutral: "bg-neutral-50",
  mint: "bg-mint-50",
  dark: "bg-neutral-900 text-white",
};

interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
  className?: string;
  /** Set false when the section manages its own container (e.g. full-width map). */
  contained?: boolean;
  labelledBy?: string;
}

/** Standard page section with the 120/96/64 vertical rhythm and tone alternation. */
export function Section({
  children,
  tone = "white",
  id,
  className = "",
  contained = true,
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-16 md:py-24 lg:py-[7.5rem] ${TONES[tone]} ${className}`}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
