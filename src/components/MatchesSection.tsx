import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Shield, Trophy, Sparkles, Filter, ChevronRight, Award } from 'lucide-react';
import { MATCHES_DATA } from '../data/clubData';
import { Match, AgeGroup } from '../types';
import { VolynLogo } from './VolynLogo';

interface MatchesSectionProps {
  onSelectMatch: (match: Match) => void;
  onOpenTicketsModal?: (match: Match) => void;
}

export const MatchesSection: React.FC<MatchesSectionProps> = ({
  onSelectMatch,
}) => {
  const [activeTab, setActiveTab] = useState<'fixtures' | 'results'>('fixtures');
  const [selectedAge, setSelectedAge] = useState<AgeGroup>('Всі');

  // Filter fixtures and results
  const matches = MATCHES_DATA.filter((m) => {
    const statusMatch = activeTab === 'fixtures' ? m.status === 'upcoming' : m.status === 'finished';
    const ageMatch = selectedAge === 'Всі' ? true : m.ageGroup === selectedAge;
    return statusMatch && ageMatch;
  });

  const ageGroups: AgeGroup[] = ['Всі', 'Ю19', 'Ю17', 'Ю16', 'Ю15', 'Ю14', 'Ю12'];

  return (
    <section id="matches" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#8C141A] via-[#A31E24] to-[#6E0D12] text-white overflow-hidden border-t-4 border-b-4 border-[#D4AF37]/40 shadow-2xl">
      {/* Heraldic Watermarks & Background Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#F3E5AB_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      
      {/* Huge Heraldic Volyn Cross Watermarks */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.07] pointer-events-none">
        <VolynLogo className="w-full h-full text-white" />
      </div>
      <div className="absolute -right-20 top-1/3 w-[580px] h-[580px] opacity-[0.07] pointer-events-none">
        <VolynLogo className="w-full h-full text-[#D4AF37]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heraldic Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 pb-6 border-b-2 border-white/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-[#D4AF37]/50 text-[#F3E5AB] text-xs font-heading font-black tracking-widest uppercase mb-3 shadow-md">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>ОФІЦІЙНИЙ КАЛЕНДАР ТА РЕЗУЛЬТАТИ ЗМАГАНЬ</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none drop-shadow-md">
              МАТЧ-ЦЕНТР <span className="text-[#F3E5AB]">ДЮФЛУ</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#F3E5AB]">
              <Trophy className="w-4 h-4 text-[#D4AF37]" />
              <span>ЕЛІТ-ЛІГА УКРАЇНИ • СЕЗОН 2026/2027</span>
            </div>
            <p className="text-xs sm:text-sm text-red-100/85 max-w-md font-normal mt-1">
              Офіційні поєдинки, протоколи та результати виступів усіх вікових категорій ФК «Волинь».
            </p>
          </div>
        </div>

        {/* Filters and Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          {/* Segmented Control */}
          <div className="inline-flex p-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 shadow-inner">
            <button
              id="matches-tab-fixtures"
              onClick={() => setActiveTab('fixtures')}
              className={`px-6 py-2 rounded-full font-heading font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'fixtures'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-zinc-950 shadow-lg font-black'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Календар матчів
            </button>
            <button
              id="matches-tab-results"
              onClick={() => setActiveTab('results')}
              className={`px-6 py-2 rounded-full font-heading font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'results'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-zinc-950 shadow-lg font-black'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Результати ігор
            </button>
          </div>

          {/* Age Group Chips */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {ageGroups.map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAge(age)}
                className={`px-4 py-1.5 rounded-full text-xs font-heading font-extrabold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  selectedAge === age
                    ? 'bg-white text-[#A31E24] shadow-md font-black'
                    : 'bg-black/30 text-white/80 hover:text-white hover:bg-black/50 border border-white/15'
                }`}
              >
                {age === 'Всі' ? 'Усі команди' : `Команда ${age}`}
              </button>
            ))}
          </div>
        </div>

        {/* Matches Grid */}
        {matches.length === 0 ? (
          <div className="text-center py-16 rounded-3xl bg-black/40 border border-white/15 p-8 backdrop-blur-md">
            <Calendar className="w-12 h-12 text-[#F3E5AB] mx-auto mb-3" />
            <h3 className="font-heading text-2xl font-black uppercase text-white mb-1">
              Матчів у цій категорії не знайдено
            </h3>
            <p className="text-sm text-red-100/70">
              Спробуйте обрати іншу вікову категорію або переглянути розклад.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {matches.map((match) => {
              const isFinished = match.status === 'finished';

              return (
                <div
                  key={match.id}
                  id={`match-card-${match.id}`}
                  onClick={() => onSelectMatch(match)}
                  className="group cursor-pointer rounded-2xl bg-[#151720]/90 hover:bg-[#1C1F2B] border-2 border-white/15 hover:border-[#D4AF37] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden backdrop-blur-md"
                >
                  {/* Card Header Info Strip */}
                  <div className="px-5 sm:px-6 py-2.5 bg-black/40 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5 sm:gap-4 flex-wrap">
                      <span className="font-heading font-black text-[11px] sm:text-xs uppercase tracking-wider text-zinc-950 bg-[#D4AF37] px-3 py-0.5 rounded-full shadow-sm">
                        {match.competition}
                      </span>
                      <span className="text-zinc-300 font-mono flex items-center gap-1.5 text-[11px] sm:text-xs">
                        <Calendar className="w-3.5 h-3.5 text-[#F3E5AB]" />
                        {match.dateFormatted || match.date}
                      </span>
                      <span className="text-zinc-300 font-mono flex items-center gap-1.5 text-[11px] sm:text-xs">
                        <Clock className="w-3.5 h-3.5 text-[#F3E5AB]" />
                        {match.time}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-zinc-300 flex items-center gap-1.5 text-[11px] sm:text-xs font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {match.venue}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-heading font-extrabold uppercase tracking-wider ${
                        match.venueType === 'Home'
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                          : 'bg-amber-950/80 text-amber-300 border border-amber-500/40'
                      }`}>
                        {match.venueType === 'Home' ? 'Домашня гра' : 'Виїзна гра'}
                      </span>
                    </div>
                  </div>

                  {/* Main Teams Matchup Body */}
                  <div className="p-4 sm:p-6 grid grid-cols-12 items-center gap-2 sm:gap-6">
                    {/* Home Team (Left side) */}
                    <div className="col-span-5 flex items-center justify-end gap-2 sm:gap-4 text-right">
                      <div className="min-w-0">
                        <h4 className={`font-heading text-sm sm:text-xl md:text-2xl font-black uppercase tracking-tight truncate sm:whitespace-normal ${
                          match.homeTeam.isVolyn ? 'text-[#F3E5AB]' : 'text-white'
                        }`}>
                          {match.homeTeam.name}
                        </h4>
                        <div className="text-[9px] sm:text-[11px] font-heading font-extrabold uppercase tracking-wider text-zinc-400">
                          {match.homeTeam.isVolyn ? 'ФК «ВОЛИНЬ»' : 'ГОСПОДАРІ'}
                        </div>
                      </div>

                      {/* Home Team Logo */}
                      <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
                        {match.homeTeam.isVolyn ? (
                          <div className="w-9 h-9 sm:w-13 sm:h-13 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]">
                            <VolynLogo className="w-full h-full" />
                          </div>
                        ) : (
                          <span className="font-heading font-black text-lg sm:text-2xl text-zinc-300">
                            {match.homeTeam.logoText || '⚡'}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Center Score / Versus Badge */}
                    <div className="col-span-2 flex flex-col items-center justify-center text-center py-1">
                      {isFinished && match.score ? (
                        <div className="px-2.5 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#A31E24] to-[#781216] border border-[#D4AF37]/50 text-white font-heading font-black text-base sm:text-2xl md:text-3xl tracking-wider shadow-md">
                          {match.score}
                        </div>
                      ) : (
                        <div className="px-2.5 sm:px-4 py-1 rounded-full bg-white/10 border border-[#D4AF37]/40 text-[#F3E5AB] font-heading font-black text-[10px] sm:text-xs uppercase tracking-widest">
                          VS
                        </div>
                      )}
                      <span className="text-[8px] sm:text-[10px] font-heading font-bold uppercase tracking-widest text-[#D4AF37] mt-1 hidden sm:block">
                        {isFinished ? 'Матч завершено' : 'Еліт-ліга ДЮФЛУ'}
                      </span>
                    </div>

                    {/* Away Team (Right side) */}
                    <div className="col-span-5 flex items-center justify-start gap-2 sm:gap-4 text-left">
                      {/* Away Team Logo */}
                      <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
                        {match.awayTeam.isVolyn ? (
                          <div className="w-9 h-9 sm:w-13 sm:h-13 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]">
                            <VolynLogo className="w-full h-full" />
                          </div>
                        ) : (
                          <span className="font-heading font-black text-lg sm:text-2xl text-zinc-300">
                            {match.awayTeam.logoText || '🛡️'}
                          </span>
                        )}
                      </div>

                      <div className="min-w-0">
                        <h4 className={`font-heading text-sm sm:text-xl md:text-2xl font-black uppercase tracking-tight truncate sm:whitespace-normal ${
                          match.awayTeam.isVolyn ? 'text-[#F3E5AB]' : 'text-white'
                        }`}>
                          {match.awayTeam.name}
                        </h4>
                        <div className="text-[9px] sm:text-[11px] font-heading font-extrabold uppercase tracking-wider text-zinc-400">
                          {match.awayTeam.isVolyn ? 'ФК «ВОЛИНЬ»' : 'ГОСТІ'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
