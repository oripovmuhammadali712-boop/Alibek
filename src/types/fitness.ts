export type Currency = 'UZS' | 'USD';
export type BillingCycle = 'monthly' | 'annual';

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  priceUzsMonthly: number;
  priceUzsAnnual: number;
  priceUsdMonthly: number;
  priceUsdAnnual: number;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  color: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  bio: string;
  achievements: string;
  image: string;
  rating: number;
  reviewsCount: number;
}

export interface WorkoutProgram {
  id: string;
  title: string;
  category: 'strength' | 'cardio' | 'combat' | 'recovery' | 'swimming';
  level: 'Boshlang\'ich' | 'O\'rta' | 'Ilg\'or' | 'Barcha darajalar';
  duration: string;
  caloriesBurn: string;
  description: string;
  focusMuscles: string[];
  trainerName: string;
  image?: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  trainer: string;
  room: string;
  category: string;
  availableSpots: number;
  totalSpots: number;
  intensity: 'Past' | 'O\'rtacha' | 'Yuqori';
}

export interface MemberSubscription {
  memberId: string;
  fullName: string;
  phone: string;
  email: string;
  planName: string;
  branch: string;
  paymentMethod: string;
  amountPaid: number;
  currency: Currency;
  cycle: BillingCycle;
  startDate: string;
  expiryDate: string;
  qrToken: string;
}
