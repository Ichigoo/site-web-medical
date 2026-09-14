/**
 * Articles de la section Actualités.
 * TODO-CLIENT: remplacer/compléter par les sujets choisis avec le client.
 * Pour ajouter un article : ajouter un objet au tableau, le site le publie
 * automatiquement (index + page dédiée + sitemap).
 */
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  /** Date ISO (AAAA-MM-JJ) */
  date: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "depistage-cancer-du-sein",
    title: "Dépistage du cancer du sein : pourquoi ne pas attendre",
    excerpt:
      "Détecté tôt, le cancer du sein se guérit dans la grande majorité des cas. La mammographie de dépistage reste le geste le plus efficace.",
    date: "2026-09-01",
    body: [
      "Le cancer du sein est le cancer le plus fréquent chez la femme, mais aussi l'un de ceux qui se soignent le mieux lorsqu'il est détecté tôt. Une mammographie de dépistage régulière permet de repérer des anomalies avant tout symptôme, à un stade où les traitements sont les plus simples et les plus efficaces.",
      "À partir de 40 à 50 ans selon votre profil et l'avis de votre médecin, une mammographie tous les deux ans est recommandée. En cas d'antécédents familiaux, un suivi plus précoce et rapproché peut être proposé.",
      "Dans notre centre, la mammographie numérique basse dose est réalisée par une équipe expérimentée et peut être complétée le jour même par une échographie mammaire. Les résultats vous sont remis et expliqués immédiatement.",
    ],
  },
  {
    slug: "irm-quand-et-pourquoi",
    title: "L'IRM en pratique : quand et pourquoi votre médecin la prescrit",
    excerpt:
      "Sans rayons X, l'IRM explore avec une grande précision le cerveau, la colonne, les articulations et les organes profonds.",
    date: "2026-08-15",
    body: [
      "L'IRM utilise un champ magnétique — et non des rayons X — pour produire des images en coupes très précises. C'est l'examen de choix pour explorer le cerveau, la moelle épinière, les articulations comme le genou ou l'épaule, ainsi que de nombreux organes de l'abdomen et du pelvis.",
      "Contrairement à une idée reçue, l'examen est indolore. Il demande simplement de rester immobile dans un tunnel ouvert aux deux extrémités, pendant 20 à 45 minutes. Un casque atténue le bruit de l'appareil et vous restez en contact permanent avec l'équipe.",
      "Pensez à signaler tout matériel implanté (pacemaker, prothèse, clips chirurgicaux) lors de la prise de rendez-vous : la compatibilité est systématiquement vérifiée.",
    ],
  },
  {
    slug: "scanner-basse-dose",
    title: "Scanner : des images toujours plus précises, une dose toujours plus faible",
    excerpt:
      "Les scanners multi-détecteurs modernes détectent des anomalies inframillimétriques tout en réduisant fortement l'exposition aux rayons.",
    date: "2026-07-20",
    body: [
      "Les scanners de dernière génération réalisent des coupes inférieures au millimètre, permettant de détecter des anomalies invisibles sur une radiographie standard, tout en délivrant une dose de rayons considérablement réduite par rapport aux générations précédentes.",
      "Nos protocoles sont systématiquement optimisés selon l'indication et la morphologie du patient, avec une attention particulière pour les enfants.",
      "Les résultats — compte rendu et images — sont remis le jour même, pour que votre médecin puisse décider rapidement de la suite de votre prise en charge.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
