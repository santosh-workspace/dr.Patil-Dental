"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Calendar } from "lucide-react";
import { appointmentSchema, type AppointmentValues } from "@/lib/validators";
import { site } from "@/constants/site";
import { services } from "@/data/services";
import { Label, Input, Textarea, Select, FieldError } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

/**
 * AppointmentForm — reusable, accessible booking form (Form System).
 * Validation via Zod; supports default/error/loading/success states.
 * Submission composes a pre-filled WhatsApp message to the clinic — a real,
 * working action with no fabricated backend. Swap in an API/email service later.
 */
export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentValues>({ resolver: zodResolver(appointmentSchema) });

  const onSubmit = (values: AppointmentValues) => {
    const lines = [
      `New appointment request — ${site.clinicName}`,
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : "",
      values.service ? `Service: ${values.service}` : "",
      values.preferredDate ? `Preferred date: ${values.preferredDate}` : "",
      values.message ? `Message: ${values.message}` : "",
    ].filter(Boolean);
    const url = `${site.contact.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-xl border border-success/30 bg-success/5 p-8 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-success" aria-hidden="true" />
        <h3 className="text-h4">Request sent!</h3>
        <p className="text-body-sm text-neutral-600">
          Thank you. We&rsquo;ve opened WhatsApp with your details — please send the message and
          we&rsquo;ll confirm your appointment. You can also call us at {site.contact.phone}.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
          Book another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name" required>Full Name</Label>
          <Input
            id="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
            {...register("name")}
          />
          <FieldError id="name-error" message={errors.name?.message} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone" required>Phone</Label>
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby="phone-error"
            {...register("phone")}
          />
          <FieldError id="phone-error" message={errors.phone?.message} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby="email-error" {...register("email")} />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="service">Service</Label>
          <Select id="service" defaultValue="" {...register("service")}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="preferredDate">Preferred Date</Label>
        <Input id="preferredDate" type="date" {...register("preferredDate")} />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" aria-invalid={!!errors.message} aria-describedby="message-error" placeholder="Tell us briefly what you need…" {...register("message")} />
        <FieldError id="message-error" message={errors.message?.message} />
      </div>

      <Button type="submit" size="lg" loading={isSubmitting} fullWidth>
        <Calendar className="h-4 w-4" aria-hidden="true" />
        Request Appointment
      </Button>
      <p className="text-caption text-neutral-500">
        Prefer to talk? Call or WhatsApp us at {site.contact.phone}.
      </p>
    </form>
  );
}
