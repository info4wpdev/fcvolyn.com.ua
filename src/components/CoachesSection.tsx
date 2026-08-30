import React, { useState } from 'react';
import { Coach } from '../types';
import { COACHES_DATA } from '../data/clubData';
import { CoachCard } from './CoachCard';
import { Award, Shield, Users, Search, Sparkles, BookOpen, Star, UserPlus, ArrowRight, Mail, HelpCircle } from 'lucide-react';
import { VolynLogo } from './VolynLogo';

interface CoachesSectionProps {
  onSelectCoach: (coach: Coach) => void;
  onOpenTrialModal: (ageGroup?: string) => void;
}

type CoachCategory = 'all' | 'leaders' | 'senior' | 'junior' | 'specialists';

export const CoachesSection: React.FC<CoachesSectionProps> = ({
  onSelectCoach,
  onOpenTrialModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CoachCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter coaches
  const filteredCoaches = COACHES_DATA.filter((coach) => {
    // Search query matching
    const matchesSearch =
      coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.teams.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.license.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    // Category matching
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'leaders') {
      return (
        coach.role.includes('Директор') ||
        coach.role.includes('Головний тренер') ||
        coach.license.includes('Легенда')
      );
    }
    if (selectedCategory === 'senior') {
      return (
        coach.ageGroups?.some((g) => ['Ю19', 'Ю17', 'Ю16'].includes(g))
      );
    }
    if (selectedCategory === 'junior') {
      return (
        coach.ageGroups?.some((g) =>
          ['Ю15', 'Ю14', 'Ю12', 'Ю11', 'Ю10', 'Ю9', 'Ю8'].includes(g)
        )
      );
    }
    if (selectedCategory === 'specialists') {
      return (
        coach.role.includes('воротар') ||
        coach.role.includes('фізичн') ||
        coach.role.includes('аналіт')
      );
    }
    return true;
  });

  return (
    <section id="coaches" className="relative py-20 lg:py-28 bg-[#FFFFFF] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#A31E24]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-4 border-b-2 border-zinc-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-[#A31E24]" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-[0.25em] text-[#A31E24]">
                ПРОФЕСІЙНИЙ ТРЕНЕРСЬКИЙ ШТАБ
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#14151A] tracking-tight leading-none">
              НАСТАВНИКИ ТА <span className="text-[#A31E24]">ЛЕГЕНДИ «ВОЛИНІ»</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 max-w-md font-normal">
            Ліцензовані фахівці категорій UEFA PRO, UEFA A та UEFA B, які виховали десятки гравців Прем'єр-ліги та національних збірних України.
          </p>
        </div>

        {/* Club Coaching Staff Photo & Philosophy Banner */}
        <div className="mb-12 rounded-3xl bg-[#14151A] border-2 border-zinc-200 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Real Coaching Staff Photograph */}
            <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[360px] overflow-hidden group">
              <img
                src="https://4wp.dev/fcvolyn/coaching-staff.jpg"
                alt="Тренерський штаб ДЮФШ Волинь"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.98]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 lg:bg-gradient-to-r lg:from-transparent lg:to-[#14151A]/90" />
              <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A31E24] text-white text-[11px] font-heading font-black uppercase tracking-wider shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  ТРЕНЕРСЬКИЙ ШТАБ ДЮФШ «ВОЛИНЬ»
                </span>
              </div>
            </div>

            {/* Right: Info & Stats */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#1C1E26] to-[#12141A] text-white relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A31E24]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A31E24]/20 border border-[#A31E24]/40 text-[#F3E5AB] text-xs font-heading font-black tracking-wider uppercase mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>ТРЕНЕРСЬКИЙ ШТАБ ДЮФШ «ВОЛИНЬ»</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3 text-white">
                  Дисципліна, характер та інтелектуальний футбол
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  Єдина клубна методика під керівництвом ліцензованих наставників UEFA PRO, A та B. Індивідуальний підхід до кожного вихованця на шляху від дитячих турнірів до професійного спорту.
                </p>
              </div>

              {/* Quick stats on staff */}
              <div className="grid grid-cols-2 gap-3 relative z-10">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="font-heading text-2xl sm:text-3xl font-black text-[#D4AF37]">14+</div>
                  <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-zinc-400">Тренерів академії</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="font-heading text-2xl sm:text-3xl font-black text-white">100%</div>
                  <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-zinc-400">Дипломи UEFA</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="font-heading text-2xl sm:text-3xl font-black text-white">450+</div>
                  <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-zinc-400">Вихованців</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="font-heading text-2xl sm:text-3xl font-black text-[#D4AF37]">563</div>
                  <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-zinc-400">Матчі О. Федюкова</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-1">
            {[
              { id: 'all', label: 'Увесь штаб' },
              { id: 'leaders', label: 'Керівництво & Легенди' },
              { id: 'senior', label: 'Старші команди (Ю16–Ю19)' },
              { id: 'junior', label: 'Молодші групи (Ю8–Ю15)' },
              { id: 'specialists', label: 'Спеціалісти' },
            ].map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as CoachCategory)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#A31E24] text-white shadow-md border border-[#D4AF37]'
                      : 'bg-zinc-100 text-zinc-700 hover:text-[#A31E24] hover:bg-red-50 border border-zinc-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Пошук тренера, категорії..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-zinc-100 border border-zinc-300 text-xs font-medium text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:border-[#A31E24] focus:ring-1 focus:ring-[#A31E24]"
            />
          </div>
        </div>

        {/* Coaches Grid */}
        {filteredCoaches.length === 0 ? (
          <div className="text-center py-16 rounded-3xl bg-zinc-50 border border-zinc-200 p-8 shadow-sm">
            <Users className="w-12 h-12 text-zinc-400 mx-auto mb-3" />
            <h3 className="font-heading text-2xl font-black uppercase text-zinc-800 mb-1">
              Тренера не знайдено
            </h3>
            <p className="text-sm text-zinc-500">
              Спробуйте змінити пошуковий запит або скинути категорію фільтрації.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCoaches.map((coach) => (
              <CoachCard
                key={coach.id}
                coach={coach}
                onSelect={onSelectCoach}
                onOpenTrialModal={onOpenTrialModal}
              />
            ))}

            {/* Last Card: Join the Coaching Staff */}
            <div
              id="coach-card-join-staff"
              className="group relative flex flex-col rounded-2xl bg-gradient-to-b from-[#1C1F2B] via-[#161822] to-[#0F1017] border border-dashed border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl text-white"
            >
              {/* Full Area Silhouette / Graphic Header */}
              <div className="relative h-72 sm:h-80 w-full bg-gradient-to-b from-[#2A2E3D] via-[#1C1F2B] to-[#12141D] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {/* Silhouette & Question mark representation */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute -right-8 -top-8 w-36 h-36 opacity-10 pointer-events-none">
                  <VolynLogo className="w-full h-full text-[#D4AF37]" />
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-heading font-black uppercase tracking-wider bg-[#D4AF37] text-zinc-950 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Вакансія / Стажування</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-heading font-black uppercase tracking-wider bg-white/10 text-zinc-300 border border-white/15 backdrop-blur-md">
                    UEFA PRO / A / B / C
                  </span>
                </div>

                {/* Center Mysterious Coach Silhouette */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto pt-6">
                  <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-dashed border-[#D4AF37]/60 flex items-center justify-center shadow-inner group-hover:scale-105 group-hover:border-[#D4AF37] transition-all">
                    <UserPlus className="w-10 h-10 text-[#F3E5AB]" />
                  </div>
                </div>

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none" />

                {/* Overlay text at bottom of photo area */}
                <div className="absolute bottom-3 left-3 right-3 z-10 text-left">
                  <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-[#F3E5AB] block drop-shadow-sm">
                    Вакансія у структурі клубу
                  </span>
                  <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-white leading-tight drop-shadow-md">
                    Доєднатись до штабу
                  </h3>
                </div>
              </div>

              {/* Minimalist Details Section */}
              <div className="flex-1 p-4 flex flex-col justify-between bg-[#151722]">
                <div className="space-y-2.5">
                  <div className="text-xs text-zinc-300">
                    <span className="font-heading font-bold text-white uppercase tracking-wide text-[11px] block">
                      Доєднатися до тренерського колективу
                    </span>
                    <span className="text-zinc-400 text-[11px] block mt-0.5">
                      Робота з віковими категоріями Ю8–Ю19, аналітика та скаутинг
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 italic line-clamp-2 pl-2.5 border-l-2 border-[#D4AF37]">
                    «Шукаємо амбітних наставників, готових розвивати юні таланти Волині за європейськими стандартами».
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 mt-3 border-t border-zinc-800 space-y-2">
                  <a
                    href="mailto:academy@volynfc.com?subject=Резюме тренера / Доєднання до колективу ДЮФШ Волинь"
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#A31E24] hover:bg-[#bd232a] text-white text-xs font-heading font-black uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Надіслати резюме</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F3E5AB]" />
                  </a>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenTrialModal()}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-[11px] font-heading font-bold text-[#F3E5AB] transition-colors cursor-pointer"
                    >
                      <UserPlus className="w-3 h-3 text-[#D4AF37]" />
                      <span>Консультація зі штабом</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
