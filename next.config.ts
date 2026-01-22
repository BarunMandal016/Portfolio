import type { NextConfig } from "next";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/repo-name" : "",
  assetPrefix: isGithubPages ? "/repo-name/" : "",
};

export default nextConfig;
