import type { ServiceFaq } from "@/data/services";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/animations/Reveal";

interface FaqSectionProps {
  faqs: ServiceFaq[];
  title?: string;
  description?: string;
}

/** Single-column accordion, 720px, mirrored by FAQPage schema. */
export function FaqSection({
  faqs,
  title = "Frequently asked questions",
  description = "Honest answers to what patients ask us most.",
}: FaqSectionProps) {
  return (
    <Section tone="neutral" labelledBy="faq-heading">
      <SectionHeading id="faq-heading" eyebrow="FAQ" title={title} description={description} />
      <Reveal className="mx-auto max-w-[720px]">
        <Accordion items={faqs} />
      </Reveal>
    </Section>
  );
}
