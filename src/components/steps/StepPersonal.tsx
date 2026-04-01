"use client";

import { useBiodataStore } from "@/lib/store";
import { FormField, Input, Select, RadioGroup } from "@/components/FormElements";
import {
  heightOptions,
  bodyTypeOptions,
  complexionOptions,
  bloodGroupOptions,
  maritalStatusOptions,
} from "@/lib/data";
import { Camera } from "lucide-react";

export default function StepPersonal() {
  const { biodata, setBiodata } = useBiodataStore();

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("Photo must be less than 5MB");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setBiodata({ profilePhoto: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Personal Details</h2>
      <p className="text-sm text-gray-500">Fill in your basic personal information</p>

      {/* Photo Upload */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
            {biodata.profilePhoto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={biodata.profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <Camera className="w-8 h-8 text-gray-400" />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Upload Photo</p>
          <p className="text-xs text-gray-400">JPG, PNG. Max 5MB</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Full Name" required>
          <Input
            value={biodata.fullName}
            onChange={(e) => setBiodata({ fullName: e.target.value })}
            placeholder="Enter your full name"
          />
        </FormField>

        <FormField label="Gender" required>
          <RadioGroup
            name="gender"
            options={["Male", "Female"]}
            value={biodata.gender}
            onChange={(v) => setBiodata({ gender: v })}
          />
        </FormField>

        <FormField label="Date of Birth" required>
          <Input
            type="date"
            value={biodata.dateOfBirth}
            onChange={(e) => setBiodata({ dateOfBirth: e.target.value })}
          />
        </FormField>

        <FormField label="Time of Birth">
          <Input
            type="time"
            value={biodata.timeOfBirth}
            onChange={(e) => setBiodata({ timeOfBirth: e.target.value })}
          />
        </FormField>

        <FormField label="Place of Birth">
          <Input
            value={biodata.placeOfBirth}
            onChange={(e) => setBiodata({ placeOfBirth: e.target.value })}
            placeholder="City, State"
          />
        </FormField>

        <FormField label="Marital Status" required>
          <Select
            options={maritalStatusOptions}
            placeholder="Select status"
            value={biodata.maritalStatus}
            onChange={(e) => setBiodata({ maritalStatus: e.target.value })}
          />
        </FormField>

        <FormField label="Height" required>
          <Select
            options={heightOptions}
            placeholder="Select height"
            value={biodata.height}
            onChange={(e) => setBiodata({ height: e.target.value })}
          />
        </FormField>

        <FormField label="Weight (kg)">
          <Input
            type="number"
            value={biodata.weight}
            onChange={(e) => setBiodata({ weight: e.target.value })}
            placeholder="e.g. 65"
          />
        </FormField>

        <FormField label="Body Type">
          <Select
            options={bodyTypeOptions}
            placeholder="Select body type"
            value={biodata.bodyType}
            onChange={(e) => setBiodata({ bodyType: e.target.value })}
          />
        </FormField>

        <FormField label="Complexion">
          <Select
            options={complexionOptions}
            placeholder="Select complexion"
            value={biodata.complexion}
            onChange={(e) => setBiodata({ complexion: e.target.value })}
          />
        </FormField>

        <FormField label="Blood Group">
          <Select
            options={bloodGroupOptions}
            placeholder="Select blood group"
            value={biodata.bloodGroup}
            onChange={(e) => setBiodata({ bloodGroup: e.target.value })}
          />
        </FormField>

        <FormField label="Any Disability">
          <RadioGroup
            name="disability"
            options={["None", "Yes"]}
            value={biodata.disability}
            onChange={(v) => setBiodata({ disability: v })}
          />
        </FormField>
      </div>
    </div>
  );
}
