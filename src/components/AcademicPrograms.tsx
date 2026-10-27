import React, { useState } from 'react';
import { ACADEMIC_CYCLES } from '../data/schoolData';
import { AcademicCycle } from '../types/school';
import { Clock, Users, Globe, BookOpen, AlertCircle, CheckCircle, ChevronRight, HelpCircle } from 'lucide-react';

interface AcademicProgramsProps {
  onSelectCycleForInquiry: (cycleName: string) => void;
}

export const AcademicPrograms: React.FC<AcademicProgramsProps> = ({ onSelectCycleForInquiry }) => {
  const [selectedCycleId, setSelectedCycleId] = useState<string>(ACADEMIC_CYCLES[0].id);

  const activeCycle = ACADEMIC_CYCLES.find((c) => c.id === selectedCycleId) || ACADEMIC_CYCLES[0];

  return (
    <section id="parcours" className="py-16 lg:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-900">
              Offre Pédagogique
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 mt-1">
              Parcours et cycles scolaires
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
              Une progression continue qui accompagne l'élève du tout premier éveil jusqu'à l'acquisition
              solide des compétences académiques et citoyennes.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5 max-w-md shrink-0">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-amber-900">Note aux familles :</strong> Les cycles et niveaux définitifs sont à confirmer selon les arrêtés et agréments officiels de l'établissement.
            </div>
          </div>
        </div>

        {/* Cycle Switcher Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-stone-200/80 rounded-xl max-w-2xl">
          {ACADEMIC_CYCLES.map((cycle) => {
            const isSelected = cycle.id === selectedCycleId;
            return (
              <button
                key={cycle.id}
                onClick={() => setSelectedCycleId(cycle.id)}
                className={`flex-1 min-w-[160px] py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  isSelected
                    ? 'bg-white text-stone-900 shadow-xs border border-stone-300/80'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100/60'
                }`}
              >
                {cycle.name}
              </button>
            );
          })}
        </div>

        {/* Selected Cycle Detailed Presentation Card */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-8">
          {/* Cycle Overview Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                  {activeCycle.name}
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 font-semibold border border-amber-200">
                  À confirmer par l’établissement
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-500 mt-1 italic">
                {activeCycle.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs text-stone-600 bg-stone-50 px-4 py-2.5 rounded-xl border border-stone-200 shrink-0">
              <span className="font-semibold text-stone-900">Tranche d'âge :</span>
              <span className="field-placeholder text-amber-800">{activeCycle.ageRange}</span>
            </div>
          </div>

          {/* 3 Sub-Blocks: Niveaux, Objectifs, Infos Pratiques */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 1. Niveaux du cycle */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                <BookOpen className="w-4 h-4 text-amber-800" />
                <h4>Niveaux proposés</h4>
              </div>
              <div className="space-y-2">
                {activeCycle.levels.map((lvl, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 flex items-center justify-between"
                  >
                    <span className="font-medium text-stone-900">{lvl}</span>
                    <span className="text-[11px] text-amber-800 font-medium italic">
                      À valider
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-[11px] text-stone-600 italic">
                * La confirmation définitive des classes est soumise aux capacités d'accueil autorisées.
              </div>
            </div>

            {/* 2. Objectifs Pédagogiques */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                <CheckCircle className="w-4 h-4 text-amber-800" />
                <h4>Objectifs pédagogiques</h4>
              </div>
              <ul className="space-y-3">
                {activeCycle.objectives.map((obj, index) => (
                  <li key={index} className="text-xs text-stone-600 flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0 mt-1.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
              <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs text-stone-600 space-y-1">
                <strong className="text-stone-900 block font-semibold">Projet d'épanouissement :</strong>
                <span>Pédagogie différenciée pour valoriser les points forts et combler les fragilités en temps réel.</span>
              </div>
            </div>

            {/* 3. Informations pratiques si disponibles */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                <HelpCircle className="w-4 h-4 text-amber-800" />
                <h4>Informations pratiques</h4>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 block">Horaires de classe</span>
                    <span className="field-placeholder text-amber-800">
                      {activeCycle.practicalInfo.hours}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-stone-200">
                  <Users className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 block">Effectifs cibles</span>
                    <span className="field-placeholder text-amber-800">
                      {activeCycle.practicalInfo.classSize}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-stone-200">
                  <BookOpen className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 block">Encadrement</span>
                    <span className="field-placeholder text-amber-800">
                      {activeCycle.practicalInfo.supervision}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-stone-200">
                  <Globe className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 block">Langues vivantes</span>
                    <span className="field-placeholder text-amber-800">
                      {activeCycle.practicalInfo.languages}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectCycleForInquiry(activeCycle.name)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
              >
                <span>Demander des détails sur ce cycle</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
