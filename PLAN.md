# Plan — Site web centre de radiologie

Site vitrine pour un centre de radiologie, modelé sur la structure de
[radiologie-babdoukkala.com](https://www.radiologie-babdoukkala.com/) (même type d'informations, contenu réécrit — pas de copier-coller pour éviter le duplicate content et les problèmes de droits).

## Décisions validées

| Sujet | Décision |
|---|---|
| Prise de rendez-vous | Application externe du client — le site pointe vers son lien (à fournir) |
| Langue | Français uniquement |
| Gestion de contenu | Pas de CMS — contenu dans le code, mis à jour par le développeur |
| Budget | Tiers gratuits ; seul le domaine est payant |

## Stack retenue

**Next.js (App Router) + TypeScript + Tailwind CSS 4 — site 100% statique. Pas de Supabase** (aucun état backend : booking externe, pas de CMS, pas de comptes).

- Hébergement : Vercel (Hobby pour dev/preview). Pour la prod commerciale : Cloudflare Pages ou Netlify (gratuits et conformes) ou Vercel Pro si le client paie.
- Formulaire de contact (optionnel) : Resend free tier, ou simplement liens tel:/WhatsApp.
- Seul coût obligatoire : le domaine (~120–150 MAD/an en .ma, ~12 $/an en .com).

## Architecture du contenu

- `content/exams.ts` — un objet par examen (titre, description, déroulement, préparation, contre-indications, durée/résultats) → génère `/examens/[slug]`
- `content/actualites.ts` — articles → `/actualites/[slug]`
- `lib/site-config.ts` — **source unique de vérité** : nom, adresse, téléphones, horaires, lien RDV, réseaux sociaux, mutuelles. Tous les champs à compléter sont marqués `TODO-CLIENT`.

## Arborescence du site

```
/                     Accueil (hero, services, points de réassurance, actus, contact)
/le-centre            Présentation + équipe + équipements
/examens              Index des examens
/examens/[slug]       irm, scanner, echographie, mammographie,
                      radiologie-generale, osteodensitometrie,
                      panoramique-dentaire, radiologie-interventionnelle
/actualites           Index actualités
/actualites/[slug]    Article
/contact              Adresse, horaires, carte, mutuelles, accès
/rendez-vous          CTA vers l'application de RDV externe
/mentions-legales
```

Transversal : header sticky (téléphone + bouton « Prendre rendez-vous »), footer NAP + horaires, bouton WhatsApp flottant, JSON-LD `MedicalClinic`, sitemap.xml, robots.txt, métadonnées FR.

## Questions à poser au client

1. Nom exact du centre, logo (vectoriel), couleurs de marque existantes ?
2. Adresse complète, téléphone/fax, WhatsApp, email, horaires (samedi ? urgences ?) ?
3. Liste exacte des examens proposés + équipements à mettre en avant (ex. « IRM 1.5T », « scanner 64 barrettes ») ?
4. Radiologues/équipe : noms, titres, bios, photos — veulent-ils apparaître ?
5. Fiches de préparation par examen (documents papier/PDF existants) ?
6. Conventions/mutuelles acceptées (CNOPS, CNSS, assurances, tiers payant) ?
7. Remise des résultats : le jour même ? portail en ligne ? CD/film ?
8. **Lien de l'application de RDV externe** + garder aussi tel/WhatsApp ?
9. Nom de domaine : existant ou à enregistrer (au nom du client) ?
10. Fiche Google Business existante ? (le site doit correspondre exactement pour le SEO local)
11. Réseaux sociaux ?
12. Mentions légales : nom du directeur, texte requis ?
13. Section Actualités au lancement ? Si oui, 2–3 sujets ?

## Assets à demander au client

- Logo (SVG/AI ou PNG haute résolution)
- **15–25 vraies photos** : façade, accueil/salle d'attente, chaque machine, équipe au travail (avec consentement). C'est l'élément n°1 pour un site crédible et non générique.
- Fiches de préparation par examen
- Photos + bios de l'équipe
- Certifications/accréditations
- Le lien de l'app de rendez-vous

## Direction design (beau, pas « IA »)

À éviter : dégradés violets, glassmorphism, emojis en icônes, stock photos génériques, hero centré à deux boutons dégradés, Inter partout, grilles de cartes identiques.

À faire :
1. **Vraies photos** comme colonne vertébrale, étalonnées de façon cohérente.
2. Palette clinique : un primaire profond (teal `#0F4C5C` ou navy médical), fond blanc cassé chaud `#FAFAF8`, un seul accent pour les CTA. Pas de dégradés.
3. Typo avec du caractère : display serif (Fraunces) + sans lisible (Figtree/Public Sans). Typographie française correcte (espaces insécables, « guillemets »).
4. Mises en page éditoriales asymétriques, bandes image/texte alternées, grands chiffres, beaucoup de blanc. Un motif graphique signature réutilisé (ligne de scan fine / réticule).
5. Icônes filaires d'un seul set (Lucide), jamais d'emojis.
6. Micro-interactions sobres (reveals 200–300 ms, une fois), pas de parallax.
7. Détails « vrai lieu » : carte intégrée, tableau d'horaires réel, logos mutuelles, numéro de téléphone partout.

## Étapes d'implémentation

1. ✅ Scaffold Next.js + Tailwind 4 + TypeScript
2. Design system : tokens, fontes, header/footer, primitives de section
3. Page d'accueil
4. Pages examens (template + contenu FR rédigé, à valider médicalement par le client)
5. Le centre, Contact, Rendez-vous, Mentions légales
6. Actualités (peut être masqué au lancement)
7. SEO : métadonnées, JSON-LD, sitemap, robots, OG ; Lighthouse ≥ 95 mobile
8. Placeholders d'images neutres en attendant les photos client (swap = remplacer les fichiers)

## Vérification

- `npm run build` passe (génération statique de toutes les routes)
- Test visuel de chaque route à 400 px et desktop
- Lighthouse mobile ≥ 95 (perf/SEO/accessibilité)
- JSON-LD validé ; `grep TODO-CLIENT` pour vérifier qu'aucun placeholder ne part en prod sans être vu
