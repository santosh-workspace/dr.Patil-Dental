import { MessageCircle, Phone } from "lucide-react";
import { clinic, telUrl, whatsappUrl } from "@/data/clinic";

/**
 * Mobile-only floating Call + WhatsApp actions, thumb-zone placed,
 * 44px+ targets, non-obstructive.
 */
export function FloatingContactActions() {
  return (
    <div className="fixed bottom-5 right-4 z-30 flex flex-col gap-3 md:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-13 w-13 min-h-[52px] min-w-[52px] items-center justify-center rounded-full bg-success text-white shadow-lift transition-transform active:scale-95"
      >
        <MessageCircle aria-hidden="true" className="h-6 w-6" />
      </a>
      <a
        href={telUrl}
        aria-label={`Call ${clinic.shortName} on ${clinic.phoneDisplay}`}
        className="flex min-h-[52px] min-w-[52px] items-center justify-center rounded-full bg-primary-600 text-white shadow-lift transition-transform active:scale-95"
      >
        <Phone aria-hidden="true" className="h-6 w-6" />
      </a>
    </div>
  );
}
