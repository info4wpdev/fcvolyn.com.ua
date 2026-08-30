import React, { useState } from 'react';
import {
  X,
  Shield,
  Calendar,
  Clock,
  MapPin,
  Ticket,
  User,
  Mail,
  Phone,
  CheckCircle2,
  Sparkles,
  Trophy,
  Video,
  ExternalLink,
  Award,
  BookOpen,
  GraduationCap,
  Quote,
  ArrowRight,
  UserCheck,
} from 'lucide-react';
import { NewsItem, TeamInfo, Match, Coach } from '../types';
import { CLUB_INFO } from '../data/clubData';
import { VolynLogo } from './VolynLogo';

// --- Scouting / Trials Modal ---
interface ScoutingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAgeGroup?: string;
}

export const ScoutingModal: React.FC<ScoutingModalProps> = ({ isOpen, onClose, initialAgeGroup }) => {
  const [formData, setFormData] = useState({
    playerName: '',
    birthYear: '2012',
    ageGroup: initialAgeGroup || 'Ю15',
    preferredPosition: 'Півзахисник',
    currentClub: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    medicalNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-white border-2 border-zinc-200 shadow-2xl p-6 sm:p-8 my-8 text-zinc-900">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer"
          aria-label="Закрити діалог"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-900">
              ЗАЯВКУ НА ВІДБІР ПРИЙНЯТО!
            </h3>
            <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
              Дякуємо, <strong className="text-[#A31E24]">{formData.parentName || formData.playerName}</strong>. Селекційний відділ ДЮФШ «Волинь» розгляне анкету кандидата на вікову групу <strong className="text-[#A31E24]">{formData.ageGroup}</strong> та зв'яжеться з вами за номером <strong className="text-zinc-900">{formData.parentPhone}</strong> щодо часу перегляду.
            </p>
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-600 max-w-md mx-auto">
              Місце перегляду: Стадіон «Авангард» (тренувальні поля), м. Луцьк, вул. Перемоги, 1
            </div>
            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-[#A31E24] hover:bg-[#B82229] text-white font-heading font-black text-sm uppercase tracking-wider shadow-lg shadow-[#A31E24]/30 cursor-pointer"
            >
              Зрозуміло
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-2xl bg-[#A31E24] text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-heading font-black uppercase tracking-widest text-[#A31E24]">
                  ОФІЦІЙНИЙ НАБІР ДО ДЮФШ «ВОЛИНЬ»
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-zinc-900 tracking-tight">
                  АНКЕТА НА ВІДКРИТИЙ ПЕРЕГЛЯД
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 mb-6 font-normal">
              Офіційний відбір для юних футболістів вікових категорій Ю8–Ю19 (2008–2018 років народження).
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-zinc-700 mb-1">
                    Прізвище та ім'я дитини *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.playerName}
                    onChange={(e) => setFormData({ ...formData, playerName: e.target.value })}
                    placeholder="напр. Назар Ковальчук"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 text-xs placeholder:text-zinc-400 focus:outline-none focus:border-[#A31E24] focus:ring-1 focus:ring-[#A31E24]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-zinc-700 mb-1">
                    Вікова категорія *
                  </label>
                  <select
                    value={formData.ageGroup}
                    onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 text-xs focus:outline-none focus:border-[#A31E24]"
                  >
                    {['Ю19 (2008)', 'Ю17 (2010)', 'Ю16 (2011)', 'Ю15 (2012)', 'Ю14 (2013)', 'Ю12 (2015)', 'Ю11 (2016)', 'Ю10 (2017)', 'Ю9 (2018)', 'Ю8 (2019)'].map((grp) => (
                      <option key={grp} value={grp.split(' ')[0]}>
                        Команда {grp}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-zinc-700 mb-1">
                    Бажана ігрова позиція *
                  </label>
                  <select
                    value={formData.preferredPosition}
                    onChange={(e) => setFormData({ ...formData, preferredPosition: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 text-xs focus:outline-none focus:border-[#A31E24]"
                  >
                    <option value="Воротар">Воротар</option>
                    <option value="Центральний захисник">Центральний захисник</option>
                    <option value="Фланговий захисник">Фланговий захисник</option>
                    <option value="Опорний півзахисник">Опорний півзахисник</option>
                    <option value="Атакувальний півзахисник">Атакувальний півзахисник / Вінгер</option>
                    <option value="Нападник">Нападник / Форвард</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-zinc-700 mb-1">
                    Попередня секція або клуб
                  </label>
                  <input
                    type="text"
                    value={formData.currentClub}
                    onChange={(e) => setFormData({ ...formData, currentClub: e.target.value })}
                    placeholder="напр. ДЮСШ Луцьк / Початківець"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 text-xs placeholder:text-zinc-400 focus:outline-none focus:border-[#A31E24]"
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-200">
                <span className="text-[11px] font-heading font-black uppercase tracking-wider text-[#A31E24] block mb-3">
                  КОНТАКТНІ ДАНІ БАТЬКІВ АБО ОПІКУНІВ
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1">ПІБ батьків *</label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Оксана Ковальчук"
                      className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 text-xs focus:outline-none focus:border-[#A31E24]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.parentEmail}
                      onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      placeholder="parent@example.com"
                      className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 text-xs focus:outline-none focus:border-[#A31E24]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1">Номер телефону *</label>
                    <input
                      type="tel"
                      required
                      value={formData.parentPhone}
                      onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      placeholder="+380 (50) 123-45-67"
                      className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 text-xs focus:outline-none focus:border-[#A31E24]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Додаткові примітки (досвід, особливості здоров'я)
                </label>
                <textarea
                  rows={2}
                  value={formData.medicalNotes}
                  onChange={(e) => setFormData({ ...formData, medicalNotes: e.target.value })}
                  placeholder="Додаткова інформація для тренера..."
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 text-xs focus:outline-none focus:border-[#A31E24]"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-zinc-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-zinc-300 text-zinc-700 hover:text-zinc-900 text-xs font-heading font-bold uppercase tracking-wider cursor-pointer"
                >
                  Скасувати
                </button>
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-xl bg-[#A31E24] hover:bg-[#B82229] text-white font-heading font-black text-sm uppercase tracking-wider shadow-lg shadow-[#A31E24]/30 flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#F3E5AB]" />
                  <span>Надіслати анкету</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Match Details & Tickets Modal ---
interface MatchModalProps {
  match: Match | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MatchModal: React.FC<MatchModalProps> = ({ match, isOpen, onClose }) => {
  const [ticketQuantity, setTicketQuantity] = useState(2);
  const [ticketBooked, setTicketBooked] = useState(false);

  if (!isOpen || !match) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-xl rounded-3xl bg-white border-2 border-zinc-200 shadow-2xl p-6 sm:p-8 my-8 text-zinc-900">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer"
          aria-label="Закрити"
        >
          <X className="w-5 h-5" />
        </button>

        {ticketBooked ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-3xl font-black uppercase text-zinc-900">
              ПЕРЕПУСТКУ ЗАБРОНЬОВАНО!
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto">
              Ваші {ticketQuantity} квитки на матч <strong className="text-zinc-900">{match.homeTeam.name} — {match.awayTeam.name}</strong> підтверджено. Пред'явіть код на вході на стадіон.
            </p>
            <div className="p-3 rounded-xl bg-zinc-100 border border-zinc-200 text-xs font-mono text-[#A31E24] font-bold">
              Код перепустки: VOLYN-TIX-{match.id.toUpperCase()}-7741
            </div>
            <button
              onClick={() => {
                setTicketBooked(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#A31E24] text-white font-heading font-black text-xs uppercase tracking-wider cursor-pointer"
            >
              Закрити
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-red-100 text-[#A31E24] font-heading font-black text-xs uppercase tracking-wider border border-red-200">
                {match.competition}
              </span>
              <span className="text-xs font-mono text-zinc-500">{match.ageGroup}</span>
            </div>

            {/* Teams Faceoff Card */}
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 my-4 flex items-center justify-between text-center">
              <div className="flex-1 flex flex-col items-center">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-2 shadow-sm border-2 ${
                  match.homeTeam.isVolyn
                    ? 'bg-[#A31E24] border-[#D4AF37] text-white p-2'
                    : 'bg-zinc-200 border-zinc-300 text-zinc-900 font-heading font-black'
                }`}>
                  {match.homeTeam.isVolyn ? <VolynLogo className="w-full h-full text-white" /> : match.homeTeam.logoText}
                </div>
                <span className="font-heading text-lg font-black uppercase leading-tight text-zinc-900">{match.homeTeam.name}</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Господарі</span>
              </div>

              <div className="px-4">
                <span className="px-3 py-1 rounded-full bg-[#A31E24] text-white font-heading font-black text-xs">
                  VS
                </span>
              </div>

              <div className="flex-1 flex flex-col items-center">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-2 shadow-sm border-2 ${
                  match.awayTeam.isVolyn
                    ? 'bg-[#A31E24] border-[#D4AF37] text-white p-2'
                    : 'bg-zinc-200 border-zinc-300 text-zinc-900 font-heading font-black'
                }`}>
                  {match.awayTeam.isVolyn ? <VolynLogo className="w-full h-full text-white" /> : match.awayTeam.logoText}
                </div>
                <span className="font-heading text-lg font-black uppercase leading-tight text-zinc-900">{match.awayTeam.name}</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Гості</span>
              </div>
            </div>

            {/* Match Information */}
            <div className="space-y-2.5 text-xs text-zinc-700 mb-6 bg-white p-4 rounded-2xl border border-zinc-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#A31E24]" />
                <span className="font-bold text-zinc-900">{match.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#A31E24]" />
                <span>Початок матчу: {match.time} (Вхід відкривається за 45 хв)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A31E24]" />
                <span>{match.stadium}</span>
              </div>
              <div className="flex items-center gap-2">
                <Ticket className="w-4 h-4 text-[#A31E24]" />
                <span>Вхід: Безкоштовний для вихованців та батьків</span>
              </div>
            </div>

            {/* Ticket Selector */}
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-heading font-black uppercase text-[#A31E24] block">
                  Кількість місць
                </span>
                <div className="flex items-center gap-2 mt-1">
                  {[1, 2, 3, 4].map((q) => (
                    <button
                      key={q}
                      onClick={() => setTicketQuantity(q)}
                      className={`w-8 h-8 rounded-lg text-xs font-heading font-black uppercase transition-all cursor-pointer ${
                        ticketQuantity === q
                          ? 'bg-[#A31E24] text-white shadow-md'
                          : 'bg-white text-zinc-800 border border-zinc-300 hover:bg-zinc-100'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setTicketBooked(true)}
                className="px-5 py-2.5 rounded-xl bg-[#A31E24] hover:bg-[#b82229] text-white font-heading font-black text-xs uppercase tracking-wider shadow-md cursor-pointer"
              >
                Зарезервувати {ticketQuantity} {ticketQuantity === 1 ? 'квиток' : 'квитки'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Article Modal ---
interface ArticleModalProps {
  article: NewsItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-3xl rounded-3xl bg-white border-2 border-zinc-200 shadow-2xl p-6 sm:p-10 my-8 text-zinc-900 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer"
          aria-label="Закрити статтю"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#A31E24] text-white text-xs font-heading font-black uppercase">
            {article.category}
          </span>
          <span className="text-xs font-mono text-zinc-500">{article.date}</span>
          <span>•</span>
          <span className="text-xs font-mono text-[#A31E24] font-bold">{article.readTime}</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-zinc-900 leading-tight mb-4">
          {article.title}
        </h2>

        <div className="rounded-2xl overflow-hidden mb-6 border border-zinc-200 max-h-80 shadow-sm">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose max-w-none text-zinc-700 text-sm sm:text-base leading-relaxed space-y-4">
          <p className="font-semibold text-zinc-900 text-base sm:text-lg leading-snug">
            {article.excerpt}
          </p>
          <p className="whitespace-pre-line text-zinc-700">
            {article.content}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500 font-mono">
          <span>Автор: <strong className="text-zinc-800">{article.author}</strong></span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-heading font-black uppercase tracking-wider cursor-pointer"
          >
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Team Roster Modal ---
interface TeamModalProps {
  team: TeamInfo | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenTrialModal: (ageGroup: string) => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({ team, isOpen, onClose, onOpenTrialModal }) => {
  if (!isOpen || !team) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-3xl rounded-3xl bg-white border-2 border-zinc-200 shadow-2xl p-6 sm:p-8 my-8 text-zinc-900 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer"
          aria-label="Закрити склад"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-[#A31E24] text-white font-heading font-black text-xs uppercase">
            {team.ageGroup} КАТЕГОРІЯ
          </span>
          <span className="text-xs font-mono text-zinc-500">{team.league}</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-900 mb-2">
          {team.name}
        </h2>

        <p className="text-sm text-zinc-600 mb-6">
          {team.description}
        </p>

        {/* Coach and Details Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-200 mb-6 text-xs font-mono">
          <div>
            <span className="text-zinc-500 block">ГОЛОВНИЙ НАСТАВНИК</span>
            <strong className="text-zinc-900 text-sm font-heading font-bold">{team.coach}</strong>
          </div>
          <div>
            <span className="text-zinc-500 block">ГРАФІК ТРЕНУВАНЬ</span>
            <strong className="text-zinc-800">{team.trainingSchedule}</strong>
          </div>
          <div>
            <span className="text-zinc-500 block">ПОТОЧНА ПОЗИЦІЯ</span>
            <strong className="text-[#A31E24] font-black">{team.standing}</strong>
          </div>
        </div>

        {/* Featured Key Players */}
        <h4 className="font-heading text-lg font-black uppercase tracking-wider text-zinc-900 mb-3">
          КЛЮЧОВІ ГРАВЦІ СКЛАДУ
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {team.keyPlayers.map((player) => (
            <div
              key={player.number}
              className="p-3.5 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#A31E24] text-white font-heading font-black text-sm flex items-center justify-center">
                  #{player.number}
                </div>
                <div>
                  <h5 className="font-heading text-base font-black uppercase text-zinc-900 leading-tight">
                    {player.name}
                  </h5>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {player.position} • {player.nationality}
                  </span>
                </div>
              </div>

              {player.goals !== undefined && (
                <div className="text-right">
                  <span className="font-heading text-sm font-black text-[#A31E24] block">{player.goals} Голів</span>
                  <span className="text-[10px] font-mono text-zinc-500">{player.appearances} Матчів</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onOpenTrialModal(team.ageGroup);
            }}
            className="px-6 py-2.5 rounded-xl bg-[#A31E24] hover:bg-[#b82229] text-white font-heading font-black text-xs uppercase tracking-wider shadow-md cursor-pointer"
          >
            Подати заявку на відбір ({team.ageGroup})
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-zinc-300 text-zinc-700 text-xs font-heading font-bold uppercase cursor-pointer"
          >
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Coach Profile Modal ---
interface CoachModalProps {
  coach: Coach | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenTrialModal: (ageGroup?: string) => void;
}

export const CoachModal: React.FC<CoachModalProps> = ({
  coach,
  isOpen,
  onClose,
  onOpenTrialModal,
}) => {
  if (!isOpen || !coach) return null;

  const initials = coach.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  const isProOrLegend =
    coach.license.includes('PRO') || coach.license.includes('Легенда');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-3xl rounded-3xl bg-white border-2 border-zinc-200 shadow-2xl p-6 sm:p-8 my-8 text-zinc-900 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-white text-zinc-800 hover:text-black transition-colors z-20 cursor-pointer shadow-md"
          aria-label="Закрити"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Coach Header Banner */}
        <div
          className={`relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 p-6 sm:p-8 bg-gradient-to-r ${
            coach.avatarBg || 'from-[#A31E24] via-[#8E171C] to-[#5C0D11]'
          } rounded-t-3xl border-b border-red-700 overflow-hidden text-white`}
        >
          {/* Watermark crest */}
          <div className="absolute right-4 -bottom-6 w-44 h-44 opacity-15 pointer-events-none">
            <VolynLogo className="w-full h-full text-white" />
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-end gap-5">
            {/* Big Avatar */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-b from-[#D4AF37] via-white to-[#A31E24] shadow-2xl shrink-0">
              <div className="w-full h-full rounded-full bg-[#181a24] border-2 border-white flex items-center justify-center overflow-hidden relative">
                <div className="w-full h-full flex flex-col items-center justify-center text-white relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#A31E24] via-[#600e12] to-[#181a24] opacity-90" />
                  <span className="font-heading font-black text-3xl sm:text-4xl text-[#F3E5AB]">
                    {initials}
                  </span>
                </div>
              </div>
            </div>

            {/* Titles */}
            <div className="text-center sm:text-left space-y-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-heading font-black uppercase tracking-wider ${
                    isProOrLegend
                      ? 'bg-[#D4AF37] text-zinc-950 shadow-md'
                      : 'bg-white text-[#A31E24] shadow-md'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>{coach.license}</span>
                </span>

                {coach.license.includes('Легенда') && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-heading font-black uppercase tracking-wider bg-amber-400 text-zinc-950 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>Легенда клубу</span>
                  </span>
                )}
              </div>

              <h3 className="font-heading text-2xl sm:text-4xl font-black uppercase text-white tracking-tight leading-none">
                {coach.name}
              </h3>
              <p className="text-xs sm:text-sm font-heading font-black text-[#F3E5AB] uppercase tracking-wider">
                {coach.role}
              </p>
            </div>
          </div>
        </div>

        {/* Coach Bio */}
        <div className="space-y-6">
          <div>
            <h4 className="flex items-center gap-2 font-heading text-sm font-black uppercase tracking-wider text-[#A31E24] mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Про наставника</span>
            </h4>
            <p className="text-sm text-zinc-700 leading-relaxed font-normal">
              {coach.bio}
            </p>
          </div>

          {/* Philosophy Quote */}
          {coach.philosophy && (
            <div className="p-4 rounded-2xl bg-red-50/70 border-l-4 border-[#A31E24] border-y border-r border-red-200 flex items-start gap-3">
              <Quote className="w-6 h-6 text-[#A31E24] shrink-0 opacity-80" />
              <div>
                <span className="block text-[10px] font-heading font-black uppercase tracking-wider text-[#A31E24] mb-0.5">
                  Тренерське кредо та філософія
                </span>
                <p className="text-xs sm:text-sm text-zinc-800 italic font-semibold">
                  {coach.philosophy}
                </p>
              </div>
            </div>
          )}

          {/* Grid: Achievements & Career */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Achievements */}
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h5 className="flex items-center gap-2 font-heading text-xs font-black uppercase tracking-wider text-zinc-900 mb-3">
                <Trophy className="w-4 h-4 text-[#A31E24]" />
                <span>Головні досягнення</span>
              </h5>
              <ul className="space-y-2 text-xs text-zinc-700">
                {coach.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A31E24] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career & Experience */}
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h5 className="flex items-center gap-2 font-heading text-xs font-black uppercase tracking-wider text-zinc-900 mb-3">
                <GraduationCap className="w-4 h-4 text-[#A31E24]" />
                <span>Освіта та досвід</span>
              </h5>
              <p className="text-xs text-zinc-700 mb-3">
                <strong className="text-zinc-900 block mb-1">Освіта:</strong>
                {coach.education}
              </p>
              <div className="space-y-1.5 text-xs text-zinc-700">
                <strong className="text-zinc-900 block mb-1">Етапи кар'єри:</strong>
                {coach.careerHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-zinc-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A31E24]" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Details & Age Group */}
          <div className="p-4 rounded-2xl bg-zinc-100 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A31E24]" />
                <a
                  href={`tel:${coach.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-zinc-900 hover:text-[#A31E24] font-mono font-bold transition-colors"
                >
                  {coach.phone}
                </a>
              </div>

              {coach.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#A31E24]" />
                  <a
                    href={`mailto:${coach.email}`}
                    className="text-zinc-900 hover:text-[#A31E24] font-mono font-bold transition-colors"
                  >
                    {coach.email}
                  </a>
                </div>
              )}
            </div>

            <span className="text-xs text-zinc-600 font-medium">
              Закріплений за: <strong className="text-zinc-900">{coach.teams}</strong>
            </span>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-6 pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenTrialModal(coach.ageGroups?.[0]);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#A31E24] hover:bg-[#b82229] text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg cursor-pointer"
          >
            <span>Записатися на відбір до {coach.name}</span>
            <ArrowRight className="w-4 h-4 text-[#F3E5AB]" />
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-zinc-300 text-zinc-700 hover:text-zinc-900 text-xs font-heading font-bold uppercase transition-colors cursor-pointer"
          >
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
};
