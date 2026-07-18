import type { Metadata } from "next";
import { site } from "@/constants/site";

/**
 * Central metadata builder — SEO System layers: title, meta description,
 * canonical, Open Graph, Twitter Card. Every page composes its metadata here
 * so SEO is consistent and never an afterthought.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/images/og-default.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle =
    path === "/"
      ? `${site.clinicName} | Dentist in Moshi, Pimpri-Chinchwad, Pune`
      : `${title} | ${site.clinicName}`;

  return {
    metadataBase: new URL(site.url),
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.clinicName,
      title: fullTitle,
      description,
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: site.clinicName }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
