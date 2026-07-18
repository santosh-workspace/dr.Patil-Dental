import Link from "next/link";
import { site } from "@/constants/site";

/**
 * Text/wordmark logo — default per Brand Identity when no graphic logo is
 * supplied. Uses a tooth glyph mark + clinic name; never a fabricated image.
 */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${site.clinicName} — home`}
      className="group inline-flex items-center gap-2.5"
    >
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary-600 to-secondary-500 text-white shadow-sm">
        {/* Tooth mark */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M12 2c-2 0-3 1-5 1S4 2 3 4c-1 3 0 7 1 10 .6 1.8 1 5 2.5 5 1.2 0 1.2-3 2-4.5.4-.8.8-1 1.5-1s1.1.2 1.5 1c.8 1.5.8 4.5 2 4.5 1.5 0 1.9-3.2 2.5-5 1-3 2-7 1-10-1-2-2-1-4-1s-3-1-5-1z" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-heading text-[1.02rem] font-extrabold ${inverted ? "text-white" : "text-neutral-900"}`}
        >
          Dr. Ghule&rsquo;s
        </span>
        <span
          className={`text-caption font-semibold ${inverted ? "text-white/70" : "text-primary-600"}`}
        >
          Dental Clinic
        </span>
      </span>
    </Link>
  );
}
