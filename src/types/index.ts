export type Language = "th" | "en";

export interface ProjectItem {
  id: string;
  title: {
    th: string;
    en: string;
  };
  subtitle: {
    th: string;
    en: string;
  };
  category: "iot" | "web" | "hardware";
  description: {
    th: string;
    en: string;
  };
  highlights: {
    th: string[];
    en: string[];
  };
  technologies: string[];
}

export interface EducationItem {
  degree: {
    th: string;
    en: string;
  };
  institution: {
    th: string;
    en: string;
  };
  period: {
    th: string;
    en: string;
  };
  details: {
    th: string[];
    en: string[];
  };
}

export interface ContactInfo {
  nameTh: string;
  nameEn: string;
  phone: string;
  email: string;
  locationTh: string;
  locationEn: string;
  targetRolesTh: string[];
  targetRolesEn: string[];
}
