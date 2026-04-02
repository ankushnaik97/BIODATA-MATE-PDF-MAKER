"use client";

import { useBiodataStore } from "@/lib/store";
import { templateList, fontOptions } from "@/components/BiodataTemplate";
import { Check } from "lucide-react";
import { useState } from "react";

const categories = ["All", ...Array.from(new Set(templateList.map(t => t.category)))];

export default function StepTemplate() {
  const { biodata, setBiodata } = useBiodataStore();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? templateList : templateList.filter(t => t.category === activeCategory);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Choose Template</h2>
        <p className="text-sm text-gray-500 mt-1">{templateList.length} beautiful designs — floral, royal, elegant & more</p>
      </div>

      {/* Religious Headline Toggle */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-amber-900">Religious Headline</p>
          <p className="text-xs text-amber-700 mt-0.5">
            Show religious text like &quot;श्री गणेशाय नमः&quot; or &quot;بسم الله&quot; at the top
          </p>
        </div>
        <button
          onClick={() => setBiodata({ showReligiousHeadline: !biodata.showReligiousHeadline })}
          className={`relative w-12 h-6 rounded-full transition-colors ${
            biodata.showReligiousHeadline !== false ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
              biodata.showReligiousHeadline !== false ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      {/* Font / Text Style Picker */}
      <div>
        <p className="text-sm font-semibold text-gray-900 mb-2">Text Style</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {fontOptions.map(font => {
            const isSelected = (biodata.fontFamily || "default") === font.id;
            return (
              <button
                key={font.id}
                onClick={() => setBiodata({ fontFamily: font.id })}
                className={`relative text-left p-3 rounded-lg border-2 transition-all ${
                  isSelected
                    ? "border-red-500 bg-red-50 shadow-md"
                    : "border-gray-200 hover:border-gray-300 bg-white"
                }`}
              >
                <span
                  className="block text-base leading-tight mb-0.5"
                  style={{ fontFamily: font.sample }}
                >
                  Ankush Kumar
                </span>
                <span className="text-[10px] text-gray-500 block">{font.name}</span>
                <span className="text-[9px] text-gray-400">{font.desc}</span>
                {isSelected && (
                  <div className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition ${
              activeCategory === cat
                ? "bg-red-500 text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat === "All" ? `All (${templateList.length})` : cat}
          </button>
        ))}
      </div>

      {/* Template grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((tpl) => {
          const isSelected = biodata.templateId === tpl.id;
          return (
            <button
              key={tpl.id}
              onClick={() => setBiodata({ templateId: tpl.id })}
              className={`relative rounded-xl transition-all text-left group ${
                isSelected
                  ? "ring-2 ring-offset-2 shadow-lg scale-[1.02]"
                  : "hover:shadow-md hover:scale-[1.01]"
              }`}
              style={{ "--tw-ring-color": isSelected ? tpl.primary : undefined } as React.CSSProperties}
            >
              <div
                className="rounded-lg overflow-hidden border-2 h-44"
                style={{
                  backgroundColor: tpl.bg,
                  borderColor: isSelected ? tpl.primary : `${tpl.borderColor}50`,
                }}
              >
                {/* Mini preview */}
                <div className="p-3 h-full flex flex-col relative">
                  {/* Corner decorations (mini) */}
                  <span className="absolute top-1 left-1.5 text-[8px]" style={{ color: tpl.accent }}>{tpl.cornerDecor}</span>
                  <span className="absolute top-1 right-1.5 text-[8px]" style={{ color: tpl.accent }}>{tpl.cornerDecor}</span>

                  {/* Header mock */}
                  <div className="text-center mb-1.5">
                    <div
                      className="inline-block px-2 py-0.5 rounded text-[6px] font-bold text-white"
                      style={{ backgroundColor: tpl.headerBg }}
                    >
                      {tpl.headerDecorLeft} ✦ {tpl.headerDecorRight}
                    </div>
                    <div className="text-[7px] font-bold mt-0.5" style={{ color: tpl.primary }}>BIODATA</div>
                    <div className="flex items-center justify-center gap-1">
                      <div className="h-[0.5px] w-6" style={{ backgroundColor: tpl.accent }} />
                      <span className="text-[5px]" style={{ color: tpl.accent }}>{tpl.sectionIcon}</span>
                      <div className="h-[0.5px] w-6" style={{ backgroundColor: tpl.accent }} />
                    </div>
                  </div>

                  {/* Content mock with photo */}
                  <div className="flex gap-1 flex-1">
                    <div className="flex-1 space-y-1">
                      {/* Section mock */}
                      <div className="flex items-center gap-0.5">
                        <span className="text-[5px]" style={{ color: tpl.accent }}>{tpl.sectionIcon}</span>
                        <div className="h-[3px] rounded-full w-12" style={{ backgroundColor: tpl.primary }} />
                      </div>
                      <div className="h-[2px] rounded-full w-full" style={{ backgroundColor: `${tpl.primary}20` }} />
                      <div className="h-[2px] rounded-full w-3/4" style={{ backgroundColor: `${tpl.primary}15` }} />
                      <div className="h-[2px] rounded-full w-4/5" style={{ backgroundColor: `${tpl.primary}20` }} />

                      <div className="flex items-center gap-0.5 mt-0.5">
                        <span className="text-[5px]" style={{ color: tpl.accent }}>{tpl.sectionIcon}</span>
                        <div className="h-[3px] rounded-full w-10" style={{ backgroundColor: tpl.primary }} />
                      </div>
                      <div className="h-[2px] rounded-full w-full" style={{ backgroundColor: `${tpl.primary}15` }} />
                      <div className="h-[2px] rounded-full w-2/3" style={{ backgroundColor: `${tpl.primary}20` }} />

                      <div className="flex items-center gap-0.5 mt-0.5">
                        <span className="text-[5px]" style={{ color: tpl.accent }}>{tpl.sectionIcon}</span>
                        <div className="h-[3px] rounded-full w-8" style={{ backgroundColor: tpl.primary }} />
                      </div>
                      <div className="h-[2px] rounded-full w-full" style={{ backgroundColor: `${tpl.primary}15` }} />
                      <div className="h-[2px] rounded-full w-1/2" style={{ backgroundColor: `${tpl.primary}20` }} />
                    </div>
                    {/* Photo mock */}
                    <div
                      className="w-7 h-9 rounded border flex-shrink-0"
                      style={{ backgroundColor: `${tpl.accent}30`, borderColor: `${tpl.accent}60` }}
                    />
                  </div>

                  {/* Footer */}
                  <div className="text-center mt-auto pt-0.5">
                    <div className="text-[5px] tracking-widest" style={{ color: tpl.accent }}>{tpl.footerDecor}</div>
                  </div>

                  {/* Selected check */}
                  {isSelected && (
                    <div className="absolute top-1 right-1.5 w-5 h-5 rounded-full flex items-center justify-center z-10 shadow" style={{ backgroundColor: tpl.primary }}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              </div>
              {/* Template info */}
              <div className="px-1 py-1.5">
                <h3 className="font-semibold text-xs text-gray-800 truncate">{tpl.name}</h3>
                <p className="text-[10px] text-gray-500 truncate">{tpl.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          ✨ After selecting a template, you can preview your complete biodata on the next screen
          before downloading.
        </p>
      </div>
    </div>
  );
}
