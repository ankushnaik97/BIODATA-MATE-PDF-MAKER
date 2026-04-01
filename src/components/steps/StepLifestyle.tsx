"use client";

import { useBiodataStore } from "@/lib/store";
import { FormField, RadioGroup, MultiSelect } from "@/components/FormElements";
import { dietOptions, hobbiesOptions, interestOptions } from "@/lib/data";

export default function StepLifestyle() {
  const { biodata, setBiodata } = useBiodataStore();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Lifestyle</h2>
      <p className="text-sm text-gray-500">Your diet, habits and hobbies</p>

      <div className="space-y-5">
        <FormField label="Diet" required>
          <RadioGroup
            name="diet"
            options={dietOptions}
            value={biodata.diet}
            onChange={(v) => setBiodata({ diet: v })}
          />
        </FormField>

        <FormField label="Smoking">
          <RadioGroup
            name="smoking"
            options={["No", "Yes", "Occasionally"]}
            value={biodata.smoking}
            onChange={(v) => setBiodata({ smoking: v })}
          />
        </FormField>

        <FormField label="Drinking">
          <RadioGroup
            name="drinking"
            options={["No", "Yes", "Occasionally", "Socially"]}
            value={biodata.drinking}
            onChange={(v) => setBiodata({ drinking: v })}
          />
        </FormField>

        <FormField label="Hobbies (select up to 10)">
          <MultiSelect
            options={hobbiesOptions}
            selected={biodata.hobbies}
            onChange={(hobbies) => setBiodata({ hobbies })}
            maxSelect={10}
          />
        </FormField>

        <FormField label="Interests (select up to 8)">
          <MultiSelect
            options={interestOptions}
            selected={biodata.interests}
            onChange={(interests) => setBiodata({ interests })}
            maxSelect={8}
          />
        </FormField>
      </div>
    </div>
  );
}
