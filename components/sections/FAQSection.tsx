import { faqs } from "@/data/faq";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/animations/Reveal";

/** FAQ Section — accessible accordion (FAQAccordion). */
export function FAQSection() {
  return (
    <Section id="faq" surface>
      <Reveal className="mb-10">
        <SectionHeading eyebrow="FAQ" title="Questions patients often ask" />
      </Reveal>
      <Reveal delay={0.05} className="mx-auto max-w-3xl">
        <Accordion items={faqs} />
      </Reveal>
    </Section>
  );
}
