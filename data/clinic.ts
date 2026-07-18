/**
 * Single source of truth for all business facts (NAP, doctor, hours).
 * Optional fields render defined placeholders — never invent values here.
 */
export interface ClinicAddress {
  shop: string;
  society: string;
  road: string;
  landmark: string;
  area: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
}

export interface ClinicDoctor {
  name: string;
  degree: string;
  regNo: string;
  experience: string;
  /** Client shoot pending — hero auto-upgrades to Classic Split when set. */
  photo?: string;
  bio: string[];
}

export interface ClinicHours {
  days: string;
  time: string;
}

export interface Clinic {
  name: string;
  shortName: string;
  tagline: string;
  doctor: ClinicDoctor;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappGreeting: string;
  email: string;
  address: ClinicAddress;
  addressLine: string;
  /** TODO(client): verified Google Business Profile URL */
  gbpUrl?: string;
  /** TODO(client): Google Maps embed URL */
  mapsEmbedUrl?: string;
  mapsDirectionsUrl: string;
  /** TODO(client): confirmed business hours */
  hours?: ClinicHours[];
  /** TODO(client): social profile links */
  socials?: { label: string; url: string }[];
}

export const clinic: Clinic = {
  name: "Dr. Patil's Dental Clinic and Implant Centre",
  shortName: "Dr. Patil's Dental Clinic",
  tagline: "Gentle family dentistry and advanced implant care in Moshi.",
  doctor: {
    name: "Dr. Priyanka Patil",
    degree: "BDS (Pune)",
    regNo: "A-42088",
    experience: "10+ Years",
    bio: [
      "Dr. Priyanka Patil is a Pune-registered dental surgeon (BDS) with more than a decade of clinical experience caring for families across Moshi and the wider Pimpri-Chinchwad area.",
      "Her practice combines the warmth of a neighborhood family clinic with the capability of a dedicated implant centre — from a child's first check-up to full-mouth implant rehabilitation.",
      "She believes good dentistry starts with listening: every treatment plan is explained clearly, with honest options and no pressure.",
    ],
  },
  phone: "+918668252402",
  phoneDisplay: "+91 86682 52402",
  whatsapp: "918668252402",
  whatsappGreeting:
    "Hello Dr. Patil's Dental Clinic, I would like to book an appointment.",
  email: "logicminthq@gmail.com",
  address: {
    shop: "Shop No. 01",
    society: "Manas Society",
    road: "Alandi–Moshi Road",
    landmark: "Opp. Chaudhary Dhaba",
    area: "Moshi",
    city: "Pimpri-Chinchwad",
    district: "Pune",
    state: "Maharashtra",
    pincode: "411070",
  },
  addressLine:
    "Shop No. 01, Manas Society, Alandi–Moshi Road, Opp. Chaudhary Dhaba, Moshi, Pimpri-Chinchwad, Pune 411070",
  mapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Dr. Patil's Dental Clinic and Implant Centre, Manas Society, Alandi-Moshi Road, Moshi, Pimpri-Chinchwad, Pune 411070"
    ),
};

export const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
  clinic.whatsappGreeting
)}`;

export const telUrl = `tel:${clinic.phone}`;

/** Areas served — used for local SEO copy. */
export const areasServed = [
  "Moshi",
  "Chikhali",
  "Alandi",
  "Bhosari",
  "Dudulgaon",
];
