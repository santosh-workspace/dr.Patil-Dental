import Image from "next/image";
import type { ReactNode } from "react";
import { Award, GraduationCap, Anchor, Phone } from "lucide-react";
import { clinic, telUrl } from "@/data/clinic";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

/**
 * Server-rendered hero with CSS-only entrance animation: the H1 (LCP
 * element) paints before hydration, and `motion-safe` keeps everything
 * fully visible under prefers-reduced-motion. Auto-upgrades to Classic
 * Split (text left, portrait right) when clinic.doctor.photo is set.
 */

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
  const hasPhoto = Boolean(clinic.doctor.photo);

  const content = (
    <>
      <Rise delay={0}>
        <h1
          id="hero-heading"
          className="font-heading text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]"
        >
          Trusted Family Dentist &amp;{" "}
          <span className="bg-gradient-to-r from-primary-700 to-aqua-600 bg-clip-text text-transparent">
            Implant Centre
          </span>{" "}
          in Moshi, Pune
        </h1>
      </Rise>
      <Rise delay={120}>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-body text-neutral-600">
          Gentle, honest dental care for your whole family — from a child&rsquo;s
          first check-up to advanced dental implants, right here on Alandi–Moshi Road.
        </p>
      </Rise>
      <Rise delay={240}>
        <div className={`mt-9 flex flex-col items-center gap-3 sm:flex-row ${hasPhoto ? "" : "justify-center"}`}>
          <ButtonLink href="/contact" size="lg" className="w-full sm:w-auto">
            Book Appointment
          </ButtonLink>
          <ButtonLink href={telUrl} variant="secondary" size="lg" className="w-full sm:w-auto">
            <Phone aria-hidden="true" className="h-4 w-4" />
            Call Now
          </ButtonLink>
        </div>
      </Rise>
      <Rise delay={360}>
        <div className={`mt-10 flex flex-wrap items-center gap-3 ${hasPhoto ? "" : "justify-center"}`}>
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
    </>
  );

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-mint-50/60 to-white"
    >
      {/* Layered gradient mesh — soft blobs drifting slowly for gentle depth */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-primary-100/70 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute bottom-[-30%] left-[-12%] h-[26rem] w-[26rem] rounded-full bg-mint-200/50 blur-3xl motion-safe:animate-float-slower" />
        <div className="absolute left-1/2 top-[-20%] h-72 w-[42rem] -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />
        <div className="absolute right-[16%] top-24 hidden h-24 w-24 rounded-full border border-primary-200/60 lg:block" />
        <div className="absolute left-[12%] top-1/2 hidden h-3 w-3 rounded-full bg-aqua-400/40 lg:block" />
      </div>
      <Container className="relative py-20 md:py-28 lg:py-32">
        {hasPhoto ? (
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">{content}</div>
            <div className="relative lg:col-span-5">
              <Image
                src={clinic.doctor.photo!}
                alt={`${clinic.doctor.name}, ${clinic.doctor.degree}, at ${clinic.shortName}`}
                width={520}
                height={650}
                priority
                className="w-full rounded-card object-cover shadow-lift"
              />
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-[720px] text-center">{content}</div>
        )}
        {/* Scroll cue — decorative; static under reduced motion, hidden on short screens */}
        <div aria-hidden="true" className="mt-14 hidden justify-center md:flex">
          <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary-300/80 pt-1.5">
            <span className="h-2 w-1 rounded-full bg-primary-500 motion-safe:animate-cue-bounce" />
          </span>
        </div>
      </Container>
    </section>
  );
}
