export interface AcademicCycle {
  id: string;
  name: string;
  subtitle: string;
  ageRange: string;
  levels: string[];
  objectives: string[];
  practicalInfo: {
    hours: string;
    classSize: string;
    supervision: string;
    languages: string;
  };
  confirmed: boolean;
}

export interface StaffProfile {
  id: string;
  role: string;
  name: string;
  title: string;
  description: string;
  specialty: string;
  isPlaceholder: boolean;
}

export interface NewsArticle {
  id: string;
  date: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  isPendingDate?: boolean;
}

export interface InquiryFormData {
  parentFullName: string;
  email: string;
  phone: string;
  childAgeOrGrade: string;
  schoolYear: string;
  message: string;
  gdprConsent: boolean;
}

export interface SchoolConfig {
  name: string;
  motto: string;
  address: string;
  phone: string;
  email: string;
  receptionHours: string;
  socialNetworks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  registrationPeriod: string;
}
