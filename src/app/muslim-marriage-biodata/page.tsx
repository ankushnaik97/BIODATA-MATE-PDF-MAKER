import type { Metadata } from "next";
import ReligionBiodataPage from "@/components/ReligionBiodataPage";

export const metadata: Metadata = {
  title: "Muslim Marriage Biodata Maker - Create Nikah Biodata Online",
  description:
    "Create Muslim marriage biodata (Rishta biodata) online. Includes sect, community, maslak fields. Beautiful templates with بسم الله الرحمن الرحيم. Download PDF for ₹9. Best Muslim biodata maker.",
  keywords: [
    "muslim marriage biodata",
    "muslim biodata maker",
    "muslim biodata format",
    "nikah biodata",
    "rishta biodata",
    "islamic biodata",
    "muslim biodata template",
    "muslim biodata PDF",
    "sunni biodata",
    "shia biodata",
    "syed biodata",
    "pathan biodata",
    "muslim marriage biodata format",
  ],
  alternates: { canonical: "https://biodata-mate.vercel.app/muslim-marriage-biodata" },
  openGraph: {
    title: "Muslim Marriage Biodata Maker | BiodataMate",
    description: "Create Muslim Nikah biodata with sect, community fields. Beautiful Islamic templates.",
    url: "https://biodata-mate.vercel.app/muslim-marriage-biodata",
  },
};

export default function MuslimBiodataPage() {
  return (
    <ReligionBiodataPage
      religion="Muslim"
      greeting="بسم الله الرحمن الرحيم"
      greetingLang="Arabic"
      description="Create a beautiful Muslim marriage (Nikah / Rishta) biodata with sect, community, and maslak fields. Premium templates with Bismillah greeting. Download as PDF for just ₹9."
      features={[
        "Automatic 'بسم الله الرحمن الرحيم' (Bismillah) greeting on your biodata",
        "Sect selection — Sunni, Shia, Ahmadiyya, Bohra, Khoja, and more",
        "Sub-sect / Maslak — Hanafi, Shafii, Deobandi, Barelvi, etc.",
        "All major Muslim communities — Syed, Sheikh, Pathan, Mughal, Ansari, Qureshi, Khan, Memon",
        "Multi-country support — India, Pakistan, Bangladesh, UAE, Saudi Arabia, Malaysia",
        "Urdu, Arabic, and English language options",
        "Diet field with Non-Vegetarian and Halal preferences",
        "Clean Modern Blue template — popular choice for Muslim biodata",
      ]}
      fields={[
        "Full Name", "Date of Birth", "Height", "Weight", "Complexion",
        "Sect (Sunni/Shia)", "Sub-Sect / Maslak", "Community", "Mother Tongue",
        "Education", "Occupation", "Income", "Company", "Work Location",
        "Father's Name", "Mother's Name", "Siblings", "Family Type",
        "Diet", "Smoking", "Drinking", "Hobbies & Interests",
        "Partner Preferences", "Contact Details", "About Me", "Photo",
      ]}
      castes={[
        "Sunni", "Shia", "Bohra", "Khoja", "Memon", "Syed", "Sheikh",
        "Pathan", "Mughal", "Ansari", "Qureshi", "Khan", "Malik",
        "Hanafi", "Shafii", "Deobandi", "Barelvi",
      ]}
      faqs={[
        { q: "How to create Muslim marriage biodata?", a: "Visit BiodataMate, select your country and choose Muslim as religion. Fill all details including sect, community, and maslak. Choose a template and download your Nikah biodata as PDF." },
        { q: "Does it include Bismillah on the biodata?", a: "Yes! When you select Muslim as your religion, your biodata automatically displays 'بسم الله الرحمن الرحيم' (Bismillah) at the top." },
        { q: "Can I make biodata for Sunni and Shia?", a: "Absolutely! BiodataMate supports Sunni (Hanafi, Shafii, Maliki, Hanbali) and Shia (Ithna Ashari, Ismaili, Zaydi) sects." },
        { q: "Is it available for Pakistan and Bangladesh?", a: "Yes! BiodataMate supports Pakistan, Bangladesh, UAE, Saudi Arabia, Malaysia, and 10+ other countries with appropriate languages and communities." },
      ]}
    />
  );
}
