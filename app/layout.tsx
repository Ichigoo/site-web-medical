import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.city}`,
    template: `%s | ${siteConfig.shortName} ${siteConfig.city}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.city}`,
    description: siteConfig.tagline,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: siteConfig.name,
  description: siteConfig.tagline,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  medicalSpecialty: "Radiology",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressCountry: "MA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${fraunces.variable} ${figtree.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
