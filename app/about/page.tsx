import type { Metadata } from "next";
import { Building2, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { clinic, areasServed } from "@/data/clinic";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ClinicImage } from "@/components/ui/ClinicImage";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/Reveal";
import { DoctorSection } from "@/components/sections/DoctorSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "About Dr. Patil's Dental Clinic and Implant Centre in Moshi, Pune — a woman-led family practice combining gentle care with modern implant treatment.",
  path: "/about",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Honest Advice",
    description:
      "Every treatment plan is explained clearly with real options — no pressure, no unnecessary procedures.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Hygiene",
    description:
      "Strict sterilization protocols and modern materials protect every patient, every visit.",
  },
  {
    icon: Users,
    title: "Family-Friendly",
    description:
      "From toddlers to grandparents — gentle care calibrated to every age and every anxiety level.",
  },
  {
    icon: Building2,
    title: "Genuinely Local",
    description: `Rooted in Moshi and serving families from ${areasServed.join(", ")}.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        title="About Our Clinic"
        lede="A caring neighborhood practice with the capability of a dedicated implant centre."
      />

      <Section labelledBy="story-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="slide-left">
            {/* TODO(client): swap for a real clinic interior photo */}
            <ClinicImage
              src="/images/modern-dental-operatory.jpg"
              alt="Bright, modern dental operatory — the standard of care our clinic works to"
              ratio="3/2"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal variant="slide-right">
            <h2
              id="story-heading"
              className="font-heading text-3xl font-bold tracking-tight text-neutral-900"
            >
              Care that starts with listening
            </h2>
            <div className="mt-5 space-y-4 leading-body text-neutral-600">
              <p>
                {clinic.name} was built around a simple idea: dental visits
                shouldn&rsquo;t be stressful. Led by {clinic.doctor.name},{" "}
                {clinic.doctor.degree}, with{" "}
                {clinic.doctor.experience.toLowerCase()} of experience, our
                clinic treats every patient the way we&rsquo;d want our own
                family treated.
              </p>
              <p>
                You&rsquo;ll find us on Alandi–Moshi Road, opposite Chaudhary
                Dhaba — a genuinely local clinic where your questions are
                welcomed, your options are explained honestly, and your comfort
                comes first.
              </p>
              <p>
                Alongside everyday family dentistry, we run a dedicated implant
                centre: consultation, placement, and crown fitting all happen
                here, without referrals across the city.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="mint" labelledBy="values-heading">
        <SectionHeading
          id="values-heading"
          eyebrow="Our Values"
          title="What we stand for"
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <StaggerItem key={v.title} className="h-full">
              <FeatureCard {...v} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <DoctorSection />
      <CtaSection />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
