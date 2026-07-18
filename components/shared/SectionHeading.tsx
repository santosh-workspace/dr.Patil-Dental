import { cn } from "@/lib/utils";

/** SectionHeading — consistent eyebrow + title + subtitle (visual hierarchy). */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className={Tag === "h1" ? "text-h1" : "text-h2 max-w-2xl"}>{title}</Tag>
      {subtitle && (
        <p className={cn("text-body-lg text-neutral-600", align === "center" && "max-w-2xl")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
