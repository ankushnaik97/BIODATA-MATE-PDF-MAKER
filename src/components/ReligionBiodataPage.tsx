import Link from "next/link";
import { ChevronRight, Star, Check } from "lucide-react";

interface ReligionPageProps {
  religion: string;
  greeting: string;
  greetingLang: string;
  description: string;
  features: string[];
  fields: string[];
  castes: string[];
  faqs: { q: string; a: string }[];
}

export default function ReligionBiodataPage({
  religion,
  greeting,
  greetingLang,
  description,
  features,
  fields,
  castes,
  faqs,
}: ReligionPageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-50 via-white to-amber-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-red-500 font-medium mb-2">{greeting}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {religion} Marriage Biodata Maker
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{description}</p>
          <Link
            href="/create"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-red-500 hover:bg-red-600 text-white rounded-full text-lg font-bold transition shadow-lg"
          >
            Create {religion} Biodata <ChevronRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-400 mt-4">
            ✓ {religion}-specific fields &nbsp; ✓ {greetingLang} greeting on biodata &nbsp; ✓ PDF download for ₹9
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why BiodataMate for {religion} Marriage Biodata?
          </h2>
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fields covered */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {religion} Biodata Fields We Cover
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {fields.map((field) => (
              <div key={field} className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 border border-gray-100">
                <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{field}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Castes */}
      {castes.length > 0 && (
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {religion} Castes & Communities Supported
            </h2>
            <p className="text-gray-500 mb-6 text-sm">
              BiodataMate supports all major {religion} castes and sub-castes. Here are some we cover:
            </p>
            <div className="flex flex-wrap gap-2">
              {castes.map((c) => (
                <span key={c} className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-medium border border-red-100">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {religion} Marriage Biodata — FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl border border-gray-100 p-5 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-red-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Create Your {religion} Marriage Biodata Now
          </h2>
          <p className="text-red-100 mb-6">Trusted by thousands. Premium templates. PDF download for ₹9.</p>
          <Link href="/create" className="inline-block px-8 py-3.5 bg-white text-red-500 rounded-full font-bold hover:bg-red-50 transition shadow-lg">
            Start Now — Free to Create →
          </Link>
        </div>
      </section>
    </div>
  );
}
