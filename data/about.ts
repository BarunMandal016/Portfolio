import type { ImpactMetric } from "@/types";

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    metric: "~40%",
    label: "Page load reduction",
    detail:
      "Via lazy loading, infinite scroll, and server-side pagination",
  },
  {
    metric: "Zero",
    label: "Downtime deployments",
    detail:
      "Automated CI/CD with GitHub Actions across staging and production",
  },
  {
    metric: "2",
    label: "AI-powered products",
    detail:
      "HireMatch candidate screening and Slack sales intelligence bot",
  },
];
