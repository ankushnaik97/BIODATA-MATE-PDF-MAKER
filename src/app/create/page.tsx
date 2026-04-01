"use client";

import { useBiodataStore } from "@/lib/store";
import StepProgress from "@/components/StepProgress";
import StepPersonal from "@/components/steps/StepPersonal";
import StepReligion from "@/components/steps/StepReligion";
import StepEducation from "@/components/steps/StepEducation";
import StepFamily from "@/components/steps/StepFamily";
import StepLifestyle from "@/components/steps/StepLifestyle";
import StepContact from "@/components/steps/StepContact";
import StepPartner from "@/components/steps/StepPartner";
import StepAbout from "@/components/steps/StepAbout";
import StepTemplate from "@/components/steps/StepTemplate";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const stepComponents = [
  StepPersonal,
  StepReligion,
  StepEducation,
  StepFamily,
  StepLifestyle,
  StepContact,
  StepPartner,
  StepAbout,
  StepTemplate,
];

export default function CreatePage() {
  const { currentStep, nextStep, prevStep, totalSteps, biodata } = useBiodataStore();
  const router = useRouter();

  const StepComponent = stepComponents[currentStep];

  const handlePreview = () => {
    if (!biodata.fullName) {
      toast.error("Please enter your full name first");
      return;
    }
    router.push("/preview");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <StepProgress />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mt-4">
          <StepComponent />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <span className="text-sm text-gray-400">
            Step {currentStep + 1} of {totalSteps}
          </span>

          {currentStep === totalSteps - 1 ? (
            <button
              onClick={handlePreview}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-500 hover:bg-red-600 text-white transition text-sm font-semibold shadow-md"
            >
              <Eye className="w-4 h-4" />
              Preview & Download
            </button>
          ) : (
            <button
              onClick={nextStep}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-500 hover:bg-red-600 text-white transition text-sm font-semibold shadow-md"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
