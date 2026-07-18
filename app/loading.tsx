/** Global route loading UI (Feedback System — loading state). */
export default function Loading() {
  return (
    <div className="grid min-h-[50vh] place-items-center" role="status" aria-live="polite">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-primary-100 border-t-primary-600" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
