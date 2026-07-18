import { site } from "@/constants/site";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/animations/Reveal";
import { scaleIn } from "@/animations/variants";
import { Phone, Calendar, MessageCircle } from "lucide-react";

/** Appointment CTA — CTA Variant 01 Centered, scale motion (Generator: CTA → Scale). */
export function AppointmentCTA() {
  return (
    <section className="section-y">
      <Container>
        <Reveal variants={scaleIn}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 to-secondary-600 px-6 py-14 text-center shadow-xl md:px-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <h2 className="text-h2 text-white">Ready to book your visit?</h2>
              <p className="text-body-lg text-white/85">
                {site.tagline}. Call, message, or request an appointment online — we&rsquo;ll
                find a time that works for you.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <MagneticButton>
                  <Button href="/contact" variant="gradient" size="lg" className="!bg-white !from-white !to-white !text-primary-700">
                    <Calendar className="h-5 w-5" aria-hidden="true" />
                    Book Appointment
                  </Button>
                </MagneticButton>
                <Button href={site.contact.phoneHref} size="lg" className="!bg-white/15 !text-white hover:!bg-white/25">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {site.contact.phone}
                </Button>
                <Button href={site.contact.whatsapp} external size="lg" className="!bg-white/15 !text-white hover:!bg-white/25">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
