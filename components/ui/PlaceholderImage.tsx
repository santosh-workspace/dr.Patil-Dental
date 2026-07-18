import type { LucideIcon } from "lucide-react";
import { Stethoscope } from "lucide-react";

type Ratio = "4/5" | "3/2" | "1/1" | "16/9";

const RATIOS: Record<Ratio, string> = {
  "4/5": "aspect-[4/5]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
};

interface PlaceholderImageProps {
  /** Announced to screen readers so the placeholder still communicates intent. */
  label: string;
  ratio?: Ratio;
  icon?: LucideIcon;
  className?: string;
  /** Gallery treatment: artwork gently scales within its fixed frame on hover. */
  hoverZoom?: boolean;
}

/**
 * Abstract medical illustration placeholder (Missing Data Rules) — fixed
 * aspect ratio so real client photos can swap in later with zero CLS.
 * Layered organic shapes + soft radial light keep it premium, never "empty".
 */
export function PlaceholderImage({
  label,
  ratio = "3/2",
  icon: Icon = Stethoscope,
  className = "",
  hoverZoom = false,
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`group/ph relative flex ${RATIOS[ratio]} w-full items-center justify-center overflow-hidden rounded-card bg-gradient-to-br from-primary-100 via-mint-50 to-primary-50 shadow-soft ring-1 ring-primary-100/60 ${className}`}
    >
      <svg
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full transition-transform duration-700 ease-out motion-reduce:transition-none ${
          hoverZoom ? "group-hover/ph:scale-105" : ""
        }`}
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* layered organic shapes with soft top light */}
        <circle cx="330" cy="30" r="130" className="fill-primary-200/50" />
        <circle cx="30" cy="280" r="150" className="fill-mint-200/45" />
        <circle cx="220" cy="170" r="85" className="fill-primary-200/30" />
        <circle cx="120" cy="60" r="46" className="fill-aqua-400/10" />
        <ellipse cx="200" cy="-40" rx="260" ry="110" className="fill-white/40" />
      </svg>
      {/* frosted icon chip */}
      <span className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white/60 shadow-soft ring-1 ring-white/70 backdrop-blur-sm">
        <Icon
          aria-hidden="true"
          className="h-9 w-9 text-primary-500"
          strokeWidth={1.5}
        />
      </span>
    </div>
  );
}
