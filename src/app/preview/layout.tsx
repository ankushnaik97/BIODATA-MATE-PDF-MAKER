import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preview & Download Marriage Biodata PDF",
  description: "Preview your marriage biodata and download as high-quality PDF or image. Print-ready A4 format.",
  robots: { index: false, follow: false },
};

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
