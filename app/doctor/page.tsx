import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/constants/site";
import { PageHeader } from "@/components/shared/PageHeader";
import { Section } from "@/components/layout/Section";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { Reveal } from "@/components/animations/Reveal";

export const metadata = buildMetadata({
  title: `${site.doctor.name} — Dentist`,
  description: `Meet ${site.doctor.name}, ${site.doctor.qualification} (Reg. ${site.doctor.registration}), with ${site.doctor.experience} of experience at ${site.clinicName}, Moshi.`,
  path: "/doctor",
});

export default function DoctorPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Doctor", path: "/doctor" },
        ])}
      />
      <PageHeader
        title="Meet Your Dentist"
        subtitle="Experienced, gentle and genuinely caring — dental treatment you can trust."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Doctor", path: "/doctor" },
        ]}
      />
      <Section>
        <Reveal>
          <DoctorCard headingLevel="h2" />
        </Reveal>
      </Section>
      <WhyChooseUs />
      <AppointmentCTA />
    </>
  );
}
