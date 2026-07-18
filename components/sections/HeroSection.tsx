import Image from "next/image";
import { Phone, Calendar, Star, ShieldCheck, Clock } from "lucide-react";
import { site } from "@/constants/site";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { fadeIn } from "@/animations/variants";

/**
 * Hero Variant 01 — Classic Split (Generator: "Doctor Photo Available → Split
 * Hero"). Left: H1 + tagline + CTAs + trust indicators. Right: doctor image.
 * Single H1 per page (SEO). Fade motion (Generator mapping: Hero → Fade).
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 via-white to-white">
      {/* Soft decorative background — atmosphere without noise (Design System) */}
      <div className="animate-floaty pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-secondary-100/50 blur-3xl" aria-hidden="true" />
      <div className="animate-floaty pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-primary-100/40 blur-3xl [animation-delay:-3s]" aria-hidden="true" />

      <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <Reveal variants={fadeIn} className="flex flex-col items-start gap-6">
          <span className="eyebrow">
            <Star className="h-3.5 w-3.5" aria-hidden="true" />
            Trusted Dental Care in Moshi, Pune
          </span>

          <TextReveal
            text="Healthy Smiles, Gentle Care for Your Whole Family"
            as="h1"
            className="text-h1"
            highlight="Gentle Care"
          />

          <p className="max-w-xl text-body-lg text-neutral-600">
            {site.tagline}. At {site.clinicName}, {site.doctor.name} offers comfortable,
            honest dental treatment with {site.doctor.experience} of experience —
            in a calm, welcoming clinic.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton>
              <Button href="/contact" size="lg">
                <Calendar className="h-5 w-5" aria-hidden="true" />
                Book Appointment
              </Button>
            </MagneticButton>
            <Button href={site.contact.phoneHref} variant="secondary" size="lg">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now
            </Button>
          </div>

          {/* Trust indicators */}
          <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
            <li className="inline-flex items-center gap-2 text-body-sm font-medium text-neutral-700">
              <ShieldCheck className="h-5 w-5 text-primary-600" aria-hidden="true" />
              B.D.S. Qualified
            </li>
            <li className="inline-flex items-center gap-2 text-body-sm font-medium text-neutral-700">
              <Star className="h-5 w-5 text-primary-600" aria-hidden="true" />
              {site.doctor.experience} Experience
            </li>
            <li className="inline-flex items-center gap-2 text-body-sm font-medium text-neutral-700">
              <Clock className="h-5 w-5 text-primary-600" aria-hidden="true" />
              Open 6 Days a Week
            </li>
          </ul>
        </Reveal>

        <Reveal variants={fadeIn} delay={0.1} className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-100 to-secondary-100" aria-hidden="true" />
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.75rem] border border-white shadow-xl">
            <Image
              src={site.doctor.photo}
              alt={`${site.doctor.name}, ${site.doctor.qualification}, at ${site.clinicName}`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover"
            />
          </div>
          {/* Floating credential chip */}
          <div className="absolute bottom-5 left-5 rounded-xl border border-neutral-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
            <p className="text-body-sm font-bold text-neutral-900">{site.doctor.name}</p>
            <p className="text-caption text-primary-600">{site.doctor.qualification}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
