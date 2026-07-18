import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";

interface PageHeaderProps {
  crumbs: Crumb[];
  title: string;
  lede?: string;
  /** Extra content below the lede (badges, CTAs). */
  children?: ReactNode;
}

/** Inner-page header: breadcrumb + H1 + lede on the brand's soft gradient. */
export function PageHeader({ crumbs, title, lede, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-mint-50/50 to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-6%] h-72 w-72 rounded-full bg-primary-100/60 blur-3xl"
      />
      <Container className="relative py-12 md:py-16">
        <Breadcrumb items={crumbs} />
        <h1 className="font-heading text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-4 max-w-2xl text-lg leading-body text-neutral-600">
            {lede}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
