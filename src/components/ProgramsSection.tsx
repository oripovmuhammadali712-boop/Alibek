import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, Flame, Timer, UserCheck, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { WORKOUT_PROGRAMS } from '../data/fitnessData';
import { WorkoutProgram } from '../types/fitness';

interface ProgramsSectionProps {
  onBookTrial: (programTitle: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onBookTrial }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<WorkoutProgram | null>(null);

  const categories = [
    { id: 'all', label: 'Barchasi' },
    { id: 'strength', label: 'Kuch & Mushak' },
    { id: 'cardio', label: 'Kardio & Yog\' Yoqish' },
    { id: 'combat', label: 'Boks & Jangovar' },
    { id: 'recovery', label: 'Pilates & Yoga' },
    { id: 'swimming', label: 'Basseyn & Suv' },
  ];

  const filteredPrograms = selectedCategory === 'all'
    ? WORKOUT_PROGRAMS
    : WORKOUT_PROGRAMS.filter((p) => p.category === selectedCategory);

  return (
    <section id="programs" className="py-24 bg-[#080B10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4F639] mb-3">
              <Dumbbell className="w-3.5 h-3.5" />
              <span>Har Bir Maqsad Uchun Rejalar</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-athletic font-extrabold uppercase text-white tracking-tight text-balance">
              Professional Mashg'ulot Dasturlari
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Yuqori intensivlikdagi kardio mashqlardan tortib, pauerlifting va tiklanish yoga seanslarigacha.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#101622] rounded-lg border border-white/10 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#D4F639] text-[#080B10] shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program, idx) => {
            const isFeatured = idx === 0;
            return (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`group relative bg-[#0C111A] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {program.image && (
                  <div className={`relative w-full overflow-hidden ${isFeatured ? 'h-64 sm:h-80' : 'h-52'}`}>
                    <img
                      src={program.image}
                      alt={program.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C111A] via-[#0C111A]/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 text-[11px] font-bold uppercase rounded bg-black/70 backdrop-blur-md text-white border border-white/10">
                        {program.level}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {!program.image && (
                      <div className="mb-4">
                        <span className="px-2.5 py-1 text-[11px] font-bold uppercase rounded bg-white/10 text-slate-300">
                          {program.level}
                        </span>
                      </div>
                    )}

                    <h3 className="text-xl sm:text-2xl font-athletic font-bold text-white uppercase tracking-wide group-hover:text-[#D4F639] transition-colors mb-2">
                      {program.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 mb-6 line-clamp-2 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Metadata tags (unboxed with separators) */}
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 mb-6 pb-6 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <Timer className="w-3.5 h-3.5 text-[#D4F639]" />
                        <span className="font-mono tabular-nums">{program.duration}</span>
                      </div>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <div className="flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-amber-400" />
                        <span className="font-mono tabular-nums">{program.caloriesBurn}</span>
                      </div>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <div className="flex items-center gap-1.5">
                        <UserCheck className="w-3.5 h-3.5 text-sky-400" />
                        <span>{program.trainerName}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveModalProgram(program)}
                      className="text-xs font-semibold text-slate-300 hover:text-white underline underline-offset-4 cursor-pointer"
                    >
                      Batafsil ma'lumot
                    </button>

                    <button
                      type="button"
                      onClick={() => onBookTrial(program.title)}
                      className="flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-[#D4F639] hover:text-[#080B10] text-white rounded-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <span>Yozilish</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Program Details Modal */}
      <AnimatePresence>
        {activeModalProgram && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-[#0E1522] border border-white/15 rounded-xl max-w-lg w-full p-6 sm:p-7 shadow-2xl text-left"
            >
              <button
                onClick={() => setActiveModalProgram(null)}
                className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white"
                aria-label="Yopish"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-[11px] font-bold uppercase text-[#D4F639] tracking-wider block">
                  {activeModalProgram.level} · {activeModalProgram.duration}
                </span>
                <h3 className="text-2xl font-athletic font-bold text-white uppercase mt-1">
                  {activeModalProgram.title}
                </h3>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {activeModalProgram.description}
              </p>

              <div className="space-y-4 mb-6 bg-[#131B29] p-4 rounded-lg border border-white/10 text-xs">
                <div>
                  <span className="text-slate-400 uppercase font-semibold block mb-1">
                    Ishlanadigan mushak guruhlari:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProgram.focusMuscles.map((m, i) => (
                      <span key={i} className="px-2 py-1 bg-white/10 rounded text-slate-200">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                  <div>
                    <span className="text-slate-400 block uppercase">Sarflanadigan kaloriya:</span>
                    <span className="font-mono font-bold text-amber-400 text-sm">
                      {activeModalProgram.caloriesBurn}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase">Mas'ul Murabbiy:</span>
                    <span className="font-semibold text-white text-sm">
                      {activeModalProgram.trainerName}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  const title = activeModalProgram.title;
                  setActiveModalProgram(null);
                  onBookTrial(title);
                }}
                className="w-full py-3.5 px-4 bg-[#D4F639] text-[#080B10] hover:bg-[#c2e22c] font-bold uppercase text-xs sm:text-sm tracking-wider rounded-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Ushbu Dasturga Yozilish (Sinov Mashg'uloti)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
