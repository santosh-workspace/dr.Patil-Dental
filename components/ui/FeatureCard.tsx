import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-card border border-neutral-100 bg-white p-6 shadow-soft transition-all duration-300 hover:border-primary-200 hover:shadow-lift motion-safe:hover:-translate-y-1">
      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
        <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <h3 className="font-heading text-base font-semibold text-neutral-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-body text-neutral-600">{description}</p>
    </div>
  );
}
