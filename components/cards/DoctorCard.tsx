import { site } from "@/constants/site";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { ImageFade } from "@/components/shared/ImageFade";

/** DoctorCard — Photo + Name + Degree + Experience + specialization (Card System).
 * headingLevel keeps the document outline correct wherever it is placed.
 * Enhanced: premium portrait frame, image hover-zoom, skeleton→fade load. */
export function DoctorCard({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const NameTag = headingLevel;
  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-center">
      <div className="group relative mx-auto w-full max-w-sm">
        {/* Layered gradient frame */}
        <div className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-gradient-to-br from-primary-100 to-secondary-100 transition-transform duration-500 group-hover:rotate-1" aria-hidden="true" />
        <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-tr from-secondary-100 to-primary-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
        <ImageFade
          src={site.doctor.photo}
          alt={`${site.doctor.name}, ${site.doctor.qualification}`}
          fill
          sizes="(max-width: 768px) 90vw, 400px"
          className="aspect-[4/5] w-full rounded-2xl border border-neutral-200 shadow-lg transition-shadow duration-500 group-hover:shadow-xl"
          imgClassName="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Badge>
          <Icon name="Award" className="h-3.5 w-3.5" />
          {site.doctor.experience} experience
        </Badge>
        <NameTag className="text-h3">{site.doctor.name}</NameTag>
        <p className="text-body font-semibold text-primary-700">{site.doctor.qualification}</p>
        <p className="text-body-sm text-neutral-500">Registration No. {site.doctor.registration}</p>
        <p className="text-body text-neutral-600">
          With over a decade of clinical experience, Dr. Ghule is dedicated to gentle,
          honest, and comfortable dental care — taking the time to explain every treatment
          so patients feel informed and at ease.
        </p>
      </div>
    </div>
  );
}
