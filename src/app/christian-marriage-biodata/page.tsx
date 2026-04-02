import type { Metadata } from "next";
import ReligionBiodataPage from "@/components/ReligionBiodataPage";

export const metadata: Metadata = {
  title: "Christian Marriage Biodata Maker - Create Matrimonial Biodata Online",
  description:
    "Create Christian marriage biodata online. Includes denomination, church, and community fields. Beautiful templates with ✝ In God We Trust. Download PDF for ₹9. Best Christian biodata maker.",
  keywords: [
    "christian marriage biodata",
    "christian biodata maker",
    "christian biodata format",
    "christian biodata template",
    "christian matrimonial biodata",
    "catholic biodata",
    "protestant biodata",
    "CSI biodata",
    "syrian christian biodata",
    "christian biodata PDF",
  ],
  alternates: { canonical: "https://biodata-mate.vercel.app/christian-marriage-biodata" },
  openGraph: {
    title: "Christian Marriage Biodata Maker | BiodataMate",
    description: "Create Christian matrimonial biodata with denomination fields. Beautiful templates.",
    url: "https://biodata-mate.vercel.app/christian-marriage-biodata",
  },
};

export default function ChristianBiodataPage() {
  return (
    <ReligionBiodataPage
      religion="Christian"
      greeting="✝ In God We Trust ✝"
      greetingLang="English"
      description="Create a beautiful Christian marriage biodata with denomination, church, and community details. Premium templates with Christian greeting. Download as PDF for just ₹9."
      features={[
        "Automatic '✝ In God We Trust ✝' greeting on your biodata",
        "All denominations — Roman Catholic, Protestant, Orthodox, Pentecostal, Methodist, Baptist, Anglican, and more",
        "Kerala Christian communities — Syrian Christian, Marthoma, Jacobite, Knanaya, Latin Catholic",
        "Church of South India (CSI) and Church of North India (CNI) support",
        "Multi-country support — India, US, UK, Canada, Australia, and more",
        "Modern Blue template — popular choice for Christian biodata",
        "Professional and clean design suitable for all Christian communities",
      ]}
      fields={[
        "Full Name", "Date of Birth", "Height", "Weight", "Complexion",
        "Denomination", "Church / Parish", "Mother Tongue", "Languages",
        "Education", "Occupation", "Income", "Company", "Work Location",
        "Father's Name", "Mother's Name", "Siblings", "Family Type",
        "Diet", "Smoking", "Drinking", "Hobbies & Interests",
        "Partner Preferences", "Contact Details", "About Me", "Photo",
      ]}
      castes={[
        "Roman Catholic", "Protestant", "Syrian Christian", "Orthodox",
        "Pentecostal", "CSI", "CNI", "Methodist", "Baptist", "Anglican",
        "Evangelical", "Latin Catholic", "Marthoma", "Jacobite", "Knanaya",
        "Born Again", "Brethren", "Seventh Day Adventist",
      ]}
      faqs={[
        { q: "How to make Christian marriage biodata?", a: "Visit BiodataMate, select your country and choose Christian as religion. Fill all details including denomination and church. Choose a template and download as PDF." },
        { q: "Does it support Catholic and Protestant?", a: "Yes! BiodataMate supports Roman Catholic, Protestant, Orthodox, Pentecostal, Methodist, Baptist, Anglican, and 15+ other denominations." },
        { q: "Is it good for Kerala Christian biodata?", a: "Absolutely! We specifically support Syrian Christian, Marthoma, Jacobite, Knanaya, and Latin Catholic communities popular in Kerala." },
        { q: "Which template works best for Christian biodata?", a: "The Modern Blue and Traditional Green templates are most popular. Both include the ✝ In God We Trust greeting." },
      ]}
    />
  );
}
