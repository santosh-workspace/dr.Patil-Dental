import { Star, ExternalLink, MapPin } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { clinic } from "@/data/clinic";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/animations/Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * 3-up GBP-verified review cards. Until verified reviews are supplied,
 * renders an honest "find us on Google" prompt instead of invented quotes.
 */
export function TestimonialsSection() {
  return (
    <Section labelledBy="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="Patient Reviews"
        title="What our patients say"
        description="Real reviews from real patients on Google."
      />
      {testimonials.length > 0 ? (
        <Stagger className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <figure className="flex h-full flex-col rounded-card border border-neutral-100 bg-white p-6 shadow-soft transition-all duration-300 hover:border-primary-200 hover:shadow-lift motion-safe:hover:-translate-y-1">
                <div
                  className="flex gap-1 text-warning"
                  role="img"
                  aria-label={`Rated ${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} aria-hidden="true" className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-body text-neutral-600">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700"
                  >
                    {initials(t.name)}
                  </span>
                  <span className="text-sm font-semibold text-neutral-900">{t.name}</span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      ) : (
        <Stagger className="mx-auto max-w-xl">
          <StaggerItem variant="fade">
            <div className="relative overflow-hidden rounded-card border border-neutral-100 bg-gradient-to-br from-neutral-50 to-mint-50/60 p-10 text-center shadow-soft">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-100/50 blur-2xl"
              />
              <span className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary-600 shadow-soft ring-1 ring-primary-100">
                <MapPin aria-hidden="true" className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <p className="relative leading-body text-neutral-600">
                Patients from Moshi and nearby areas share their experiences
                with us on Google. Search for{" "}
                <strong className="text-neutral-900">
                  &ldquo;{clinic.name}&rdquo;
                </strong>{" "}
                on Google Maps to read their reviews.
              </p>
              {clinic.gbpUrl && (
                <div className="relative mt-6">
                  <ButtonLink href={clinic.gbpUrl} variant="secondary" external>
                    Read Our Google Reviews
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  </ButtonLink>
                </div>
              )}
            </div>
          </StaggerItem>
        </Stagger>
      )}
    </Section>
  );
}
