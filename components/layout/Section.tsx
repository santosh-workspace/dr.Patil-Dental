import { cn } from "@/lib/utils";
import { Container } from "./Container";

/** Section — vertical rhythm wrapper with optional surface background + id. */
export function Section({
  children,
  id,
  className,
  surface = false,
  ariaLabel,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  surface?: boolean;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("section-y", surface && "bg-surface", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
