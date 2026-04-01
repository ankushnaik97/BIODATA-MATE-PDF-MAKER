"use client";

import { BiodataForm } from "@/lib/types";

interface Props {
  data: BiodataForm;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
}

function calculateAge(dateStr: string): string {
  if (!dateStr) return "";
  const today = new Date();
  const birth = new Date(dateStr);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return `${age} years`;
}

// Color themes
const themes: Record<string, { primary: string; secondary: string; accent: string; bg: string; headerBg: string; borderColor: string }> = {
  elegant: {
    primary: "#8B6914",
    secondary: "#b8860b",
    accent: "#d4a843",
    bg: "linear-gradient(135deg, #fef9f0 0%, #fdf2e9 100%)",
    headerBg: "linear-gradient(135deg, #8B6914, #d4a843)",
    borderColor: "#b8860b",
  },
  royal: {
    primary: "#9B1B30",
    secondary: "#dc2626",
    accent: "#e74c3c",
    bg: "linear-gradient(135deg, #fef2f2 0%, #fce7f3 100%)",
    headerBg: "linear-gradient(135deg, #9B1B30, #dc2626)",
    borderColor: "#dc2626",
  },
  modern: {
    primary: "#1e40af",
    secondary: "#2563eb",
    accent: "#3b82f6",
    bg: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
    headerBg: "linear-gradient(135deg, #1e40af, #3b82f6)",
    borderColor: "#2563eb",
  },
  traditional: {
    primary: "#166534",
    secondary: "#16a34a",
    accent: "#22c55e",
    bg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    headerBg: "linear-gradient(135deg, #166534, #16a34a)",
    borderColor: "#16a34a",
  },
};

function Section({ title, theme, children }: { title: string; theme: typeof themes.elegant; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3
        style={{ color: theme.primary, borderBottomColor: theme.accent }}
        className="text-sm font-bold uppercase tracking-wider border-b-2 pb-1 mb-2"
      >
        {title}
      </h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string | undefined }) {
  if (!value) return null;
  return (
    <div className="flex text-xs">
      <span className="text-gray-500 w-40 flex-shrink-0 font-medium">{label}</span>
      <span className="text-gray-800 font-medium">: &nbsp;{value}</span>
    </div>
  );
}

export default function BiodataTemplate({ data }: Props) {
  const theme = themes[data.templateId] || themes.elegant;

  return (
    <div
      id="biodata-content"
      className="biodata-template w-[794px] min-h-[1123px] mx-auto"
      style={{ background: theme.bg }}
    >
      {/* Outer ornate border */}
      <div
        className="m-4 p-1"
        style={{ border: `3px double ${theme.borderColor}` }}
      >
        <div
          className="p-6"
          style={{ border: `1px solid ${theme.accent}` }}
        >
          {/* Header */}
          <div className="text-center mb-6">
            <div
              className="inline-block px-8 py-3 rounded-lg mb-3"
              style={{ background: theme.headerBg }}
            >
              <h1 className="text-2xl font-bold text-white tracking-wide">
                {data.religion === "Hindu" && "॥ श्री गणेशाय नमः ॥"}
                {data.religion === "Muslim" && "بسم الله الرحمن الرحيم"}
                {data.religion === "Sikh" && "ੴ ਸਤਿ ਨਾਮੁ"}
                {data.religion === "Christian" && "✝ In God We Trust ✝"}
                {data.religion === "Jain" && "॥ णमो अरिहंताणं ॥"}
                {data.religion === "Buddhist" && "☸ Buddham Sharanam Gacchami ☸"}
                {!["Hindu", "Muslim", "Sikh", "Christian", "Jain", "Buddhist"].includes(data.religion) && "❧ Marriage Biodata ❧"}
              </h1>
            </div>
            <h2 className="text-xl font-bold" style={{ color: theme.primary }}>
              BIODATA
            </h2>
            <div
              className="w-24 h-0.5 mx-auto mt-1"
              style={{ backgroundColor: theme.accent }}
            />
          </div>

          <div className="flex gap-6">
            {/* Left: Content */}
            <div className="flex-1">
              {/* Personal */}
              <Section title="Personal Details" theme={theme}>
                <Row label="Full Name" value={data.fullName} />
                <Row label="Date of Birth" value={data.dateOfBirth ? `${formatDate(data.dateOfBirth)} (${calculateAge(data.dateOfBirth)})` : ""} />
                {data.timeOfBirth && <Row label="Time of Birth" value={data.timeOfBirth} />}
                {data.placeOfBirth && <Row label="Place of Birth" value={data.placeOfBirth} />}
                <Row label="Gender" value={data.gender} />
                <Row label="Marital Status" value={data.maritalStatus} />
                <Row label="Height" value={data.height} />
                {data.weight && <Row label="Weight" value={`${data.weight} kg`} />}
                <Row label="Body Type" value={data.bodyType} />
                <Row label="Complexion" value={data.complexion} />
                <Row label="Blood Group" value={data.bloodGroup} />
              </Section>

              {/* Religion */}
              <Section title="Religion & Community" theme={theme}>
                <Row label="Religion" value={data.religion} />
                <Row label="Caste" value={data.caste} />
                {data.subCaste && <Row label="Sub Caste" value={data.subCaste} />}
                {data.gotra && <Row label="Gotra" value={data.gotra} />}
                <Row label="Mother Tongue" value={data.motherTongue} />
                {data.languages.length > 0 && <Row label="Languages" value={data.languages.join(", ")} />}
                {data.manglik && <Row label="Manglik" value={data.manglik} />}
                {data.star && <Row label="Nakshatra" value={data.star} />}
                {data.raasi && <Row label="Raasi" value={data.raasi} />}
                {data.horoscope && <Row label="Horoscope" value={data.horoscope} />}
              </Section>

              {/* Education */}
              <Section title="Education & Career" theme={theme}>
                <Row label="Education" value={data.education} />
                {data.educationDetail && <Row label="Specialization" value={data.educationDetail} />}
                {data.college && <Row label="College" value={data.college} />}
                <Row label="Occupation" value={data.occupation} />
                {data.workingAs && <Row label="Designation" value={data.workingAs} />}
                {data.companyName && <Row label="Company" value={data.companyName} />}
                <Row label="Annual Income" value={data.annualIncome} />
                {data.workCity && <Row label="Work Location" value={`${data.workCity}${data.workCountry ? `, ${data.workCountry}` : ""}`} />}
              </Section>

              {/* Family */}
              <Section title="Family Details" theme={theme}>
                <Row label="Father's Name" value={data.fatherName} />
                <Row label="Father's Occupation" value={data.fatherOccupation} />
                <Row label="Mother's Name" value={data.motherName} />
                <Row label="Mother's Occupation" value={data.motherOccupation} />
                {data.brothers && <Row label="Brothers" value={`${data.brothers} (${data.brothersMarried || '0'} married)`} />}
                {data.sisters && <Row label="Sisters" value={`${data.sisters} (${data.sistersMarried || '0'} married)`} />}
                <Row label="Family Type" value={data.familyType} />
                <Row label="Family Values" value={data.familyValues} />
                <Row label="Family Status" value={data.familyStatus} />
                <Row label="Native Place" value={data.nativePlace} />
              </Section>

              {/* Lifestyle */}
              <Section title="Lifestyle" theme={theme}>
                <Row label="Diet" value={data.diet} />
                <Row label="Smoking" value={data.smoking} />
                <Row label="Drinking" value={data.drinking} />
                {data.hobbies.length > 0 && <Row label="Hobbies" value={data.hobbies.join(", ")} />}
                {data.interests.length > 0 && <Row label="Interests" value={data.interests.join(", ")} />}
              </Section>

              {/* About */}
              {data.aboutMe && (
                <Section title="About Me" theme={theme}>
                  <p className="text-xs text-gray-700 leading-relaxed">{data.aboutMe}</p>
                </Section>
              )}

              {/* Partner Preferences */}
              <Section title="Partner Preferences" theme={theme}>
                {(data.partnerAgeFrom || data.partnerAgeTo) && (
                  <Row label="Age" value={`${data.partnerAgeFrom || '?'} - ${data.partnerAgeTo || '?'} years`} />
                )}
                {(data.partnerHeightFrom || data.partnerHeightTo) && (
                  <Row label="Height" value={`${data.partnerHeightFrom || '?'} to ${data.partnerHeightTo || '?'}`} />
                )}
                <Row label="Education" value={data.partnerEducation} />
                <Row label="Occupation" value={data.partnerOccupation} />
                <Row label="Income" value={data.partnerIncome} />
                <Row label="Diet" value={data.partnerDiet} />
                <Row label="Religion" value={data.partnerReligion} />
                <Row label="Caste" value={data.partnerCaste} />
                <Row label="Location" value={data.partnerCity ? `${data.partnerCity}${data.partnerCountry ? `, ${data.partnerCountry}` : ""}` : data.partnerCountry} />
                {data.partnerManglik && <Row label="Manglik" value={data.partnerManglik} />}
                {data.partnerExpectations && (
                  <p className="text-xs text-gray-600 mt-1 italic">{data.partnerExpectations}</p>
                )}
              </Section>

              {/* Contact */}
              <Section title="Contact Details" theme={theme}>
                {data.address && <Row label="Address" value={`${data.address}${data.city ? `, ${data.city}` : ""}${data.state ? `, ${data.state}` : ""} ${data.pincode || ""}`} />}
                <Row label="Phone" value={data.phone} />
                <Row label="Email" value={data.email} />
                {data.contactPerson && <Row label="Contact Person" value={`${data.contactPerson}${data.contactRelation ? ` (${data.contactRelation})` : ""}`} />}
              </Section>
            </div>

            {/* Right: Photo */}
            {data.profilePhoto && (
              <div className="w-36 flex-shrink-0">
                <div
                  className="w-36 h-44 rounded-lg overflow-hidden border-2"
                  style={{ borderColor: theme.accent }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.profilePhoto}
                    alt={data.fullName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center mt-6 pt-3" style={{ borderTopColor: theme.accent, borderTopWidth: 1 }}>
            <p className="text-[10px] text-gray-400">Created with BiodataMate.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
