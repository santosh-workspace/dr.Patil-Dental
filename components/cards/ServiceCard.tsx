import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { ArrowRight } from "lucide-react";
import { DentalArt, type ArtName } from "@/components/illustrations/DentalArt";
import { ImageFade } from "@/components/shared/ImageFade";
import { serviceImages } from "@/data/media";
import { cn } from "@/lib/utils";
import type { Service } from "@/types/service";

/** Illustration fallback per service (used if a photo isn't set or fails). */
const ART: Record<string, ArtName> = {
  "dental-checkup": "care",
  "teeth-cleaning": "cleaning",
  "root-canal-treatment": "shield",
  "tooth-extraction": "tools",
  "dental-fillings": "shield",
  "teeth-whitening": "smile",
  "braces-and-aligners": "chair",
  "crowns-and-bridges": "chair",
};

/**
 * ServiceCard — same structure & props as before. Header band now shows a
 * relevant dental photo (Pexels, free license) with an illustration fallback.
 * Hover per the Hover doc: Lift → Icon move → Border glow → CTA arrow slide.
 * All hover is pure CSS (performance-friendly, reduced-motion safe).
 */
export function ServiceCard({ service }: { service: Service }) {
  const photo = serviceImages[service.slug];
  const fallbackArt = ART[service.slug] ?? "care";

  return (
    <div
      className={cn(
        "group card-glow flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-neutral-0 shadow-sm",
        "transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-lg"
      )}
    >
      {/* Photo band */}
      <div className="relative h-32 w-full overflow-hidden">
        {photo ? (
          <ImageFade
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="h-full w-full"
            imgClassName="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            fallback={<DentalArt name={fallbackArt} className="h-full w-full" />}
          />
        ) : (
          <DentalArt
            name={fallbackArt}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        )}
        {/* subtle tint for text/icon legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/15 to-transparent" aria-hidden="true" />
        {/* Icon tile — moves up slightly on hover (Icon move) */}
        <span className="absolute -bottom-6 left-6 grid h-12 w-12 place-items-center rounded-lg bg-neutral-0 text-primary-600 shadow-md ring-1 ring-neutral-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary-600 group-hover:text-white">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6 pt-9">
        <h3 className="text-h4">{service.title}</h3>
        <p className="flex-1 text-body-sm text-neutral-600">{service.short}</p>
        <Link
          href={`/services#${service.slug}`}
          className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-primary-700"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn more
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}
