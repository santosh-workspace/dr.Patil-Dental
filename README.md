# Dr. Patil's Dental Clinic and Implant Centre — Website

Marketing site for Dr. Patil's Dental Clinic and Implant Centre, Moshi,
Pimpri-Chinchwad, Pune. Built per the approved v2 blueprint (Medical Teal
theme, Minimal Hero → Classic Split auto-upgrade).

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (token-driven Medical Teal theme in `tailwind.config.ts`)
- Framer Motion (central presets in `components/animations/`)
- Lucide React icons

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

- `app/` — routes, sitemap/robots/manifest handlers, appointment API stub
- `components/` — `layout/`, `ui/`, `sections/` (16 homepage sections), `forms/`, `shared/`, `animations/`
- `data/` — ALL business content (clinic NAP, 18 services, FAQs, stats). No values are hardcoded in components.
- `lib/` — SEO metadata builder, JSON-LD schema builders, form validation

## Pending client assets (block deploy, not build)

Search the codebase for `TODO(client)` / `TODO(deploy)`:

1. **Logo** — `components/shared/Logo.tsx` (text lockup placeholder)
2. **Doctor portrait** — set `clinic.doctor.photo` in `data/clinic.ts`; the hero automatically upgrades from Minimal/Centered to Classic Split. Deliberately NOT a stock photo — the doctor shown must be the real Dr. Patil.
3. **Clinic photos (6–12)** — the site currently uses royalty-free professional dental photography (Unsplash license, commercial use, no attribution) in `public/images/`, framed honestly as "the standard of care" rather than claiming to show this clinic. Swap in real clinic photos via `data/gallery.ts` + the `ClinicImage` uses in about/implants sections; same ratios drop in with zero code changes.
4. **Business hours** — `clinic.hours` in `data/clinic.ts`
5. **Google Maps embed URL** — `clinic.mapsEmbedUrl` (map section renders a directions card until set)
6. **Verified GBP URL + reviews** — `clinic.gbpUrl` and `data/testimonials.ts` (section shows an honest "find us on Google" prompt until populated; Review/AggregateRating schema intentionally omitted until verified)
7. **Social links** — `clinic.socials`
8. **Production domain** — set `NEXT_PUBLIC_SITE_URL` env var (canonicals, OG, sitemap, JSON-LD)
9. **OG image** — replace `public/og-image.svg` with a designed 1200×630 PNG
10. **Form delivery** — wire `app/api/appointment/route.ts` to the confirmed email/WhatsApp provider (documented integration point)

## Content rules honored

- No invented business values: no fake reviews, ratings, patient counts, or hours
- NAP is single-sourced from `data/clinic.ts`
- FAQ schema mirrors visible accordions exactly
- `prefers-reduced-motion` disables all entrance animation
