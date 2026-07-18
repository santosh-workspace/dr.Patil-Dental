import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/constants/site";
import { PageHeader } from "@/components/shared/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { DoctorSection } from "@/components/sections/DoctorSection";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { Reveal } from "@/components/animations/Reveal";

export const metadata = buildMetadata({
  title: "About Us",
  description: `Learn about ${site.clinicName} and ${site.doctor.name} (${site.doctor.qualification}) — over a decade of gentle, trusted dental care in Moshi, Pimpri-Chinchwad, Pune.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHeader
        title="About Our Clinic"
        subtitle={`${site.tagline}. A friendly neighbourhood dental practice built on honest advice and gentle care.`}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <Reveal>
            <SectionHeading align="left" eyebrow="Our Story" title="Dental care with a personal touch" />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex flex-col gap-4 text-body text-neutral-600">
              <p>
                {site.clinicName} was founded on a simple belief — that going to the dentist
                should feel calm, comfortable and honest. Led by {site.doctor.name}, the clinic
                provides a full range of dental treatments for patients of all ages in Moshi and
                the wider Pimpri-Chinchwad area.
              </p>
              <p>
                With {site.doctor.experience} of clinical experience, Dr. Ghule takes the time to
                understand each patient&rsquo;s concerns, explain every option clearly, and recommend
                only the treatment that&rsquo;s genuinely needed. From routine check-ups to restorative
                care, you&rsquo;ll always know what&rsquo;s happening and why.
              </p>
              <p>
                Our priority is your comfort and long-term oral health — delivered in a clean, safe
                and welcoming environment.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <TrustBadges />
      <DoctorSection />
      <WhyChooseUs />
      <AppointmentCTA />
    </>
  );
}
