import React from 'react';
import { Coach } from '../types';
import { Award, Phone, Mail, ChevronRight, Shield, User, Sparkles } from 'lucide-react';
import { VolynLogo } from './VolynLogo';

interface CoachCardProps {
  coach: Coach;
  onSelect: (coach: Coach) => void;
  onOpenTrialModal: (ageGroup?: string) => void;
}

export const CoachCard: React.FC<CoachCardProps> = ({
  coach,
  onSelect,
  onOpenTrialModal,
}) => {
  // Get initial letters
  const initials = coach.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  // Determine badge styling based on license
  const isProOrLegend =
    coach.license.includes('PRO') || coach.license.includes('Легенда');
  const isUEFAA = coach.license.includes('UEFA A');

  return (
    <div
      id={`coach-card-${coach.id}`}
      className="group relative flex flex-col rounded-2xl bg-white border border-zinc-200 hover:border-[#A31E24] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl"
    >
      {/* Full Area Photo Area */}
      <div className="relative h-72 sm:h-80 w-full bg-zinc-900 overflow-hidden">
        {coach.photo ? (
          <img
            src={coach.photo}
            alt={coach.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.parentElement) {
                const fallback = target.parentElement.querySelector('.initials-fallback');
                if (fallback) fallback.classList.remove('hidden');
              }
            }}
          />
        ) : null}

        {/* Fallback if photo not available */}
        <div
          className={`initials-fallback ${
            coach.photo ? 'hidden' : ''
          } absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#A31E24] via-[#5c1317] to-zinc-900 text-white`}
        >
          <span className="font-heading font-black text-4xl tracking-tighter text-[#F3E5AB]">
            {initials}
          </span>
          <span className="text-[10px] font-heading uppercase tracking-widest text-zinc-300 mt-1">
            ФК Волинь
          </span>
        </div>

        {/* Subtle Dark Gradient Overlay at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

        {/* Coach License / Certificate Label */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-heading font-black uppercase tracking-wider shadow-md ${
              isProOrLegend
                ? 'bg-[#D4AF37] text-zinc-950'
                : isUEFAA
                ? 'bg-[#A31E24] text-white'
                : 'bg-black/75 text-white backdrop-blur-md border border-white/20'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>{coach.license.split('•')[0].trim()}</span>
          </span>

          {coach.license.includes('Легенда') && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-heading font-black uppercase tracking-wider bg-amber-400 text-zinc-950 shadow-md">
              <Sparkles className="w-3 h-3" />
              <span>Легенда клубу</span>
            </span>
          )}
        </div>

        {/* Coach Name & Role overlaid neatly at the bottom of the photo */}
        <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
          <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-[#F3E5AB] block drop-shadow-sm">
            {coach.role}
          </span>
          <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-white leading-tight drop-shadow-md">
            {coach.name}
          </h3>
        </div>
      </div>

      {/* Clean, Minimalist Details Section */}
      <div className="flex-1 p-4 flex flex-col justify-between bg-white">
        <div className="space-y-2.5">
          {/* Assigned Teams / Squads */}
          <div className="text-xs text-zinc-700">
            <span className="font-heading font-bold text-zinc-900 uppercase tracking-wide text-[11px] block">
              {coach.teams}
            </span>
            <span className="text-zinc-500 text-[11px] block mt-0.5">
              {coach.experience}
            </span>
          </div>

          {/* Philosophy / Quote Preview */}
          <p className="text-xs text-zinc-600 italic line-clamp-2 pl-2.5 border-l-2 border-[#A31E24]">
            {coach.philosophy}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 mt-3 border-t border-zinc-100 space-y-2">
          <button
            onClick={() => onSelect(coach)}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-[#A31E24] text-white text-xs font-heading font-black uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
          >
            <span>Повне досьє</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${coach.phone.replace(/[^0-9+]/g, '')}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-[11px] font-heading font-bold text-zinc-800 transition-colors"
              title="Зателефонувати тренеру"
            >
              <Phone className="w-3 h-3 text-[#A31E24]" />
              <span className="truncate">{coach.phone}</span>
            </a>

            <button
              onClick={() => onOpenTrialModal(coach.ageGroups?.[0])}
              className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-[#A31E24] text-[#A31E24] hover:text-white border border-red-200 text-[11px] font-heading font-black uppercase tracking-wider transition-colors cursor-pointer"
              title="Записатись на перегляд"
            >
              Відбір
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
