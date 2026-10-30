import React from 'react';
import { motion } from 'motion/react';
import { X, QrCode, ShieldCheck, Printer, Calendar, MapPin, CreditCard, Sparkles } from 'lucide-react';
import { MemberSubscription } from '../types/fitness';

interface MyPassModalProps {
  subscription: MemberSubscription;
  onClose: () => void;
  onRenew: () => void;
}

export const MyPassModal: React.FC<MyPassModalProps> = ({
  subscription,
  onClose,
  onRenew,
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-[#0E1420] border border-white/15 rounded-xl max-w-md w-full p-6 sm:p-7 shadow-2xl text-left"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Faol Klub A'zoligi</span>
          </div>
          <h3 className="text-2xl font-athletic font-bold text-white uppercase">
            Raqamli Fitnes Pasporti
          </h3>
          <p className="text-xs text-slate-400">
            Turniketdan o'tishda QR-kodni skanerga tuting
          </p>
        </div>

        {/* The Card */}
        <div className="bg-gradient-to-br from-[#121B2A] to-[#0A0E17] border border-[#D4F639]/40 rounded-xl p-6 shadow-xl relative overflow-hidden mb-6">
          <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#D4F639] tracking-wider block">
                Tarif
              </span>
              <span className="font-athletic text-xl font-bold text-white">
                {subscription.planName}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block uppercase">ID Raqam</span>
              <span className="font-mono text-sm font-bold text-white tabular-nums">
                {subscription.memberId}
              </span>
            </div>
          </div>

          <div className="space-y-2.5 text-xs mb-5">
            <div className="flex justify-between">
              <span className="text-slate-400">A'zo ismi:</span>
              <span className="font-semibold text-white">{subscription.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Filial:</span>
              <span className="font-semibold text-white">{subscription.branch}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Boshlanish:</span>
              <span className="font-mono text-white">{subscription.startDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Tugash sanasi:</span>
              <span className="font-mono font-bold text-[#D4F639]">{subscription.expiryDate}</span>
            </div>
          </div>

          {/* QR Code */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="p-2.5 bg-white rounded-lg shadow">
              <QrCode className="w-16 h-16 text-black" />
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block uppercase">To'langan summa</span>
              <span className="font-mono font-bold text-white text-sm">
                {subscription.currency === 'UZS'
                  ? `${new Intl.NumberFormat('uz-UZ').format(subscription.amountPaid)} so'm`
                  : `$${subscription.amountPaid}`}
              </span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">
                {subscription.paymentMethod} orqali to'langan
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => window.print()}
            className="flex-1 py-2.5 px-3 bg-white/10 hover:bg-white/15 text-white rounded-md text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Chop etish</span>
          </button>
          <button
            onClick={() => {
              onClose();
              onRenew();
            }}
            className="flex-1 py-2.5 px-3 bg-[#D4F639] text-[#080B10] hover:bg-[#c2e22c] rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Muddatni Uzaytirish
          </button>
        </div>
      </motion.div>
    </div>
  );
};
