import { cn } from "@/lib/utils";

/** Container — controls max width + horizontal padding only (Layout Components). */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("container-page", className)}>{children}</div>;
}
