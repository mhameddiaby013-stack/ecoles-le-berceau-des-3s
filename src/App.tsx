/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AcademicPrograms } from './components/AcademicPrograms';
import { SchoolLife } from './components/SchoolLife';
import { AdmissionsSection } from './components/AdmissionsSection';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SchoolAdminGuide } from './components/SchoolAdminGuide';
import { DEFAULT_SCHOOL_CONFIG } from './data/schoolData';
import { SchoolConfig } from './types/school';

export default function App() {
  const [config, setConfig] = useState<SchoolConfig>(DEFAULT_SCHOOL_CONFIG);
  const [activeSection, setActiveSection] = useState<string>('accueil');
  const [adminGuideOpen, setAdminGuideOpen] = useState<boolean>(false);
  const [selectedCycleForInquiry, setSelectedCycleForInquiry] = useState<string>('');

  // Track scroll position to update active navbar section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'ecole', 'parcours', 'vie-scolaire', 'inscriptions', 'actualites', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCycleSelect = (cycleName: string) => {
    setSelectedCycleForInquiry(cycleName);
    handleNavigate('inscriptions');
  };

  const handleUpdateConfig = (newConfig: SchoolConfig) => {
    setConfig(newConfig);
  };

  const handleResetDefaultConfig = () => {
    setConfig(DEFAULT_SCHOOL_CONFIG);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Accessible skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 px-4 py-2 bg-amber-800 text-white rounded-md shadow-lg text-xs font-semibold focus:outline-none"
      >
        Aller au contenu principal
      </a>

      {/* Navigation */}
      <Navbar
        config={config}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAdminGuide={() => setAdminGuideOpen(true)}
        pendingFieldsCount={7}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 1. Accueil */}
        <Hero
          config={config}
          onNavigate={handleNavigate}
          onOpenQuickInquiry={() => handleNavigate('inscriptions')}
        />

        {/* 2. L’école & Valeurs & Équipe modifiable */}
        <AboutSection
          config={config}
          onOpenAdminGuide={() => setAdminGuideOpen(true)}
        />

        {/* 3. Parcours scolaires */}
        <AcademicPrograms onSelectCycleForInquiry={handleCycleSelect} />

        {/* 4. Vie scolaire & Galerie & Protection des mineurs */}
        <SchoolLife />

        {/* 5. Admissions et inscriptions avec formulaire interactif & consentement */}
        <AdmissionsSection
          config={config}
          preselectedCycle={selectedCycleForInquiry}
        />

        {/* 6. Actualités */}
        <NewsSection />

        {/* 7. Contact & Coordonnées & Plan d'accès */}
        <ContactSection config={config} />
      </main>

      {/* Pied de page & Mentions légales */}
      <Footer
        config={config}
        onNavigate={handleNavigate}
        onOpenAdminGuide={() => setAdminGuideOpen(true)}
      />

      {/* Panneau de guide institutionnel pour l'équipe de l'école */}
      <SchoolAdminGuide
        isOpen={adminGuideOpen}
        onClose={() => setAdminGuideOpen(false)}
        config={config}
        onUpdateConfig={handleUpdateConfig}
        onResetDefaultConfig={handleResetDefaultConfig}
      />
    </div>
  );
}
