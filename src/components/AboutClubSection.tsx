import React, { useState } from 'react';
import {
  History,
  Building2,
  Trophy,
  Award,
  Shield,
  MapPin,
  CheckCircle2,
  Sparkles,
  Users,
  ChevronRight,
  LandPlot,
} from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { VolynLogo } from './VolynLogo';

interface AboutClubSectionProps {
  onOpenTrialModal: () => void;
}

export const AboutClubSection: React.FC<AboutClubSectionProps> = ({ onOpenTrialModal }) => {
  const [activeTab, setActiveTab] = useState<'history' | 'infrastructure' | 'achievements'>('history');

  const historyMilestones = [
    {
      year: '1960',
      title: 'Заснування клубу «Волинь»',
      desc: '3 квітня 1960 року команда дебютувала у чемпіонаті СРСР (клас «Б»), розпочавши велику футбольну історію Луцька.',
    },
    {
      year: '1989',
      title: 'Чемпіон УРСР (Шоста зона другої ліги)',
      desc: 'Золоті медалі чемпіонату УРСР під керівництвом Віталія Кварцяного. Історичний тріумф волинського футболу.',
    },
    {
      year: '2001/02',
      title: 'Тріумф у Першій лізі та вихід до Вищої ліги',
      desc: 'Беззаперечне 1-е місце у Першій лізі України. Команда завоювала право грати в еліті українського футболу.',
    },
    {
      year: '2002/03',
      title: '6-е місце у Вищій лізі та 1/2 Кубка України',
      desc: 'Найвище турнірне досягнення у Вищій лізі України та вихід до півфіналу національного Кубка.',
    },
    {
      year: '2016–дотепер',
      title: 'Розвиток сучасної ДЮФШ «Волинь»',
      desc: 'Фокус на системній підготовці власних вихованців за європейською моделлю. 10 вікових груп, власна інфраструктура та ліцензовані тренери UEFA.',
    },
  ];

  const infrastructureList = [
    {
      title: 'Стадіон «Авангард» (м. Луцьк)',
      desc: 'Головна футбольна арена міста місткістю 12 080 глядачів з натуральним трав’яним газоном та біговими доріжками.',
      tags: ['12 080 місць', 'Натуральний газон', 'Освітлення 1200 люкс'],
      image: '/stadium.jpg',
    },
    {
      title: 'Спортивно-тренувальна база «Дачне»',
      desc: 'Сучасний тренувальний комплекс за містом із повнорозмірними трав’яними та штучними полями стандарту FIFA.',
      tags: ['2 повнорозмірні поля', 'Готелі та їдальня', 'Реабілітаційний центр'],
      image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Критий манеж та спортивний зал',
      desc: 'Спеціалізований критий зал для зимової підготовки та технічних занять молодших вікових груп ДЮФШ.',
      tags: ['Зимовий цикл', 'Тренажерний зал', 'Теоретичний клас з відеоаналізом'],
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const achievementsList = [
    {
      count: '560+',
      title: 'Матчів рекордсмена',
      subtitle: 'Олег Федюков провів рекордну кількість ігор за «Волинь»',
    },
    {
      count: '3 рази',
      title: 'Півфінал Кубка України',
      subtitle: 'Учасник вирішальних стадій розіграшу національного Кубка',
    },
    {
      count: '20+',
      title: 'Вихованців в УПЛ та збірних',
      subtitle: 'Анатолій Тимощук, Тарас Михалик, Василь Сачко та інші зірки',
    },
    {
      count: '10',
      title: 'Вікових груп ДЮФШ',
      subtitle: 'Понад 300 юних футболістів у регулярному тренувальному процесі',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-[#8B181D] relative overflow-hidden text-white">
      {/* Anchors for direct sub-navigation */}
      <div id="history" className="absolute -top-20" />
      <div id="infrastructure" className="absolute -top-20" />
      <div id="achievements" className="absolute -top-20" />

      {/* Official Volyn Heraldic Flag Watermark with subtle opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/volyn_flag.jpg"
          alt="Прапор ФК Волинь Луцьк"
          className="w-full h-full object-cover object-center opacity-10 mix-blend-overlay scale-105 filter brightness-125"
        />
        {/* Subtle Gradient Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#7A1317]/80 via-transparent to-[#550c10]/90" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A31E24]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 pb-4 border-b border-white/20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F3E5AB] shadow-sm animate-pulse" />
              <span className="text-[11px] sm:text-xs font-heading font-black uppercase tracking-[0.2em] text-[#F3E5AB]">
                КЛУБНА СПАДЩИНА ТА РОЗВИТОК
              </span>
            </div>
            <h2 className="font-volyn text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-none drop-shadow-md">
              ДЮСШ ФК <span className="text-[#F3E5AB]">«ВОЛИНЬ» ЛУЦЬК</span>
            </h2>
          </div>

          {/* Sub-tabs selector */}
          <div className="inline-flex p-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-lg self-start md:self-auto">
            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 sm:px-5 py-2 rounded-full font-heading font-black text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'history'
                  ? 'bg-[#F59E0B] text-zinc-950 shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Історія
            </button>
            <button
              onClick={() => setActiveTab('infrastructure')}
              className={`px-4 sm:px-5 py-2 rounded-full font-heading font-black text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'infrastructure'
                  ? 'bg-[#F59E0B] text-zinc-950 shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Інфраструктура
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-4 sm:px-5 py-2 rounded-full font-heading font-black text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'achievements'
                  ? 'bg-[#F59E0B] text-zinc-950 shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Досягнення
            </button>
          </div>
        </div>

        {/* 1. History Tab Content */}
        {activeTab === 'history' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Timeline Left */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl text-zinc-900">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#8B181D] p-1.5 flex items-center justify-center text-white shadow-md">
                    <VolynLogo className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-xl text-zinc-900 uppercase tracking-tight">
                      Традиції волинського футболу
                    </h3>
                    <p className="text-[11px] text-[#8B181D] font-heading font-extrabold uppercase tracking-wider">
                      Понад 65 років славної історії
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                  Футбольний клуб «Волинь» — це символ незламності та спортивної гордості Луцька. Створений у 1960 році, клуб пройшов шлях від дебюту у класі «Б» до яскравих виступів у Вищій лізі України, виховавши десятки зірок українського та європейського футболу.
                </p>
              </div>

              {/* Timeline cards */}
              <div className="relative pl-5 sm:pl-7 border-l-2 border-[#F3E5AB]/40 space-y-3">
                {historyMilestones.map((m) => (
                  <div key={m.year} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[27px] sm:-left-[35px] top-2.5 w-3.5 h-3.5 rounded-full bg-[#F59E0B] border-3 border-[#8B181D] shadow-md" />
                    <div className="p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 hover:border-[#F59E0B] shadow-md text-zinc-900 transition-all">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#8B181D] text-white font-heading font-black text-[11px] tracking-wider">
                          {m.year}
                        </span>
                        <h4 className="font-heading font-bold text-base text-zinc-900">
                          {m.title}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-700 leading-relaxed font-normal">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Card Right */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl bg-gradient-to-br from-black/60 via-[#4A0A0E]/90 to-black/80 backdrop-blur-xl p-4 sm:p-5 text-white shadow-xl border border-white/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-full h-44 sm:h-52 rounded-xl overflow-hidden mb-4 shadow-xl border border-white/30 relative group">
                    <img
                      src="/football-day.jpg"
                      alt="Футбольний день ДЮСШ ФК Волинь Луцьк"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <span className="text-[10px] font-heading font-black tracking-widest text-[#F3E5AB] uppercase block mb-1">
                    КЛУБНА ФІЛОСОФІЯ
                  </span>
                  <h3 className="font-volyn text-xl sm:text-2xl font-black uppercase leading-tight mb-2.5 text-white">
                    «Червоно-білі, червоно-білі назавжди!»
                  </h3>
                  <p className="text-xs text-zinc-200 leading-relaxed mb-4 font-normal">
                    Наша місія — розвивати не лише швидкість, техніку та тактичну грамотність, але й виховувати сильний вольовий характер, командний дух та любов до рідного краю.
                  </p>
                  <button
                    onClick={onOpenTrialModal}
                    className="w-full py-3 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-zinc-950 font-heading font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-[#D4AF37]"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-zinc-950" />
                    <span>Записати дитину до академії</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Infrastructure Tab Content */}
        {activeTab === 'infrastructure' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {infrastructureList.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/95 backdrop-blur-md border border-white/30 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-zinc-900 group"
              >
                <div>
                  <div className="h-44 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center gap-1.5 text-white text-xs font-heading font-bold">
                      <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>Луцьк / Волинська область</span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="font-heading font-black text-lg sm:text-xl uppercase text-zinc-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-700 leading-relaxed font-normal mb-3">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-zinc-200 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800 font-heading font-bold text-[10px] uppercase border border-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. Achievements Tab Content */}
        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {achievementsList.map((ach) => (
                <div
                  key={ach.title}
                  className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 hover:border-[#F59E0B] shadow-lg transition-all text-center flex flex-col items-center justify-center text-zinc-900"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#8B181D] text-[#F3E5AB] flex items-center justify-center mb-3 shadow-md">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="font-volyn text-3xl sm:text-4xl font-black text-[#8B181D] mb-1">
                    {ach.count}
                  </span>
                  <h4 className="font-heading font-bold text-base uppercase text-zinc-900 mb-1">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {ach.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#8B181D] p-2.5 flex items-center justify-center shrink-0 border border-[#D4AF37]/40 shadow-lg">
                  <Award className="w-7 h-7 text-[#F3E5AB]" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-xl sm:text-2xl uppercase text-white mb-1">
                    Вихованці академії у збірних
                  </h4>
                  <p className="text-xs text-zinc-300 max-w-xl leading-relaxed font-normal">
                    Випускники нашої школи регулярно викликаються до юнацьких та молодіжних збірних України (U-17, U-19, U-21) та виступають в УПЛ.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenTrialModal}
                className="px-6 py-3 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-zinc-950 font-heading font-black text-xs uppercase tracking-wider whitespace-nowrap shadow-lg flex items-center gap-1.5 cursor-pointer transition-all shrink-0 border border-[#D4AF37]"
              >
                <span>Пройти перегляд</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-950" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
