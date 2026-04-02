import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Marriage Biodata Online Free - Step by Step Biodata Maker",
  description:
    "Create your marriage biodata online in 9 easy steps. Fill personal details, education, family, lifestyle, partner preferences & download as PDF. Best free biodata maker for Hindu, Muslim, Sikh, Christian & all religions.",
  keywords: [
    "create biodata online",
    "marriage biodata maker",
    "biodata maker online free",
    "create marriage biodata",
    "biodata form online",
    "fill biodata online",
    "biodata maker step by step",
    "free biodata creator",
  ],
  alternates: {
    canonical: "https://biodata-mate.vercel.app/create",
  },
  openGraph: {
    title: "Create Marriage Biodata Online - Free Biodata Maker",
    description: "Fill your details in 9 simple steps and create a stunning marriage biodata. Download as PDF or image.",
    url: "https://biodata-mate.vercel.app/create",
  },
};

export default function CreateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
