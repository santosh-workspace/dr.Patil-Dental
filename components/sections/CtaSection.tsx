import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/clinic";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

/** Centered gradient CTA band — the deliberate second color moment. */
export function CtaSection() {
  return (
    <Section
      labelledBy="cta-heading"
      className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-aqua-600 !py-16 md:!py-20"
      tone="white"
    >
      {/* Soft light shapes give the band depth without breaking the clean surface */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[8%] h-64 w-64 rounded-full bg-white/10 blur-3xl motion-safe:animate-float-slower" />
        <div className="absolute -bottom-32 right-[6%] h-80 w-80 rounded-full bg-aqua-400/20 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute right-[14%] top-8 hidden h-20 w-20 rounded-full border border-white/20 md:block" />
      </div>
      <Reveal variant="scale-in">
        <div className="relative mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Ready for a healthier smile?
          </h2>
          <p className="mt-4 text-lg leading-body text-primary-100">
            Book your visit today — we&rsquo;ll make it gentle, clear, and
            comfortable from the very first appointment.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="inverse" size="lg" className="w-full sm:w-auto">
              Book Appointment
            </ButtonLink>
            <ButtonLink
              href={whatsappUrl}
              external
              size="lg"
              className="w-full border-2 border-white/70 bg-transparent text-white hover:bg-white/10 sm:w-auto"
              variant="ghost"
            >
              <MessageCircle aria-hidden="true" className="h-5 w-5" />
              WhatsApp Us
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
