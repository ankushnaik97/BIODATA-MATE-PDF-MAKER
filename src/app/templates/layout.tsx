import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24 Marriage Biodata Templates - Floral, Royal, Elegant, Modern & More",
  description:
    "Browse 24 premium marriage biodata templates. Floral, Royal, Elegant, Modern, Traditional & Luxury designs with beautiful decorative borders & ornaments. Perfect for Hindu, Muslim, Christian, Sikh weddings. Download as A4 PDF.",
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
    "floral biodata template",
    "royal biodata template",
    "elegant biodata template",
    "modern biodata template",
    "luxury biodata template",
  ],
  alternates: {
    canonical: "https://biodata-mate.vercel.app/templates",
  },
  openGraph: {
    title: "24 Marriage Biodata Templates - Premium Designs for All Religions | BiodataMate",
    description: "Browse 24 beautiful biodata templates — Floral, Royal, Elegant, Modern, Traditional & Luxury designs with decorative borders.",
    url: "https://biodata-mate.vercel.app/templates",
  },
};

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
