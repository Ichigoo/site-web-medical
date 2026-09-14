import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles, formatDate, getArticle } from "@/content/actualites";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-18">
      <Link
        href="/actualites"
        className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Toutes les actualités
      </Link>
      <p className="mt-8 text-xs tracking-wide text-ink-soft uppercase">
        {formatDate(article.date)}
      </p>
      <h1 className="scanline mt-2 font-display text-3xl font-semibold text-primary md:text-4xl">
        {article.title}
      </h1>
      <div className="mt-10 space-y-5">
        {article.body.map((p) => (
          <p key={p} className="text-[17px] leading-relaxed text-ink-soft">
            {p}
          </p>
        ))}
      </div>
      <div className="mt-12 border-l-2 border-accent bg-primary-soft/40 p-6">
        <p className="font-semibold text-primary">Une question, un examen à programmer ?</p>
        <p className="mt-2 text-ink-soft">
          Prenez rendez-vous{" "}
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener"
            className="font-semibold text-accent hover:text-accent-deep"
          >
            en ligne
          </a>{" "}
          ou appelez le{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-accent hover:text-accent-deep">
            {siteConfig.phone}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
