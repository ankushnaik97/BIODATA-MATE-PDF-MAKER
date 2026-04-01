"use client";

import Link from "next/link";
import { Check } from "lucide-react";

const templates = [
  {
    id: "elegant",
    name: "Elegant Gold",
    description: "Classic golden border with warm ivory background. Timeless design suited for traditional families.",
    gradient: "from-amber-50 to-orange-50",
    border: "border-amber-500",
    accent: "bg-amber-500",
    features: ["Golden ornate borders", "Warm ivory tones", "Classic serif fonts", "Elegant layout"],
  },
  {
    id: "royal",
    name: "Royal Red",
    description: "Rich red theme with ornate styling. Perfect for Indian, Hindu, and traditional wedding biodatas.",
    gradient: "from-red-50 to-pink-50",
    border: "border-red-500",
    accent: "bg-red-500",
    features: ["Royal red accents", "Ornate decorations", "Wedding-perfect design", "Premium feel"],
  },
  {
    id: "modern",
    name: "Modern Blue",
    description: "Clean, minimal design with a professional blue accent. Great for professionals and NRI biodatas.",
    gradient: "from-blue-50 to-cyan-50",
    border: "border-blue-500",
    accent: "bg-blue-500",
    features: ["Clean minimalist", "Professional look", "Modern typography", "Spacious layout"],
  },
  {
    id: "traditional",
    name: "Traditional Green",
    description: "Auspicious green with traditional touches. A versatile template that suits all religions and communities.",
    gradient: "from-green-50 to-emerald-50",
    border: "border-green-500",
    accent: "bg-green-500",
    features: ["Auspicious green", "Universal design", "Traditional motifs", "Multi-religion support"],
  },
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Beautiful Biodata Templates
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Choose from our handcrafted premium templates. Each one is designed
            to make a lasting impression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              className={`bg-gradient-to-br ${tpl.gradient} rounded-2xl border-2 ${tpl.border} overflow-hidden hover:shadow-xl transition-shadow`}
            >
              <div className="p-8">
                {/* Mock biodata preview */}
                <div className="bg-white/60 rounded-xl p-6 mb-6 border border-white/80">
                  <div className="space-y-3">
                    <div className={`h-3 ${tpl.accent} rounded w-1/3 opacity-80`} />
                    <div className="h-2 bg-gray-300/50 rounded w-full" />
                    <div className="h-2 bg-gray-300/50 rounded w-4/5" />
                    <div className={`h-3 ${tpl.accent} rounded w-2/5 opacity-80 mt-4`} />
                    <div className="h-2 bg-gray-300/50 rounded w-full" />
                    <div className="h-2 bg-gray-300/50 rounded w-3/5" />
                    <div className={`h-3 ${tpl.accent} rounded w-1/4 opacity-80 mt-4`} />
                    <div className="h-2 bg-gray-300/50 rounded w-full" />
                    <div className="h-2 bg-gray-300/50 rounded w-2/3" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800">{tpl.name}</h3>
                <p className="text-sm text-gray-600 mt-1 mb-4">{tpl.description}</p>

                <ul className="space-y-1 mb-6">
                  {tpl.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/create"
                  className={`inline-block px-6 py-2 rounded-full text-white text-sm font-semibold ${tpl.accent} hover:opacity-90 transition shadow`}
                >
                  Use This Template →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">All templates include HD PDF & Image download</p>
          <Link
            href="/create"
            className="inline-block px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition shadow-lg"
          >
            Start Creating Your Biodata →
          </Link>
        </div>
      </div>
    </div>
  );
}
