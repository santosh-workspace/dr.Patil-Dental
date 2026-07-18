import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  id?: string;
  dark?: boolean;
}

/** Consistent eyebrow + heading + lede pattern used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment} mb-12 md:mb-16`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={`font-heading text-3xl font-bold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-body md:text-lg ${
            dark ? "text-neutral-200" : "text-neutral-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
