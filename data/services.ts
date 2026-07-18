import type { LucideIcon } from "lucide-react";
import {
  Anchor,
  Baby,
  Braces,
  CircleDot,
  Crown,
  Droplets,
  HeartPulse,
  Layers,
  Microscope,
  Moon,
  ScanLine,
  Shield,
  Siren,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  Wrench,
} from "lucide-react";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  icon: LucideIcon;
  shortDescription: string;
  longDescription: string[];
  benefits: string[];
  procedure: { title: string; description: string }[];
  faqs: ServiceFaq[];
  featured: boolean;
}

export const services: Service[] = [
  {
    slug: "dental-implants",
    name: "Dental Implants",
    icon: Anchor,
    shortDescription:
      "Permanent, natural-looking replacements for missing teeth — the specialty our implant centre is built around.",
    longDescription: [
      "A dental implant is a small titanium post that replaces the root of a missing tooth. Once it integrates with your jawbone, a custom crown is fixed on top — giving you a tooth that looks, feels, and works like your own.",
      "As a dedicated implant centre in Moshi, our clinic plans every implant carefully: your bone health is assessed first, the procedure is explained step by step, and treatment is paced to your comfort.",
      "Implants help preserve jawbone, protect neighboring teeth, and restore confident chewing and smiling — often for decades with good care.",
    ],
    benefits: [
      "Fixed, permanent replacement — no removable dentures",
      "Looks and functions like a natural tooth",
      "Preserves jawbone and facial structure",
      "Neighboring healthy teeth are left untouched",
      "Long-lasting with routine care",
    ],
    procedure: [
      {
        title: "Consultation & planning",
        description:
          "Clinical examination and X-ray assessment of your bone and gum health, followed by a clear treatment plan and cost estimate.",
      },
      {
        title: "Implant placement",
        description:
          "The titanium implant is placed under local anesthesia in a precise, comfortable procedure.",
      },
      {
        title: "Healing period",
        description:
          "Over a few months the implant bonds with your bone (osseointegration). You'll have simple care instructions and check-ins.",
      },
      {
        title: "Crown placement",
        description:
          "A custom-made crown matched to your natural teeth is fixed onto the implant — completing your new tooth.",
      },
    ],
    faqs: [
      {
        question: "Is getting a dental implant painful?",
        answer:
          "The procedure is done under local anesthesia, so you should feel no pain during placement. Mild soreness afterwards typically settles within a few days with simple medication.",
      },
      {
        question: "How long do dental implants last?",
        answer:
          "With good oral hygiene and regular check-ups, implants can last for decades. The crown on top may need replacement after many years of wear.",
      },
      {
        question: "Am I a candidate for implants?",
        answer:
          "Most healthy adults with adequate jawbone are candidates. A consultation with an X-ray assessment at our Moshi clinic will confirm what's right for you.",
      },
    ],
    featured: true,
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    icon: Syringe,
    shortDescription:
      "Gentle, single-visit or staged root canal therapy that relieves pain and saves your natural tooth.",
    longDescription: [
      "A root canal treatment removes infected or inflamed tissue from inside a tooth, cleans and seals the canals, and protects the tooth — usually with a crown — so you can keep it for years to come.",
      "Modern root canal treatment is a comfortable, routine procedure. At our clinic it is performed under effective local anesthesia with careful, gentle technique — most patients compare it to getting a filling.",
    ],
    benefits: [
      "Relieves toothache at its source",
      "Saves your natural tooth instead of extracting it",
      "Comfortable, anesthesia-supported procedure",
      "Restores normal chewing after treatment",
    ],
    procedure: [
      {
        title: "Diagnosis",
        description:
          "Examination and X-ray to confirm the infection and plan treatment.",
      },
      {
        title: "Cleaning the canals",
        description:
          "Under local anesthesia, infected tissue is removed and the canals are cleaned and shaped.",
      },
      {
        title: "Sealing",
        description:
          "The canals are filled and sealed to prevent re-infection.",
      },
      {
        title: "Restoration",
        description:
          "A filling or crown restores the tooth's strength and appearance.",
      },
    ],
    faqs: [
      {
        question: "Does a root canal hurt?",
        answer:
          "No — the treatment is done under local anesthesia and actually relieves the pain caused by the infection. Mild tenderness for a day or two afterwards is normal.",
      },
      {
        question: "How many visits will I need?",
        answer:
          "Many root canals are completed in one or two visits, depending on the tooth and the extent of infection.",
      },
    ],
    featured: true,
  },
  {
    slug: "crowns-and-bridges",
    name: "Crowns & Bridges",
    icon: Crown,
    shortDescription:
      "Strong, natural-looking caps and fixed bridges that restore damaged or missing teeth.",
    longDescription: [
      "A crown is a custom cap that covers a weakened, cracked, or root-canal-treated tooth, restoring its strength and appearance. A bridge replaces one or more missing teeth by anchoring to the teeth beside the gap.",
      "We use quality materials shade-matched to your natural teeth, so your restoration blends in seamlessly.",
    ],
    benefits: [
      "Protects and strengthens weakened teeth",
      "Fills gaps left by missing teeth",
      "Shade-matched for a natural look",
      "Restores comfortable chewing and speech",
    ],
    procedure: [
      {
        title: "Preparation",
        description:
          "The tooth is shaped and a precise impression is taken.",
      },
      {
        title: "Temporary protection",
        description:
          "A temporary crown protects the tooth while your restoration is crafted.",
      },
      {
        title: "Fitting",
        description:
          "Your custom crown or bridge is checked for fit, bite, and shade, then fixed permanently.",
      },
    ],
    faqs: [
      {
        question: "How long do crowns last?",
        answer:
          "Typically 10–15 years or longer with good oral hygiene and regular check-ups.",
      },
      {
        question: "Crown or implant — which is better for a missing tooth?",
        answer:
          "It depends on the neighboring teeth and your bone health. We'll explain both options honestly during your consultation so you can choose confidently.",
      },
    ],
    featured: true,
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    icon: Sparkles,
    shortDescription:
      "Safe, professional whitening that brightens your smile by several shades in a single visit.",
    longDescription: [
      "Professional teeth whitening lifts years of stains from tea, coffee, and daily life — safely and evenly, under a dentist's care.",
      "Unlike over-the-counter kits, in-clinic whitening protects your gums and enamel while delivering noticeably brighter results, often in one appointment.",
    ],
    benefits: [
      "Visibly brighter smile, often in one sitting",
      "Safe for enamel when done professionally",
      "Even, natural-looking results",
      "Boosts confidence for weddings, interviews, and photos",
    ],
    procedure: [
      {
        title: "Assessment",
        description:
          "We check your teeth and gums and note your current shade.",
      },
      {
        title: "Protection",
        description: "Gums are shielded before the whitening gel is applied.",
      },
      {
        title: "Whitening",
        description:
          "Professional-grade gel is applied and activated in controlled cycles.",
      },
      {
        title: "Aftercare",
        description:
          "Simple guidance to keep your new shade lasting longer.",
      },
    ],
    faqs: [
      {
        question: "Is whitening safe for my teeth?",
        answer:
          "Yes — professional whitening under dental supervision is safe for enamel. Temporary sensitivity can occur and settles within a day or two.",
      },
      {
        question: "How long do results last?",
        answer:
          "Usually 1–3 years depending on your diet and habits. Avoiding heavy staining foods and regular cleanings help results last longer.",
      },
    ],
    featured: true,
  },
  {
    slug: "braces-clear-aligners",
    name: "Braces & Clear Aligners",
    icon: Braces,
    shortDescription:
      "Straighten crooked or crowded teeth with conventional braces or nearly invisible clear aligners.",
    longDescription: [
      "Well-aligned teeth are easier to clean, more comfortable to bite with, and great for confidence. We offer both traditional braces and clear aligner therapy for teens and adults.",
      "Clear aligners are removable, nearly invisible trays that gradually move your teeth — a popular choice for working adults. Conventional braces remain the most versatile option for complex corrections.",
    ],
    benefits: [
      "Straighter teeth that are easier to keep clean",
      "Improved bite and jaw comfort",
      "Clear aligner option — nearly invisible",
      "Suitable for teenagers and adults",
    ],
    procedure: [
      {
        title: "Orthodontic assessment",
        description:
          "Examination and records to understand your alignment and bite.",
      },
      {
        title: "Treatment plan",
        description:
          "We discuss braces vs. aligners, duration, and costs — you choose what fits your life.",
      },
      {
        title: "Active treatment",
        description:
          "Regular adjustment or aligner-change visits track your progress.",
      },
      {
        title: "Retention",
        description:
          "Retainers keep your new smile in place after treatment.",
      },
    ],
    faqs: [
      {
        question: "How long does orthodontic treatment take?",
        answer:
          "Most treatments take 12–24 months depending on the correction needed. We'll give you a realistic estimate at your assessment.",
      },
      {
        question: "Am I too old for braces?",
        answer:
          "No — healthy teeth can be moved at any age. Many of our orthodontic patients are working adults who choose clear aligners.",
      },
    ],
    featured: true,
  },
  {
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    icon: Baby,
    shortDescription:
      "Gentle, patient dental care for children — building healthy habits and happy first visits.",
    longDescription: [
      "Children's dentistry is about more than treating teeth — it's about building trust so your child grows up unafraid of the dentist.",
      "From first check-ups and fluoride applications to fillings and habit counselling, we treat young patients with extra patience, gentle language, and a calm pace. Parents are welcome chairside.",
    ],
    benefits: [
      "Positive, fear-free first dental experiences",
      "Early detection of cavities and alignment issues",
      "Fluoride and sealants to prevent decay",
      "Guidance on brushing, diet, and thumb-sucking habits",
    ],
    procedure: [
      {
        title: "Friendly introduction",
        description:
          "We let your child explore the chair and tools at their own pace.",
      },
      {
        title: "Gentle examination",
        description:
          "Teeth and gums are checked with simple, reassuring explanations.",
      },
      {
        title: "Preventive care",
        description:
          "Cleaning, fluoride, or sealants as needed — always gently.",
      },
      {
        title: "Parent guidance",
        description:
          "Practical advice on home care, diet, and check-up frequency.",
      },
    ],
    faqs: [
      {
        question: "When should my child first visit a dentist?",
        answer:
          "By their first birthday, or within six months of the first tooth appearing. Early visits keep problems small and build comfort.",
      },
      {
        question: "My child is scared of the dentist. Can you help?",
        answer:
          "Yes — gentle, unhurried care for anxious children is something we take pride in. The first visit is often just about getting comfortable.",
      },
    ],
    featured: true,
  },
  {
    slug: "dental-checkup-cleaning",
    name: "Dental Check-up & Cleaning",
    icon: Stethoscope,
    shortDescription:
      "Routine examinations and professional cleaning — the foundation of lifelong oral health.",
    longDescription: [
      "A check-up every six months lets us catch cavities, gum issues, and wear early — when treatment is simplest and least expensive.",
      "Professional cleaning (scaling and polishing) removes hardened plaque that brushing can't, keeping gums healthy and breath fresh.",
    ],
    benefits: [
      "Early detection of cavities and gum disease",
      "Removal of tartar and surface stains",
      "Fresher breath and healthier gums",
      "Personalized home-care advice",
    ],
    procedure: [
      {
        title: "Examination",
        description:
          "Full check of teeth, gums, and existing dental work.",
      },
      {
        title: "Scaling",
        description:
          "Ultrasonic cleaning removes plaque and tartar above and below the gumline.",
      },
      {
        title: "Polishing",
        description:
          "Smooth, stain-free finish that also makes plaque slower to return.",
      },
    ],
    faqs: [
      {
        question: "Does scaling damage or loosen teeth?",
        answer:
          "No — this is a common myth. Scaling removes harmful deposits; any 'loose' feeling afterwards is the absence of tartar that was wedged between teeth.",
      },
    ],
    featured: false,
  },
  {
    slug: "tooth-extraction",
    name: "Tooth Extraction",
    icon: Wrench,
    shortDescription:
      "Comfortable, careful removal of teeth that can't be saved — with clear aftercare and replacement guidance.",
    longDescription: [
      "When a tooth is too damaged or decayed to save, a careful extraction relieves pain and protects the surrounding teeth and gums.",
      "Extractions at our clinic are done under effective anesthesia with a gentle technique, and we always discuss replacement options — like implants or bridges — so a gap never becomes a bigger problem.",
    ],
    benefits: [
      "Relief from pain and infection",
      "Gentle, anesthesia-supported procedure",
      "Clear written aftercare instructions",
      "Honest guidance on replacement options",
    ],
    procedure: [
      {
        title: "Assessment",
        description:
          "X-ray and examination confirm extraction is the right choice.",
      },
      {
        title: "Anesthesia",
        description: "The area is fully numbed for a comfortable procedure.",
      },
      {
        title: "Extraction",
        description: "The tooth is removed gently with minimal trauma.",
      },
      {
        title: "Aftercare",
        description:
          "Healing instructions and a plan for replacing the tooth if needed.",
      },
    ],
    faqs: [
      {
        question: "How long does healing take after an extraction?",
        answer:
          "The gum typically closes within 1–2 weeks. We'll give you simple aftercare steps to keep healing smooth.",
      },
    ],
    featured: false,
  },
  {
    slug: "wisdom-tooth-removal",
    name: "Wisdom Tooth Removal",
    icon: Moon,
    shortDescription:
      "Safe surgical removal of painful, impacted, or problematic wisdom teeth.",
    longDescription: [
      "Wisdom teeth often erupt at awkward angles or get stuck (impacted), causing pain, swelling, food trapping, and damage to neighboring teeth.",
      "Removal is a routine surgical procedure performed under local anesthesia. We assess each case with X-rays and explain exactly what to expect before, during, and after.",
    ],
    benefits: [
      "Ends recurring pain and swelling",
      "Protects neighboring molars from damage and decay",
      "Prevents cysts and infection around impacted teeth",
      "Performed under effective local anesthesia",
    ],
    procedure: [
      {
        title: "X-ray assessment",
        description:
          "We evaluate the tooth's position relative to nerves and neighboring teeth.",
      },
      {
        title: "Procedure",
        description:
          "The tooth is removed surgically under local anesthesia.",
      },
      {
        title: "Recovery",
        description:
          "Detailed aftercare and a follow-up review keep healing on track.",
      },
    ],
    faqs: [
      {
        question: "Do all wisdom teeth need removal?",
        answer:
          "No — only those causing pain, infection, decay, or crowding. Healthy, well-positioned wisdom teeth can stay.",
      },
    ],
    featured: false,
  },
  {
    slug: "dentures",
    name: "Dentures",
    icon: Layers,
    shortDescription:
      "Comfortable full and partial dentures that restore your smile and your ability to eat well.",
    longDescription: [
      "Well-made dentures restore chewing, speech, and facial support when several or all teeth are missing.",
      "We craft full and partial dentures with careful measurements and adjustments for a comfortable, secure fit — and can discuss implant-supported options for extra stability.",
    ],
    benefits: [
      "Restores eating, speaking, and smiling",
      "Supports facial structure",
      "Full, partial, and implant-supported options",
      "Careful fitting and free adjustment period",
    ],
    procedure: [
      {
        title: "Impressions",
        description:
          "Precise molds of your gums and any remaining teeth.",
      },
      {
        title: "Trial fitting",
        description:
          "A try-in checks fit, bite, and appearance before final fabrication.",
      },
      {
        title: "Delivery & adjustment",
        description:
          "Your denture is delivered with follow-up visits for fine-tuning.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to get used to new dentures?",
        answer:
          "Most people adapt within 2–4 weeks. Minor pressure points are normal at first and are easily adjusted at a follow-up visit.",
      },
    ],
    featured: false,
  },
  {
    slug: "smile-designing",
    name: "Smile Designing",
    icon: Smile,
    shortDescription:
      "A planned combination of veneers, whitening, and reshaping to give you the smile you've always wanted.",
    longDescription: [
      "Smile designing is the art of improving the shape, color, alignment, and proportions of your visible teeth using treatments like veneers, bonding, whitening, and contouring.",
      "Every smile design starts with understanding what you want to change. We plan the result before treatment begins, so there are no surprises.",
    ],
    benefits: [
      "Personalized plan for your facial features",
      "Combines whitening, veneers, and reshaping as needed",
      "Preview and plan before treatment begins",
      "Natural-looking, confidence-building results",
    ],
    procedure: [
      {
        title: "Smile consultation",
        description:
          "We discuss what you'd like to change and examine your teeth and gums.",
      },
      {
        title: "Design & plan",
        description:
          "A treatment sequence is planned around your goals and budget.",
      },
      {
        title: "Treatment",
        description:
          "Whitening, veneers, or reshaping are completed in planned stages.",
      },
    ],
    faqs: [
      {
        question: "Will a designed smile look fake?",
        answer:
          "No — good smile design works with your face, skin tone, and natural tooth shape. The goal is 'you, on your best day', not artificial uniformity.",
      },
    ],
    featured: false,
  },
  {
    slug: "veneers",
    name: "Dental Veneers",
    icon: ScanLine,
    shortDescription:
      "Thin, custom shells that transform chipped, stained, or uneven front teeth.",
    longDescription: [
      "Veneers are wafer-thin porcelain or composite facings bonded to the front of your teeth to correct chips, deep stains, small gaps, and uneven shapes.",
      "They're one of the most effective ways to transform a smile while preserving most of your natural tooth.",
    ],
    benefits: [
      "Corrects chips, stains, gaps, and uneven edges",
      "Minimal tooth preparation",
      "Stain-resistant porcelain options",
      "Natural translucency that mimics real enamel",
    ],
    procedure: [
      {
        title: "Consultation & shade planning",
        description:
          "We plan shape and shade to suit your face and preferences.",
      },
      {
        title: "Preparation & impression",
        description:
          "A very thin layer of enamel is prepared and impressions taken.",
      },
      {
        title: "Bonding",
        description:
          "Your custom veneers are bonded and polished for a seamless finish.",
      },
    ],
    faqs: [
      {
        question: "How long do veneers last?",
        answer:
          "Porcelain veneers typically last 10–15 years with good care; composite veneers around 5–7 years.",
      },
    ],
    featured: false,
  },
  {
    slug: "gum-treatment",
    name: "Gum Disease Treatment",
    icon: HeartPulse,
    shortDescription:
      "Treatment for bleeding gums, bad breath, and gum recession — protecting the foundation of your teeth.",
    longDescription: [
      "Bleeding gums are not normal — they're the earliest sign of gum disease, which silently damages the bone supporting your teeth if untreated.",
      "From deep cleaning (scaling and root planing) to advanced gum therapy, we treat gum disease at every stage and help you keep it from returning.",
    ],
    benefits: [
      "Stops bleeding gums and bad breath",
      "Prevents bone loss and loose teeth",
      "Deep cleaning below the gumline",
      "Long-term maintenance plan",
    ],
    procedure: [
      {
        title: "Gum assessment",
        description:
          "Gum pockets are measured to stage the disease accurately.",
      },
      {
        title: "Deep cleaning",
        description:
          "Scaling and root planing remove deposits below the gumline.",
      },
      {
        title: "Review & maintenance",
        description:
          "Healing is reviewed and a recall schedule keeps gums healthy.",
      },
    ],
    faqs: [
      {
        question: "Why do my gums bleed when I brush?",
        answer:
          "Bleeding is usually caused by plaque-induced inflammation (gingivitis). It's reversible with professional cleaning and improved home care — but shouldn't be ignored.",
      },
    ],
    featured: false,
  },
  {
    slug: "dental-fillings",
    name: "Tooth-Colored Fillings",
    icon: Droplets,
    shortDescription:
      "Mercury-free composite fillings that repair cavities invisibly and preserve healthy tooth structure.",
    longDescription: [
      "Modern composite fillings bond directly to your tooth and are matched to its exact shade — repairing cavities so seamlessly that no one can tell.",
      "Treating cavities early keeps them small; left alone, decay deepens toward the nerve and may eventually need a root canal.",
    ],
    benefits: [
      "Invisible, shade-matched repair",
      "Mercury-free, safe materials",
      "Preserves more natural tooth than metal fillings",
      "Usually completed in a single visit",
    ],
    procedure: [
      {
        title: "Decay removal",
        description:
          "The cavity is cleaned gently, with anesthesia if needed.",
      },
      {
        title: "Layered filling",
        description:
          "Composite is placed in layers and cured for strength.",
      },
      {
        title: "Shaping & polish",
        description:
          "The filling is shaped to your bite and polished smooth.",
      },
    ],
    faqs: [
      {
        question: "How do I know if I have a cavity?",
        answer:
          "Early cavities are often painless — sensitivity to sweets or cold is a common first sign. Regular check-ups catch them before they hurt.",
      },
    ],
    featured: false,
  },
  {
    slug: "kids-preventive-care",
    name: "Fluoride & Sealants for Kids",
    icon: Shield,
    shortDescription:
      "Preventive shields for young teeth — fluoride applications and pit-and-fissure sealants.",
    longDescription: [
      "Children's molars have deep grooves where toothbrush bristles can't reach — the most common place cavities start.",
      "Sealants flow into these grooves and harden into a protective shield, while professional fluoride strengthens enamel against acid attack. Together they dramatically reduce childhood cavities.",
    ],
    benefits: [
      "Painless, drill-free prevention",
      "Significantly lowers cavity risk in molars",
      "Quick application in a single short visit",
      "Strengthens developing enamel",
    ],
    procedure: [
      {
        title: "Cleaning",
        description: "Teeth are cleaned and dried.",
      },
      {
        title: "Application",
        description:
          "Sealant or fluoride is applied — no drilling, no injections.",
      },
      {
        title: "Setting",
        description:
          "The protective layer sets in seconds and gets to work immediately.",
      },
    ],
    faqs: [
      {
        question: "At what age should sealants be applied?",
        answer:
          "Usually soon after the permanent molars erupt — around ages 6 and 12 — while the grooves are still cavity-free.",
      },
    ],
    featured: false,
  },
  {
    slug: "full-mouth-rehabilitation",
    name: "Full Mouth Rehabilitation",
    icon: Microscope,
    shortDescription:
      "A staged, comprehensive rebuild of badly worn, damaged, or missing teeth across the whole mouth.",
    longDescription: [
      "When years of decay, wear, or missing teeth affect the whole mouth, patchwork fixes stop working. Full mouth rehabilitation is a planned, staged sequence — combining implants, crowns, root canals, and gum therapy — that restores complete function and appearance.",
      "As an implant centre, we plan these cases end-to-end: one clear roadmap, honest costs, and treatment paced to your comfort and schedule.",
    ],
    benefits: [
      "One coordinated plan instead of piecemeal fixes",
      "Restores comfortable chewing across the whole mouth",
      "Combines implants, crowns, and gum care as needed",
      "Staged to suit your schedule and budget",
    ],
    procedure: [
      {
        title: "Comprehensive assessment",
        description:
          "Full examination, X-rays, and a written whole-mouth plan.",
      },
      {
        title: "Foundation work",
        description:
          "Gum treatment, extractions, and root canals stabilize the mouth first.",
      },
      {
        title: "Reconstruction",
        description:
          "Implants, crowns, and bridges rebuild function in planned stages.",
      },
      {
        title: "Maintenance",
        description:
          "A recall schedule protects your investment long-term.",
      },
    ],
    faqs: [
      {
        question: "How long does full mouth rehabilitation take?",
        answer:
          "Depending on the work needed, typically several months — implants require healing time. You'll have a clear stage-by-stage timeline from the start.",
      },
    ],
    featured: false,
  },
  {
    slug: "emergency-dental-care",
    name: "Emergency Dental Care",
    icon: Siren,
    shortDescription:
      "Prompt care for severe toothache, swelling, broken teeth, and dental injuries. Call us first.",
    longDescription: [
      "Severe toothache, facial swelling, a knocked-out or broken tooth, or bleeding that won't stop — dental emergencies need prompt attention.",
      "Call our Moshi clinic and we'll guide you on immediate first steps and get you seen as quickly as possible.",
    ],
    benefits: [
      "Prompt relief for severe pain and swelling",
      "Guidance over the phone on immediate first aid",
      "Treatment for knocked-out and fractured teeth",
      "Local clinic — no long travel while in pain",
    ],
    procedure: [
      {
        title: "Call us",
        description:
          "Phone the clinic — we'll advise immediate steps and prioritize your visit.",
      },
      {
        title: "Relief first",
        description:
          "Pain and infection are controlled before anything else.",
      },
      {
        title: "Definitive treatment",
        description:
          "Once you're comfortable, we plan the permanent fix.",
      },
    ],
    faqs: [
      {
        question: "My tooth got knocked out — what should I do?",
        answer:
          "Hold it by the crown (not the root), rinse gently without scrubbing, and keep it in milk or inside your cheek. Then call us immediately — re-implantation works best within an hour.",
      },
    ],
    featured: false,
  },
  {
    slug: "digital-xray-diagnosis",
    name: "Digital X-ray & Diagnosis",
    icon: CircleDot,
    shortDescription:
      "Low-radiation digital imaging for accurate diagnosis and honest, evidence-based treatment planning.",
    longDescription: [
      "Accurate treatment starts with accurate diagnosis. Digital X-rays reveal decay between teeth, infection at root tips, bone levels, and impacted teeth — with a fraction of the radiation of older film systems.",
      "You see what we see: images are reviewed with you chairside, so every recommendation is backed by evidence you can look at yourself.",
    ],
    benefits: [
      "Significantly lower radiation than film X-rays",
      "Instant images reviewed with you chairside",
      "Catches hidden decay and infection early",
      "Evidence-based, transparent treatment planning",
    ],
    procedure: [
      {
        title: "Imaging",
        description:
          "Quick, comfortable digital X-rays taken in the chair.",
      },
      {
        title: "Review together",
        description:
          "We walk through the images with you and explain the findings.",
      },
      {
        title: "Plan",
        description:
          "A clear, prioritized treatment plan based on what the images show.",
      },
    ],
    faqs: [
      {
        question: "Are dental X-rays safe?",
        answer:
          "Digital dental X-rays use a very low radiation dose — comparable to a short flight. We take them only when they change your diagnosis or treatment.",
      },
    ],
    featured: false,
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
