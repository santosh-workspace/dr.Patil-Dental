import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/constants/site";
import { PageHeader } from "@/components/shared/PageHeader";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/shared/JsonLd";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${site.clinicName} — how we handle the information you share with us.`,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <PageHeader
        title="Privacy Policy"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />
      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-body text-neutral-600">
          <p>
            This privacy policy explains how {site.clinicName} handles the information you
            choose to share with us through this website.
          </p>
          <div className="flex flex-col gap-2">
            <h2 className="text-h4 text-neutral-900">Information we collect</h2>
            <p>
              When you submit the appointment or contact form, we receive the details you enter
              — such as your name, phone number, email and message — so that we can respond and
              arrange your visit. We do not collect this information for any other purpose.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-h4 text-neutral-900">How we use it</h2>
            <p>
              Your details are used only to contact you about your enquiry or appointment. We do
              not sell or share your personal information with third parties for marketing.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-h4 text-neutral-900">Contact us</h2>
            <p>
              If you have any questions about this policy or your information, contact us at{" "}
              <a href={site.contact.emailHref} className="font-semibold text-primary-700">
                {site.contact.email}
              </a>{" "}
              or call {site.contact.phone}.
            </p>
          </div>
          <p className="text-caption text-neutral-500">
            This is a general policy template and should be reviewed to reflect your clinic&rsquo;s
            exact data-handling practices and any applicable local regulations.
          </p>
        </div>
      </Section>
    </>
  );
}
