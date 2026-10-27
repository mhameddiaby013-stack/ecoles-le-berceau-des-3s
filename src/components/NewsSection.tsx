import React, { useState } from 'react';
import { NEWS_ARTICLES } from '../data/schoolData';
import { NewsArticle } from '../types/school';
import { Calendar, ArrowRight, X, Newspaper, Tag, Sparkles } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <section id="actualites" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-900">
              Communication & Événements
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 mt-1">
              Actualités & annonces de l'établissement
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
              Consultez les informations officielles, les dates clés du calendrier scolaire
              et les rendez-vous avec les familles.
            </p>
          </div>

          <div className="text-xs text-stone-500 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 shrink-0">
            * Calendrier prévisionnel d'information institutionnelle
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="p-6 rounded-2xl bg-stone-50 border border-stone-200/90 shadow-2xs hover:shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                  <span className="font-semibold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded text-[11px]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span className="field-placeholder text-amber-800 font-medium">
                      {article.date}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-stone-200">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 group-hover:text-amber-950 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                >
                  <span>Lire le communiqué complet</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Article Reader */}
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedArticle(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative space-y-5 animate-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-amber-800 font-medium field-placeholder">
                    {selectedArticle.date}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
                  aria-label="Fermer la fenêtre"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-xl font-bold text-stone-900 leading-snug">
                {selectedArticle.title}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                <p className="font-medium text-stone-800">{selectedArticle.excerpt}</p>
                <p>{selectedArticle.content}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
                <span>
                  Communication institutionnelle émise par la direction des Écoles Le Berceau des 3S.
                </span>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
