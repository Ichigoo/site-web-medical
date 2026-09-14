"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/le-centre", label: "Le centre" },
  { href: "/examens", label: "Examens" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          {/* Logo provisoire — TODO-CLIENT: remplacer par le vrai logo */}
          <span className="grid size-9 place-items-center rounded-full bg-primary text-surface">
            <span className="font-display text-lg font-semibold">R</span>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold text-primary">
              {siteConfig.shortName}
            </span>
            <span className="block text-[11px] tracking-wide text-ink-soft uppercase">
              Imagerie médicale · {siteConfig.city}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors hover:text-primary ${
                isActive(item.href) ? "font-semibold text-primary" : "text-ink-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-deep"
          >
            <Phone className="size-4" strokeWidth={1.75} aria-hidden />
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
          >
            Prendre rendez-vous
          </a>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-md text-primary lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-line bg-surface px-4 pb-6 pt-2 lg:hidden"
          aria-label="Navigation mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-line py-3 text-base ${
                isActive(item.href) ? "font-semibold text-primary" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 rounded-md border border-primary px-4 py-2.5 text-sm font-semibold text-primary"
            >
              <Phone className="size-4" aria-hidden />
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener"
              className="rounded-md bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Prendre rendez-vous
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
