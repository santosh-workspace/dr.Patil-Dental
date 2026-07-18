import { services } from "@/data/services";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { StaggerItemClient } from "@/components/animations/StaggerItemClient";
import { Reveal } from "@/components/animations/Reveal";

/** Services Section — stagger grid (Generator mapping: Services → Stagger). */
export function ServicesSection({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <Section id="services" surface>
      <Reveal className="mb-12">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete dental care under one roof"
          subtitle="From routine check-ups to restorative treatments, we offer a full range of gentle dental services for the whole family."
        />
      </Reveal>
      <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((s) => (
          <StaggerItemClient key={s.slug}>
            <ServiceCard service={s} />
          </StaggerItemClient>
        ))}
      </StaggerGroup>
    </Section>
  );
}
