"use client";

import { TemplateTheme } from "@/components/BiodataTemplate";
import { getDecoration } from "@/components/TemplateDecorations";

const fontMap: Record<string, string> = {
  default: "inherit",
  serif: "'Noto Serif', Georgia, serif",
  elegant: "'Playfair Display', Georgia, serif",
  modern: "'Poppins', Arial, sans-serif",
  classic: "'Lora', Georgia, serif",
  cursive: "'Dancing Script', cursive",
};

/** A realistic mini biodata preview showing actual sample data in the template's real theme */
export default function MiniTemplatePreview({ tpl, size = "md", fontId }: { tpl: TemplateTheme; size?: "sm" | "md"; fontId?: string }) {
  const isSmall = size === "sm";
  const fontFamily = fontId ? (fontMap[fontId] || "inherit") : "inherit";

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ backgroundColor: tpl.bg, fontFamily }}
    >
      {/* Corner decorations */}
      <span className={`absolute top-1 left-1.5 ${isSmall ? "text-[8px]" : "text-xs"}`} style={{ color: tpl.accent }}>{tpl.cornerDecor}</span>
      <span className={`absolute top-1 right-1.5 ${isSmall ? "text-[8px]" : "text-xs"}`} style={{ color: tpl.accent }}>{tpl.cornerDecor}</span>
      <span className={`absolute bottom-1 left-1.5 ${isSmall ? "text-[8px]" : "text-xs"}`} style={{ color: tpl.accent }}>{tpl.cornerDecor}</span>
      <span className={`absolute bottom-1 right-1.5 ${isSmall ? "text-[8px]" : "text-xs"}`} style={{ color: tpl.accent }}>{tpl.cornerDecor}</span>

      {/* Inner border */}
      <div
        className={`mx-2 my-1.5 h-[calc(100%-12px)] ${isSmall ? "p-1.5" : "p-2.5"} flex flex-col`}
        style={{ border: `2px ${tpl.borderStyle} ${tpl.borderColor}` }}
      >
        {/* Top divider */}
        <div className={`text-center ${isSmall ? "text-[5px] mb-0.5" : "text-[7px] mb-1"} tracking-[0.2em]`} style={{ color: tpl.accent }}>
          {tpl.divider}
        </div>

        {/* Header */}
        <div className="text-center flex-shrink-0">
          <div
            className={`inline-block ${isSmall ? "px-2 py-[1px] text-[5px]" : "px-3 py-0.5 text-[7px]"} rounded font-bold text-white`}
            style={{ backgroundColor: tpl.headerBg }}
          >
            {tpl.headerDecorLeft} ॥ श्री गणेशाय नमः ॥ {tpl.headerDecorRight}
          </div>
          <div className={`font-bold tracking-[0.15em] ${isSmall ? "text-[5px]" : "text-[8px] mt-0.5"}`} style={{ color: tpl.primary }}>
            BIODATA
          </div>
          <div className="flex items-center justify-center gap-1">
            <div className={`${isSmall ? "w-5" : "w-8"} h-[0.5px]`} style={{ backgroundColor: tpl.accent }} />
            <span className={`${isSmall ? "text-[4px]" : "text-[6px]"}`} style={{ color: tpl.accent }}>{tpl.sectionIcon}</span>
            <div className={`${isSmall ? "w-5" : "w-8"} h-[0.5px]`} style={{ backgroundColor: tpl.accent }} />
          </div>
        </div>

        {/* Content area */}
        <div className={`flex ${isSmall ? "gap-1.5 mt-1" : "gap-2 mt-1.5"} flex-1 min-h-0 overflow-hidden`}>
          {/* Left: Real sample data */}
          <div className="flex-1 overflow-hidden">
            {/* Personal Details */}
            <SampleSection title="Personal Details" icon={tpl.sectionIcon} tpl={tpl} isSmall={isSmall}>
              <SampleRow label="Full Name" value="Ankush Kumar Sharma" tpl={tpl} isSmall={isSmall} />
              <SampleRow label="Date of Birth" value="15 Jan 1996 (28 yrs)" tpl={tpl} isSmall={isSmall} />
              <SampleRow label="Height" value={`5'8" (173 cm)`} tpl={tpl} isSmall={isSmall} />
              <SampleRow label="Marital Status" value="Never Married" tpl={tpl} isSmall={isSmall} />
              {!isSmall && <SampleRow label="Complexion" value="Fair" tpl={tpl} isSmall={isSmall} />}
            </SampleSection>

            {/* Religion */}
            <SampleSection title="Religion & Community" icon={tpl.sectionIcon} tpl={tpl} isSmall={isSmall}>
              <SampleRow label="Religion" value="Hindu" tpl={tpl} isSmall={isSmall} />
              <SampleRow label="Caste" value="Brahmin" tpl={tpl} isSmall={isSmall} />
              {!isSmall && <SampleRow label="Mother Tongue" value="Hindi" tpl={tpl} isSmall={isSmall} />}
            </SampleSection>

            {/* Education */}
            <SampleSection title="Education & Career" icon={tpl.sectionIcon} tpl={tpl} isSmall={isSmall}>
              <SampleRow label="Education" value="B.Tech / B.E." tpl={tpl} isSmall={isSmall} />
              <SampleRow label="Occupation" value="IT Professional" tpl={tpl} isSmall={isSmall} />
              {!isSmall && <SampleRow label="Income" value="10-15 Lakh" tpl={tpl} isSmall={isSmall} />}
            </SampleSection>

            {/* Family */}
            {!isSmall && (
              <SampleSection title="Family Details" icon={tpl.sectionIcon} tpl={tpl} isSmall={isSmall}>
                <SampleRow label="Father" value="Mr. Rajesh Sharma" tpl={tpl} isSmall={isSmall} />
                <SampleRow label="Mother" value="Mrs. Sunita Sharma" tpl={tpl} isSmall={isSmall} />
              </SampleSection>
            )}

            {/* Contact */}
            {!isSmall && (
              <SampleSection title="Contact" icon={tpl.sectionIcon} tpl={tpl} isSmall={isSmall}>
                <SampleRow label="Phone" value="+91 98765 43210" tpl={tpl} isSmall={isSmall} />
              </SampleSection>
            )}
          </div>

          {/* Right: Photo placeholder */}
          <div className={`flex-shrink-0 ${isSmall ? "w-6" : "w-9"}`}>
            <div
              className={`${isSmall ? "w-6 h-8" : "w-9 h-12"} rounded border flex items-center justify-center`}
              style={{ borderColor: tpl.accent, backgroundColor: `${tpl.accent}18` }}
            >
              <svg
                viewBox="0 0 24 24"
                className={`${isSmall ? "w-3 h-3" : "w-4 h-4"}`}
                style={{ color: `${tpl.accent}80` }}
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-auto pt-0.5 flex-shrink-0" style={{ borderTopWidth: 1, borderTopColor: `${tpl.accent}50` }}>
          <div className={`tracking-[0.15em] ${isSmall ? "text-[4px]" : "text-[6px]"}`} style={{ color: tpl.accent }}>{tpl.footerDecor}</div>
        </div>
      </div>

      {/* SVG watermark decorations rendered ON TOP of content */}
      <div className={`${isSmall ? "scale-[0.25] origin-top-left" : "scale-[0.35] origin-top-left"} z-10`} style={{ position: "absolute", top: 0, left: 0, width: "794px", height: "1123px", pointerEvents: "none" }}>
        {getDecoration(tpl.category, tpl.primary)}
      </div>
    </div>
  );
}

function SampleSection({ title, icon, tpl, isSmall, children }: {
  title: string; icon: string; tpl: TemplateTheme; isSmall: boolean; children: React.ReactNode;
}) {
  return (
    <div className={isSmall ? "mb-1" : "mb-1.5"}>
      <div className="flex items-center gap-0.5">
        <span className={`${isSmall ? "text-[4px]" : "text-[5px]"}`} style={{ color: tpl.accent }}>{icon}</span>
        <span className={`font-bold uppercase tracking-wider ${isSmall ? "text-[4px]" : "text-[5.5px]"}`} style={{ color: tpl.primary }}>{title}</span>
      </div>
      <div style={{ borderTopWidth: 1, borderTopColor: `${tpl.accent}40` }} className="pt-[1px]">
        {children}
      </div>
    </div>
  );
}

function SampleRow({ label, value, tpl, isSmall }: { label: string; value: string; tpl: TemplateTheme; isSmall: boolean }) {
  return (
    <div className={`flex ${isSmall ? "text-[3.5px]" : "text-[5px]"} leading-tight`}>
      <span style={{ color: tpl.textMuted }} className={`${isSmall ? "w-10" : "w-16"} flex-shrink-0`}>{label}</span>
      <span style={{ color: tpl.textDark }}>: {value}</span>
    </div>
  );
}
