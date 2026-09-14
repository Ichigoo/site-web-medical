import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & accès",
  description: `Adresse, horaires, téléphone et organismes conventionnés de ${siteConfig.name} à ${siteConfig.city}.`,
};

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Contact"
        title="Nous trouver, nous joindre"
        lede="Le secrétariat est à votre écoute pour toute question sur un examen, une préparation ou un rendez-vous."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <ul className="space-y-7">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
              <div>
                <p className="font-semibold text-primary">Adresse</p>
                <p className="mt-1 text-ink-soft">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.country}
                </p>
                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-1 inline-block text-sm font-semibold text-accent hover:text-accent-deep"
                >
                  Itinéraire Google Maps
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
              <div>
                <p className="font-semibold text-primary">Téléphone</p>
                <a href={siteConfig.phoneHref} className="mt-1 block text-ink-soft hover:text-primary">
                  {siteConfig.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MessageCircle className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
              <div>
                <p className="font-semibold text-primary">WhatsApp</p>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener"
                  className="mt-1 block text-ink-soft hover:text-primary"
                >
                  {siteConfig.whatsapp}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
              <div>
                <p className="font-semibold text-primary">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-ink-soft hover:text-primary">
                  {siteConfig.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
              <div>
                <p className="font-semibold text-primary">Horaires</p>
                <table className="mt-1 text-ink-soft">
                  <tbody>
                    {siteConfig.hours.map((h) => (
                      <tr key={h.days}>
                        <td className="pr-6 align-top">{h.days}</td>
                        <td>{h.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {siteConfig.emergencyNote && (
                  <p className="mt-2 text-sm text-ink-soft italic">{siteConfig.emergencyNote}</p>
                )}
              </div>
            </li>
            <li className="flex gap-4">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
              <div>
                <p className="font-semibold text-primary">Organismes conventionnés</p>
                <p className="mt-1 text-ink-soft">{siteConfig.insurances.join(" · ")}</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          {siteConfig.address.mapsEmbedUrl ? (
            <iframe
              src={siteConfig.address.mapsEmbedUrl}
              title={`Localisation de ${siteConfig.name}`}
              className="h-full min-h-96 w-full border border-line"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            /* TODO-CLIENT: renseigner mapsEmbedUrl dans lib/site-config.ts pour afficher la carte */
            <div className="grid h-full min-h-96 place-items-center border border-dashed border-line bg-primary-soft/30 p-8 text-center">
              <div>
                <MapPin className="mx-auto size-8 text-primary" strokeWidth={1.5} aria-hidden />
                <p className="mt-3 font-semibold text-primary">Carte interactive</p>
                <p className="mt-1 text-sm text-ink-soft">
                  La carte Google Maps du centre s&apos;affichera ici.
                </p>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
