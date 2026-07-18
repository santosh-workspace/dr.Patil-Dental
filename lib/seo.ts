import type { Metadata } from "next";
import { clinic } from "@/data/clinic";
import { SITE_URL, absoluteUrl } from "./site";

interface PageSeo {
  title: string;
  description: string;
  path: string;
}

/** Builds consistent per-page metadata: title, description, canonical, OG, Twitter. */
export function buildMetadata({ title, description, path }: PageSeo): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: clinic.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: absoluteUrl("/og-image.svg"),
          width: 1200,
          height: 630,
          alt: clinic.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const metadataBase = new URL(SITE_URL);
