import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://biodata-mate.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BiodataMate - #1 Free Marriage Biodata Maker Online | Create & Download PDF",
    template: "%s | BiodataMate - Marriage Biodata Maker",
  },
  description:
    "Create beautiful marriage biodata online in minutes. Best biodata maker for Hindu, Muslim, Christian, Sikh & all religions. Premium templates, PDF & image download. Free to create, only ₹9/$2 to download.",
  keywords: [
    "marriage biodata",
    "biodata maker",
    "biodata maker online",
    "marriage biodata maker",
    "biodata for marriage",
    "biodata format",
    "biodata template",
    "biodata PDF",
    "marriage biodata format",
    "biodata download",
    "biodata maker free",
    "wedding biodata",
    "matrimonial biodata",
    "shaadi biodata",
    "vivah biodata",
    "biodata for shaadi",
    "biodata maker for marriage",
    "create biodata online",
    "hindu marriage biodata",
    "muslim marriage biodata",
    "christian marriage biodata",
    "sikh marriage biodata",
    "jain marriage biodata",
    "marriage biodata template",
    "marriage biodata PDF download",
    "biodata format for marriage PDF",
    "best biodata maker",
    "free biodata maker online",
    "marriage CV",
    "matrimonial resume",
    "biodata for marriage in hindi",
    "biodata for marriage in english",
    "marriage biodata maker online free",
    "biodata maker app",
    "biodata generator",
  ],
  authors: [{ name: "BiodataMate" }],
  creator: "BiodataMate",
  publisher: "BiodataMate",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US", "hi_IN"],
    url: SITE_URL,
    siteName: "BiodataMate",
    title: "BiodataMate - #1 Free Marriage Biodata Maker Online",
    description:
      "Create stunning marriage biodata in minutes. Premium templates for Hindu, Muslim, Christian, Sikh & all religions. Download as PDF or image.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "BiodataMate - Create Beautiful Marriage Biodata Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BiodataMate - #1 Free Marriage Biodata Maker Online",
    description:
      "Create stunning marriage biodata in minutes. Premium templates for all religions. Download PDF instantly.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "google6a2e879840a2ad4d",
  },
  category: "Lifestyle",
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "BiodataMate",
      description: "Create beautiful marriage biodata online. Best biodata maker for all religions.",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/create`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "BiodataMate",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/opengraph-image`,
      },
      sameAs: [],
    },
    {
      "@type": "WebApplication",
      name: "BiodataMate - Marriage Biodata Maker",
      url: `${SITE_URL}/create`,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "9",
        priceCurrency: "INR",
        description: "Download marriage biodata as PDF or Image",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "2450",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How to create marriage biodata online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visit BiodataMate.com, fill in your personal, family, education, and lifestyle details across 9 simple steps, choose a premium template, and download your biodata as PDF or image.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to make biodata on BiodataMate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Creating your biodata is completely free. You only pay ₹9 (or $2 for international users) when you download the final PDF or image.",
          },
        },
        {
          "@type": "Question",
          name: "Which religions are supported for marriage biodata?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BiodataMate supports Hindu, Muslim, Christian, Sikh, Jain, Buddhist, Parsi, Jewish and more. Each religion has specific fields like Gotra, Manglik, Nakshatra for Hindu, and appropriate greetings.",
          },
        },
        {
          "@type": "Question",
          name: "Can I download biodata as PDF?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! You can download your biodata as a high-quality A4 PDF or PNG image. The biodata is print-ready and looks professional.",
          },
        },
        {
          "@type": "Question",
          name: "Is my data safe on BiodataMate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Your data stays entirely in your browser. We do not store any personal information on our servers. 100% private and secure.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Playfair+Display:wght@400;700&family=Poppins:wght@400;600;700&family=Lora:ital,wght@0,400;0,700;1,400&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
