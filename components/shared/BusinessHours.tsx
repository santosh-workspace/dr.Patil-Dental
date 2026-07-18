import { site } from "@/constants/site";
import { cn } from "@/lib/utils";

/** BusinessHours — renders verified OPD timings (Local SEO / QA requirement). */
export function BusinessHours({ compact = false }: { compact?: boolean }) {
  return (
    <ul className="flex flex-col gap-2" aria-label="Clinic timings">
      {site.hours.map((h) => {
        const closed = h.morning === "Closed";
        return (
          <li
            key={h.day}
            className={cn(
              "flex items-center justify-between gap-4 text-body-sm",
              closed && "text-neutral-400"
            )}
          >
            <span className="font-semibold">{compact ? h.day.slice(0, 3) : h.day}</span>
            <span className="text-right tabular-nums">
              {closed ? "Closed" : `${h.morning}, ${h.evening}`}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
