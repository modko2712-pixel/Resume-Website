export type Language = "th" | "en";

export type ClayTone = "lavender" | "peach" | "mint" | "sky" | "butter" | "rose";

export interface BilingualText {
  th: string;
  en: string;
}

export interface ProjectItem {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  category: "iot" | "web" | "hardware";
  description: BilingualText;
  highlights: {
    th: string[];
    en: string[];
  };
  technologies: string[];
}

export interface EducationItem {
  degree: BilingualText;
  institution: BilingualText;
  period: BilingualText;
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

export interface CourseItem {
  id: string;
  category: "iot" | "web" | "ai" | "hardware";
  tone: ClayTone;
  badge: BilingualText;
  title: BilingualText;
  description: BilingualText;
  level: BilingualText;
  duration: BilingualText;
  lessonsCount: number;
  studentsCount: string;
  rating: number;
  xpReward: number;
  tools: string[];
  syllabus: {
    th: string[];
    en: string[];
  };
}

export interface ProgressLesson {
  id: string;
  title: BilingualText;
  duration: string;
  xp: number;
  defaultCompleted: boolean;
}

export interface ProgressTrack {
  id: string;
  tone: ClayTone;
  name: BilingualText;
  subtitle: BilingualText;
  badgeName: BilingualText;
  weeklyMinutes: number[];
  lessons: ProgressLesson[];
}

export interface TestimonialItem {
  id: string;
  tone: ClayTone;
  name: BilingualText;
  role: BilingualText;
  course: BilingualText;
  initials: string;
  rating: number;
  quote: BilingualText;
  outcome: BilingualText;
}

export interface EnrollmentPlan {
  id: string;
  tone: ClayTone;
  popular?: boolean;
  name: BilingualText;
  price: BilingualText;
  period: BilingualText;
  description: BilingualText;
  features: {
    th: string[];
    en: string[];
  };
  ctaLabel: BilingualText;
}
