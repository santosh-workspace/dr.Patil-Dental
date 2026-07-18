import { featuredServices } from "@/data/services";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ButtonLink } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/animations/Reveal";

/** 3×2 featured services grid with a view-all action. */
export function ServicesSection() {
  return (
    <Section labelledBy="services-heading">
      <SectionHeading
        id="services-heading"
        eyebrow="Our Services"
        title="Complete dental care under one roof"
        description="From routine check-ups to advanced implant treatment — 18 services for every member of your family."
      />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredServices.map((service) => (
          <StaggerItem key={service.slug} className="h-full">
            <ServiceCard service={service} />
          </StaggerItem>
        ))}
      </Stagger>
      <div className="mt-12 text-center">
        <ButtonLink href="/services" variant="secondary">
          View All 18 Services
        </ButtonLink>
      </div>
    </Section>
  );
}
