import React, { useState } from 'react';
import { SchoolConfig } from '../types/school';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, ExternalLink, Navigation } from 'lucide-react';

interface ContactSectionProps {
  config: SchoolConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    setError(null);
    setSent(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-900">
            Coordonnées & Échanges
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 mt-1">
            Contacter les Écoles Le Berceau des 3S
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
            Notre secrétariat et notre équipe de direction se tiennent à votre disposition
            pour répondre à toutes vos interrogations.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Direct Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Coordinates with placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-5">
              <h3 className="text-lg font-bold text-stone-900 pb-3 border-b border-stone-100">
                Coordonnées de l’établissement
              </h3>

              {/* Adresse */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-900 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-900 block">
                    Adresse géographique
                  </span>
                  <p className="text-xs sm:text-sm field-placeholder text-amber-800 mt-0.5">
                    {config.address}
                  </p>
                  <p className="text-[11px] text-stone-500 mt-1">
                    [Code postal, Ville, Quartier et repères d'accès à renseigner par l'école]
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-stone-100">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-900 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-900 block">
                    Téléphone du secrétariat
                  </span>
                  <p className="text-xs sm:text-sm field-placeholder text-amber-800 mt-0.5 font-mono">
                    {config.phone}
                  </p>
                  <p className="text-[11px] text-stone-500 mt-1">
                    Ligne directe pour les familles et partenaires éducatifs.
                  </p>
                </div>
              </div>

              {/* Courriel */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-stone-100">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-900 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-900 block">
                    Courriel officiel
                  </span>
                  <p className="text-xs sm:text-sm field-placeholder text-amber-800 mt-0.5">
                    {config.email}
                  </p>
                  <p className="text-[11px] text-stone-500 mt-1">
                    Pour l'envoi de documents administratifs ou demandes de rendez-vous.
                  </p>
                </div>
              </div>

              {/* Horaires d'accueil */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-stone-100">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-900 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-900 block">
                    Horaires d’ouverture du secrétariat
                  </span>
                  <p className="text-xs sm:text-sm field-placeholder text-amber-800 mt-0.5">
                    {config.receptionHours}
                  </p>
                  <p className="text-[11px] text-stone-500 mt-1">
                    * Les horaires définitifs seront affichés dès validation par l'administration.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte intégrable placeholder */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-amber-800" />
                  <h4 className="text-sm font-bold text-stone-900">Plan d’accès & Carte interactive</h4>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium">
                  Emplacement réservé
                </span>
              </div>

              <div className="relative aspect-16/9 rounded-2xl bg-stone-100 border border-stone-300 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                {/* Visual grid texture representing map lines */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#b45309_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center mx-auto shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-semibold text-stone-800">
                    Carte intégrable Google Maps / OpenStreetMap
                  </p>
                  <p className="text-[11px] text-stone-500 max-w-xs mx-auto leading-relaxed">
                    Le module cartographique sera directement activé avec l'itinéraire dès que l’adresse précise sera enregistrée par l’établissement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs">
            {sent ? (
              <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">Message transmis à l’équipe</h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Merci <strong>{contactForm.name}</strong>. Votre message a bien été transmis au secrétariat des Écoles Le Berceau des 3S. Nous reviendrons vers vous dans les meilleurs délais.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setContactForm({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors mt-2"
                >
                  Envoyer un nouveau message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 pb-1">Écrire au secrétariat</h3>
                  <p className="text-xs text-stone-500">
                    Remplissez ce formulaire pour toute question générale relative à la vie de l'école.
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactName" className="block text-xs font-semibold text-stone-700 mb-1">
                      Votre nom & prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      required
                      placeholder="ex. Mme Diallo"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmail" className="block text-xs font-semibold text-stone-700 mb-1">
                      Votre adresse courriel <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      required
                      placeholder="votre.courriel@domaine.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactSubject" className="block text-xs font-semibold text-stone-700 mb-1">
                    Objet de votre demande
                  </label>
                  <input
                    id="contactSubject"
                    type="text"
                    placeholder="ex. Renseignements généraux, prise de contact, questions pédagogiques"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="contactMsg" className="block text-xs font-semibold text-stone-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contactMsg"
                    rows={5}
                    required
                    placeholder="Indiquez vos interrogations ou le motif de votre prise de contact..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors shadow-sm flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmettre votre message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
