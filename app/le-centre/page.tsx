import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ImagingMotif } from "@/components/ImagingMotif";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Le centre",
  description: `Présentation de ${siteConfig.name} : équipe de radiologues, équipements de dernière génération et engagement qualité au service des patients.`,
};

/** TODO-CLIENT: compléter avec l'équipe réelle (noms, titres, photos, bios) */
const team = [
  {
    name: "Dr — à compléter",
    role: "Radiologue, spécialisé en imagerie de la femme",
  },
  {
    name: "Dr — à compléter",
    role: "Radiologue, spécialisé en imagerie ostéo-articulaire",
  },
  {
    name: "Dr — à compléter",
    role: "Radiologue, spécialisé en neuro-imagerie",
  },
];

/** TODO-CLIENT: adapter à l'équipement réel du centre (marques, modèles) */
const equipment = [
  "IRM de dernière génération, tunnel large et silencieux",
  "Scanner multi-détecteurs basse dose, coupes inframillimétriques",
  "Mammographe numérique plein champ",
  "Échographes haut de gamme avec modules Doppler",
  "Salles de radiologie entièrement numérisées à capteurs plans",
  "Ostéodensitomètre et panoramique dentaire numériques",
];

export default function CentrePage() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <SectionHeading
            eyebrow="Le centre"
            title="Un centre pensé pour les patients"
            lede={`${siteConfig.name} met à la disposition des patients de ${siteConfig.city} un plateau technique complet d'imagerie médicale. Notre priorité : un diagnostic fiable, des délais courts et un accueil attentif, du premier appel à la remise des résultats.`}
          />
          <Reveal delay={120} className="hidden md:block">
            {/* TODO-CLIENT: remplacer par une photo de la façade ou de l'accueil */}
            <ImagingMotif className="mx-auto w-full max-w-xs" />
          </Reveal>
        </div>
      </Section>

      <Section tinted>
        <SectionHeading
          eyebrow="Notre équipe"
          title="Des radiologues spécialisés"
          lede="Chaque examen est réalisé et interprété par un radiologue, avec un compte rendu détaillé transmis à votre médecin."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={`${member.name}-${i}`} delay={i * 80}>
              <div className="border-t-2 border-line bg-surface p-6">
                {/* TODO-CLIENT: photo du praticien */}
                <span className="grid size-14 place-items-center rounded-full bg-primary-soft font-display text-xl font-semibold text-primary">
                  {member.name.charAt(0)}
                </span>
                <p className="mt-4 font-display text-lg font-semibold text-primary">
                  {member.name}
                </p>
                <p className="mt-1 text-sm text-ink-soft">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Plateau technique"
          title="Des équipements de dernière génération"
          lede="Nous investissons en continu dans des équipements récents : meilleure qualité d'image, examens plus rapides et doses de rayons réduites."
        />
        <ul className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-2">
          {equipment.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-ink-soft">
              <CheckCircle2 className="mt-1 size-4.5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
