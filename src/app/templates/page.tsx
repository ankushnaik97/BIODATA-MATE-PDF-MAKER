"use client";

import Link from "next/link";
import { templateList } from "@/components/BiodataTemplate";
import MiniTemplatePreview from "@/components/MiniTemplatePreview";
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
              className="rounded-2xl overflow-hidden border hover:shadow-xl transition-all group bg-white"
              style={{ borderColor: `${tpl.borderColor}40` }}
            >
              {/* Real template preview */}
              <div className="h-72 border-b" style={{ borderBottomColor: `${tpl.borderColor}20` }}>
                <MiniTemplatePreview tpl={tpl} size="md" />
              </div>

              {/* Info area */}
              <div className="px-5 py-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className="inline-block px-2 py-0.5 rounded text-[10px] font-medium"
                    style={{ backgroundColor: `${tpl.primary}10`, color: tpl.primary }}
                  >
                    {tpl.category}
                  </span>
                  <span className="text-xs" style={{ color: tpl.accent }}>{tpl.cornerDecor}</span>
                </div>
                <h3 className="text-base font-bold text-gray-800">{tpl.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5 mb-3">{tpl.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    {tpl.cornerDecor} Floral / Ornamental
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    {tpl.borderStyle} borders
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    A4 Print-ready
                  </span>
                </div>

                <Link
                  href="/create"
                  className="block text-center px-4 py-2.5 rounded-full text-white text-sm font-semibold transition shadow hover:opacity-90"
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
