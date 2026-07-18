"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { clinic, telUrl } from "@/data/clinic";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";

/** Sticky classic header: elevates on scroll, drawer nav below desktop. */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on route change and lock body scroll while open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    drawerRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-soft" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary-600 after:transition-transform after:duration-300 hover:text-primary-700 hover:after:scale-x-100 motion-reduce:after:transition-none ${
                    isActive(item.href)
                      ? "text-primary-700 after:scale-x-100"
                      : "text-neutral-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telUrl}
            aria-label={`Call ${clinic.shortName} on ${clinic.phoneDisplay}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-primary-700 transition-colors hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            <Phone aria-hidden="true" className="h-5 w-5" />
          </a>
          <ButtonLink href="/contact" className="hidden sm:inline-flex">
            Book Appointment
          </ButtonLink>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-neutral-800 transition-colors hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 lg:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        hidden={!open}
        className="border-t border-neutral-100 bg-white lg:hidden"
      >
        <nav aria-label="Mobile navigation">
          <ul className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-primary-50 text-primary-700"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <ButtonLink href="/contact" className="w-full">
                Book Appointment
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
