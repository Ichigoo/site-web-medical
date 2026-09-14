import type { NextConfig } from "next";

// GITHUB_PAGES=true est défini par le workflow de déploiement GitHub Pages :
// le site y est servi sous /site-web-medical, d'où le basePath conditionnel.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/site-web-medical" : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
