import { Award, GraduationCap, MapPin, Anchor } from "lucide-react";
import { clinic } from "@/data/clinic";
import { Container } from "@/components/layout/Container";
import { Stagger, StaggerItem } from "@/components/animations/Reveal";

const badges = [
  {
    icon: Award,
    title: clinic.doctor.experience,
    text: "of clinical experience",
  },
  {
    icon: GraduationCap,
    title: clinic.doctor.degree,
    text: `Registered dentist — Reg. No. ${clinic.doctor.regNo}`,
  },
  {
    icon: Anchor,
    title: "Implant Centre",
    text: "Dedicated implant planning & placement",
  },
  {
    icon: MapPin,
    title: "In the Neighborhood",
    text: "Alandi–Moshi Road, opp. Chaudhary Dhaba",
  },
];

/** Credibility strip directly under the hero. */
export function TrustBadgesSection() {
  return (
    <section aria-label="Why patients trust us" className="border-b border-neutral-100 bg-white">
      <Container>
        <Stagger className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-neutral-100">
          {badges.map((b) => (
            <StaggerItem key={b.title} variant="fade">
              <div className="flex items-start gap-4 lg:px-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                  <b.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-neutral-900">{b.title}</p>
                  <p className="mt-0.5 text-sm leading-snug text-neutral-600">{b.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
