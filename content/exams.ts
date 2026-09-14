/**
 * Contenu des pages examens. Texte rédigé à titre de brouillon :
 * TODO-CLIENT — chaque fiche doit être relue et validée médicalement par le
 * client (préparations et contre-indications notamment), puis complétée avec
 * les équipements réels du centre.
 */
export type Exam = {
  slug: string;
  /** Nom court pour cartes et navigation */
  title: string;
  /** Titre H1 de la page */
  fullTitle: string;
  /** Une phrase pour les cartes et le SEO */
  excerpt: string;
  /** Icône Lucide associée (résolue dans components/ExamIcon) */
  icon:
    | "magnet"
    | "scan"
    | "waves"
    | "ribbon"
    | "bone"
    | "activity"
    | "smile"
    | "syringe";
  /** Paragraphes de présentation */
  description: string[];
  /** Ce que l'examen permet d'explorer / de détecter */
  indications: string[];
  /** Déroulement de l'examen */
  procedure: string[];
  /** Préparation du patient */
  preparation: string[];
  /** Contre-indications et précautions */
  precautions: string[];
  /** Durée et remise des résultats */
  duration: string;
  results: string;
};

export const exams: Exam[] = [
  {
    slug: "irm",
    title: "IRM",
    fullTitle: "IRM — Imagerie par Résonance Magnétique",
    excerpt:
      "Une exploration très précise des organes et des tissus, sans rayons X.",
    icon: "magnet",
    description: [
      "L'IRM (Imagerie par Résonance Magnétique) utilise un champ magnétique et des ondes de radiofréquence pour produire des images en coupes très détaillées du corps humain, sans aucune irradiation.",
      "Elle est particulièrement performante pour l'étude du cerveau, de la colonne vertébrale, des articulations, de l'abdomen et du pelvis. Notre centre est équipé d'une IRM de dernière génération offrant un confort optimal et des temps d'examen réduits.",
    ],
    indications: [
      "Exploration neurologique : cerveau, moelle épinière",
      "Pathologies ostéo-articulaires : genou, épaule, hanche, rachis",
      "Imagerie abdominale et pelvienne (foie, pancréas, prostate, utérus)",
      "Bilan d'extension et suivi en cancérologie",
      "IRM cardiaque et vasculaire (angio-IRM)",
    ],
    procedure: [
      "Vous êtes installé confortablement sur la table d'examen, qui se déplace dans un tunnel ouvert aux deux extrémités.",
      "L'appareil est bruyant par moments : un casque ou des bouchons d'oreilles vous sont fournis.",
      "Une injection intraveineuse de produit de contraste (gadolinium) peut être nécessaire selon l'indication.",
      "Vous restez en contact permanent avec l'équipe grâce à une sonnette et un interphone.",
    ],
    preparation: [
      "Aucun jeûne n'est nécessaire, sauf indication particulière précisée lors de la prise de rendez-vous.",
      "Apportez votre ordonnance, vos anciens examens et votre carte de mutuelle.",
      "Retirez tout objet métallique : bijoux, piercings, appareils auditifs, cartes bancaires.",
      "Signalez toute possibilité de grossesse.",
    ],
    precautions: [
      "Contre-indication absolue : pacemaker ou défibrillateur non compatibles, certains implants cochléaires, corps étranger métallique intra-oculaire.",
      "Signalez tout matériel implanté (prothèse, clips chirurgicaux, valve cardiaque) : la compatibilité sera vérifiée.",
      "En cas de claustrophobie, parlez-en à l'équipe : des solutions existent.",
      "Insuffisance rénale : à signaler avant toute injection de gadolinium.",
    ],
    duration: "20 à 45 minutes selon la région étudiée.",
    results:
      "Compte rendu remis le jour même dans la majorité des cas, avec les images sur CD ou accessibles en ligne.",
  },
  {
    slug: "scanner",
    title: "Scanner",
    fullTitle: "Scanner — Tomodensitométrie",
    excerpt:
      "Des images en coupes fines du corps entier, avec des résultats rapides et fiables.",
    icon: "scan",
    description: [
      "Le scanner (ou tomodensitométrie) utilise les rayons X pour réaliser des images en coupes fines du corps. Notre scanner multi-détecteurs permet des coupes inframillimétriques et la détection d'anomalies minimes, invisibles sur une radiographie standard.",
      "Les protocoles sont optimisés pour délivrer la dose de rayons la plus faible possible, en particulier chez l'enfant.",
    ],
    indications: [
      "Exploration thoracique, abdominale et pelvienne",
      "Bilan traumatique (crâne, rachis, membres)",
      "Uroscanner : reins et voies urinaires",
      "Angioscanner : étude des vaisseaux",
      "Coloscanner et bilan digestif",
      "Bilan et suivi en cancérologie",
    ],
    procedure: [
      "Vous êtes allongé sur la table qui se déplace dans un anneau large et ouvert : l'examen est rapide et indolore.",
      "Une injection intraveineuse de produit de contraste iodé est parfois nécessaire ; elle peut provoquer une sensation passagère de chaleur.",
      "Des consignes respiratoires simples (inspirer, bloquer) peuvent vous être demandées.",
    ],
    preparation: [
      "Pour la plupart des scanners avec injection : être à jeun 3 heures avant l'examen (sauf traitement habituel, à prendre normalement).",
      "Apportez ordonnance, anciens examens, bilan sanguin de la fonction rénale (créatinine) si demandé.",
      "Signalez toute allergie, notamment aux produits de contraste iodés.",
      "Signalez toute possibilité de grossesse.",
    ],
    precautions: [
      "Allergie connue à l'iode : une préparation antiallergique peut être prescrite.",
      "Insuffisance rénale et diabète traité par metformine : à signaler avant toute injection.",
      "Grossesse : l'examen n'est réalisé qu'en cas de nécessité, avec protocole adapté.",
    ],
    duration: "10 à 20 minutes, dont quelques secondes d'acquisition.",
    results:
      "Résultats remis le jour même : compte rendu et images sur CD ou en ligne.",
  },
  {
    slug: "echographie",
    title: "Échographie & Doppler",
    fullTitle: "Échographie et Doppler",
    excerpt:
      "Une imagerie en temps réel par ultrasons, sans irradiation, pour tous les âges.",
    icon: "waves",
    description: [
      "L'échographie utilise des ultrasons pour visualiser en temps réel les organes, les tissus mous et les vaisseaux. Totalement indolore et sans irradiation, elle convient à tous, y compris aux femmes enceintes et aux enfants.",
      "Le Doppler complète l'échographie en analysant les flux sanguins dans les artères et les veines.",
    ],
    indications: [
      "Échographie abdominale et pelvienne",
      "Échographie obstétricale et suivi de grossesse",
      "Échographie thyroïdienne et cervicale",
      "Échographie mammaire (souvent couplée à la mammographie)",
      "Échographie musculo-tendineuse et articulaire",
      "Doppler des vaisseaux du cou, des membres, des reins",
    ],
    procedure: [
      "Un gel est appliqué sur la peau pour assurer le contact avec la sonde.",
      "Le radiologue déplace la sonde sur la zone à étudier et analyse les images en direct.",
      "Certaines explorations utilisent une sonde adaptée (endovaginale, endorectale) : elles vous sont toujours expliquées au préalable.",
    ],
    preparation: [
      "Échographie abdominale : être à jeun 4 à 6 heures.",
      "Échographie pelvienne : vessie pleine (boire 3 à 4 verres d'eau une heure avant, ne pas uriner).",
      "Pour les autres examens : aucune préparation particulière, sauf consigne à la prise de rendez-vous.",
    ],
    precautions: [
      "Aucune contre-indication : l'échographie est sans danger et répétable.",
    ],
    duration: "15 à 30 minutes selon l'examen.",
    results: "Compte rendu remis immédiatement après l'examen.",
  },
  {
    slug: "mammographie",
    title: "Mammographie",
    fullTitle: "Mammographie numérique",
    excerpt:
      "Le dépistage et le diagnostic du cancer du sein avec un mammographe numérique basse dose.",
    icon: "ribbon",
    description: [
      "La mammographie est l'examen de référence pour le dépistage et le diagnostic des pathologies du sein. Notre mammographe numérique délivre une dose de rayons très faible tout en produisant des images d'excellente qualité.",
      "Elle est fréquemment complétée par une échographie mammaire réalisée dans le même temps, pour un bilan sénologique complet.",
    ],
    indications: [
      "Dépistage du cancer du sein (recommandé tous les 2 ans à partir de 40–50 ans, selon avis médical)",
      "Exploration d'une anomalie clinique : boule, douleur, écoulement",
      "Surveillance après traitement d'un cancer du sein",
    ],
    procedure: [
      "Chaque sein est positionné puis délicatement comprimé quelques secondes : cette compression est indispensable à la qualité des images et réduit la dose de rayons.",
      "Deux clichés par sein sont généralement réalisés.",
      "Une échographie complémentaire peut être effectuée dans la foulée.",
    ],
    preparation: [
      "Prendre rendez-vous de préférence en première partie de cycle (après les règles), période où les seins sont moins sensibles.",
      "Ne pas appliquer de crème, déodorant ou talc sur les seins et les aisselles le jour de l'examen.",
      "Apportez impérativement vos anciennes mammographies pour comparaison.",
    ],
    precautions: [
      "Signalez toute possibilité de grossesse.",
      "Prothèses mammaires : à signaler, le protocole est adapté.",
    ],
    duration: "15 à 20 minutes, échographie comprise le cas échéant.",
    results:
      "Résultats et compte rendu remis le jour même, commentés par le radiologue.",
  },
  {
    slug: "radiologie-generale",
    title: "Radiologie générale",
    fullTitle: "Radiologie générale numérisée",
    excerpt:
      "Des salles entièrement numérisées à capteurs plans : basse dose, haute qualité.",
    icon: "bone",
    description: [
      "La radiographie standard reste l'examen de première intention pour l'os, les articulations, le thorax et l'abdomen. Nos salles sont entièrement numérisées et équipées de capteurs plans : cette technologie réduit fortement la dose de rayons délivrée tout en produisant des images de haute qualité.",
    ],
    indications: [
      "Radiographies osseuses et articulaires (fractures, arthrose, scoliose)",
      "Radiographie du thorax",
      "Abdomen sans préparation",
      "Bilans posturaux et mesures des membres inférieurs",
    ],
    procedure: [
      "Le manipulateur vous positionne debout, assis ou allongé selon les clichés demandés.",
      "L'acquisition ne dure que quelques secondes par cliché.",
    ],
    preparation: [
      "Aucune préparation particulière.",
      "Retirez bijoux et objets métalliques de la zone examinée.",
    ],
    precautions: ["Signalez toute possibilité de grossesse."],
    duration: "5 à 10 minutes.",
    results: "Images et compte rendu remis immédiatement.",
  },
  {
    slug: "osteodensitometrie",
    title: "Ostéodensitométrie",
    fullTitle: "Ostéodensitométrie — Densitométrie osseuse",
    excerpt:
      "La mesure de la densité osseuse pour dépister et suivre l'ostéoporose.",
    icon: "activity",
    description: [
      "L'ostéodensitométrie mesure la densité minérale osseuse, le plus souvent au niveau du rachis lombaire et du col du fémur. C'est l'examen de référence pour diagnostiquer l'ostéoporose et évaluer le risque de fracture.",
      "L'examen est rapide, indolore et très faiblement irradiant.",
    ],
    indications: [
      "Dépistage de l'ostéoporose, notamment après la ménopause",
      "Antécédent de fracture après un traumatisme minime",
      "Traitement prolongé par corticoïdes",
      "Suivi de l'efficacité d'un traitement de l'ostéoporose",
    ],
    procedure: [
      "Vous êtes allongé sur la table pendant que le bras de l'appareil balaie lentement les zones mesurées.",
      "Aucune injection, aucune douleur.",
    ],
    preparation: [
      "Aucune préparation.",
      "Éviter l'examen dans les jours suivant un examen avec produit de contraste (scanner injecté, scintigraphie).",
    ],
    precautions: ["Signalez toute possibilité de grossesse."],
    duration: "10 à 15 minutes.",
    results: "Résultats chiffrés (T-score) et compte rendu remis le jour même.",
  },
  {
    slug: "panoramique-dentaire",
    title: "Imagerie dentaire",
    fullTitle: "Panoramique dentaire & imagerie dentaire",
    excerpt:
      "Le panoramique dentaire et le cone beam pour un bilan complet des dents et des maxillaires.",
    icon: "smile",
    description: [
      "Le panoramique dentaire (orthopantomogramme) fournit en un seul cliché une vue d'ensemble des dents, des maxillaires, des sinus maxillaires et des articulations temporo-mandibulaires.",
      "Il est indispensable en amont de nombreux soins : bilan orthodontique, implants, extraction des dents de sagesse, recherche de foyers infectieux.",
    ],
    indications: [
      "Bilan avant traitement orthodontique ou pose d'implants",
      "Dents de sagesse : position et rapports anatomiques",
      "Recherche de foyers infectieux dentaires",
      "Traumatismes dentaires et des maxillaires",
    ],
    procedure: [
      "Vous êtes positionné debout, le menton posé sur un support ; l'appareil tourne autour de la tête en quelques secondes.",
      "Examen totalement indolore, à très faible dose.",
    ],
    preparation: [
      "Aucune préparation.",
      "Retirez bijoux, lunettes, appareils dentaires amovibles et piercings du visage.",
    ],
    precautions: ["Signalez toute possibilité de grossesse."],
    duration: "Moins de 5 minutes.",
    results: "Cliché et compte rendu remis immédiatement.",
  },
  {
    slug: "radiologie-interventionnelle",
    title: "Radiologie interventionnelle",
    fullTitle: "Radiologie interventionnelle",
    excerpt:
      "Des gestes diagnostiques et thérapeutiques guidés par l'imagerie, mini-invasifs.",
    icon: "syringe",
    description: [
      "La radiologie interventionnelle regroupe les gestes diagnostiques et thérapeutiques réalisés sous guidage de l'imagerie (échographie, scanner ou radiographie). Elle permet des interventions précises et mini-invasives, le plus souvent en ambulatoire.",
    ],
    indications: [
      "Ponctions et biopsies guidées (thyroïde, sein, foie, prostate)",
      "Infiltrations articulaires et rachidiennes",
      "Drainages de collections",
      "Cytoponctions ganglionnaires",
    ],
    procedure: [
      "Le geste est réalisé par un radiologue expérimenté, sous asepsie stricte et anesthésie locale si nécessaire.",
      "Le guidage par imagerie en temps réel garantit la précision du geste.",
      "Une courte surveillance sur place peut être prévue après certains gestes.",
    ],
    preparation: [
      "Les consignes précises (jeûne, arrêt d'anticoagulants, bilan de coagulation) vous sont communiquées lors de la prise de rendez-vous, en accord avec votre médecin.",
      "Venez accompagné si un geste sous anesthésie locale profonde est prévu.",
    ],
    precautions: [
      "Traitement anticoagulant ou antiagrégant : à signaler impérativement.",
      "Allergie aux anesthésiques locaux ou aux produits de contraste : à signaler.",
    ],
    duration: "Variable selon le geste : de 15 minutes à 1 heure.",
    results:
      "Compte rendu remis le jour même ; les résultats d'analyse (biopsies) sont transmis à votre médecin.",
  },
];

export function getExam(slug: string): Exam | undefined {
  return exams.find((e) => e.slug === slug);
}
