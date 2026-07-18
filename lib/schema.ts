import { site } from "@/constants/site";
import { services } from "@/data/services";
import { faqs } from "@/data/faq";
import { reviews } from "@/data/reviews";

/**
 * Structured data — Schema System. Emitted as validated JSON-LD.
 * NOTE: Review and AggregateRating schema are deliberately NOT generated,
 * because no genuine review data was supplied (Content Rules forbid
 * fabricating reviews/ratings). Add them only with real, verifiable reviews.
 */

const openingHours = site.hours
  .filter((h) => h.morning !== "Closed")
  .map((h) => ({
    day: h.day.slice(0, 2),
    morning: h.morning,
    evening: h.evening,
  }));

// Dentist is a subtype of LocalBusiness/MedicalBusiness — covers both.
export function dentistSchema() {
  // Only emit rating/review schema from GENUINE reviews (never fabricated).
  const ratingSchema =
    reviews.length > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: (
              reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
            ).toFixed(1),
            reviewCount: reviews.length,
          },
          review: reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.name },
            reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
            reviewBody: r.text,
            ...(r.date ? { datePublished: r.date } : {}),
          })),
        }
      : {};

  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${site.url}/#dentist`,
    name: site.clinicName,
    description: `${site.clinicName} — dental care by ${site.doctor.name}, ${site.doctor.qualification}, ${site.doctor.experience} experience, in Moshi, Pimpri-Chinchwad, Pune.`,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    image: site.doctor.photo,
    priceRange: "₹₹",
    ...ratingSchema,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    hasMap: site.maps.googleBusinessProfile,
    areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: openingHours.map(
          (h) =>
            ({ Mo: "Monday", Tu: "Tuesday", We: "Wednesday", Th: "Thursday", Fr: "Friday", Sa: "Saturday" } as Record<string, string>)[h.day]
        ),
        opens: "10:30",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "18:30",
        closes: "21:30",
      },
    ],
    employee: {
      "@type": "Person",
      name: site.doctor.name,
      jobTitle: "Dentist",
      description: `${site.doctor.qualification} (Reg. ${site.doctor.registration})`,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.clinicName,
    url: site.url,
    logo: `${site.url}/logos/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.contact.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "mr"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.clinicName,
    inLanguage: "en-IN",
  };
}

export function faqSchema() {
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

export function servicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.short,
        provider: { "@type": "Dentist", name: site.clinicName },
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}
