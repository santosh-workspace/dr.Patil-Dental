import type { Review } from "@/types/review";

/**
 * REAL reviews for structured data (schema). Keep EMPTY until you have genuine,
 * verifiable reviews — fabricated review schema is deceptive and prohibited by
 * consumer-protection law (India CCPA fake-review guidelines, FTC, etc.).
 * When populated, AggregateRating + Review schema switch on automatically.
 */
export const reviews: Review[] = [];

/**
 * SAMPLE reviews — DISPLAY ONLY, for design preview. These are placeholder
 * testimonials so the premium section can be evaluated. They are NOT emitted as
 * schema and the UI labels them as samples. Replace with real Google reviews
 * (move them into `reviews` above) before launch.
 */
export const sampleReviews: Review[] = [
  {
    name: "Aarti Deshmukh",
    rating: 5,
    date: "2 weeks ago",
    text: "Dr. Ghule is wonderful — she explained my treatment step by step and made sure I was comfortable the whole time. The clinic is spotless and the staff are so friendly. Easily the best dental experience I've had in Moshi.",
  },
  { name: "Rahul Kulkarni", rating: 5, date: "1 month ago", text: "Painless root canal and very honest advice. Highly recommend." },
  {
    name: "Sneha Patil",
    rating: 5,
    date: "1 month ago",
    text: "Took my daughter here and the doctor was so patient and gentle with her. No fear at all now! Clean, calm and professional.",
  },
  {
    name: "Imran Shaikh",
    rating: 5,
    date: "2 months ago",
    text: "Booked easily on WhatsApp and got an appointment the same evening. The scaling and cleaning were thorough and my teeth feel great. Fair pricing too.",
  },
  { name: "Priya Nair", rating: 5, date: "3 months ago", text: "Very caring dentist and a calm, hygienic clinic. Thank you!" },
  {
    name: "Vikram Joshi",
    rating: 5,
    date: "3 months ago",
    text: "Got my filling done here — quick, comfortable and looks completely natural. Dr. Ghule genuinely takes time to explain everything.",
  },
];

/** Preview summary shown in the rating banner. */
export const reviewSummary = { average: 5.0, count: sampleReviews.length };
