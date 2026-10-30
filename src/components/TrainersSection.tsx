import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Star, Calendar, MessageSquare, CheckCircle2, X, Phone, User, Send } from 'lucide-react';
import { TRAINERS } from '../data/fitnessData';
import { Trainer } from '../types/fitness';

interface TrainersSectionProps {
  onOpenBooking: (trainerName?: string) => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onOpenBooking }) => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('+998 ');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || clientPhone.length < 9) {
      alert('Iltimos, ismingiz va telefon raqamingizni to\'liq kiriting');
      return;
    }
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedTrainer(null);
      setClientName('');
    }, 2500);
  };

  return (
    <section id="trainers" className="py-24 bg-[#0A0E17] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4F639] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Xalqaro Standartdagi Murabbiylar</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-athletic font-extrabold uppercase text-white tracking-tight mb-4 text-balance">
            Natijangiz Uchun Mas'ul Professional Jamoa
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Har bir murabbiyimiz xalqaro sertifikatlar egasi, anatomik va fiziologik bilimga ega professional atletlardir.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer) => (
            <motion.div
              key={trainer.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0D131F] border border-white/10 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#D4F639]/40 transition-colors"
            >
              <div className="relative h-72 w-full overflow-hidden bg-slate-900">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-[#0D131F]/20 to-transparent" />
                
                {/* Rating overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[#D4F639] text-xs font-bold font-mono">
                  <Star className="w-3.5 h-3.5 fill-[#D4F639]" />
                  <span>{trainer.rating}</span>
                  <span className="text-slate-400 font-normal">({trainer.reviewsCount})</span>
                </div>

                <div className="absolute bottom-3 left-3">
                  <span className="text-[11px] font-semibold text-slate-300 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded">
                    {trainer.experience}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-athletic font-bold text-white uppercase tracking-wide">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-[#D4F639] font-medium mb-3">
                    {trainer.role}
                  </p>
                  <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                    {trainer.bio}
                  </p>

                  <div className="space-y-1.5 mb-5 pb-4 border-b border-white/10">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">
                      Yo'nalishlar:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialties.map((spec, i) => (
                        <span key={i} className="text-[11px] text-slate-300 bg-[#141C2B] px-2 py-0.5 rounded border border-white/5">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedTrainer(trainer)}
                  className="w-full py-2.5 px-3 bg-white/10 hover:bg-[#D4F639] hover:text-[#080B10] text-white rounded-md text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Mashg'ulot Yozilish</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trainer Booking Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-[#0E1522] border border-white/15 rounded-xl max-w-md w-full p-6 sm:p-7 shadow-2xl text-left"
            >
              <button
                onClick={() => setSelectedTrainer(null)}
                className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white"
                aria-label="Yopish"
              >
                <X className="w-5 h-5" />
              </button>

              {!bookingSuccess ? (
                <div>
                  <div className="flex items-center gap-3 mb-5 border-b border-white/10 pb-4">
                    <img
                      src={selectedTrainer.image}
                      alt={selectedTrainer.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border border-[#D4F639]"
                    />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#D4F639] tracking-wider block">
                        Individual Mashg'ulot Band Qilish
                      </span>
                      <h4 className="text-xl font-athletic font-bold text-white uppercase">
                        {selectedTrainer.name}
                      </h4>
                      <p className="text-xs text-slate-400">{selectedTrainer.role}</p>
                    </div>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                        Ismingiz:
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Masalan: Sardor"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full bg-[#141B27] border border-white/15 rounded-md px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4F639]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                        Telefon raqamingiz:
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+998 90 123 45 67"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full bg-[#141B27] border border-white/15 rounded-md px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4F639]"
                      />
                    </div>

                    <div className="p-3 bg-[#131A27] rounded-lg border border-white/10 text-xs text-slate-400">
                      <span className="font-semibold text-slate-200 block mb-0.5">Yutuqlar:</span>
                      <span>{selectedTrainer.achievements}</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 bg-[#D4F639] text-[#080B10] hover:bg-[#c2e22c] font-bold uppercase text-xs tracking-wider rounded-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Bron Qilishni Tasdiqlash</span>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-athletic font-bold text-white uppercase">
                    Muvaffaqiyatli Band Qilindi!
                  </h4>
                  <p className="text-xs text-slate-300">
                    Murabbiy <strong>{selectedTrainer.name}</strong> siz bilan 15 daqiqa ichida bog'lanib, mashg'ulot vaqtini kelishadi.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
