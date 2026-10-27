import React from 'react';
import { ArrowRight, BookOpen, Compass, HeartHandshake, ShieldCheck, Calendar, MapPin, Phone, BellRing, Sparkles } from 'lucide-react';
import { SchoolConfig } from '../types/school';

interface HeroProps {
  config: SchoolConfig;
  onNavigate: (sectionId: string) => void;
  onOpenQuickInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onNavigate, onOpenQuickInquiry }) => {
  return (
    <section id="accueil" className="relative pt-6 pb-16 lg:py-20 overflow-hidden bg-gradient-to-b from-amber-50/50 via-stone-50 to-stone-100/50">
      {/* Decorative Warm Background Accents */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -translate-x-1/4 w-[500px] h-[500px] bg-stone-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Flash Announcement Bar */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-xl bg-white border border-amber-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-3">
            <span className="p-1.5 rounded-lg bg-amber-100 text-amber-900 shrink-0">
              <BellRing className="w-4 h-4" />
            </span>
            <div className="text-xs sm:text-sm text-stone-700">
              <strong className="font-semibold text-stone-900">Annonce officielle :</strong> Préparation des dossiers d'admission. Rendez-vous et visites individualisées sur demande.
            </div>
          </div>
          <button
            onClick={() => onNavigate('inscriptions')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-amber-950 underline underline-offset-4 shrink-0 transition-colors"
          >
            <span>Consulter les démarches</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2-Column Balanced Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-amber-900 bg-amber-100/80 px-3 py-1 rounded-md border border-amber-200/80">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Établissement Scolaire de Référence</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15] text-balance">
              {config.name}
            </h1>

            <p className="text-lg sm:text-xl text-amber-950 font-medium">
              Un cadre bienveillant et structurant pour apprendre, grandir et s'épanouir.
            </p>

            <div className="text-base text-stone-600 leading-relaxed max-w-2xl space-y-3">
              <p>
                Bienvenue aux Écoles Le Berceau des 3S. Notre établissement a pour mission première
                d'accompagner chaque élève vers l’excellence académique et l'épanouissement personnel,
                dans un climat fondé sur l'apprentissage solide, la bienveillance continue et la discipline positive.
              </p>
              <p className="text-sm text-stone-700">
                Chaque enfant y trouve un cadre protecteur, des repères clairs et une équipe éducative dévouée
                qui valorise son potentiel et sa curiosité intellectuelle.
              </p>
            </div>

            {/* 3 Explicit Visible Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('ecole')}
                className="px-5 py-3 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg shadow-2xs transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <Compass className="w-4 h-4 text-amber-800" />
                <span>Découvrir l’école</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 text-sm font-semibold text-stone-800 bg-amber-50 hover:bg-amber-100/80 border border-amber-300/80 rounded-lg transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <Phone className="w-4 h-4 text-amber-800" />
                <span>Demander des informations</span>
              </button>

              <button
                onClick={() => onNavigate('inscriptions')}
                className="px-6 py-3 text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 active:bg-amber-950 rounded-lg shadow-sm transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>Préparer une inscription</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Notions Clés Highlights */}
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-2.5 rounded-lg bg-white/70 border border-stone-200/80">
                <span className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">Pilier I</span>
                <span className="text-sm font-bold text-stone-900">Apprentissage</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/70 border border-stone-200/80">
                <span className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">Pilier II</span>
                <span className="text-sm font-bold text-stone-900">Bienveillance</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/70 border border-stone-200/80">
                <span className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">Pilier III</span>
                <span className="text-sm font-bold text-stone-900">Discipline</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/70 border border-stone-200/80">
                <span className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">Pilier IV</span>
                <span className="text-sm font-bold text-stone-900">Épanouissement</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with Fallback */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-300 bg-stone-200 group">
              <img
                src="/src/assets/images/hero_school_campus_1793101850773.jpg"
                alt="Vue architecturale chaleureuse du bâtiment et des extérieurs des Écoles Le Berceau des 3S"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
                  Cadre de vie & Études
                </span>
                <p className="text-lg font-bold">Écoles Le Berceau des 3S</p>
                <p className="text-xs text-stone-200 mt-1">
                  Espaces modernes, lumineux et sécurisés dédiés à la réussite de chaque élève.
                </p>
              </div>
            </div>

            {/* Quick Campus Data Cards with Unboxed Informational Styling */}
            <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-800 shrink-0" />
                <span>
                  <strong className="text-stone-800">Localisation :</strong>{' '}
                  <span className="field-placeholder text-amber-800 font-medium">{config.address}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-800 shrink-0" />
                <span>
                  <strong className="text-stone-800">Inscriptions :</strong>{' '}
                  <span className="field-placeholder text-amber-800 font-medium">{config.registrationPeriod}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-800 shrink-0" />
                <span>
                  <strong className="text-stone-800">Téléphone d'accueil :</strong>{' '}
                  <span className="field-placeholder text-amber-800 font-medium">{config.phone}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1 Feature: Quick Overview of the Website's Key Sections */}
        <div className="mt-16 pt-12 border-t border-stone-200">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">Exploration du portail</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                Aperçu des rubriques de l'établissement
              </h2>
            </div>
            <p className="text-xs text-stone-700">
              Naviguez facilement vers les informations dont vous avez besoin
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => onNavigate('ecole')}
              className="p-5 text-left bg-white hover:bg-stone-50 border border-stone-200 rounded-xl shadow-2xs hover:shadow-sm transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-amber-900 group-hover:bg-amber-100 transition-colors mb-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-amber-900 transition-colors">
                L’école & Son projet
              </h3>
              <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                Histoire, vision éducative, équipe pédagogique et locaux dédiés.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-900 mt-3">
                En savoir plus <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => onNavigate('parcours')}
              className="p-5 text-left bg-white hover:bg-stone-50 border border-stone-200 rounded-xl shadow-2xs hover:shadow-sm transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-amber-900 group-hover:bg-amber-100 transition-colors mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-amber-900 transition-colors">
                Parcours scolaires
              </h3>
              <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                Cycles d’enseignement, tranches d'âge et objectifs pédagogiques.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-900 mt-3">
                Voir les cycles <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => onNavigate('vie-scolaire')}
              className="p-5 text-left bg-white hover:bg-stone-50 border border-stone-200 rounded-xl shadow-2xs hover:shadow-sm transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-amber-900 group-hover:bg-amber-100 transition-colors mb-3">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-amber-900 transition-colors">
                Vie scolaire & Quotidien
              </h3>
              <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                Journée des élèves, projets, activités périscolaires et charte de respect.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-900 mt-3">
                Découvrir la vie <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => onNavigate('inscriptions')}
              className="p-5 text-left bg-white hover:bg-stone-50 border border-stone-200 rounded-xl shadow-2xs hover:shadow-sm transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-amber-900 group-hover:bg-amber-100 transition-colors mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-amber-900 transition-colors">
                Admissions & Démarches
              </h3>
              <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                Procédure d'inscription, documents à fournir et formulaire de contact direct.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-900 mt-3">
                Faire une demande <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
