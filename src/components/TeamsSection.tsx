import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Users, Trophy, Award, ChevronRight, UserCheck, Shield, Sparkles, Clock, ArrowUpRight } from 'lucide-react';
import { TEAMS_DATA } from '../data/clubData';
import { AgeGroup, TeamInfo } from '../types';

interface TeamsSectionProps {
  onSelectTeam: (team: TeamInfo) => void;
  onOpenTrialModal: (ageGroup?: string) => void;
  externalSelectedAge?: string;
}

const TABS: AgeGroup[] = ['Всі', 'Ю19', 'Ю17', 'Ю16', 'Ю15', 'Ю14', 'Ю12', 'Ю11', 'Ю10', 'Ю9', 'Ю8'];

export const TeamsSection: React.FC<TeamsSectionProps> = ({
  onSelectTeam,
  onOpenTrialModal,
  externalSelectedAge,
}) => {
  const [selectedTab, setSelectedTab] = useState<AgeGroup>('Всі');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (externalSelectedAge && TABS.includes(externalSelectedAge as AgeGroup)) {
      setSelectedTab(externalSelectedAge as AgeGroup);
    }
  }, [externalSelectedAge]);

  // Filter teams based on active tab
  const filteredTeams = selectedTab === 'Всі'
    ? TEAMS_DATA
    : TEAMS_DATA.filter((t) => t.ageGroup === selectedTab);

  const u19Team = TEAMS_DATA.find((t) => t.ageGroup === 'Ю19');

  return (
    <section id="teams" className="relative py-20 lg:py-28 bg-[#FFFFFF] overflow-hidden">
      {/* Subtle dots pattern fading from top-left to bottom-right */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#A31E24_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(135deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.35)_30%,rgba(0,0,0,0.12)_60%,rgba(0,0,0,0.02)_100%)] [-webkit-mask-image:linear-gradient(135deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.35)_30%,rgba(0,0,0,0.12)_60%,rgba(0,0,0,0.02)_100%)]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#A31E24]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-4 border-b-2 border-zinc-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-[#A31E24]" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-[0.25em] text-[#A31E24]">
                СТРУКТУРА ПІДГОТОВКИ ГРАВЦІВ
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#14151A] tracking-tight leading-none">
              КОМАНДИ <span className="text-[#A31E24]">ТА АКАДЕМІЯ</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 max-w-md font-normal">
            Від перших кроків у Ю8 до випускної команди Ю19 — єдина клубна методика та безперервний розвиток таланту кожного юного футболіста.
          </p>
        </div>

        {/* Horizontal Tab Bar */}
        <div className="relative mb-12">
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2.5 px-1 scroll-smooth"
          >
            {TABS.map((tab) => {
              const isActive = selectedTab === tab;
              return (
                <button
                  key={tab}
                  id={`team-tab-${tab}`}
                  onClick={() => setSelectedTab(tab)}
                  className={`relative flex-shrink-0 px-5 py-2.5 rounded-full font-heading font-black text-sm md:text-base uppercase tracking-wider transition-all duration-200 focus:outline-none cursor-pointer ${
                    isActive
                      ? 'text-white bg-[#A31E24] shadow-lg shadow-[#A31E24]/30 border border-[#D4AF37]'
                      : 'text-zinc-700 hover:text-[#A31E24] bg-zinc-100 hover:bg-red-50/60 border border-zinc-200'
                  }`}
                >
                  <span>{tab === 'Всі' ? 'Усі команди' : tab}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-[#D4AF37] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Fade indicator for scroll on mobile */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
        </div>

        {/* Card Grid with Cover-Background Photo Cards */}
        {selectedTab === 'Всі' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {/* U19 Card spans FULL WIDTH with compact height & ultra-translucent teaser */}
            {u19Team && (
              <div className="col-span-1 md:col-span-2">
                <article
                  id="team-card-u19"
                  onClick={() => onSelectTeam(u19Team)}
                  className="group cursor-pointer relative w-full min-h-[270px] sm:min-h-[310px] lg:min-h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-zinc-200/60 hover:border-[#A31E24] flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-lg"
                >
                  {/* Cover Background Photo (Full view of players) */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={u19Team.photo}
                      alt={u19Team.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-[0.98]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>

                  {/* Top badges over photo - Ultra compact & translucent */}
                  <div className="relative z-10 p-2 sm:p-2.5 flex items-center justify-between gap-1.5 pointer-events-none">
                    <div className="flex items-center gap-1">
                      <span className="px-2 py-0.5 rounded-md bg-[#A31E24]/80 backdrop-blur-md text-white text-[10px] font-heading font-black tracking-wider uppercase border border-white/20 shadow-xs">
                        {u19Team.ageGroup}
                      </span>
                      <span className="px-1.5 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-white text-[10px] font-mono font-semibold border border-white/10 shadow-xs">
                        {u19Team.standing}
                      </span>
                    </div>

                    <span className="px-1.5 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/10 shadow-xs">
                      {u19Team.players_count} гравців
                    </span>
                  </div>

                  {/* Micro floating pill at bottom - w-fit, ultra-compact */}
                  <div className="relative z-10 p-1.5 sm:p-2 m-2 w-fit max-w-[85%] rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xs flex items-center gap-2.5 transition-all duration-300">
                    <div className="flex items-center gap-1.5">
                      <span className="font-heading font-black text-xs sm:text-sm uppercase tracking-tight text-white group-hover:text-[#F3E5AB] transition-colors">
                        {u19Team.name}
                      </span>
                      <span className="text-[10px] text-white/70 hidden sm:inline">
                        • {u19Team.coach}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenTrialModal(u19Team.ageGroup);
                        }}
                        className="px-2 py-0.5 rounded-md bg-[#A31E24]/90 hover:bg-[#A31E24] text-[9px] sm:text-[10px] font-heading font-black uppercase tracking-wider text-white border border-[#D4AF37]/40 cursor-pointer shadow-xs transition-all"
                      >
                        Перегляд
                      </button>
                      <button
                        onClick={() => onSelectTeam(u19Team)}
                        className="px-2 py-0.5 rounded-md bg-white/20 hover:bg-white/30 text-white text-[9px] sm:text-[10px] font-heading font-black uppercase tracking-wider cursor-pointer flex items-center gap-0.5 border border-white/20 shadow-xs transition-all"
                      >
                        <span>Склад</span>
                        <ChevronRight className="w-2.5 h-2.5 text-[#F3E5AB]" />
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            )}

            {/* Other Age Group Cards - Lower Height & Max Photo Fit */}
            {TEAMS_DATA.filter((t) => t.ageGroup !== 'Ю19').map((team) => (
              <div key={team.id} className="col-span-1">
                <article
                  id={`team-card-${team.ageGroup.toLowerCase()}`}
                  onClick={() => onSelectTeam(team)}
                  className="group cursor-pointer relative w-full min-h-[240px] sm:min-h-[270px] lg:min-h-[290px] rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-zinc-200/60 hover:border-[#A31E24] flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-lg"
                >
                  {/* Cover Background Photo (Centered, entire team visible) */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={team.photo}
                      alt={team.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-[0.98]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>

                  {/* Age Tag Top Left - Micro & Translucent */}
                  <div className="relative top-0 left-0 right-0 z-10 p-2 sm:p-2.5 flex items-center justify-between pointer-events-none">
                    <span className="px-2 py-0.5 rounded-md bg-[#A31E24]/80 backdrop-blur-md text-white text-[10px] font-heading font-black tracking-wider uppercase border border-white/20 shadow-xs">
                      {team.ageGroup}
                    </span>

                    <span className="px-1.5 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/10 shadow-xs">
                      {team.players_count} гравців
                    </span>
                  </div>

                  {/* Micro floating pill at bottom - w-fit, compact & translucent */}
                  <div className="relative z-10 p-1.5 sm:p-2 m-2 w-fit max-w-[85%] rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xs flex items-center justify-between gap-2.5 transition-all duration-300">
                    <div className="flex items-center gap-1.5">
                      <span className="font-heading font-black text-xs sm:text-sm uppercase tracking-tight text-white group-hover:text-[#F3E5AB] transition-colors truncate">
                        {team.name}
                      </span>
                    </div>

                    <span className="font-heading font-black uppercase text-[9px] sm:text-[10px] tracking-wider text-[#F3E5AB] group-hover:text-white flex items-center gap-0.5 shrink-0">
                      <span>Склад</span>
                      <ChevronRight className="w-2.5 h-2.5 transform group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        ) : (
          /* Filtered Tab View */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTeams.map((team) => {
              const isU19 = team.ageGroup === 'Ю19';
              return (
                <div key={team.id} className={isU19 ? 'col-span-1 md:col-span-2' : 'col-span-1'}>
                  <article
                    onClick={() => onSelectTeam(team)}
                    className={`group cursor-pointer relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-zinc-200/60 hover:border-[#A31E24] flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-lg ${
                      isU19 ? 'min-h-[270px] sm:min-h-[310px] lg:min-h-[340px]' : 'min-h-[240px] sm:min-h-[270px] lg:min-h-[290px]'
                    }`}
                  >
                    <div className="absolute inset-0 z-0">
                      <img
                        src={team.photo}
                        alt={team.name}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-[0.98]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    </div>

                    <div className="relative z-10 p-2 sm:p-2.5 flex items-center justify-between pointer-events-none">
                      <span className="px-2 py-0.5 rounded-md bg-[#A31E24]/80 backdrop-blur-md text-white text-[10px] font-heading font-black tracking-wider uppercase border border-white/20">
                        {team.ageGroup}
                      </span>
                      <span className="px-1.5 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-white text-[10px] font-mono border border-white/10 shadow-xs">
                        {team.standing}
                      </span>
                    </div>

                    <div className="relative z-10 p-1.5 sm:p-2 m-2 w-fit max-w-[85%] rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xs flex items-center gap-2 transition-all duration-300">
                      <span className="font-heading text-xs sm:text-sm font-black uppercase text-white tracking-tight leading-tight group-hover:text-[#F3E5AB] transition-colors truncate">
                        {team.name}
                      </span>
                      <span className="font-heading font-black uppercase text-[9px] sm:text-[10px] tracking-wider text-[#F3E5AB] group-hover:text-white flex items-center gap-0.5 shrink-0">
                        <span>Склад</span>
                        <ChevronRight className="w-2.5 h-2.5 transform group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
