import { cn } from "@/lib/utils";

/** Shimmer skeleton (Loading Animations — skeleton loading). Reduced-motion
 *  users get a static tint (the shimmer keyframe is disabled globally). */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded-lg bg-neutral-100",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.4s_infinite]",
        "before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent",
        className
      )}
    />
  );
}
