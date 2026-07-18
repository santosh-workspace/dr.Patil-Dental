import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/** Shared, accessible form field primitives — reused by all forms (no unique inputs). */

const fieldBase =
  "w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-body text-neutral-900 placeholder:text-neutral-500 transition-colors focus-visible:border-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 disabled:opacity-60 aria-[invalid=true]:border-danger";

export function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="text-body-sm font-semibold text-neutral-800">
      {children}
      {required && <span className="text-danger"> *</span>}
    </label>
  );
}

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(fieldBase, className)} {...props} />
  )
);
Input.displayName = "Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(fieldBase, "min-h-28 resize-y", className)} {...props} />
));
Textarea.displayName = "Textarea";

export const Select = forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select ref={ref} className={cn(fieldBase, "appearance-none", className)} {...props}>
    {children}
  </select>
));
Select.displayName = "Select";

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-caption font-medium text-danger">
      {message}
    </p>
  );
}
