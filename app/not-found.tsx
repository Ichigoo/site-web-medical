import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto grid min-h-[50vh] max-w-6xl place-items-center px-4 py-20 text-center sm:px-6">
      <div>
        <p className="font-display text-6xl font-semibold text-primary-soft">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-primary">
          Page introuvable
        </h1>
        <p className="mt-2 text-ink-soft">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-deep"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
