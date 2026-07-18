"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { contactSchema, type ContactValues } from "@/lib/validators";
import { site } from "@/constants/site";
import { Label, Input, Textarea, FieldError } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

/** ContactForm — reuses shared field primitives + validation (Form System). */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = (values: ContactValues) => {
    const lines = [
      `Message via website — ${site.clinicName}`,
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : "",
      `Message: ${values.message}`,
    ].filter(Boolean);
    window.open(
      `${site.contact.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div role="status" className="flex flex-col items-center gap-3 rounded-xl border border-success/30 bg-success/5 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-success" aria-hidden="true" />
        <h3 className="text-h4">Message ready to send</h3>
        <p className="text-body-sm text-neutral-600">
          We&rsquo;ve opened WhatsApp with your message — please send it and we&rsquo;ll reply soon.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>Send another</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="c-name" required>Full Name</Label>
          <Input id="c-name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby="c-name-error" {...register("name")} />
          <FieldError id="c-name-error" message={errors.name?.message} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="c-phone" required>Phone</Label>
          <Input id="c-phone" type="tel" inputMode="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby="c-phone-error" {...register("phone")} />
          <FieldError id="c-phone-error" message={errors.phone?.message} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="c-email">Email</Label>
        <Input id="c-email" type="email" autoComplete="email" {...register("email")} />
        <FieldError id="c-email-error" message={errors.email?.message} />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="c-message" required>Message</Label>
        <Textarea id="c-message" aria-invalid={!!errors.message} aria-describedby="c-message-error" {...register("message")} />
        <FieldError id="c-message-error" message={errors.message?.message} />
      </div>
      <Button type="submit" size="lg" loading={isSubmitting} fullWidth>
        <Send className="h-4 w-4" aria-hidden="true" />
        Send Message
      </Button>
    </form>
  );
}
