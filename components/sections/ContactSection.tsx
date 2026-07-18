import { site } from "@/constants/site";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GoogleMap } from "@/components/shared/GoogleMap";
import { BusinessHours } from "@/components/shared/BusinessHours";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/animations/Reveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

/** Contact Section — info + hours + map + appointment form (Contact Page rules). */
export function ContactSection({ withForm = true }: { withForm?: boolean }) {
  return (
    <Section id="contact">
      <Reveal className="mb-12">
        <SectionHeading
          eyebrow="Contact & Appointments"
          title="Visit us or book online"
          subtitle="We're easy to reach in Moshi, Pimpri-Chinchwad. Reach out any time during clinic hours."
        />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-6">
          <Card className="flex flex-col gap-4">
            <ContactRow icon={<Phone className="h-5 w-5" />} label="Phone / WhatsApp" value={site.contact.phone} href={site.contact.phoneHref} />
            <ContactRow icon={<Mail className="h-5 w-5" />} label="Email" value={site.contact.email} href={site.contact.emailHref} />
            <ContactRow icon={<MapPin className="h-5 w-5" />} label="Address" value={site.address.full} />
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-50 text-primary-600">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <p className="text-body-sm font-semibold text-neutral-800">Clinic Timings</p>
                <div className="mt-2">
                  <BusinessHours />
                </div>
              </div>
            </div>
          </Card>
          <GoogleMap />
        </Reveal>

        {withForm && (
          <Reveal delay={0.1}>
            <Card variant="premium">
              <h3 className="mb-5 text-h4">Request an appointment</h3>
              <AppointmentForm />
            </Card>
          </Reveal>
        )}
      </div>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-50 text-primary-600">{icon}</span>
      <div>
        <p className="text-body-sm font-semibold text-neutral-800">{label}</p>
        <p className="text-body-sm text-neutral-600">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="rounded-lg transition-colors hover:bg-neutral-50">{content}</a>
  ) : (
    content
  );
}
