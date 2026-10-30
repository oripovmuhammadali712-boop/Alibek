import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, Shield, Sparkles, CreditCard, ArrowRight, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/fitnessData';
import { PricingPlan, BillingCycle, Currency } from '../types/fitness';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan, cycle: BillingCycle, currency: Currency) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [cycle, setCycle] = useState<BillingCycle>('monthly');
  const [currency, setCurrency] = useState<Currency>('UZS');
  const [showComparison, setShowComparison] = useState(false);

  const formatPrice = (plan: PricingPlan) => {
    if (currency === 'UZS') {
      const amount = cycle === 'monthly' ? plan.priceUzsMonthly : plan.priceUzsAnnual;
      return new Intl.NumberFormat('uz-UZ').format(amount) + " so'm";
    } else {
      const amount = cycle === 'monthly' ? plan.priceUsdMonthly : plan.priceUsdAnnual;
      return '$' + amount;
    }
  };

  const getMonthlyEquivalent = (plan: PricingPlan) => {
    if (cycle === 'annual') {
      if (currency === 'UZS') {
        const perMonth = Math.round(plan.priceUzsAnnual / 12);
        return `Oyiga ${new Intl.NumberFormat('uz-UZ').format(perMonth)} so'm`;
      } else {
        const perMonth = Math.round(plan.priceUsdAnnual / 12);
        return `Oyiga $${perMonth}`;
      }
    }
    return null;
  };

  return (
    <section id="pricing" className="py-24 bg-[#080B10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4F639] mb-3">
            <span>Shaffof & Moslashuvchan Tariflar</span>
            <span aria-hidden="true">·</span>
            <span>Hech Qanday Yashirin To'lovlarsiz</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-athletic font-extrabold uppercase text-white tracking-tight mb-4 text-balance">
            O'zingizga Mos Abonementni Tanlang
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Har bir daraja uchun individual imkoniyatlar: oylik yoki yillik to'lov, qulay to'lov tizimlari (Payme, Click, Uzcard, Humo, Visa) va bepul muzlatish kafolati.
          </p>

          {/* Controls: Billing Cycle + Currency Switcher */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Monthly / Annual Segmented Control */}
            <div className="inline-flex p-1 bg-[#101622] rounded-lg border border-white/10">
              <button
                type="button"
                onClick={() => setCycle('monthly')}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 whitespace-nowrap ${
                  cycle === 'monthly'
                    ? 'bg-[#D4F639] text-[#080B10] shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Oylik To'lov
              </button>
              <button
                type="button"
                onClick={() => setCycle('annual')}
                className={`flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 whitespace-nowrap ${
                  cycle === 'annual'
                    ? 'bg-[#D4F639] text-[#080B10] shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Yillik (-20% Chegirma)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </button>
            </div>

            {/* Currency switcher */}
            <div className="inline-flex p-1 bg-[#101622] rounded-lg border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => setCurrency('UZS')}
                className={`px-3 py-1.5 rounded-md font-bold transition-colors ${
                  currency === 'UZS' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                UZS (So'm)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1.5 rounded-md font-bold transition-colors ${
                  currency === 'USD' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`relative flex flex-col justify-between rounded-xl p-7 sm:p-8 transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#0E1522] border-2 border-[#D4F639] shadow-[0_0_35px_rgba(212,246,57,0.15)] ring-1 ring-[#D4F639]/30'
                    : 'bg-[#0C1019] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popularity Badge if any */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D4F639] text-[#080B10] text-[11px] font-extrabold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badge || 'Eng ko\'p tanlangan'}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl sm:text-2xl font-athletic font-bold text-white tracking-wide">
                      {plan.name}
                    </h3>
                    {!isPopular && plan.badge && (
                      <span className="text-xs text-slate-400 font-medium">{plan.badge}</span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 mb-6 min-h-[40px] leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price display with tabular figures */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                        {formatPrice(plan)}
                      </span>
                      <span className="text-slate-400 text-xs uppercase font-medium">
                        / {cycle === 'monthly' ? 'oy' : 'yil'}
                      </span>
                    </div>
                    {getMonthlyEquivalent(plan) && (
                      <div className="text-xs font-semibold text-[#D4F639] mt-1.5 flex items-center gap-1">
                        <span>{getMonthlyEquivalent(plan)}</span>
                        <span className="text-slate-400 font-normal">· yiliga 20% tejaysiz</span>
                      </div>
                    )}
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Tarifga nimalar kiradi:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                          <Check className="w-4 h-4 text-[#D4F639] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded?.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-500 line-through">
                          <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Primary Action Button */}
                <button
                  type="button"
                  onClick={() => onSelectPlan(plan, cycle, currency)}
                  className={`w-full py-3.5 px-6 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 cursor-pointer ${
                    isPopular
                      ? 'bg-[#D4F639] text-[#080B10] hover:bg-[#c3e32e] shadow-[0_0_20px_rgba(212,246,57,0.3)]'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                  }`}
                >
                  <span>Abonementni Rasmiylashtirish</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Feature comparison trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-[#D4F639] transition-colors py-2 px-4 rounded-md border border-white/10 hover:border-[#D4F639]/40 bg-[#0E131C]"
          >
            <HelpCircle className="w-4 h-4 text-[#D4F639]" />
            <span>{showComparison ? 'Barcha tariflar taqqoslash jadvalini yopish' : 'Barcha tariflar taqqoslash jadvalini ochish'}</span>
          </button>
        </div>

        {/* Expandable Comparison Matrix */}
        {showComparison && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-8 bg-[#0C1019] rounded-xl border border-white/10 p-6 overflow-x-auto"
          >
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3 px-4 font-semibold uppercase">Xizmatlar va Qulayliklar</th>
                  <th className="py-3 px-4 font-semibold text-white">Start</th>
                  <th className="py-3 px-4 font-semibold text-[#D4F639]">Pro Athlete</th>
                  <th className="py-3 px-4 font-semibold text-amber-400">Elite VIP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="py-3.5 px-4 font-medium">Kirish vaqti</td>
                  <td className="py-3.5 px-4 text-slate-400">07:00 — 16:00</td>
                  <td className="py-3.5 px-4 text-[#D4F639] font-semibold">24/7 Cheksiz</td>
                  <td className="py-3.5 px-4 text-amber-400 font-semibold">24/7 Cheksiz</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Basseyn & Fin saunasi</td>
                  <td className="py-3.5 px-4"><X className="w-4 h-4 text-slate-600" /></td>
                  <td className="py-3.5 px-4"><Check className="w-4 h-4 text-[#D4F639]" /></td>
                  <td className="py-3.5 px-4"><Check className="w-4 h-4 text-amber-400" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Shaxsiy murabbiy seanslari</td>
                  <td className="py-3.5 px-4 text-slate-500">—</td>
                  <td className="py-3.5 px-4">Oyiga 4 ta</td>
                  <td className="py-3.5 px-4 text-amber-400 font-semibold">Oyiga 8 ta + Nazorat</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Guruh mashg'ulotlari (CrossFit, Yoga, Boks)</td>
                  <td className="py-3.5 px-4 text-slate-500">—</td>
                  <td className="py-3.5 px-4"><Check className="w-4 h-4 text-[#D4F639]" /></td>
                  <td className="py-3.5 px-4"><Check className="w-4 h-4 text-amber-400" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Barcha 4 ta filialga kirish</td>
                  <td className="py-3.5 px-4 text-slate-500">Faqat 1 ta</td>
                  <td className="py-3.5 px-4 text-slate-400">Faqat 1 ta</td>
                  <td className="py-3.5 px-4 text-amber-400 font-semibold">Barcha filiallar</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Cold Plunge & Cryo-recovery SPA</td>
                  <td className="py-3.5 px-4"><X className="w-4 h-4 text-slate-600" /></td>
                  <td className="py-3.5 px-4 text-slate-500">—</td>
                  <td className="py-3.5 px-4"><Check className="w-4 h-4 text-amber-400" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Shaxsiy kiyim & doimiy shkaf</td>
                  <td className="py-3.5 px-4"><X className="w-4 h-4 text-slate-600" /></td>
                  <td className="py-3.5 px-4"><X className="w-4 h-4 text-slate-600" /></td>
                  <td className="py-3.5 px-4"><Check className="w-4 h-4 text-amber-400" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Muzlatish (Freezing) imtiyozi</td>
                  <td className="py-3.5 px-4 text-slate-400">10 kun</td>
                  <td className="py-3.5 px-4">30 kun</td>
                  <td className="py-3.5 px-4 text-amber-400">60 kun</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        )}

        {/* Trust Badges & Supported Payment Gateways */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-[#D4F639]" />
            <div>
              <span className="font-semibold text-white">Xavfsiz va Ishonchli To'lov:</span> 100% xavfsiz shifrlangan to'lov tizimi. Birinchi mashg'ulot qoniqtirmasa, pulni qaytarish kafolati.
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-slate-400 font-medium mr-1">To'lov usullari:</span>
            <span className="px-2.5 py-1 bg-[#121824] rounded border border-white/10 font-bold text-slate-200">
              Payme
            </span>
            <span className="px-2.5 py-1 bg-[#121824] rounded border border-white/10 font-bold text-sky-400">
              Click
            </span>
            <span className="px-2.5 py-1 bg-[#121824] rounded border border-white/10 font-bold text-emerald-400">
              Uzcard
            </span>
            <span className="px-2.5 py-1 bg-[#121824] rounded border border-white/10 font-bold text-amber-400">
              Humo
            </span>
            <span className="px-2.5 py-1 bg-[#121824] rounded border border-white/10 font-bold text-blue-400">
              Visa / MC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
