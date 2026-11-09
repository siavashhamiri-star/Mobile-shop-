/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import storeHeroImg from './assets/images/store_hero_image_1794205762028.jpg';
import { 
  Phone, 
  MapPin, 
  Sparkles, 
  Smartphone, 
  Wrench, 
  RefreshCw, 
  Headphones, 
  Calculator, 
  Mic, 
  MicOff, 
  CheckCircle2, 
  Mail
} from 'lucide-react';

interface PreOwnedPhone {
  id: string;
  model: string;
  storage: string;
  color: string;
  battery: number;
  condition: string;
  priceToman: number;
  warrantyDays: number;
  isSpecial?: boolean;
}

const sampleCatalog: PreOwnedPhone[] = [
  {
    id: '1',
    model: 'iPhone 15 Pro Max',
    storage: '256GB',
    color: 'Natural Titanium',
    battery: 98,
    condition: 'در حد آکبند (Grade A+)',
    priceToman: 89500000,
    warrantyDays: 30,
    isSpecial: true,
  },
  {
    id: '2',
    model: 'iPhone 13',
    storage: '128GB',
    color: 'Midnight',
    battery: 89,
    condition: 'بسیار تمیز، بدون خط و خش',
    priceToman: 47800000,
    warrantyDays: 14,
    isSpecial: false,
  },
  {
    id: '3',
    model: 'Galaxy S24 Ultra',
    storage: '512GB',
    color: 'Titanium Gray',
    battery: 100,
    condition: 'مشابه صفر با گارانتی معتبر',
    priceToman: 79000000,
    warrantyDays: 30,
    isSpecial: true,
  },
  {
    id: '4',
    model: 'Galaxy A55 5G',
    storage: '256GB',
    color: 'Awesome Iceblue',
    battery: 99,
    condition: 'دست دوم در حد نو',
    priceToman: 22400000,
    warrantyDays: 14,
    isSpecial: false,
  },
];

export default function App() {
  const [lang, setLang] = useState<'fa' | 'en' | 'ar'>('fa');
  const [activeTab, setActiveTab] = useState<'catalog' | 'tradein'>('catalog');

  // Customer Club Form State
  const [regName, setRegName] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regType, setRegType] = useState('visitor');
  const [regSuccess, setRegSuccess] = useState(false);

  // Tourist Voice Assistant State
  const [isListening, setIsListening] = useState(false);
  const [voiceResult, setVoiceResult] = useState('');
  const [voiceTargetLang, setVoiceTargetLang] = useState<'en' | 'ar'>('en');

  // Dubai to Tehran Calculator State
  const [dirhamPrice, setDirhamPrice] = useState<string>('3500');
  const [dirhamRate, setDirhamRate] = useState<string>('18500');
  const [dubaiFinalPrice, setDubaiFinalPrice] = useState<string | null>(null);

  // Trade-in Quick Valuation State
  const [phoneModel, setPhoneModel] = useState('');
  const [tradeinResult, setTradeinResult] = useState<string | null>(null);

  const translations = {
    fa: {
      dir: 'rtl',
      storeName: 'فروشگاه موبایل نیکو',
      subtitle: 'خرید، فروش، تعمیرات تخصصی و خدمات بین‌المللی',
      location: 'تجریش، طبقه دوم | تلفن: 02122700000',
      directCall: '📞 تماس مستقیم با مغازه: ۰۲۱۲۲۷۰۰۰۰۰',
      directLocation: 'تجریش، طبقه دوم',
      aboutHeader: '⚡ حوزه‌های فعالیت و خدمات تخصصی ما',
      aboutText: 'ما در این مجموعه با انصاف کامل، بالاترین کیفیت و ضمانتِ صددرصدی در خدمت شما هستیم. حوزه‌های اصلی فعالیت ما عبارتند از:',
      service1: 'خرید انواع گوشی نو و کارکرده با منصفانه‌ترین قیمت و فروش دستگاه‌های تست‌شده.',
      service2: 'عیب‌یابی، تعمیرات سخت‌افزاری و تعویض قطعات با قطعات اصلی.',
      service3: 'امکان معاوضه گوشی قدیمی شما با مدل‌های بالاتر به صورت کاملاً شفاف.',
      service4: 'ارائه گلس، قاب، شارژر اصل و مشاوره خرید تخصصی رایگان.',
      service1Title: '📱 خرید و فروش گوشی',
      service2Title: '🛠️ تعمیرات تخصصی',
      service3Title: '🔄 معاوضه (تریدین)',
      service4Title: '🎧 لوازم جانبی و مشاوره',
      regTitle: 'ثبت‌نام در باشگاه مشتریان و گارانتی',
      regSub: 'مخصوص بازدیدکنندگان طبقه دوم و خریداران',
      optVisitor: 'بازدیدکننده حضوری (دریافت هدیه و تخفیف طبقه دوم)',
      optBuyer: 'خریدار یا تعمیرشده (ثبت گارانتی)',
      regBtn: 'تکمیل ثبت‌نام و دریافت امتیاز',
      regSuccess: 'ثبت‌نام با موفقیت انجام شد!',
      voiceTitle: '🎙️ مترجم هوشمند و رایگان توریست',
      voiceBadge: 'رایگان و درون‌برنامه‌ای',
      voiceEn: '🗣️ انگلیسی',
      voiceAr: '🗣️ عربی',
      voiceReady: 'آماده دریافت صدا...',
      voiceListening: 'در حال گوش دادن به توریست...',
      voiceNotSupported: 'مرورگر شما پشتیبانی نمی‌کند. لطفاً از مرورگر کروم استفاده کنید.',
      dubaiTitle: '📊 شبیه‌ساز قیمت: از دبی تا تهران',
      dubaiBadge: 'محاسبه لحظه‌ای',
      dubaiDesc: 'قیمت درهمی کالا در دبی را وارد کنید تا قیمت نهایی در تهران محاسبه شود:',
      dirhamPriceLabel: 'قیمت در دبی (درهم):',
      dirhamRateLabel: 'نرخ روز درهم (تومان):',
      dubaiBtn: 'محاسبه قیمت نهایی در تهران',
      dubaiResultLabel: 'قیمت تخمینی روی میز در تهران:',
      tab1: 'لیست قیمت',
      tab2: 'تخمین قیمت',
      catHeader: 'گوشی‌های کارکرده گلچین‌شده',
      catSub: 'تست‌شده با مهلت تست ضمانتی',
      catBadge: 'ویژه',
      calcTitle: 'استعلام قیمت خرید دستگاه',
      phoneModelPlaceholder: 'مدل گوشی (مثلا iPhone 13 یا S23)...',
      calcBtn: 'محاسبه پیشنهاد',
      orderBtn: 'استعلام حضوری',
      footerDevTitle: '✨ توسعه‌یافته با هنر و تخصص توسط اکبر علیمیری (سیاوش)',
      footerDevBio: 'خالق شهر متاورسی Ebar City، اکوسیستم آفرینش و توسعه‌دهنده سامانه‌های تخصصی: طلاجویار، ساختمانیار، سالنیار، کلینیکیار، دنتالیار، ایبیفورک، توانا اجوکیشن، توانا فریلنسر، توانا ایجنت، شطرنج هم‌جهان و دهها سامانه دیگر.',
      footerEmailBtn: '📩 ارتباط مستقیم با توسعه‌دهنده و ثبت سفارش: siavashhamiri@gmail.com',
      footerHonor: 'طراحی‌شده با شرافت و اصالت برای رونق کسب‌وکار'
    },
    en: {
      dir: 'ltr',
      storeName: 'Niko Mobile Store',
      subtitle: 'Buy, Sell, Expert Repairs & International Services',
      location: 'Tajrish, 2nd Floor | Tel: 02122700000',
      directCall: '📞 Direct Call to Store: 02122700000',
      directLocation: 'Tajrish, 2nd Floor',
      aboutHeader: '⚡ Our Expertise & Specialized Services',
      aboutText: 'We offer fair pricing, top quality, and guaranteed services. Our main areas of expertise include:',
      service1: 'Buying & selling new and pre-owned phones with fair and honest valuation.',
      service2: 'Hardware troubleshooting, expert repairs, and original parts replacement.',
      service3: 'Secure and transparent phone trade-in and upgrades.',
      service4: 'Quality accessories (cases, glass) and free expert consultation.',
      service1Title: '📱 Buy & Sell Phones',
      service2Title: '🛠️ Expert Repairs',
      service3Title: '🔄 Trade-in Upgrades',
      service4Title: '🎧 Accessories & Advice',
      regTitle: 'VIP Club & Warranty Registration',
      regSub: 'For 2nd floor visitors & buyers',
      optVisitor: 'In-person Visitor (Get 2nd floor discount gift)',
      optBuyer: 'Buyer / Repair Customer (Register warranty)',
      regBtn: 'Complete Registration',
      regSuccess: 'Successfully registered!',
      voiceTitle: '🎙️ Smart In-App Tourist Translator',
      voiceBadge: 'Free & Instant',
      voiceEn: '🗣️ English',
      voiceAr: '🗣️ Arabic',
      voiceReady: 'Ready for voice input...',
      voiceListening: 'Listening to tourist...',
      voiceNotSupported: 'Speech recognition is not supported in this browser.',
      dubaiTitle: '📊 Dubai to Tehran Price Simulator',
      dubaiBadge: 'Real-time',
      dubaiDesc: 'Enter Dirham price in Dubai to calculate total estimated price in Tehran:',
      dirhamPriceLabel: 'Price in Dubai (Dirhams):',
      dirhamRateLabel: 'Exchange Rate (Tomans):',
      dubaiBtn: 'Calculate Final Price in Tehran',
      dubaiResultLabel: 'Estimated Delivered Price in Tehran:',
      tab1: 'Price List',
      tab2: 'Valuation',
      catHeader: 'Certified Pre-owned Phones',
      catSub: 'Tested with Guarantee',
      catBadge: 'Special',
      calcTitle: 'Instant Valuation',
      phoneModelPlaceholder: 'Phone model (e.g. iPhone 13 or S23)...',
      calcBtn: 'Calculate Offer',
      orderBtn: 'Inquire Now',
      footerDevTitle: '✨ Crafted with Passion and Artistry by Akbar Alimiri (Siavash)',
      footerDevBio: 'Creator of Ebar City metaverse, Afarinesh Ecosystem, and lead developer of TalaJoyar, SakhtemanYar, SalonYar, ClinicYar, DentalYar, EbFork, Tavana Education, Tavana Freelancer, Tavana Agent, HamJahan Chess, and dozens of enterprise platforms.',
      footerEmailBtn: '📩 Direct developer contact & orders: siavashhamiri@gmail.com',
      footerHonor: 'Designed with honor and excellence to elevate modern business'
    },
    ar: {
      dir: 'rtl',
      storeName: 'متجر نيكو للجوالات',
      subtitle: 'بيع، شراء، صيانة متخصصة وخدمات دولية',
      location: 'تجریش، الطابق الثاني | هاتف: 02122700000',
      directCall: '📞 اتصال مباشر بالمتجر: ۰۲۱۲۲۷۰۰۰۰۰',
      directLocation: 'تجریش، الطابق الثاني',
      aboutHeader: '⚡ مجالات عملنا وخدماتنا الاحترافية',
      aboutText: 'نقدم أفضل الخدمات بأمانة تامة وجودة عالية وضمان معتمد. مجالات عملنا الرئيسية:',
      service1: 'شراء وبيع الهواتف الجديدة والمستعملة بأفضل الأسعار وأكثرها إنصافاً.',
      service2: 'تشخيص الأعطال، الصيانة المتقدمة واستبدال القطع الأصلية.',
      service3: 'إمكانية مقايضة هاتفك القديم بطرازات أحدث بوضوح تام.',
      service4: 'توفير حمايات الشاشة، الأكسسوارات الأصلية واستشارة مجانية.',
      service1Title: '📱 بيع وشراء الهواتف',
      service2Title: '🛠️ صيانة متخصصة',
      service3Title: '🔄 مقايضة (تريدين)',
      service4Title: '🎧 إكسسوارات واستشارات',
      regTitle: 'التسجيل في نادي العملاء والضمان',
      regSub: 'لزوار الطابق الثاني والمشترين',
      optVisitor: 'زائر حضوري (احصل على هدية وخصم الطابق الثاني)',
      optBuyer: 'مشتري أو صاحب صيانة (تسجيل الضمان)',
      regBtn: 'إتمام التسجيل',
      regSuccess: 'تم التسجيل بنجاح!',
      voiceTitle: '🎙️ المترجم الصوتي الذكي للسياح',
      voiceBadge: 'مجاني وفوري',
      voiceEn: '🗣️ الإنجليزية',
      voiceAr: '🗣️ العربية',
      voiceReady: 'جاهز لاستقبال الصوت...',
      voiceListening: 'جارٍ الاستماع لصوت السائح...',
      voiceNotSupported: 'المتصفح لا يدعم التعرف الصوتي المباشر.',
      dubaiTitle: '📊 شبیهساز قیمت: من دبي إلى طهران',
      dubaiBadge: 'حساب لحظي',
      dubaiDesc: 'أدخل السعر بالدرهم الإماراتي لحساب السعر الإجمالي في طهران:',
      dirhamPriceLabel: 'السعر في دبي (درهم):',
      dirhamRateLabel: 'سعر صرف الدرهم (تومان):',
      dubaiBtn: 'حساب السعر النهائي في طهران',
      dubaiResultLabel: 'السعر التقديري النهائي في طهران:',
      tab1: 'قائمة الأسعار',
      tab2: 'التقدير',
      catHeader: 'هواتف مستعملة مختارة',
      catSub: 'مفحوصة مع ضمان',
      catBadge: 'مميز',
      calcTitle: 'تقدير السعر الفوري',
      phoneModelPlaceholder: 'طراز الهاتف (مثال iPhone 13 أو S23)...',
      calcBtn: 'حساب العرض',
      orderBtn: 'استفسار فوري',
      footerDevTitle: '✨ طُوّر بكل فخر وإتقان على يد أكبر عليميري (سیاوش)',
      footerDevBio: 'مؤسس مدينة إبار سيتي (Ebar City) الميتافيرسية، ومنظومة آفرينش، ومطور الأنظمة الاحترافية: طلاجویار، ساختمانیار، سالنیار، کلینیکیار، دنتالیار، إيبفورك، توانا للتعليم، توانا للعمل الحر، توانا إيجنت، شطرنج هم‌جهان، وعشرات الأنظمة الأخرى.',
      footerEmailBtn: '📩 التواصل المباشر مع المطور لطلب الأنظمة: siavashhamiri@gmail.com',
      footerHonor: 'صُمم بأعلى معايير الشرف والأصالة لرفعة وازدهار الأعمال'
    }
  };

  const t = translations[lang];

  // Customer Club Registration
  const registerUser = () => {
    if (!regName.trim() || !regPhone.trim()) {
      alert(lang === 'fa' ? 'لطفاً نام و شماره موبایل خود را وارد کنید.' : 'Please enter your name and phone number.');
      return;
    }
    setRegSuccess(true);
  };

  // Dubai to Tehran Calculation
  const calculateDubaiToTehran = () => {
    const dPrice = parseFloat(dirhamPrice);
    const dRate = parseFloat(dirhamRate);
    if (!dPrice || !dRate) {
      alert(lang === 'fa' ? 'لطفاً قیمت درهم و نرخ روز را وارد کنید.' : 'Please enter valid numbers for dirham price and rate.');
      return;
    }
    const baseToman = dPrice * dRate;
    const finalToman = baseToman * 1.12;
    const formattedPrice = Math.round(finalToman).toLocaleString(lang === 'fa' ? 'fa-IR' : lang === 'ar' ? 'ar-EG' : 'en-US');
    setDubaiFinalPrice(formattedPrice + (lang === 'fa' ? ' تومان' : lang === 'ar' ? ' تومان' : ' Tomans'));
  };

  // Tourist Speech Recognition
  const startListening = (selectedLang: 'en' | 'ar') => {
    setVoiceTargetLang(selectedLang);
    const recognitionLang = selectedLang === 'en' ? 'en-US' : 'ar-SA';
    const SpeechRecognition = (window as unknown as { SpeechRecognition?: any; webkitSpeechRecognition?: any }).SpeechRecognition ||
                              (window as unknown as { SpeechRecognition?: any; webkitSpeechRecognition?: any }).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceResult(t.voiceNotSupported);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = recognitionLang;
      setIsListening(true);
      setVoiceResult(t.voiceListening);

      recognition.onresult = (event: any) => {
        const transcript = event.results?.[0]?.[0]?.transcript;
        if (transcript) {
          setVoiceResult(`"${transcript}"`);
        }
        setIsListening(false);
      };

      recognition.onerror = () => {
        setVoiceResult(lang === 'fa' ? 'خطا در دریافت صدا. دسترسی میکروفون را مجاز کنید.' : 'Microphone error or permission denied.');
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch {
      setVoiceResult(t.voiceNotSupported);
      setIsListening(false);
    }
  };

  // Phone Trade-in Quick Valuation
  const calculatePrice = () => {
    if (!phoneModel.trim()) {
      setTradeinResult(lang === 'fa' ? 'لطفاً مدل را وارد کنید.' : 'Please enter the phone model.');
      return;
    }
    const lower = phoneModel.toLowerCase();
    let estimate = '۳۵,۰۰۰,۰۰۰ تا ۴۵,۰۰۰,۰۰۰ تومان';
    if (lower.includes('15') || lower.includes('s24')) {
      estimate = '۶۵,۰۰۰,۰۰۰ تا ۸۰,۰۰۰,۰۰۰ تومان';
    } else if (lower.includes('14') || lower.includes('s23')) {
      estimate = '۴۵,۰۰۰,۰۰۰ تا ۵۵,۰۰۰,۰۰۰ تومان';
    } else if (lower.includes('13') || lower.includes('s22')) {
      estimate = '۳۵,۰۰۰,۰۰۰ تا ۴۵,۰۰۰,۰۰۰ تومان';
    } else if (lower.includes('12') || lower.includes('s21')) {
      estimate = '۲۵,۰۰۰,۰۰۰ تا ۳۲,۰۰۰,۰۰۰ تومان';
    }

    if (lang === 'fa') {
      setTradeinResult(`پیشنهاد منصفانه حضوری: حدود ${estimate} (تسویه آنی نقدی در طبقه دوم تجریش)`);
    } else if (lang === 'ar') {
      setTradeinResult(`عرض الشراء التقديري: حوالي ${estimate} (صرف فوري في الطابق الثاني)`);
    } else {
      setTradeinResult(`Fair trade-in offer: approx. ${estimate} (Instant cash on 2nd floor)`);
    }
  };

  return (
    <div className="bg-[#0B0B0B] text-gray-100 font-sans min-h-screen flex flex-col justify-between selection:bg-[#D4AF37] selection:text-black" dir={t.dir}>
      
      {/* SCRIPT A: HEADER WITH LUXURY BLACK & GOLD, REAL STORE PHOTO, LARGE TITLE */}
      <header className="relative bg-[#141414] border-b gold-border py-4 px-4 text-center">
        {/* Language Selection Buttons */}
        <div className="flex justify-center space-x-2 space-x-reverse mb-3">
          {(['fa', 'en', 'ar'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              id={`lang${l.charAt(0).toUpperCase() + l.slice(1)}`}
              className={`text-[10px] px-2.5 py-1 rounded-md transition duration-150 whitespace-nowrap shrink-0 ${
                lang === l
                  ? 'bg-[#D4AF37] text-black font-bold shadow'
                  : 'bg-black/60 text-gray-300 gold-border hover:text-[#D4AF37]'
              }`}
            >
              {l === 'fa' ? 'فارسی' : l === 'en' ? 'English' : 'العربیة'}
            </button>
          ))}
        </div>

        {/* Real Store Photo Banner */}
        <div className="w-full h-36 rounded-xl overflow-hidden gold-border mb-3 relative bg-black/50">
          <img
            id="storeImage"
            src={storeHeroImg}
            alt="محیط فروشگاه"
            className="w-full h-full object-cover opacity-85"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-[#D4AF37] gold-border flex items-center gap-1">
            📍 <span id="storeLocationText">{t.location}</span>
          </div>
        </div>

        {/* Big Store Name in Header */}
        <div>
          <h1 className="text-2xl font-bold gold-gradient-text" id="storeNameText">
            {t.storeName}
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            {t.subtitle}
          </p>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-md mx-auto w-full p-4 space-y-4 flex-grow">
        
        {/* SCRIPT B: CORE SERVICES & EXPERTISE */}
        <div className="bg-[#141414] p-4 rounded-2xl gold-border space-y-3">
          <h2 className="text-xs font-bold text-[#D4AF37] flex items-center space-x-1 space-x-reverse">
            <span>{t.aboutHeader}</span>
          </h2>
          <p className="text-[10px] text-gray-400 leading-relaxed">
            {t.aboutText}
          </p>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-black/40 p-2.5 rounded-xl border gold-border">
              <span className="text-xs font-bold text-[#D4AF37] block mb-1">{t.service1Title}</span>
              <p className="text-[9px] text-gray-300">{t.service1}</p>
            </div>
            <div className="bg-black/40 p-2.5 rounded-xl border gold-border">
              <span className="text-xs font-bold text-[#D4AF37] block mb-1">{t.service2Title}</span>
              <p className="text-[9px] text-gray-300">{t.service2}</p>
            </div>
            <div className="bg-black/40 p-2.5 rounded-xl border gold-border">
              <span className="text-xs font-bold text-[#D4AF37] block mb-1">{t.service3Title}</span>
              <p className="text-[9px] text-gray-300">{t.service3}</p>
            </div>
            <div className="bg-black/40 p-2.5 rounded-xl border gold-border">
              <span className="text-xs font-bold text-[#D4AF37] block mb-1">{t.service4Title}</span>
              <p className="text-[9px] text-gray-300">{t.service4}</p>
            </div>
          </div>
        </div>

        {/* SCRIPT B: VIP CUSTOMER CLUB & WARRANTY REGISTRATION */}
        <div className="bg-gradient-to-br from-[#141414] to-[#1f1a0d] p-4 rounded-2xl gold-border gold-glow">
          <div className="flex items-center space-x-3 space-x-reverse mb-3">
            <div className="p-2.5 bg-[#D4AF37]/20 rounded-xl text-[#D4AF37] text-lg">📝</div>
            <div>
              <h3 className="text-xs font-bold text-[#D4AF37]">{t.regTitle}</h3>
              <p className="text-[10px] text-gray-300 mt-0.5">{t.regSub}</p>
            </div>
          </div>

          <div className="space-y-2">
            <input
              type="text"
              id="regName"
              placeholder={lang === 'fa' ? 'نام و نام خانوادگی' : 'Full Name'}
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
              className="w-full bg-black/50 border gold-border rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            />
            <input
              type="tel"
              id="regPhone"
              placeholder={lang === 'fa' ? 'شماره موبایل (مثلا 0912...)' : 'Phone Number (e.g. 0912...)'}
              value={regPhone}
              onChange={(e) => setRegPhone(e.target.value)}
              className="w-full bg-black/50 border gold-border rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            />
            
            <select
              id="regType"
              value={regType}
              onChange={(e) => setRegType(e.target.value)}
              className="w-full bg-black/50 border gold-border rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="visitor">{t.optVisitor}</option>
              <option value="buyer">{t.optBuyer}</option>
            </select>

            <button
              onClick={registerUser}
              className="w-full bg-[#D4AF37] hover:bg-[#E5C158] text-black font-bold py-2.5 rounded-xl text-xs transition duration-200 shadow-lg"
            >
              {t.regBtn}
            </button>
            {regSuccess && (
              <div id="regSuccessMsg" className="text-center text-xs text-[#D4AF37] font-semibold mt-1">
                {t.regSuccess}
              </div>
            )}
          </div>
        </div>

        {/* SCRIPT C: TOURIST SMART VOICE TRANSLATOR */}
        <div className="bg-[#141414] p-4 rounded-2xl gold-border">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-[#D4AF37]">{t.voiceTitle}</h3>
            <span className="text-[9px] bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-0.5 rounded gold-border">
              {t.voiceBadge}
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex space-x-2 space-x-reverse">
              <button
                type="button"
                onClick={() => startListening('en')}
                disabled={isListening}
                className={`flex-1 bg-black/50 border gold-border text-xs py-2 rounded-lg font-semibold transition ${
                  isListening && voiceTargetLang === 'en'
                    ? 'bg-red-950/60 text-red-400 border-red-500 animate-pulse'
                    : 'text-[#D4AF37] hover:bg-black/80'
                }`}
              >
                {t.voiceEn}
              </button>
              <button
                type="button"
                onClick={() => startListening('ar')}
                disabled={isListening}
                className={`flex-1 bg-black/50 border gold-border text-xs py-2 rounded-lg font-semibold transition ${
                  isListening && voiceTargetLang === 'ar'
                    ? 'bg-red-950/60 text-red-400 border-red-500 animate-pulse'
                    : 'text-[#D4AF37] hover:bg-black/80'
                }`}
              >
                {t.voiceAr}
              </button>
            </div>
            <div className="bg-black/40 p-3 rounded-xl border border-gray-800">
              <div id="transResult" className="text-xs text-gray-200 min-h-[25px]">
                {voiceResult || t.voiceReady}
              </div>
            </div>
          </div>
        </div>

        {/* SCRIPT C: DUBAI TO TEHRAN PRICE SIMULATOR */}
        <div className="bg-[#141414] p-4 rounded-2xl gold-border space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#D4AF37] flex items-center space-x-1 space-x-reverse">
              <span>{t.dubaiTitle}</span>
            </h3>
            <span className="text-[9px] bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-0.5 rounded gold-border">
              {t.dubaiBadge}
            </span>
          </div>
          <p className="text-[10px] text-gray-400">
            {t.dubaiDesc}
          </p>
          <div className="space-y-2">
            <div>
              <label className="text-[10px] text-gray-300 block mb-1">{t.dirhamPriceLabel}</label>
              <input
                type="number"
                id="dirhamPrice"
                value={dirhamPrice}
                onChange={(e) => setDirhamPrice(e.target.value)}
                placeholder="مثلا 3500"
                className="w-full bg-black/50 border gold-border rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="text-[10px] text-gray-300 block mb-1">{t.dirhamRateLabel}</label>
              <input
                type="number"
                id="dirhamRate"
                value={dirhamRate}
                onChange={(e) => setDirhamRate(e.target.value)}
                className="w-full bg-black/50 border gold-border rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <button
              onClick={calculateDubaiToTehran}
              className="w-full bg-[#D4AF37] hover:bg-[#E5C158] text-black font-bold py-2 rounded-xl text-xs transition duration-200"
            >
              {t.dubaiBtn}
            </button>
            {dubaiFinalPrice && (
              <div id="simResult" className="mt-2 p-2 bg-black/50 rounded-xl border gold-border text-center">
                <span className="text-[10px] text-gray-400 block">{t.dubaiResultLabel}</span>
                <span id="finalPriceText" className="text-xs font-bold text-[#D4AF37] tabular-nums">
                  {dubaiFinalPrice}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* SCRIPT C: CATALOG & TRADE-IN TABS */}
        <div className="flex bg-[#141414] p-1 rounded-xl gold-border text-xs">
          <button
            onClick={() => setActiveTab('catalog')}
            id="btnCatalog"
            className={`flex-1 py-2 rounded-lg font-bold transition ${
              activeTab === 'catalog'
                ? 'bg-[#D4AF37] text-black'
                : 'text-gray-400 font-medium'
            }`}
          >
            {t.tab1}
          </button>
          <button
            onClick={() => setActiveTab('tradein')}
            id="btnTradein"
            className={`flex-1 py-2 rounded-lg font-bold transition ${
              activeTab === 'tradein'
                ? 'bg-[#D4AF37] text-black'
                : 'text-gray-400 font-medium'
            }`}
          >
            {t.tab2}
          </button>
        </div>

        {/* TAB 1: CATALOG VIEW */}
        {activeTab === 'catalog' && (
          <div id="tabCatalog" className="space-y-3">
            <div className="bg-[#141414] p-3 rounded-xl gold-border flex justify-between items-center">
              <div>
                <h3 className="text-xs font-bold text-gray-200">{t.catHeader}</h3>
                <p className="text-[10px] text-gray-400">{t.catSub}</p>
              </div>
              <span className="text-[10px] bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-0.5 rounded-md gold-border font-bold">
                {t.catBadge}
              </span>
            </div>

            <div className="space-y-2">
              {sampleCatalog.map((phone) => (
                <div
                  key={phone.id}
                  className="bg-[#141414] p-3 rounded-xl border gold-border flex justify-between items-center gap-2 hover:border-[#D4AF37]/70 transition"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-100">{phone.model}</span>
                      {phone.isSpecial && (
                        <span className="text-[8px] bg-[#D4AF37]/20 text-[#D4AF37] px-1.5 py-0.5 rounded gold-border font-bold">
                          {t.catBadge}
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-gray-400 flex items-center gap-1.5">
                      <span>{phone.storage}</span>
                      <span>·</span>
                      <span className="text-emerald-400">باتری {phone.battery}%</span>
                      <span>·</span>
                      <span className="text-[#D4AF37]">{phone.warrantyDays} روز مهلت تست</span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right flex flex-col items-end gap-1">
                    <span className="text-xs font-bold text-[#D4AF37] tabular-nums">
                      {phone.priceToman.toLocaleString(lang === 'fa' ? 'fa-IR' : lang === 'ar' ? 'ar-EG' : 'en-US')} تومان
                    </span>
                    <a
                      href="tel:02122700000"
                      className="text-[10px] bg-black/60 gold-border hover:bg-[#D4AF37] hover:text-black text-gray-300 px-2.5 py-0.5 rounded transition"
                    >
                      {t.orderBtn}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: TRADE-IN VALUATION VIEW */}
        {activeTab === 'tradein' && (
          <div id="tabTradein" className="space-y-3 bg-[#141414] p-4 rounded-xl gold-border">
            <h3 className="text-xs font-bold text-[#D4AF37]">{t.calcTitle}</h3>
            <input
              type="text"
              id="phoneModel"
              placeholder={t.phoneModelPlaceholder}
              value={phoneModel}
              onChange={(e) => setPhoneModel(e.target.value)}
              className="w-full bg-black/50 border gold-border rounded-lg p-2 text-xs text-white mb-2 focus:outline-none focus:border-[#D4AF37]"
            />
            <button
              onClick={calculatePrice}
              className="w-full bg-[#D4AF37] text-black font-bold py-2 rounded-lg text-xs hover:bg-[#E5C158] transition"
            >
              {t.calcBtn}
            </button>
            {tradeinResult && (
              <div id="calcResult" className="text-center text-xs text-[#D4AF37] mt-2 font-semibold">
                {tradeinResult}
              </div>
            )}
          </div>
        )}

      </main>

      {/* SCRIPT D: FOOTER WITH DIRECT CALL, EBAR CITY METAVERSE & AFARINESH ECOSYSTEM CREDITS */}
      <footer className="bg-[#141414] border-t gold-border p-4 text-center space-y-3">
        <div className="max-w-md mx-auto flex justify-around items-center">
          <a href="tel:02122700000" className="text-xs text-[#D4AF37] font-bold hover:underline">
            {t.directCall}
          </a>
          <span className="text-gray-600">|</span>
          <span className="text-[11px] text-gray-400">{t.directLocation}</span>
        </div>

        {/* Box for Developer & Massive Projects */}
        <div className="pt-3 border-t border-gray-900 space-y-1.5">
          <p className="text-[10px] text-[#D4AF37] font-bold">
            {t.footerDevTitle}
          </p>
          <p className="text-[9px] text-gray-400 leading-relaxed px-2">
            {t.footerDevBio}
          </p>
          <div className="pt-1">
            <a
              href="mailto:siavashhamiri@gmail.com"
              className="inline-block text-[9px] bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded-full gold-border font-semibold transition"
            >
              {t.footerEmailBtn}
            </a>
          </div>
        </div>
        <p className="text-[8px] text-gray-600 mt-1">{t.footerHonor}</p>
      </footer>

    </div>
  );
}
