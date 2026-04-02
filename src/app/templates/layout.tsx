import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata Templates - Beautiful PDF Templates for All Religions",
  description:
    "Browse premium marriage biodata templates. Elegant Gold, Royal Red, Modern Blue & Traditional Green designs. Perfect for Hindu, Muslim, Christian, Sikh weddings. Download as A4 PDF.",
  keywords: [
    "biodata template",
    "marriage biodata template",
    "biodata design",
    "biodata format",
    "biodata template PDF",
    "marriage biodata design",
    "wedding biodata template",
    "hindu biodata template",
    "muslim biodata template",
    "best biodata template",
    "biodata format for marriage",
    "beautiful biodata design",
  ],
  alternates: {
    canonical: "https://biodata-mate.vercel.app/templates",
  },
  openGraph: {
    title: "Marriage Biodata Templates - Premium Designs for All Religions",
    description: "Choose from 4 beautiful biodata templates. Elegant Gold, Royal Red, Modern Blue & Traditional Green.",
    url: "https://biodata-mate.vercel.app/templates",
  },
};

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
