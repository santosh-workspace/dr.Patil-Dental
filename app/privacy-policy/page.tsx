import type { Metadata } from "next";
import { clinic } from "@/data/clinic";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for the ${clinic.name} website — how we handle the information you share with us.`,
  path: "/privacy-policy",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader crumbs={crumbs} title="Privacy Policy" />

      <Section>
        <div className="mx-auto max-w-[720px] space-y-8 leading-body text-neutral-700">
          <section>
            <h2 className="font-heading text-xl font-bold text-neutral-900">
              What we collect
            </h2>
            <p className="mt-3">
              When you use the appointment form on this website, we collect the
              details you choose to share: your name, mobile number, the
              service you&rsquo;re interested in, and any message you add. We
              collect nothing else through the form.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-neutral-900">
              How we use it
            </h2>
            <p className="mt-3">
              Your details are used for one purpose only: to contact you about
              your appointment request. We do not sell, rent, or share your
              information with third parties for marketing.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-neutral-900">
              Calls and WhatsApp
            </h2>
            <p className="mt-3">
              If you contact us by phone or WhatsApp, your communication is
              handled directly between you and the clinic. WhatsApp messages
              are subject to WhatsApp&rsquo;s own terms and privacy policy.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-neutral-900">
              Patient records
            </h2>
            <p className="mt-3">
              Clinical records created during your treatment are maintained
              confidentially at the clinic in line with applicable regulations
              and professional standards.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-neutral-900">
              Questions
            </h2>
            <p className="mt-3">
              For any privacy-related questions, or to ask us to delete your
              enquiry details, contact us at{" "}
              <a
                href={`mailto:${clinic.email}`}
                className="font-medium text-primary-700 hover:underline"
              >
                {clinic.email}
              </a>{" "}
              or call {clinic.phoneDisplay}.
            </p>
          </section>
        </div>
      </Section>
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
