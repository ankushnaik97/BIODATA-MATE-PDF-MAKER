"use client";

import { useBiodataStore } from "@/lib/store";
import { FormField, Input, Select } from "@/components/FormElements";
import { countries } from "@/lib/data";

export default function StepContact() {
  const { biodata, setBiodata } = useBiodataStore();

  const selectedCountry = countries.find((c) => c.name === biodata.country);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Contact & Address</h2>
      <p className="text-sm text-gray-500">How can interested families reach you?</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Address" className="md:col-span-2">
          <Input
            value={biodata.address}
            onChange={(e) => setBiodata({ address: e.target.value })}
            placeholder="Enter your full address"
          />
        </FormField>

        <FormField label="City" required>
          <Input
            value={biodata.city}
            onChange={(e) => setBiodata({ city: e.target.value })}
            placeholder="e.g. Mumbai"
          />
        </FormField>

        <FormField label="State / Province" required>
          {selectedCountry ? (
            <Select
              options={selectedCountry.states}
              placeholder="Select state"
              value={biodata.state}
              onChange={(e) => setBiodata({ state: e.target.value })}
            />
          ) : (
            <Input
              value={biodata.state}
              onChange={(e) => setBiodata({ state: e.target.value })}
              placeholder="Enter state"
            />
          )}
        </FormField>

        <FormField label="PIN / ZIP Code">
          <Input
            value={biodata.pincode}
            onChange={(e) => setBiodata({ pincode: e.target.value })}
            placeholder="e.g. 400001"
          />
        </FormField>

        <FormField label="Phone Number" required>
          <Input
            value={biodata.phone}
            onChange={(e) => setBiodata({ phone: e.target.value })}
            placeholder="+91 98765 43210"
            type="tel"
          />
        </FormField>

        <FormField label="Email">
          <Input
            value={biodata.email}
            onChange={(e) => setBiodata({ email: e.target.value })}
            placeholder="your@email.com"
            type="email"
          />
        </FormField>

        <FormField label="Contact Person Name">
          <Input
            value={biodata.contactPerson}
            onChange={(e) => setBiodata({ contactPerson: e.target.value })}
            placeholder="e.g. Mr. Ramesh Kumar"
          />
        </FormField>

        <FormField label="Relation with Contact Person">
          <Select
            options={["Father", "Mother", "Brother", "Sister", "Uncle", "Aunt", "Self", "Other"]}
            placeholder="Select relation"
            value={biodata.contactRelation}
            onChange={(e) => setBiodata({ contactRelation: e.target.value })}
          />
        </FormField>
      </div>
    </div>
  );
}
