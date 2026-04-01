export interface BiodataForm {
  // Personal Details
  fullName: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  gender: string;
  maritalStatus: string;
  height: string;
  weight: string;
  bodyType: string;
  complexion: string;
  bloodGroup: string;
  disability: string;
  profilePhoto: string;

  // Country & Religion
  country: string;
  religion: string;
  caste: string;
  subCaste: string;
  gotra: string;
  motherTongue: string;
  languages: string[];
  manglik: string;
  horoscope: string;
  star: string;
  raasi: string;
  dosham: string;

  // Education & Career
  education: string;
  educationDetail: string;
  college: string;
  occupation: string;
  workingAs: string;
  companyName: string;
  annualIncome: string;
  workCity: string;
  workCountry: string;

  // Family Details
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  brothers: string;
  brothersMarried: string;
  sisters: string;
  sistersMarried: string;
  familyType: string;
  familyValues: string;
  familyStatus: string;
  familyIncome: string;
  nativePlace: string;

  // Lifestyle
  diet: string;
  smoking: string;
  drinking: string;
  hobbies: string[];
  interests: string[];

  // Contact & Address
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  contactPerson: string;
  contactRelation: string;

  // Partner Preferences
  partnerAgeFrom: string;
  partnerAgeTo: string;
  partnerHeightFrom: string;
  partnerHeightTo: string;
  partnerEducation: string;
  partnerOccupation: string;
  partnerIncome: string;
  partnerMaritalStatus: string;
  partnerReligion: string;
  partnerCaste: string;
  partnerCity: string;
  partnerCountry: string;
  partnerDiet: string;
  partnerManglik: string;
  partnerExpectations: string;

  // About Me
  aboutMe: string;

  // Template
  templateId: string;
}

export const defaultBiodata: BiodataForm = {
  fullName: '',
  dateOfBirth: '',
  timeOfBirth: '',
  placeOfBirth: '',
  gender: '',
  maritalStatus: '',
  height: '',
  weight: '',
  bodyType: '',
  complexion: '',
  bloodGroup: '',
  disability: 'None',
  profilePhoto: '',

  country: '',
  religion: '',
  caste: '',
  subCaste: '',
  gotra: '',
  motherTongue: '',
  languages: [],
  manglik: '',
  horoscope: '',
  star: '',
  raasi: '',
  dosham: '',

  education: '',
  educationDetail: '',
  college: '',
  occupation: '',
  workingAs: '',
  companyName: '',
  annualIncome: '',
  workCity: '',
  workCountry: '',

  fatherName: '',
  fatherOccupation: '',
  motherName: '',
  motherOccupation: '',
  brothers: '',
  brothersMarried: '',
  sisters: '',
  sistersMarried: '',
  familyType: '',
  familyValues: '',
  familyStatus: '',
  familyIncome: '',
  nativePlace: '',

  diet: '',
  smoking: 'No',
  drinking: 'No',
  hobbies: [],
  interests: [],

  address: '',
  city: '',
  state: '',
  pincode: '',
  phone: '',
  email: '',
  contactPerson: '',
  contactRelation: '',

  partnerAgeFrom: '',
  partnerAgeTo: '',
  partnerHeightFrom: '',
  partnerHeightTo: '',
  partnerEducation: '',
  partnerOccupation: '',
  partnerIncome: '',
  partnerMaritalStatus: '',
  partnerReligion: '',
  partnerCaste: '',
  partnerCity: '',
  partnerCountry: '',
  partnerDiet: '',
  partnerManglik: '',
  partnerExpectations: '',

  aboutMe: '',
  templateId: 'elegant',
};
