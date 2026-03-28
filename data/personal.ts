import type { NavItem, ContactInfo, SocialLink } from "@/types";

export const SITE_NAME = "Barun Mandal";
export const SITE_TITLE = "Barun Mandal | Full-Stack Developer";
export const SITE_DESCRIPTION =
  "Associate Full-Stack Developer at PMsquare. Building scalable applications with Next.js, AWS, and AI. Computer Engineer from Nepal.";
export const SITE_KEYWORDS = [
  "Barun Mandal",
  "Full-Stack Developer",
  "Frontend Developer",
  "Next.js Developer",
  "React Developer",
  "TypeScript",
  "Nepal",
  "PMsquare",
  "PMsquare Nepal",
  "Software Engineer",
  "Portfolio",
  "IOE ERC",
  "Purwanchal Campus",
];
export const SITE_URL = "https://barunmandal016.github.io/portfolio";

export const EMAIL = "barun.mandalbct@gmail.com";
export const PHONE = "+977-9824865280";
export const LOCATION = "Nepal";
export const GITHUB_URL = "https://github.com/BarunMandal016";
export const LINKEDIN_URL = "https://www.linkedin.com/in/barun-mandal16/";

export const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    label: "Phone",
    value: PHONE,
    href: "tel:+9779824865280",
  },
  {
    label: "Location",
    value: LOCATION,
    href: null,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: GITHUB_URL,
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
  },
];

export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: GITHUB_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "Email", href: `mailto:${EMAIL}` },
];
