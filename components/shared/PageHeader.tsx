import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";

/** PageHeader — internal-page hero band with breadcrumb + H1 (visible + schema-friendly). */
export function PageHeader({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  crumbs: { name: string; path: string }[];
}) {
  return (
    <section className="border-b border-neutral-200 bg-gradient-to-b from-primary-50/70 to-white">
      <Container className="py-12 md:py-16">
        <Reveal className="flex flex-col gap-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-caption text-neutral-500">
              {crumbs.map((c, i) => {
                const last = i === crumbs.length - 1;
                return (
                  <li key={c.path} className="flex items-center gap-1.5">
                    {last ? (
                      <span aria-current="page" className="font-semibold text-primary-700">{c.name}</span>
                    ) : (
                      <>
                        <Link href={c.path} className="hover:text-primary-700">{c.name}</Link>
                        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
          <h1 className="text-h1">{title}</h1>
          {subtitle && <p className="max-w-2xl text-body-lg text-neutral-600">{subtitle}</p>}
        </Reveal>
      </Container>
    </section>
  );
}
