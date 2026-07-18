import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/animations/Reveal";
import { Calendar } from "lucide-react";

/** Doctor Profile Section. */
export function DoctorSection() {
  return (
    <Section id="doctor" surface>
      <Reveal className="mb-12">
        <SectionHeading eyebrow="Meet Your Dentist" title="Experienced, gentle, and caring" />
      </Reveal>
      <Reveal delay={0.1}>
        <DoctorCard />
        <div className="mt-8 flex justify-center">
          <MagneticButton>
            <Button href="/contact" size="lg">
              <Calendar className="h-5 w-5" aria-hidden="true" />
              Book a Consultation
            </Button>
          </MagneticButton>
        </div>
      </Reveal>
    </Section>
  );
}
