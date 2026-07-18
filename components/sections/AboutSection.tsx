import { clinic, areasServed } from "@/data/clinic";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { ClinicImage } from "@/components/ui/ClinicImage";
import { Reveal } from "@/components/animations/Reveal";

/** Split about: clinic imagery left, story + CTA right. */
export function AboutSection() {
  return (
    <Section tone="neutral" labelledBy="about-heading">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal variant="slide-left">
          <div className="relative">
            {/* TODO(client): swap for the real operatory photo when the shoot is done */}
            <ClinicImage
              src="/images/clinic-operatory-teal-accents.jpg"
              alt="Bright, modern dental operatory with teal accents — the standard of care at our clinic"
              ratio="3/2"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Floating verified-stat chip anchors the image to real credentials */}
            <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-lift ring-1 ring-neutral-100">
              <span className="font-heading text-2xl font-bold text-primary-600">
                {clinic.doctor.experience}
              </span>
              <span className="text-xs font-medium leading-tight text-neutral-600">
                of gentle,
                <br />
                honest dentistry
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal variant="slide-right">
          <Eyebrow>About the Clinic</Eyebrow>
          <h2
            id="about-heading"
            className="font-heading text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl"
          >
            A neighborhood clinic with implant-centre capability
          </h2>
          <div className="mt-5 space-y-4 leading-body text-neutral-600">
            <p>
              {clinic.name} is a family dental practice on Alandi–Moshi Road,
              led by {clinic.doctor.name}, {clinic.doctor.degree}, with{" "}
              {clinic.doctor.experience.toLowerCase()} of clinical experience.
            </p>
            <p>
              We combine the warmth of a caring neighborhood doctor with the
              standards of a modern implant centre — honest advice, gentle
              treatment, and clear explanations at every step. Families visit
              us from {areasServed.join(", ")}, and beyond.
            </p>
          </div>
          <div className="mt-8">
            <ButtonLink href="/about" variant="secondary">
              Learn More About Us
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
