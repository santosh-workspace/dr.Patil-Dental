import { CircleDot, ShieldCheck, Armchair, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Stagger, StaggerItem } from "@/components/animations/Reveal";

const features = [
  {
    icon: CircleDot,
    title: "Digital X-ray Imaging",
    description:
      "Low-radiation digital X-rays reviewed with you chairside, so every recommendation is backed by evidence you can see.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Sterilization",
    description:
      "Every instrument is sterilized between patients following standard clinical protocols — cleanliness you can rely on.",
  },
  {
    icon: Armchair,
    title: "Comfort-First Treatment",
    description:
      "Effective anesthesia, a gentle pace, and clear explanations — designed to put anxious patients at ease.",
  },
  {
    icon: Sparkles,
    title: "Modern Materials",
    description:
      "Tooth-colored fillings, quality crowns, and titanium implants — modern materials chosen for safety and longevity.",
  },
];

/** Modern-equipment reassurance row. */
export function TechnologySection() {
  return (
    <Section tone="neutral" labelledBy="technology-heading">
      <SectionHeading
        id="technology-heading"
        eyebrow="Modern Care"
        title="Modern standards, gentle hands"
        description="The equipment and protocols of a modern practice, delivered with neighborhood-clinic warmth."
      />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <StaggerItem key={f.title} className="h-full">
            <FeatureCard {...f} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
