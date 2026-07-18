import { Icon } from "@/components/ui/Icon";
import { DentalArt, type ArtName } from "@/components/illustrations/DentalArt";
import { ImageFade } from "@/components/shared/ImageFade";

/** FeatureCard — Icon + Title + Description (Why Choose Us / Technology).
 * Enhanced: hover lift + shadow, icon micro-interaction (scale + ≤5° rotate),
 * and an optional visual band — either a real photo (`image`, with illustration
 * fallback) or a brand illustration (`art`). Existing usage is unchanged. */
export function FeatureCard({
  icon,
  title,
  description,
  art,
  image,
}: {
  icon: string;
  title: string;
  description: string;
  art?: ArtName;
  image?: { src: string; alt: string; fallback: ArtName };
}) {
  return (
    <div className="group card-glow flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-neutral-0 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-lg">
      {image ? (
        <ImageFade
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="h-40 w-full"
          imgClassName="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          fallback={<DentalArt name={image.fallback} className="h-full w-full" />}
        />
      ) : art ? (
        <div className="h-28 w-full overflow-hidden">
          <DentalArt
            name={art}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent-50 text-accent-700 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <h3 className="text-h5">{title}</h3>
        <p className="text-body-sm text-neutral-600">{description}</p>
      </div>
    </div>
  );
}
