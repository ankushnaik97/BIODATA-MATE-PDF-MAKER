"use client";

import { useBiodataStore } from "@/lib/store";
import { FormField, Select, Input, RadioGroup, MultiSelect } from "@/components/FormElements";
import { countries, religionData } from "@/lib/data";

export default function StepReligion() {
  const { biodata, setBiodata } = useBiodataStore();

  const selectedCountry = countries.find((c) => c.name === biodata.country);
  const selectedReligion = biodata.religion ? religionData[biodata.religion] : null;

  const handleCountryChange = (country: string) => {
    setBiodata({
      country,
      religion: "",
      caste: "",
      subCaste: "",
      gotra: "",
      manglik: "",
      motherTongue: "",
      languages: [],
      state: "",
    });
  };

  const handleReligionChange = (religion: string) => {
    setBiodata({
      religion,
      caste: "",
      subCaste: "",
      gotra: "",
      manglik: "",
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Religion & Community</h2>
      <p className="text-sm text-gray-500">
        Select your country first — religion, caste, and language options will adjust accordingly
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Country" required>
          <Select
            options={countries.map((c) => c.name)}
            placeholder="Select country"
            value={biodata.country}
            onChange={(e) => handleCountryChange(e.target.value)}
          />
        </FormField>

        {selectedCountry && (
          <FormField label="Religion" required>
            <Select
              options={selectedCountry.religions}
              placeholder="Select religion"
              value={biodata.religion}
              onChange={(e) => handleReligionChange(e.target.value)}
            />
          </FormField>
        )}

        {selectedReligion && (
          <FormField label="Caste / Community">
            <Select
              options={selectedReligion.castes}
              placeholder="Select caste"
              value={biodata.caste}
              onChange={(e) => setBiodata({ caste: e.target.value, subCaste: "" })}
            />
          </FormField>
        )}

        {selectedReligion &&
          biodata.caste &&
          selectedReligion.subCastes[biodata.caste]?.length > 0 && (
            <FormField label="Sub Caste">
              <Select
                options={selectedReligion.subCastes[biodata.caste]}
                placeholder="Select sub caste"
                value={biodata.subCaste}
                onChange={(e) => setBiodata({ subCaste: e.target.value })}
              />
            </FormField>
          )}

        {selectedReligion?.hasGotra && selectedReligion.gotras && (
          <FormField label="Gotra">
            <Select
              options={selectedReligion.gotras}
              placeholder="Select gotra"
              value={biodata.gotra}
              onChange={(e) => setBiodata({ gotra: e.target.value })}
            />
          </FormField>
        )}

        {selectedCountry && (
          <FormField label="Mother Tongue" required>
            <Select
              options={selectedCountry.languages}
              placeholder="Select mother tongue"
              value={biodata.motherTongue}
              onChange={(e) => setBiodata({ motherTongue: e.target.value })}
            />
          </FormField>
        )}
      </div>

      {selectedCountry && (
        <FormField label="Languages Known">
          <MultiSelect
            options={selectedCountry.languages}
            selected={biodata.languages}
            onChange={(languages) => setBiodata({ languages })}
          />
        </FormField>
      )}

      {/* Hindu-specific fields */}
      {selectedReligion?.hasManglik && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Manglik">
            <RadioGroup
              name="manglik"
              options={["Yes", "No", "Anshik (Partial)", "Don't Know"]}
              value={biodata.manglik}
              onChange={(v) => setBiodata({ manglik: v })}
            />
          </FormField>

          {selectedReligion.stars && (
            <FormField label="Nakshatra (Star)">
              <Select
                options={selectedReligion.stars}
                placeholder="Select star"
                value={biodata.star}
                onChange={(e) => setBiodata({ star: e.target.value })}
              />
            </FormField>
          )}

          {selectedReligion.raasis && (
            <FormField label="Raasi (Moon Sign)">
              <Select
                options={selectedReligion.raasis}
                placeholder="Select raasi"
                value={biodata.raasi}
                onChange={(e) => setBiodata({ raasi: e.target.value })}
              />
            </FormField>
          )}

          <FormField label="Horoscope">
            <RadioGroup
              name="horoscope"
              options={["Available", "Not Available", "Will provide later"]}
              value={biodata.horoscope}
              onChange={(v) => setBiodata({ horoscope: v })}
            />
          </FormField>
        </div>
      )}
    </div>
  );
}
