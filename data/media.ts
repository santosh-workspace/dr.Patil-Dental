import type { ArtName } from "@/components/illustrations/DentalArt";

/**
 * Stock imagery from Pexels (free license). These are generic, decorative
 * dental photos representing the type of care provided — they are NOT photos of
 * this specific clinic. Replace with real clinic photography when available
 * (drop files in /public/images and swap the `src`). Each entry has an
 * illustration `fallback` so the UI never breaks if a remote image fails.
 */
export interface MediaImage {
  src: string;
  alt: string;
  credit: string;
  fallback: ArtName;
  caption?: string;
}

const pexels = (id: number, w = 1000) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/** About section — clinic environment image. */
export const aboutImage: MediaImage = {
  src: pexels(30902075, 1200),
  alt: "Bright, clean and modern dental clinic interior",
  credit: "Duy Tân Đại học / Pexels",
  fallback: "chair",
};

/** Technology / Safety & Standards section. */
export const techPhotos: MediaImage[] = [
  {
    src: pexels(30902075),
    alt: "Clean, modern dental treatment room",
    credit: "Photo: Duy Tân Đại học / Pexels",
    fallback: "shield",
  },
  {
    src: pexels(6812453),
    alt: "Modern dental chair and equipment",
    credit: "Photo: Pavel Danilyuk / Pexels",
    fallback: "tools",
  },
  {
    src: pexels(6528858),
    alt: "Dentist gently examining a patient",
    credit: "Photo: cottonbro studio / Pexels",
    fallback: "smile",
  },
];

/** Gallery section — premium, varied set. */
export const galleryPhotos: MediaImage[] = [
  { src: pexels(305568), alt: "Bright, sleek modern dental office", credit: "Daniel Frank / Pexels", fallback: "chair", caption: "Bright & Welcoming" },
  { src: pexels(6528858), alt: "Dentist gently caring for a patient", credit: "cottonbro studio / Pexels", fallback: "care", caption: "Gentle Care" },
  { src: pexels(35438269), alt: "State-of-the-art dental chair and equipment", credit: "8pCarlos Morocho / Pexels", fallback: "tools", caption: "Modern Equipment" },
  { src: pexels(20130737), alt: "Patient with a healthy, confident smile", credit: "Boko Shots / Pexels", fallback: "smile", caption: "Healthy Smiles" },
  { src: pexels(5355715), alt: "Dentist treating a patient with care", credit: "Tima Miroshnichenko / Pexels", fallback: "care", caption: "Expert Treatment" },
  { src: pexels(30902075), alt: "Clean, contemporary dental clinic room", credit: "Duy Tân Đại học / Pexels", fallback: "chair", caption: "Calm Environment" },
  { src: pexels(12745979), alt: "Dentist using professional tools on a patient", credit: "Esma Karagoz / Pexels", fallback: "tools", caption: "Precision & Comfort" },
  { src: pexels(7422519), alt: "Dental study models for treatment planning", credit: "Emeric Kalil / Pexels", fallback: "shield", caption: "Careful Planning" },
];

/** Our Services — a relevant photo per service (keyed by service slug).
 *  Each has an illustration fallback so a failed image never breaks the card. */
export const serviceImages: Record<string, MediaImage> = {
  "dental-checkup": { src: pexels(5355715), alt: "Dentist giving a patient a check-up", credit: "Tima Miroshnichenko / Pexels", fallback: "care" },
  "teeth-cleaning": { src: pexels(6528858), alt: "Close-up of a dental cleaning and examination", credit: "cottonbro studio / Pexels", fallback: "cleaning" },
  "root-canal-treatment": { src: pexels(12745979), alt: "Dentist treating a patient with dental tools", credit: "Esma Karagoz / Pexels", fallback: "shield" },
  "tooth-extraction": { src: pexels(19976604), alt: "Dentists performing a dental procedure", credit: "Pexels", fallback: "tools" },
  "dental-fillings": { src: pexels(6812453), alt: "Dental chair and treatment equipment", credit: "Pavel Danilyuk / Pexels", fallback: "shield" },
  "teeth-whitening": { src: pexels(20130737), alt: "Person with a bright, white smile", credit: "Boko Shots / Pexels", fallback: "smile" },
  "braces-and-aligners": { src: pexels(7422519), alt: "Dental models showing teeth alignment", credit: "Emeric Kalil / Pexels", fallback: "chair" },
  "crowns-and-bridges": { src: pexels(30902075), alt: "Modern dental clinic treatment room", credit: "Duy Tân Đại học / Pexels", fallback: "chair" },
};
