import React from 'react';
import { motion } from 'motion/react';
import { Quote, Trophy, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/fitnessData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0E17] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4F639] mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Haqiqiy Natijalar & Isbotlar</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-athletic font-extrabold uppercase text-white tracking-tight mb-4 text-balance">
            Klubimiz A'zolari Qanday Natijaga Erishdi?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Har bir muvaffaqiyat ortida qat'iyat, professional murabbiy nazorati va doimiy intizom yotadi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0D131F] border border-white/10 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4F639] bg-[#D4F639]/10 py-1 px-2.5 rounded border border-[#D4F639]/20">
                    {item.result}
                  </span>
                  <Quote className="w-5 h-5 text-slate-600" />
                </div>

                <p className="text-sm text-slate-300 italic mb-6 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tasdiqlangan</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
