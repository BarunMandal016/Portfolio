export const GITHUB_USERNAME = "BarunMandal016";

const API_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface ContributionData {
  total: { lastYear: number };
  contributions: ContributionDay[];
}

export async function fetchContributions(
  signal?: AbortSignal
): Promise<ContributionData> {
  const res = await fetch(API_URL, { signal });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}
