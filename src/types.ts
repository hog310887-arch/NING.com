export type Language = 'en' | 'zh';

export interface ProjectDetails {
  challenge: { en: string; zh: string };
  solution: { en: string; zh: string };
  duration: string;
  role: { en: string; zh: string };
  metrics?: { en: string; zh: string };
}

export interface Project {
  id: string;
  title: { en: string; zh: string };
  category: 'uiux' | 'brand' | 'motion' | 'code';
  tag: { en: string; zh: string };
  year: string;
  client: string;
  overview: { en: string; zh: string };
  imageUrl: string;
  details: ProjectDetails;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: { en: string; zh: string };
  company: string;
  description: { en: string; zh: string };
}

export interface SkillGroup {
  category: { en: string; zh: string };
  skills: string[];
}
