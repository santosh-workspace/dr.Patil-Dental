/**
 * Central clinic configuration — the single source of truth for all
 * business data. Per Component Rules, business info is never hardcoded
 * inside components; it flows from here. Only client-verified facts are
 * present — nothing fabricated (no invented reviews, ratings, or socials).
 */

export const site = {
  clinicName: "Dr. Ghule's Dental Clinic",
  tagline: "Keep smiling & be happy",
  url: "https://drghuledentalclinic.com", // update to the live domain at deploy

  doctor: {
    name: "Dr. Deepali Ghule",
    qualification: "B.D.S. — Nair Dental College, Mumbai",
    registration: "A-21562",
    experience: "10+ years",
    photo:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl0Jx16jUCqFTDxnltmvqwPjoGecpVe2Xqwpxix_XH-eXimC8fj7UJxlNEuIwss3Aaq50XAtHMqVleGmp0wUhc5M7XnK60-SviDKDJjfr1qDqlm0mx5_HVtiFCJc8L18eb-Wwvyef_qj8I=s680-w680-h510-rw",
  },

  contact: {
    phone: "094204 88741",
    phoneHref: "tel:+919420488741",
    whatsapp: "https://wa.me/919420488741",
    email: "logicminthq@gmail.com",
    emailHref: "mailto:logicminthq@gmail.com",
  },

  address: {
    line1: "Shop No. 3, Near Manmohan Sweets, Sudarshan Complex",
    line2: "Dehu – Alandi Rd, Moshi, Pimpri-Chinchwad",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411070",
    country: "IN",
    full:
      "Shop No. 3, Near Manmohan Sweets, Sudarshan Complex, Dehu – Alandi Rd, Moshi, Pimpri-Chinchwad, Pune, Maharashtra 411070",
  },

  // Same verified Google share link supplied for Maps + Google Business Profile.
  maps: {
    shareUrl: "https://share.google/1ZRbu8YHQ9AV2gIk7",
    googleBusinessProfile: "https://share.google/1ZRbu8YHQ9AV2gIk7",
    embedQuery:
      "Dr. Ghule's Dental Clinic, Sudarshan Complex, Dehu-Alandi Rd, Moshi, Pimpri-Chinchwad, Pune, Maharashtra 411070",
  },

  // OPD timings — Mon–Sat, split morning/evening. Sunday closed (not stated as open).
  hours: [
    { day: "Monday", morning: "10:30 AM – 12:00 PM", evening: "6:30 PM – 9:30 PM" },
    { day: "Tuesday", morning: "10:30 AM – 12:00 PM", evening: "6:30 PM – 9:30 PM" },
    { day: "Wednesday", morning: "10:30 AM – 12:00 PM", evening: "6:30 PM – 9:30 PM" },
    { day: "Thursday", morning: "10:30 AM – 12:00 PM", evening: "6:30 PM – 9:30 PM" },
    { day: "Friday", morning: "10:30 AM – 12:00 PM", evening: "6:30 PM – 9:30 PM" },
    { day: "Saturday", morning: "10:30 AM – 12:00 PM", evening: "6:30 PM – 9:30 PM" },
    { day: "Sunday", morning: "Closed", evening: "Closed" },
  ],

  serviceAreas: ["Moshi", "Pimpri-Chinchwad", "Dehu", "Alandi", "Chikhali", "Pune"],

  // No social links supplied — array stays empty; icons render only when present.
  social: [] as { label: string; href: string }[],
} as const;

export type Site = typeof site;
