import { Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { ClinicImage } from "@/components/ui/ClinicImage";
import { Reveal } from "@/components/animations/Reveal";

const highlights = [
  "Consultation, placement, and crown — all at one clinic",
  "Careful X-ray-based planning before any procedure",
  "Honest advice on whether an implant is right for you",
  "Treatment paced to your comfort and budget",
];

/** Full-width mint accent band amplifying the implant-centre USP. */
export function FeaturedImplantsSection() {
  return (
    <Section tone="mint" labelledBy="implants-heading">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Our Specialty</Eyebrow>
          <h2
            id="implants-heading"
            className="font-heading text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl"
          >
            Missing a tooth? Implants that feel like your own.
          </h2>
          <p className="mt-5 leading-body text-neutral-600">
            As a dedicated implant centre in Moshi, we replace missing teeth
            with permanent, natural-looking implants — no removable dentures,
            no grinding down healthy neighboring teeth.
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-neutral-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                  <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/services/dental-implants">
              Explore Dental Implants
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal variant="scale-in">
          <ClinicImage
            src="/images/dental-implant-model.jpg"
            alt="Dental model showing a titanium implant post between natural tooth roots"
            ratio="3/2"
            sizes="(max-width: 1024px) 100vw, 50vw"
            hoverZoom
          />
        </Reveal>
      </div>
    </Section>
  );
}
