// ── Navigation ──
export interface NavItem {
  name: string;
  href: string;
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

// ── Contact ──
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

// ── Assign Task ──
export interface TaskComplexity {
  label: string;
  duration: string;
}

// ── Home page ──
export interface HomeExperience {
  role: string;
  company: string;
  period: string;
}

export interface HomeProject {
  title: string
  description: string
  tag: string
  accent: "blue" | "purple" | "amber"
  visual: { node: string; sub: string }
  metrics: string[]
  tech: string[]
  details: string[]
}

// ── Terminal ──
export type TerminalResponses = Record<string, string>;
