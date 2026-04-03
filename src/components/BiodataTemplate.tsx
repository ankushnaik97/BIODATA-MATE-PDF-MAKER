"use client";

import { BiodataForm } from "@/lib/types";
import { getDecoration } from "@/components/TemplateDecorations";
import { TemplateTheme, templateList, fontOptions, fontMap } from "@/lib/templates";

// Re-export for backward compatibility
export type { TemplateTheme };
export { templateList, fontOptions, fontMap };

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

const themeMap: Record<string, TemplateTheme> = {};
templateList.forEach(t => { themeMap[t.id] = t; });

/* ─── Components ─── */

function Section({ title, theme, children }: { title: string; theme: TemplateTheme; children: React.ReactNode }) {
  return (
    <div className="mb-2.5">
      <div className="flex items-center gap-1.5 mb-1">
        <span style={{ color: theme.accent }} className="text-xs">{theme.sectionIcon}</span>
        <h3
          style={{ color: theme.primary }}
          className="text-[11px] font-bold uppercase tracking-wider"
        >
          {title}
        </h3>
      </div>
      <div style={{ borderTopColor: theme.accent, borderTopWidth: 1 }} className="pt-1 space-y-0.5">
        {children}
      </div>
    </div>
  );
}

function Row({ label, value, theme }: { label: string; value: string | undefined; theme: TemplateTheme }) {
  if (!value) return null;
  return (
    <div className="flex text-[11px] leading-tight">
      <span style={{ color: theme.textMuted }} className="w-[150px] flex-shrink-0 font-medium">{label}</span>
      <span style={{ color: theme.textDark }} className="font-medium">: {value}</span>
    </div>
  );
}

function getReligiousHeadline(religion: string): string {
  switch (religion) {
    case "Hindu": return "॥ श्री गणेशाय नमः ॥";
    case "Muslim": return "بسم الله الرحمن الرحيم";
    case "Sikh": return "ੴ ਸਤਿ ਨਾਮੁ";
    case "Christian": return "✝ In God We Trust ✝";
    case "Jain": return "॥ णमो अरिहंताणं ॥";
    case "Buddhist": return "☸ Buddham Sharanam Gacchami ☸";
    default: return "❧ Marriage Biodata ❧";
  }
}

export default function BiodataTemplate({ data }: Props) {
  const theme = themeMap[data.templateId] || templateList[0];
  const showHeadline = data.showReligiousHeadline !== false;
  const fontFamily = fontMap[data.fontFamily] || fontMap.default;

  return (
    <div
      id="biodata-content"
      className="biodata-template w-[794px] mx-auto relative"
      style={{ backgroundColor: theme.bg, height: "1123px", overflow: "hidden", fontFamily }}
    >
      {/* Corner decorations */}
      <div className="absolute top-3 left-4 text-xl" style={{ color: theme.accent }}>{theme.cornerDecor}</div>
      <div className="absolute top-3 right-4 text-xl" style={{ color: theme.accent }}>{theme.cornerDecor}</div>
      <div className="absolute bottom-3 left-4 text-xl" style={{ color: theme.accent }}>{theme.cornerDecor}</div>
      <div className="absolute bottom-3 right-4 text-xl" style={{ color: theme.accent }}>{theme.cornerDecor}</div>

      {/* Outer ornate border */}
      <div
        className="mx-5 my-4 p-1"
        style={{ border: `3px ${theme.borderStyle} ${theme.borderColor}`, height: "calc(100% - 32px)" }}
      >
        {/* Inner border */}
        <div
          className="p-5 flex flex-col"
          style={{ border: `1px solid ${theme.accent}`, height: "100%" }}
        >
          {/* Decorative top divider */}
          <div className="text-center text-xs mb-1 tracking-[0.3em]" style={{ color: theme.accent }}>
            {theme.divider}
          </div>

          {/* Header */}
          <div className="text-center mb-3 flex-shrink-0">
            {showHeadline && (
              <div
                className="inline-block px-6 py-1.5 rounded-lg mb-1.5"
                style={{ backgroundColor: theme.headerBg }}
              >
                <h1 className="text-lg font-bold text-white tracking-wide">
                  <span className="mr-2">{theme.headerDecorLeft}</span>
                  {getReligiousHeadline(data.religion)}
                  <span className="ml-2">{theme.headerDecorRight}</span>
                </h1>
              </div>
            )}
            <h2 className="text-base font-bold tracking-[0.2em]" style={{ color: theme.primary }}>
              BIODATA
            </h2>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className="h-[1px] w-16" style={{ backgroundColor: theme.accent }} />
              <span className="text-xs" style={{ color: theme.accent }}>{theme.sectionIcon}</span>
              <div className="h-[1px] w-16" style={{ backgroundColor: theme.accent }} />
            </div>
          </div>

          <div className="flex gap-5 flex-1 min-h-0">
            {/* Left: Content */}
            <div className="flex-1 overflow-hidden">
              <Section title="Personal Details" theme={theme}>
                <Row label="Full Name" value={data.fullName} theme={theme} />
                <Row label="Date of Birth" value={data.dateOfBirth ? `${formatDate(data.dateOfBirth)} (${calculateAge(data.dateOfBirth)})` : ""} theme={theme} />
                {data.timeOfBirth && <Row label="Time of Birth" value={data.timeOfBirth} theme={theme} />}
                {data.placeOfBirth && <Row label="Place of Birth" value={data.placeOfBirth} theme={theme} />}
                <Row label="Gender" value={data.gender} theme={theme} />
                <Row label="Marital Status" value={data.maritalStatus} theme={theme} />
                <Row label="Height" value={data.height} theme={theme} />
                {data.weight && <Row label="Weight" value={`${data.weight} kg`} theme={theme} />}
                <Row label="Body Type" value={data.bodyType} theme={theme} />
                <Row label="Complexion" value={data.complexion} theme={theme} />
                <Row label="Blood Group" value={data.bloodGroup} theme={theme} />
              </Section>

              <Section title="Religion & Community" theme={theme}>
                <Row label="Religion" value={data.religion} theme={theme} />
                <Row label="Caste" value={data.caste} theme={theme} />
                {data.subCaste && <Row label="Sub Caste" value={data.subCaste} theme={theme} />}
                {data.gotra && <Row label="Gotra" value={data.gotra} theme={theme} />}
                <Row label="Mother Tongue" value={data.motherTongue} theme={theme} />
                {data.languages.length > 0 && <Row label="Languages" value={data.languages.join(", ")} theme={theme} />}
                {data.manglik && <Row label="Manglik" value={data.manglik} theme={theme} />}
                {data.star && <Row label="Nakshatra" value={data.star} theme={theme} />}
                {data.raasi && <Row label="Raasi" value={data.raasi} theme={theme} />}
                {data.horoscope && <Row label="Horoscope" value={data.horoscope} theme={theme} />}
              </Section>

              <Section title="Education & Career" theme={theme}>
                <Row label="Education" value={data.education} theme={theme} />
                {data.educationDetail && <Row label="Specialization" value={data.educationDetail} theme={theme} />}
                {data.college && <Row label="College" value={data.college} theme={theme} />}
                <Row label="Occupation" value={data.occupation} theme={theme} />
                {data.workingAs && <Row label="Designation" value={data.workingAs} theme={theme} />}
                {data.companyName && <Row label="Company" value={data.companyName} theme={theme} />}
                <Row label="Annual Income" value={data.annualIncome} theme={theme} />
                {data.workCity && <Row label="Work Location" value={`${data.workCity}${data.workCountry ? `, ${data.workCountry}` : ""}`} theme={theme} />}
              </Section>

              <Section title="Family Details" theme={theme}>
                <Row label="Father's Name" value={data.fatherName} theme={theme} />
                <Row label="Father's Occupation" value={data.fatherOccupation} theme={theme} />
                <Row label="Mother's Name" value={data.motherName} theme={theme} />
                <Row label="Mother's Occupation" value={data.motherOccupation} theme={theme} />
                {data.brothers && <Row label="Brothers" value={`${data.brothers} (${data.brothersMarried || '0'} married)`} theme={theme} />}
                {data.sisters && <Row label="Sisters" value={`${data.sisters} (${data.sistersMarried || '0'} married)`} theme={theme} />}
                <Row label="Family Type" value={data.familyType} theme={theme} />
                <Row label="Family Values" value={data.familyValues} theme={theme} />
                <Row label="Family Status" value={data.familyStatus} theme={theme} />
                <Row label="Native Place" value={data.nativePlace} theme={theme} />
              </Section>

              <Section title="Lifestyle" theme={theme}>
                <Row label="Diet" value={data.diet} theme={theme} />
                <Row label="Smoking" value={data.smoking} theme={theme} />
                <Row label="Drinking" value={data.drinking} theme={theme} />
                {data.hobbies.length > 0 && <Row label="Hobbies" value={data.hobbies.join(", ")} theme={theme} />}
                {data.interests.length > 0 && <Row label="Interests" value={data.interests.join(", ")} theme={theme} />}
              </Section>

              {data.aboutMe && (
                <Section title="About Me" theme={theme}>
                  <p className="text-[11px] leading-tight" style={{ color: theme.textDark }}>{data.aboutMe}</p>
                </Section>
              )}

              <Section title="Partner Preferences" theme={theme}>
                {(data.partnerAgeFrom || data.partnerAgeTo) && (
                  <Row label="Age" value={`${data.partnerAgeFrom || '?'} - ${data.partnerAgeTo || '?'} years`} theme={theme} />
                )}
                {(data.partnerHeightFrom || data.partnerHeightTo) && (
                  <Row label="Height" value={`${data.partnerHeightFrom || '?'} to ${data.partnerHeightTo || '?'}`} theme={theme} />
                )}
                <Row label="Education" value={data.partnerEducation} theme={theme} />
                <Row label="Occupation" value={data.partnerOccupation} theme={theme} />
                <Row label="Income" value={data.partnerIncome} theme={theme} />
                <Row label="Diet" value={data.partnerDiet} theme={theme} />
                <Row label="Religion" value={data.partnerReligion} theme={theme} />
                <Row label="Caste" value={data.partnerCaste} theme={theme} />
                <Row label="Location" value={data.partnerCity ? `${data.partnerCity}${data.partnerCountry ? `, ${data.partnerCountry}` : ""}` : data.partnerCountry} theme={theme} />
                {data.partnerManglik && <Row label="Manglik" value={data.partnerManglik} theme={theme} />}
                {data.partnerExpectations && (
                  <p className="text-[11px] mt-0.5 italic" style={{ color: theme.textMuted }}>{data.partnerExpectations}</p>
                )}
              </Section>

              <Section title="Contact Details" theme={theme}>
                {data.address && <Row label="Address" value={`${data.address}${data.city ? `, ${data.city}` : ""}${data.state ? `, ${data.state}` : ""} ${data.pincode || ""}`} theme={theme} />}
                <Row label="Phone" value={data.phone} theme={theme} />
                <Row label="Email" value={data.email} theme={theme} />
                {data.contactPerson && <Row label="Contact Person" value={`${data.contactPerson}${data.contactRelation ? ` (${data.contactRelation})` : ""}`} theme={theme} />}
              </Section>
            </div>

            {/* Right: Photo */}
            {data.profilePhoto && (
              <div className="w-36 flex-shrink-0">
                <div
                  className="w-36 h-44 rounded-lg overflow-hidden border-2 flex items-center justify-center"
                  style={{ borderColor: theme.accent, backgroundColor: theme.bg }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.profilePhoto}
                    alt="Profile"
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }}
                  />
                </div>
                {/* Photo frame decoration */}
                <div className="text-center mt-1 text-xs" style={{ color: theme.accent }}>
                  {theme.cornerDecor}
                </div>
              </div>
            )}
          </div>

          {/* Footer decoration */}
          <div className="text-center mt-auto pt-2 flex-shrink-0" style={{ borderTopColor: theme.accent, borderTopWidth: 1 }}>
            <div className="text-xs tracking-[0.2em] mb-0.5" style={{ color: theme.accent }}>{theme.footerDecor}</div>
            <p className="text-[9px]" style={{ color: theme.textMuted }}>Created with BiodataMate.com</p>
          </div>
        </div>
      </div>

      {/* SVG watermark decorations — rendered ON TOP of content with pointer-events:none */}
      <div className="absolute inset-0 z-10" style={{ pointerEvents: "none" }}>
        {getDecoration(theme.category, theme.primary)}
      </div>
    </div>
  );
}
