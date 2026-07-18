import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { site } from "@/constants/site";
import { routes } from "@/constants/routes";
import { services } from "@/data/services";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/shared/Logo";
import { BusinessHours } from "@/components/shared/BusinessHours";

/**
 * Footer Variant 01 — Classic. Contact info, business hours, quick links,
 * services, Google Business Profile link, copyright, privacy (QA Footer).
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-900 text-neutral-300">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand + contact */}
        <div className="flex flex-col gap-4">
          <div className="[&_span]:text-white">
            <Logo inverted />
          </div>
          <p className="text-body-sm text-neutral-400">{site.tagline}</p>
          <ul className="flex flex-col gap-2.5 text-body-sm">
            <li>
              <a href={site.contact.phoneHref} className="inline-flex items-center gap-2.5 hover:text-white">
                <Phone className="h-4 w-4 text-primary-400" aria-hidden="true" />
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 hover:text-white">
                <MessageCircle className="h-4 w-4 text-primary-400" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href={site.contact.emailHref} className="inline-flex items-center gap-2.5 hover:text-white">
                <Mail className="h-4 w-4 text-primary-400" aria-hidden="true" />
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <span className="text-neutral-400">{site.address.full}</span>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer quick links" className="flex flex-col gap-4">
          <h2 className="text-body font-bold text-white">Quick Links</h2>
          <ul className="flex flex-col gap-2.5 text-body-sm">
            {routes.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="text-neutral-400 hover:text-white">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Footer services" className="flex flex-col gap-4">
          <h2 className="text-body font-bold text-white">Services</h2>
          <ul className="flex flex-col gap-2.5 text-body-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="text-neutral-400 hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hours */}
        <div className="flex flex-col gap-4">
          <h2 className="text-body font-bold text-white">Clinic Timings</h2>
          <div className="[&_*]:text-neutral-400 [&_.font-semibold]:text-neutral-200">
            <BusinessHours compact />
          </div>
          <a
            href={site.maps.googleBusinessProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm font-semibold text-primary-400 hover:text-primary-300"
          >
            View on Google →
          </a>
        </div>
      </Container>

      <div className="border-t border-neutral-800">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-caption text-neutral-500 md:flex-row">
          <p>
            © {year} {site.clinicName}. All rights reserved.
          </p>
          <Link href="/privacy-policy" className="hover:text-neutral-300">
            Privacy Policy
          </Link>
        </Container>
      </div>
    </footer>
  );
}
