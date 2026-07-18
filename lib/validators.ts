import { z } from "zod";

/** Shared appointment/contact form schema (React Hook Form + Zod). */
export const appointmentSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  service: z.string().optional(),
  preferredDate: z.string().optional(),
  message: z.string().max(600, "Message is too long").optional(),
});

export type AppointmentValues = z.infer<typeof appointmentSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  message: z.string().min(5, "Please enter a short message").max(600, "Message is too long"),
});

export type ContactValues = z.infer<typeof contactSchema>;
