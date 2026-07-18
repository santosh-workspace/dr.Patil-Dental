import Image from "next/image";

type Ratio = "4/5" | "3/2" | "1/1" | "16/9";

const RATIOS: Record<Ratio, string> = {
  "4/5": "aspect-[4/5]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
};

/** Tiny teal-gradient placeholder shown while the real image streams in. */
const BLUR_DATA_URL =
  "data:image/svg+xml;base64," +
  Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="7"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c8f5ef"/><stop offset="1" stop-color="#effcfa"/></linearGradient></defs><rect width="10" height="7" fill="url(#g)"/></svg>'
  ).toString("base64");

interface ClinicImageProps {
  src: string;
  alt: string;
  ratio?: Ratio;
  /** Responsive sizes hint for next/image srcset selection. */
  sizes?: string;
  className?: string;
  priority?: boolean;
  /** Gallery treatment: image gently scales within its fixed frame on hover. */
  hoverZoom?: boolean;
}

/**
 * Premium photo frame: fixed aspect ratio (zero CLS), rounded card, brand
 * ring, blur-in load, and optional hover zoom — the one image treatment
 * used site-wide so photography always reads as one system.
 */
export function ClinicImage({
  src,
  alt,
  ratio = "3/2",
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  priority = false,
  hoverZoom = false,
}: ClinicImageProps) {
  return (
    <div
      className={`group/ci relative ${RATIOS[ratio]} w-full overflow-hidden rounded-card shadow-soft ring-1 ring-primary-100/60 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className={`object-cover transition-transform duration-700 ease-out motion-reduce:transition-none ${
          hoverZoom ? "group-hover/ci:scale-105" : ""
        }`}
      />
      {/* Soft brand glaze keeps mixed photography tonally consistent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-950/10 via-transparent to-transparent"
      />
    </div>
  );
}
