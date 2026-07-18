export interface Statistic {
  value: number;
  suffix: string;
  label: string;
}

/**
 * Only verified figures ship. TODO(client): confirm patient counts,
 * implant counts, and review rating before adding more entries —
 * never invent statistics.
 */
export const statistics: Statistic[] = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 18, suffix: "", label: "Dental Services" },
  { value: 5, suffix: "+", label: "Areas Served Around Moshi" },
  { value: 1, suffix: "", label: "Dedicated Implant Centre" },
];
