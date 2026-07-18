import { technologyPoints } from "@/data/technology";
import { techPhotos } from "@/data/media";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { StaggerItemClient } from "@/components/animations/StaggerItemClient";
import { Reveal } from "@/components/animations/Reveal";

/** Technology Section — general, honest (no specific equipment claimed). */
export function TechnologySection() {
  return (
    <Section id="technology">
      <Reveal className="mb-12">
        <SectionHeading
          eyebrow="Safety & Standards"
          title="Modern care in a safe, hygienic clinic"
        />
      </Reveal>
      <StaggerGroup className="grid gap-6 md:grid-cols-3">
        {technologyPoints.map((t, i) => (
          <StaggerItemClient key={t.title}>
            <FeatureCard icon={t.icon} title={t.title} description={t.description} image={techPhotos[i]} />
          </StaggerItemClient>
        ))}
      </StaggerGroup>
    </Section>
  );
}
