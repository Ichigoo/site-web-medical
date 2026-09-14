# Site web — Centre de radiologie

Site vitrine statique pour un centre de radiologie (voir [PLAN.md](./PLAN.md) pour le plan complet du projet : décisions, questions client, assets à collecter, direction design).

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS 4
- Icônes [Lucide](https://lucide.dev)
- 100 % statique — aucun backend, aucune base de données

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Où modifier le contenu

| Quoi | Fichier |
|---|---|
| Nom, adresse, téléphones, horaires, lien RDV, mutuelles | `lib/site-config.ts` |
| Fiches examens (IRM, scanner…) | `content/exams.ts` |
| Articles Actualités | `content/actualites.ts` |
| Équipe et équipements | `app/le-centre/page.tsx` |
| Couleurs et polices | `app/globals.css` + `app/layout.tsx` |

## Avant la mise en ligne

Tout ce qui doit être complété avec les vraies informations du client est marqué `TODO-CLIENT` :

```bash
grep -rn "TODO-CLIENT" app components content lib
```

À faire notamment : remplacer le logo provisoire, les visuels décoratifs (`components/ImagingMotif.tsx`) par de vraies photos, renseigner le lien de l'application de rendez-vous (`bookingUrl`), l'URL du domaine (`url`) et la carte Google Maps (`mapsEmbedUrl`). Faire valider médicalement le contenu des fiches examens.
