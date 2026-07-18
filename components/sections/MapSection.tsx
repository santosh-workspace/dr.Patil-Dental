import { MapPin, Navigation } from "lucide-react";
import { clinic } from "@/data/clinic";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

/**
 * Local anchor + directions. Renders the Google Maps embed when
 * clinic.mapsEmbedUrl is supplied (lazy-loaded); until then, a
 * landmark-directions card with a native Get Directions link.
 */
export function MapSection() {
  return (
    <section aria-labelledby="map-heading" className="bg-white pb-16 md:pb-24">
      <Container>
        <h2 id="map-heading" className="sr-only">
          Clinic location and directions
        </h2>
        <Reveal variant="fade">
          {clinic.mapsEmbedUrl ? (
            <div className="overflow-hidden rounded-card shadow-soft">
              <iframe
                src={clinic.mapsEmbedUrl}
                title={`Map showing the location of ${clinic.name}`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0"
              />
            </div>
          ) : (
            <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-card bg-gradient-to-br from-primary-50 to-mint-50 p-10 text-center shadow-soft ring-1 ring-primary-100/60 md:p-14">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary-600 shadow-soft">
                <MapPin aria-hidden="true" className="h-7 w-7" />
              </span>
              <div>
                <p className="font-heading text-xl font-semibold text-neutral-900">
                  Easy to find — opposite Chaudhary Dhaba
                </p>
                <p className="mx-auto mt-2 max-w-lg text-sm leading-body text-neutral-600">
                  {clinic.addressLine}. We&rsquo;re on the main Alandi–Moshi
                  Road, a short ride from Chikhali, Alandi, Bhosari, and
                  Dudulgaon.
                </p>
              </div>
              <ButtonLink href={clinic.mapsDirectionsUrl} external>
                <Navigation aria-hidden="true" className="h-4 w-4" />
                Get Directions
              </ButtonLink>
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
