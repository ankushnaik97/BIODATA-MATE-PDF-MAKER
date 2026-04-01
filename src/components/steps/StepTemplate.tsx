"use client";

import { useBiodataStore } from "@/lib/store";
import { Check } from "lucide-react";

const templates = [
  {
    id: "elegant",
    name: "Elegant Gold",
    description: "Classic golden border with warm ivory background",
    colors: { primary: "#b8860b", bg: "from-amber-50 to-orange-50", border: "border-amber-600" },
  },
  {
    id: "royal",
    name: "Royal Red",
    description: "Rich red theme with ornate styling — perfect for Indian weddings",
    colors: { primary: "#dc2626", bg: "from-red-50 to-pink-50", border: "border-red-600" },
  },
  {
    id: "modern",
    name: "Modern Blue",
    description: "Clean minimal design with a professional blue accent",
    colors: { primary: "#2563eb", bg: "from-blue-50 to-cyan-50", border: "border-blue-600" },
  },
  {
    id: "traditional",
    name: "Traditional Green",
    description: "Auspicious green with traditional florals — suits all religions",
    colors: { primary: "#16a34a", bg: "from-green-50 to-emerald-50", border: "border-green-600" },
  },
];

export default function StepTemplate() {
  const { biodata, setBiodata } = useBiodataStore();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Choose Template</h2>
      <p className="text-sm text-gray-500">Select a design for your biodata</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {templates.map((tpl) => (
          <button
            key={tpl.id}
            onClick={() => setBiodata({ templateId: tpl.id })}
            className={`relative p-1 rounded-xl transition-all ${
              biodata.templateId === tpl.id
                ? `ring-2 ring-offset-2 ${tpl.colors.border} ring-current`
                : "hover:shadow-lg"
            }`}
          >
            <div
              className={`bg-gradient-to-br ${tpl.colors.bg} rounded-lg p-6 h-48 flex flex-col justify-between border ${tpl.colors.border}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-800">{tpl.name}</h3>
                  {biodata.templateId === tpl.id && (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">{tpl.description}</p>
              </div>
              {/* Mini preview */}
              <div className="space-y-1">
                <div className="h-2 rounded bg-gray-300/50 w-3/4" />
                <div className="h-2 rounded bg-gray-300/50 w-1/2" />
                <div className="h-2 rounded bg-gray-300/50 w-2/3" />
                <div className="h-2 rounded bg-gray-300/50 w-1/3" />
              </div>
            </div>
          </button>
        ))}
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
