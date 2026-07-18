import { site } from "@/constants/site";

/** Google Maps embed URL built from the clinic address (no API key required). */
export function mapsEmbedUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(site.maps.embedQuery)}&output=embed`;
}
