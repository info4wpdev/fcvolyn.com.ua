import React, { useState } from 'react';
import {
  Shield,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Send,
  ChevronUp,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { VolynLogo } from './VolynLogo';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes('@')) return;
    setSubscribed(true);
    setEmailInput('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Official Club Sponsors with high-res assets, displayed cleanly without heavy boxes/borders
  const sponsors = [
    {
      name: 'УАФ / Партнер',
      logo: 'https://uaf.ua/storage/partner-sponsors/01KP8RB0VED8R261V485JX6BCH.png?width=250',
      category: 'Офіційний партнер',
    },
    {
      name: 'Vbet / Спонсор',
      logo: 'https://uaf.ua/storage/partner-sponsors/01KP8RCGXQGM2DM09KK0K8FSYC.png?width=250',
      category: 'Преміум партнер',
    },
    {
      name: 'Львівське / Партнер',
      logo: 'https://uaf.ua/storage/partner-sponsors/01KP8RDGNA22PWP09GHNZGN9FD.png?width=250',
      category: 'Офіційний спонсор',
    },
    {
      name: 'Деметра / Партнер Волинь',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKRA4jXu2l_d7CrEzxba0GCRlhJxdYTtBnLg0tCI5pw&s',
      category: 'Генеральний партнер',
    },
    {
      name: 'Партнер Волинь',
      logo: 'https://i.ytimg.com/vi/1jERtQih1jA/maxresdefault.jpg',
      category: 'Регіональний партнер',
    },
  ];

  return (
    <footer id="contacts" className="relative bg-[#161822] text-zinc-300 overflow-hidden">
      {/* Top Gold Accent Line */}
      <div className="h-1 bg-gradient-to-r from-[#A31E24] via-[#D4AF37] to-[#A31E24]" />

      {/* 1. Official Sponsors & Partners - Clean, Borderless & Spacious */}
      <div className="border-b border-zinc-700/40 py-12 lg:py-16 bg-[#1A1D29]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-heading font-black text-[#D4AF37] tracking-[0.2em] uppercase">
                ОФІЦІЙНА ПІДТРИМКА
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-1">
                СПОНСОРИ ТА ПАРТНЕРИ <span className="text-[#A31E24]">ФК «ВОЛИНЬ»</span>
              </h3>
            </div>
            <p className="text-xs text-zinc-400 max-w-md font-normal">
              Разом розбудовуємо майбутнє волинського та українського футболу.
            </p>
          </div>

          {/* Clean Spacious Logos without heavy box borders */}
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 sm:gap-12 lg:gap-16 py-4">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
              >
                <div className="h-12 sm:h-14 md:h-16 max-w-[160px] sm:max-w-[190px] flex items-center justify-center">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain rounded-md filter contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-zinc-400 mt-2 group-hover:text-[#F3E5AB] transition-colors">
                  {sponsor.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Newsletter & Borderless Social Connect Bar */}
      <div className="border-b border-zinc-800/60 py-10 bg-[#141620]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Club Brand Info */}
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="w-14 h-14 shrink-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                <VolynLogo className="w-full h-full" />
              </div>
              <div>
                <div className="font-heading font-black text-lg sm:text-xl text-white uppercase tracking-wider">
                  ДЮФШ «ВОЛИНЬ» ЛУЦЬК
                </div>
                <div className="text-xs text-[#D4AF37] font-mono uppercase tracking-widest mt-0.5">
                  «Червоно-білі назавжди!» • Засн. {CLUB_INFO.founded}
                </div>
              </div>
            </div>

            {/* Clean, Large, Borderless Social Icons */}
            <div className="flex items-center gap-6 text-zinc-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-[#1877F2] transition-colors transform hover:scale-115 duration-200"
              >
                <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-[#E1306C] transition-colors transform hover:scale-115 duration-200"
              >
                <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="hover:text-[#229ED9] transition-colors transform hover:scale-115 duration-200"
              >
                <Send className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:text-[#FF0000] transition-colors transform hover:scale-115 duration-200"
              >
                <Youtube className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>

            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Ваш e-mail для новин"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="px-4 py-2.5 rounded-full bg-zinc-800/80 border border-zinc-700 text-white text-xs placeholder:text-zinc-400 focus:outline-none focus:border-[#D4AF37] w-full sm:w-60"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#e0bc46] text-zinc-950 font-heading font-black text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-sm"
              >
                {subscribed ? 'Готово!' : 'Підписатися'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 3. Spacious 4-Column Navigation Layout */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Про Академію */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase text-white tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A31E24]" />
              ПРО АКАДЕМІЮ
            </h4>
            <ul className="space-y-3 text-xs text-zinc-400">
              <li><a href="#about" className="hover:text-white transition-colors">Про клуб та історію</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Традиції та нагороди</a></li>
              <li><a href="#coaches" className="hover:text-white transition-colors">Керівництво школи</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Стадіон «Авангард»</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">Офіційні ліцензії</a></li>
            </ul>
          </div>

          {/* Column 2: Структура / Команди */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase text-white tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              СТРУКТУРА ТА КОМАНДИ
            </h4>
            <ul className="space-y-3 text-xs text-zinc-400">
              <li><a href="#teams" className="hover:text-white transition-colors">Команда Ю19 (Еліт-ліга)</a></li>
              <li><a href="#teams" className="hover:text-white transition-colors">Юнацькі склади Ю17, Ю16, Ю15</a></li>
              <li><a href="#teams" className="hover:text-white transition-colors">Дитячі групи Ю14 — Ю12</a></li>
              <li><a href="#teams" className="hover:text-white transition-colors">Початкові групи Ю11 — Ю8</a></li>
              <li><a href="#coaches" className="hover:text-white transition-colors">Тренерський штаб</a></li>
            </ul>
          </div>

          {/* Column 3: Футбол та Змагання */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase text-white tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A31E24]" />
              ФУТБОЛ ТА ЗМАГАННЯ
            </h4>
            <ul className="space-y-3 text-xs text-zinc-400">
              <li><a href="#matches" className="hover:text-white transition-colors">Еліт-ліга ДЮФЛУ</a></li>
              <li><a href="#matches" className="hover:text-white transition-colors">Чемпіонат області</a></li>
              <li><a href="#matches" className="hover:text-white transition-colors">Календар та результати</a></li>
              <li><a href="#media" className="hover:text-white transition-colors">Фото та відео звіти</a></li>
              <li><a href="#scouting" className="hover:text-white transition-colors">Вихованці у збірних</a></li>
            </ul>
          </div>

          {/* Column 4: Контакти та Скаутинг */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase text-white tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              КОНТАКТИ ТА ВІДБІР
            </h4>
            <div className="space-y-3.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{CLUB_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{CLUB_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{CLUB_INFO.email}</span>
              </div>
              <div className="pt-2">
                <a
                  href="#scouting"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A31E24] hover:bg-[#bd232a] text-white font-heading font-black text-[11px] uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Запис на перегляд</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Copyright Bar */}
      <div className="border-t border-zinc-800/80 bg-[#11131B] py-6">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-500 text-center sm:text-left">
            ДЮФШ «Волинь» Луцьк © {new Date().getFullYear()}. Офіційний сайт футбольної академії.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-zinc-500">Всі права захищено</span>
            <button
              onClick={scrollToTop}
              id="scroll-to-top-btn"
              aria-label="Вгору"
              className="w-8 h-8 rounded-full bg-[#D4AF37] hover:bg-[#e0bc46] text-zinc-950 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronUp className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
