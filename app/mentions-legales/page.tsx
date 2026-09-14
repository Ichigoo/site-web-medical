import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <Section>
      <SectionHeading eyebrow="Informations" title="Mentions légales" />
      <div className="mt-10 max-w-3xl space-y-8 leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-semibold text-primary">Éditeur du site</h2>
          {/* TODO-CLIENT: compléter raison sociale, RC, ICE, adresse du siège */}
          <p className="mt-2">
            {siteConfig.name}
            <br />
            {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.country}
            <br />
            Téléphone : {siteConfig.phone} — Email : {siteConfig.email}
            <br />
            Directeur de la publication : {siteConfig.legalDirector}
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-primary">Hébergement</h2>
          {/* TODO-CLIENT: adapter selon l'hébergeur retenu (Vercel / Cloudflare / Netlify) */}
          <p className="mt-2">Site hébergé par — à compléter.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-primary">
            Données personnelles
          </h2>
          <p className="mt-2">
            Ce site ne collecte aucune donnée personnelle et n&apos;utilise pas de cookies de suivi.
            La prise de rendez-vous en ligne s&apos;effectue via une application tierce, soumise à sa
            propre politique de confidentialité. Conformément à la loi 09-08 relative à la protection
            des données à caractère personnel, vous disposez d&apos;un droit d&apos;accès, de rectification
            et d&apos;opposition pour toute donnée communiquée au centre.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-primary">
            Contenu médical
          </h2>
          <p className="mt-2">
            Les informations publiées sur ce site sont fournies à titre informatif et ne remplacent
            en aucun cas une consultation médicale. Seul votre médecin peut poser une indication
            d&apos;examen et interpréter vos résultats.
          </p>
        </section>
      </div>
    </Section>
  );
}
