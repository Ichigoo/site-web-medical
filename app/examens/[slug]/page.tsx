import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileCheck,
  Phone,
} from "lucide-react";
import { ExamIcon } from "@/components/ExamIcon";
import { exams, getExam } from "@/content/exams";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return exams.map((exam) => ({ slug: exam.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exam = getExam(slug);
  if (!exam) return {};
  return {
    title: exam.fullTitle,
    description: exam.excerpt,
  };
}

function List({ items, variant = "check" }: { items: string[]; variant?: "check" | "warn" }) {
  const Icon = variant === "warn" ? AlertTriangle : CheckCircle2;
  const color = variant === "warn" ? "text-accent" : "text-primary";
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
          <Icon className={`mt-1 size-4.5 shrink-0 ${color}`} strokeWidth={1.75} aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ExamPage({ params }: Props) {
  const { slug } = await params;
  const exam = getExam(slug);
  if (!exam) notFound();

  return (
    <>
      {/* En-tête */}
      <section className="bg-primary text-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-18">
          <Link
            href="/examens"
            className="inline-flex items-center gap-1.5 text-sm text-surface/70 hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Tous les examens
          </Link>
          <div className="mt-6 flex items-start gap-5">
            <span className="hidden rounded-full bg-white/10 p-4 sm:grid">
              <ExamIcon name={exam.icon} className="size-9 text-surface" />
            </span>
            <div>
              <h1 className="font-display text-3xl font-semibold md:text-4xl">
                {exam.fullTitle}
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-surface/80">{exam.excerpt}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-12">
          <section>
            <h2 className="scanline font-display text-2xl font-semibold text-primary">
              L&apos;examen
            </h2>
            <div className="mt-7 space-y-4">
              {exam.description.map((p) => (
                <p key={p} className="leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="scanline font-display text-2xl font-semibold text-primary">
              Indications
            </h2>
            <List items={exam.indications} />
          </section>

          <section>
            <h2 className="scanline font-display text-2xl font-semibold text-primary">
              Déroulement
            </h2>
            <List items={exam.procedure} />
          </section>

          <section className="border-l-2 border-accent bg-primary-soft/40 p-6">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-semibold text-primary">
              <ClipboardList className="size-6 text-accent" strokeWidth={1.75} aria-hidden />
              Votre préparation
            </h2>
            <List items={exam.preparation} />
          </section>

          <section>
            <h2 className="scanline font-display text-2xl font-semibold text-primary">
              Précautions & contre-indications
            </h2>
            <List items={exam.precautions} variant="warn" />
          </section>
        </div>

        {/* Colonne pratique */}
        <aside className="h-fit space-y-6 lg:sticky lg:top-24">
          <div className="border border-line bg-surface p-6">
            <div className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
              <div>
                <p className="font-semibold text-primary">Durée</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{exam.duration}</p>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <FileCheck className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
              <div>
                <p className="font-semibold text-primary">Résultats</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{exam.results}</p>
              </div>
            </div>
          </div>

          <div className="bg-primary p-6 text-surface">
            <p className="font-display text-lg font-semibold">
              Prendre rendez-vous
            </p>
            <p className="mt-2 text-sm text-surface/75">
              En ligne en quelques clics, ou par téléphone auprès de notre secrétariat.
            </p>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener"
              className="mt-4 block rounded-md bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
            >
              Réserver en ligne
            </a>
            <a
              href={siteConfig.phoneHref}
              className="mt-3 flex items-center justify-center gap-2 rounded-md border border-white/30 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              <Phone className="size-4" aria-hidden />
              {siteConfig.phone}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
