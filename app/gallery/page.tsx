import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/constants/site";
import { PageHeader } from "@/components/shared/PageHeader";
import { GallerySection } from "@/components/sections/GallerySection";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { JsonLd } from "@/components/shared/JsonLd";

export const metadata = buildMetadata({
  title: "Gallery",
  description: `Take a look inside ${site.clinicName} in Moshi, Pimpri-Chinchwad — a calm, clean and welcoming dental clinic.`,
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHeader
        title="Clinic Gallery"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />
      <GallerySection />
      <AppointmentCTA />
    </>
  );
}
