import { galleryItems } from "@/data/gallery";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ClinicImage } from "@/components/ui/ClinicImage";
import { Stagger, StaggerItem } from "@/components/animations/Reveal";

/** Photo grid (reveal + hover zoom) — the standard of care patients can expect. */
export function GallerySection() {
  return (
    <Section labelledBy="gallery-heading">
      <SectionHeading
        id="gallery-heading"
        eyebrow="Our Clinic"
        title="The standard of care you can expect"
        description="Clean rooms, sterilized instruments, and modern equipment — photography of our own Moshi clinic is on its way."
      />
      <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {galleryItems.map((g) => (
          <StaggerItem key={g.src} variant="fade">
            <ClinicImage
              src={g.src}
              alt={g.alt}
              ratio="1/1"
              sizes="(max-width: 768px) 50vw, 33vw"
              hoverZoom
            />
          </StaggerItem>
        ))}
      </Stagger>
      <div className="mt-12 text-center">
        <ButtonLink href="/gallery" variant="secondary">
          View Gallery
        </ButtonLink>
      </div>
    </Section>
  );
}
