import { AcademicCycle, StaffProfile, NewsArticle, SchoolConfig } from '../types/school';

export const DEFAULT_SCHOOL_CONFIG: SchoolConfig = {
  name: "Écoles Le Berceau des 3S",
  motto: "Apprentissage · Bienveillance · Discipline · Épanouissement",
  address: "[Adresse de l’école - À renseigner]",
  phone: "[Téléphone de l’établissement - À renseigner]",
  email: "[Courriel officiel de l’école - À renseigner]",
  receptionHours: "[Horaires d’accueil du secrétariat à confirmer]",
  socialNetworks: {
    facebook: "[Lien Facebook de l’école]",
    instagram: "[Lien Instagram de l’école]",
    linkedin: "[Lien LinkedIn de l’école]"
  },
  registrationPeriod: "[Période officielle d'inscription à confirmer]"
};

export const CORE_VALUES = [
  {
    id: "apprentissage",
    title: "Apprentissage",
    shortDescription: "Acquisition solide des savoirs fondamentaux et stimulation de la curiosité intellectuelle.",
    points: [
      "Méthodes pédagogiques progressives et adaptées au rythme de chaque élève",
      "Valorisation de l'effort, de la réflexion critique et du goût de chercher",
      "Éveil aux cultures, aux sciences et aux arts"
    ]
  },
  {
    id: "bienveillance",
    title: "Bienveillance",
    shortDescription: "Un regard attentif et valorisant porté sur chaque enfant pour l'accompagner en confiance.",
    points: [
      "Écoute active et dialogue constant entre l'équipe éducative et les familles",
      "Climat scolaire sécurisant où l'erreur est comprise comme un levier de progrès",
      "Développement de l'empathie, de l'entraide et de l'estime de soi"
    ]
  },
  {
    id: "discipline",
    title: "Discipline",
    shortDescription: "Un cadre clair et structurant qui permet l'apprentissage de la vie en collectivité.",
    points: [
      "Respect mutuel des règles communes, des pairs et des adultes",
      "Apprentissage de la ponctualité, de l'autonomie et de la rigueur de travail",
      "Responsabilisation de l'élève au sein de sa classe et de l'établissement"
    ]
  },
  {
    id: "epanouissement",
    title: "Épanouissement",
    shortDescription: "Harmonie entre développement intellectuel, expression créative et bien-être physique.",
    points: [
      "Activités manuelles, artistiques et sportives diversifiées",
      "Valorisation des talents individuels et des initiatives personnelles",
      "Épanouissement dans un environnement chaleureux et stimulant"
    ]
  }
];

export const ACADEMIC_CYCLES: AcademicCycle[] = [
  {
    id: "cycle-maternelle",
    name: "Petite Enfance & Maternelle",
    subtitle: "[Niveaux exacts proposés à confirmer par l'établissement]",
    ageRange: "[Tranche d'âge à préciser par l'établissement]",
    levels: [
      "Très Petite Section (TPS) - [À confirmer]",
      "Petite Section (PS) - [À confirmer]",
      "Moyenne Section (MS) - [À confirmer]",
      "Grande Section (GS) - [À confirmer]"
    ],
    objectives: [
      "Développement du langage oral et des premières interactions sociales",
      "Motricité globale et fine, autonomie quotidienne et propreté",
      "Éveil sensoriel, découverte de l'écrit, des formes et des nombres",
      "Socialisation dans un cadre affectif et sécurisant"
    ],
    practicalInfo: {
      hours: "[Horaires des classes à préciser]",
      classSize: "[Effectif maximum par classe à préciser]",
      supervision: "[Encadrement : Enseignant(e) + Assistant(e) à préciser]",
      languages: "[Initiation linguistique à préciser]"
    },
    confirmed: false
  },
  {
    id: "cycle-elementaire",
    name: "Enseignement Élémentaire / Primaire",
    subtitle: "[Niveaux exacts proposés à confirmer par l'établissement]",
    ageRange: "[Tranche d'âge à préciser par l'établissement]",
    levels: [
      "Cours Préparatoire (CP) - [À confirmer]",
      "Cours Élémentaire 1 & 2 (CE1 - CE2) - [À confirmer]",
      "Cours Moyen 1 & 2 (CM1 - CM2) - [À confirmer]"
    ],
    objectives: [
      "Maîtrise fondamentale de la lecture, de l'écriture et du calcul",
      "Développement de la méthode de travail et de l'autonomie personelle",
      "Approche des sciences expérimentales, de l'histoire et de la géographie",
      "Éducation civique et morale, respect des règles collectives"
    ],
    practicalInfo: {
      hours: "[Horaires des classes à préciser]",
      classSize: "[Effectif moyen par classe à préciser]",
      supervision: "[Corps professoral qualifié à préciser]",
      languages: "[Enseignement des langues vivantes à préciser]"
    },
    confirmed: false
  },
  {
    id: "cycle-secondaire",
    name: "Cycle Secondaire / Collège",
    subtitle: "[Ouverture de ce cycle à confirmer par l'établissement]",
    ageRange: "[Tranche d'âge à préciser par l'établissement]",
    levels: [
      "Classes de 6e, 5e, 4e, 3e - [À confirmer selon les agréments de l'établissement]"
    ],
    objectives: [
      "Approfondissement disciplinaire et esprit d'analyse",
      "Préparation aux examens et certifications scolaires",
      "Développement de l'esprit critique et des projets scientifiques / littéraires",
      "Orientation et accompagnement vers les études supérieures"
    ],
    practicalInfo: {
      hours: "[Horaires des cours à préciser]",
      classSize: "[Capacité par division à préciser]",
      supervision: "[Professeurs spécialistes par discipline à préciser]",
      languages: "[LV1 / LV2 proposées à préciser]"
    },
    confirmed: false
  }
];

export const STAFF_MEMBERS: StaffProfile[] = [
  {
    id: "staff-direction",
    role: "Direction générale & pédagogique",
    name: "[Nom de la Direction - À renseigner]",
    title: "Direction de l’établissement",
    description: "Garant du projet pédagogique, du climat de bienveillance et de la coordination générale de la vie scolaire.",
    specialty: "Pilotage éducatif, écoute des familles et suivi des équipes",
    isPlaceholder: true
  },
  {
    id: "staff-coordination",
    role: "Coordination des cycles",
    name: "[Nom du/de la Coordinateur(trice) - À renseigner]",
    title: "Coordination pédagogique",
    description: "Assure la continuité des apprentissages entre les niveaux et le soutien pédagogique aux enseignants.",
    specialty: "Ingénierie pédagogique et accompagnement personnalisé",
    isPlaceholder: true
  },
  {
    id: "staff-equipe",
    role: "Corps enseignant & éducatif",
    name: "[Équipe enseignante qualifiée - À renseigner]",
    title: "Professeurs et éducateurs",
    description: "Une équipe formée aux méthodes bienveillantes et rigoureuses, passionnée par la réussite de chaque enfant.",
    specialty: "Pédagogies actives, suivi individualisé et éveil pluridisciplinaire",
    isPlaceholder: true
  }
];

export const SCHOOL_PREMISES = [
  {
    id: "campus",
    title: "Bâtiment & Accueil",
    description: "Un environnement architectural soigné, sécurisé et conçu pour inspirer calme et concentration.",
    image: "/src/assets/images/hero_school_campus_1793101850773.jpg",
    altText: "Vue extérieure accueillante du bâtiment scolaire des Écoles Le Berceau des 3S avec parvis paysager et entrée principale.",
    caption: "Entrée principale et espaces extérieurs protégés"
  },
  {
    id: "library",
    title: "Bibliothèque & Espace de lecture",
    description: "Un espace lumineux dédié au calme, aux contes, à la documentation et au développement du goût de lire.",
    image: "/src/assets/images/school_library_bright_1793101852102.jpg",
    altText: "Bibliothèque scolaire lumineuse avec tables en bois naturel, étagères de livres ordonnées et éclairage zénithal.",
    caption: "Centre de ressources documentaires et coin lecture"
  },
  {
    id: "creativity",
    title: "Salle d'expérimentation & Arts",
    description: "Des ateliers équipés pour l'éveil scientifique, les travaux manuels et les découvertes artistiques.",
    image: "/src/assets/images/school_creative_lab_1793101852229.jpg",
    altText: "Atelier scolaire lumineux d'activités artistiques et d'éveil scientifique avec tables modulables et supports pédagogiques.",
    caption: "Espace d'activités pratiques et d'éveil scientifique"
  },
  {
    id: "courtyard",
    title: "Cour arborée & Récréation",
    description: "Un cadre de détente aéré et surveillé favorisant le jeu équilibré et la socialisation entre élèves.",
    image: "/src/assets/images/school_courtyard_green_1793101852346.jpg",
    altText: "Cour de récréation scolaire verdoyante avec allées sécurisées, zones d'ombre sous tonnelle et bancs de repos.",
    caption: "Espace extérieur de pause et de vie collective"
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-1",
    date: "[Date à confirmer]",
    title: "Réunions d'information pour les familles",
    category: "Vie de l'école",
    excerpt: "L'équipe pédagogique des Écoles Le Berceau des 3S proposera des temps d'échange dédiés aux nouvelles familles pour présenter le cadre éducatif.",
    content: "Dans le cadre de la préparation des prochaines rentrées, notre établissement organisera des rencontres afin de vous faire découvrir nos méthodes de travail, nos valeurs et nos locaux. Ces temps d'échange permettront de répondre à toutes vos questions concernant l'accompagnement des élèves.",
    isPendingDate: true
  },
  {
    id: "news-2",
    date: "[Date à confirmer]",
    title: "Préparation des dossiers d'admission et inscriptions",
    category: "Inscriptions",
    excerpt: "Retrouvez les démarches préalables et les pièces justificatives à fournir pour préparer la scolarisation de votre enfant.",
    content: "Les inscriptions s'organisent en concertation avec les familles. Nous vous invitons à remplir le formulaire de pré-contact pour recevoir la documentation officielle et planifier un entretien avec la direction dès validation des dates officielles.",
    isPendingDate: true
  },
  {
    id: "news-3",
    date: "[Date à confirmer]",
    title: "Projet pédagogique : Renforcer l'éveil et l'autonomie",
    category: "Pédagogie",
    excerpt: "Focus sur notre approche articulée autour de l'apprentissage guidé, de la bienveillance continue et de la discipline positive.",
    content: "Aux Écoles Le Berceau des 3S, chaque journée est rythmée pour offrir à l'enfant des repères stables. Les objectifs de notre équipe reposent sur la progression individualisée, le respect des rythmes d'apprentissage et l'émulation collective.",
    isPendingDate: true
  }
];

export const REQUIRED_DOCUMENTS = [
  {
    name: "Formulaire officiel de demande d'inscription dument complété",
    note: "[Document fourni par le secrétariat de l'école]"
  },
  {
    name: "Extrait d'acte de naissance ou copie intégrale du livret de famille",
    note: "[Obligatoire pour l'état civil de l'élève]"
  },
  {
    name: "Copie des bulletins ou du livret d'évaluation de l'année précédente",
    note: "[Requis pour les enfants déjà scolarisés - À confirmer selon le niveau]"
  },
  {
    name: "Certificat de radiation (Exeat) délivré par l'ancien établissement",
    note: "[En cas de changement d'établissement scolaire]"
  },
  {
    name: "Carnet de santé ou attestation de vaccinations à jour",
    note: "[Selon les obligations de santé publique en vigueur]"
  },
  {
    name: "Photos d'identité récentes de l'enfant",
    note: "[Format et nombre d'exemplaires à confirmer par le secrétariat]"
  },
  {
    name: "Justificatif de domicile des représentants légaux",
    note: "[Document récent de moins de 3 mois - À confirmer]"
  }
];
