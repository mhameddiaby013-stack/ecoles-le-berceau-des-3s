import React, { useState } from 'react';
import { SCHOOL_PREMISES } from '../data/schoolData';
import { Shield, Sparkles, Sun, Palette, BookOpen, Heart, Activity, Maximize2, X } from 'lucide-react';

export const SchoolLife: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof SCHOOL_PREMISES[0] | null>(null);

  const dailyScheduleHighlights = [
    {
      time: "Matinée",
      title: "Accueil & Rituels d'Apprentissage",
      description: "Accueil personnalisé dans la classe, mise en route sereine, travail approfondi sur le langage, la lecture et les mathématiques."
    },
    {
      time: "Midi",
      title: "Pause Méridienne & Déjeuner",
      description: "Temps de repas encadré favorisant l'autonomie et le respect des règles d'hygiène alimentaire. [Prestation cantine à confirmer]."
    },
    {
      time: "Après-midi",
      title: "Découverte du Monde & Ateliers Pratiques",
      description: "Activités scientifiques, artistiques, sportives et travail collaboratif stimulant l'expression orale et l'entraide."
    },
    {
      time: "Fin de journée",
      title: "Bilan & Étude Surveillée",
      description: "Consolidation des savoirs du jour, préparation ordonnée du matériel et accompagnement aux devoirs selon les cycles."
    }
  ];

  const projectsAndClubs = [
    {
      icon: Palette,
      title: "Ateliers d'expression artistique",
      description: "Peinture, modelage, dessin et éveil musical pour développer la sensibilité créatrice."
    },
    {
      icon: BookOpen,
      title: "Projet Lecture & Éloquence",
      description: "Valorisation de la lecture à voix haute, contes partagés et découverte des trésors littéraires."
    },
    {
      icon: Activity,
      title: "Éveil corporel & Sports",
      description: "Jeux collectifs, motricité et parcours gymniques valorisant l'esprit d'équipe et le fair-play."
    },
    {
      icon: Heart,
      title: "Citoyenneté & Bien-vivre ensemble",
      description: "Sensibilisation à l'écologie, au respect des locaux, à l'empathie et à la vie en société."
    }
  ];

  return (
    <section id="vie-scolaire" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Title */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-900">
            Cadre de Vie & Activités
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 mt-1">
            La vie scolaire aux Écoles Le Berceau des 3S
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
            Un équilibre étudié entre rigueur intellectuelle, moments de détente constructive
            et apprentissage de l'autonomie au sein de la communauté scolaire.
          </p>
        </div>

        {/* Protection de l'enfance & Droit à l'image Disclaimer - Strict User Requirement */}
        <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-stone-800 flex flex-col sm:flex-row items-start gap-4">
          <div className="p-2.5 rounded-xl bg-amber-100 text-amber-900 shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm">
            <h3 className="font-bold text-amber-950">
              Protection des mineurs & Charte stricte du droit à l'image
            </h3>
            <p className="text-stone-700 leading-relaxed">
              Conformément à la déontologie éducative et aux dispositions légales sur la protection de la vie privée des mineurs,
              <strong> aucune photographie d’enfant n’est diffusée sans autorisation parentale préalable et explicite</strong>.
              Les visuels présentés sur ce site valorisent prioritairement les infrastructures pédagogiques, les espaces d'apprentissage et le cadre architectural.
            </p>
          </div>
        </div>

        {/* 1. Rythme d'une journée type */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-900">
              Cadence Quotidienne
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
              Une journée structurée et rassurante
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Des repères horaires stables pour garantir la sérénité et la concentration des élèves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyScheduleHighlights.map((period, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-stone-50 border border-stone-200 shadow-2xs hover:border-amber-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-2.5 py-1 rounded-md bg-stone-200/70 text-stone-800 text-xs font-bold mb-3">
                    {period.time}
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm mb-2">{period.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{period.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Projets et activités périscolaires */}
        <div className="space-y-6 pt-6 border-t border-stone-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-900">
              Éveil & Talents
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
              Projets éducatifs et activités périscolaires
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Ouvrir l'esprit des élèves à la culture, au sport et aux valeurs citoyennes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectsAndClubs.map((proj, idx) => {
              const IconComp = proj.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:shadow-xs transition-shadow space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-900 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm">{proj.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{proj.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Galerie de photos des locaux & infrastructures (facile à mettre à jour) */}
        <div className="space-y-6 pt-6 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                Galerie Visuelle
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                Les espaces d’apprentissage et de vie
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Cliquez sur un visuel pour l'agrandir et consulter la description détaillée.
              </p>
            </div>
            <div className="text-xs text-stone-700 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 shrink-0">
              Galerie évolutive réservée aux locaux pédagogiques
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCHOOL_PREMISES.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 cursor-pointer shadow-2xs hover:shadow-md transition-all"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedPhoto(item);
                  }
                }}
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.altText}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="p-2.5 rounded-full bg-stone-900/80 backdrop-blur-xs">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-3 bg-white border-t border-stone-100">
                  <p className="text-xs font-bold text-stone-900">{item.title}</p>
                  <p className="text-[11px] text-stone-500 truncate mt-0.5">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Lightbox Viewer */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-16/10 bg-stone-900">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.altText}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-stone-900/80 text-white hover:bg-stone-900 transition-colors"
                  aria-label="Fermer la vue agrandie"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                  {selectedPhoto.title}
                </span>
                <h4 className="text-lg font-bold text-stone-900">{selectedPhoto.caption}</h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {selectedPhoto.description}
                </p>
                <div className="pt-3 border-t border-stone-200 text-xs text-stone-600">
                  <strong>Texte alternatif pour l'accessibilité :</strong> {selectedPhoto.altText}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
