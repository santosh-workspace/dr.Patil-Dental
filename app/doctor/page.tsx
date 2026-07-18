import type { Metadata } from "next";
import { Award, BadgeCheck, GraduationCap, User } from "lucide-react";
import { clinic } from "@/data/clinic";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/animations/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = buildMetadata({
  title: `${clinic.doctor.name} — Dentist in Moshi`,
  description: `Meet ${clinic.doctor.name}, ${clinic.doctor.degree} — ${clinic.doctor.experience.toLowerCase()} of gentle family dentistry and implant care in Moshi, Pune.`,
  path: "/doctor",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Doctor", path: "/doctor" },
];

const credentials = [
  {
    icon: GraduationCap,
    title: clinic.doctor.degree,
    text: "Bachelor of Dental Surgery, Pune",
  },
  {
    icon: BadgeCheck,
    title: `Reg. No. ${clinic.doctor.regNo}`,
    text: "Registered dental practitioner",
  },
  {
    icon: Award,
    title: clinic.doctor.experience,
    text: "of clinical experience",
  },
];

export default function DoctorPage() {
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        title={`Meet ${clinic.doctor.name}`}
        lede={`${clinic.doctor.degree} · ${clinic.doctor.experience} of experience · Family dentistry & implants`}
      />

      <Section labelledBy="doctor-bio-heading">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal variant="slide-left" className="lg:col-span-5">
            {/* TODO(client): replace with doctor portrait — hero also upgrades automatically */}
            <PlaceholderImage
              label={`Portrait of ${clinic.doctor.name} (photo coming soon)`}
              ratio="4/5"
              icon={User}
            />
          </Reveal>
          <Reveal variant="slide-right" className="lg:col-span-7">
            <h2
              id="doctor-bio-heading"
              className="font-heading text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl"
            >
              Gentle, honest dentistry — for over a decade
            </h2>
            <div className="mt-5 space-y-4 leading-body text-neutral-600">
              {clinic.doctor.bio.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {credentials.map((c) => (
                <li
                  key={c.title}
                  className="rounded-card border border-neutral-100 bg-white p-5 shadow-soft"
                >
                  <c.icon aria-hidden="true" className="h-6 w-6 text-primary-600" />
                  <p className="mt-3 font-heading text-sm font-bold text-neutral-900">
                    {c.title}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-neutral-600">{c.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaSection />
      <JsonLd data={[personSchema(), breadcrumbSchema(crumbs)]} />
    </>
  );
}
