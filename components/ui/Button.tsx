import Link from "next/link";
import type { ReactNode } from "react";
import { Loader2 } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ButtonSize = "md" | "lg";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white shadow-soft hover:bg-primary-700 hover:shadow-glow motion-safe:hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0",
  secondary:
    "border-2 border-primary-600 text-primary-700 hover:bg-primary-50 motion-safe:hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0",
  ghost: "text-primary-700 hover:bg-primary-50 active:scale-[0.98]",
  inverse:
    "bg-white text-primary-700 shadow-soft hover:bg-primary-50 hover:shadow-lift motion-safe:hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0",
};

const SIZES: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const BASE =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-button font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:pointer-events-none disabled:opacity-50";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  external?: boolean;
  ariaLabel?: string;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  ariaLabel,
  children,
}: ButtonLinkProps) {
  const cls = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  if (external || href.startsWith("tel:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonBaseProps {
  type?: "button" | "submit";
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  loading = false,
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}
