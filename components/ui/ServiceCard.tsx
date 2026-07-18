import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

/** Icon card for the services grid — whole card is one accessible link. */
export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-card border border-neutral-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
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
