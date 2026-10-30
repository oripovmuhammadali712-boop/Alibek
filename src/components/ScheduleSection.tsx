import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CalendarDays, Clock, MapPin, User, Check, Users } from 'lucide-react';
import { WEEKLY_SCHEDULE } from '../data/fitnessData';

export const ScheduleSection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('Dushanba');
  const [bookedSpots, setBookedSpots] = useState<{ [id: string]: boolean }>({});
  const [justBookedId, setJustBookedId] = useState<string | null>(null);

  const days = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'];
  const daySchedule = WEEKLY_SCHEDULE[selectedDay] || [];

  const handleBookSpot = (id: string) => {
    setBookedSpots((prev) => ({ ...prev, [id]: true }));
    setJustBookedId(id);
    setTimeout(() => {
      setJustBookedId(null);
    }, 3000);
  };

  return (
    <section id="schedule" className="py-24 bg-[#080B10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4F639] mb-3">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>Haftalik Mashg'ulotlar Grafigi</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-athletic font-extrabold uppercase text-white tracking-tight mb-4 text-balance">
            Jonli Darslar Jadvali
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            O'zingizga qulay kun va vaqtni tanlang. Guruh darslarida qatnashish uchun joyni oldindan band qiling.
          </p>

          {/* Days bar */}
          <div className="mt-8 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2">
            {days.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all whitespace-nowrap ${
                  selectedDay === day
                    ? 'bg-[#D4F639] text-[#080B10] shadow'
                    : 'bg-[#101622] text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule List */}
        <div className="bg-[#0C111A] rounded-xl border border-white/10 divide-y divide-white/5 overflow-hidden">
          {daySchedule.map((item) => {
            const isBooked = bookedSpots[item.id];
            const remainingSpots = isBooked ? item.availableSpots - 1 : item.availableSpots;

            return (
              <div
                key={item.id}
                className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  {/* Time Badge */}
                  <div className="flex items-center gap-2 text-[#D4F639] font-mono text-sm sm:text-base font-bold tabular-nums min-w-[140px]">
                    <Clock className="w-4 h-4 text-[#D4F639]" />
                    <span>{item.time}</span>
                  </div>

                  {/* Title and Room */}
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-lg font-athletic font-bold text-white uppercase tracking-wide">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-white/10 text-slate-300">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-1">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.room}</span>
                      </div>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-slate-500" />
                        <span className="text-slate-300">{item.trainer}</span>
                      </div>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <span>Yuklama: <strong className="text-slate-200">{item.intensity}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spot availability and Booking Action */}
                <div className="flex items-center justify-between sm:justify-end gap-5">
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Users className="w-3.5 h-3.5 text-slate-500" />
                      <span>Bo'sh joylar:</span>
                      <span className="font-mono font-bold text-white tabular-nums">
                        {remainingSpots} / {item.totalSpots}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleBookSpot(item.id)}
                    disabled={isBooked || remainingSpots <= 0}
                    className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                      isBooked
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : remainingSpots <= 0
                        ? 'bg-white/5 text-slate-500 cursor-not-allowed'
                        : 'bg-white/10 hover:bg-[#D4F639] hover:text-[#080B10] text-white'
                    }`}
                  >
                    {isBooked ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Band Qilindi</span>
                      </>
                    ) : remainingSpots <= 0 ? (
                      <span>Joy Qolmagan</span>
                    ) : (
                      <span>Joy Band Qilish</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {justBookedId && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-lg text-xs text-emerald-400 text-center"
          >
            Sizning joyingiz tasdiqlandi! Mashg'ulotga 10 daqiqa oldin kelishingiz so'raladi.
          </motion.div>
        )}
      </div>
    </section>
  );
};
