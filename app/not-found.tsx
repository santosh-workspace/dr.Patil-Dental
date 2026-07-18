import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="font-heading text-7xl font-bold text-primary-200">404</p>
      <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-neutral-900">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-md leading-body text-neutral-600">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        Let&rsquo;s get you back to something helpful.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <ButtonLink href="/">Back to Home</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Book an Appointment
        </ButtonLink>
      </div>
    </Section>
  );
}
