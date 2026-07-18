import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, servicesSchema } from "@/lib/schema";
import { site } from "@/constants/site";
import { services } from "@/data/services";
import { PageHeader } from "@/components/shared/PageHeader";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { Reveal } from "@/components/animations/Reveal";
import { Check, Calendar } from "lucide-react";

export const metadata = buildMetadata({
  title: "Dental Services",
  description: `Explore dental services at ${site.clinicName} in Moshi — check-ups, cleaning, root canal, fillings, whitening, braces, crowns and more. Gentle care for the whole family.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          servicesSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <PageHeader
        title="Our Dental Services"
        subtitle="Comprehensive, gentle treatments for every stage of your oral health — explained clearly, delivered comfortably."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <Section>
        <div className="flex flex-col gap-8">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                id={s.slug}
                className="scroll-mt-28 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8"
              >
                <div className="grid gap-6 md:grid-cols-[auto,1fr] md:items-start">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-primary-50 text-primary-600">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-h3">{s.title}</h2>
                    <p className="text-body text-neutral-600">{s.description}</p>
                    <ul className="grid gap-2 sm:grid-cols-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-body-sm text-neutral-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant="secondary" size="sm" className="self-start">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      Book this treatment
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <AppointmentCTA />
    </>
  );
}
