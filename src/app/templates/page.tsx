"use client";

import Link from "next/link";
import { templateList } from "@/components/BiodataTemplate";
import { useState } from "react";

const categories = ["All", ...Array.from(new Set(templateList.map(t => t.category)))];

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? templateList : templateList.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            24 Beautiful Biodata Templates
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Floral roses & marigolds, royal ornaments, elegant borders, modern minimalist, traditional motifs & luxury designs.
            Each template is handcrafted with unique decorative elements.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-red-500 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-red-300 hover:text-red-500"
              }`}
            >
              {cat === "All" ? `All Templates (${templateList.length})` : cat}
            </button>
          ))}
        </div>

        {/* Template grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((tpl) => (
            <div
              key={tpl.id}
              className="rounded-2xl overflow-hidden border-2 hover:shadow-xl transition-all group"
              style={{ backgroundColor: tpl.bg, borderColor: `${tpl.borderColor}50` }}
            >
              {/* Preview area */}
              <div className="p-5 relative h-56">
                {/* Corner decorations */}
                <span className="absolute top-2 left-3 text-sm" style={{ color: tpl.accent }}>{tpl.cornerDecor}</span>
                <span className="absolute top-2 right-3 text-sm" style={{ color: tpl.accent }}>{tpl.cornerDecor}</span>
                <span className="absolute bottom-2 left-3 text-sm" style={{ color: tpl.accent }}>{tpl.cornerDecor}</span>
                <span className="absolute bottom-2 right-3 text-sm" style={{ color: tpl.accent }}>{tpl.cornerDecor}</span>

                {/* Divider top */}
                <div className="text-center text-[8px] mb-1 tracking-[0.25em]" style={{ color: tpl.accent }}>
                  {tpl.divider}
                </div>

                {/* Header mock */}
                <div className="text-center mb-3">
                  <div
                    className="inline-block px-4 py-1 rounded-md text-[9px] font-bold text-white"
                    style={{ backgroundColor: tpl.headerBg }}
                  >
                    {tpl.headerDecorLeft} ॥ श्री गणेशाय नमः ॥ {tpl.headerDecorRight}
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] mt-1" style={{ color: tpl.primary }}>BIODATA</div>
                  <div className="flex items-center justify-center gap-1.5 mt-0.5">
                    <div className="h-[0.5px] w-10" style={{ backgroundColor: tpl.accent }} />
                    <span className="text-[7px]" style={{ color: tpl.accent }}>{tpl.sectionIcon}</span>
                    <div className="h-[0.5px] w-10" style={{ backgroundColor: tpl.accent }} />
                  </div>
                </div>

                {/* Content mock */}
                <div className="flex gap-3">
                  <div className="flex-1 space-y-1.5">
                    {/* Section 1 */}
                    <div className="flex items-center gap-1">
                      <span className="text-[6px]" style={{ color: tpl.accent }}>{tpl.sectionIcon}</span>
                      <div className="h-[3px] rounded-full w-16" style={{ backgroundColor: tpl.primary }} />
                    </div>
                    <div className="space-y-[2px]">
                      <div className="h-[2px] rounded-full w-full" style={{ backgroundColor: `${tpl.primary}20` }} />
                      <div className="h-[2px] rounded-full w-4/5" style={{ backgroundColor: `${tpl.primary}15` }} />
                      <div className="h-[2px] rounded-full w-3/4" style={{ backgroundColor: `${tpl.primary}20` }} />
                    </div>
                    {/* Section 2 */}
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-[6px]" style={{ color: tpl.accent }}>{tpl.sectionIcon}</span>
                      <div className="h-[3px] rounded-full w-14" style={{ backgroundColor: tpl.primary }} />
                    </div>
                    <div className="space-y-[2px]">
                      <div className="h-[2px] rounded-full w-full" style={{ backgroundColor: `${tpl.primary}15` }} />
                      <div className="h-[2px] rounded-full w-2/3" style={{ backgroundColor: `${tpl.primary}20` }} />
                    </div>
                    {/* Section 3 */}
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-[6px]" style={{ color: tpl.accent }}>{tpl.sectionIcon}</span>
                      <div className="h-[3px] rounded-full w-12" style={{ backgroundColor: tpl.primary }} />
                    </div>
                    <div className="space-y-[2px]">
                      <div className="h-[2px] rounded-full w-full" style={{ backgroundColor: `${tpl.primary}15` }} />
                      <div className="h-[2px] rounded-full w-1/2" style={{ backgroundColor: `${tpl.primary}20` }} />
                    </div>
                  </div>
                  {/* Photo mock */}
                  <div
                    className="w-10 h-14 rounded border flex-shrink-0 mt-1"
                    style={{ backgroundColor: `${tpl.accent}25`, borderColor: `${tpl.accent}60` }}
                  />
                </div>

                {/* Footer decor */}
                <div className="absolute bottom-3 left-0 right-0 text-center text-[7px] tracking-widest" style={{ color: tpl.accent }}>
                  {tpl.footerDecor}
                </div>
              </div>

              {/* Info area */}
              <div className="px-5 py-4 bg-white/60 border-t" style={{ borderTopColor: `${tpl.borderColor}30` }}>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[9px] font-medium mb-1.5" style={{ backgroundColor: `${tpl.primary}10`, color: tpl.primary }}>
                      {tpl.category}
                    </span>
                    <h3 className="text-base font-bold text-gray-800">{tpl.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{tpl.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
                  {[
                    `${tpl.cornerDecor} Decorative corners`,
                    `${tpl.borderStyle} borders`,
                    "Print-ready A4",
                  ].map((f) => (
                    <span key={f} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{f}</span>
                  ))}
                </div>
                <Link
                  href="/create"
                  className="block text-center px-4 py-2 rounded-full text-white text-sm font-semibold transition shadow hover:opacity-90"
                  style={{ backgroundColor: tpl.primary }}
                >
                  Use This Template →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">All templates include HD PDF & Image download for just ₹9 / $2</p>
          <Link
            href="/create"
            className="inline-block px-8 py-3.5 bg-red-500 hover:bg-red-600 text-white rounded-full text-lg font-bold transition shadow-lg"
          >
            Start Creating Your Biodata →
          </Link>
        </div>
      </div>
    </div>
  );
}
