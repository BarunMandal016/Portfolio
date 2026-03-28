// ── Navigation ──
export interface NavItem {
  name: string;
  href: string;
}

// ── Experience ──
export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: "work" | "education";
  highlights: string[];
  tech: string[];
}

// ── Skills ──
export interface SkillBar {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  accent: "blue" | "purple";
  bars: SkillBar[];
  pills: string[];
}

// ── Projects ──
export interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  liveUrl?: string;
}

// ── Contact ──
export interface ContactInfo {
  label: string;
  value: string;
  href: string | null;
}

export interface SocialLink {
  label: string;
  href: string;
}

// ── Contact Form ──
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ── Home page ──
export interface HomeExperience {
  role: string;
  company: string;
  period: string;
  highlight: string;
}

// ── Terminal ──
export type TerminalResponses = Record<string, string>;

// ── About ──
export interface ImpactMetric {
  metric: string;
  label: string;
  detail: string;
}
