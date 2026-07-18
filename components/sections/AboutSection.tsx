import { site } from "@/constants/site";
import { aboutImage } from "@/data/media";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Parallax } from "@/components/animations/Parallax";
import { ImageFade } from "@/components/shared/ImageFade";
import { DentalArt } from "@/components/illustrations/DentalArt";
import { Button } from "@/components/ui/Button";
import { HeartHandshake, ShieldCheck, Smile } from "lucide-react";

/** About Clinic Section — clinic-environment image + honest positioning. */
export function AboutSection() {
  const points = [
    { icon: HeartHandshake, text: "Gentle, patient-first treatment for all ages" },
    { icon: ShieldCheck, text: "Clean, hygienic and safe clinic environment" },
    { icon: Smile, text: "Clear explanations, honest advice, no pressure" },
  ];
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <Reveal className="order-last lg:order-first">
          <div className="group relative">
            <div className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-gradient-to-br from-primary-100 to-secondary-100" aria-hidden="true" />
            <Parallax offset={24}>
              <ImageFade
                src={aboutImage.src}
                alt={aboutImage.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="aspect-[4/3] w-full rounded-2xl border border-neutral-200 shadow-lg"
                imgClassName="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                fallback={<DentalArt name={aboutImage.fallback} className="h-full w-full" />}
              />
            </Parallax>
            {/* Floating credential chip */}
            <div className="absolute -bottom-5 left-5 rounded-xl border border-neutral-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
              <p className="text-body-sm font-bold text-neutral-900">{site.doctor.experience} of care</p>
              <p className="text-caption text-primary-600">in Moshi, Pune</p>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="About the Clinic"
              title="Comfortable, trusted dental care in Moshi"
              subtitle={`${site.clinicName} is a friendly neighbourhood dental practice led by ${site.doctor.name}. Our focus is simple — help every patient keep a healthy, confident smile through honest, gentle care.`}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="flex flex-col gap-4">
              {points.map((p, i) => (
                <li key={i} className="group flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-50 text-primary-600 transition-transform duration-200 group-hover:scale-110">
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-body text-neutral-700">{p.text}</p>
                </li>
              ))}
              <Button href="/about" variant="ghost" className="self-start">Read more about us →</Button>
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
