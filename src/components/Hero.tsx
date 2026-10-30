import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle2, Flame, Trophy, Clock } from 'lucide-react';
import { HERO_IMAGE } from '../data/fitnessData';

interface HeroProps {
  onExplorePricing: () => void;
  onOpenTourModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePricing, onOpenTourModal }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Cinematic Photo with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Pulse Fitness Club mashg'ulot maydoni"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-slow"
        />
        {/* Measured dark overlay for WCAG AA 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/80 to-[#080B10]/50" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#080B10]/60 to-[#080B10]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10">
        <div className="max-w-3xl">
          {/* Subtle text kicker (no pill badge) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D4F639] mb-4"
          >
            <span>Toshkentning eng ilg'or fitnes klubi</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300">24/7 Premium Mashg'ulotlar</span>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-athletic font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-6 text-balance"
          >
            O'zingizning Eng Kuchli <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4F639] to-[#97D700]">
              Talqiningizni Yarating
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl"
          >
            Professional uskunalar, xalqaro toifadagi murabbiylar, 25 metrlik olimpiya basseyni va tiklanish SPA majmuasi. Jismoniy imkoniyatlaringiz chegarasini kengaytiring.
          </motion.p>

          {/* Primary Action & Tour Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <button
              onClick={onExplorePricing}
              className="flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#080B10] bg-[#D4F639] hover:bg-[#c2e22c] rounded-md transition-all duration-200 shadow-[0_0_30px_rgba(212,246,57,0.35)] hover:shadow-[0_0_40px_rgba(212,246,57,0.5)] active:scale-95 whitespace-nowrap"
            >
              <span>Abonement Tanlash & Narxlar</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenTourModal}
              className="flex items-center justify-center gap-3 px-6 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-md backdrop-blur-sm transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <Play className="w-4 h-4 fill-white text-white" />
              <span>Zallarni Tomosha Qilish</span>
            </button>
          </motion.div>

          {/* Value highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4F639]" />
              <span>Birinchi mashg'ulot test tashrifi</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4F639]" />
              <span>Payme, Click & barcha to'lovlar</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4F639]" />
              <span>Bepul muzlatish kafolati</span>
            </div>
          </motion.div>
        </div>

        {/* 4-Column Metric Strip below hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider font-semibold">
              <Trophy className="w-4 h-4 text-[#D4F639]" />
              <span>Klub a'zolari</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              3,850<span className="text-[#D4F639]">+</span>
            </div>
            <p className="text-xs text-slate-400">Doimiy natijaga erishgan sportchilar</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider font-semibold">
              <Flame className="w-4 h-4 text-[#D4F639]" />
              <span>Zal maydoni</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              4,500 <span className="text-sm font-sans font-normal text-slate-400">m²</span>
            </div>
            <p className="text-xs text-slate-400">4 ta zamonaviy filillarda</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider font-semibold">
              <Trophy className="w-4 h-4 text-[#D4F639]" />
              <span>Professional murabbiylar</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              28<span className="text-[#D4F639]">+</span>
            </div>
            <p className="text-xs text-slate-400">Xalqaro darajadagi mutaxassislar</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider font-semibold">
              <Clock className="w-4 h-4 text-[#D4F639]" />
              <span>Kirish tartibi</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              24<span className="text-slate-400 font-sans text-xl">/</span>7
            </div>
            <p className="text-xs text-slate-400">Istagan vaqtda erkin mashg'ulot</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
