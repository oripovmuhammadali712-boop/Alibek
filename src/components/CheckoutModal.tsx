import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ShieldCheck, CreditCard, QrCode, Sparkles, Building, User, Phone, Mail, ArrowRight, Loader2, Download, Printer } from 'lucide-react';
import { PricingPlan, BillingCycle, Currency, MemberSubscription } from '../types/fitness';
import { BRANCHES } from '../data/fitnessData';

interface CheckoutModalProps {
  plan: PricingPlan | null;
  cycle: BillingCycle;
  currency: Currency;
  onClose: () => void;
  onSuccess: (subscription: MemberSubscription) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  plan,
  cycle,
  currency,
  onClose,
  onSuccess,
}) => {
  const [branch, setBranch] = useState(BRANCHES[0].name);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [email, setEmail] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'payme' | 'click' | 'uzcard' | 'visa' | 'cash'>('payme');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedSub, setCompletedSub] = useState<MemberSubscription | null>(null);

  if (!plan) return null;

  // Base price
  const basePrice = currency === 'UZS'
    ? (cycle === 'monthly' ? plan.priceUzsMonthly : plan.priceUzsAnnual)
    : (cycle === 'monthly' ? plan.priceUsdMonthly : plan.priceUsdAnnual);

  const discountAmount = Math.round((basePrice * discountPercent) / 100);
  const finalPrice = basePrice - discountAmount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'FIT2026' || code === 'PULSE' || code === 'START') {
      setDiscountPercent(15);
      setPromoApplied(true);
    } else {
      setPromoError('Ushbu promokod yaroqsiz yoki muddati tugagan');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || phone.length < 9) {
      alert('Iltimos, ismingiz va to\'g\'ri telefon raqamingizni kiriting');
      return;
    }

    setIsProcessing(true);

    // Simulate realistic payment gateway processing
    setTimeout(() => {
      setIsProcessing(false);
      const memberId = 'PF-' + Math.floor(10000 + Math.random() * 90000);
      const now = new Date();
      const expiry = new Date(now);
      if (cycle === 'monthly') {
        expiry.setMonth(expiry.getMonth() + 1);
      } else {
        expiry.setFullYear(expiry.getFullYear() + 1);
      }

      const newSub: MemberSubscription = {
        memberId,
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim() || 'oripovmuhammadali712@gmail.com',
        planName: plan.name,
        branch,
        paymentMethod: paymentMethod.toUpperCase(),
        amountPaid: finalPrice,
        currency,
        cycle,
        startDate: now.toLocaleDateString('uz-UZ'),
        expiryDate: expiry.toLocaleDateString('uz-UZ'),
        qrToken: `PULSE-VIP-TOKEN-${memberId}-${Date.now()}`,
      };

      setCompletedSub(newSub);
      onSuccess(newSub);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-[#0E131C] border border-white/15 rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-md transition-colors"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        {!completedSub ? (
          <div>
            {/* Header */}
            <div className="mb-6 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D4F639] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Abonementni Rasmiylashtirish</span>
              </div>
              <h3 className="text-2xl font-athletic font-bold text-white uppercase tracking-wide">
                {plan.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Davomiyligi: <strong className="text-slate-200">{cycle === 'monthly' ? '1 Oylik to\'lov' : '1 Yillik to\'lov (-20% chegirma bilan)'}</strong>
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              {/* Branch Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5 flex items-center gap-2">
                  <Building className="w-3.5 h-3.5 text-[#D4F639]" />
                  <span>Mashg'ulot o'tadigan filialni tanlang:</span>
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full bg-[#141B27] border border-white/15 rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4F639]"
                >
                  {BRANCHES.map((b) => (
                    <option key={b.id} value={b.name} className="bg-[#141B27]">
                      {b.name} — ({b.hours})
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5 flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#D4F639]" />
                    <span>Ism va Familiyangiz:</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masalan: Muhammadali Oripov"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#141B27] border border-white/15 rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4F639]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D4F639]" />
                    <span>Telefon raqamingiz:</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+998 90 123 45 67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#141B27] border border-white/15 rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4F639]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#D4F639]" />
                  <span>Elektron pochta (Raqamli karta va chek uchun):</span>
                </label>
                <input
                  type="email"
                  placeholder="oripovmuhammadali712@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#141B27] border border-white/15 rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4F639]"
                />
              </div>

              {/* Promo Code section */}
              <div className="p-3 bg-[#121824] rounded-lg border border-white/10">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promokod bormi? (FIT2026)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={promoApplied}
                    className="flex-1 bg-[#182030] border border-white/15 rounded-md px-3 py-2 text-xs uppercase font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#D4F639]"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    disabled={promoApplied}
                    className="px-4 py-2 text-xs font-bold uppercase rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    {promoApplied ? 'Qo\'llandi' : 'Qo\'llash'}
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-xs text-[#D4F639] font-medium mt-1.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Promokod muvaffaqiyatli qabul qilindi: -15% chegirma berildi!</span>
                  </p>
                )}
                {promoError && (
                  <p className="text-xs text-rose-400 font-medium mt-1.5">{promoError}</p>
                )}
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-2 flex items-center gap-2">
                  <CreditCard className="w-3.5 h-3.5 text-[#D4F639]" />
                  <span>To'lov usulini tanlang:</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('payme')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      paymentMethod === 'payme'
                        ? 'border-[#D4F639] bg-[#D4F639]/10 text-white ring-1 ring-[#D4F639]'
                        : 'border-white/10 bg-[#141B27] text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className="font-bold text-xs">Payme</div>
                    <div className="text-[10px] text-slate-400">0% komissiya</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('click')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      paymentMethod === 'click'
                        ? 'border-sky-400 bg-sky-400/10 text-white ring-1 ring-sky-400'
                        : 'border-white/10 bg-[#141B27] text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className="font-bold text-xs text-sky-400">Click Up</div>
                    <div className="text-[10px] text-slate-400">Tezkor to'lov</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('uzcard')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      paymentMethod === 'uzcard'
                        ? 'border-emerald-400 bg-emerald-400/10 text-white ring-1 ring-emerald-400'
                        : 'border-white/10 bg-[#141B27] text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className="font-bold text-xs text-emerald-400">Uzcard / Humo</div>
                    <div className="text-[10px] text-slate-400">Milliy kartalar</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('visa')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      paymentMethod === 'visa'
                        ? 'border-blue-400 bg-blue-400/10 text-white ring-1 ring-blue-400'
                        : 'border-white/10 bg-[#141B27] text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className="font-bold text-xs text-blue-400">Visa / MC</div>
                    <div className="text-[10px] text-slate-400">Xalqaro karta</div>
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-[#121824] rounded-lg p-4 border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Asosiy tarif qiymati:</span>
                  <span className="font-mono tabular-nums">
                    {currency === 'UZS'
                      ? `${new Intl.NumberFormat('uz-UZ').format(basePrice)} so'm`
                      : `$${basePrice}`}
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#D4F639] font-medium">
                    <span>Promokod chegirmasi (-15%):</span>
                    <span className="font-mono tabular-nums">
                      -{currency === 'UZS' ? `${new Intl.NumberFormat('uz-UZ').format(discountAmount)} so'm` : `$${discountAmount}`}
                    </span>
                  </div>
                )}
                <div className="pt-2 border-t border-white/10 flex justify-between items-center text-sm">
                  <span className="font-bold text-white uppercase">Jami To'lov Miqdori:</span>
                  <span className="text-xl font-extrabold text-[#D4F639] font-mono tabular-nums">
                    {currency === 'UZS'
                      ? `${new Intl.NumberFormat('uz-UZ').format(finalPrice)} so'm`
                      : `$${finalPrice}`}
                  </span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 px-6 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#D4F639] text-[#080B10] hover:bg-[#c2e22c] shadow-[0_0_25px_rgba(212,246,57,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>To'lov qayta ishlanmoqda...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5" />
                    <span>To'lovni Tasdiqlash & Kartani Olish</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-center text-[11px] text-slate-500">
                To'lovni amalga oshirish orqali siz klub qoidalariga rozilik bildirasiz.
              </div>
            </form>
          </div>
        ) : (
          /* SUCCESS STATE: DIGITAL MEMBERSHIP PASS */
          <div className="text-center py-4 space-y-6">
            <div className="w-14 h-14 bg-[#D4F639]/20 text-[#D4F639] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-athletic font-bold text-white uppercase">
                Tabriklaymiz, To'lov Muvaffaqiyatli O'tdi!
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Siz endi <strong>Pulse Fitness Club</strong> a'zosisiz. Sizning raqamli pasportingiz faollashtirildi.
              </p>
            </div>

            {/* Realistic Digital Member Pass Card */}
            <div className="max-w-md mx-auto bg-gradient-to-br from-[#121B2A] to-[#0A0E17] border border-[#D4F639]/40 rounded-xl p-6 text-left shadow-2xl relative overflow-hidden">
              {/* Watermark logo */}
              <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none font-athletic text-8xl font-black text-white">
                PULSE
              </div>

              <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#D4F639] tracking-wider">
                    Raqamli A'zolik Pasporti
                  </div>
                  <div className="font-athletic text-xl font-black text-white tracking-wide">
                    {completedSub.planName}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400">A'zolik ID</div>
                  <div className="font-mono text-sm font-bold text-white tabular-nums">
                    {completedSub.memberId}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Ism Familiya</span>
                  <span className="font-semibold text-white truncate block">{completedSub.fullName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Filial</span>
                  <span className="font-semibold text-white truncate block">{completedSub.branch}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Boshlanish sanasi</span>
                  <span className="font-mono text-white">{completedSub.startDate}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Amal qilish muddati</span>
                  <span className="font-mono text-[#D4F639] font-bold">{completedSub.expiryDate}</span>
                </div>
              </div>

              {/* QR Code Simulation */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-md">
                    <QrCode className="w-10 h-10 text-black" />
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight">
                    Kirish turniketida ushbu QR-kodni skaner qiling
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Faol A'zo
                  </span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="w-full sm:w-auto px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white rounded-md text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Kartani Chop Etish / Saqlash</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#D4F639] text-[#080B10] hover:bg-[#c2e22c] rounded-md text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Bosh Sahifaga Qaytish
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
