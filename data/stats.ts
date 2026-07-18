/** Trust indicators — verified facts only. No fabricated patient/treatment counts.
 *  `to` marks values that animate (count up); others render as-is. */
export const stats: {
  to?: number;
  prefix?: string;
  suffix?: string;
  value?: string;
  label: string;
}[] = [
  { to: 10, suffix: "+", label: "Years of Experience" },
  { value: "B.D.S.", label: "Qualified Dentist" },
  { to: 6, label: "Days a Week" },
  { value: "A-21562", label: "Registration No." },
];
