import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/constants/site";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/shared/JsonLd";

export const metadata = buildMetadata({
  title: "Contact & Appointments",
  description: `Contact ${site.clinicName} in Moshi, Pimpri-Chinchwad, Pune. Call ${site.contact.phone}, WhatsApp us, or request an appointment online.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHeader
        title="Contact & Appointments"
        subtitle={`${site.tagline}. We'd love to help — reach out any time during clinic hours.`}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <ContactSection />
    </>
  );
}
