import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { StaggerItemClient } from "@/components/animations/StaggerItemClient";
import { Reveal } from "@/components/animations/Reveal";
import { ImageFade } from "@/components/shared/ImageFade";
import { DentalArt } from "@/components/illustrations/DentalArt";
import { galleryPhotos } from "@/data/media";
import { site } from "@/constants/site";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Gallery — premium responsive "bento" layout of decorative dental photography
 * (Pexels, free license) with one brand tile. Stock images, not this exact
 * clinic (swap later); each has an illustration fallback. Hover follows the
 * Gallery spec: Image Zoom → Overlay Fade → Caption Reveal → Icon Fade.
 */
const spans = [
  "col-span-2 row-span-2",       // featured
  "md:col-span-2",
  "",
  "",
  "md:col-span-2",
];

export function GallerySection() {
  return (
    <Section id="gallery" surface>
      <Reveal className="mb-12">
        <SectionHeading
          eyebrow="Gallery"
          title="A calm, welcoming space"
          subtitle="Comfortable, modern dental care in a clean and friendly environment. Visit us to experience it first-hand."
        />
      </Reveal>
      <StaggerGroup className="grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[180px]">
        {galleryPhotos.map((photo, i) => (
          <StaggerItemClient key={i}>
            <figure className={cn("group relative h-full min-h-[180px] overflow-hidden rounded-2xl border border-neutral-200 shadow-sm transition-shadow duration-300 hover:shadow-lg", spans[i])}>
              <ImageFade
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="h-full w-full"
                imgClassName="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-110"
                fallback={<DentalArt name={photo.fallback} className="h-full w-full" />}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-primary-700 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-90" aria-hidden="true">
                <Plus className="h-5 w-5" />
              </span>
              {photo.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-body-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.caption}
                </figcaption>
              )}
            </figure>
          </StaggerItemClient>
        ))}

        {/* Brand tile */}
        <StaggerItemClient>
          <div className="group relative flex h-full min-h-[180px] flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-500 p-6 text-center shadow-sm md:col-span-2">
            <span className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125" aria-hidden="true" />
            <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M12 2c-2 0-3 1-5 1S4 2 3 4c-1 3 0 7 1 10 .6 1.8 1 5 2.5 5 1.2 0 1.2-3 2-4.5.4-.8.8-1 1.5-1s1.1.2 1.5 1c.8 1.5.8 4.5 2 4.5 1.5 0 1.9-3.2 2.5-5 1-3 2-7 1-10-1-2-2-1-4-1s-3-1-5-1z" />
              </svg>
            </span>
            <p className="relative text-body font-bold text-white">{site.tagline}</p>
            <p className="relative text-caption text-white/80">{site.clinicName}</p>
          </div>
        </StaggerItemClient>
      </StaggerGroup>
    </Section>
  );
}
