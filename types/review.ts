export interface Review {
  name: string;
  rating: number; // 1–5, use only real ratings
  text: string;
  date?: string;
  avatar?: string; // optional real photo URL; omit to use initials
}
