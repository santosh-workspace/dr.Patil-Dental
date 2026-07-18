import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { MapSection } from "@/components/sections/MapSection";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Appointments",
  description:
    "Book a dental appointment in Moshi — call +91 86682 52402, WhatsApp us, or send a request. Dr. Patil's Dental Clinic, Alandi–Moshi Road, opp. Chaudhary Dhaba.",
  path: "/contact",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        title="Contact Us"
        lede="Call, WhatsApp, or request an appointment online — whichever is easiest for you."
      />

      <ContactSection />
      <MapSection />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
