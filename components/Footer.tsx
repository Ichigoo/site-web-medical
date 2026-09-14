import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { exams } from "@/content/exams";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-surface/70">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide uppercase text-surface/60">
            Examens
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {exams.map((exam) => (
              <li key={exam.slug}>
                <Link
                  href={`/examens/${exam.slug}`}
                  className="text-surface/85 transition-colors hover:text-white"
                >
                  {exam.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide uppercase text-surface/60">
            Coordonnées
          </p>
          <ul className="mt-4 space-y-3 text-sm text-surface/85">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0" strokeWidth={1.75} aria-hidden />
              <span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.country}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0" strokeWidth={1.75} aria-hidden />
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide uppercase text-surface/60">
            Horaires
          </p>
          <ul className="mt-4 space-y-2 text-sm text-surface/85">
            {siteConfig.hours.map((h) => (
              <li key={h.days} className="flex gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0" strokeWidth={1.75} aria-hidden />
                <span>
                  {h.days}
                  <br />
                  <span className="text-surface/60">{h.hours}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs text-surface/60 sm:px-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <Link href="/mentions-legales" className="hover:text-white">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
