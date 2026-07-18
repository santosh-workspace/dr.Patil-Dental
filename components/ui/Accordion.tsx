"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ServiceFaq } from "@/data/services";

/** Accessible single-column FAQ accordion with smooth expand/collapse. */
export function Accordion({ items }: { items: ServiceFaq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-neutral-200 rounded-card border border-neutral-200 bg-white shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i;
        const headerId = `${baseId}-h-${i}`;
        const panelId = `${baseId}-p-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-[44px] w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-base font-semibold text-neutral-900 transition-colors hover:bg-primary-50/50 hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary-600 md:text-lg"
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 text-primary-600 transition-transform duration-300 motion-reduce:transition-none ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 leading-body text-neutral-600">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
