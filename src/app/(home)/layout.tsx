import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "../globals.css";


import Navbar from "@/components/blocks/navbar/navbar";



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
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <Navbar />

        {children}

        
      </body>
    </html>
  );
}
