import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

/**
 * Button — supports the documented variants (Primary, Secondary, Ghost,
 * Gradient), sizes, loading, disabled, icon, and full width (Component Rules
 * "Buttons"). Renders as <a>/<Link> when href is provided, else <button>.
 */
type Variant = "primary" | "secondary" | "ghost" | "gradient";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-body font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "btn-sheen bg-primary-600 text-white shadow-md hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  secondary:
    "bg-primary-50 text-primary-700 hover:bg-primary-100 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  ghost: "text-primary-700 hover:bg-primary-50",
  gradient:
    "btn-sheen bg-gradient-to-r from-primary-600 to-secondary-500 text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  sm: "text-body-sm px-4 py-2",
  md: "text-body px-5 py-2.5",
  lg: "text-body px-7 py-3.5",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorProps = CommonProps & {
  href: string;
  external?: boolean;
  "aria-label"?: string;
};

export function Button(props: ButtonProps | AnchorProps) {
  const {
    variant = "primary",
    size = "md",
    fullWidth,
    loading,
    className,
    children,
  } = props;

  const classes = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);

  if ("href" in props && props.href) {
    const { external, ...rest } = props as AnchorProps;
    if (external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={rest["aria-label"]}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} aria-label={rest["aria-label"]}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, fullWidth: _f, loading: _l, children: _c, ...buttonProps } =
    props as ButtonProps;
  return (
    <button className={classes} disabled={loading || buttonProps.disabled} {...buttonProps}>
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}
