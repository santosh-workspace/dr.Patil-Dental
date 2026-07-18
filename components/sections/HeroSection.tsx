import Image from "next/image";
import type { ReactNode } from "react";
import { Award, GraduationCap, Anchor, Phone, HeartHandshake } from "lucide-react";
import { clinic, telUrl } from "@/data/clinic";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

/**
 * Full-background hero: the photo fills the section, a soft white scrim
 * keeps the left text column AA-readable, and the image stays visible on
 * the right. Uses clinic.doctor.photo when supplied (object-position can
 * be tuned then); until then a warm patient-at-ease photo sets the tone.
 * Server-rendered with CSS-only entrance animation so the H1 (LCP
 * element) paints before hydration.
 */

const HERO_IMAGE = "/images/hero-happy-patient.jpg";

/** Staggered fade-up that never hides content from non-animating contexts. */
function Rise({ delay, children }: { delay: number; children: ReactNode }) {
  return (
    <div
      className="motion-safe:animate-rise"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Full-bleed background photo (decorative — the H1 carries the message) */}
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src={clinic.doctor.photo ?? HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        {/* Legibility scrim: near-solid over the text column, airy over the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/75 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/80 lg:to-white/20" />
        {/* Soft brand tint keeps the photo in the teal family */}
        <div className="absolute inset-0 bg-primary-100/20 mix-blend-multiply" />
      </div>

      <Container className="relative py-24 md:py-32 lg:py-36">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <Rise delay={0}>
            <h1
              id="hero-heading"
              className="font-heading text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.3rem] lg:leading-[1.1]"
            >
              Trusted Family Dentist &amp;{" "}
              <span className="bg-gradient-to-r from-primary-700 to-aqua-600 bg-clip-text text-transparent">
                Implant Centre
              </span>{" "}
              in Moshi, Pune
            </h1>
          </Rise>
          <Rise delay={120}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-body text-neutral-700 lg:mx-0">
              Gentle, honest dental care for your whole family — from a
              child&rsquo;s first check-up to advanced dental implants, right
              here on Alandi–Moshi Road.
            </p>
          </Rise>
          <Rise delay={240}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <ButtonLink href="/contact" size="lg" className="w-full sm:w-auto">
                Book Appointment
              </ButtonLink>
              <ButtonLink
                href={telUrl}
                variant="secondary"
                size="lg"
                className="w-full bg-white/70 backdrop-blur-sm sm:w-auto"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                Call Now
              </ButtonLink>
            </div>
          </Rise>
          <Rise delay={360}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Badge>
                <Award aria-hidden="true" className="h-3.5 w-3.5" />
                {clinic.doctor.experience} Experience
              </Badge>
              <Badge>
                <GraduationCap aria-hidden="true" className="h-3.5 w-3.5" />
                {clinic.doctor.degree}
              </Badge>
              <Badge tone="mint">
                <Anchor aria-hidden="true" className="h-3.5 w-3.5" />
                Dedicated Implant Centre
              </Badge>
            </div>
          </Rise>
        </div>

        {/* Floating trust card over the visible image area — verified facts only */}
        <Rise delay={480}>
          <div className="absolute bottom-10 right-8 hidden items-center gap-3 rounded-2xl bg-white/90 px-5 py-3.5 shadow-lift ring-1 ring-white/60 backdrop-blur-sm motion-safe:animate-float-slow lg:flex">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
              <HeartHandshake aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span className="text-left text-xs font-medium leading-tight text-neutral-600">
              <span className="block font-heading text-sm font-bold text-neutral-900">
                Gentle, honest care
              </span>
              for the whole family
            </span>
          </div>
        </Rise>

        {/* Scroll cue — decorative; static under reduced motion */}
        <div aria-hidden="true" className="mt-16 hidden justify-center md:flex">
          <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary-400/80 pt-1.5">
            <span className="h-2 w-1 rounded-full bg-primary-600 motion-safe:animate-cue-bounce" />
          </span>
        </div>
      </Container>
    </section>
  );
}
