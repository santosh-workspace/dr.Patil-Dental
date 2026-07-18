import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { clinic } from "@/data/clinic";
import { metadataBase } from "@/lib/seo";
import { dentistSchema, websiteSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { FloatingContactActions } from "@/components/shared/FloatingContactActions";
import "./globals.css";

const heading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `Dentist in Moshi | ${clinic.shortName}`,
    template: `%s | ${clinic.shortName}`,
  },
  description: clinic.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary-700 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingContactActions />
        <JsonLd data={[dentistSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
