/** Pill-style section eyebrow — one consistent label treatment site-wide. */
export function Eyebrow({
  children,
  dark = false,
}: {
  children: string;
  dark?: boolean;
}) {
  return (
    <p
      className={`mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest ring-1 ${
        dark
          ? "bg-white/10 text-primary-100 ring-white/20"
          : "bg-primary-50 text-primary-700 ring-primary-100"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-primary-200" : "bg-primary-500"}`}
      />
      {children}
    </p>
  );
}
