/** Shared client + server validation for the appointment form. */

export interface AppointmentInput {
  name: string;
  phone: string;
  service: string;
  message: string;
  /** Honeypot — must stay empty; bots that fill it are silently accepted and dropped. */
  company?: string;
}

export type FieldErrors = Partial<Record<"name" | "phone" | "service" | "message", string>>;

const PHONE_RE = /^(\+91[\s-]?)?[0]?[6-9]\d{9}$/;

export function validateAppointment(input: AppointmentInput): FieldErrors {
  const errors: FieldErrors = {};

  const name = input.name?.trim() ?? "";
  if (name.length < 2) {
    errors.name = "Please enter your full name.";
  } else if (name.length > 80) {
    errors.name = "Name looks too long — please shorten it.";
  }

  const phone = (input.phone ?? "").replace(/[\s-]/g, "");
  if (!PHONE_RE.test(phone)) {
    errors.phone = "Please enter a valid 10-digit Indian mobile number.";
  }

  if (!input.service?.trim()) {
    errors.service = "Please choose the service you need.";
  }

  if ((input.message ?? "").length > 1000) {
    errors.message = "Message is too long (1000 characters max).";
  }

  return errors;
}
