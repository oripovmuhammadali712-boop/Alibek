import { PricingPlan, Trainer, WorkoutProgram, ScheduleItem } from '../types/fitness';

export const HERO_IMAGE = '/src/assets/images/fitness_hero_athlete_1793343830746.jpg';
export const GYM_FLOOR_IMAGE = '/src/assets/images/fitness_gym_floor_1793343830822.jpg';
export const TRAINER_MAIN_IMAGE = '/src/assets/images/fitness_trainer_coach_1793343832108.jpg';
export const RECOVERY_ZONE_IMAGE = '/src/assets/images/fitness_recovery_zone_1793343831829.jpg';

export const BRANCHES = [
  { id: 'mirobod', name: 'Mirobod Flagship (Grand Mir)', address: 'Sh. Rashidov ko\'chasi, 42', hours: '24/7 ochiq' },
  { id: 'chilonzor', name: 'Chilonzor Pro Club', address: 'Bunyodkor shox ko\'chasi, 15A', hours: '06:00 — 00:00' },
  { id: 'yunusobod', name: 'Yunusobod Mega Fitness', address: 'Amir Temur ko\'chasi, 108', hours: '24/7 ochiq' },
  { id: 'samarqand', name: 'Samarqand Silk Road', address: 'Buyuk Ipak Yo\'li, 77', hours: '06:30 — 23:00' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'start',
    name: 'START // STANDART',
    badge: 'Boshlovchilar uchun',
    description: 'Sog\'lom turmush tarzini boshlash va doimiy tetiklik uchun barcha asosiy qulayliklar.',
    priceUzsMonthly: 450000,
    priceUzsAnnual: 4320000, // 360,000/mo equivalent (-20%)
    priceUsdMonthly: 35,
    priceUsdAnnual: 336,
    color: '#94A3B8',
    features: [
      'Kunduzgi kirish: 07:00 dan 16:00 gacha',
      'Trenajyor zali va kardio zona to\'liq ochiq',
      'Erkin og\'irliklar (dumbbells, barbells)',
      'Zamonaviy kiyinish xonasi va shaxsiy shkaf',
      'Professional dush va quritgichlar',
      'Klub fitnes-diagnostikasi (1 marta)',
    ],
    notIncluded: [
      'Basseyn va SPA majmuasi',
      'Shaxsiy murabbiy seanslari',
      'VIP lounge va muzli vanna (cold plunge)',
    ],
  },
  {
    id: 'pro',
    name: 'PRO ATHLETE // ULTRA',
    badge: 'Eng mashhur tanlov',
    popular: true,
    description: 'Haqiqiy natija va o\'zgarish istaganlar uchun mukammal to\'liq paket.',
    priceUzsMonthly: 790000,
    priceUzsAnnual: 7580000, // ~631,000/mo (-20%)
    priceUsdMonthly: 62,
    priceUsdAnnual: 595,
    color: '#D4F639',
    features: [
      '24/7 cheksiz kirish (kechayu kunduz)',
      'Tanlangan bitta filialga to\'liq ruxsat',
      '25m olimpiya basseyni va fin saunasi',
      'Barcha guruh mashg\'ulotlari (CrossFit, Yoga, Boks)',
      '4 ta shaxsiy murabbiy bilan individual mashg\'ulot',
      'Mobil ilova orqali mashg\'ulotlar jurnali',
      'Fitnes barda barcha kokteyllarga 15% chegirma',
      'Muzlatish (Freezing) — 30 kungacha bepul',
    ],
    notIncluded: [
      'Shaxsiy doimiy shkaf (overnight locker)',
      'Cryo-sauna va individual massaj xizmati',
    ],
  },
  {
    id: 'vip',
    name: 'ELITE BLACK // VIP',
    badge: 'To\'liq erkinlik & VIP',
    description: 'Premium darajadagi xizmat, shaxsiy g\'amxo\'rlik va eksklyuziv tiklanish hududlari.',
    priceUzsMonthly: 1390000,
    priceUzsAnnual: 13340000, // -20%
    priceUsdMonthly: 109,
    priceUsdAnnual: 1046,
    color: '#F59E0B',
    features: [
      'Barcha filiallar bo\'ylab 24/7 cheksiz kirish',
      'VIP alohida zona va maxsus zalga kirish',
      '8 ta shaxsiy murabbiy bilan master mashg\'ulot',
      'Shaxsiy doimiy shkaf va har kuni toza kiyim/sochiq',
      'Recovery Spa: Sauna, Hamam, Cold Plunge & Cryo',
      'Individual dietolog ovqatlanish ratsioni',
      'Bepul yerosti avtoturargohi (rezervlangan)',
      'Har oyda 3 ta do\'st/oila uchun mehmon taklifnomasi',
      'Muzlatish (Freezing) — 60 kungacha bepul',
    ],
  },
];

export const TRAINERS: Trainer[] = [
  {
    id: 'sarah-jenkins',
    name: 'Malika Karimova',
    role: 'Bosh murabbiy / Kuch & Konditsionerlik',
    experience: '9 yil tajriba',
    specialties: ['Kuch tayyorgarligi', 'CrossFit Level 2', 'Reabilitatsiya'],
    bio: 'Xalqaro toifadagi fitnes-instruktor. 300 dan ortiq shogirdlariga ortiqcha vazndan xalos bo\'lish va jismoniy chidamlilikni 2 barobar oshirishda yordam bergan.',
    achievements: 'Powerlifting bo\'yicha O\'zbekiston chempioni (2022)',
    image: TRAINER_MAIN_IMAGE,
    rating: 4.98,
    reviewsCount: 142,
  },
  {
    id: 'bobur-alimov',
    name: 'Bobur Alimov',
    role: 'Bodibilding & Mushak massasi bo\'yicha mutaxassis',
    experience: '12 yil tajriba',
    specialties: ['Gipertrofiya', 'Quritish (Cutting)', 'Ratsion tuzish'],
    bio: 'Pro darajadagi atlet. Anatomik aniqlik bilan mushaklarni o\'stirish va shikastlanishlarsiz og\'ir vaznlar bilan ishlash bo\'yicha yetakchi mutaxassis.',
    achievements: 'WBPF xalqaro toifadagi sport ustasi',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&auto=format&fit=crop&q=80',
    rating: 4.95,
    reviewsCount: 189,
  },
  {
    id: 'jasur-usmonov',
    name: 'Jasur Usmonov',
    role: 'Boks va Jangovar funktsional tayyorgarlik',
    experience: '8 yil tajriba',
    specialties: ['Kikboksing', 'Reaktsiya va tezlik', 'Kardio portlash'],
    bio: 'Tezlik, chaqqonlik va yog\' yoqish uchun boks texnikasini fitnes elementlari bilan birlashtirgan dinamik mashg\'ulotlar ustasi.',
    achievements: 'Boks bo\'yicha sport ustaligiga nomzod',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=80',
    rating: 4.92,
    reviewsCount: 116,
  },
  {
    id: 'diana-kim',
    name: 'Diana Kim',
    role: 'Pilates, Yoga & Qomat tiklash',
    experience: '7 yil tajriba',
    specialties: ['Qad-qomatni to\'g\'rilash', 'Moslashuvchanlik', 'Nafas texnikasi'],
    bio: 'Umurtqa pog\'onasi salomatligi, bo\'g\'imlar harakatchanligi va ichki xotirjamlikni ta\'minlovchi chuqur muvozanat dasturlari koordinatori.',
    achievements: 'Xalqaro Yoga Alyansi sertifikati egasi (RYT-500)',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80',
    rating: 4.97,
    reviewsCount: 134,
  },
];

export const WORKOUT_PROGRAMS: WorkoutProgram[] = [
  {
    id: 'prog-1',
    title: 'TITAN STRENGTH // KUCH & BO\'Y',
    category: 'strength',
    level: 'O\'rta',
    duration: '60 daqiqa',
    caloriesBurn: '650 — 800 kkal',
    description: 'Katta mushak guruhlarini maqsadli yuklama bilan rivojlantirish. Shtangalar, gantellar va progressiv yuklanish tizimi.',
    focusMuscles: ['Ko\'krak', 'Yelka', 'Bel', 'Oyoqlar'],
    trainerName: 'Bobur Alimov',
    image: GYM_FLOOR_IMAGE,
  },
  {
    id: 'prog-2',
    title: 'METABOLIC FIRE // KARDIO & YOG\' YOQISH',
    category: 'cardio',
    level: 'Barcha darajalar',
    duration: '45 daqiqa',
    caloriesBurn: '700 — 950 kkal',
    description: 'Interval HIIT va funksional yuklamalar orqali kaloriyalarni shiddat bilan sarflash hamda chidamlilikni oshirish.',
    focusMuscles: ['Yurak-qon tomir', 'Butun tana', 'Matonat'],
    trainerName: 'Malika Karimova',
    image: HERO_IMAGE,
  },
  {
    id: 'prog-3',
    title: 'STRIKE COMBAT // BOKS VA ENERGIYA',
    category: 'combat',
    level: 'Boshlang\'ich',
    duration: '50 daqiqa',
    caloriesBurn: '600 — 750 kkal',
    description: 'Boks zarbalari, oyoq harakatlari va stressdan xalos bo\'lish uchun eng samarali kontaktli fitnes seansi.',
    focusMuscles: ['Qorin (Press)', 'Qo\'llar', 'Koordinatsiya'],
    trainerName: 'Jasur Usmonov',
  },
  {
    id: 'prog-4',
    title: 'ZEN FLOW // PILATES & EGILUVCHANLIK',
    category: 'recovery',
    level: 'Barcha darajalar',
    duration: '55 daqiqa',
    caloriesBurn: '300 — 400 kkal',
    description: 'Umurtqa bo\'g\'inlarini ochish, mushak tonusini mustahkamlash va charchoqni yo\'qotish uchun chuqur cho\'zilish.',
    focusMuscles: ['Qad-qomat', 'Chuqur kor', 'Mushak cho\'zilishi'],
    trainerName: 'Diana Kim',
  },
  {
    id: 'prog-5',
    title: 'AQUA SPEED // BASSEYN VA GIDRO-MASHG\'ULOT',
    category: 'swimming',
    level: 'O\'rta',
    duration: '50 daqiqa',
    caloriesBurn: '500 — 650 kkal',
    description: 'Bo\'g\'imlarga og\'irlik tushirmasdan butun tanani chiniqtirish va o\'pka hajmini kengaytirish suzish dasturi.',
    focusMuscles: ['Bel keng mushagi', 'Yelka kamari', 'Nafas tizimi'],
    trainerName: 'Malika Karimova',
    image: RECOVERY_ZONE_IMAGE,
  },
];

export const WEEKLY_SCHEDULE: { [day: string]: ScheduleItem[] } = {
  'Dushanba': [
    { id: 's1', time: '08:00 — 09:00', title: 'Power Morning HIIT', trainer: 'Malika Karimova', room: 'Zal A (Kardio)', category: 'Kardio', availableSpots: 4, totalSpots: 16, intensity: 'Yuqori' },
    { id: 's2', time: '10:30 — 11:30', title: 'Titan Strength Lift', trainer: 'Bobur Alimov', room: 'Og\'ir atletika zali', category: 'Kuch', availableSpots: 2, totalSpots: 12, intensity: 'Yuqori' },
    { id: 's3', time: '18:00 — 19:00', title: 'Boxing Master Class', trainer: 'Jasur Usmonov', room: 'Ring & Tatami', category: 'Jangovar', availableSpots: 6, totalSpots: 14, intensity: 'Yuqori' },
    { id: 's4', time: '19:30 — 20:30', title: 'Spine Health & Yoga', trainer: 'Diana Kim', room: 'Mind & Body Studio', category: 'Tiklanish', availableSpots: 5, totalSpots: 18, intensity: 'O\'rtacha' },
  ],
  'Seshanba': [
    { id: 's5', time: '07:30 — 08:30', title: 'Morning Aqua Sprint', trainer: 'Malika Karimova', room: '25m Basseyn', category: 'Suv sporti', availableSpots: 7, totalSpots: 15, intensity: 'O\'rtacha' },
    { id: 's6', time: '12:00 — 13:00', title: 'Express Core & Abs', trainer: 'Bobur Alimov', room: 'Funksional zona', category: 'Kuch', availableSpots: 3, totalSpots: 15, intensity: 'Yuqori' },
    { id: 's7', time: '18:30 — 19:30', title: 'CrossFit WOD Pro', trainer: 'Malika Karimova', room: 'CrossFit Arena', category: 'Kuch', availableSpots: 1, totalSpots: 12, intensity: 'Yuqori' },
    { id: 's8', time: '20:00 — 21:00', title: 'Deep Stretch & Saunafit', trainer: 'Diana Kim', room: 'Spa & Recovery', category: 'Tiklanish', availableSpots: 8, totalSpots: 16, intensity: 'Past' },
  ],
  'Chorshanba': [
    { id: 's9', time: '08:30 — 09:30', title: 'Functional Endurance', trainer: 'Malika Karimova', room: 'Zal A (Kardio)', category: 'Kardio', availableSpots: 5, totalSpots: 16, intensity: 'Yuqori' },
    { id: 's10', time: '17:30 — 18:30', title: 'Boxing Fundamentals', trainer: 'Jasur Usmonov', room: 'Ring & Tatami', category: 'Jangovar', availableSpots: 4, totalSpots: 14, intensity: 'O\'rtacha' },
    { id: 's11', time: '19:00 — 20:00', title: 'Hypertrophy Chest & Back', trainer: 'Bobur Alimov', room: 'Trenajyor zali', category: 'Kuch', availableSpots: 2, totalSpots: 12, intensity: 'Yuqori' },
  ],
  'Payshanba': [
    { id: 's12', time: '09:00 — 10:00', title: 'Pilates Reformer Class', trainer: 'Diana Kim', room: 'Mind & Body Studio', category: 'Tiklanish', availableSpots: 3, totalSpots: 10, intensity: 'O\'rtacha' },
    { id: 's13', time: '18:00 — 19:00', title: 'HIIT Tabata Cardio', trainer: 'Malika Karimova', room: 'Zal A (Kardio)', category: 'Kardio', availableSpots: 6, totalSpots: 16, intensity: 'Yuqori' },
    { id: 's14', time: '19:30 — 20:30', title: 'Combat Sparring Drill', trainer: 'Jasur Usmonov', room: 'Ring & Tatami', category: 'Jangovar', availableSpots: 4, totalSpots: 12, intensity: 'Yuqori' },
  ],
  'Juma': [
    { id: 's15', time: '08:00 — 09:00', title: 'Full Body Circuit', trainer: 'Bobur Alimov', room: 'Funksional zona', category: 'Kuch', availableSpots: 4, totalSpots: 15, intensity: 'Yuqori' },
    { id: 's16', time: '18:30 — 19:30', title: 'Aqua Aerobics Master', trainer: 'Malika Karimova', room: '25m Basseyn', category: 'Suv sporti', availableSpots: 9, totalSpots: 18, intensity: 'O\'rtacha' },
    { id: 's17', time: '20:00 — 21:00', title: 'Friday Night Recovery', trainer: 'Diana Kim', room: 'Spa & Recovery', category: 'Tiklanish', availableSpots: 6, totalSpots: 16, intensity: 'Past' },
  ],
  'Shanba': [
    { id: 's18', time: '10:00 — 11:30', title: 'Weekend Spartan Team WOD', trainer: 'Malika Karimova', room: 'CrossFit Arena', category: 'Kuch', availableSpots: 2, totalSpots: 20, intensity: 'Yuqori' },
    { id: 's19', time: '12:00 — 13:00', title: 'Kikboksing sparring seansi', trainer: 'Jasur Usmonov', room: 'Ring & Tatami', category: 'Jangovar', availableSpots: 5, totalSpots: 14, intensity: 'Yuqori' },
    { id: 's20', time: '16:00 — 17:00', title: 'Yoga & Meditation', trainer: 'Diana Kim', room: 'Mind & Body Studio', category: 'Tiklanish', availableSpots: 7, totalSpots: 18, intensity: 'Past' },
  ],
  'Yakshanba': [
    { id: 's21', time: '11:00 — 12:30', title: 'Family Aqua Day', trainer: 'Malika Karimova', room: '25m Basseyn', category: 'Suv sporti', availableSpots: 10, totalSpots: 25, intensity: 'Past' },
    { id: 's22', time: '14:00 — 15:30', title: 'Spine & Posture Masterclass', trainer: 'Diana Kim', room: 'Mind & Body Studio', category: 'Tiklanish', availableSpots: 4, totalSpots: 14, intensity: 'Past' },
  ],
};

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Sardorbek Rahimov',
    role: 'IT Tadbirkor, Toshkent',
    result: '4 oyda -19 kg vazn yo\'qotdi',
    quote: 'Kun bo\'yi kompyuter qarshisida o\'tirganim sababli bel og\'rig\'i va ortiqcha vazn meni qiynar edi. Pulse Fit\'ning Pro Athlete dasturi va Malika murabbiy bilan 4 oyda hayotim 180 daraja o\'zgardi. Ertalabki energiya aqlbovar qilmas darajada!',
    verifiedMember: 'Pro Athlete a\'zosi (1 yildan buyon)',
  },
  {
    id: 't2',
    name: 'Nilufar Yusupova',
    role: 'Marketing direktori',
    result: 'Qad-qomat tiklandi va 100% stressdan xalos',
    quote: 'Menga eng yoqqan tomoni — zalning tozaligi, 24/7 ochiqligi va albatta fin saunasi bilan cold plunge. Ishdan keyin shunchaki yengillashish va quvvat olish uchun eng qulay maskan.',
    verifiedMember: 'Elite Black VIP a\'zosi',
  },
  {
    id: 't3',
    name: 'Bekzod Qodirov',
    role: 'Muhandis & Havaskor sportchi',
    result: '+7.5 kg quruq mushak massasi',
    quote: 'To\'g\'ri mashg\'ulot rejasi va Bobur murabbiy tavsiya qilgan taomlanish grafigi tufayli kutilgan natijaga 6 oyda erishdim. Trenajyorlar yangi va xalqaro standartda!',
    verifiedMember: 'Pro Athlete a\'zosi',
  },
];

export const FAQS = [
  {
    q: 'Abonementni qanday to\'lash mumkin va qanday usullar mavjud?',
    a: 'Siz saytimiz orqali to\'g\'ridan-to\'g\'ri Payme, Click, Uzcard, Humo, Visa yoki MasterCard orqali bir zumda to\'lashingiz mumkin. Shuningdek, to\'lovni istalgan filialimiz retsepsiyasida naqd pul yoki terminal orqali amalga oshirish imkoni mavjud.',
  },
  {
    q: 'Safarga yoki ta\'tilga chiqqanda abonementni muzlatish (freezing) mumkinmi?',
    a: 'Albatta! "Pro Athlete" tarifi uchun 30 kungacha, "Elite Black VIP" tarifi uchun esa 60 kungacha bepul muzlatish imkoniyati taqdim etiladi. Buni shaxsiy kabinet yoki Telegram botimiz orqali 1 daqiqada faollashtirasiz.',
  },
  {
    q: 'Birinchi marta kelganda mashg\'ulotga nimalar olib kelish zarur?',
    a: 'O\'zingiz bilan qulay sport kiyimi (futbolka, shortik/legins), toza sport poyabzali (almashtirish uchun) va shaxsiy gigiyena buyumlarini olishingiz kifoya. Sochiqlar barcha a\'zolarimizga zalda bepul taqdim etiladi.',
  },
  {
    q: 'Yillik abonement sotib olsam qanday imtiyozlar olaman?',
    a: 'Yillik tarifni tanlaganingizda darhol 20% chegirma beriladi, shuningdek qo\'shimcha 2 oy bepul foydalanish va oilangiz uchun bepul mehmon tashriflari taqdim etiladi.',
  },
  {
    q: 'Klub qaysi vaqtlarda ishlaydi?',
    a: 'Flagship filiallarimiz (Mirobod va Yunusobod) 24 soat, haftaning 7 kuni dam olishsiz ishlaydi. Chilonzor filiali 06:00 dan 00:00 gacha, Samarqand filiali 06:30 dan 23:00 gacha xizmat ko\'rsatadi.',
  },
];
