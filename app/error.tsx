"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { RefreshCw } from "lucide-react";

/** Route error boundary (Feedback System — error state). */
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // In production, log to your monitoring service.
    console.error(error);
  }, [error]);

  return (
    <Container className="grid min-h-[60vh] place-items-center py-20 text-center">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-h2">Something went wrong</h1>
        <p className="max-w-md text-body text-neutral-600">
          An unexpected error occurred. Please try again — if it keeps happening, call us and
          we&rsquo;ll help you directly.
        </p>
        <Button onClick={reset} size="lg">
          <RefreshCw className="h-5 w-5" aria-hidden="true" />
          Try again
        </Button>
      </div>
    </Container>
  );
}
