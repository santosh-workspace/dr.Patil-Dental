export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

/**
 * Royalty-free professional dental photography (Unsplash license —
 * commercial use, no attribution required), selected to match the
 * Medical Teal brand. Presented as the standard of care we work to.
 * TODO(client): swap for 6–12 real clinic photos when the shoot is done —
 * same filenames/ratios drop in with zero code changes.
 */
export const galleryItems: GalleryItem[] = [
  {
    src: "/images/treatment-room-teal-chair.jpg",
    alt: "Modern dental treatment room with a teal dental chair and overhead examination light",
    caption: "Modern treatment room",
  },
  {
    src: "/images/sterile-dental-instruments.jpg",
    alt: "Sterile dental examination instruments laid out on a clean tray",
    caption: "Sterilized instruments",
  },
  {
    src: "/images/digital-xray-review.jpg",
    alt: "Dentist reviewing a digital panoramic X-ray with a patient chairside",
    caption: "Digital X-ray diagnosis",
  },
  {
    src: "/images/modern-dental-operatory.jpg",
    alt: "Bright dental operatory with a modern chair, overhead light, and monitor",
    caption: "Clean, modern operatory",
  },
  {
    src: "/images/clear-aligner-fitting.jpg",
    alt: "Dentist fitting a clear aligner with a digital scan displayed on a monitor",
    caption: "Clear aligner care",
  },
  {
    src: "/images/dental-team-at-work.jpg",
    alt: "Dental team in protective wear treating a patient under an operating light",
    caption: "Careful four-handed dentistry",
  },
];
