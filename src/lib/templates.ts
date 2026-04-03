/* ─── Template theme definitions — shared between server & client components ─── */

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
  cornerDecor: string;
  divider: string;
  headerDecorLeft: string;
  headerDecorRight: string;
  sectionIcon: string;
  footerDecor: string;
}

export const fontMap: Record<string, string> = {
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
