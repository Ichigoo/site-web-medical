import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  FileCheck,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ExamIcon } from "@/components/ExamIcon";
import { ImagingMotif } from "@/components/ImagingMotif";
import { exams } from "@/content/exams";
import { articles, formatDate } from "@/content/actualites";
import { siteConfig } from "@/lib/site-config";

const reassurances = [
  {
    icon: FileCheck,
    title: "Résultats le jour même",
    text: "Compte rendu et images remis à la fin de votre examen dans la majorité des cas.",
  },
  {
    icon: ShieldCheck,
    title: "Basse dose",
    text: "Équipements numérisés à capteurs plans : une irradiation réduite au strict nécessaire.",
  },
  {
    icon: Stethoscope,
    title: "Radiologues spécialisés",
    text: "Chaque examen est réalisé et interprété par un radiologue expérimenté.",
  },
  {
    icon: CalendarCheck,
    title: "Rendez-vous rapides",
    text: "Prise de rendez-vous en ligne ou par téléphone, délais courts, urgences acceptées.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <Reveal>
            <p className="text-sm font-semibold tracking-widest uppercase text-accent">
              Imagerie médicale · {siteConfig.city}
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-primary md:text-5xl">
              Une imagerie de pointe, au service de votre santé
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              IRM, scanner, échographie, mammographie et radiologie numérisée :
              notre équipe vous accueille dans un plateau technique complet, avec
              des résultats remis le jour même.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener"
                className="rounded-md bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-deep"
              >
                Prendre rendez-vous
              </a>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 rounded-md border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-soft"
              >
                <Phone className="size-4" aria-hidden />
                {siteConfig.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} className="hidden md:block">
            {/* TODO-CLIENT: remplacer ce visuel par une photo du centre (IRM ou accueil) */}
            <ImagingMotif className="mx-auto w-full max-w-sm" />
          </Reveal>
        </div>
      </section>

      {/* Points de réassurance */}
      <Section tinted>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reassurances.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <item.icon className="size-8 text-accent" strokeWidth={1.5} aria-hidden />
              <h2 className="mt-4 font-display text-lg font-semibold text-primary">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Examens */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Nos examens"
            title="Un plateau technique complet"
            lede="De la radiographie standard à l'IRM, tous les examens d'imagerie sont réalisés sur place, sur des équipements de dernière génération."
          />
          <Link
            href="/examens"
            className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-deep"
          >
            Tous les examens
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {exams.map((exam, i) => (
            <Reveal key={exam.slug} delay={(i % 4) * 60}>
              <Link
                href={`/examens/${exam.slug}`}
                className="group block h-full border-t-2 border-line bg-surface p-5 transition-colors hover:border-accent"
              >
                <ExamIcon name={exam.icon} className="size-7 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                  {exam.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{exam.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  En savoir plus
                  <ArrowRight className="size-3.5" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Chiffres clés */}
      <section className="bg-primary text-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-semibold">{stat.value}</p>
              <p className="mt-1 text-sm tracking-wide text-surface/70 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Actualités */}
      {articles.length > 0 && (
        <Section>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Actualités" title="Conseils & informations santé" />
            <Link
              href="/actualites"
              className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-deep"
            >
              Toutes les actualités
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {articles.slice(0, 3).map((article, i) => (
              <Reveal key={article.slug} delay={i * 80}>
                <article>
                  <p className="text-xs tracking-wide text-ink-soft uppercase">
                    {formatDate(article.date)}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-primary">
                    <Link href={`/actualites/${article.slug}`} className="hover:underline">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {article.excerpt}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Infos pratiques */}
      <Section tinted>
        <div className="grid gap-10 md:grid-cols-2">
          <SectionHeading
            eyebrow="Infos pratiques"
            title="Venir au centre"
            lede="Le centre vous accueille du lundi au samedi. Les examens se font sur rendez-vous, en ligne ou par téléphone."
          />
          <Reveal delay={100}>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
                <div>
                  <p className="font-semibold text-primary">Adresse</p>
                  <p className="text-sm text-ink-soft">
                    {siteConfig.address.street}, {siteConfig.address.city}
                  </p>
                  <a
                    href={siteConfig.address.mapsUrl}
                    target="_blank"
                    rel="noopener"
                    className="text-sm font-semibold text-accent hover:text-accent-deep"
                  >
                    Itinéraire
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
                <div>
                  <p className="font-semibold text-primary">Horaires</p>
                  {siteConfig.hours.map((h) => (
                    <p key={h.days} className="text-sm text-ink-soft">
                      {h.days} : {h.hours}
                    </p>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
                <div>
                  <p className="font-semibold text-primary">Téléphone</p>
                  <a href={siteConfig.phoneHref} className="text-sm text-ink-soft hover:text-primary">
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
