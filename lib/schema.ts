import { clinic, areasServed } from "@/data/clinic";
import type { Service, ServiceFaq } from "@/data/services";
import { SITE_URL, absoluteUrl } from "./site";

/**
 * JSON-LD builders per the SEO plan. Review/AggregateRating schema is
 * intentionally absent until verified GBP data is supplied (YMYL rule:
 * never fabricate ratings).
 */

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${clinic.address.shop}, ${clinic.address.society}, ${clinic.address.road}, ${clinic.address.landmark}`,
  addressLocality: `${clinic.address.area}, ${clinic.address.city}`,
  addressRegion: clinic.address.state,
  postalCode: clinic.address.pincode,
  addressCountry: "IN",
};

export function dentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    "@id": `${SITE_URL}#clinic`,
    name: clinic.name,
    description: clinic.tagline,
    url: SITE_URL,
    telephone: clinic.phone,
    email: clinic.email,
    address: postalAddress,
    areaServed: areasServed.map((name) => ({ "@type": "Place", name })),
    ...(clinic.gbpUrl ? { sameAs: [clinic.gbpUrl] } : {}),
    ...(clinic.hours
      ? {
          openingHours: clinic.hours.map((h) => `${h.days} ${h.time}`),
        }
      : {}),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: clinic.phone,
      contactType: "appointments",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}#doctor`,
    name: clinic.doctor.name,
    jobTitle: "Dental Surgeon",
    honorificSuffix: clinic.doctor.degree,
    identifier: {
      "@type": "PropertyValue",
      name: "Dental Council Registration Number",
      value: clinic.doctor.regNo,
    },
    worksFor: { "@id": `${SITE_URL}#clinic` },
    url: absoluteUrl("/doctor"),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: clinic.name,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}#clinic` },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.shortDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { "@id": `${SITE_URL}#clinic` },
  };
}

export function faqSchema(faqs: ServiceFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
