import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";

/** 404 page (Feedback System — empty/error state). */
export default function NotFound() {
  return (
    <Container className="grid min-h-[60vh] place-items-center py-20 text-center">
      <div className="flex flex-col items-center gap-5">
        <p className="text-display font-extrabold text-primary-600">404</p>
        <h1 className="text-h2">Page not found</h1>
        <p className="max-w-md text-body text-neutral-600">
          Sorry, we couldn&rsquo;t find the page you were looking for. Let&rsquo;s get you back on track.
        </p>
        <Button href="/" size="lg">
          <Home className="h-5 w-5" aria-hidden="true" />
          Back to Home
        </Button>
      </div>
    </Container>
  );
}
