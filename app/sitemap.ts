import type { MetadataRoute } from "next";
import { exams } from "@/content/exams";
import { articles } from "@/content/actualites";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/le-centre",
    "/examens",
    "/actualites",
    "/contact",
    "/rendez-vous",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly" as const,
  }));

  const examRoutes = exams.map((exam) => ({
    url: `${siteConfig.url}/examens/${exam.slug}`,
    changeFrequency: "monthly" as const,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.url}/actualites/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "yearly" as const,
  }));

  return [...staticRoutes, ...examRoutes, ...articleRoutes];
}
