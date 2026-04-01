"use client";

import { useBiodataStore } from "@/lib/store";
import { FormField, Input, Select } from "@/components/FormElements";
import { educationOptions, occupationOptions, incomeOptions, countries } from "@/lib/data";

export default function StepEducation() {
  const { biodata, setBiodata } = useBiodataStore();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Education & Career</h2>
      <p className="text-sm text-gray-500">Tell us about your qualifications and work</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Highest Education" required>
          <Select
            options={educationOptions}
            placeholder="Select education"
            value={biodata.education}
            onChange={(e) => setBiodata({ education: e.target.value })}
          />
        </FormField>

        <FormField label="Education Details">
          <Input
            value={biodata.educationDetail}
            onChange={(e) => setBiodata({ educationDetail: e.target.value })}
            placeholder="e.g. B.Tech in Computer Science"
          />
        </FormField>

        <FormField label="College / University">
          <Input
            value={biodata.college}
            onChange={(e) => setBiodata({ college: e.target.value })}
            placeholder="e.g. IIT Delhi"
          />
        </FormField>

        <FormField label="Occupation" required>
          <Select
            options={occupationOptions}
            placeholder="Select occupation"
            value={biodata.occupation}
            onChange={(e) => setBiodata({ occupation: e.target.value })}
          />
        </FormField>

        <FormField label="Working As / Designation">
          <Input
            value={biodata.workingAs}
            onChange={(e) => setBiodata({ workingAs: e.target.value })}
            placeholder="e.g. Software Engineer"
          />
        </FormField>

        <FormField label="Company / Organization">
          <Input
            value={biodata.companyName}
            onChange={(e) => setBiodata({ companyName: e.target.value })}
            placeholder="e.g. Tata Consultancy Services"
          />
        </FormField>

        <FormField label="Annual Income">
          <Select
            options={incomeOptions}
            placeholder="Select income range"
            value={biodata.annualIncome}
            onChange={(e) => setBiodata({ annualIncome: e.target.value })}
          />
        </FormField>

        <FormField label="Work City">
          <Input
            value={biodata.workCity}
            onChange={(e) => setBiodata({ workCity: e.target.value })}
            placeholder="e.g. Bangalore"
          />
        </FormField>

        <FormField label="Work Country">
          <Select
            options={countries.map((c) => c.name)}
            placeholder="Select country"
            value={biodata.workCountry}
            onChange={(e) => setBiodata({ workCountry: e.target.value })}
          />
        </FormField>
      </div>
    </div>
  );
}
