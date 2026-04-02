import type { Metadata } from "next";
import ReligionBiodataPage from "@/components/ReligionBiodataPage";

export const metadata: Metadata = {
  title: "Sikh Marriage Biodata Maker - Create Anand Karaj Biodata Online",
  description:
    "Create Sikh marriage biodata online. Includes Gotra, community, and Gurdwara fields. Beautiful templates with ੴ ਸਤਿ ਨਾਮੁ greeting. Download PDF for ₹9. Best Sikh biodata maker.",
  keywords: [
    "sikh marriage biodata",
    "sikh biodata maker",
    "sikh biodata format",
    "sikh biodata template",
    "anand karaj biodata",
    "punjabi biodata",
    "jat sikh biodata",
    "khatri sikh biodata",
    "ramgarhia biodata",
    "sikh biodata PDF",
    "sikh matrimonial biodata",
  ],
  alternates: { canonical: "https://biodata-mate.vercel.app/sikh-marriage-biodata" },
  openGraph: {
    title: "Sikh Marriage Biodata Maker | BiodataMate",
    description: "Create Sikh biodata with Gotra and community fields. Beautiful templates with Ik Onkar.",
    url: "https://biodata-mate.vercel.app/sikh-marriage-biodata",
  },
};

export default function SikhBiodataPage() {
  return (
    <ReligionBiodataPage
      religion="Sikh"
      greeting="ੴ ਸਤਿ ਨਾਮੁ"
      greetingLang="Gurmukhi"
      description="Create a beautiful Sikh marriage (Anand Karaj) biodata with Gotra, community, and language fields. Premium templates with Ik Onkar greeting. Download as PDF for just ₹9."
      features={[
        "Automatic 'ੴ ਸਤਿ ਨਾਮੁ' (Ik Onkar) greeting on your biodata",
        "Gotra selection — Sidhu, Sandhu, Dhillon, Grewal, Gill, Brar, and more",
        "All Sikh communities — Jat Sikh, Khatri Sikh, Ramgarhia, Arora Sikh, Saini, Rajput Sikh",
        "Punjabi language support",
        "Multi-country — India, Canada, UK, US, Australia (large Sikh diaspora)",
        "Royal Red & Elegant Gold templates — perfect for Punjabi weddings",
        "Vegetarian and Non-vegetarian diet options",
      ]}
      fields={[
        "Full Name", "Date of Birth", "Height", "Weight", "Complexion",
        "Gotra", "Community", "Mother Tongue", "Languages",
        "Education", "Occupation", "Income", "Company", "Work Location",
        "Father's Name", "Mother's Name", "Siblings", "Family Type",
        "Diet", "Smoking", "Drinking", "Hobbies & Interests",
        "Partner Preferences", "Contact Details", "About Me", "Photo",
      ]}
      castes={[
        "Jat Sikh", "Khatri Sikh", "Ramgarhia", "Arora Sikh", "Saini Sikh",
        "Rajput Sikh", "Labana", "Bhatia", "Ghumar", "Ravidasia", "Majhabi",
      ]}
      faqs={[
        { q: "How to create Sikh marriage biodata?", a: "Visit BiodataMate, select your country and choose Sikh as religion. Fill in all details including Gotra and community. Choose a template and download as PDF." },
        { q: "Does it include Gotra for Sikh biodata?", a: "Yes! BiodataMate includes all major Sikh Gotras — Sidhu, Sandhu, Dhillon, Grewal, Gill, Brar, Bajwa, Cheema, Randhawa, Virk, and more." },
        { q: "Is it available for Sikhs in Canada and UK?", a: "Absolutely! BiodataMate supports Canada, UK, US, Australia, and India — all countries with significant Sikh communities." },
        { q: "Which template is best for Sikh biodata?", a: "The Royal Red and Elegant Gold templates are most popular for Sikh biodata. Both include the ੴ ਸਤਿ ਨਾਮੁ greeting." },
      ]}
    />
  );
}
