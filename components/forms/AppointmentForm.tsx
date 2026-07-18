"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/data/services";
import { clinic } from "@/data/clinic";
import { validateAppointment, type FieldErrors } from "@/lib/validation";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-200";

export function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
    };

    const clientErrors = validateAppointment(data);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setErrors(json.errors ?? {});
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-card bg-mint-50 p-10 text-center"
      >
        <CheckCircle2 aria-hidden="true" className="h-12 w-12 text-success" />
        <h3 className="font-heading text-xl font-semibold text-neutral-900">
          Request received
        </h3>
        <p className="max-w-sm text-sm leading-body text-neutral-600">
          Thank you — we&rsquo;ll call you back shortly to confirm your
          appointment. For anything urgent, call us directly on{" "}
          <a href={`tel:${clinic.phone}`} className="font-semibold text-primary-700">
            {clinic.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-neutral-800">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          placeholder="Your name"
          className={inputCls}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-xs font-medium text-error">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-neutral-800">
          Mobile number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          placeholder="10-digit mobile number"
          className={inputCls}
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1.5 text-xs font-medium text-error">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-neutral-800">
          Service needed
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
          className={inputCls}
        >
          <option value="" disabled>
            Choose a service…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Not sure / General consultation">
            Not sure / General consultation
          </option>
        </select>
        {errors.service && (
          <p id="service-error" role="alert" className="mt-1.5 text-xs font-medium text-error">
            {errors.service}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-neutral-800">
          Message <span className="font-normal text-neutral-500">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Preferred day and time, or anything you'd like us to know"
          className={inputCls}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs font-medium text-error">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && Object.keys(errors).length === 0 && (
        <p role="alert" className="flex items-center gap-2 text-sm font-medium text-error">
          <AlertCircle aria-hidden="true" className="h-4 w-4" />
          Something went wrong. Please try again, or call us on {clinic.phoneDisplay}.
        </p>
      )}

      <Button type="submit" size="lg" loading={status === "submitting"} className="w-full">
        {status === "submitting" ? "Sending…" : "Request Appointment"}
      </Button>
      <p className="text-center text-xs text-neutral-500">
        We&rsquo;ll call you back to confirm. Your details stay private.
      </p>
    </form>
  );
}
