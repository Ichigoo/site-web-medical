import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { articles, formatDate } from "@/content/actualites";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Conseils santé, informations sur les examens d'imagerie et actualités du centre.",
};

export default function ActualitesPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Actualités"
        title="Conseils & informations santé"
        lede="Des articles courts, rédigés par notre équipe, pour mieux comprendre les examens d'imagerie et les dépistages recommandés."
      />
      <div className="mt-12 space-y-10">
        {articles.map((article, i) => (
          <Reveal key={article.slug} delay={i * 60}>
            <article className="border-b border-line pb-10">
              <p className="text-xs tracking-wide text-ink-soft uppercase">
                {formatDate(article.date)}
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-primary">
                <Link href={`/actualites/${article.slug}`} className="hover:underline">
                  {article.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">{article.excerpt}</p>
              <Link
                href={`/actualites/${article.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-deep"
              >
                Lire l&apos;article
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
