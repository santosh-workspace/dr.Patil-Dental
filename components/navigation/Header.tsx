"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { routes } from "@/constants/routes";
import { site } from "@/constants/site";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * Header Variant 01 — Classic Medical (Generator: "General Clinic → Classic
 * Header"). Sticky, logo, primary nav with active states, mobile drawer,
 * and a persistent Book Appointment + Call CTA. WCAG 2.2 AA keyboard-operable.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-neutral-200/80 bg-white/80 shadow-md backdrop-blur-lg supports-[backdrop-filter]:bg-white/70"
          : "border-transparent bg-white"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {routes.map((r) => {
              const active = pathname === r.href;
              return (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-md px-3.5 py-2 text-body-sm font-semibold transition-colors",
                      active ? "text-primary-700" : "text-neutral-600 hover:text-primary-700"
                    )}
                  >
                    {r.label}
                    {active && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary-600" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button href={site.contact.phoneHref} variant="ghost" size="sm" aria-label={`Call ${site.contact.phone}`}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden xl:inline">{site.contact.phone}</span>
          </Button>
          <Button href="/contact" size="sm">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Book Appointment
          </Button>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-lg text-neutral-800 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? undefined : { height: 0, opacity: 0 }}
            animate={reduce ? undefined : { height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-neutral-200 bg-white lg:hidden"
          >
            <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
              {routes.map((r) => {
                const active = pathname === r.href;
                return (
                  <Link
                    key={r.href}
                    href={r.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-3 text-body font-semibold transition-colors",
                      active ? "bg-primary-50 text-primary-700" : "text-neutral-700 hover:bg-neutral-50"
                    )}
                  >
                    {r.label}
                  </Link>
                );
              })}
              <div className="mt-2 flex flex-col gap-2">
                <Button href={site.contact.phoneHref} variant="secondary" fullWidth>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.contact.phone}
                </Button>
                <Button href="/contact" fullWidth>
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Book Appointment
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
