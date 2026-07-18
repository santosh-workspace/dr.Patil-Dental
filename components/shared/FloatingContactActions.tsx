import { Phone } from "lucide-react";
import { clinic, telUrl, whatsappUrl } from "@/data/clinic";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

/**
 * Floating contact actions pinned bottom-right. The WhatsApp button (real
 * brand logo + green) is visible on every screen size; the call button
 * joins it on mobile, where the header CTA is out of thumb reach.
 */
export function FloatingContactActions() {
  return (
    <div className="fixed bottom-5 right-4 z-30 flex flex-col items-center gap-3 md:bottom-6 md:right-6">
      <a
        href={telUrl}
        aria-label={`Call ${clinic.shortName} on ${clinic.phoneDisplay}`}
        className="flex min-h-[52px] min-w-[52px] items-center justify-center rounded-full bg-primary-600 text-white shadow-lift transition-transform hover:scale-105 active:scale-95 motion-reduce:transition-none md:hidden"
      >
        <Phone aria-hidden="true" className="h-6 w-6" />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex min-h-[56px] min-w-[56px] items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition-transform hover:scale-105 hover:bg-whatsapp-dark active:scale-95 motion-reduce:transition-none"
      >
        {/* Soft attention pulse — decorative, disabled under reduced motion */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-whatsapp/60 motion-safe:animate-ping motion-safe:[animation-duration:2.5s] motion-reduce:hidden"
        />
        <span className="relative flex h-full w-full items-center justify-center">
          <WhatsAppIcon className="h-7 w-7" />
        </span>
        {/* Desktop hover label */}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-neutral-900 px-3.5 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lift transition-opacity duration-200 group-hover:opacity-100 md:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
