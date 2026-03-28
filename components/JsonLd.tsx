import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from "@/data";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    email: EMAIL,
    jobTitle: "Associate Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "PMsquare",
    },
    description: SITE_DESCRIPTION,
    sameAs: [GITHUB_URL, LINKEDIN_URL],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "AWS",
      "PostgreSQL",
      "Docker",
      "FastAPI",
      "Python",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "IOE-ERC, Dharan",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
