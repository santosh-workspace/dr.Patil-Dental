import type { Service } from "@/types/service";

/**
 * Standard general-dentistry service set. Descriptions are patient-friendly,
 * professional, and non-exaggerated (Content Rules). These are general dental
 * services — no clinic-specific claims are fabricated.
 */
export const services: Service[] = [
  {
    slug: "dental-checkup",
    icon: "Stethoscope",
    title: "Dental Check-up & Consultation",
    short: "Thorough oral examinations to catch problems early and keep your smile healthy.",
    description:
      "A complete oral health assessment where Dr. Ghule examines your teeth, gums, and bite, discusses any concerns, and recommends a clear, personalised care plan. Regular check-ups help detect issues before they become painful or costly.",
    benefits: [
      "Early detection of cavities and gum problems",
      "Personalised advice for home care",
      "A clear treatment plan with no pressure",
    ],
  },
  {
    slug: "teeth-cleaning",
    icon: "Sparkles",
    title: "Teeth Cleaning & Scaling",
    short: "Professional cleaning to remove plaque, tartar, and stains for fresher, healthier gums.",
    description:
      "Professional scaling and polishing gently removes hardened plaque and surface stains that daily brushing cannot reach, helping prevent gum disease and bad breath while leaving your teeth feeling clean and smooth.",
    benefits: [
      "Healthier gums and fresher breath",
      "Helps prevent gum disease",
      "Brighter, smoother teeth",
    ],
  },
  {
    slug: "root-canal-treatment",
    icon: "Activity",
    title: "Root Canal Treatment",
    short: "Comfortable, tooth-saving treatment for deep decay or infection.",
    description:
      "When decay or infection reaches the inner nerve of a tooth, root canal treatment removes the affected tissue and seals the tooth, relieving pain and saving your natural tooth. The procedure is carried out with care to keep you comfortable throughout.",
    benefits: [
      "Saves your natural tooth",
      "Relieves toothache and infection",
      "Restores normal chewing",
    ],
  },
  {
    slug: "tooth-extraction",
    icon: "Wrench",
    title: "Tooth Extraction",
    short: "Safe, gentle removal of severely damaged or problematic teeth.",
    description:
      "When a tooth cannot be saved, a careful extraction relieves pain and protects surrounding teeth. Dr. Ghule ensures the procedure is as gentle and comfortable as possible, with clear aftercare guidance for smooth healing.",
    benefits: [
      "Relief from pain and infection",
      "Protects neighbouring teeth",
      "Clear aftercare support",
    ],
  },
  {
    slug: "dental-fillings",
    icon: "Shield",
    title: "Dental Fillings",
    short: "Tooth-coloured fillings that restore decayed teeth naturally.",
    description:
      "Modern tooth-coloured fillings repair cavities while blending naturally with your teeth, restoring strength and appearance so you can eat and smile with confidence.",
    benefits: [
      "Natural, tooth-coloured finish",
      "Restores tooth strength",
      "Prevents further decay",
    ],
  },
  {
    slug: "teeth-whitening",
    icon: "Smile",
    title: "Teeth Whitening",
    short: "Professional whitening for a brighter, more confident smile.",
    description:
      "Safe, professionally supervised whitening lightens stains and discolouration for a noticeably brighter smile, with guidance tailored to your teeth for even, natural-looking results.",
    benefits: [
      "Visibly brighter smile",
      "Safe, supervised treatment",
      "Boosts confidence",
    ],
  },
  {
    slug: "braces-and-aligners",
    icon: "AlignHorizontalDistributeCenter",
    title: "Braces & Aligners",
    short: "Orthodontic solutions to straighten teeth and correct bite issues.",
    description:
      "Whether for children or adults, orthodontic treatment gradually moves teeth into better alignment, improving both the look of your smile and the health of your bite. Dr. Ghule will explain the options suited to your needs.",
    benefits: [
      "Straighter, well-aligned teeth",
      "Improved bite and function",
      "Options for all ages",
    ],
  },
  {
    slug: "crowns-and-bridges",
    icon: "Crown",
    title: "Crowns & Bridges",
    short: "Durable restorations to rebuild and replace damaged or missing teeth.",
    description:
      "Crowns cap and protect weakened teeth, while bridges replace missing teeth to restore your smile and chewing ability. Both are crafted to look natural and last, restoring form and function together.",
    benefits: [
      "Restores damaged or missing teeth",
      "Natural appearance",
      "Long-lasting strength",
    ],
  },
];
