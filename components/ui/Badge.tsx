import { cn } from "@/lib/utils";

/** Badge primitive. */
export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1 text-caption font-semibold text-accent-700",
        className
      )}
    >
      {children}
    </span>
  );
}
