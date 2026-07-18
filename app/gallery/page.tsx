import type { Metadata } from "next";
import { galleryItems } from "@/data/gallery";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { ClinicImage } from "@/components/ui/ClinicImage";
import { Stagger, StaggerItem } from "@/components/animations/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = buildMetadata({
  title: "Clinic Gallery",
  description:
    "See the standard of care at Dr. Patil's Dental Clinic, Moshi — clean treatment rooms, sterilized instruments, and modern dental equipment.",
  path: "/gallery",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        title="Clinic Gallery"
        lede="The standard of care you can expect at our Alandi–Moshi Road clinic — photography of our own space is being prepared and will appear here soon."
      />

      <Section labelledBy="gallery-grid-heading">
        <h2 id="gallery-grid-heading" className="sr-only">
          Clinic photos
        </h2>
        <Stagger className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {galleryItems.map((g) => (
            <StaggerItem key={g.src} variant="fade">
              <figure>
                <ClinicImage
                  src={g.src}
                  alt={g.alt}
                  ratio="1/1"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  hoverZoom
                />
                <figcaption className="mt-3 text-center text-sm font-medium text-neutral-600">
                  {g.caption}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaSection />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
