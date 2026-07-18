"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * ImageFade — next/image with a premium load treatment: a brand-tinted
 * skeleton shows until the image decodes, then the image fades in
 * (Loading Animations: image loading → fade in). If the remote image fails,
 * an optional `fallback` (e.g. a brand illustration) is shown instead, so the
 * UI never breaks. Reduced-motion users get an instant swap (global media
 * query zeroes the transition). `imgClassName` lets a parent `group` drive
 * hover zoom on the <img>.
 */
export function ImageFade({
  className,
  imgClassName,
  alt,
  fallback,
  ...props
}: ImageProps & { imgClassName?: string; fallback?: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  if (errored && fallback) {
    return <span className={cn("relative block overflow-hidden", className)}>{fallback}</span>;
  }

  return (
    <span className={cn("relative block overflow-hidden", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 transition-opacity duration-500",
          loaded ? "opacity-0" : "opacity-100"
        )}
      />
      <Image
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        className={cn(
          "transition-[opacity,transform] duration-700 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          imgClassName
        )}
        {...props}
      />
    </span>
  );
}
