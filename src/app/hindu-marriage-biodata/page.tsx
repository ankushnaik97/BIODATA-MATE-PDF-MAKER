import type { Metadata } from "next";
import ReligionBiodataPage from "@/components/ReligionBiodataPage";

export const metadata: Metadata = {
  title: "Hindu Marriage Biodata Maker - Create Biodata with Gotra, Manglik, Nakshatra",
  description:
    "Create Hindu marriage biodata online. Includes Gotra, Manglik, Nakshatra, Raasi, caste, sub-caste & horoscope fields. Beautiful templates with शुभ विवाह. Download PDF for ₹9. Best Hindu biodata maker.",
  keywords: [
    "hindu marriage biodata",
    "hindu biodata maker",
    "hindu biodata format",
    "hindu vivah biodata",
    "biodata for hindu marriage",
    "hindu biodata template",
    "hindu marriage biodata PDF",
    "marriage biodata with gotra",
    "manglik biodata",
    "brahmin biodata",
    "rajput biodata",
    "patel biodata",
    "agarwal biodata",
    "jat biodata",
    "maratha biodata",
    "hindu biodata in hindi",
    "shubh vivah biodata",
  ],
  alternates: { canonical: "https://biodata-mate.vercel.app/hindu-marriage-biodata" },
  openGraph: {
    title: "Hindu Marriage Biodata Maker | BiodataMate",
    description: "Create Hindu biodata with Gotra, Manglik, Nakshatra fields. Premium templates with शुभ विवाह.",
    url: "https://biodata-mate.vercel.app/hindu-marriage-biodata",
  },
};

export default function HinduBiodataPage() {
  return (
    <ReligionBiodataPage
      religion="Hindu"
      greeting="॥ श्री गणेशाय नमः ॥"
      greetingLang="Sanskrit"
      description="Create a beautiful Hindu marriage biodata with all traditional fields — Gotra, Manglik, Nakshatra, Raasi, caste, sub-caste, and horoscope. Premium templates with शुभ विवाह greeting. Download as PDF for just ₹9."
      features={[
        "Automatic '॥ श्री गणेशाय नमः ॥' greeting on your biodata",
        "Gotra selection with all major gotras (Kashyap, Bharadwaj, Vashistha, etc.)",
        "Manglik status — Yes, No, Anshik (Partial), Don't Know",
        "All 27 Nakshatras (Ashwini to Revati) and 12 Raasis",
        "40+ Hindu castes with sub-castes (Brahmin, Rajput, Patel, Agarwal, etc.)",
        "Horoscope availability field",
        "Diet options including Jain diet for vegetarian families",
        "Premium Elegant Gold & Royal Red templates — perfect for Hindu weddings",
      ]}
      fields={[
        "Full Name", "Date of Birth", "Time of Birth", "Place of Birth",
        "Height", "Weight", "Complexion", "Blood Group",
        "Gotra", "Manglik Status", "Nakshatra (Star)", "Raasi (Moon Sign)",
        "Horoscope", "Caste", "Sub-Caste", "Mother Tongue",
        "Education", "Occupation", "Income", "Company",
        "Father's Name", "Mother's Name", "Siblings", "Family Type",
        "Diet (Veg/Non-Veg)", "Smoking", "Drinking", "Hobbies",
        "Partner Preferences", "Contact Details", "About Me", "Photo",
      ]}
      castes={[
        "Brahmin", "Rajput", "Patel", "Agarwal", "Jat", "Maratha", "Kshatriya",
        "Vaishya", "Kayastha", "Reddy", "Naidu", "Nair", "Iyer", "Iyengar",
        "Lingayat", "Vokkaliga", "Yadav", "Kurmi", "Kamma", "Gowda", "Bunt",
        "Ezhava", "Gupta", "Khatri", "Arora", "Bania", "Lohana", "Sindhi",
      ]}
      faqs={[
        { q: "How to make Hindu marriage biodata online?", a: "Visit BiodataMate, select India as country and Hindu as religion. Fill in all details including Gotra, Manglik, Nakshatra across 9 steps. Choose a template and download as PDF." },
        { q: "Does it include Manglik and Gotra?", a: "Yes! BiodataMate includes Manglik (Yes/No/Partial/Don't Know), Gotra (18+ options), Nakshatra (all 27), and Raasi (all 12) fields specifically for Hindu biodata." },
        { q: "Which template is best for Hindu biodata?", a: "The Elegant Gold and Royal Red templates are most popular for Hindu marriage biodata. Both include the शुभ विवाह / श्री गणेशाय नमः greeting." },
        { q: "Can I make Brahmin/Rajput/Patel-specific biodata?", a: "Yes! Select your caste and sub-caste from our comprehensive list. Brahmin has sub-castes like Saraswat, Gaur, Maithil, etc. Rajput has Chauhan, Rathore, Sisodia, and more." },
      ]}
    />
  );
}
