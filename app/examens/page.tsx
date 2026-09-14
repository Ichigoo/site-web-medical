import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ExamIcon } from "@/components/ExamIcon";
import { exams } from "@/content/exams";

export const metadata: Metadata = {
  title: "Nos examens d'imagerie médicale",
  description:
    "IRM, scanner, échographie, mammographie, radiologie générale, ostéodensitométrie, panoramique dentaire et radiologie interventionnelle : découvrez tous nos examens.",
};

export default function ExamsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Nos examens"
        title="Tous les examens d'imagerie, sur place"
        lede="Sélectionnez un examen pour connaître son déroulement, la préparation nécessaire et les précautions à prendre."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {exams.map((exam, i) => (
          <Reveal key={exam.slug} delay={(i % 3) * 70}>
            <Link
              href={`/examens/${exam.slug}`}
              className="group flex h-full flex-col border-t-2 border-line bg-surface p-6 transition-colors hover:border-accent"
            >
              <ExamIcon name={exam.icon} className="size-8 text-primary" />
              <h2 className="mt-4 font-display text-xl font-semibold text-primary">
                {exam.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {exam.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Découvrir l&apos;examen
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
