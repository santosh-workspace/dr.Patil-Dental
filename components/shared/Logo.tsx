import Link from "next/link";

/**
 * Text lockup logo. TODO(client): replace with the supplied logo file
 * once delivered (blocks deploy, not build).
 */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      aria-label="Dr. Patil's Dental Clinic and Implant Centre — Home"
    >
      <span
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-600 font-heading text-lg font-bold text-white"
      >
        P
      </span>
      <span className="leading-tight">
        <span
          className={`block font-heading text-base font-bold tracking-tight ${
            dark ? "text-white" : "text-neutral-900"
          }`}
        >
          Dr. Patil&rsquo;s Dental Clinic
        </span>
        <span
          className={`block text-[11px] font-semibold uppercase tracking-widest ${
            dark ? "text-primary-300" : "text-primary-600"
          }`}
        >
          &amp; Implant Centre
        </span>
      </span>
    </Link>
  );
}
