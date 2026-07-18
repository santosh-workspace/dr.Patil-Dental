import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { clinic, telUrl } from "@/data/clinic";
import { footerQuickLinks, footerServiceLinks } from "@/data/navigation";
import { Container } from "@/components/layout/Container";
import { Logo } from "./Logo";

/** Medical Footer variant: credentials, quick links, services, full NAP. */
export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Brand hairline separates the dark footer from page content */}
      <div
        aria-hidden="true"
        className="h-1 w-full bg-gradient-to-r from-primary-600 via-aqua-500 to-mint-400"
      />
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-5 text-sm leading-body">{clinic.tagline}</p>
          <p className="mt-4 text-sm leading-body">
            {clinic.doctor.name}, {clinic.doctor.degree}
            <br />
            Reg. No. {clinic.doctor.regNo}
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {footerQuickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-primary-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
            Services
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {footerServiceLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-primary-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm leading-body">
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <span>{clinic.addressLine}</span>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <a href={telUrl} className="transition-colors hover:text-primary-300">
                {clinic.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <a
                href={`mailto:${clinic.email}`}
                className="transition-colors hover:text-primary-300"
              >
                {clinic.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <span>
                {clinic.hours
                  ? clinic.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")
                  : "Call us for current clinic hours"}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-neutral-800">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-neutral-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-primary-300"
          >
            Privacy Policy
          </Link>
        </Container>
      </div>
    </footer>
  );
}
