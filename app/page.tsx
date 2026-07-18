import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { homeFaqs } from "@/data/faqs";
import { JsonLd } from "@/components/shared/JsonLd";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBadgesSection } from "@/components/sections/TrustBadgesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedImplantsSection } from "@/components/sections/FeaturedImplantsSection";
import { DoctorSection } from "@/components/sections/DoctorSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { GallerySection } from "@/components/sections/GallerySection";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { MapSection } from "@/components/sections/MapSection";

export const metadata: Metadata = buildMetadata({
  title: "Dentist in Moshi | Dr. Patil's Dental Clinic",
  description:
    "Trusted dentist in Moshi, Pune — gentle family dental care and a dedicated implant centre led by Dr. Priyanka Patil, BDS. Book an appointment today.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadgesSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedImplantsSection />
      <DoctorSection />
      <TechnologySection />
      <GallerySection />
      <StatisticsSection />
      <TestimonialsSection />
      <FaqSection faqs={homeFaqs} />
      <CtaSection />
      <ContactSection />
      <MapSection />
      <JsonLd data={faqSchema(homeFaqs)} />
    </>
  );
}
