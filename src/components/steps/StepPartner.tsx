"use client";

import { useBiodataStore } from "@/lib/store";
import { FormField, Input, Select, RadioGroup, TextArea } from "@/components/FormElements";
import {
  heightOptions,
  educationOptions,
  occupationOptions,
  incomeOptions,
  maritalStatusOptions,
  dietOptions,
  countries,
} from "@/lib/data";

export default function StepPartner() {
  const { biodata, setBiodata } = useBiodataStore();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Partner Preferences</h2>
      <p className="text-sm text-gray-500">What are you looking for in your life partner?</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Age From">
          <Input
            type="number"
            value={biodata.partnerAgeFrom}
            onChange={(e) => setBiodata({ partnerAgeFrom: e.target.value })}
            placeholder="e.g. 22"
            min="18"
            max="70"
          />
        </FormField>

        <FormField label="Age To">
          <Input
            type="number"
            value={biodata.partnerAgeTo}
            onChange={(e) => setBiodata({ partnerAgeTo: e.target.value })}
            placeholder="e.g. 30"
            min="18"
            max="70"
          />
        </FormField>

        <FormField label="Height From">
          <Select
            options={heightOptions}
            placeholder="Select minimum height"
            value={biodata.partnerHeightFrom}
            onChange={(e) => setBiodata({ partnerHeightFrom: e.target.value })}
          />
        </FormField>

        <FormField label="Height To">
          <Select
            options={heightOptions}
            placeholder="Select maximum height"
            value={biodata.partnerHeightTo}
            onChange={(e) => setBiodata({ partnerHeightTo: e.target.value })}
          />
        </FormField>

        <FormField label="Preferred Education">
          <Select
            options={educationOptions}
            placeholder="Any education"
            value={biodata.partnerEducation}
            onChange={(e) => setBiodata({ partnerEducation: e.target.value })}
          />
        </FormField>

        <FormField label="Preferred Occupation">
          <Select
            options={occupationOptions}
            placeholder="Any occupation"
            value={biodata.partnerOccupation}
            onChange={(e) => setBiodata({ partnerOccupation: e.target.value })}
          />
        </FormField>

        <FormField label="Preferred Income">
          <Select
            options={incomeOptions}
            placeholder="Any income"
            value={biodata.partnerIncome}
            onChange={(e) => setBiodata({ partnerIncome: e.target.value })}
          />
        </FormField>

        <FormField label="Preferred Marital Status">
          <Select
            options={maritalStatusOptions}
            placeholder="Any"
            value={biodata.partnerMaritalStatus}
            onChange={(e) => setBiodata({ partnerMaritalStatus: e.target.value })}
          />
        </FormField>

        <FormField label="Preferred Religion">
          <Input
            value={biodata.partnerReligion}
            onChange={(e) => setBiodata({ partnerReligion: e.target.value })}
            placeholder="e.g. Hindu, Any"
          />
        </FormField>

        <FormField label="Preferred Caste">
          <Input
            value={biodata.partnerCaste}
            onChange={(e) => setBiodata({ partnerCaste: e.target.value })}
            placeholder="e.g. Any, Same community"
          />
        </FormField>

        <FormField label="Preferred City">
          <Input
            value={biodata.partnerCity}
            onChange={(e) => setBiodata({ partnerCity: e.target.value })}
            placeholder="e.g. Mumbai, Any"
          />
        </FormField>

        <FormField label="Preferred Country">
          <Select
            options={["Any", ...countries.map((c) => c.name)]}
            placeholder="Select country"
            value={biodata.partnerCountry}
            onChange={(e) => setBiodata({ partnerCountry: e.target.value })}
          />
        </FormField>

        <FormField label="Preferred Diet">
          <RadioGroup
            name="partnerDiet"
            options={["Any", ...dietOptions]}
            value={biodata.partnerDiet}
            onChange={(v) => setBiodata({ partnerDiet: v })}
          />
        </FormField>

        {biodata.religion === "Hindu" && (
          <FormField label="Preferred Manglik">
            <RadioGroup
              name="partnerManglik"
              options={["Any", "Yes", "No"]}
              value={biodata.partnerManglik}
              onChange={(v) => setBiodata({ partnerManglik: v })}
            />
          </FormField>
        )}
      </div>

      <FormField label="Other Expectations">
        <TextArea
          rows={3}
          value={biodata.partnerExpectations}
          onChange={(e) => setBiodata({ partnerExpectations: e.target.value })}
          placeholder="Any special expectations from life partner..."
        />
      </FormField>
    </div>
  );
}
