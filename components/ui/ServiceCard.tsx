import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

const CARD_BASE =
  "group flex h-full flex-col rounded-card border border-neutral-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

/**
 * Service card — photo variant when the service carries an image
 * (featured six), icon variant otherwise. Whole card is one link.
 */
export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  if (service.image) {
    return (
      <Link
        href={`/services/${service.slug}`}
        className={`${CARD_BASE} overflow-hidden`}
      >
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt ?? service.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-primary-950/30 via-transparent to-transparent"
          />
          <span className="absolute bottom-3 left-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-primary-600 shadow-soft ring-1 ring-white/60 backdrop-blur-sm transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
            <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-heading text-lg font-semibold text-neutral-900">
            {service.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-body text-neutral-600">
            {service.shortDescription}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
            Learn more
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/services/${service.slug}`} className={`${CARD_BASE} p-6`}>
      <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
        <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={1.75} />
      </span>
      <h3 className="font-heading text-lg font-semibold text-neutral-900">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-body text-neutral-600">
        {service.shortDescription}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
        Learn more
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
        />
      </span>
    </Link>
  );
}
