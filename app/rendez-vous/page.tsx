import type { Metadata } from "next";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Prendre rendez-vous",
  description: `Prenez rendez-vous en ligne ou par téléphone pour votre examen d'imagerie médicale à ${siteConfig.city}.`,
};

export default function RendezVousPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Rendez-vous"
        title="Prendre rendez-vous"
        lede="Choisissez le canal qui vous convient : la réservation en ligne est disponible à tout moment, le secrétariat vous répond aux horaires d'ouverture."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Reveal>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener"
            className="flex h-full flex-col border-t-2 border-accent bg-primary p-7 text-surface transition-transform hover:-translate-y-0.5"
          >
            <CalendarCheck className="size-8" strokeWidth={1.5} aria-hidden />
            <h2 className="mt-4 font-display text-xl font-semibold">En ligne</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-surface/75">
              Réservez votre créneau en quelques clics, 24h/24, depuis votre téléphone ou votre ordinateur.
            </p>
            <span className="mt-5 inline-block rounded-md bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white">
              Réserver en ligne
            </span>
          </a>
        </Reveal>

        <Reveal delay={80}>
          <a
            href={siteConfig.phoneHref}
            className="flex h-full flex-col border-t-2 border-line bg-surface p-7 transition-colors hover:border-accent"
          >
            <Phone className="size-8 text-primary" strokeWidth={1.5} aria-hidden />
            <h2 className="mt-4 font-display text-xl font-semibold text-primary">
              Par téléphone
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
              Notre secrétariat vous conseille sur l&apos;examen et sa préparation, et vous propose le premier créneau disponible.
            </p>
            <span className="mt-5 text-sm font-semibold text-accent">{siteConfig.phone}</span>
          </a>
        </Reveal>

        <Reveal delay={160}>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener"
            className="flex h-full flex-col border-t-2 border-line bg-surface p-7 transition-colors hover:border-accent"
          >
            <MessageCircle className="size-8 text-primary" strokeWidth={1.5} aria-hidden />
            <h2 className="mt-4 font-display text-xl font-semibold text-primary">
              Sur WhatsApp
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
              Envoyez votre ordonnance en photo, nous vous rappelons pour confirmer le rendez-vous.
            </p>
            <span className="mt-5 text-sm font-semibold text-accent">{siteConfig.whatsapp}</span>
          </a>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div className="mt-12 border-l-2 border-accent bg-primary-soft/40 p-6">
          <p className="font-semibold text-primary">Le jour de votre examen</p>
          <p className="mt-2 max-w-3xl leading-relaxed text-ink-soft">
            Pensez à apporter votre ordonnance, vos anciens examens (clichés et comptes rendus), votre carte
            d&apos;identité et votre carte de mutuelle. La préparation propre à chaque examen est détaillée sur
            sa page dédiée et rappelée lors de la prise de rendez-vous.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
