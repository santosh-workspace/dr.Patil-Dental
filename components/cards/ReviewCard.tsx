import { Star } from "lucide-react";
import type { Review } from "@/types/review";

/** GoogleG mark (brand colors, used only for Google attribution). */
function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.5-.2-2.2H12v4.1h6.6c-.1 1.1-.9 2.7-2.5 3.8l3.6 2.8c2.3-2.1 3.6-5.2 3.6-8.5z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.8-3c-1 .7-2.4 1.2-4.2 1.2-3.2 0-5.9-2.1-6.9-5.1l-3.9 3c2 4 6.1 6.8 10.8 6.8z" />
      <path fill="#FBBC05" d="M5.1 14.2c-.25-.7-.4-1.5-.4-2.2s.15-1.5.4-2.2l-3.9-3C.5 8.3 0 10.1 0 12s.5 3.7 1.2 5.3l3.9-3.1z" />
      <path fill="#EA4335" d="M12 4.7c1.8 0 3.4.6 4.7 1.8l3.4-3.3C18 1.2 15.2 0 12 0 7.3 0 3.2 2.7 1.2 6.7l3.9 3.1C6.1 6.8 8.8 4.7 12 4.7z" />
    </svg>
  );
}

/** ReviewCard — premium testimonial card. Hover: lift + glow (card-glow).
 *  Illustrated avatar (not a real person) or initials fallback. */
export function ReviewCard({ review }: { review: Review & { avatar?: string } }) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <figure className="card-glow flex h-full flex-col gap-4 rounded-2xl border border-neutral-200 bg-neutral-0 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5" role="img" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={i < review.rating ? "h-4 w-4 fill-accent-400 text-accent-400" : "h-4 w-4 text-neutral-300"}
              aria-hidden="true"
            />
          ))}
        </div>
        <GoogleG className="h-5 w-5 shrink-0" />
      </div>

      <blockquote className="flex-1 text-body-sm leading-relaxed text-neutral-600">
        “{review.text}”
      </blockquote>

      <figcaption className="flex items-center gap-3 border-t border-neutral-100 pt-4">
        {review.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.avatar}
            alt=""
            aria-hidden="true"
            width={44}
            height={44}
            loading="lazy"
            className="h-11 w-11 rounded-full bg-primary-50 ring-1 ring-neutral-200"
          />
        ) : (
          <span className="grid h-11 w-11 place-items-center rounded-full bg-primary-100 text-caption font-bold text-primary-700" aria-hidden="true">
            {initials}
          </span>
        )}
        <span className="flex flex-col">
          <span className="text-body-sm font-semibold text-neutral-900">{review.name}</span>
          {review.date && <span className="text-caption text-neutral-500">{review.date}</span>}
        </span>
      </figcaption>
    </figure>
  );
}
