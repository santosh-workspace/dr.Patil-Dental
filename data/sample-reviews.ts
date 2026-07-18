import type { Review } from "@/types/review";

/**
 * ⚠️ SAMPLE / PLACEHOLDER REVIEWS — FOR DESIGN PREVIEW ONLY.
 *
 * These are NOT real patient reviews. They exist so the Testimonials section
 * looks complete in the template. Avatars are generated illustrations
 * (DiceBear), not photos of real people.
 *
 * Before the site goes live you MUST replace these with genuine reviews from
 * the clinic's Google profile — move real ones into `data/reviews.ts`. When
 * `data/reviews.ts` has entries, the site uses those instead and enables
 * Review/AggregateRating schema. Placeholder reviews here are NEVER emitted as
 * structured data (that would be misleading to search engines and patients,
 * and is prohibited by consumer-protection law).
 */
const avatar = (seed: string) =>
  `https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(seed)}&backgroundColor=dbeafe,e0f2fe,ecfeff`;

export const sampleReviews: (Review & { avatar: string })[] = [
  {
    name: "Priya Deshmukh",
    rating: 5,
    date: "2 weeks ago",
    avatar: avatar("Priya Deshmukh"),
    text: "Dr. Ghule is wonderful. She explained everything patiently and my root canal was completely painless. The clinic is spotless and the staff are very kind.",
  },
  {
    name: "Rahul Kulkarni",
    rating: 5,
    date: "1 month ago",
    avatar: avatar("Rahul Kulkarni"),
    text: "Best dentist in Moshi. Honest advice and gentle treatment.",
  },
  {
    name: "Sneha Patil",
    rating: 5,
    date: "1 month ago",
    avatar: avatar("Sneha Patil"),
    text: "I was very anxious about visiting a dentist after a bad past experience, but Dr. Deepali made me feel completely at ease. She took the time to understand my concerns and never rushed. My cleaning and filling were smooth and comfortable. Highly recommend to anyone nervous about dental work.",
  },
  {
    name: "Amit Joshi",
    rating: 5,
    date: "2 months ago",
    avatar: avatar("Amit Joshi"),
    text: "Brought my whole family here. Great with kids and very reasonable. The evening timings are really convenient for us.",
  },
  {
    name: "Meera Nair",
    rating: 5,
    date: "3 months ago",
    avatar: avatar("Meera Nair"),
    text: "Clean, modern and friendly. My teeth whitening results were fantastic.",
  },
  {
    name: "Vikram Shah",
    rating: 5,
    date: "3 months ago",
    avatar: avatar("Vikram Shah"),
    text: "Professional and caring throughout. I had a crown fitted and the whole process was explained clearly with no surprises on cost. The attention to detail really stood out — you can tell she genuinely cares about her patients.",
  },
];
