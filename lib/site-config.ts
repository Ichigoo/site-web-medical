/**
 * Source unique de vérité pour toutes les informations pratiques du centre.
 * Chaque valeur marquée TODO-CLIENT doit être remplacée par les vraies
 * informations du client avant la mise en ligne.
 */
export const siteConfig = {
  /** TODO-CLIENT: nom exact du centre */
  name: "Centre de Radiologie & Imagerie Médicale",
  shortName: "Centre de Radiologie",
  /** TODO-CLIENT: ville */
  city: "Marrakech",
  /** TODO-CLIENT: baseline affichée dans le hero et les métadonnées */
  tagline:
    "Centre d'imagerie médicale de pointe : IRM, scanner, échographie, mammographie et radiologie numérisée.",

  /** TODO-CLIENT: URL de production (domaine du client) */
  url: "https://www.example.com",

  /** TODO-CLIENT: lien de l'application externe de prise de rendez-vous */
  bookingUrl: "https://example.com/rendez-vous",

  /** TODO-CLIENT: adresse complète */
  address: {
    street: "11 boulevard — à compléter",
    city: "Marrakech",
    country: "Maroc",
    /** TODO-CLIENT: lien "Itinéraire" Google Maps du centre */
    mapsUrl: "https://maps.google.com/?q=centre+radiologie",
    /** TODO-CLIENT: URL d'embed Google Maps (Partager > Intégrer une carte) */
    mapsEmbedUrl: "",
  },

  /** TODO-CLIENT: numéros réels */
  phone: "05 24 00 00 00",
  phoneHref: "tel:+212524000000",
  whatsapp: "06 00 00 00 00",
  whatsappHref: "https://wa.me/212600000000",
  email: "contact@example.com",

  /** TODO-CLIENT: horaires réels */
  hours: [
    { days: "Lundi – Vendredi", hours: "08h00 – 19h00" },
    { days: "Samedi", hours: "08h00 – 13h00" },
    { days: "Dimanche", hours: "Fermé" },
  ],
  /** TODO-CLIENT: mention urgences si applicable, sinon chaîne vide */
  emergencyNote: "Examens urgents acceptés sur appel du médecin traitant.",

  /** TODO-CLIENT: organismes et mutuelles conventionnés */
  insurances: ["CNOPS", "CNSS", "AMO", "Assurances privées"],

  /** TODO-CLIENT: réseaux sociaux (laisser vide pour masquer) */
  social: {
    instagram: "",
    facebook: "",
  },

  /** TODO-CLIENT: chiffres clés réels du centre */
  stats: [
    { value: "15+", label: "années d'expérience" },
    { value: "40 000", label: "examens par an" },
    { value: "5", label: "radiologues spécialisés" },
    { value: "24h", label: "résultats le jour même" },
  ],

  /** TODO-CLIENT: nom du directeur / responsable de publication */
  legalDirector: "Dr — à compléter",
};

export type SiteConfig = typeof siteConfig;
