import { cn } from "@/lib/utils";

/** Card primitive with documented variants (Default / Premium / Minimal / Glass). */
type CardVariant = "default" | "premium" | "minimal" | "glass";

const variants: Record<CardVariant, string> = {
  default: "bg-neutral-0 border border-neutral-200 shadow-sm",
  premium: "bg-neutral-0 border border-neutral-200 shadow-lg",
  minimal: "bg-surface border border-transparent",
  glass: "bg-white/70 backdrop-blur-md border border-white/60 shadow-md",
};

export function Card({
  children,
  variant = "default",
  className,
  interactive = false,
}: {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 transition-all duration-300",
        variants[variant],
        interactive && "hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
