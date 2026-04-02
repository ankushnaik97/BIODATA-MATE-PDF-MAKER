"use client";

import { BiodataForm } from "@/lib/types";
import { getDecoration } from "@/components/TemplateDecorations";

interface Props {
  data: BiodataForm;
}

const fontMap: Record<string, string> = {
  default: "inherit",
  serif: "'Noto Serif', Georgia, serif",
  elegant: "'Playfair Display', Georgia, serif",
  modern: "'Poppins', Arial, sans-serif",
  classic: "'Lora', Georgia, serif",
  cursive: "'Dancing Script', cursive",
};

export const fontOptions = [
  { id: "default", name: "Default", desc: "Clean sans-serif", sample: "sans-serif" },
  { id: "serif", name: "Noto Serif", desc: "Traditional serif", sample: "'Noto Serif', serif" },
  { id: "elegant", name: "Playfair Display", desc: "Elegant decorative", sample: "'Playfair Display', serif" },
  { id: "modern", name: "Poppins", desc: "Modern & clean", sample: "'Poppins', sans-serif" },
  { id: "classic", name: "Lora", desc: "Classic book style", sample: "'Lora', serif" },
  { id: "cursive", name: "Dancing Script", desc: "Handwritten cursive", sample: "'Dancing Script', cursive" },
];

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

/* ─── Template definitions ─── */
export interface TemplateTheme {
  id: string;
  name: string;
  desc: string;
  category: string;
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  headerBg: string;
  borderColor: string;
  textDark: string;
  textMuted: string;
  borderStyle: "double" | "solid" | "dashed" | "ridge" | "groove" | "inset";
  cornerDecor: string;       // Unicode corner ornaments
  divider: string;           // Unicode divider between sections
  headerDecorLeft: string;   // Decorations around header
  headerDecorRight: string;
  sectionIcon: string;       // Small icon before section title
  footerDecor: string;       // Decorative footer element
}

export const templateList: TemplateTheme[] = [
  // ── FLORAL ──
  {
    id: "floral-rose", name: "Floral Rose", desc: "Romantic rose petals with delicate pink borders", category: "Floral",
    primary: "#be185d", secondary: "#db2777", accent: "#f472b6", bg: "#fdf2f8",
    headerBg: "#be185d", borderColor: "#db2777", textDark: "#4a0525", textMuted: "#9d4070",
    borderStyle: "double", cornerDecor: "🌹", divider: "✿ ✿ ✿",
    headerDecorLeft: "🌹", headerDecorRight: "🌹", sectionIcon: "❀", footerDecor: "⊱✿⊰",
  },
  {
    id: "floral-marigold", name: "Marigold Garden", desc: "Auspicious marigold flowers — perfect for Indian weddings", category: "Floral",
    primary: "#b45309", secondary: "#d97706", accent: "#fbbf24", bg: "#fffbeb",
    headerBg: "#b45309", borderColor: "#d97706", textDark: "#78350f", textMuted: "#92400e",
    borderStyle: "double", cornerDecor: "🌼", divider: "❁ ❁ ❁",
    headerDecorLeft: "🌼", headerDecorRight: "🌼", sectionIcon: "✾", footerDecor: "❁⊱❁⊱❁",
  },
  {
    id: "floral-lotus", name: "Sacred Lotus", desc: "Pure lotus motifs for spiritual & elegant biodatas", category: "Floral",
    primary: "#be185d", secondary: "#ec4899", accent: "#f9a8d4", bg: "#fdf2f8",
    headerBg: "#9d174d", borderColor: "#ec4899", textDark: "#500724", textMuted: "#831843",
    borderStyle: "ridge", cornerDecor: "🪷", divider: "☙ ❦ ❧",
    headerDecorLeft: "🪷", headerDecorRight: "🪷", sectionIcon: "❃", footerDecor: "🪷⊱✿⊱🪷",
  },
  {
    id: "floral-jasmine", name: "Jasmine White", desc: "Fresh jasmine garland style — pure & white", category: "Floral",
    primary: "#166534", secondary: "#15803d", accent: "#86efac", bg: "#f0fdf4",
    headerBg: "#14532d", borderColor: "#15803d", textDark: "#052e16", textMuted: "#166534",
    borderStyle: "double", cornerDecor: "❀", divider: "✿ ❀ ✿",
    headerDecorLeft: "❀", headerDecorRight: "❀", sectionIcon: "✿", footerDecor: "❀⊱✿⊱❀",
  },
  {
    id: "floral-sunflower", name: "Sunflower Bright", desc: "Cheerful sunflowers for a lively biodata", category: "Floral",
    primary: "#a16207", secondary: "#ca8a04", accent: "#facc15", bg: "#fefce8",
    headerBg: "#854d0e", borderColor: "#ca8a04", textDark: "#713f12", textMuted: "#a16207",
    borderStyle: "solid", cornerDecor: "🌻", divider: "✦ ✦ ✦",
    headerDecorLeft: "🌻", headerDecorRight: "🌻", sectionIcon: "✵", footerDecor: "🌻✦🌻",
  },
  // ── ROYAL / ORNAMENTAL ──
  {
    id: "royal-gold", name: "Royal Gold", desc: "Ornate golden borders — regal & luxurious", category: "Royal",
    primary: "#8B6914", secondary: "#b8860b", accent: "#d4a843", bg: "#fef9f0",
    headerBg: "#8B6914", borderColor: "#b8860b", textDark: "#3d2e0a", textMuted: "#6b5c3e",
    borderStyle: "double", cornerDecor: "❖", divider: "◈ ◆ ◈",
    headerDecorLeft: "꧁", headerDecorRight: "꧂", sectionIcon: "◆", footerDecor: "꧁◈◆◈꧂",
  },
  {
    id: "royal-red", name: "Royal Crimson", desc: "Deep crimson with golden accents — grand wedding vibes", category: "Royal",
    primary: "#9B1B30", secondary: "#dc2626", accent: "#f87171", bg: "#fef2f2",
    headerBg: "#9B1B30", borderColor: "#dc2626", textDark: "#450a0a", textMuted: "#7f1d1d",
    borderStyle: "ridge", cornerDecor: "♛", divider: "✧ ♛ ✧",
    headerDecorLeft: "꧁", headerDecorRight: "꧂", sectionIcon: "❖", footerDecor: "꧁♛꧂",
  },
  {
    id: "royal-purple", name: "Royal Purple", desc: "Majestic purple with crown ornaments", category: "Royal",
    primary: "#6b21a8", secondary: "#7e22ce", accent: "#c084fc", bg: "#faf5ff",
    headerBg: "#581c87", borderColor: "#7e22ce", textDark: "#3b0764", textMuted: "#6b21a8",
    borderStyle: "ridge", cornerDecor: "♔", divider: "✦ ♔ ✦",
    headerDecorLeft: "꧁", headerDecorRight: "꧂", sectionIcon: "✦", footerDecor: "꧁✦♔✦꧂",
  },
  {
    id: "royal-maroon", name: "Maroon Heritage", desc: "Rich maroon tones with heritage feel", category: "Royal",
    primary: "#7f1d1d", secondary: "#991b1b", accent: "#dc2626", bg: "#fef2f2",
    headerBg: "#7f1d1d", borderColor: "#991b1b", textDark: "#450a0a", textMuted: "#7f4040",
    borderStyle: "double", cornerDecor: "❋", divider: "❈ ❋ ❈",
    headerDecorLeft: "꧁", headerDecorRight: "꧂", sectionIcon: "❈", footerDecor: "꧁❈❋❈꧂",
  },
  // ── ELEGANT ──
  {
    id: "elegant-ivory", name: "Ivory Elegance", desc: "Subtle cream with refined ornaments", category: "Elegant",
    primary: "#8b7355", secondary: "#a0896b", accent: "#c4b28f", bg: "#fefcf3",
    headerBg: "#8b7355", borderColor: "#a0896b", textDark: "#5c4a35", textMuted: "#7a6b55",
    borderStyle: "double", cornerDecor: "✤", divider: "─ ✤ ─",
    headerDecorLeft: "✤", headerDecorRight: "✤", sectionIcon: "✧", footerDecor: "✤─────✤",
  },
  {
    id: "elegant-rose-gold", name: "Rose Gold Blush", desc: "Soft rose-gold tones — romantic & modern", category: "Elegant",
    primary: "#b76e79", secondary: "#c9929b", accent: "#e8c4c8", bg: "#fdf2f4",
    headerBg: "#b76e79", borderColor: "#c9929b", textDark: "#5c2d35", textMuted: "#8b5e65",
    borderStyle: "solid", cornerDecor: "◇", divider: "─ ◇ ─",
    headerDecorLeft: "❦", headerDecorRight: "❦", sectionIcon: "◇", footerDecor: "❦─◇─❦",
  },
  {
    id: "elegant-navy", name: "Navy Prestige", desc: "Distinguished dark navy — formal & classy", category: "Elegant",
    primary: "#1e3a5f", secondary: "#1e40af", accent: "#60a5fa", bg: "#f0f4fa",
    headerBg: "#1e3a5f", borderColor: "#1e40af", textDark: "#0f172a", textMuted: "#475569",
    borderStyle: "double", cornerDecor: "⟐", divider: "─ ⟐ ─",
    headerDecorLeft: "✦", headerDecorRight: "✦", sectionIcon: "▸", footerDecor: "✦─⟐─✦",
  },
  {
    id: "elegant-emerald", name: "Emerald Grace", desc: "Deep emerald green — rich & premium feel", category: "Elegant",
    primary: "#065f46", secondary: "#059669", accent: "#6ee7b7", bg: "#ecfdf5",
    headerBg: "#065f46", borderColor: "#059669", textDark: "#064e3b", textMuted: "#4d7c6f",
    borderStyle: "groove", cornerDecor: "✿", divider: "─ ✿ ─",
    headerDecorLeft: "☘", headerDecorRight: "☘", sectionIcon: "✧", footerDecor: "☘─✿─☘",
  },
  // ── MODERN ──
  {
    id: "modern-blue", name: "Modern Ocean", desc: "Clean lines, blue tones — professional & sharp", category: "Modern",
    primary: "#1e40af", secondary: "#2563eb", accent: "#93c5fd", bg: "#eff6ff",
    headerBg: "#1e40af", borderColor: "#2563eb", textDark: "#1e3a5f", textMuted: "#475569",
    borderStyle: "solid", cornerDecor: "◆", divider: "——— ◆ ———",
    headerDecorLeft: "◆", headerDecorRight: "◆", sectionIcon: "▹", footerDecor: "◆───◆",
  },
  {
    id: "modern-teal", name: "Teal Breeze", desc: "Cool teal — calm, refreshing & trendy", category: "Modern",
    primary: "#0f766e", secondary: "#14b8a6", accent: "#5eead4", bg: "#f0fdfa",
    headerBg: "#0f766e", borderColor: "#14b8a6", textDark: "#134e4a", textMuted: "#4d8b84",
    borderStyle: "solid", cornerDecor: "◈", divider: "——— ◈ ———",
    headerDecorLeft: "◈", headerDecorRight: "◈", sectionIcon: "▹", footerDecor: "◈───◈",
  },
  {
    id: "modern-slate", name: "Slate Minimal", desc: "Neutral slate — ultra-clean & minimalist", category: "Modern",
    primary: "#334155", secondary: "#475569", accent: "#94a3b8", bg: "#f8fafc",
    headerBg: "#334155", borderColor: "#475569", textDark: "#0f172a", textMuted: "#64748b",
    borderStyle: "solid", cornerDecor: "●", divider: "─── ● ───",
    headerDecorLeft: "●", headerDecorRight: "●", sectionIcon: "▸", footerDecor: "●─────●",
  },
  {
    id: "modern-coral", name: "Coral Pop", desc: "Vibrant coral — energetic & lively", category: "Modern",
    primary: "#c2410c", secondary: "#ea580c", accent: "#fdba74", bg: "#fff7ed",
    headerBg: "#c2410c", borderColor: "#ea580c", textDark: "#7c2d12", textMuted: "#9a5a3a",
    borderStyle: "solid", cornerDecor: "✦", divider: "——— ✦ ———",
    headerDecorLeft: "✦", headerDecorRight: "✦", sectionIcon: "▹", footerDecor: "✦───✦",
  },
  // ── TRADITIONAL ──
  {
    id: "traditional-green", name: "Auspicious Green", desc: "Traditional green — suitable for all religions", category: "Traditional",
    primary: "#166534", secondary: "#16a34a", accent: "#86efac", bg: "#f0fdf4",
    headerBg: "#166534", borderColor: "#16a34a", textDark: "#14532d", textMuted: "#4d7c5e",
    borderStyle: "double", cornerDecor: "❊", divider: "❊ ✿ ❊",
    headerDecorLeft: "☸", headerDecorRight: "☸", sectionIcon: "❊", footerDecor: "☸❊✿❊☸",
  },
  {
    id: "traditional-saffron", name: "Saffron Sacred", desc: "Deep saffron — warm Hindu wedding vibes", category: "Traditional",
    primary: "#b34200", secondary: "#dc5714", accent: "#fb923c", bg: "#fff7ed",
    headerBg: "#b34200", borderColor: "#dc5714", textDark: "#7c2d12", textMuted: "#9a6030",
    borderStyle: "ridge", cornerDecor: "☸", divider: "❉ ☸ ❉",
    headerDecorLeft: "☸", headerDecorRight: "☸", sectionIcon: "❉", footerDecor: "☸❉⊱❉☸",
  },
  {
    id: "traditional-copper", name: "Copper Earth", desc: "Warm copper tones — earthy & grounded", category: "Traditional",
    primary: "#92400e", secondary: "#b45309", accent: "#fbbf24", bg: "#fffbeb",
    headerBg: "#92400e", borderColor: "#b45309", textDark: "#78350f", textMuted: "#8a6630",
    borderStyle: "groove", cornerDecor: "✤", divider: "✤ ✿ ✤",
    headerDecorLeft: "✤", headerDecorRight: "✤", sectionIcon: "✤", footerDecor: "✤⊱✿⊱✤",
  },
  // ── LUXURY ──
  {
    id: "luxury-burgundy", name: "Burgundy Velvet", desc: "Wine-toned velvet feel — pure luxury", category: "Luxury",
    primary: "#6b2142", secondary: "#8b3a5e", accent: "#e879a8", bg: "#fdf2f8",
    headerBg: "#6b2142", borderColor: "#8b3a5e", textDark: "#4a0e2e", textMuted: "#7a4060",
    borderStyle: "ridge", cornerDecor: "❧", divider: "❧ ❦ ❧",
    headerDecorLeft: "꧁❧", headerDecorRight: "❧꧂", sectionIcon: "❧", footerDecor: "꧁❧❦❧꧂",
  },
  {
    id: "luxury-midnight", name: "Midnight Noir", desc: "Dramatic dark tones — bold & sophisticated", category: "Luxury",
    primary: "#1a1a2e", secondary: "#16213e", accent: "#4a5690", bg: "#f0f1f5",
    headerBg: "#1a1a2e", borderColor: "#16213e", textDark: "#0f0f1a", textMuted: "#4a4a60",
    borderStyle: "double", cornerDecor: "★", divider: "★ ✦ ★",
    headerDecorLeft: "꧁★", headerDecorRight: "★꧂", sectionIcon: "✦", footerDecor: "꧁★✦★꧂",
  },
  {
    id: "luxury-lavender", name: "Lavender Silk", desc: "Gentle purple silk feel — dreamy & elegant", category: "Luxury",
    primary: "#7c3aed", secondary: "#8b5cf6", accent: "#c4b5fd", bg: "#f5f3ff",
    headerBg: "#6d28d9", borderColor: "#8b5cf6", textDark: "#3b1f7a", textMuted: "#6d5a8f",
    borderStyle: "ridge", cornerDecor: "❋", divider: "❋ ✿ ❋",
    headerDecorLeft: "꧁❋", headerDecorRight: "❋꧂", sectionIcon: "❋", footerDecor: "꧁❋✿❋꧂",
  },
  {
    id: "luxury-plum", name: "Plum Luxe", desc: "Deep plum tones — unique & glamorous", category: "Luxury",
    primary: "#701a75", secondary: "#86198f", accent: "#d946ef", bg: "#fdf4ff",
    headerBg: "#701a75", borderColor: "#86198f", textDark: "#4a044e", textMuted: "#804085",
    borderStyle: "double", cornerDecor: "✾", divider: "✾ ❋ ✾",
    headerDecorLeft: "꧁✾", headerDecorRight: "✾꧂", sectionIcon: "✾", footerDecor: "꧁✾❋✾꧂",
  },
];

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
