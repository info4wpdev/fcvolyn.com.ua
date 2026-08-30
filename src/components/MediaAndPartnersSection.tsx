import React, { useState } from 'react';
import {
  Video,
  Image as ImageIcon,
  Play,
  ArrowRight,
  Handshake,
  Shield,
  Sparkles,
  Camera,
  ChevronRight,
} from 'lucide-react';
import { VolynLogo } from './VolynLogo';

export const MediaAndPartnersSection: React.FC = () => {
  const [selectedMediaType, setSelectedMediaType] = useState<'all' | 'photo' | 'video'>('all');
  const [showAll, setShowAll] = useState(false);

  const mediaItems = [
    {
      id: 'm-1',
      type: 'video',
      title: 'Огляд матчу Еліт-ліги: ФК Волинь Ю17 — Карпати (Львів) 3:1',
      date: '28 Серпня 2026',
      duration: '4:15',
      image: '/team-u17.jpg',
    },
    {
      id: 'm-2',
      type: 'photo',
      title: 'Фотозвіт: Ранкове тренування команди Ю16 на стадіоні «Авангард»',
      date: '25 Серпня 2026',
      photosCount: '24 фото',
      image: '/team-u16.jpg',
    },
    {
      id: 'm-3',
      type: 'video',
      title: 'Топ-5 найкрасивіших голів академії «Волинь» у весняній частині ДЮФЛУ',
      date: '20 Серпня 2026',
      duration: '3:40',
      image: '/team-u15.jpg',
    },
    {
      id: 'm-4',
      type: 'photo',
      title: 'Нагородження переможців дитячого кубка «Волинська весна — 2026»',
      date: '15 Серпня 2026',
      photosCount: '36 фото',
      image: '/team_u11.jpg',
    },
    {
      id: 'm-5',
      type: 'video',
      title: 'Сюжет: День відкритих дверей та тренування молодшої групи Ю12',
      date: '10 Серпня 2026',
      duration: '5:10',
      image: '/team-u14.jpg',
    },
    {
      id: 'm-6',
      type: 'photo',
      title: 'Випускний вечір академії: вручення дипломів юнакам Ю19',
      date: '02 Серпня 2026',
      photosCount: '48 фото',
      image: 'https://4wp.dev/fcvolyn/coaching-staff.jpg',
    },
  ];

  const filteredMedia = selectedMediaType === 'all'
    ? mediaItems
    : mediaItems.filter((m) => m.type === selectedMediaType);

  // Show only 3 items by default, or all if toggled
  const displayedMedia = showAll ? filteredMedia : filteredMedia.slice(0, 3);

  const partners = [
    { name: 'Луцька міська рада', category: 'Головний партнер', tier: 'Титульний' },
    { name: 'Волинська обласна асоціація футболу', category: 'Офіційний партнер', tier: 'Офіційний' },
    { name: 'Joma Sport Ukraine', category: 'Технічний спонсор', tier: 'Екіпірування' },
    { name: 'Волиньфарм', category: 'Медичний партнер', tier: 'Партнер' },
    { name: 'Західний Буг', category: 'Генеральний спонсор', tier: 'Генеральний' },
    { name: 'Деметра Агро', category: 'Офіційний партнер', tier: 'Партнер' },
  ];

  return (
    <>
      {/* 1. Media Section with 3 featured items & "Дивитись всі" */}
      <section id="media" className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-4 border-b-2 border-zinc-200">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-[#A31E24]" />
                <span className="text-xs font-heading font-extrabold uppercase tracking-[0.25em] text-[#A31E24]">
                  ФОТО, ВІДЕО ТА ТРАНСЛЯЦІЇ
                </span>
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#14151A] tracking-tight leading-none">
                МЕДІА-ЦЕНТР <span className="text-[#A31E24]">КЛУБУ</span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex p-1.5 rounded-full bg-zinc-100 border border-zinc-200">
                <button
                  onClick={() => setSelectedMediaType('all')}
                  className={`px-4 py-1.5 rounded-full text-xs font-heading font-black uppercase tracking-wider transition-all cursor-pointer ${
                    selectedMediaType === 'all'
                      ? 'bg-[#A31E24] text-white shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Все
                </button>
                <button
                  onClick={() => setSelectedMediaType('video')}
                  className={`px-4 py-1.5 rounded-full text-xs font-heading font-black uppercase tracking-wider transition-all cursor-pointer ${
                    selectedMediaType === 'video'
                      ? 'bg-[#A31E24] text-white shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Відео
                </button>
                <button
                  onClick={() => setSelectedMediaType('photo')}
                  className={`px-4 py-1.5 rounded-full text-xs font-heading font-black uppercase tracking-wider transition-all cursor-pointer ${
                    selectedMediaType === 'photo'
                      ? 'bg-[#A31E24] text-white shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Фото
                </button>
              </div>

              {/* Link: "Дивитись всі" */}
              <button
                id="view-all-media-btn"
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-zinc-900 hover:bg-[#A31E24] text-white text-xs font-heading font-black uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                <span>{showAll ? 'Згорнути' : 'Дивитись всі'}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showAll ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </div>

          {/* Exactly 3 columns grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedMedia.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#F8F9FB] border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#A31E24] text-white text-[10px] font-heading font-black uppercase flex items-center gap-1 shadow-md">
                      {item.type === 'video' ? <Video className="w-3 h-3" /> : <Camera className="w-3 h-3" />}
                      {item.type === 'video' ? item.duration : item.photosCount}
                    </span>
                  </div>

                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/95 text-[#A31E24] flex items-center justify-center shadow-xl group-hover:scale-115 transition-transform">
                        <Play className="w-5 h-5 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white/90 text-xs font-mono">
                    {item.date}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <h3 className="font-heading font-bold text-base text-zinc-900 leading-snug group-hover:text-[#A31E24] transition-colors line-clamp-2 mb-4">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-[#A31E24] font-heading font-black uppercase tracking-wider pt-2 border-t border-zinc-200">
                    <span>{item.type === 'video' ? 'Дивитися відео' : 'Переглянути альбом'}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom link: "Дивитись всі матеріали медіа-центру" */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-sm font-heading font-black uppercase tracking-wider text-[#A31E24] hover:text-[#800f14] transition-colors cursor-pointer"
            >
              <span>{showAll ? 'Показати менше' : 'Дивитись усі фото та відео матеріали'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
