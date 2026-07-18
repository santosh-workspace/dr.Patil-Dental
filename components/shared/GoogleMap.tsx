import { mapsEmbedUrl } from "@/lib/maps";
import { site } from "@/constants/site";
import { Button } from "@/components/ui/Button";
import { MapPin } from "lucide-react";

/** GoogleMap — responsive embed + Directions button (Local SEO / QA Maps). */
export function GoogleMap({ rounded = true }: { rounded?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden ${
          rounded ? "rounded-xl" : ""
        } border border-neutral-200 shadow-sm`}
      >
        <iframe
          title={`Map to ${site.clinicName}`}
          src={mapsEmbedUrl()}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <Button href={site.maps.shareUrl} external variant="secondary" size="sm">
        <MapPin className="h-4 w-4" aria-hidden="true" />
        Get Directions
      </Button>
    </div>
  );
}
