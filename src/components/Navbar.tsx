import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { MemberSubscription } from '../types/fitness';

interface NavbarProps {
  onOpenPricing: () => void;
  activeSubscription: MemberSubscription | null;
  onOpenMyPass: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPricing,
  activeSubscription,
  onOpenMyPass,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B10]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant Top Bar: Zone 1 (Wordmark) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Primary Action) */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-decoration-none"
          >
            <span className="w-2.5 h-7 bg-[#D4F639] transform -skew-x-12 inline-block transition-transform duration-300 group-hover:scale-y-110" />
            <span className="font-athletic text-2xl sm:text-3xl font-extrabold tracking-wider text-white">
              PULSE <span className="text-[#D4F639]">FIT</span>
            </span>
          </a>

          {/* Zone 2: 5 single-line clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#programs"
              className="hover:text-[#D4F639] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Dasturlar
            </a>
            <a
              href="#pricing"
              className="hover:text-[#D4F639] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Abonementlar
            </a>
            <a
              href="#calculator"
              className="hover:text-[#D4F639] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Kalkulyator
            </a>
            <a
              href="#trainers"
              className="hover:text-[#D4F639] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Murabbiylar
            </a>
            <a
              href="#schedule"
              className="hover:text-[#D4F639] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Jadval
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {activeSubscription ? (
              <button
                onClick={onOpenMyPass}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#080B10] bg-[#D4F639] hover:bg-[#c2e22c] rounded-md transition-all duration-200 shadow-[0_0_15px_rgba(212,246,57,0.3)] whitespace-nowrap shrink-0"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Mening A'zoligim</span>
              </button>
            ) : (
              <button
                onClick={onOpenPricing}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#080B10] bg-[#D4F639] hover:bg-[#c2e22c] rounded-md transition-all duration-200 shadow-[0_0_20px_rgba(212,246,57,0.35)] hover:shadow-[0_0_25px_rgba(212,246,57,0.5)] whitespace-nowrap shrink-0 active:scale-95"
              >
                <span>Abonement Olish</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            {activeSubscription && (
              <button
                onClick={onOpenMyPass}
                className="px-2.5 py-1.5 text-[11px] font-bold text-[#080B10] bg-[#D4F639] rounded"
              >
                Pass
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4F639]"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D121B] border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium">
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-[#D4F639] py-2 border-b border-white/5"
            >
              Dasturlar
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-[#D4F639] py-2 border-b border-white/5"
            >
              Abonementlar & Narxlar
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-[#D4F639] py-2 border-b border-white/5"
            >
              BMI & Kaloriya Kalkulyatori
            </a>
            <a
              href="#trainers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-[#D4F639] py-2 border-b border-white/5"
            >
              Professional Murabbiylar
            </a>
            <a
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-[#D4F639] py-2 border-b border-white/5"
            >
              Mashg'ulotlar Jadvali
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPricing();
              }}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-[#080B10] bg-[#D4F639] rounded-md"
            >
              Abonement Olish
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
