/**
 * Original dental line-illustrations — inline SVG, drawn with the EXISTING
 * palette only (primary / secondary / accent tokens via currentColor + stops).
 * These are decorative/illustrative (not photos), so they never misrepresent
 * the clinic. Crisp at any size, no network request, no layout shift.
 * Swap for real photography later without touching layout.
 */

type ArtProps = { className?: string };

const wrap = "h-full w-full";

/** Soft gradient defs reused across illustrations (existing palette). */
function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-a`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#2563eb" />
        <stop offset="1" stopColor="#0ea5e9" />
      </linearGradient>
      <linearGradient id={`${id}-b`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#e0f2fe" />
        <stop offset="1" stopColor="#eff6ff" />
      </linearGradient>
    </defs>
  );
}

export function ToothCareArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 300" className={className ?? wrap} role="img" aria-hidden="true">
      <Defs id="tc" />
      <rect width="400" height="300" fill="url(#tc-b)" />
      <circle cx="315" cy="70" r="46" fill="#bae6fd" opacity="0.6" />
      <circle cx="70" cy="235" r="34" fill="#bfdbfe" opacity="0.6" />
      <path
        d="M200 70c-22 0-33 12-55 12S100 68 88 92c-14 30 2 74 12 104 6 18 12 40 26 40 12 0 13-30 22-48 5-9 10-12 18-12s13 3 18 12c9 18 10 48 22 48 14 0 20-22 26-40 10-30 26-74 12-104-12-24-33-10-55-10z"
        fill="#fff"
        stroke="url(#tc-a)"
        strokeWidth="6"
      />
      <path d="M150 120c8-8 20-10 30-6" fill="none" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
      <g stroke="#22d3ee" strokeWidth="5" strokeLinecap="round">
        <path d="M280 120l14-14M292 132l18-8M286 150l18 2" />
      </g>
    </svg>
  );
}

export function CleaningArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 300" className={className ?? wrap} role="img" aria-hidden="true">
      <Defs id="cl" />
      <rect width="400" height="300" fill="url(#cl-b)" />
      <circle cx="320" cy="220" r="52" fill="#bae6fd" opacity="0.55" />
      <rect x="150" y="60" width="40" height="150" rx="20" fill="#fff" stroke="url(#cl-a)" strokeWidth="6" transform="rotate(18 170 135)" />
      <rect x="150" y="40" width="40" height="34" rx="10" fill="url(#cl-a)" transform="rotate(18 170 57)" />
      <g stroke="#38bdf8" strokeWidth="6" strokeLinecap="round">
        <path d="M230 150l30-14M240 176l32-6M236 202l30 6" />
      </g>
      <circle cx="118" cy="228" r="10" fill="#22d3ee" />
      <circle cx="150" cy="250" r="7" fill="#7dd3fc" />
    </svg>
  );
}

export function ShieldArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 300" className={className ?? wrap} role="img" aria-hidden="true">
      <Defs id="sh" />
      <rect width="400" height="300" fill="url(#sh-b)" />
      <circle cx="80" cy="80" r="40" fill="#bfdbfe" opacity="0.6" />
      <path d="M200 60l70 26v58c0 46-30 74-70 96-40-22-70-50-70-96V86z" fill="#fff" stroke="url(#sh-a)" strokeWidth="6" />
      <path d="M170 150l22 22 42-46" fill="none" stroke="#0ea5e9" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChairArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 300" className={className ?? wrap} role="img" aria-hidden="true">
      <Defs id="ch" />
      <rect width="400" height="300" fill="url(#ch-b)" />
      <circle cx="320" cy="80" r="44" fill="#bae6fd" opacity="0.5" />
      <rect x="120" y="90" width="130" height="46" rx="22" fill="#fff" stroke="url(#ch-a)" strokeWidth="6" transform="rotate(-14 185 113)" />
      <rect x="150" y="150" width="120" height="46" rx="22" fill="#fff" stroke="url(#ch-a)" strokeWidth="6" />
      <path d="M160 196v40M262 196v40" stroke="url(#ch-a)" strokeWidth="8" strokeLinecap="round" />
      <circle cx="300" cy="120" r="16" fill="#22d3ee" />
      <path d="M300 136v40l-30 20" fill="none" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function SmileArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 300" className={className ?? wrap} role="img" aria-hidden="true">
      <Defs id="sm" />
      <rect width="400" height="300" fill="url(#sm-b)" />
      <circle cx="200" cy="150" r="92" fill="#fff" stroke="url(#sm-a)" strokeWidth="6" />
      <path d="M150 140a12 12 0 0124 0M226 140a12 12 0 0124 0" fill="none" stroke="#0ea5e9" strokeWidth="7" strokeLinecap="round" />
      <path d="M150 176c14 26 86 26 100 0" fill="none" stroke="url(#sm-a)" strokeWidth="8" strokeLinecap="round" />
      <g stroke="#22d3ee" strokeWidth="5" strokeLinecap="round">
        <path d="M305 95l14-14M60 210l-14 14M320 200l16 6" />
      </g>
    </svg>
  );
}

export function ToolsArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 300" className={className ?? wrap} role="img" aria-hidden="true">
      <Defs id="tl" />
      <rect width="400" height="300" fill="url(#tl-b)" />
      <circle cx="90" cy="90" r="38" fill="#bfdbfe" opacity="0.6" />
      <circle cx="150" cy="150" r="18" fill="none" stroke="url(#tl-a)" strokeWidth="6" />
      <path d="M163 163l70 70" stroke="url(#tl-a)" strokeWidth="8" strokeLinecap="round" />
      <path d="M250 70l-90 90" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
      <circle cx="255" cy="66" r="12" fill="#22d3ee" />
    </svg>
  );
}

/** Name → illustration map. */
const ART = {
  care: ToothCareArt,
  cleaning: CleaningArt,
  shield: ShieldArt,
  chair: ChairArt,
  smile: SmileArt,
  tools: ToolsArt,
} as const;

export type ArtName = keyof typeof ART;

export function DentalArt({ name, className }: { name: ArtName; className?: string }) {
  const Cmp = ART[name] ?? ToothCareArt;
  return <Cmp className={className} />;
}
