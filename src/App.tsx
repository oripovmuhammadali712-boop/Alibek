import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PricingSection } from './components/PricingSection';
import { CheckoutModal } from './components/CheckoutModal';
import { CalculatorSection } from './components/CalculatorSection';
import { ProgramsSection } from './components/ProgramsSection';
import { TrainersSection } from './components/TrainersSection';
import { ScheduleSection } from './components/ScheduleSection';
import { ClubTourModal } from './components/ClubTourModal';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MyPassModal } from './components/MyPassModal';
import { PricingPlan, BillingCycle, Currency, MemberSubscription } from './types/fitness';
import { PRICING_PLANS } from './data/fitnessData';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [selectedCycle, setSelectedCycle] = useState<BillingCycle>('monthly');
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('UZS');
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isMyPassOpen, setIsMyPassOpen] = useState(false);
  const [activeSubscription, setActiveSubscription] = useState<MemberSubscription | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load saved subscription from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('pulse_fit_subscription');
      if (saved) {
        setActiveSubscription(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load subscription from storage', e);
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleSelectPlan = (plan: PricingPlan, cycle: BillingCycle, currency: Currency) => {
    setSelectedPlan(plan);
    setSelectedCycle(cycle);
    setSelectedCurrency(currency);
  };

  const handleOpenPricingFromNav = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedPlan(PRICING_PLANS[1]);
    }
  };

  const handleCheckoutSuccess = (sub: MemberSubscription) => {
    setActiveSubscription(sub);
    try {
      localStorage.setItem('pulse_fit_subscription', JSON.stringify(sub));
    } catch (e) {
      console.error('Failed to save to storage', e);
    }
    showToast(`Tabriklaymiz! Sizning ${sub.planName} a'zoligingiz faollashtirildi.`);
  };

  const handleBookTrial = (programTitle: string) => {
    showToast(`"${programTitle}" dasturiga sinov mashg'uloti bron qilindi! Menejerimiz tez orada bog'lanadi.`);
  };

  return (
    <div className="min-h-screen bg-[#080B10] text-slate-100 selection:bg-[#D4F639] selection:text-black">
      {/* Top Bar with Strict Contract */}
      <Navbar
        onOpenPricing={handleOpenPricingFromNav}
        activeSubscription={activeSubscription}
        onOpenMyPass={() => setIsMyPassOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onExplorePricing={handleOpenPricingFromNav}
          onOpenTourModal={() => setIsTourOpen(true)}
        />

        {/* Training Programs Bento Grid */}
        <ProgramsSection onBookTrial={handleBookTrial} />

        {/* Pricing & Memberships (Key paid features) */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* Interactive BMI & Calorie Calculator */}
        <CalculatorSection onSelectProgramCTA={handleOpenPricingFromNav} />

        {/* Certified Trainers & Coaches */}
        <TrainersSection onOpenBooking={(trainerName) => {
          showToast(`${trainerName || "Murabbiy"} bilan individual seans tanlandi.`);
        }} />

        {/* Weekly Live Class Schedule */}
        <ScheduleSection />

        {/* Testimonials with Quantified Results */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Checkout & Payment Modal */}
      {selectedPlan && (
        <CheckoutModal
          plan={selectedPlan}
          cycle={selectedCycle}
          currency={selectedCurrency}
          onClose={() => setSelectedPlan(null)}
          onSuccess={handleCheckoutSuccess}
        />
      )}

      {/* Club Virtual Facilities Tour */}
      <ClubTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onSelectPlan={handleOpenPricingFromNav}
      />

      {/* Active Member Digital Pass Modal */}
      {isMyPassOpen && activeSubscription && (
        <MyPassModal
          subscription={activeSubscription}
          onClose={() => setIsMyPassOpen(false)}
          onRenew={() => {
            setIsMyPassOpen(false);
            handleOpenPricingFromNav();
          }}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121B2A] border border-[#D4F639]/40 text-white px-5 py-3.5 rounded-lg shadow-2xl flex items-center gap-3 text-xs sm:text-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#D4F639]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
