import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { clinic, telUrl, whatsappUrl } from "@/data/clinic";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { Reveal } from "@/components/animations/Reveal";

/** Split contact: NAP + hours + channels on the left, appointment form on the right. */
export function ContactSection() {
  return (
    <Section labelledBy="contact-heading" id="contact">
      <SectionHeading
        id="contact-heading"
        eyebrow="Get in Touch"
        title="Book your appointment"
        description="Call, WhatsApp, or send a request — we'll confirm a time that suits you."
      />
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal variant="slide-left">
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                <MapPin aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading font-semibold text-neutral-900">Visit us</p>
                <p className="mt-1 text-sm leading-body text-neutral-600">
                  {clinic.addressLine}
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                <Phone aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading font-semibold text-neutral-900">Call us</p>
                <a
                  href={telUrl}
                  className="mt-1 inline-block text-sm font-medium text-primary-700 hover:underline"
                >
                  {clinic.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                <MessageCircle aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading font-semibold text-neutral-900">WhatsApp</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm font-medium text-primary-700 hover:underline"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                <Mail aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading font-semibold text-neutral-900">Email</p>
                <a
                  href={`mailto:${clinic.email}`}
                  className="mt-1 inline-block text-sm font-medium text-primary-700 hover:underline"
                >
                  {clinic.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                <Clock aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading font-semibold text-neutral-900">Clinic hours</p>
                <p className="mt-1 text-sm leading-body text-neutral-600">
                  {clinic.hours
                    ? clinic.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")
                    : "Please call us for current clinic hours."}
                </p>
              </div>
            </li>
          </ul>
        </Reveal>
        <Reveal variant="slide-right">
          <div className="rounded-card border border-neutral-100 bg-white p-6 shadow-soft md:p-8">
            <AppointmentForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
