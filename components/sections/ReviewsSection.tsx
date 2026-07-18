import { site } from "@/constants/site";
import { reviews as realReviews } from "@/data/reviews";
import { sampleReviews } from "@/data/sample-reviews";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { StaggerItemClient } from "@/components/animations/StaggerItemClient";
import { Reveal } from "@/components/animations/Reveal";
import { Counter } from "@/components/animations/Counter";
import { Star, ExternalLink } from "lucide-react";
import type { Review } from "@/types/review";

/**
 * Testimonials — premium redesign. Uses REAL reviews from data/reviews.ts when
 * present (and enables schema elsewhere); otherwise falls back to clearly-
 * labelled SAMPLE reviews for the design preview (no schema emitted for those).
 */
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

export function ReviewsSection() {
  const usingReal = realReviews.length > 0;
  const list: (Review & { avatar?: string })[] = usingReal ? realReviews : sampleReviews;
  const avg = (list.reduce((s, r) => s + r.rating, 0) / list.length).toFixed(1);

  return (
    <Section id="reviews">
      <Reveal className="mb-10">
        <SectionHeading
          eyebrow="Patient Reviews"
          title="Trusted by smiles across Moshi & Pune"
          subtitle="Real care, gentle treatment, and results our patients are happy to talk about."
        />
      </Reveal>

      {/* Rating summary bar */}
      <Reveal className="mb-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-6 rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-primary-50/50 p-6 shadow-sm sm:flex-row sm:p-8">
          <div className="flex items-center gap-4">
            <GoogleG className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="text-caption font-semibold uppercase tracking-wide text-neutral-500">
                Google Rating
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-h2 font-extrabold text-neutral-900">
                  <Counter value={avg} />
                </span>
                <span className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
                  ))}
                </span>
              </div>
              <span className="text-body-sm font-semibold text-success">Excellent</span>
            </div>
          </div>
          <div className="hidden h-14 w-px bg-neutral-200 sm:block" />
          <div className="text-center sm:text-left">
            <p className="text-h3 font-extrabold text-primary-600">
              <Counter value={`${list.length}`} />
            </p>
            <p className="text-body-sm text-neutral-600">patient reviews</p>
          </div>
          <Button href={site.maps.googleBusinessProfile} external className="btn-sheen">
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            View on Google
          </Button>
        </div>
      </Reveal>

      {/* Reviews grid — stagger reveal + hover elevation */}
      <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((r, i) => (
          <StaggerItemClient key={i}>
            <ReviewCard review={r} />
          </StaggerItemClient>
        ))}
      </StaggerGroup>

      {!usingReal && (
        <p className="mt-8 text-center text-caption text-neutral-400">
          Sample reviews shown for preview — replace with the clinic&rsquo;s real Google reviews before launch.
        </p>
      )}
    </Section>
  );
}
