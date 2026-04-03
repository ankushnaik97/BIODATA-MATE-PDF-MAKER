import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ChevronRight, Star, Check, FileText, Download, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Marriage Biodata Maker Online Free - Create Biodata for Marriage",
  description:
    "Best online marriage biodata maker. Create professional biodata for marriage in minutes. Fill details, choose template, download PDF. Free biodata maker for Hindu, Muslim, Christian, Sikh & all religions. Only ₹9 to download.",
  keywords: [
    "biodata maker",
    "marriage biodata maker",
    "biodata maker online",
    "biodata maker online free",
    "biodata maker for marriage",
    "create biodata",
    "biodata creator",
    "biodata generator",
    "free biodata maker",
    "best biodata maker",
    "biodata format for marriage",
    "biodata for shaadi",
    "shaadi biodata maker",
    "vivah biodata maker",
    "matrimonial biodata maker",
  ],
  alternates: { canonical: "https://biodata-mate.vercel.app/biodata-maker" },
  openGraph: {
    title: "Marriage Biodata Maker Online Free | BiodataMate",
    description: "Create professional marriage biodata online. Premium templates, all religions supported. Download PDF for just ₹9/$2.",
    url: "https://biodata-mate.vercel.app/biodata-maker",
  },
};

const faqs = [
  { q: "What is a marriage biodata?", a: "A marriage biodata is a personal profile document used in arranged marriages across South Asia. It includes details about the person's education, family, career, lifestyle, and partner preferences. It is shared with prospective families during the matchmaking process." },
  { q: "How to make biodata for marriage online?", a: "Visit BiodataMate, fill in your details across 9 simple steps — personal info, religion, education, family, lifestyle, contact details, partner preferences, about yourself, and pick a template. Preview your biodata and download as PDF or image." },
  { q: "Is BiodataMate free to use?", a: "Yes! Creating your biodata is 100% free. You only pay ₹9 (India) or $2 (international) when you want to download the final PDF or image file." },
  { q: "What details are needed for a marriage biodata?", a: "A good marriage biodata includes: full name, date of birth, height, education, occupation, income, family details (parents, siblings), religion, caste, diet, hobbies, partner preferences, and a photo. BiodataMate covers all of these in detail." },
  { q: "Can I make biodata for different religions?", a: "Absolutely! BiodataMate supports Hindu, Muslim, Christian, Sikh, Jain, Buddhist, Parsi, and Jewish communities. Each religion gets specific fields — like Gotra and Manglik for Hindu, or denomination for Christian." },
  { q: "Is my personal data safe?", a: "100% safe. All your data stays in your browser only. We do NOT store any personal information on our servers. Your privacy is fully protected." },
];

export default function BiodataMakerPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-50 via-white to-amber-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Marriage Biodata Maker Online
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Create a professional, beautiful <strong>marriage biodata</strong> in just 10 minutes.
            Fill your details, choose a stunning template, and <strong>download as PDF</strong> — it&apos;s that simple.
          </p>
          <Link
            href="/create"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-red-500 hover:bg-red-600 text-white rounded-full text-lg font-bold transition shadow-lg"
          >
            Create Your Biodata Now <ChevronRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-400 mt-4">✓ Free to create &nbsp; ✓ All religions &nbsp; ✓ PDF download for ₹9/$2</p>
        </div>
      </section>

      {/* What is a biodata */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What is a Marriage Biodata?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A <strong>marriage biodata</strong> (also called matrimonial biodata, shaadi biodata, or vivah biodata)
            is a formal document used in the Indian subcontinent for <strong>arranged marriages</strong>. It is a
            detailed profile that includes the candidate&apos;s personal information, education, career, family
            background, lifestyle habits, and partner preferences.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A well-designed biodata makes a great first impression on prospective families. BiodataMate helps you
            create a <strong>professional, visually appealing biodata</strong> that covers every detail — from
            religion-specific fields like Gotra and Manglik to modern preferences like diet and hobbies.
          </p>
        </div>
      </section>

      {/* Why BiodataMate */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Why Choose BiodataMate for Your Biodata?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "24 Premium Templates", desc: "Floral, Royal, Elegant, Modern, Traditional & Luxury — 24 stunning designs with decorative borders & ornaments." },
              { icon: Heart, title: "Every Religion Covered", desc: "Hindu, Muslim, Christian, Sikh, Jain, Buddhist with religion-specific fields and greetings." },
              { icon: Download, title: "PDF & Image Download", desc: "Download your biodata as high-quality A4 PDF or HD PNG image. Professional print-ready format." },
              { icon: Shield, title: "100% Private & Secure", desc: "Your data stays in your browser. Nothing is stored on our servers. Complete privacy guaranteed." },
              { icon: Star, title: "Detailed 9-Step Form", desc: "We ask every possible question — education, income, diet, smoking, drinking, hobbies, preferences." },
              { icon: Check, title: "Only ₹9 / $2", desc: "No subscriptions. No hidden fees. One-time payment per download. Cheapest biodata maker online." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <f.icon className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to create */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Create Marriage Biodata Online
          </h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Fill Personal Details", desc: "Enter your name, date of birth, height, complexion, and upload your photo." },
              { step: "2", title: "Select Country & Religion", desc: "Choose your country — religions, castes, and languages auto-adjust. Add caste, gotra, manglik status." },
              { step: "3", title: "Add Education & Career", desc: "Enter your degree, college, job title, company, and annual income." },
              { step: "4", title: "Enter Family Information", desc: "Father's & mother's details, siblings, family type, values, and status." },
              { step: "5", title: "Lifestyle Choices", desc: "Select diet (veg/non-veg), smoking, drinking habits, hobbies, and interests." },
              { step: "6", title: "Contact Details", desc: "Add your address, phone, email, and contact person details." },
              { step: "7", title: "Partner Preferences", desc: "Specify preferred age, height, education, income, religion, and diet for your partner." },
              { step: "8", title: "Write About Yourself", desc: "A short bio paragraph to make a personal connection with readers." },
              { step: "9", title: "Choose Template & Download", desc: "Pick from 24 premium templates, preview your biodata, and download as PDF or image." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/create" className="inline-block px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition shadow-lg">
              Start Creating Your Biodata →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make Your Marriage Biodata?</h2>
          <p className="text-red-100 mb-6">Trusted by thousands. Free to create. Just ₹9 to download.</p>
          <Link href="/create" className="inline-block px-8 py-3.5 bg-white text-red-500 rounded-full font-bold hover:bg-red-50 transition shadow-lg">
            Create Biodata Free →
          </Link>
        </div>
      </section>
    </div>
  );
}
