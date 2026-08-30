import React from 'react';
import { ArrowRight, Sparkles, Shield, Trophy, CheckCircle, Users, Award, Star, Calendar } from 'lucide-react';
import { VolynLogo } from './VolynLogo';

interface CTASectionProps {
  onOpenTrialModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="scouting" className="relative w-full bg-[#A31E24] overflow-hidden text-white border-t-2 border-b-2 border-[#D4AF37]/50 shadow-2xl">
      {/* Background Subtle Heraldry Texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7D1116] via-[#A31E24] to-[#5C0D11] opacity-95" />
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      
      {/* Huge Watermark Crest in Banner */}
      <div className="absolute -right-16 -bottom-20 w-[460px] h-[460px] opacity-[0.08] pointer-events-none">
        <VolynLogo className="w-full h-full text-white" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Headline & Call to action */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-[#D4AF37]/50 text-[#F3E5AB] text-xs font-heading font-black tracking-widest uppercase mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>НАБІР ДО АКАДЕМІЇ • СЕЗОН 2026/2027</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95] mb-4 drop-shadow-md">
              СТАВАЙ ЧАСТИНОЮ <br className="hidden sm:block" />
              <span className="text-[#F3E5AB]">«ВОЛИНІ»</span>
            </h2>

            <p className="text-sm sm:text-base text-red-50/90 leading-relaxed font-normal mb-8 max-w-xl">
              Відкритий відбір юних футболістів від 6 до 17 років. Професійні наставники UEFA, регулярні виступи в Еліт-лізі ДЮФЛУ, сучасні поля «Авангарду» та прямий шлях у великий футбол.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="scouting-banner-cta-btn"
                onClick={onOpenTrialModal}
                className="px-8 py-4 rounded-full bg-white hover:bg-zinc-100 text-[#A31E24] font-heading font-black text-sm sm:text-base tracking-wider uppercase shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3 cursor-pointer border-2 border-white"
              >
                <Star className="w-4 h-4 fill-current text-[#A31E24]" />
                <span>Подати заявку на відбір</span>
                <ArrowRight className="w-4 h-4 text-[#A31E24]" />
              </button>

              <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-black/40 border border-white/20 text-xs font-mono text-zinc-200">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span>Заняття безкоштовні</span>
              </div>
            </div>
          </div>

          {/* Right: Clean 2x2 Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-black/35 border border-white/15 backdrop-blur-md text-left flex flex-col justify-between shadow-lg">
              <div className="font-heading text-3xl sm:text-4xl font-black text-[#F3E5AB]">350+</div>
              <div className="text-xs font-heading font-bold uppercase tracking-wider text-red-100 mt-1">Вихованців у школі</div>
            </div>

            <div className="p-5 rounded-2xl bg-black/35 border border-white/15 backdrop-blur-md text-left flex flex-col justify-between shadow-lg">
              <div className="font-heading text-3xl sm:text-4xl font-black text-white">100%</div>
              <div className="text-xs font-heading font-bold uppercase tracking-wider text-red-100 mt-1">Безкоштовна підготовка</div>
            </div>

            <div className="p-5 rounded-2xl bg-black/35 border border-white/15 backdrop-blur-md text-left flex flex-col justify-between shadow-lg">
              <div className="font-heading text-3xl sm:text-4xl font-black text-white">12</div>
              <div className="text-xs font-heading font-bold uppercase tracking-wider text-red-100 mt-1">Вікових категорій</div>
            </div>

            <div className="p-5 rounded-2xl bg-black/35 border border-white/15 backdrop-blur-md text-left flex flex-col justify-between shadow-lg">
              <div className="font-heading text-3xl sm:text-4xl font-black text-[#F3E5AB]">UEFA</div>
              <div className="text-xs font-heading font-bold uppercase tracking-wider text-red-100 mt-1">Ліцензовані наставники</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
