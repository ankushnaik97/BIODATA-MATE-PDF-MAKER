"use client";

import { useBiodataStore } from "@/lib/store";
import { FormField, Input, Select, RadioGroup } from "@/components/FormElements";
import {
  familyTypeOptions,
  familyValuesOptions,
  familyStatusOptions,
  incomeOptions,
  occupationOptions,
} from "@/lib/data";

export default function StepFamily() {
  const { biodata, setBiodata } = useBiodataStore();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Family Details</h2>
      <p className="text-sm text-gray-500">Tell us about your family</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Father&apos;s Name" required>
          <Input
            value={biodata.fatherName}
            onChange={(e) => setBiodata({ fatherName: e.target.value })}
            placeholder="Enter father's name"
          />
        </FormField>

        <FormField label="Father&apos;s Occupation">
          <Select
            options={occupationOptions}
            placeholder="Select occupation"
            value={biodata.fatherOccupation}
            onChange={(e) => setBiodata({ fatherOccupation: e.target.value })}
          />
        </FormField>

        <FormField label="Mother&apos;s Name" required>
          <Input
            value={biodata.motherName}
            onChange={(e) => setBiodata({ motherName: e.target.value })}
            placeholder="Enter mother's name"
          />
        </FormField>

        <FormField label="Mother&apos;s Occupation">
          <Select
            options={occupationOptions}
            placeholder="Select occupation"
            value={biodata.motherOccupation}
            onChange={(e) => setBiodata({ motherOccupation: e.target.value })}
          />
        </FormField>

        <FormField label="Number of Brothers">
          <Select
            options={["0", "1", "2", "3", "4", "5+"]}
            placeholder="Select"
            value={biodata.brothers}
            onChange={(e) => setBiodata({ brothers: e.target.value })}
          />
        </FormField>

        <FormField label="Brothers Married">
          <Select
            options={["0", "1", "2", "3", "4", "5+"]}
            placeholder="Select"
            value={biodata.brothersMarried}
            onChange={(e) => setBiodata({ brothersMarried: e.target.value })}
          />
        </FormField>

        <FormField label="Number of Sisters">
          <Select
            options={["0", "1", "2", "3", "4", "5+"]}
            placeholder="Select"
            value={biodata.sisters}
            onChange={(e) => setBiodata({ sisters: e.target.value })}
          />
        </FormField>

        <FormField label="Sisters Married">
          <Select
            options={["0", "1", "2", "3", "4", "5+"]}
            placeholder="Select"
            value={biodata.sistersMarried}
            onChange={(e) => setBiodata({ sistersMarried: e.target.value })}
          />
        </FormField>

        <FormField label="Family Type">
          <RadioGroup
            name="familyType"
            options={familyTypeOptions}
            value={biodata.familyType}
            onChange={(v) => setBiodata({ familyType: v })}
          />
        </FormField>

        <FormField label="Family Values">
          <RadioGroup
            name="familyValues"
            options={familyValuesOptions}
            value={biodata.familyValues}
            onChange={(v) => setBiodata({ familyValues: v })}
          />
        </FormField>

        <FormField label="Family Status">
          <Select
            options={familyStatusOptions}
            placeholder="Select status"
            value={biodata.familyStatus}
            onChange={(e) => setBiodata({ familyStatus: e.target.value })}
          />
        </FormField>

        <FormField label="Family Annual Income">
          <Select
            options={incomeOptions}
            placeholder="Select income"
            value={biodata.familyIncome}
            onChange={(e) => setBiodata({ familyIncome: e.target.value })}
          />
        </FormField>

        <FormField label="Native Place" className="md:col-span-2">
          <Input
            value={biodata.nativePlace}
            onChange={(e) => setBiodata({ nativePlace: e.target.value })}
            placeholder="e.g. Jaipur, Rajasthan"
          />
        </FormField>
      </div>
    </div>
  );
}
