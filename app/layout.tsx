import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/constants/site";
import { buildMetadata } from "@/lib/metadata";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { FloatingActions } from "@/components/shared/FloatingActions";
import { JsonLd } from "@/components/shared/JsonLd";
import { dentistSchema, organizationSchema, websiteSchema } from "@/lib/schema";

/* next/font — self-hosted, no layout shift, no render-blocking (Performance). */
const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});
const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: site.clinicName,
  description: `${site.clinicName} — gentle, trusted dental care by ${site.doctor.name} (${site.doctor.qualification}) in Moshi, Pimpri-Chinchwad, Pune. Book your appointment today.`,
  path: "/",
});

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${heading.variable} ${body.variable}`}>
      <body>
        {/* Global structured data — Schema System */}
        <JsonLd data={[dentistSchema(), organizationSchema(), websiteSchema()]} />

        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
