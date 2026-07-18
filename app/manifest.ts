import type { MetadataRoute } from "next";
import { site } from "@/constants/site";

/** PWA / web app manifest (Deployment checklist). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.clinicName,
    short_name: "Dr. Ghule Dental",
    description: `Gentle, trusted dental care by ${site.doctor.name} in Moshi, Pimpri-Chinchwad, Pune.`,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      { src: "/logos/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
