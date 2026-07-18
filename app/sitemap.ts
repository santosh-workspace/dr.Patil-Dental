import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPaths = [
    "/",
    "/about",
    "/services",
    "/doctor",
    "/gallery",
    "/contact",
    "/privacy-policy",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: service.featured ? 0.8 : 0.6,
    })),
  ];
}
