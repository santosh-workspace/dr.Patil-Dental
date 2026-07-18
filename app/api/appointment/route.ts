import { NextResponse } from "next/server";
import { validateAppointment, type AppointmentInput } from "@/lib/validation";

/**
 * Appointment request endpoint — server-side validation + honeypot.
 *
 * INTEGRATION POINT (deferred to deployment): forward validated requests
 * to the confirmed channel — e.g. an email provider (Resend/SendGrid to
 * the clinic inbox) or a WhatsApp Business API notification. Until then,
 * requests are validated and acknowledged; callers are also shown the
 * clinic phone number as a guaranteed fallback.
 */
export async function POST(request: Request) {
  let body: AppointmentInput;
  try {
    body = (await request.json()) as AppointmentInput;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  // Honeypot: pretend success so bots don't adapt, but do nothing.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateAppointment(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // TODO(deploy): send the appointment request via the confirmed provider.

  return NextResponse.json({ ok: true });
}
