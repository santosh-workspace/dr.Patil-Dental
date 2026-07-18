import Image from "next/image";
import { Award, GraduationCap, BadgeCheck, User } from "lucide-react";
import { clinic } from "@/data/clinic";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/animations/Reveal";

const credentials = [
  { icon: GraduationCap, label: clinic.doctor.degree },
  { icon: BadgeCheck, label: `Reg. No. ${clinic.doctor.regNo}` },
  { icon: Award, label: `${clinic.doctor.experience} of experience` },
];

/** Split DoctorCard — the most conversion-critical trust section. */
export function DoctorSection() {
  return (
    <Section labelledBy="doctor-heading">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <Reveal variant="slide-left" className="lg:col-span-5">
          <div className="relative">
            {/* Soft offset frame adds depth behind the portrait */}
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 hidden h-full w-full rounded-card border-2 border-primary-100 md:block"
            />
            {clinic.doctor.photo ? (
              <Image
                src={clinic.doctor.photo}
                alt={`${clinic.doctor.name}, ${clinic.doctor.degree}`}
                width={520}
                height={650}
                className="relative w-full rounded-card object-cover shadow-soft"
              />
            ) : (
              /* TODO(client): replace with doctor portrait */
              <PlaceholderImage
                label={`Portrait of ${clinic.doctor.name} (photo coming soon)`}
                ratio="4/5"
                icon={User}
                className="relative"
              />
            )}
            {/* Floating credential chip — verified data only */}
            <div className="absolute -bottom-5 right-6 rounded-2xl bg-white px-5 py-3.5 shadow-lift ring-1 ring-neutral-100">
              <p className="font-heading text-sm font-bold text-neutral-900">
                {clinic.doctor.degree}
              </p>
              <p className="mt-0.5 text-xs font-medium text-neutral-600">
                Reg. No. {clinic.doctor.regNo}
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal variant="slide-right" className="lg:col-span-7">
          <Eyebrow>Meet Your Dentist</Eyebrow>
          <h2
            id="doctor-heading"
            className="font-heading text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl"
          >
            {clinic.doctor.name}
          </h2>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {credentials.map((c) => (
              <li key={c.label} className="flex items-center gap-2 text-sm font-medium text-neutral-700">
                <c.icon aria-hidden="true" className="h-4 w-4 text-primary-600" />
                {c.label}
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-4 leading-body text-neutral-600">
            {clinic.doctor.bio.slice(0, 2).map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/doctor" variant="secondary">
              Meet the Doctor
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
