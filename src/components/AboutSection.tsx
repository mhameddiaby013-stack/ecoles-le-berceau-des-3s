import React, { useState } from 'react';
import { CORE_VALUES, STAFF_MEMBERS, SCHOOL_PREMISES } from '../data/schoolData';
import { SchoolConfig, StaffProfile } from '../types/school';
import { BookOpen, Award, Users, CheckCircle2, Building, Edit3, Image as ImageIcon, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  config: SchoolConfig;
  onOpenAdminGuide: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config, onOpenAdminGuide }) => {
  const [staffList, setStaffList] = useState<StaffProfile[]>(STAFF_MEMBERS);
  const [editingStaffId, setEditingStaffId] = useState<string | null>(null);
  const [editedName, setEditedName] = useState('');
  const [editedRole, setEditedRole] = useState('');

  const handleStartEdit = (staff: StaffProfile) => {
    setEditingStaffId(staff.id);
    setEditedName(staff.name.replace(/^\[|\]$/g, ''));
    setEditedRole(staff.role);
  };

  const handleSaveEdit = (staffId: string) => {
    setStaffList((prev) =>
      prev.map((s) => (s.id === staffId ? { ...s, name: editedName, role: editedRole, isPlaceholder: false } : s))
    );
    setEditingStaffId(null);
  };

  return (
    <section id="ecole" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-900">
            L'Établissement
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 mt-1">
            À propos des Écoles Le Berceau des 3S
          </h2>
          <p className="text-base text-stone-600 mt-3 leading-relaxed">
            Un projet éducatif guidé par l'engagement envers la réussite de chaque élève,
            dans un cadre d'apprentissage stimulant, protecteur et exigeant.
          </p>
        </div>

        {/* 1. Présentation de l'établissement & Histoire à compléter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-800" />
                <h3 className="text-lg font-bold text-stone-900">Présentation & Histoire de l’établissement</h3>
              </div>
              
              <div className="space-y-3 text-sm text-stone-600 leading-relaxed">
                <p>
                  Les <strong className="font-semibold text-stone-800">Écoles Le Berceau des 3S</strong> ont été
                  fondées avec l'ambition de créer un environnement scolaire d'excellence, où la rigueur
                  des apprentissages s'articule harmonieusement avec la bienveillance humaine et la discipline structurante.
                </p>
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-950 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                      Historique de l'établissement
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-amber-200/70 text-amber-950 font-medium">
                      À compléter
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 italic">
                    « [Insérer ici l'historique officiel de la création des Écoles Le Berceau des 3S, l'année de fondation, les étapes majeures de développement, ainsi que les agréments ministériels ou pédagogiques délivrés à l'établissement.] »
                  </p>
                  <div className="pt-1 flex items-center gap-2 text-xs text-amber-950">
                    <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                    <span>L'administration peut compléter ces données officielles en temps utile.</span>
                  </div>
                </div>
                <p>
                  Le nom <em>« Le Berceau des 3S »</em> illustre le socle protecteur et formateur
                  dans lequel grandissent les jeunes générations, nourries par les valeurs fondamentales
                  d'élévation intellectuelle et morale.
                </p>
              </div>
            </div>

            {/* Repères institutionnels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-stone-200 bg-white">
                <span className="text-xs font-semibold text-stone-600 uppercase">Statut scolaire</span>
                <p className="text-sm font-bold text-stone-900 mt-0.5">
                  [Statut officiel à renseigner par l'école]
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Enseignement conforme aux programmes officiels.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-stone-200 bg-white">
                <span className="text-xs font-semibold text-stone-600 uppercase">Supervision & Inspection</span>
                <p className="text-sm font-bold text-stone-900 mt-0.5">
                  [Circonscription / Rectorat à préciser]
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Évaluation continue et suivi de conformité des acquis.
                </p>
              </div>
            </div>
          </div>

          {/* Right column: Identity card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-amber-900 text-white shadow-md space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-200">
                Charte Fondatrice
              </span>
              <h3 className="text-xl font-bold mt-1">L'Esprit des Écoles Le Berceau des 3S</h3>
            </div>

            <p className="text-xs text-amber-100 leading-relaxed">
              Nous concevons l'école comme une communauté où chaque élève est accueilli avec respect,
              guidé avec fermeté bienveillante et encouragé à explorer le meilleur de lui-même.
            </p>

            <div className="space-y-3 pt-2 border-t border-amber-800">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-white font-semibold">Exigence & Rigueur</strong>
                  <span className="text-amber-100">Assimilation structurée des connaissances fondamentales.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-white font-semibold">Écoute & Disponibilité</strong>
                  <span className="text-amber-100">Disponibilité quotidienne des enseignants auprès des familles.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-white font-semibold">Sécurité & Épanouissement</strong>
                  <span className="text-amber-100">Locaux adaptés, surveillés et favorables au calme d'esprit.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAdminGuide}
                className="w-full py-2.5 px-3 bg-amber-800 hover:bg-amber-700 text-white rounded-lg text-xs font-medium border border-amber-600 transition-colors flex items-center justify-center gap-2"
              >
                <Edit3 className="w-4 h-4" />
                <span>Voir les renseignements en attente pour l'établissement</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Vision et Valeurs (Apprentissage, Bienveillance, Discipline, Épanouissement) */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-900">
              Piliers Éducatifs
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
              Les quatre valeurs fondamentales de l'établissement
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Des orientations pédagogiques claires vécues au quotidien dans nos salles de classe et nos cours de récréation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.id}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200/90 hover:border-amber-400 transition-all shadow-2xs hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-sm mb-4">
                    {val.title.charAt(0)}
                  </div>
                  <h4 className="text-lg font-bold text-stone-900">{val.title}</h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed font-medium">
                    {val.shortDescription}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-stone-200 pt-3">
                    {val.points.map((pt, idx) => (
                      <li key={idx} className="text-xs text-stone-500 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0 mt-1.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Présentation de l'équipe pédagogique avec profils modifiables */}
        <div className="space-y-6 pt-6 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-900">
                Communauté Éducative
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                L’équipe pédagogique et de direction
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Des professionnels passionnés assurant le suivi régulier et individualisé des apprenants.
              </p>
            </div>
            <div className="text-xs text-stone-500 italic bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
              * Fiches descriptives modifiables par l’établissement
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {staffList.map((staff) => {
              const isEditing = editingStaffId === staff.id;
              return (
                <div
                  key={staff.id}
                  className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:shadow-xs transition-shadow relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                        {staff.role}
                      </span>
                      <button
                        onClick={() => (isEditing ? handleSaveEdit(staff.id) : handleStartEdit(staff))}
                        className="text-xs text-stone-500 hover:text-stone-900 p-1 hover:bg-stone-100 rounded transition-colors inline-flex items-center gap-1"
                        title={isEditing ? 'Valider' : 'Modifier ce profil'}
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>{isEditing ? 'Valider' : 'Modifier'}</span>
                      </button>
                    </div>

                    {isEditing ? (
                      <div className="space-y-3 mb-4">
                        <div>
                          <label className="block text-xs font-medium text-stone-700">Nom & Prénom</label>
                          <input
                            type="text"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                            className="w-full mt-1 px-2.5 py-1.5 text-xs border border-stone-300 rounded focus:ring-2 focus:ring-amber-500 focus:outline-none"
                            placeholder="ex. Mme Diallo ou M. Dupont"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-stone-700">Rôle / Titre</label>
                          <input
                            type="text"
                            value={editedRole}
                            onChange={(e) => setEditedRole(e.target.value)}
                            className="w-full mt-1 px-2.5 py-1.5 text-xs border border-stone-300 rounded focus:ring-2 focus:ring-amber-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <h4 className="text-base font-bold text-stone-900">
                          {staff.isPlaceholder ? (
                            <span className="field-placeholder text-amber-900">{staff.name}</span>
                          ) : (
                            staff.name
                          )}
                        </h4>
                        <p className="text-xs font-medium text-stone-500">{staff.title}</p>
                      </>
                    )}

                    <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                      {staff.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 text-xs text-stone-700">
                    <strong className="text-stone-900">Spécialité :</strong> {staff.specialty}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Photos des locaux et activités avec textes alternatifs descriptifs */}
        <div className="space-y-6 pt-6 border-t border-stone-200">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-900">
              Infrastructures & Espaces de Vie
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
              Les locaux des Écoles Le Berceau des 3S
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Des environnements sains, lumineux et adaptés aux besoins des élèves à chaque âge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCHOOL_PREMISES.map((premise) => (
              <figure
                key={premise.id}
                className="group rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 shadow-2xs hover:shadow-sm transition-all"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-stone-200">
                  <img
                    src={premise.image}
                    alt={premise.altText}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="text-[11px] font-semibold uppercase bg-stone-950/70 text-white backdrop-blur-xs px-2 py-0.5 rounded">
                      {premise.title}
                    </span>
                  </div>
                </div>
                <figcaption className="p-4 space-y-1.5">
                  <p className="text-xs font-semibold text-stone-900">{premise.caption}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{premise.description}</p>
                  <p className="text-[10px] text-stone-600 italic border-t border-stone-200 pt-1 mt-2">
                    Alt text : {premise.altText}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
