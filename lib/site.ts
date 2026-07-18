/**
 * TODO(deploy): set NEXT_PUBLIC_SITE_URL to the production domain.
 * Used for canonical URLs, Open Graph, sitemap, robots, and JSON-LD @id.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
