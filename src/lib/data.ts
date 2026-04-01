export interface CountryData {
  name: string;
  code: string;
  currency: string;
  currencySymbol: string;
  religions: string[];
  languages: string[];
  states: string[];
}

export interface ReligionData {
  name: string;
  castes: string[];
  subCastes: Record<string, string[]>;
  gotras?: string[];
  stars?: string[];
  raasis?: string[];
  hasManglik?: boolean;
  hasDosham?: boolean;
  hasGotra?: boolean;
}

export const countries: CountryData[] = [
  {
    name: 'India',
    code: 'IN',
    currency: 'INR',
    currencySymbol: '₹',
    religions: ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Buddhist', 'Jain', 'Parsi', 'Jewish', 'Other'],
    languages: ['Hindi', 'English', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Urdu', 'Gujarati', 'Kannada', 'Malayalam', 'Odia', 'Punjabi', 'Assamese', 'Maithili', 'Sanskrit', 'Konkani', 'Nepali', 'Manipuri', 'Sindhi', 'Dogri', 'Kashmiri', 'Bodo', 'Santali', 'Tulu', 'Bhojpuri', 'Rajasthani', 'Marwari', 'Haryanvi', 'Chhattisgarhi'],
    states: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Chandigarh', 'Puducherry', 'Jammu & Kashmir', 'Ladakh'],
  },
  {
    name: 'Pakistan',
    code: 'PK',
    currency: 'PKR',
    currencySymbol: '₨',
    religions: ['Muslim', 'Hindu', 'Christian', 'Sikh', 'Other'],
    languages: ['Urdu', 'English', 'Punjabi', 'Pashto', 'Sindhi', 'Balochi', 'Saraiki'],
    states: ['Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan', 'Islamabad', 'Gilgit-Baltistan', 'Azad Kashmir'],
  },
  {
    name: 'Bangladesh',
    code: 'BD',
    currency: 'BDT',
    currencySymbol: '৳',
    religions: ['Muslim', 'Hindu', 'Buddhist', 'Christian', 'Other'],
    languages: ['Bengali', 'English', 'Chakma', 'Marma'],
    states: ['Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Barisal', 'Sylhet', 'Rangpur', 'Mymensingh'],
  },
  {
    name: 'Nepal',
    code: 'NP',
    currency: 'NPR',
    currencySymbol: 'Rs',
    religions: ['Hindu', 'Buddhist', 'Muslim', 'Christian', 'Kirat', 'Other'],
    languages: ['Nepali', 'Maithili', 'Bhojpuri', 'Tharu', 'Tamang', 'Newari', 'English'],
    states: ['Province 1', 'Madhesh', 'Bagmati', 'Gandaki', 'Lumbini', 'Karnali', 'Sudurpashchim'],
  },
  {
    name: 'Sri Lanka',
    code: 'LK',
    currency: 'LKR',
    currencySymbol: 'Rs',
    religions: ['Buddhist', 'Hindu', 'Muslim', 'Christian', 'Other'],
    languages: ['Sinhala', 'Tamil', 'English'],
    states: ['Western', 'Central', 'Southern', 'Northern', 'Eastern', 'North Western', 'North Central', 'Uva', 'Sabaragamuwa'],
  },
  {
    name: 'United States',
    code: 'US',
    currency: 'USD',
    currencySymbol: '$',
    religions: ['Christian', 'Hindu', 'Muslim', 'Jewish', 'Buddhist', 'Sikh', 'Other'],
    languages: ['English', 'Spanish', 'Hindi', 'Telugu', 'Tamil', 'Gujarati', 'Bengali', 'Punjabi', 'Urdu', 'Chinese', 'Korean', 'Vietnamese', 'Arabic'],
    states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    currency: 'GBP',
    currencySymbol: '£',
    religions: ['Christian', 'Muslim', 'Hindu', 'Sikh', 'Jewish', 'Buddhist', 'Other'],
    languages: ['English', 'Hindi', 'Urdu', 'Gujarati', 'Punjabi', 'Bengali', 'Tamil', 'Welsh'],
    states: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
  },
  {
    name: 'Canada',
    code: 'CA',
    currency: 'CAD',
    currencySymbol: 'C$',
    religions: ['Christian', 'Muslim', 'Hindu', 'Sikh', 'Jewish', 'Buddhist', 'Other'],
    languages: ['English', 'French', 'Hindi', 'Punjabi', 'Gujarati', 'Tamil', 'Urdu', 'Bengali'],
    states: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan'],
  },
  {
    name: 'Australia',
    code: 'AU',
    currency: 'AUD',
    currencySymbol: 'A$',
    religions: ['Christian', 'Hindu', 'Muslim', 'Buddhist', 'Sikh', 'Jewish', 'Other'],
    languages: ['English', 'Hindi', 'Punjabi', 'Tamil', 'Telugu', 'Gujarati', 'Bengali', 'Malayalam', 'Chinese'],
    states: ['New South Wales', 'Victoria', 'Queensland', 'South Australia', 'Western Australia', 'Tasmania', 'Northern Territory', 'Australian Capital Territory'],
  },
  {
    name: 'United Arab Emirates',
    code: 'AE',
    currency: 'AED',
    currencySymbol: 'د.إ',
    religions: ['Muslim', 'Hindu', 'Christian', 'Sikh', 'Buddhist', 'Other'],
    languages: ['Arabic', 'English', 'Hindi', 'Urdu', 'Malayalam', 'Tamil', 'Telugu', 'Bengali'],
    states: ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'],
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
    currency: 'SAR',
    currencySymbol: '﷼',
    religions: ['Muslim', 'Christian', 'Hindu', 'Other'],
    languages: ['Arabic', 'English', 'Hindi', 'Urdu', 'Malayalam', 'Tamil', 'Telugu', 'Bengali'],
    states: ['Riyadh', 'Makkah', 'Madinah', 'Eastern Province', 'Asir', 'Tabuk', 'Hail', 'Jazan'],
  },
  {
    name: 'Malaysia',
    code: 'MY',
    currency: 'MYR',
    currencySymbol: 'RM',
    religions: ['Muslim', 'Buddhist', 'Hindu', 'Christian', 'Sikh', 'Other'],
    languages: ['Malay', 'English', 'Chinese', 'Tamil', 'Telugu', 'Malayalam', 'Hindi'],
    states: ['Johor', 'Kedah', 'Kelantan', 'Kuala Lumpur', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Penang', 'Perak', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu'],
  },
  {
    name: 'Singapore',
    code: 'SG',
    currency: 'SGD',
    currencySymbol: 'S$',
    religions: ['Buddhist', 'Christian', 'Muslim', 'Hindu', 'Taoist', 'Other'],
    languages: ['English', 'Mandarin', 'Malay', 'Tamil', 'Hindi'],
    states: ['Central', 'East', 'North', 'North-East', 'West'],
  },
  {
    name: 'South Africa',
    code: 'ZA',
    currency: 'ZAR',
    currencySymbol: 'R',
    religions: ['Christian', 'Muslim', 'Hindu', 'Jewish', 'Traditional', 'Other'],
    languages: ['English', 'Afrikaans', 'Zulu', 'Xhosa', 'Hindi', 'Tamil', 'Telugu', 'Gujarati'],
    states: ['Gauteng', 'KwaZulu-Natal', 'Western Cape', 'Eastern Cape', 'Free State', 'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape'],
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    currency: 'NZD',
    currencySymbol: 'NZ$',
    religions: ['Christian', 'Hindu', 'Muslim', 'Buddhist', 'Sikh', 'Other'],
    languages: ['English', 'Maori', 'Hindi', 'Punjabi', 'Gujarati', 'Tamil'],
    states: ['Auckland', 'Wellington', 'Canterbury', 'Waikato', 'Bay of Plenty', 'Otago', 'Hawke\'s Bay', 'Manawatu-Wanganui'],
  },
];

export const religionData: Record<string, ReligionData> = {
  Hindu: {
    name: 'Hindu',
    hasManglik: true,
    hasGotra: true,
    castes: ['Brahmin', 'Kshatriya', 'Vaishya', 'Maratha', 'Rajput', 'Jat', 'Patel', 'Agarwal', 'Kayastha', 'Reddy', 'Naidu', 'Nair', 'Iyer', 'Iyengar', 'Lingayat', 'Vokkaliga', 'Goud', 'Yadav', 'Kurmi', 'Kamma', 'Velama', 'Mudaliar', 'Pillai', 'Chettiar', 'Gowda', 'Bunt', 'Ezhava', 'Thiyya', 'Vanniyar', 'Gounder', 'Nadar', 'Thevar', 'Devanga', 'Kapu', 'Balija', 'Khandayat', 'Khatri', 'Arora', 'Bania', 'Gupta', 'Maheshwari', 'Oswal', 'Porwal', 'Lohana', 'Sindhi', 'Scheduled Caste', 'Scheduled Tribe', 'OBC', 'Other'],
    subCastes: {
      'Brahmin': ['Saraswat', 'Gaur', 'Kanyakubja', 'Maithil', 'Saryupareen', 'Chitpavan', 'Deshastha', 'Karhade', 'Havyaka', 'Hoysala', 'Smartha', 'Madhwa', 'Namboodiri', 'Niyogi', 'Vaidiki', 'Telugu', 'Tamil', 'Other'],
      'Rajput': ['Chauhan', 'Rathore', 'Sisodia', 'Parmar', 'Solanki', 'Tomar', 'Chandel', 'Bhati', 'Kachwaha', 'Jadeja', 'Other'],
      'Patel': ['Leuva Patel', 'Kadva Patel', 'Other'],
      'Agarwal': ['Agarwal', 'Goel', 'Gupta', 'Bansal', 'Mittal', 'Singhal', 'Jindal', 'Mangal', 'Other'],
    },
    gotras: ['Kashyap', 'Bharadwaj', 'Vashistha', 'Vishwamitra', 'Gautam', 'Jamadagni', 'Atri', 'Agastya', 'Angiras', 'Bhrigu', 'Kaushik', 'Mudgal', 'Sandilya', 'Parashar', 'Shandilya', 'Garg', 'Maudgalya', 'Other'],
    stars: ['Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Satabisha', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'],
    raasis: ['Mesha (Aries)', 'Vrishabha (Taurus)', 'Mithuna (Gemini)', 'Karka (Cancer)', 'Simha (Leo)', 'Kanya (Virgo)', 'Tula (Libra)', 'Vrishchika (Scorpio)', 'Dhanu (Sagittarius)', 'Makara (Capricorn)', 'Kumbha (Aquarius)', 'Meena (Pisces)'],
  },
  Muslim: {
    name: 'Muslim',
    hasManglik: false,
    hasGotra: false,
    castes: ['Sunni', 'Shia', 'Ahmadiyya', 'Bohra', 'Khoja', 'Memon', 'Pathan', 'Syed', 'Sheikh', 'Mughal', 'Ansari', 'Qureshi', 'Malik', 'Khan', 'Deobandi', 'Barelvi', 'Salafi', 'Other'],
    subCastes: {
      'Sunni': ['Hanafi', 'Shafii', 'Maliki', 'Hanbali', 'Other'],
      'Shia': ['Ithna Ashari', 'Ismaili', 'Zaydi', 'Other'],
    },
  },
  Christian: {
    name: 'Christian',
    hasManglik: false,
    hasGotra: false,
    castes: ['Roman Catholic', 'Protestant', 'Syrian Christian', 'Orthodox', 'Pentecostal', 'Church of South India', 'Church of North India', 'Methodist', 'Baptist', 'Anglican', 'Evangelical', 'Seventh Day Adventist', 'Latin Catholic', 'Marthoma', 'Jacobite', 'Knanaya', 'Born Again', 'Brethren', 'Other'],
    subCastes: {},
  },
  Sikh: {
    name: 'Sikh',
    hasManglik: false,
    hasGotra: true,
    castes: ['Jat Sikh', 'Khatri Sikh', 'Ramgarhia', 'Arora Sikh', 'Saini Sikh', 'Rajput Sikh', 'Labana', 'Bhatia', 'Ghumar', 'Ravidasia', 'Majhabi', 'Other'],
    subCastes: {},
    gotras: ['Sidhu', 'Sandhu', 'Dhillon', 'Grewal', 'Gill', 'Brar', 'Bajwa', 'Cheema', 'Randhawa', 'Virk', 'Aulakh', 'Bhullar', 'Chahal', 'Deol', 'Other'],
  },
  Buddhist: {
    name: 'Buddhist',
    hasManglik: false,
    hasGotra: false,
    castes: ['Theravada', 'Mahayana', 'Vajrayana', 'Neo-Buddhist', 'Other'],
    subCastes: {},
  },
  Jain: {
    name: 'Jain',
    hasManglik: false,
    hasGotra: true,
    castes: ['Digambar', 'Shwetambar', 'Agarwal Jain', 'Oswal Jain', 'Porwal Jain', 'Khandelwal Jain', 'Other'],
    subCastes: {
      'Digambar': ['Bisapanthi', 'Terapanthi', 'Other'],
      'Shwetambar': ['Murtipujak', 'Sthanakwasi', 'Terapanthi', 'Other'],
    },
    gotras: ['Kashyap', 'Gautam', 'Vashistha', 'Other'],
  },
  Parsi: {
    name: 'Parsi',
    hasManglik: false,
    hasGotra: false,
    castes: ['Irani', 'Parsi', 'Other'],
    subCastes: {},
  },
  Jewish: {
    name: 'Jewish',
    hasManglik: false,
    hasGotra: false,
    castes: ['Orthodox', 'Conservative', 'Reform', 'Bene Israel', 'Cochin Jewish', 'Baghdadi', 'Other'],
    subCastes: {},
  },
  Kirat: {
    name: 'Kirat',
    hasManglik: false,
    hasGotra: false,
    castes: ['Rai', 'Limbu', 'Sunuwar', 'Yakkha', 'Other'],
    subCastes: {},
  },
  Traditional: {
    name: 'Traditional',
    hasManglik: false,
    hasGotra: false,
    castes: ['Traditional African', 'Other'],
    subCastes: {},
  },
  Taoist: {
    name: 'Taoist',
    hasManglik: false,
    hasGotra: false,
    castes: ['Quanzhen', 'Zhengyi', 'Other'],
    subCastes: {},
  },
  Other: {
    name: 'Other',
    hasManglik: false,
    hasGotra: false,
    castes: ['Other'],
    subCastes: {},
  },
};

export const educationOptions = [
  'Below 10th',
  '10th',
  '12th / HSC',
  'Diploma',
  'B.A.',
  'B.Sc.',
  'B.Com.',
  'BBA',
  'BCA',
  'B.Tech / B.E.',
  'B.Arch',
  'B.Ed',
  'BDS',
  'MBBS',
  'BPharm',
  'B.L / LLB',
  'BAMS',
  'BHMS',
  'BPT',
  'BVSc',
  'BSW',
  'M.A.',
  'M.Sc.',
  'M.Com.',
  'MBA',
  'MCA',
  'M.Tech / M.E.',
  'M.Ed',
  'MDS',
  'MD',
  'MS (Medical)',
  'MPharm',
  'ML / LLM',
  'MSW',
  'MPT',
  'CA',
  'CS',
  'ICWA / CMA',
  'PhD / Doctorate',
  'Post Doctoral',
  'Other',
];

export const occupationOptions = [
  'Private Job',
  'Government Job',
  'Business / Self Employed',
  'Defense / Armed Forces',
  'Civil Services',
  'Doctor',
  'Engineer',
  'Lawyer',
  'Teacher / Professor',
  'Chartered Accountant',
  'IT Professional',
  'Architect',
  'Scientist',
  'Pilot',
  'Merchant Navy',
  'Banking Professional',
  'Police / Law Enforcement',
  'Farmer / Agriculturist',
  'Artist / Designer',
  'Journalist / Media',
  'Nurse / Paramedic',
  'Pharmacist',
  'Dentist',
  'Veterinarian',
  'Social Worker',
  'Student',
  'Not Working',
  'Retired',
  'Other',
];

export const heightOptions = [
  "4'0\" (122 cm)", "4'1\" (124 cm)", "4'2\" (127 cm)", "4'3\" (130 cm)",
  "4'4\" (132 cm)", "4'5\" (135 cm)", "4'6\" (137 cm)", "4'7\" (140 cm)",
  "4'8\" (142 cm)", "4'9\" (145 cm)", "4'10\" (147 cm)", "4'11\" (150 cm)",
  "5'0\" (152 cm)", "5'1\" (155 cm)", "5'2\" (157 cm)", "5'3\" (160 cm)",
  "5'4\" (163 cm)", "5'5\" (165 cm)", "5'6\" (168 cm)", "5'7\" (170 cm)",
  "5'8\" (173 cm)", "5'9\" (175 cm)", "5'10\" (178 cm)", "5'11\" (180 cm)",
  "6'0\" (183 cm)", "6'1\" (185 cm)", "6'2\" (188 cm)", "6'3\" (191 cm)",
  "6'4\" (193 cm)", "6'5\" (196 cm)", "6'6\" (198 cm)", "6'7\" (201 cm)",
];

export const bodyTypeOptions = ['Slim', 'Average', 'Athletic', 'Heavy', 'Plump'];
export const complexionOptions = ['Very Fair', 'Fair', 'Wheatish', 'Wheatish Brown', 'Dark'];
export const bloodGroupOptions = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Don\'t Know'];
export const maritalStatusOptions = ['Never Married', 'Divorced', 'Widowed', 'Awaiting Divorce', 'Annulled'];
export const familyTypeOptions = ['Joint', 'Nuclear', 'Other'];
export const familyValuesOptions = ['Traditional', 'Moderate', 'Liberal'];
export const familyStatusOptions = ['Middle Class', 'Upper Middle Class', 'Rich', 'Affluent'];
export const dietOptions = ['Vegetarian', 'Non-Vegetarian', 'Eggetarian', 'Vegan', 'Jain'];

export const hobbiesOptions = [
  'Reading', 'Writing', 'Cooking', 'Painting', 'Singing', 'Dancing',
  'Photography', 'Traveling', 'Sports', 'Music', 'Gardening', 'Yoga',
  'Meditation', 'Movies', 'Gaming', 'Crafts', 'Blogging', 'Vlogging',
  'Swimming', 'Cycling', 'Hiking', 'Gym / Fitness', 'Social Service',
  'Chess', 'Cricket', 'Badminton', 'Tennis', 'Football', 'Table Tennis',
];

export const interestOptions = [
  'Art & Culture', 'Astronomy', 'Business & Entrepreneurship', 'Cars & Bikes',
  'Comedy', 'Cooking & Food', 'Current Affairs', 'Fashion & Styling',
  'Finance & Investing', 'Health & Wellness', 'History', 'Literature',
  'Nature & Wildlife', 'Philosophy', 'Politics', 'Science & Technology',
  'Spirituality', 'Travel & Adventure', 'Volunteering',
];

export const incomeOptions = [
  'Below 1 Lakh', '1-2 Lakh', '2-3 Lakh', '3-4 Lakh', '4-5 Lakh',
  '5-7.5 Lakh', '7.5-10 Lakh', '10-15 Lakh', '15-20 Lakh', '20-30 Lakh',
  '30-50 Lakh', '50-75 Lakh', '75 Lakh - 1 Crore', 'Above 1 Crore',
  'Below $10K', '$10K-$25K', '$25K-$50K', '$50K-$75K', '$75K-$100K',
  '$100K-$150K', '$150K-$200K', 'Above $200K',
  'Not Applicable',
];
