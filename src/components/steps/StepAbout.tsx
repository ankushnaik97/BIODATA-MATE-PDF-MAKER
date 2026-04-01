"use client";

import { useBiodataStore } from "@/lib/store";
import { FormField, TextArea } from "@/components/FormElements";

export default function StepAbout() {
  const { biodata, setBiodata } = useBiodataStore();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">About Me</h2>
      <p className="text-sm text-gray-500">
        Write a few lines about yourself. This helps create a personal connection.
      </p>

      <FormField label="About Me">
        <TextArea
          rows={6}
          value={biodata.aboutMe}
          onChange={(e) => setBiodata({ aboutMe: e.target.value })}
          placeholder="I am a simple and caring person who values family. I love spending time with my loved ones and believe in mutual respect in a relationship. I enjoy reading books, traveling to new places, and cooking traditional dishes. Looking for a life partner who shares similar values and is ready to build a beautiful life together."
          maxLength={500}
        />
        <p className="text-xs text-gray-400 mt-1">
          {biodata.aboutMe.length}/500 characters
        </p>
      </FormField>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-amber-800 mb-2">💡 Tips for a great bio:</h4>
        <ul className="text-xs text-amber-700 space-y-1">
          <li>• Mention your personality traits (caring, humble, ambitious)</li>
          <li>• Share what matters most to you (family, career, values)</li>
          <li>• Talk about your hobbies briefly</li>
          <li>• Keep it positive and genuine</li>
          <li>• Avoid being too long — 3-4 sentences work best</li>
        </ul>
      </div>
    </div>
  );
}
