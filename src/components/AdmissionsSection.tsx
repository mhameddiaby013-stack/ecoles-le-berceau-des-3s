import React, { useState } from 'react';
import { REQUIRED_DOCUMENTS } from '../data/schoolData';
import { SchoolConfig, InquiryFormData } from '../types/school';
import {
  FileText,
  CheckCircle,
  HelpCircle,
  Send,
  AlertCircle,
  Calendar,
  PhoneCall,
  Clock,
  Printer,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

interface AdmissionsSectionProps {
  config: SchoolConfig;
  preselectedCycle?: string;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ config, preselectedCycle }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    parentFullName: '',
    email: '',
    phone: '',
    childAgeOrGrade: preselectedCycle || '',
    schoolYear: '2026-2027',
    message: '',
    gdprConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.parentFullName.trim()) {
      setErrorMsg('Veuillez renseigner le nom complet du parent ou responsable légal.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Veuillez renseigner une adresse courriel valide.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Veuillez renseigner un numéro de téléphone joignable.');
      return;
    }
    if (!formData.childAgeOrGrade.trim()) {
      setErrorMsg("Veuillez indiquer l'âge ou le niveau scolaire de l'enfant.");
      return;
    }
    if (!formData.gdprConsent) {
      setErrorMsg('Veuillez cocher la case de consentement au traitement de vos données.');
      return;
    }

    // Success state
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      parentFullName: '',
      email: '',
      phone: '',
      childAgeOrGrade: '',
      schoolYear: '2026-2027',
      message: '',
      gdprConsent: false,
    });
    setSubmitted(false);
    setErrorMsg(null);
  };

  const steps = [
    {
      step: '01',
      title: 'Prise de contact & Renseignements',
      desc: 'Formulaire de demande d’information en ligne ou échange direct auprès du secrétariat.',
      status: 'Étape ouverte aux familles',
    },
    {
      step: '02',
      title: 'Constitution du dossier de candidature',
      desc: 'Rassemblement des pièces justificatives administratives et du livret scolaire.',
      status: 'Documents à confirmer',
    },
    {
      step: '03',
      title: 'Entretien pédagogique',
      desc: 'Rencontre avec la direction pour échanger sur le projet de l’élève et ses besoins.',
      status: 'Sur convocation',
    },
    {
      step: '04',
      title: 'Confirmation d’admission',
      desc: 'Attribution de la place et validation définitive des formalités administratives.',
      status: 'Selon capacités d’accueil',
    },
  ];

  return (
    <section id="inscriptions" className="py-16 lg:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-900">
            Admissions & Scolarité
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 mt-1">
            Inscriptions et démarches pour les familles
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
            Un processus transparent et attentif pour faciliter l'intégration de votre enfant
            au sein des Écoles Le Berceau des 3S.
          </p>
        </div>

        {/* 1. Les étapes d'inscription */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                Parcours d'admission
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
                Les 4 étapes clés d'une inscription
              </h3>
            </div>
            <div className="text-xs text-stone-500">
              Période officielle :{' '}
              <span className="field-placeholder text-amber-800 font-medium">
                {config.registrationPeriod}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-amber-800 font-mono tracking-tighter">
                      {st.step}
                    </span>
                    <span className="text-[11px] font-semibold text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                      {st.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm mb-2">{st.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Documents requis (liste confirmée / à confirmer) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-800" />
                <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                  Pièces justificatives à préparer
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Documents types nécessaires à l'instruction du dossier scolaire.
              </p>
            </div>
            <span className="text-xs px-3 py-1 rounded-md bg-amber-50 text-amber-900 font-semibold border border-amber-200 shrink-0">
              Liste indicative à valider par le secrétariat
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {REQUIRED_DOCUMENTS.map((doc, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3"
              >
                <CheckCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-stone-900 block">{doc.name}</span>
                  <span className="field-placeholder text-amber-800 text-[11px]">{doc.note}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-stone-100/70 text-xs text-stone-600 flex items-center justify-between gap-4">
            <span>
              <strong>Frais de scolarité & Tarifs :</strong>{' '}
              <span className="field-placeholder text-amber-800 font-semibold">
                [Grille tarifaire et modalités de règlement à confirmer par l'établissement]
              </span>
            </span>
            <span className="text-[11px] text-stone-600 italic shrink-0">
              Aucun tarif inventé
            </span>
          </div>
        </div>

        {/* 3. Formulaire de demande d'information interactif */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left instructions */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-amber-900 text-white space-y-4 shadow-md">
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-200">
                Contact & Pré-Inscription
              </span>
              <h3 className="text-xl font-bold">Transmettre votre demande</h3>
              <p className="text-xs text-amber-100 leading-relaxed">
                Remplissez ce formulaire pour recevoir la plaquette d'information détaillée,
                les dates des prochaines réunions d'accueil ou planifier un entretien personnalisé avec la direction.
              </p>

              <div className="pt-2 border-t border-amber-800/80 space-y-2.5 text-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Réponse du secrétariat sous 2 à 3 jours ouvrés.</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Traitement confidentiel de vos coordonnées familiales.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 space-y-2">
              <span className="font-bold text-stone-900 block">Assistance téléphonique :</span>
              <p>
                Pour toute urgence ou précision administrative :{' '}
                <span className="field-placeholder text-amber-800 font-semibold">{config.phone}</span>
              </p>
              <p>
                Courriel :{' '}
                <span className="field-placeholder text-amber-800 font-semibold">{config.email}</span>
              </p>
            </div>
          </div>

          {/* Right: The actual form with validation & confirmation state */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm">
            {submitted ? (
              <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-stone-900">Demande enregistrée avec succès</h3>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Merci <strong>{formData.parentFullName}</strong>. Les Écoles Le Berceau des 3S ont bien reçu votre demande d'information pour la scolarisation de votre enfant.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left text-xs text-stone-700 max-w-md mx-auto space-y-1.5">
                  <p>
                    <strong>Responsable :</strong> {formData.parentFullName}
                  </p>
                  <p>
                    <strong>Courriel :</strong> {formData.email}
                  </p>
                  <p>
                    <strong>Téléphone :</strong> {formData.phone}
                  </p>
                  <p>
                    <strong>Niveau / Âge :</strong> {formData.childAgeOrGrade}
                  </p>
                  <p>
                    <strong>Année scolaire :</strong> {formData.schoolYear}
                  </p>
                  {formData.message && (
                    <p className="pt-1 border-t border-stone-200 mt-1">
                      <strong>Précisions :</strong> {formData.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Imprimer le récapitulatif</span>
                  </button>
                  <button
                    onClick={handleResetForm}
                    className="px-4 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-stone-900 pb-2 border-b border-stone-100">
                  Formulaire de demande d’information
                </h3>

                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nom du parent ou responsable */}
                  <div>
                    <label htmlFor="parentFullName" className="block text-xs font-semibold text-stone-700 mb-1">
                      Nom & Prénom du parent ou responsable <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="parentFullName"
                      name="parentFullName"
                      type="text"
                      required
                      placeholder="ex. Mme Fatoumata Keita"
                      value={formData.parentFullName}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    />
                  </div>

                  {/* Courriel */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-stone-700 mb-1">
                      Adresse courriel <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="parent@exemple.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Téléphone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-stone-700 mb-1">
                      Téléphone joignable <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="ex. +33 ... ou numéro local"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    />
                  </div>

                  {/* Âge ou niveau de l'enfant */}
                  <div>
                    <label htmlFor="childAgeOrGrade" className="block text-xs font-semibold text-stone-700 mb-1">
                      Âge ou niveau recherché de l'enfant <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="childAgeOrGrade"
                      name="childAgeOrGrade"
                      type="text"
                      required
                      placeholder="ex. 4 ans / Petite Section, CP, Collège..."
                      value={formData.childAgeOrGrade}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    />
                  </div>
                </div>

                {/* Année scolaire visée */}
                <div>
                  <label htmlFor="schoolYear" className="block text-xs font-semibold text-stone-700 mb-1">
                    Rentrée scolaire visée
                  </label>
                  <select
                    id="schoolYear"
                    name="schoolYear"
                    value={formData.schoolYear}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    <option value="2026-2027">Année scolaire 2026-2027</option>
                    <option value="2027-2028">Année scolaire 2027-2028</option>
                    <option value="En cours d'année">En cours d'année scolaire (selon places)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-stone-700 mb-1">
                    Votre message ou questions particulières
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Précisez ici les attentes spécifiques, l'établissement précédent ou toute information utile pour l'équipe pédagogique..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  />
                </div>

                {/* Case de consentement au traitement des données (Obligatoire) */}
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="gdprConsent"
                      checked={formData.gdprConsent}
                      onChange={handleCheckboxChange}
                      className="mt-1 h-4 w-4 rounded border-stone-300 text-amber-800 focus:ring-amber-500 shrink-0"
                    />
                    <span className="text-xs text-stone-600 leading-relaxed">
                      J'accepte que les données recueillies dans ce formulaire soient transmises aux
                      <strong> Écoles Le Berceau des 3S</strong> aux seules fins de traiter ma demande d'information et d'inscription, dans le strict respect de la confidentialité des données personnelles familiales. <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 active:bg-amber-950 transition-colors shadow-sm flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer la demande d'information</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
