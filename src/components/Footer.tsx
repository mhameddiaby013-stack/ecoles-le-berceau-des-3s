import React, { useState } from 'react';
import { SchoolConfig } from '../types/school';
import { GraduationCap, MapPin, Phone, Mail, ArrowUp, ShieldCheck, ChevronRight, X, FileText } from 'lucide-react';

interface FooterProps {
  config: SchoolConfig;
  onNavigate: (sectionId: string) => void;
  onOpenAdminGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onNavigate, onOpenAdminGuide }) => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      {/* Upper Footer: Main Navigation & Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: School Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-700 text-white flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {config.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Établissement scolaire d'excellence et de bienveillance accompagnant les élèves
              dans l'acquisition des savoirs fondamentaux, le sens de l'effort et leur épanouissement personnel.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <p className="font-semibold text-stone-200">Les 4 Piliers Fondamentaux :</p>
              <p className="text-amber-400 font-medium">
                Apprentissage · Bienveillance · Discipline · Épanouissement
              </p>
            </div>
          </div>

          {/* Col 3: Navigation rapide */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Rubriques
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('accueil')}
                  className="hover:text-white transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ecole')}
                  className="hover:text-white transition-colors"
                >
                  L’école & Valeurs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('parcours')}
                  className="hover:text-white transition-colors"
                >
                  Parcours scolaires
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('vie-scolaire')}
                  className="hover:text-white transition-colors"
                >
                  Vie scolaire & Galerie
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inscriptions')}
                  className="hover:text-white transition-colors"
                >
                  Admissions & Inscriptions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('actualites')}
                  className="hover:text-white transition-colors"
                >
                  Actualités
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Accès
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Coordonnées officielles */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Coordonnées
            </p>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="field-placeholder text-amber-300">
                  {config.address}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="field-placeholder text-amber-300 font-mono">
                  {config.phone}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="field-placeholder text-amber-300">
                  {config.email}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAdminGuide}
                className="text-[11px] text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                Gérer les champs de l'établissement
              </button>
            </div>
          </div>

          {/* Col 5: Protection des données & Action */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Déontologie & Droits
            </p>
            <p className="text-xs text-stone-400 leading-relaxed">
              Protection stricte de la vie privée des élèves et respect scrupuleux du droit à l'image des mineurs.
            </p>
            <button
              onClick={() => setLegalModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Mentions légales & RGPD</span>
            </button>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-medium text-stone-200 transition-colors"
                aria-label="Retour en haut de page"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Haut de page</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800/80 bg-stone-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {config.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLegalModalOpen(true)}
              className="hover:text-stone-300 transition-colors"
            >
              Mentions légales à compléter
            </button>
            <span>·</span>
            <button
              onClick={() => setLegalModalOpen(true)}
              className="hover:text-stone-300 transition-colors"
            >
              Politique de confidentialité
            </button>
          </div>
        </div>
      </div>

      {/* Modal Mentions Légales à compléter */}
      {legalModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 text-stone-900"
          onClick={() => setLegalModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-5 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-800" />
                <h3 className="text-lg font-bold text-stone-900">
                  Mentions Légales & Traitement des Données
                </h3>
              </div>
              <button
                onClick={() => setLegalModalOpen(false)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 mb-1">1. Éditeur du site</h4>
                <p>
                  <strong>Établissement :</strong> Écoles Le Berceau des 3S
                </p>
                <p>
                  <strong>Statut juridique :</strong> [Statut juridique de l’établissement à compléter]
                </p>
                <p>
                  <strong>Siège social :</strong> [Adresse complète de l’école à renseigner]
                </p>
                <p>
                  <strong>Numéro d'immatriculation / Agrément :</strong> [Agrément ministériel ou numéro d'enregistrement à compléter]
                </p>
                <p>
                  <strong>Directeur de la publication :</strong> [Nom du représentant légal à renseigner]
                </p>
              </div>

              <div className="pt-2 border-t border-stone-200">
                <h4 className="font-bold text-stone-900 mb-1">2. Hébergement & Conception</h4>
                <p>
                  Ce site internet est hébergé sur une infrastructure Cloud sécurisée. Les données transmises par les formulaires de demande d'inscription sont strictement réservées à l'usage interne de l'administration scolaire.
                </p>
              </div>

              <div className="pt-2 border-t border-stone-200">
                <h4 className="font-bold text-stone-900 mb-1">3. Protection de la vie privée & Données personnelles (RGPD)</h4>
                <p>
                  Les données transmises via les formulaires de ce site (nom des parents, téléphone, adresse électronique, âge ou niveau de l'enfant) sont collectées exclusivement afin de répondre aux demandes d'information et d'instruire les dossiers de pré-admission. Elles ne sont cédées ni vendues à aucun tiers.
                </p>
                <p className="mt-1">
                  Chaque parent dispose d'un droit d'accès, de rectification et d'effacement de ses données personnelles sur simple demande adressée à [Courriel de contact officiel].
                </p>
              </div>

              <div className="pt-2 border-t border-stone-200">
                <h4 className="font-bold text-stone-900 mb-1">4. Droit à l'image des élèves</h4>
                <p>
                  Conformément au respect de la vie privée et à la législation protectrice des mineurs, aucune photographie identifiant un enfant n'est publiée sans le consentement exprès et écrit des parents ou tuteurs légaux.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setLegalModalOpen(false)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors"
              >
                Fermer les mentions
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
