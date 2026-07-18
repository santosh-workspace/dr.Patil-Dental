import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { DoctorSection } from "@/components/sections/DoctorSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/shared/JsonLd";
import { faqSchema, servicesSchema } from "@/lib/schema";

/**
 * Homepage — Standard Homepage Structure (Section Library):
 * Hero → Trust Badges → About → Services → Why Choose Us → Doctor →
 * Technology → Gallery → Reviews → FAQ → Appointment CTA → Contact.
 * (Header / Footer / Floating actions live in the root layout.)
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={[servicesSchema(), faqSchema()]} />
      <HeroSection />
      <TrustBadges />
      <AboutSection />
      <ServicesSection limit={8} />
      <WhyChooseUs />
      <DoctorSection />
      <TechnologySection />
      <GallerySection />
      <ReviewsSection />
      <FAQSection />
      <AppointmentCTA />
      <ContactSection />
    </>
  );
}
