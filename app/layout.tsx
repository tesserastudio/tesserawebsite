import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { NoiseTexture } from "@/components/ui/NoiseTexture";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tesseraweb.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tessera Studio | Premium Website Development & AI Automation Studio",
  description:
    "Tessera Studio is a Bangalore-based digital studio building premium websites, AI automation systems, branding, and lead-generation experiences for growing businesses across India.",
  keywords: [
    "website development studio",
    "web design agency",
    "AI automation",
    "branding studio",
    "lead generation websites",
    "Bangalore web design studio",
    "Chittoor website development"
  ],
  authors: [{ name: "Tessera Studio" }],
  creator: "Tessera Studio",
  alternates: {
    canonical: "https://tesseraweb.in"
  },
  openGraph: {
    title: "Tessera Studio | Premium Websites & AI Automation",
    description: "Bangalore-based digital studio building premium websites, AI automation systems, branding, and lead-generation experiences.",
    url: siteUrl,
    siteName: "Tessera Studio",
    images: [
      {
        url: "/Tessera new.png",
        width: 1200,
        height: 630,
        alt: "Tessera Studio premium growth and website development studio"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tessera Studio | Premium Websites & AI Automation",
    description: "Bangalore-based digital studio building premium websites, AI automation systems, branding, and lead-generation experiences.",
    images: ["/Tessera new.png"]
  },
  icons: {
    icon: "/Tessera new.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  "name": "Tessera Studio",
  "url": siteUrl,
  "logo": `${siteUrl}/Tessera new.png`,
  "description": "Tessera Studio is a Bangalore-based digital studio building premium websites, AI automation systems, branding, and lead-generation experiences for growing businesses across India. Founded by a Chittoor native.",
  "sameAs": [
    "https://www.instagram.com/tesserastudio.in/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 98765 43210",
    "contactType": "sales",
    "email": "contact@tesseraweb.in",
    "areaServed": ["Bangalore", "Chittoor", "Andhra Pradesh", "Karnataka", "IN"],
    "availableLanguage": ["en", "telugu", "tamil"]
  },
  "founder": {
    "@type": "Person",
    "name": "Tessera Studio Founder",
    "homeLocation": {
      "@type": "Place",
      "name": "Chittoor, Andhra Pradesh, India"
    }
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#localbusiness`,
  "name": "Tessera Studio",
  "url": siteUrl,
  "image": `${siteUrl}/Tessera new.png`,
  "description": "Tessera Studio is a Bangalore-based digital studio founded by a Chittoor native, building premium websites, AI automation systems, branding, and lead-generation experiences for growing businesses.",
  "telephone": "+91 98765 43210",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Block 1B, Near SAP Labs, Whitefield",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560066",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9842",
    "longitude": "77.7289"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Bengaluru" },
    { "@type": "AdministrativeArea", "name": "Karnataka" },
    { "@type": "AdministrativeArea", "name": "Chittoor" },
    { "@type": "AdministrativeArea", "name": "Tirupati" },
    { "@type": "AdministrativeArea", "name": "Andhra Pradesh" },
    { "@type": "AdministrativeArea", "name": "India" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "19:00"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  "name": "Tessera Studio",
  "url": siteUrl,
  "publisher": {
    "@id": `${siteUrl}/#organization`
  }
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Tessera Studio Services",
  "description": "Premium digital services by Tessera Studio, serving Bangalore, Chittoor, Andhra Pradesh, Karnataka, and across India.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Website Development",
        "description": "High-performance websites, custom web apps, and digital platforms built to convert and scale.",
        "provider": { "@id": `${siteUrl}/#organization` },
        "areaServed": ["Bangalore", "Chittoor", "Andhra Pradesh", "Karnataka", "India"]
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Web Design",
        "description": "Premium user experience design, interfaces, and conversion-focused landing pages.",
        "provider": { "@id": `${siteUrl}/#organization` },
        "areaServed": ["Bangalore", "Chittoor", "Andhra Pradesh", "Karnataka", "India"]
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "AI Automation",
        "description": "AI receptionist systems, WhatsApp workflows, CRM automations, and lead response tools.",
        "provider": { "@id": `${siteUrl}/#organization` },
        "areaServed": ["Bangalore", "Chittoor", "Andhra Pradesh", "Karnataka", "India"]
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Branding",
        "description": "Distinctive brand identity design, logos, typography, visual guidelines, and social systems.",
        "provider": { "@id": `${siteUrl}/#organization` },
        "areaServed": ["Bangalore", "Chittoor", "Andhra Pradesh", "Karnataka", "India"]
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Lead Generation Systems",
        "description": "Conversion-focused landing pages, automated social campaigns, WhatsApp inquiry funnels, and customer pipelines.",
        "provider": { "@id": `${siteUrl}/#organization` },
        "areaServed": ["Bangalore", "Chittoor", "Andhra Pradesh", "Karnataka", "India"]
      }
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="schema-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
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
