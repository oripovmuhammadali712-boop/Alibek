import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ChevronRight, ChevronLeft, MapPin } from 'lucide-react';
import { GYM_FLOOR_IMAGE, RECOVERY_ZONE_IMAGE, HERO_IMAGE } from '../data/fitnessData';

interface ClubTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: () => void;
}

export const ClubTourModal: React.FC<ClubTourModalProps> = ({ isOpen, onClose, onSelectPlan }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    {
      title: 'Trenajyor Zali va Kardio Panoramasi',
      desc: 'Panoramik oynalar bilan o\'ralgan 1,800 m² keng maydon, zamonaviy erkin og\'irliklar va eng yangi kardio platformalari.',
      image: GYM_FLOOR_IMAGE,
      tag: 'Katta Trenajyor Zali',
    },
    {
      title: 'Olimpiya Erkin Og\'irliklar & CrossFit Zonasi',
      desc: 'Professional shtangalar, platformalar, pauerlifting stoykalari va funksional mashqlar uchun maxsus rezina qoplama.',
      image: HERO_IMAGE,
      tag: 'Heavy Lifting Zone',
    },
    {
      title: 'Cold Plunge & Fin Saunasi (Recovery SPA)',
      desc: 'Kuchli mashg\'ulotdan so\'ng mushaklarni tez tiklash uchun 10°C muzli vanna, sadr yog\'ochli bug\'li sauna va dam olish hududi.',
      image: RECOVERY_ZONE_IMAGE,
      tag: 'Tiklanish & SPA Majmuasi',
    },
  ];

  const current = slides[activeSlide];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-[#0E1522] border border-white/15 rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl text-left"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white bg-black/60 rounded-full hover:bg-black/80 transition-colors"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Slide Visual */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-black">
          <img
            src={current.image}
            alt={current.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1522] via-[#0E1522]/30 to-transparent" />
          
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-bold uppercase rounded bg-black/70 backdrop-blur-md text-[#D4F639] border border-[#D4F639]/30">
              {current.tag}
            </span>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 flex items-center justify-between px-3 w-full pointer-events-none">
            <button
              onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
              className="pointer-events-auto p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0))}
              className="pointer-events-auto p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
              <span>{activeSlide + 1} / {slides.length}</span>
              <span aria-hidden="true">·</span>
              <span className="text-white">Pulse Fitness Club infratuzilmasi</span>
            </div>
            <h3 className="text-2xl font-athletic font-bold text-white uppercase mb-2">
              {current.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {current.desc}
            </p>
          </div>

          <div className="shrink-0 flex flex-col gap-2">
            <button
              onClick={() => {
                onClose();
                onSelectPlan();
              }}
              className="px-6 py-3 bg-[#D4F639] text-[#080B10] font-bold uppercase text-xs tracking-wider rounded-md hover:bg-[#c2e22c] transition-colors whitespace-nowrap cursor-pointer"
            >
              Abonement Tanlash
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
