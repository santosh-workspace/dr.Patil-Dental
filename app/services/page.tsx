import type { Metadata } from "next";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Stagger, StaggerItem } from "@/components/animations/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = buildMetadata({
  title: "Dental Services in Moshi",
  description:
    "All 18 dental services at Dr. Patil's Dental Clinic, Moshi — implants, root canal, crowns, whitening, braces, pediatric care, and more. Book today.",
  path: "/services",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        title="Our Dental Services"
        lede="Complete care for your whole family — 18 services from preventive check-ups to advanced implant treatment, all in Moshi."
      />

      <Section labelledBy="all-services-heading">
        <h2 id="all-services-heading" className="sr-only">
          All services
        </h2>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaSection />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
