import React from 'react';
import { ArrowUp, MapPin, Phone, Clock, Mail, ShieldCheck } from 'lucide-react';
import { BRANCHES } from '../data/fitnessData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070B] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#D4F639] transform -skew-x-12 inline-block" />
              <span className="font-athletic text-2xl font-black tracking-wider text-white">
                PULSE <span className="text-[#D4F639]">FIT</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Toshkentdagi yuqori darajadagi zamonaviy fitnes klublar tarmog'i. Professional murabbiylar, 24/7 erkin kirish, basseyin va ilg'or tiklanish majmuasi.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-[#D4F639]" />
              <a href="tel:+998712004488" className="hover:text-white font-mono font-semibold">
                +998 (71) 200-44-88
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-[#D4F639]" />
              <span className="font-mono">info@pulsefit.uz</span>
            </div>
          </div>

          {/* Branches (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-athletic text-sm uppercase font-bold text-white tracking-wider mb-2">
              Klub Filiallari
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {BRANCHES.map((b) => (
                <div key={b.id} className="bg-[#0C1017] p-3 rounded-lg border border-white/5 space-y-1">
                  <div className="font-semibold text-white">{b.name}</div>
                  <div className="flex items-start gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-[#D4F639] shrink-0" />
                    <span className="text-[#D4F639] font-medium">{b.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links & Hours (1 col) */}
          <div className="space-y-3">
            <h4 className="font-athletic text-sm uppercase font-bold text-white tracking-wider mb-2">
              Bo'limlar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Dasturlar & Mashqlar
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Abonementlar & Tariflar
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  BMI & Kaloriya Kalkulyatori
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-white transition-colors">
                  Murabbiylar Jamoasi
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-white transition-colors">
                  Darslar Jadvali
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with payment badges & copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span>© 2026 Pulse Fitness Club. Barcha huquqlar himoyalangan.</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">O'zbekiston</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">Qabul qilinadi:</span>
              <span className="font-semibold text-slate-300">Payme</span>
              <span>·</span>
              <span className="font-semibold text-sky-400">Click</span>
              <span>·</span>
              <span className="font-semibold text-emerald-400">Uzcard</span>
              <span>·</span>
              <span className="font-semibold text-amber-400">Humo</span>
              <span>·</span>
              <span className="font-semibold text-blue-400">Visa / MC</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Yuqoriga qaytish"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
