import type { MetadataRoute } from "next";
import { clinic } from "@/data/clinic";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: clinic.name,
    short_name: "Dr. Patil's Dental",
    description: clinic.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0e8181",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
