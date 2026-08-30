import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Phone,
  Sparkles,
  Trophy,
  History,
  Users,
  Building2,
  Award,
  ArrowRight,
  Ticket,
  Video,
  Image as ImageIcon,
  Handshake,
  Mail,
  MapPin,
  Flame,
  Shield,
} from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { VolynLogo } from './VolynLogo';

// Stadium Cenit View Icon from SVGRepo
export const StadiumIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 512 512"
    fill="currentColor"
    className={className}
  >
    <g>
      <path d="M462.657,137.343C430.837,105.524,388.698,88,344,88H168c-44.698,0-86.837,17.524-118.657,49.343S0,211.302,0,256 s17.524,86.837,49.343,118.657S123.302,424,168,424h176c44.698,0,86.837-17.524,118.657-49.343S512,300.698,512,256 S494.476,169.163,462.657,137.343z M451.343,363.343C422.546,392.141,384.424,408,344,408H168 c-40.424,0-78.546-15.859-107.343-44.657S16,296.424,16,256s15.859-78.546,44.657-107.343S127.576,104,168,104h176 c40.424,0,78.546,15.859,107.343,44.657S496,215.576,496,256S480.141,334.546,451.343,363.343z" />
      <path d="M120,152c-13.234,0-24,10.766-24,24v160c0,13.234,10.766,24,24,24h272c13.234,0,24-10.766,24-24V176 c0-13.234-10.766-24-24-24H120z M248,295.195c-18.236-3.716-32-19.878-32-39.195s13.764-35.479,32-39.195V295.195z M264,216.805 c18.236,3.716,32,19.878,32,39.195s-13.764,35.479-32,39.195V216.805z M112,216h32v80h-32V216z M112,336v-24h40 c4.418,0,8-3.582,8-8v-96c0-4.418-3.582-8-8-8h-40v-24c0-4.411,3.589-8,8-8h128v32.581c-27.101,3.895-48,27.258-48,55.419 s20.899,51.525,48,55.419V344H120C115.589,344,112,340.411,112,336z M400,296h-32v-80h32V296z M400,176v24h-40 c-4.418,0-8,3.582-8,8v96c0,4.418,3.582,8,8,8h40v24c0,4.411-3.589,8-8,8H264v-32.581c27.101-3.895,48-27.258,48-55.419 s-20.899-51.525-48-55.419V168h128C396.411,168,400,171.589,400,176z" />
      <path d="M419.278,152.536c5.404,3.944,10.542,8.346,15.271,13.083c1.563,1.566,3.612,2.349,5.662,2.349 c2.045,0,4.09-0.779,5.652-2.338c3.127-3.122,3.131-8.187,0.01-11.314c-5.315-5.324-11.089-10.271-17.164-14.705 c-3.57-2.604-8.573-1.823-11.178,1.747C414.927,144.927,415.709,149.931,419.278,152.536z" />
      <path d="M466.142,179.793c-2.344-3.744-7.28-4.88-11.026-2.536c-3.745,2.344-4.88,7.281-2.536,11.026 C465.285,208.577,472,231.993,472,256c0,70.58-57.42,128-128,128H168c-70.58,0-128-57.42-128-128s57.42-128,128-128h176 c17.267,0,34.026,3.395,49.812,10.09c0.495,0.21,0.988,0.423,1.48,0.639c4.045,1.774,8.765-0.066,10.54-4.112 c1.775-4.046-0.066-8.765-4.112-10.54c-0.552-0.242-1.105-0.481-1.661-0.716C382.287,115.822,363.426,112,344,112H168 c-79.402,0-144,64.598-144,144s64.598,144,144,144h176c79.402,0,144-64.598,144-144C488,228.986,480.441,202.634,466.142,179.793z" />
    </g>
  </svg>
);

interface HeaderProps {
  onOpenTrialModal: (ageGroup?: string) => void;
  onOpenTicketsModal: () => void;
  onSelectTeamAge?: (ageGroup: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenTrialModal,
  onOpenTicketsModal,
  onSelectTeamAge,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'about' | 'teams' | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<'about' | 'teams' | null>(null);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: 'about' | 'teams') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleNavClick = (anchorId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const target = document.getElementById(anchorId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTeamClick = (ageCode: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (onSelectTeamAge) {
      onSelectTeamAge(ageCode);
    }
    const target = document.getElementById('teams');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamsList = [
    { code: 'Ю19', label: 'U-19', year: '2008 р.н.', desc: 'Старший юнацький склад' },
    { code: 'Ю17', label: 'U-17', year: '2010 р.н.', desc: 'Еліт-ліга ДЮФЛУ' },
    { code: 'Ю16', label: 'U-16', year: '2011 р.н.', desc: 'Вища ліга ДЮФЛУ' },
    { code: 'Ю15', label: 'U-15', year: '2012 р.н.', desc: 'Формат 11х11' },
    { code: 'Ю14', label: 'U-14', year: '2013 р.н.', desc: 'Базовий юнацький рівень' },
    { code: 'Ю12', label: 'U-12', year: '2015 р.н.', desc: 'Формат 9х9' },
    { code: 'Ю11', label: 'U-11', year: '2016 р.н.', desc: 'Дитячий турнірний склад' },
    { code: 'Ю10', label: 'U-10', year: '2017 р.н.', desc: 'Початкова спортивна підготовка' },
    { code: 'Ю9', label: 'U-9', year: '2018 р.н.', desc: 'Набір та основи футболу' },
    { code: 'Ю8', label: 'U-8', year: '2019 р.н.', desc: 'Молодша підготовча група' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0E1015]/90 backdrop-blur-md py-3 shadow-2xl border-b border-white/10'
          : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur-[2px] py-4'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* 1. Logo (Збільшений офіційний логотип клубу, що виступає за нижню межу та плавно зменшується при скролі) */}
        <a
          href="#"
          id="header-logo-link"
          className="relative block shrink-0 z-20 focus:outline-none group"
          aria-label="ФК Волинь Луцьк - Головна"
        >
          <div
            className={`flex items-center justify-center transition-all duration-300 transform origin-top drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] ${
              isScrolled
                ? 'w-14 h-14 translate-y-0'
                : 'w-20 h-20 sm:w-24 sm:h-24 translate-y-2 sm:translate-y-4'
            }`}
          >
            <VolynLogo className="w-full h-full group-hover:scale-105 transition-transform duration-200" />
          </div>
        </a>

        {/* 2. Main Navigation Menu (По центру) */}
        <nav id="desktop-main-menu" className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 mx-auto">
          {/* Dropdown: Про клуб */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              id="nav-dropdown-about"
              onClick={() => handleNavClick('about')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-heading font-extrabold uppercase tracking-wider transition-colors duration-150 cursor-pointer ${
                activeDropdown === 'about'
                  ? 'text-[#F3E5AB] bg-white/10'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>Про клуб</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'about' ? 'rotate-180 text-[#F3E5AB]' : 'text-white/70'
                }`}
              />
            </button>

            {/* Dropdown Menu Card */}
            {activeDropdown === 'about' && (
              <div
                className="absolute top-full left-0 mt-1 w-64 rounded-2xl bg-[#141720]/95 backdrop-blur-xl border border-white/15 p-2 shadow-2xl text-white animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleNavClick('history')}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#A31E24] text-left transition-colors group cursor-pointer"
                >
                  <div className="p-1.5 rounded-lg bg-white/10 group-hover:bg-white/20 text-[#F3E5AB]">
                    <History className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-heading font-bold text-sm text-white block">Історія клубу</span>
                    <span className="text-[11px] text-zinc-400 group-hover:text-zinc-200">Засновано у 1960 р.</span>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('coaches')}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#A31E24] text-left transition-colors group cursor-pointer"
                >
                  <div className="p-1.5 rounded-lg bg-white/10 group-hover:bg-white/20 text-[#F3E5AB]">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-heading font-bold text-sm text-white block">Тренерський штаб</span>
                    <span className="text-[11px] text-zinc-400 group-hover:text-zinc-200">Ліцензовані фахівці UEFA</span>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('infrastructure')}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#A31E24] text-left transition-colors group cursor-pointer"
                >
                  <div className="p-1.5 rounded-lg bg-white/10 group-hover:bg-white/20 text-[#F3E5AB]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-heading font-bold text-sm text-white block">Інфраструктура</span>
                    <span className="text-[11px] text-zinc-400 group-hover:text-zinc-200">Стадіони та база «Дачне»</span>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('achievements')}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#A31E24] text-left transition-colors group cursor-pointer"
                >
                  <div className="p-1.5 rounded-lg bg-white/10 group-hover:bg-white/20 text-[#F3E5AB]">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-heading font-bold text-sm text-white block">Досягнення</span>
                    <span className="text-[11px] text-zinc-400 group-hover:text-zinc-200">Трофеї та вихованці</span>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Dropdown: Команди (U-19 to U-8) */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('teams')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              id="nav-dropdown-teams"
              onClick={() => handleNavClick('teams')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-heading font-extrabold uppercase tracking-wider transition-colors duration-150 cursor-pointer ${
                activeDropdown === 'teams'
                  ? 'text-[#F3E5AB] bg-white/10'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>Команди</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'teams' ? 'rotate-180 text-[#F3E5AB]' : 'text-white/70'
                }`}
              />
            </button>

            {/* Dropdown Menu Grid for U-19 to U-8 */}
            {activeDropdown === 'teams' && (
              <div
                className="absolute top-full left-0 -ml-16 mt-1 w-80 rounded-2xl bg-[#141720]/95 backdrop-blur-xl border border-white/15 p-3 shadow-2xl text-white animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseEnter={() => handleMouseEnter('teams')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="px-2 py-1 mb-2 border-b border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-heading font-black tracking-widest text-[#F3E5AB] uppercase">
                    ВІКОВІ КАТЕГОРІЇ ДЮФШ
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono">10 команд</span>
                </div>

                <div className="grid grid-cols-2 gap-1.5 max-h-72 overflow-y-auto no-scrollbar">
                  {teamsList.map((team) => (
                    <button
                      key={team.code}
                      onClick={() => handleTeamClick(team.code)}
                      className="flex flex-col text-left p-2 rounded-xl hover:bg-[#A31E24] transition-colors group cursor-pointer border border-white/5 hover:border-white/20"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-black text-sm text-white group-hover:text-white">
                          {team.label}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400 group-hover:text-zinc-200">
                          {team.year.replace(' р.н.', '')}
                        </span>
                      </div>
                      <span className="text-[10px] text-zinc-400 group-hover:text-zinc-200 truncate">
                        {team.desc}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-2 pt-2 border-t border-white/10">
                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      onOpenTrialModal();
                    }}
                    className="w-full py-1.5 px-3 rounded-lg bg-white/10 hover:bg-[#A31E24] text-[#F3E5AB] hover:text-white text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Подати заявку на відбір</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Regular Menu Items */}
          <button
            onClick={() => handleNavClick('news')}
            className="px-3 py-2 rounded-xl text-sm font-heading font-extrabold uppercase tracking-wider text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            Новини
          </button>

          <button
            onClick={() => handleNavClick('matches')}
            className="px-3 py-2 rounded-xl text-sm font-heading font-extrabold uppercase tracking-wider text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            Матчі
          </button>

          <button
            onClick={() => handleNavClick('media')}
            className="px-3 py-2 rounded-xl text-sm font-heading font-extrabold uppercase tracking-wider text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            Медіа
          </button>

          <button
            onClick={() => handleNavClick('partners')}
            className="px-3 py-2 rounded-xl text-sm font-heading font-extrabold uppercase tracking-wider text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            Партнери
          </button>

          <button
            onClick={() => handleNavClick('contacts')}
            className="px-3 py-2 rounded-xl text-sm font-heading font-extrabold uppercase tracking-wider text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            Контакти
          </button>
        </nav>

        {/* 3. CTA Action Right (Тільки кнопка «Записатись» на перегляд) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Primary CTA Button: Записатись */}
          <button
            id="header-trial-cta-btn"
            onClick={() => onOpenTrialModal()}
            className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#F59E0B] hover:bg-[#D97706] active:bg-[#B45309] text-zinc-950 font-heading font-black text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Записатись
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-white bg-white/10 hover:bg-white/20 focus:outline-none backdrop-blur-md cursor-pointer"
            aria-label="Відкрити меню"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Floating Side Drawer Menu with Solid Red Background */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Dark Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Solid Red Side Drawer */}
          <div className="relative w-[85%] max-w-sm h-full bg-gradient-to-b from-[#A31E24] via-[#8C161C] to-[#600E12] text-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto border-l-2 border-[#D4AF37]/40">
            {/* Drawer Header with Logo & Close */}
            <div className="p-5 pb-4 border-b border-white/20 flex items-center justify-between bg-black/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 drop-shadow-md">
                  <VolynLogo className="w-full h-full" />
                </div>
                <div>
                  <div className="font-heading font-black text-sm uppercase text-white tracking-wider">
                    ФК «ВОЛИНЬ»
                  </div>
                  <div className="text-[10px] text-[#F3E5AB] font-mono tracking-widest">
                    ДЮФШ ЛУЦЬК
                  </div>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white cursor-pointer transition-colors"
                aria-label="Закрити меню"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation List */}
            <div className="p-4 space-y-2 flex-1">
              {/* Mobile About Accordion */}
              <div className="rounded-xl bg-black/25 border border-white/15 overflow-hidden">
                <button
                  onClick={() =>
                    setMobileExpandedSection(mobileExpandedSection === 'about' ? null : 'about')
                  }
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-heading font-black uppercase text-white"
                >
                  <span className="flex items-center gap-2.5">
                    <Shield className="w-4 h-4 text-[#F3E5AB]" />
                    <span>Про клуб</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#F3E5AB] transition-transform duration-200 ${
                      mobileExpandedSection === 'about' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {mobileExpandedSection === 'about' && (
                  <div className="px-4 pb-3 space-y-1.5 border-t border-white/10 pt-2 bg-black/20 text-xs">
                    <button
                      onClick={() => handleNavClick('history')}
                      className="w-full flex items-center gap-2.5 py-1.5 text-zinc-200 hover:text-white font-medium text-left"
                    >
                      <History className="w-3.5 h-3.5 text-[#F3E5AB]" />
                      <span>Історія клубу</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('coaches')}
                      className="w-full flex items-center gap-2.5 py-1.5 text-zinc-200 hover:text-white font-medium text-left"
                    >
                      <Users className="w-3.5 h-3.5 text-[#F3E5AB]" />
                      <span>Тренерський штаб</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('infrastructure')}
                      className="w-full flex items-center gap-2.5 py-1.5 text-zinc-200 hover:text-white font-medium text-left"
                    >
                      <Building2 className="w-3.5 h-3.5 text-[#F3E5AB]" />
                      <span>Інфраструктура</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('achievements')}
                      className="w-full flex items-center gap-2.5 py-1.5 text-zinc-200 hover:text-white font-medium text-left"
                    >
                      <Trophy className="w-3.5 h-3.5 text-[#F3E5AB]" />
                      <span>Досягнення</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Teams Accordion */}
              <div className="rounded-xl bg-black/25 border border-white/15 overflow-hidden">
                <button
                  onClick={() =>
                    setMobileExpandedSection(mobileExpandedSection === 'teams' ? null : 'teams')
                  }
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-heading font-black uppercase text-white"
                >
                  <span className="flex items-center gap-2.5">
                    <Trophy className="w-4 h-4 text-[#F3E5AB]" />
                    <span>Команди (U19 – U8)</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#F3E5AB] transition-transform duration-200 ${
                      mobileExpandedSection === 'teams' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {mobileExpandedSection === 'teams' && (
                  <div className="px-3 pb-3 grid grid-cols-2 gap-1.5 border-t border-white/10 pt-2 bg-black/20">
                    {teamsList.map((team) => (
                      <button
                        key={team.code}
                        onClick={() => handleTeamClick(team.code)}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-left text-xs font-heading font-bold text-white transition-colors"
                      >
                        <span className="block text-xs font-black text-[#F3E5AB]">{team.label}</span>
                        <span className="text-[9px] text-zinc-300">{team.year}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Navigation Links */}
              <button
                onClick={() => handleNavClick('news')}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-black/20 hover:bg-black/35 text-sm font-heading font-bold uppercase text-white transition-colors text-left"
              >
                <span>Новини</span>
                <ChevronRight className="w-4 h-4 text-[#F3E5AB]" />
              </button>

              <button
                onClick={() => handleNavClick('matches')}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-black/20 hover:bg-black/35 text-sm font-heading font-bold uppercase text-white transition-colors text-left"
              >
                <span>Матч-центр</span>
                <ChevronRight className="w-4 h-4 text-[#F3E5AB]" />
              </button>

              <button
                onClick={() => handleNavClick('coaches')}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-black/20 hover:bg-black/35 text-sm font-heading font-bold uppercase text-white transition-colors text-left"
              >
                <span>Тренери</span>
                <ChevronRight className="w-4 h-4 text-[#F3E5AB]" />
              </button>

              <button
                onClick={() => handleNavClick('media')}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-black/20 hover:bg-black/35 text-sm font-heading font-bold uppercase text-white transition-colors text-left"
              >
                <span>Медіа</span>
                <ChevronRight className="w-4 h-4 text-[#F3E5AB]" />
              </button>

              <button
                onClick={() => handleNavClick('contacts')}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-black/20 hover:bg-black/35 text-sm font-heading font-bold uppercase text-white transition-colors text-left"
              >
                <span>Контакти</span>
                <ChevronRight className="w-4 h-4 text-[#F3E5AB]" />
              </button>
            </div>

            {/* Bottom Actions in Drawer */}
            <div className="p-4 pt-3 border-t border-white/20 bg-black/30 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTicketsModal();
                }}
                className="w-full py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-heading font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/20"
              >
                <StadiumIcon className="w-4 h-4 text-[#F3E5AB]" />
                <span>ФАН-зона та квитки</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full py-3 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-zinc-950 font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center shadow-lg shadow-amber-500/25 cursor-pointer"
              >
                Записатись на відбір
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
