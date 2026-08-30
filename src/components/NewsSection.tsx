import React from 'react';
import { Clock, Calendar, ArrowRight, Sparkles, ChevronRight, Instagram, Facebook } from 'lucide-react';
import { NEWS_ITEMS } from '../data/clubData';
import { NewsItem } from '../types';

interface NewsSectionProps {
  onSelectArticle: (article: NewsItem) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onSelectArticle }) => {
  const featuredArticle = NEWS_ITEMS.find((n) => n.isFeatured) || NEWS_ITEMS[0];
  const secondaryArticles = NEWS_ITEMS.filter((n) => n.id !== featuredArticle.id).slice(0, 3);

  return (
    <section id="news" className="relative py-16 lg:py-24 bg-[#F4F6FA] overflow-hidden">
      {/* Subtle red & gold accent ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A31E24]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4 pb-4 border-b-2 border-zinc-200">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A31E24]" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-[0.25em] text-[#A31E24]">
                ОФІЦІЙНИЙ ВІСНИК КЛУБУ
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#14151A] tracking-tight leading-none">
              НОВИНИ ТА <span className="text-[#A31E24]">ПОДІЇ ДЮФШ</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 max-w-md font-normal">
            Актуальні звіти матчів Еліт-ліги ДЮФЛУ, оголошення про набори до команд, турніри та досягнення вихованців «Волині».
          </p>
        </div>

        {/* Two-Column News Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column: Big Featured Article (7 cols) */}
          <div className="lg:col-span-7 flex">
            <article
              id="featured-news-card"
              onClick={() => onSelectArticle(featuredArticle)}
              className="group cursor-pointer relative w-full rounded-2xl overflow-hidden bg-[#14151A] border border-zinc-200 hover:border-[#A31E24] flex flex-col justify-end min-h-[380px] sm:min-h-[420px] transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-xl"
            >
              {/* Background Cover Image with high clarity */}
              <div className="absolute inset-0 z-0">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-[0.98]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              </div>

              {/* Top Bar inside card */}
              <div className="absolute top-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#A31E24]/90 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-heading font-black tracking-wider uppercase border border-[#D4AF37]/50 shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#F3E5AB]" />
                  {featuredArticle.category}
                </span>

                <span className="px-2 py-0.5 rounded-full bg-white/70 backdrop-blur-md text-zinc-900 text-[10px] font-heading font-black uppercase shadow-xs">
                  ГОЛОВНА НОВИНА
                </span>
              </div>

              {/* Bottom Content Area - Sleek, translucent & refined */}
              <div className="relative z-10 p-3.5 sm:p-4 m-2.5 sm:m-3 rounded-xl bg-black/45 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-md transition-all duration-300">
                {/* Meta details */}
                <div className="flex items-center gap-2.5 text-[10px] sm:text-[11px] font-mono text-zinc-300 mb-1">
                  <span className="flex items-center gap-1 text-zinc-200">
                    <Calendar className="w-3 h-3 text-[#D4AF37]" />
                    {featuredArticle.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-zinc-200">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    {featuredArticle.readTime}
                  </span>
                  <span>•</span>
                  <span className="text-[#F3E5AB] font-semibold">{featuredArticle.author}</span>
                </div>

                {/* Refined Headline */}
                <h3 className="font-heading text-base sm:text-lg md:text-xl font-black uppercase text-white tracking-tight leading-snug mb-1 group-hover:text-[#F3E5AB] transition-colors line-clamp-2">
                  {featuredArticle.title}
                </h3>

                {/* Excerpt & CTA in one compact row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pt-1.5 border-t border-white/15">
                  <p className="text-[11px] sm:text-xs text-zinc-200 line-clamp-1 font-normal">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-0.5 text-[11px] sm:text-xs font-heading font-black uppercase tracking-wider text-[#F3E5AB] group-hover:text-white transition-colors shrink-0">
                    <span>Читати</span>
                    <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Right Column: Three Smaller Vertical News Cards Stacked (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
            {secondaryArticles.map((article, idx) => (
              <article
                key={article.id}
                id={`secondary-news-card-${idx}`}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer p-2.5 sm:p-3 rounded-xl bg-white border border-zinc-200/80 shadow-xs hover:shadow-md hover:border-[#A31E24] flex gap-3 items-center transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {/* Thumbnail Image */}
                <div className="relative w-20 sm:w-24 h-20 sm:h-22 rounded-lg overflow-hidden flex-shrink-0 border border-zinc-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-grow min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[9px] font-heading font-black uppercase tracking-wider px-2 py-0.5 rounded bg-red-100/80 text-[#A31E24] border border-red-200/60">
                      {article.category}
                    </span>
                    <span className="text-[9px] text-zinc-500 font-mono">
                      {article.date}
                    </span>
                  </div>

                  <h4 className="font-heading text-xs sm:text-sm font-black uppercase text-zinc-900 line-clamp-2 leading-snug group-hover:text-[#A31E24] transition-colors mb-1">
                    {article.title}
                  </h4>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] text-zinc-500 font-mono flex items-center gap-0.5">
                      <Clock className="w-2.5 h-2.5 text-zinc-400" />
                      {article.readTime}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-heading font-black uppercase tracking-wider text-[#A31E24] flex items-center gap-0.5">
                      <span>Читати</span>
                      <ChevronRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Social Media Follow Banner */}
        <div className="mt-8 pt-6 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-zinc-200/80 shadow-xs">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#A31E24]/10 border border-[#A31E24]/20 flex items-center justify-center shrink-0">
              <Instagram className="w-5 h-5 text-[#A31E24]" />
            </div>
            <div>
              <h3 className="font-heading text-sm sm:text-base font-black uppercase text-zinc-950 tracking-tight">
                Слідкуйте за нами в соц. мережах
              </h3>
              <p className="text-[11px] sm:text-xs text-zinc-600 font-normal">
                Ексклюзивні відео тренувань, фотозвіти матчів та оперативні новини клубу
              </p>
            </div>
          </div>

          {/* Social Links / Buttons */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center sm:justify-end">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-[#1877F2]/20 font-heading font-black text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer group"
            >
              <Facebook className="w-4 h-4" />
              <span>Фейсбук</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#E1306C]/10 via-[#FD1D1D]/10 to-[#F77737]/10 hover:from-[#E1306C] hover:via-[#FD1D1D] hover:to-[#F77737] text-[#E1306C] hover:text-white border border-[#E1306C]/25 font-heading font-black text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer group"
            >
              <Instagram className="w-4 h-4" />
              <span>Інстаграм</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
