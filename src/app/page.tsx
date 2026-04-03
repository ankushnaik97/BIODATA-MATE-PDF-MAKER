import type { Metadata } from "next";
import Link from "next/link";
import { templateList } from "@/lib/templates";
import MiniTemplatePreview from "@/components/MiniTemplatePreview";
import {
  Heart,
  FileText,
  Download,
  Globe,
  Star,
  Shield,
  Sparkles,
  IndianRupee,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "BiodataMate - #1 Free Marriage Biodata Maker Online | Create & Download PDF",
  description:
    "Create beautiful marriage biodata online in minutes. 24 premium templates for Hindu, Muslim, Christian, Sikh & all religions. PDF & image download. Free to create, only ₹9/$2 to download.",
  alternates: { canonical: "https://biodata-mate.vercel.app" },
  openGraph: {
    title: "BiodataMate - #1 Free Marriage Biodata Maker Online",
    description:
      "Create stunning marriage biodata in minutes. 24 premium templates for all religions. Download as PDF or image.",
    url: "https://biodata-mate.vercel.app",
  },
};

const features = [
  {
    icon: FileText,
    title: "24 Premium Templates",
    description: "Floral, Royal, Elegant, Modern, Traditional & Luxury — 24 stunning designs with decorative borders & ornaments.",
  },
  {
    icon: Globe,
    title: "Every Religion & Country",
    description: "Hindu, Muslim, Christian, Sikh, Jain, Buddhist & more. Country-specific fields auto-adjust.",
  },
  {
    icon: Sparkles,
    title: "Detailed Questions",
    description: "Education, career, family, diet, hobbies, smoking, drinking — every detail covered.",
  },
  {
    icon: Download,
    title: "PDF & Image Download",
    description: "Download your biodata as high-quality PDF or image. Print-ready format at A4 size.",
  },
  {
    icon: Shield,
    title: "100% Private & Secure",
    description: "Your data stays in your browser. Nothing is stored on our servers.",
  },
  {
    icon: IndianRupee,
    title: "Just ₹9 / $2",
    description: "One-time payment per download. No subscriptions, no hidden charges.",
  },
];

const steps = [
  { num: "1", title: "Fill Your Details", desc: "Answer detailed questions about yourself, family, education & preferences" },
  { num: "2", title: "Choose Template", desc: "Pick from 24 premium biodata templates — floral, royal, elegant & more" },
  { num: "3", title: "Preview & Download", desc: "Preview your biodata, pay ₹9/$2 and download as PDF or Image" },
];

const testimonials = [
  { name: "Priya S.", location: "Mumbai", text: "Beautiful templates! Made my biodata in 10 minutes.", rating: 5 },
  { name: "Rahul K.", location: "Delhi", text: "Very detailed form. Covered everything I needed for my matrimonial profile.", rating: 5 },
  { name: "Fatima A.", location: "Hyderabad", text: "Loved the Muslim-specific fields. Great design!", rating: 5 },
  { name: "Gurpreet S.", location: "Chandigarh", text: "Perfect Sikh biodata template. My family loved it.", rating: 5 },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-medium">
                <Heart className="w-4 h-4 fill-red-500" />
                #1 Marriage Biodata Maker
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Create Your Perfect
              <br />
              <span className="text-red-500">Marriage Biodata</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Beautiful templates for every religion. Fill your details, pick a design,
              and download as PDF — all in under 10 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/create"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-red-500 hover:bg-red-600 text-white rounded-full text-lg font-bold transition shadow-lg hover:shadow-xl"
              >
                Create Biodata Now
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/templates"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border-2 border-gray-200 text-gray-700 hover:border-red-300 rounded-full text-lg font-medium transition"
              >
                View 24 Templates
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              ✓ No signup required &nbsp; ✓ 100% private &nbsp; ✓ Just ₹9 / $2 per download
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 rounded-full opacity-40 translate-x-1/3 translate-y-1/3 blur-3xl" />
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 bg-red-500 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
            24 Beautiful Templates
          </h2>
          <p className="text-center text-gray-500 mb-8 max-w-lg mx-auto">
            Floral, Royal, Elegant, Modern, Traditional & Luxury — each with unique decorative borders, ornaments & flowers.
          </p>

          {/* Scrollable template preview row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
            {templateList.slice(0, 12).map((tpl) => (
              <Link
                key={tpl.id}
                href="/templates"
                className="rounded-lg border-2 overflow-hidden hover:shadow-lg transition-shadow group"
                style={{ borderColor: `${tpl.borderColor}50` }}
              >
                <div className="h-40">
                  <MiniTemplatePreview tpl={tpl} size="sm" />
                </div>
                <div className="px-2 py-1.5 bg-white border-t" style={{ borderTopColor: `${tpl.borderColor}30` }}>
                  <p className="text-[10px] font-semibold text-gray-800 truncate">{tpl.name}</p>
                  <p className="text-[8px] text-gray-400">{tpl.category}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/templates"
              className="inline-block px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition shadow-lg"
            >
              View All 24 Templates →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">
            The most detailed marriage biodata maker with support for every religion, community, and country.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition"
              >
                <feat.icon className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-500">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
          <p className="text-gray-500 mb-8">No subscriptions. No hidden fees. Pay once, download instantly.</p>

          <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-2xl border-2 border-red-200 p-8 md:p-12 inline-block">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-5xl font-bold text-red-500">₹9</span>
              <span className="text-gray-400 text-lg">/ $2</span>
            </div>
            <p className="text-gray-600 mb-6">per biodata download</p>
            <ul className="space-y-2 text-left text-sm text-gray-700 mb-8">
              {[
                "High-quality A4 PDF download",
                "HD Image download (PNG)",
                "All premium templates included",
                "Detailed biodata with all sections",
                "Print-ready format",
                "100% privacy — no data stored",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/create"
              className="inline-block px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition shadow-lg"
            >
              Create Your Biodata →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-3">&ldquo;{t.text}&rdquo;</p>
                <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                <p className="text-xs text-gray-400">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Your Marriage Biodata?
          </h2>
          <p className="text-red-100 mb-8">
            Join thousands of happy users who found their perfect match with our biodata maker.
          </p>
          <Link
            href="/create"
            className="inline-block px-8 py-3.5 bg-white text-red-500 rounded-full text-lg font-bold hover:bg-red-50 transition shadow-lg"
          >
            Get Started — It&apos;s Free to Create
          </Link>
        </div>
      </section>
    </div>
  );
}
