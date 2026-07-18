import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site } from "@/constants/site";
import { PageHeader } from "@/components/shared/PageHeader";
import { FAQSection } from "@/components/sections/FAQSection";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { JsonLd } from "@/components/shared/JsonLd";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description: `Answers to common questions about visiting ${site.clinicName} — timings, location, appointments and treatments.`,
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before your visit."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
      <FAQSection />
      <AppointmentCTA />
    </>
  );
}
