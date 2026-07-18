import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Phone } from "lucide-react";
import { services, getService, type Service } from "@/data/services";
import { clinic, telUrl } from "@/data/clinic";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { Section } from "@/components/layout/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ButtonLink } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { ContactSection } from "@/components/sections/ContactSection";

interface PageProps {
  params: { slug: string };
}

/** Featured treatments first, current one excluded — stable internal-linking trio. */
function relatedServices(current: Service): Service[] {
  return services
    .filter((s) => s.slug !== current.slug)
    .sort((a, b) => Number(b.featured) - Number(a.featured))
    .slice(0, 3);
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  // Keep SERP descriptions within ~160 chars, trimming at a word boundary.
  const suffix = " At Dr. Patil's Dental Clinic, Moshi. Book today.";
  let intro = service.shortDescription;
  const max = 160 - suffix.length;
  if (intro.length > max) {
    intro = intro.slice(0, max).replace(/\s+\S*$/, "").replace(/[,;—-]$/, "") + ".";
  }
  return buildMetadata({
    title: `${service.name} in Moshi`,
    description: `${intro}${suffix}`,
    path: `/services/${service.slug}`,
  });
}

export default function ServicePage({ params }: PageProps) {
  const service = getService(params.slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-mint-50/50 to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-[-6%] h-72 w-72 rounded-full bg-primary-100/60 blur-3xl"
        />
        <div className="relative mx-auto w-full max-w-site px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <Breadcrumb items={crumbs} />
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-glow">
              <Icon aria-hidden="true" className="h-8 w-8" strokeWidth={1.75} />
            </span>
            <div>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
                {service.name} in Moshi
              </h1>
              <p className="mt-3 max-w-2xl text-lg leading-body text-neutral-600">
                {service.shortDescription}
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Book Appointment</ButtonLink>
            <ButtonLink href={telUrl} variant="secondary">
              <Phone aria-hidden="true" className="h-4 w-4" />
              {clinic.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section labelledBy="overview-heading">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2
              id="overview-heading"
              className="font-heading text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl"
            >
              About this treatment
            </h2>
            <div className="mt-5 space-y-4 leading-body text-neutral-600">
              {service.longDescription.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-card bg-mint-50 p-8">
              <h2 className="font-heading text-xl font-bold text-neutral-900">
                Benefits
              </h2>
              <ul className="mt-5 space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-neutral-700">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                      <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="neutral" labelledBy="procedure-heading">
        <SectionHeading
          id="procedure-heading"
          eyebrow="What to Expect"
          title="How the treatment works"
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.procedure.map((step, i) => (
            <StaggerItem key={step.title} className="h-full">
              <div className="h-full rounded-card border border-neutral-100 bg-white p-6 shadow-soft">
                <span className="font-heading text-3xl font-bold text-primary-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-base font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-body text-neutral-600">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section labelledBy="service-faq-heading">
        <SectionHeading
          id="service-faq-heading"
          eyebrow="FAQ"
          title={`${service.name} — your questions answered`}
        />
        <Reveal className="mx-auto max-w-[720px]">
          <Accordion items={service.faqs} />
        </Reveal>
      </Section>

      {/* neutral (not mint) keeps the tint rhythm — the CTA band next is the colored moment */}
      <Section tone="neutral" labelledBy="related-heading" className="!py-16 md:!py-20">
        <SectionHeading
          id="related-heading"
          eyebrow="Explore More"
          title="Related treatments"
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedServices(service).map((related) => (
            <StaggerItem key={related.slug} className="h-full">
              <ServiceCard service={related} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaSection />
      <ContactSection />

      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(service.faqs),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}
