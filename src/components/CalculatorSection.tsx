import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Activity, Flame, Dumbbell, HeartPulse, Sparkles, ArrowRight } from 'lucide-react';

interface CalculatorProps {
  onSelectProgramCTA: () => void;
}

export const CalculatorSection: React.FC<CalculatorProps> = ({ onSelectProgramCTA }) => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState(178);
  const [weight, setWeight] = useState(76);
  const [age, setAge] = useState(25);
  const [activity, setActivity] = useState<number>(1.55); // 1.2 sedentary, 1.375 light, 1.55 moderate, 1.725 very active
  const [goal, setGoal] = useState<'loss' | 'maintain' | 'muscle'>('muscle');

  // BMI Calculation: weight / (height_m ^ 2)
  const heightM = height / 100;
  const bmi = Number((weight / (heightM * heightM)).toFixed(1));

  // BMI Category & Color
  let bmiCategory = "Me'yorda (Sog'lom)";
  let bmiColor = 'text-emerald-400';
  let bmiPercent = 50;

  if (bmi < 18.5) {
    bmiCategory = "Vazn yetishmovchiligi";
    bmiColor = 'text-sky-400';
    bmiPercent = 20;
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiCategory = "Ideal sog'lom vazn";
    bmiColor = 'text-[#D4F639]';
    bmiPercent = 45;
  } else if (bmi >= 25 && bmi < 30) {
    bmiCategory = "Ortiqcha vazn";
    bmiColor = 'text-amber-400';
    bmiPercent = 70;
  } else {
    bmiCategory = "Semizlik darajasi";
    bmiColor = 'text-rose-400';
    bmiPercent = 90;
  }

  // BMR (Mifflin-St Jeor Equation)
  // Male: 10*W + 6.25*H - 5*A + 5
  // Female: 10*W + 6.25*H - 5*A - 161
  const bmr = gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;

  // Maintenance calories
  const tdee = Math.round(bmr * activity);

  // Goal Calories
  let targetCalories = tdee;
  if (goal === 'loss') targetCalories = Math.round(tdee - 450);
  if (goal === 'muscle') targetCalories = Math.round(tdee + 350);

  // Protein grams: ~1.8g to 2.2g per kg for athletes
  const proteinGrams = Math.round(weight * (goal === 'muscle' ? 2.0 : 1.8));
  const fatGrams = Math.round((targetCalories * 0.25) / 9);
  const carbGrams = Math.round((targetCalories - (proteinGrams * 4 + fatGrams * 9)) / 4);

  return (
    <section id="calculator" className="py-24 bg-[#0A0E17] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4F639] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Fitnes & Metabolizm Diagnostikasi</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-athletic font-extrabold uppercase text-white tracking-tight mb-4 text-balance">
            Tana Ko'rsatkichlaringizni Hisoblang
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            BMI indeksi, asosiy metabolizm (BMR) va maqsadingizga mos keluvchi kunlik kaloriya hamda oqsil miqdorini 30 soniyada aniqlang.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#0E1522] rounded-xl border border-white/10 p-6 sm:p-8 space-y-6">
            {/* Gender Switch */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Jinsingizni tanlang:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-3 px-4 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border ${
                    gender === 'male'
                      ? 'border-[#D4F639] bg-[#D4F639]/10 text-white shadow-sm'
                      : 'border-white/10 bg-[#121927] text-slate-400 hover:text-white'
                  }`}
                >
                  Erkak
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-3 px-4 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border ${
                    gender === 'female'
                      ? 'border-[#D4F639] bg-[#D4F639]/10 text-white shadow-sm'
                      : 'border-white/10 bg-[#121927] text-slate-400 hover:text-white'
                  }`}
                >
                  Ayol
                </button>
              </div>
            </div>

            {/* Height & Weight Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase text-slate-300">Bo'yingiz:</span>
                  <span className="font-mono font-bold text-sm text-[#D4F639] tabular-nums">{height} sm</span>
                </div>
                <input
                  type="range"
                  min="140"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-[#1B2435] rounded-lg appearance-none cursor-pointer accent-[#D4F639]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>140 sm</span>
                  <span>180 sm</span>
                  <span>220 sm</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase text-slate-300">Vazningiz:</span>
                  <span className="font-mono font-bold text-sm text-[#D4F639] tabular-nums">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="160"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2 bg-[#1B2435] rounded-lg appearance-none cursor-pointer accent-[#D4F639]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>40 kg</span>
                  <span>100 kg</span>
                  <span>160 kg</span>
                </div>
              </div>
            </div>

            {/* Age */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase text-slate-300">Yoshingiz:</span>
                <span className="font-mono font-bold text-sm text-[#D4F639] tabular-nums">{age} yosh</span>
              </div>
              <input
                type="range"
                min="16"
                max="75"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full h-2 bg-[#1B2435] rounded-lg appearance-none cursor-pointer accent-[#D4F639]"
              />
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Haftalik faollik darajasi:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setActivity(1.2)}
                  className={`p-3 rounded-md border text-left transition-all ${
                    activity === 1.2
                      ? 'border-[#D4F639] bg-[#D4F639]/10 text-white'
                      : 'border-white/10 bg-[#121927] text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold text-slate-200">Kam harakat</div>
                  <div className="text-[10px] text-slate-500">Ofis ishi, mashqsiz</div>
                </button>
                <button
                  type="button"
                  onClick={() => setActivity(1.55)}
                  className={`p-3 rounded-md border text-left transition-all ${
                    activity === 1.55
                      ? 'border-[#D4F639] bg-[#D4F639]/10 text-white'
                      : 'border-white/10 bg-[#121927] text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold text-slate-200">O'rtacha faol</div>
                  <div className="text-[10px] text-slate-500">Haftada 3-4 kun mashq</div>
                </button>
                <button
                  type="button"
                  onClick={() => setActivity(1.725)}
                  className={`p-3 rounded-md border text-left transition-all ${
                    activity === 1.725
                      ? 'border-[#D4F639] bg-[#D4F639]/10 text-white'
                      : 'border-white/10 bg-[#121927] text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold text-slate-200">Yuqori atletik</div>
                  <div className="text-[10px] text-slate-500">Haftada 5-6 kun qattiq mashq</div>
                </button>
              </div>
            </div>

            {/* Fitness Goal */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Asosiy fitnes maqsadingiz:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setGoal('loss')}
                  className={`py-2.5 px-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all border text-center ${
                    goal === 'loss'
                      ? 'border-[#D4F639] bg-[#D4F639]/15 text-[#D4F639]'
                      : 'border-white/10 bg-[#121927] text-slate-400 hover:text-white'
                  }`}
                >
                  Yog' Yoqish (Ozish)
                </button>
                <button
                  type="button"
                  onClick={() => setGoal('maintain')}
                  className={`py-2.5 px-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all border text-center ${
                    goal === 'maintain'
                      ? 'border-[#D4F639] bg-[#D4F639]/15 text-[#D4F639]'
                      : 'border-white/10 bg-[#121927] text-slate-400 hover:text-white'
                  }`}
                >
                  Vazn Saqlash
                </button>
                <button
                  type="button"
                  onClick={() => setGoal('muscle')}
                  className={`py-2.5 px-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all border text-center ${
                    goal === 'muscle'
                      ? 'border-[#D4F639] bg-[#D4F639]/15 text-[#D4F639]'
                      : 'border-white/10 bg-[#121927] text-slate-400 hover:text-white'
                  }`}
                >
                  Mushak Yig'ish
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Column (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#111827] to-[#0A0E17] rounded-xl border border-white/15 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase font-bold text-[#D4F639] tracking-wider block mb-1">
                Sizning Natijalaringiz
              </span>
              <h3 className="text-xl font-athletic font-bold text-white uppercase">
                Metabolizm & Tana Xaritasi
              </h3>
            </div>

            {/* BMI Display Card */}
            <div className="bg-[#141E2F] rounded-lg p-5 border border-white/10">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-xs text-slate-400 block uppercase">BMI Tana Massasi Indeksi</span>
                  <span className={`text-4xl font-extrabold font-mono tabular-nums tracking-tight ${bmiColor}`}>
                    {bmi}
                  </span>
                </div>
                <span className={`text-xs font-bold uppercase px-2.5 py-1 rounded bg-white/10 ${bmiColor}`}>
                  {bmiCategory}
                </span>
              </div>

              {/* Visual gauge bar */}
              <div className="w-full bg-[#080B10] h-2 rounded-full overflow-hidden mt-3">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 via-[#D4F639] to-rose-400 transition-all duration-300"
                  style={{ width: `${Math.min(100, Math.max(10, bmiPercent))}%` }}
                />
              </div>
            </div>

            {/* Calorie & Macro Target Breakdown */}
            <div className="space-y-3">
              <div className="bg-[#141E2F] rounded-lg p-4 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Flame className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Kunlik tavsiya kaloriya</span>
                    <span className="text-xs text-slate-300">Maqsadga erishish uchun</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold font-mono text-white tabular-nums">
                    {targetCalories}
                  </span>
                  <span className="text-xs text-slate-400 ml-1">kkal</span>
                </div>
              </div>

              {/* Macros 3-Grid */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-[#141E2F] p-3 rounded-lg border border-white/10">
                  <span className="text-[10px] uppercase text-slate-400 block">Oqsil (Protein)</span>
                  <span className="text-lg font-bold font-mono text-[#D4F639] tabular-nums">{proteinGrams}g</span>
                  <span className="text-[10px] text-slate-500 block">mushak tiklash</span>
                </div>
                <div className="bg-[#141E2F] p-3 rounded-lg border border-white/10">
                  <span className="text-[10px] uppercase text-slate-400 block">Uglevodlar</span>
                  <span className="text-lg font-bold font-mono text-sky-400 tabular-nums">{carbGrams}g</span>
                  <span className="text-[10px] text-slate-500 block">energiya</span>
                </div>
                <div className="bg-[#141E2F] p-3 rounded-lg border border-white/10">
                  <span className="text-[10px] uppercase text-slate-400 block">Sog'lom Yog'</span>
                  <span className="text-lg font-bold font-mono text-amber-400 tabular-nums">{fatGrams}g</span>
                  <span className="text-[10px] text-slate-500 block">gormonlar</span>
                </div>
              </div>
            </div>

            {/* Recommended Club Program */}
            <div className="p-4 bg-[#D4F639]/10 rounded-lg border border-[#D4F639]/30 text-xs">
              <span className="font-bold text-[#D4F639] uppercase tracking-wide block mb-1">
                Tavsiya etilgan dastur:
              </span>
              <p className="text-slate-300 mb-3">
                {goal === 'muscle'
                  ? 'Titan Strength va Pro Athlete tarifi — og\'ir atletika hamda individual murabbiy nazorati.'
                  : goal === 'loss'
                  ? 'Metabolic Fire HIIT va 25m basseyn — tezkor yog\' yoqish va chidamlilik.'
                  : 'Zen Flow Pilates va har tomonlama fitnes rejasi.'}
              </p>
              <button
                type="button"
                onClick={onSelectProgramCTA}
                className="w-full py-2.5 px-4 bg-[#D4F639] text-[#080B10] hover:bg-[#c2e22c] font-bold uppercase rounded-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Abonementlar Bo'limiga O'tish</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
