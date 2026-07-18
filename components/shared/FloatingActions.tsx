"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { site } from "@/constants/site";

/**
 * Floating action buttons — Call, WhatsApp, Back-to-Top (documented Floating
 * button variants + Conversion Rules). Keyboard-accessible with labels.
 */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={site.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
      <a
        href={site.contact.phoneHref}
        aria-label={`Call ${site.clinicName}`}
        className="grid h-12 w-12 place-items-center rounded-full bg-primary-600 text-white shadow-lg transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500"
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
      </a>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid h-12 w-12 place-items-center rounded-full bg-neutral-800 text-white shadow-lg transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-700"
        >
          <ArrowUp className="h-6 w-6" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
