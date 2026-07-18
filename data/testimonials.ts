export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

/**
 * GBP-verified reviews only — never invent testimonials.
 * TODO(client): populate from verified Google Business Profile reviews
 * (with the GBP URL in data/clinic.ts). Until then the testimonials
 * section renders a "read our reviews on Google" prompt instead.
 */
export const testimonials: Testimonial[] = [];
