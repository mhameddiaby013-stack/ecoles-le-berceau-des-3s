import React, { useState } from 'react';
import { Menu, X, GraduationCap, ChevronRight, Phone, Sparkles } from 'lucide-react';
import { SchoolConfig } from '../types/school';

interface NavbarProps {
  config: SchoolConfig;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAdminGuide: () => void;
  pendingFieldsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  activeSection,
  onNavigate,
  onOpenAdminGuide,
  pendingFieldsCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'ecole', label: 'L’école' },
    { id: 'parcours', label: 'Parcours scolaires' },
    { id: 'vie-scolaire', label: 'Vie scolaire' },
    { id: 'inscriptions', label: 'Inscriptions' },
    { id: 'actualites', label: 'Actualités' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Top Bar Notification / Pending Fields Banner for Administration */}
      <div className="bg-amber-50 border-b border-amber-200/60 px-4 py-1.5 text-xs text-amber-900 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="font-semibold text-amber-950">Portail officiel</span>
            <span aria-hidden="true" className="text-amber-300">·</span>
            <span className="truncate">Renseignements et pré-inscriptions ouvertes pour la prochaine rentrée scolaire</span>
          </div>
          <button
            onClick={onOpenAdminGuide}
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-medium text-amber-900 bg-amber-100 hover:bg-amber-200/80 border border-amber-300 transition-colors whitespace-nowrap shrink-0"
            title="Consulter les champs institutionnels à valider par l'école"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Champs à compléter ({pendingFieldsCount})</span>
          </button>
        </div>
      </div>

      {/* Main One-Row Three-Zone Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleLinkClick('accueil')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-white shadow-sm shrink-0 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="whitespace-nowrap shrink-0">
              <span className="block text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-tight">
                {config.name}
              </span>
              <span className="block text-xs font-medium text-stone-700 tracking-wide">
                Établissement d’enseignement & d’épanouissement
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-2 transition-colors whitespace-nowrap shrink-0 hover:text-stone-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1 ${
                    isActive ? 'text-amber-800 font-semibold' : 'text-stone-600'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-700 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('inscriptions')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 active:bg-amber-950 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>Préparer une inscription</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-stone-50 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-amber-100/70 text-amber-900 font-semibold'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>
              );
            })}
            <div className="pt-4 border-t border-stone-200 mt-2 space-y-2">
              <button
                onClick={() => handleLinkClick('inscriptions')}
                className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg shadow-sm"
              >
                Préparer une inscription
              </button>
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-2.5 px-4 text-center text-sm font-medium text-stone-700 bg-stone-200/80 hover:bg-stone-300/80 rounded-lg"
              >
                Demander des informations
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
