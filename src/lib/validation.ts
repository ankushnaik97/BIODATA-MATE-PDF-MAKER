import { BiodataForm } from "./types";

export interface ValidationResult {
  valid: boolean;
  message: string;
}

export function validateStep(step: number, data: BiodataForm): ValidationResult {
  switch (step) {
    case 0: // Personal
      if (!data.fullName.trim()) return { valid: false, message: "Please enter your full name" };
      if (!data.gender) return { valid: false, message: "Please select your gender" };
      if (!data.dateOfBirth) return { valid: false, message: "Please enter your date of birth" };
      if (!data.maritalStatus) return { valid: false, message: "Please select your marital status" };
      if (!data.height) return { valid: false, message: "Please select your height" };
      return { valid: true, message: "" };

    case 1: // Religion
      if (!data.country) return { valid: false, message: "Please select your country" };
      if (!data.religion) return { valid: false, message: "Please select your religion" };
      if (!data.motherTongue) return { valid: false, message: "Please select your mother tongue" };
      return { valid: true, message: "" };

    case 2: // Education
      if (!data.education) return { valid: false, message: "Please select your highest education" };
      if (!data.occupation) return { valid: false, message: "Please select your occupation" };
      return { valid: true, message: "" };

    case 3: // Family
      if (!data.fatherName.trim()) return { valid: false, message: "Please enter your father's name" };
      if (!data.motherName.trim()) return { valid: false, message: "Please enter your mother's name" };
      return { valid: true, message: "" };

    case 4: // Lifestyle
      if (!data.diet) return { valid: false, message: "Please select your diet preference" };
      if (!data.smoking) return { valid: false, message: "Please select smoking habit" };
      if (!data.drinking) return { valid: false, message: "Please select drinking habit" };
      return { valid: true, message: "" };

    case 5: // Contact
      if (!data.city.trim()) return { valid: false, message: "Please enter your city" };
      if (!data.state) return { valid: false, message: "Please select your state" };
      if (!data.phone.trim()) return { valid: false, message: "Please enter your phone number" };
      if (data.phone.trim().length < 7) return { valid: false, message: "Please enter a valid phone number" };
      return { valid: true, message: "" };

    case 6: // Partner Preferences
      if (!data.partnerAgeFrom || !data.partnerAgeTo) return { valid: false, message: "Please enter preferred age range" };
      return { valid: true, message: "" };

    case 7: // About
      if (!data.aboutMe.trim()) return { valid: false, message: "Please write something about yourself" };
      if (data.aboutMe.trim().length < 20) return { valid: false, message: "Please write at least 20 characters about yourself" };
      return { valid: true, message: "" };

    case 8: // Template
      if (!data.templateId) return { valid: false, message: "Please select a template" };
      return { valid: true, message: "" };

    default:
      return { valid: true, message: "" };
  }
}
