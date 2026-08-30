import React, { useState } from 'react';
import { OFFICIAL_BANNERS_DATA, CLUB_INFO } from '../data/clubData';
import { ClubBanner, TournamentScheduleItem } from '../types';
import { VolynLogo } from './VolynLogo';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Trophy,
  Users,
  Eye,
  CheckCircle2,
  Share2,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  ChevronRight,
  Info,
  X,
  Download,
  Check
} from 'lucide-react';

interface BannersSectionProps {
  onOpenTrialModal: () => void;
  onOpenTicketsModal: () => void;
}

export const BannersSection: React.FC<BannersSectionProps> = ({
  onOpenTrialModal,
  onOpenTicketsModal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'tournament' | 'matchday' | 'results' | 'scouting'>('all');
  const [selectedBanner, setSelectedBanner] = useState<ClubBanner | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const filteredBanners = OFFICIAL_BANNERS_DATA.filter((banner) => {
    if (activeTab === 'all') return true;
    return banner.type === activeTab;
  });

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="banners" className="relative py-20 sm:py-28 bg-[#120304] text-white overflow-hidden">
      {/* Background Decorative Grid & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(163,30,36,0.35),rgba(18,3,4,0))] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#A31E24]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none translate-x-1/3" />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A31E24]/20 border border-[#A31E24]/40 text-[#F3E5AB] text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            Офіційні клубні афіші & релізи
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white mb-4">
            Банери & Матчеві Анонси
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Оригінальні афіші турів Еліт-Ліги ДЮФЛУ, змагань «Volyn Cup» пам'яті Віктора Чорнухи та оголошення про набір нових поколінь юних волинян.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Усі афіші', icon: Layers },
              { id: 'matchday', label: 'Матчеві афіші (Match Day)', icon: Calendar },
              { id: 'results', label: 'Результати турів', icon: CheckCircle2 },
              { id: 'tournament', label: 'Турнір «Volyn Cup 2026»', icon: Trophy },
              { id: 'scouting', label: 'Набір & Відбір', icon: Users },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-banner-${tab.id}`}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#A31E24] text-white shadow-lg shadow-[#A31E24]/40 scale-105 border border-[#F3E5AB]/40'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#F3E5AB]' : 'text-neutral-400'}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Tournament Spotlight: Volyn Cup 2026 */}
        {(activeTab === 'all' || activeTab === 'tournament') && (
          <div className="mb-14 rounded-2xl bg-gradient-to-br from-[#1e070a] via-[#170507] to-[#0c0203] border-2 border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            {/* Corner Badge */}
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-4 sm:translate-x-0 sm:translate-y-0 sm:top-6 sm:right-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D4AF37] text-black font-black text-xs uppercase tracking-wider shadow-lg">
                <Trophy className="w-4 h-4 text-black" />
                Офіційний Регламент
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Tournament Info & Memorial Tribute */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white p-1.5 shadow-md flex items-center justify-center">
                      <VolynLogo className="w-full h-full" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase block">
                        Всеукраїнський дитячий турнір
                      </span>
                      <span className="text-xs text-neutral-300 font-semibold">
                        ПАМ'ЯТІ ВІКТОРА ЧОРНУХИ
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-none mb-4">
                    Volyn Cup <span className="text-[#D4AF37]">2026</span>
                  </h3>

                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    Традиційний весняно-літній всеукраїнський футбольний турнір для юних вихованців від U-8 до U-12 за участі провідних академій України на полях міста Луцька.
                  </p>

                  <div className="bg-black/40 rounded-xl p-4 border border-white/10 mb-6 space-y-2.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-neutral-400 flex items-center gap-1.5">
                        <Phone className="w-4 h-4 text-[#D4AF37]" /> Контакт оргкомітету:
                      </span>
                      <a
                        href="tel:+380506159655"
                        className="font-bold text-[#F3E5AB] hover:text-white transition-colors underline"
                      >
                        +380 50 615 96 55 (Альберт)
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-neutral-400 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#A31E24]" /> Локація:
                      </span>
                      <span className="text-neutral-200 font-medium">Стадіони ДЮФШ «Волинь», м. Луцьк</span>
                    </div>
                  </div>
                </div>

                {/* Partners List */}
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block mb-2">
                    Офіційні партнери та підтримка:
                  </span>
                  <div className="flex flex-wrap gap-2 text-[11px] text-neutral-300">
                    {OFFICIAL_BANNERS_DATA[0].tournamentData?.partners.map((partner, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-medium">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Regulations & Schedule Table */}
              <div className="lg:col-span-7">
                <div className="bg-black/60 rounded-xl border border-white/15 overflow-hidden shadow-xl">
                  <div className="bg-[#A31E24] px-4 py-3 flex items-center justify-between">
                    <span className="font-heading font-black text-sm uppercase text-white tracking-wider">
                      Розклад категорій та параметри матчів
                    </span>
                    <span className="text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded">
                      Травень - Червень 2026
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/5 text-neutral-400 uppercase text-[10px] sm:text-xs">
                          <th className="py-3 px-3 sm:px-4 font-bold text-white">Категорія</th>
                          <th className="py-3 px-2 sm:px-3 font-semibold">Дати</th>
                          <th className="py-3 px-2 sm:px-3 font-semibold">Рік нар.</th>
                          <th className="py-3 px-2 sm:px-3 font-semibold">Склад</th>
                          <th className="py-3 px-2 sm:px-3 font-semibold">М'яч</th>
                          <th className="py-3 px-3 sm:px-4 font-semibold text-right">Поле (м)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10 text-neutral-200">
                        {OFFICIAL_BANNERS_DATA[0].tournamentData?.schedule.map((row, idx) => (
                          <tr key={idx} className="hover:bg-white/5 transition-colors">
                            <td className="py-3 px-3 sm:px-4 font-bold text-[#F3E5AB] flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#A31E24]" />
                              {row.ageGroup}
                            </td>
                            <td className="py-3 px-2 sm:px-3 font-semibold text-white whitespace-nowrap">
                              {row.dates}
                            </td>
                            <td className="py-3 px-2 sm:px-3 text-neutral-300">
                              {row.birthYear}
                            </td>
                            <td className="py-3 px-2 sm:px-3 font-mono font-bold text-white">
                              {row.format}
                            </td>
                            <td className="py-3 px-2 sm:px-3 text-neutral-300">
                              №{row.ballSize}
                            </td>
                            <td className="py-3 px-3 sm:px-4 text-right font-mono text-[#D4AF37]">
                              {row.pitchSize}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 bg-white/5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs text-neutral-300 text-center sm:text-left">
                      Реєстрація команд триває! Кількість місць у сітці змагань обмежена.
                    </span>
                    <a
                      href="tel:+380506159655"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#c49f2e] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 whitespace-nowrap"
                    >
                      <Phone className="w-4 h-4" />
                      Зареєструвати команду (+380506159655)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Banners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredBanners.map((banner) => {
            if (banner.id === 'banner-volyn-cup-2026' && activeTab === 'all') {
              // already featured above
              return null;
            }

            return (
              <div
                key={banner.id}
                id={`banner-card-${banner.id}`}
                className="group relative rounded-2xl bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/15 p-6 hover:border-[#A31E24]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#A31E24]/20 hover:-translate-y-1"
              >
                <div>
                  {/* Top Badge & Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#A31E24]/30 border border-[#A31E24]/50 text-[#F3E5AB] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      {banner.badge}
                    </span>
                    <span className="text-xs text-neutral-400 font-semibold">
                      {banner.dateInfo}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-tight leading-tight mb-2 group-hover:text-[#F3E5AB] transition-colors">
                    {banner.title}
                  </h3>
                  <p className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase mb-4">
                    {banner.subtitle}
                  </p>

                  {/* Banner Specific Visual Content */}
                  {banner.type === 'matchday' && banner.matches && (
                    <div className="bg-black/50 rounded-xl p-4 border border-white/10 space-y-3 mb-4">
                      {banner.matches.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-center justify-between text-xs py-1 border-b border-white/5 last:border-0">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A31E24]" />
                            <span className="font-bold text-white">{m.category}</span>
                            <span className="text-neutral-400">vs</span>
                            <span className="text-neutral-300 truncate max-w-[120px]">{m.awayTeam.replace('U-17', '').replace('U-15', '').replace('U-16', '').replace('U-14', '')}</span>
                          </div>
                          <div className="flex items-center gap-1 font-mono font-bold text-[#F3E5AB] bg-white/10 px-2 py-0.5 rounded">
                            <Clock className="w-3 h-3 text-[#D4AF37]" />
                            {m.time}
                          </div>
                        </div>
                      ))}
                      {banner.locationInfo && (
                        <div className="text-[11px] text-neutral-400 flex items-center gap-1 pt-1">
                          <MapPin className="w-3.5 h-3.5 text-[#A31E24]" />
                          {banner.locationInfo}
                        </div>
                      )}
                    </div>
                  )}

                  {banner.type === 'results' && banner.matches && (
                    <div className="bg-black/50 rounded-xl p-3 border border-white/10 space-y-2 mb-4">
                      {banner.matches.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-center justify-between text-xs py-1 px-2 rounded bg-white/5">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white w-7">{m.category}</span>
                            <span className="text-neutral-200 text-[11px]">{m.homeTeam}</span>
                          </div>
                          <div className="font-heading font-black text-sm text-[#F3E5AB] bg-[#A31E24]/60 px-2 py-0.5 rounded border border-[#A31E24]">
                            {m.score}
                          </div>
                          <span className="text-neutral-200 text-[11px] text-right">{m.awayTeam}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {banner.type === 'scouting' && banner.scoutingData && (
                    <div className="bg-black/50 rounded-xl p-4 border border-white/10 space-y-2.5 mb-4 text-xs">
                      <div className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-white block">{banner.scoutingData.date} • {banner.scoutingData.time}</span>
                          <span className="text-neutral-400 text-[11px]">{banner.scoutingData.birthYears}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#A31E24] shrink-0 mt-0.5" />
                        <span className="text-neutral-300 text-[11px]">{banner.scoutingData.location}</span>
                      </div>
                    </div>
                  )}

                  <p className="text-neutral-400 text-xs line-clamp-2 mb-4">
                    {banner.details}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedBanner(banner)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F3E5AB] hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Переглянути афішу
                  </button>

                  {banner.type === 'scouting' && (
                    <button
                      onClick={onOpenTrialModal}
                      className="px-3 py-1.5 rounded-lg bg-[#A31E24] hover:bg-[#851419] text-white font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      Записатись
                    </button>
                  )}

                  {banner.type === 'matchday' && (
                    <button
                      onClick={onOpenTicketsModal}
                      className="px-3 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#c49f2e] text-black font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      Квитки / Інфо
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Showcase / Call to Action */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#A31E24]/20 via-black to-[#A31E24]/20 border border-[#A31E24]/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#A31E24] flex items-center justify-center text-white shrink-0 shadow-lg">
              <VolynLogo className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-heading font-black text-lg sm:text-xl text-white uppercase">
                Бажаєте отримувати афіші матчів та турнірів першими?
              </h4>
              <p className="text-neutral-300 text-xs sm:text-sm">
                Слідкуйте за офіційними соцмережами ДЮФШ «Волинь» або завантажуйте клубний календар змагань.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={CLUB_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Instagram @fcvolyn_academy
            </a>
            <a
              href={CLUB_INFO.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#229ED9]/80 hover:bg-[#229ED9] text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Telegram Канал
            </a>
          </div>
        </div>
      </div>

      {/* Banner Detail Modal */}
      {selectedBanner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#1a0507] border-2 border-[#A31E24] rounded-2xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedBanner(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Закрити"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-md bg-[#A31E24] text-white font-bold text-xs uppercase">
                {selectedBanner.badge}
              </span>
              <span className="text-xs text-[#D4AF37] font-semibold">{selectedBanner.dateInfo}</span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-2">
              {selectedBanner.title}
            </h3>
            <p className="text-sm text-[#F3E5AB] uppercase tracking-wider font-semibold mb-6">
              {selectedBanner.subtitle}
            </p>

            <div className="bg-black/60 rounded-xl p-5 border border-white/10 space-y-4 mb-6">
              {selectedBanner.tournamentData && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs text-neutral-400">Меморіал:</span>
                    <span className="text-sm font-bold text-[#F3E5AB]">{selectedBanner.tournamentData.memorialName}</span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs text-neutral-400 font-bold uppercase block">Вікові категорії турніру:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {selectedBanner.tournamentData.schedule.map((item, i) => (
                        <div key={i} className="p-2.5 rounded bg-white/5 border border-white/10 flex justify-between">
                          <span className="font-bold text-white">{item.ageGroup} ({item.birthYear})</span>
                          <span className="text-[#D4AF37]">{item.dates} • {item.format}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-neutral-400">Реєстрація команд:</span>
                    <button
                      onClick={() => handleCopyPhone('+380506159655')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:text-white"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Phone className="w-3.5 h-3.5" />}
                      +380 50 615 96 55 (Альберт)
                    </button>
                  </div>
                </div>
              )}

              {selectedBanner.matches && (
                <div className="space-y-2">
                  <span className="text-xs text-neutral-400 font-bold uppercase block">Розклад / Рахунок матчів:</span>
                  {selectedBanner.matches.map((m, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <span className="text-[#D4AF37]">{m.category}</span>
                        <span>{m.homeTeam}</span>
                        <span className="text-neutral-400 font-normal">vs</span>
                        <span>{m.awayTeam}</span>
                      </div>
                      <span className="font-heading font-black text-base text-[#F3E5AB]">
                        {m.score || m.time}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {selectedBanner.scoutingData && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-neutral-400">Вікові групи:</span>
                    <span className="font-bold text-white">{selectedBanner.scoutingData.birthYears}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-neutral-400">Дата та час:</span>
                    <span className="font-bold text-[#D4AF37]">{selectedBanner.scoutingData.date} ({selectedBanner.scoutingData.time})</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-neutral-400">Місце збору:</span>
                    <span className="font-bold text-white text-right">{selectedBanner.scoutingData.location}</span>
                  </div>
                  <p className="text-xs text-neutral-300 pt-2 border-t border-white/10">
                    {selectedBanner.scoutingData.description}
                  </p>
                </div>
              )}
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
              {selectedBanner.details}
            </p>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedBanner(null)}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
              >
                Закрити
              </button>
              {selectedBanner.type === 'scouting' ? (
                <button
                  onClick={() => {
                    setSelectedBanner(null);
                    onOpenTrialModal();
                  }}
                  className="px-5 py-2 rounded-lg bg-[#A31E24] hover:bg-[#851419] text-white font-bold text-xs uppercase tracking-wider"
                >
                  Подати заявку на відбір
                </button>
              ) : selectedBanner.type === 'tournament' ? (
                <a
                  href="tel:+380506159655"
                  className="px-5 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#c49f2e] text-black font-bold text-xs uppercase tracking-wider"
                >
                  Зателефонувати в оргкомітет
                </a>
              ) : (
                <button
                  onClick={() => {
                    setSelectedBanner(null);
                    onOpenTicketsModal();
                  }}
                  className="px-5 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#c49f2e] text-black font-bold text-xs uppercase tracking-wider"
                >
                  Квитки / Відвідати матч
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
