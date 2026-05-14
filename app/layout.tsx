import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { NoiseTexture } from "@/components/ui/NoiseTexture";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tesserastudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tessera Studio | Premium Growth Studio",
  description:
    "We build brands, websites and growth systems that scale businesses through premium design, digital marketing and AI automation.",
  keywords: [
    "growth studio",
    "web design",
    "branding",
    "AI automation",
    "digital marketing",
    "Tessera Studio"
  ],
  authors: [{ name: "Tessera Studio" }],
  creator: "Tessera Studio",
  openGraph: {
    title: "Tessera Studio",
    description: "Premium growth studio for modern businesses.",
    url: siteUrl,
    siteName: "Tessera Studio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Tessera Studio premium growth studio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tessera Studio",
    description: "Premium growth studio for modern businesses.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/tessera-new.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tessera Studio",
  url: siteUrl,
  description:
    "Premium growth studio offering web design, branding, digital marketing and AI automation.",
  areaServed: "Worldwide",
  sameAs: [
    "https://instagram.com/tesserastudio",
    "https://linkedin.com/company/tesserastudio",
    "https://x.com/tesserastudio"
  ],
  serviceType: ["Web Design", "Branding", "Digital Marketing", "AI Automation"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SmoothScroll />
        <ScrollProgress />
        <NoiseTexture />
        <CursorFollower />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
