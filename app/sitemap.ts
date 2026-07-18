import type { MetadataRoute } from "next";
import { site } from "@/constants/site";
import { routes } from "@/constants/routes";

/** XML sitemap (SEO System). */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [...routes.map((r) => r.href), "/privacy-policy"];
  return paths.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
