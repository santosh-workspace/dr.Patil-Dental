import { whyChooseUs } from "@/data/why-choose-us";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { StaggerItemClient } from "@/components/animations/StaggerItemClient";
import { Reveal } from "@/components/animations/Reveal";

/** Why Choose Us — trust reasons from verified facts. */
export function WhyChooseUs() {
  return (
    <Section id="why-choose-us">
      <Reveal className="mb-12">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Care you can trust, comfort you can feel"
        />
      </Reveal>
      <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((f) => (
          <StaggerItemClient key={f.title}>
            <FeatureCard icon={f.icon} title={f.title} description={f.description} />
          </StaggerItemClient>
        ))}
      </StaggerGroup>
    </Section>
  );
}
