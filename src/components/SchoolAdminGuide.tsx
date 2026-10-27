import React, { useState } from 'react';
import { SchoolConfig } from '../types/school';
import { X, CheckCircle2, Sparkles, AlertCircle, Copy, Check, Save, RotateCcw, Building2 } from 'lucide-react';

interface SchoolAdminGuideProps {
  isOpen: boolean;
  onClose: () => void;
  config: SchoolConfig;
  onUpdateConfig: (newConfig: SchoolConfig) => void;
  onResetDefaultConfig: () => void;
}

export const SchoolAdminGuide: React.FC<SchoolAdminGuideProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
  onResetDefaultConfig,
}) => {
  const [copied, setCopied] = useState(false);
  const [tempConfig, setTempConfig] = useState<SchoolConfig>(config);
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const pendingChecklist = [
    { label: "Adresse complète de l'établissement", current: config.address, key: "address" },
    { label: "Numéro de téléphone officiel", current: config.phone, key: "phone" },
    { label: "Adresse courriel du secrétariat", current: config.email, key: "email" },
    { label: "Horaires d'accueil et d'ouverture", current: config.receptionHours, key: "receptionHours" },
    { label: "Période officielle des inscriptions", current: config.registrationPeriod, key: "registrationPeriod" },
    { label: "Niveaux d'enseignement agréés", current: "[À confirmer par l'établissement : Maternelle, Primaire, Collège]" },
    { label: "Tarifs et frais de scolarité", current: "[À fixer selon la grille officielle]" },
    { label: "Noms et profils de la direction & enseignants", current: "[À personnaliser dans la section L'école]" },
    { label: "Histoire et année de fondation de l'établissement", current: "[À renseigner dans la section L'école]" },
  ];

  const handleCopyChecklist = () => {
    const text = pendingChecklist
      .map((item, idx) => `${idx + 1}. ${item.label} : ${item.current}`)
      .join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApplyChanges = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig(tempConfig);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900">
                Guide des champs à renseigner par l'école
              </h3>
              <p className="text-xs text-stone-500">
                Conformité : aucune fausse information n'est inventée sur le site
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informational Callout */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2">
          <div className="flex items-center gap-2 font-semibold">
            <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Principe de rigueur et de transparence</span>
          </div>
          <p className="text-xs text-stone-700 leading-relaxed">
            Pour respecter l'intégrité de l'établissement, tous les éléments non encore confirmés
            (adresses, téléphone, tarifs, horaires exacts, niveaux autorisés) apparaissent sous forme de
            champs distincts <code>[À compléter]</code>.
            Vous pouvez tester leur affichage en direct ci-dessous :
          </p>
        </div>

        {/* Live Simulator Form */}
        <form onSubmit={handleApplyChanges} className="space-y-4 pt-2">
          <h4 className="text-sm font-bold text-stone-900">
            Tester le remplacement des coordonnées en direct (Aperçu)
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                Adresse de l’école
              </label>
              <input
                type="text"
                value={tempConfig.address}
                onChange={(e) => setTempConfig({ ...tempConfig, address: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="[Adresse de l’école]"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                Numéro de téléphone
              </label>
              <input
                type="text"
                value={tempConfig.phone}
                onChange={(e) => setTempConfig({ ...tempConfig, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="[Numéro de téléphone]"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                Courriel de contact
              </label>
              <input
                type="text"
                value={tempConfig.email}
                onChange={(e) => setTempConfig({ ...tempConfig, email: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="[Courriel de l'école]"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                Horaires d'accueil
              </label>
              <input
                type="text"
                value={tempConfig.receptionHours}
                onChange={(e) => setTempConfig({ ...tempConfig, receptionHours: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="[Horaires d’accueil à confirmer]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-semibold text-stone-700 mb-1">
                Période des inscriptions
              </label>
              <input
                type="text"
                value={tempConfig.registrationPeriod}
                onChange={(e) => setTempConfig({ ...tempConfig, registrationPeriod: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="[Période des inscriptions]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => {
                onResetDefaultConfig();
                setTempConfig(config);
              }}
              className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Réinitialiser les crochets [À compléter]</span>
            </button>

            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Appliquer dans le site</span>
            </button>
          </div>

          {saveSuccess && (
            <p className="text-xs text-emerald-700 font-medium text-center">
              Coordonnées mises à jour sur l'ensemble des pages du site !
            </p>
          )}
        </form>

        {/* Recap Checklist */}
        <div className="space-y-3 pt-4 border-t border-stone-200">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-stone-900">
              Liste des éléments en attente de validation
            </h4>
            <button
              onClick={handleCopyChecklist}
              className="text-xs text-amber-900 hover:text-amber-950 font-semibold inline-flex items-center gap-1"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copié dans le presse-papier' : 'Copier la liste'}</span>
            </button>
          </div>

          <div className="space-y-2">
            {pendingChecklist.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5 text-xs"
              >
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 font-bold text-[10px]">
                  {idx + 1}
                </div>
                <div>
                  <strong className="text-stone-900 block">{item.label}</strong>
                  <span className="text-stone-500 italic">{item.current}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg"
          >
            Fermer le guide
          </button>
        </div>
      </div>
    </div>
  );
};
