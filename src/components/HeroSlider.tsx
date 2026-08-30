import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause, Trophy, Calendar, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { HERO_SLIDES } from '../data/clubData';
import { VolynLogo } from './VolynLogo';

interface HeroSliderProps {
  onOpenTrialModal: () => void;
  onOpenTicketsModal: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenTrialModal, onOpenTicketsModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  const handleCtaClick = (link: string) => {
    if (link === '#scouting') {
      onOpenTrialModal();
    } else if (link === '#matches') {
      const el = document.getElementById('matches');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (link === '#news') {
      const el = document.getElementById('news');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (link === '#teams') {
      const el = document.getElementById('teams');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-slider-section"
      className="relative w-full h-[100dvh] min-h-[100dvh] sm:h-auto sm:min-h-[85vh] lg:min-h-[90vh] flex items-end justify-start overflow-hidden bg-[#111319]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Image Slides with Smooth Fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 z-0"
        >
          {currentSlide.video ? (
            <video
              key={currentSlide.video}
              src={currentSlide.video}
              poster={currentSlide.image}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.03]"
            />
          ) : (
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.03]"
            />
          )}
          {/* Subtle bottom-left gradient to highlight photography while keeping text crisp */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-45% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Pitch Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

      {/* Slide Content Container - Anchored at Bottom-Left */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20 sm:pb-28 lg:pb-32 flex flex-col justify-end h-full sm:h-auto">
        <div className="max-w-2xl text-left">
          {/* Club Chant Badge */}
          <motion.div
            key={`chant-${currentSlide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#A31E24] text-[10px] sm:text-xs font-heading font-black tracking-widest uppercase mb-3 shadow-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A31E24] animate-ping" />
            <span>ЧЕРВОНО-БІЛІ НАЗАВЖДИ!</span>
            <span className="text-zinc-300">•</span>
            <span className="text-zinc-700 font-extrabold">{currentSlide.highlightTag}</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            key={`sub-${currentSlide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[11px] sm:text-xs md:text-sm font-heading font-black uppercase tracking-[0.2em] text-[#F3E5AB] mb-1.5"
          >
            {currentSlide.subtitle}
          </motion.p>

          {/* Main Title - Compact Size & Two-Tone (Part White, Part Red) */}
          <motion.h1
            key={`title-${currentSlide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-black uppercase tracking-tight leading-[1.15] drop-shadow-md mb-3"
          >
            {(() => {
              const words = currentSlide.title.split(' ');
              if (words.length <= 2) {
                return (
                  <>
                    <span className="text-white">{words[0]} </span>
                    <span className="text-[#E52E38]">{words.slice(1).join(' ')}</span>
                  </>
                );
              }
              const mid = Math.ceil(words.length * 0.55);
              const firstPart = words.slice(0, mid).join(' ');
              const secondPart = words.slice(mid).join(' ');
              return (
                <>
                  <span className="text-white">{firstPart} </span>
                  <span className="text-[#E52E38]">{secondPart}</span>
                </>
              );
            })()}
          </motion.h1>

          {/* Description */}
          <motion.p
            key={`desc-${currentSlide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-zinc-200 max-w-2xl leading-relaxed mb-6 font-normal"
          >
            {currentSlide.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            key={`actions-${currentSlide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              id={`hero-primary-cta-${currentIndex}`}
              onClick={() => handleCtaClick(currentSlide.primaryCtaLink)}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#A31E24] hover:bg-[#b82229] text-white font-heading font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-[#A31E24]/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
            >
              <span>{currentSlide.primaryCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F3E5AB]" />
            </button>

            <button
              id={`hero-secondary-cta-${currentIndex}`}
              onClick={() => handleCtaClick(currentSlide.secondaryCtaLink)}
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white hover:bg-zinc-100 text-[#14151A] hover:text-[#A31E24] font-heading font-black text-xs sm:text-sm tracking-wider uppercase shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A31E24]" />
              <span>{currentSlide.secondaryCtaText}</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-5 left-0 right-0 z-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Dots Indicator */}
          <div id="hero-dots-container" className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  id={`hero-dot-${idx}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Перейти до слайду ${idx + 1}`}
                  className={`relative transition-all duration-300 rounded-full h-2 cursor-pointer ${
                    isActive
                      ? 'w-6 bg-[#D4AF37]'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              );
            })}

            {/* Play / Pause toggle */}
            <button
              id="hero-play-pause-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Пауза слайдшоу' : 'Відтворити слайдшоу'}
              className="ml-1 text-zinc-300 hover:text-white p-1 rounded-full transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 text-[#D4AF37]" />}
            </button>
          </div>

          {/* Borderless Compact Navigation Arrows */}
          <div className="flex items-center gap-1.5">
            <button
              id="hero-prev-btn"
              onClick={prevSlide}
              aria-label="Попередній слайд"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 text-zinc-900 hover:bg-[#A31E24] hover:text-white active:scale-95 transition-all shadow-md flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="hero-next-btn"
              onClick={nextSlide}
              aria-label="Наступний слайд"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 text-zinc-900 hover:bg-[#A31E24] hover:text-white active:scale-95 transition-all shadow-md flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
