import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./pages.css";
import Script from "next/script";

import Navbar from "@/components/blocks/navbar/navbar";
import Footer from "@/components/blocks/footer/footer";
import CookieConsent from "@/components/blocks/cookies/cookies";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});


export const metadata: Metadata = {
  title: {
    default: "Gordon & Associates",
    template: "%s | Gordon & Associates",
  },
  description: "Gordon & Associates is a premiere boutique business management firm representing elite entertainers, professional athletes, small business owners, executives, and high net worth individuals.",
  keywords: [
    "Business Management",
    "Entertainment Management",
    "Athlete Management",
    "Financial Services",
    "Tax Services",
    "Small Business Consulting",
    "Executive Mentorship",
    "Gordon & Associates",
    "Wealth Management",
    "Boutique Firm"
  ],
  authors: [{ name: "Gordon & Associates" }],
  creator: "Gordon & Associates",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Gordon & Associates",
    description: "Gordon & Associates is a premiere boutique business management firm representing elite entertainers, professional athletes, small business owners, executives, and high net worth individuals.",
    siteName: "Gordon & Associates",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gordon & Associates",
    description: "Gordon & Associates is a premiere boutique business management firm representing elite entertainers, professional athletes, small business owners, executives, and high net worth individuals.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Gordon & Associates",
    "url": "https://www.gordonandassociates.biz",
    "logo": "https://www.gordonandassociates.biz/logo.svg", // Ensure this path is correct
    "description": "Premiere boutique business management firm in Los Angeles representing elite entertainers and athletes.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "country": "US",
      "streetAddress": "468 N Camden Drive"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tax Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executive Mentorship" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Small Business Consulting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Above the Neck" } }
      ]
    }
  };
  return (
    <html lang="en">
      <head>
        {/* Inject the JSON-LD Schema */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <Navbar />

        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
