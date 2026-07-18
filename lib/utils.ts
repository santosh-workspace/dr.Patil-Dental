import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely (used by every component for variant styling). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
