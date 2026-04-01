"use client";

import { useBiodataStore } from "@/lib/store";
import { Check } from "lucide-react";

const steps = [
  "Personal",
  "Religion",
  "Education",
  "Family",
  "Lifestyle",
  "Contact",
  "Partner",
  "About",
  "Template",
];

export default function StepProgress() {
  const { currentStep, setStep } = useBiodataStore();

  return (
    <div className="w-full overflow-x-auto no-print">
      <div className="flex items-center justify-center min-w-max px-4 py-4">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            <button
              onClick={() => setStep(index)}
              className="flex flex-col items-center gap-1 group"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  index < currentStep
                    ? "bg-green-500 text-white"
                    : index === currentStep
                    ? "bg-red-500 text-white step-active"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {index < currentStep ? (
                  <Check className="w-4 h-4" />
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={`text-[10px] font-medium ${
                  index <= currentStep ? "text-red-600" : "text-gray-400"
                }`}
              >
                {step}
              </span>
            </button>
            {index < steps.length - 1 && (
              <div
                className={`w-8 sm:w-12 h-0.5 mx-1 ${
                  index < currentStep ? "bg-green-500" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
