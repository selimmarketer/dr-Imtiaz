import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, ArrowRight, TrendingDown } from 'lucide-react';

interface CaseStudy {
  id: number;
  category: string;
  title: string;
  issue: string;
  duration: string;
  image: string;
  beforeLabel: string;
  beforeVal: string;
  beforeState: string;
  afterLabel: string;
  afterVal: string;
  afterState: string;
  beforeItems: string[];
  afterItems: string[];
  feedback: string;
}

export default function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(1);

  const cases: CaseStudy[] = [
    {
      id: 1,
      category: "ডায়াবেটিস নিয়ন্ত্রণ",
      title: "টাইপ-২ জটিল ডায়াবেটিস ও রক্তের শর্করা নিরাময়",
      issue: "অতিরিক্ত ইনসুলিন নির্ভরতা ও রক্তে অমীমাংসিত উচ্চ শর্করা",
      duration: "৩ মাস",
      image: "/images/diabetic_control_wellness_check_1780495727116.png",
      beforeLabel: "পূর্বের HbA1c লেভেল",
      beforeVal: "১০.৮%",
      beforeState: "উচ্চ ঝুঁকিপূর্ণ সুগার লেভেল",
      afterLabel: "বর্তমান HbA1c লেভেল",
      afterVal: "৬.২%",
      afterState: "সম্পূর্ণ স্বাভাবিক ও নিয়ন্ত্রিত",
      beforeItems: [
        "খালি পেটে সুগার ১৪+ mmol/L",
        "প্রস্রাবে অ্যালবুমিন নির্গমন ও ক্লান্তি ভাব",
        "দৈনিক উচ্চ মাত্রার ইনসুলিন নির্ভরতা"
      ],
      afterItems: [
        "খালি পেটে সুগার স্বাভাবিক (৫.৫ mmol/L)",
        "ইনসুলিনের প্রয়োজনীয়তা শূন্যে নেমে এসেছে",
        "শারীরিক ক্লান্তি দূর হয়ে কর্মোদ্যম বৃদ্ধি"
      ],
      feedback: "“ডা. অর্ক স্যারের ডায়াবেটিস ম্যানেজমেন্ট প্ল্যান এবং খাদ্যাভ্যাসের নির্দেশিকায় আমি জীবন ফিরে পেয়েছি। ইনসুলিন ছাড়াই এখন সুগার পুরোপুরি স্বাভাবিক।” - রফিকুল ইসলাম (৪৫, মধুখালী)"
    },
    {
      id: 2,
      category: "হৃদরোগ ও ফ্যাটি লিভার",
      title: "ফ্যাটি লিভার গ্রেড-২ উপশম ও ওজন হ্রাস",
      issue: "অতিরিক্ত মেদজনিত স্থূলতা এবং লিভারে মেদ সঞ্চয়",
      duration: "৪ মাস",
      image: "/images/dr_consulting_bangladeshi_patient_1780495683804.png",
      beforeLabel: "পূর্বের শারীরিক ওজন",
      beforeVal: "৯৪ কেজি",
      beforeState: "ফ্যাটি লিভার গ্রেড-২",
      afterLabel: "বর্তমান শারীরিক ওজন",
      afterVal: "৭৮ কেজি",
      afterState: "ফ্যাটি লিভার গ্রেড-১ (নরমাল)",
      beforeItems: [
        "উচ্চ রক্তচাপ (১৬০/১০০ mmHg)",
        "পেটে অতিরিক্ত মেদ ও ফ্যাটি লিভার",
        "সামান্য হাঁটলেই বুক ধড়ফড় করা"
      ],
      afterItems: [
        "রক্তচাপ ১২০/৮০ mmHg (স্বাভাবিক)",
        "ওজন ১৬ কেজি হ্রাস ও মেদমুক্ত কোমর",
        "বিনা ক্লান্তিতে দীর্ঘ পথ হাঁটার সক্ষমতা"
      ],
      feedback: "“স্যারের পরামর্শে সঠিক খাদ্যাভ্যাস এবং ওষুধের নিয়ন্ত্রণে রক্তচাপ ও ফ্যাটি লিভারের সমস্যা কাটিয়ে স্বাভাবিক ওজন ফিরে পেয়েছি।” - মারুফ হাসান (৩৮, ফরিদপুর)"
    },
    {
      id: 3,
      category: "অ্যালার্জি ও হাঁপানি",
      title: "হাঁপানি ও দীর্ঘস্থায়ী অ্যালার্জি থেকে মুক্তি",
      issue: "ঘন ঘন অ্যাজমা ও ডাস্ট অ্যালার্জি, দৈনিক ইনহেলার নির্ভরতা",
      duration: "২ মাস",
      image: "/images/clinical_diagnostic_healthy_skincare_1780495702774.png",
      beforeLabel: "ইনহেলার ব্যবহার",
      beforeVal: "৩ বার/প্রতিদিন",
      beforeState: "ঘন হাঁপানি ও ধূলিকণায় তীব্র অ্যালার্জি",
      afterLabel: "ইনহেলার ব্যবহার",
      afterVal: "প্রয়োজন নেই",
      afterState: "মুক্ত ফুসফুস ও স্বাভাবিক প্রতিরোধ ক্ষমতা",
      beforeItems: [
        "ধুলোবালিতে গেলেই তীব্র হাঁচি ও দমবন্ধ ভাব",
        "দৈনিক একাধিকবার ব্রঙ্কোডায়লেটর ইনহেলার",
        "মাথাব্যথা ও রাতে ঘুমাতে গুরুতর সমস্যা"
      ],
      afterItems: [
        "ইনহেলারের প্রয়োজনীয়তা সম্পূর্ণ দূরীকরণ",
        "অ্যালার্জি ছাড়াই অবাধ মুক্ত বায়ু সেবন",
        "যন্ত্রণাহীন গভীর ও আরামদায়ক রাতের ঘুম"
      ],
      feedback: "“বছরের পর বছর হাঁপানিতে ভুগেছি। ডা. অর্ক স্যারের চমৎকার মেডিকেশন আমার ফুসফুসকে পুনরায় সুস্থ করে দিয়েছে।” - শাহানা বেগম (৫২, মধুখালী)"
    },
    {
      id: 4,
      category: "কসমেটোলজি ও পিআরপি",
      title: "অ্যাডভান্সড কসমেটোলজি ও স্কিন পিআরপি ট্রিটমেন্ট",
      issue: "তীব্র ব্রণ, দাগ ও মাথার চুল পড়ার চুলকানিযুক্ত সমস্যা",
      duration: "৩ মাস",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
      beforeLabel: "পূর্বের অবস্থা",
      beforeVal: "গ্রেড-৩ ড্যামেজ",
      beforeState: "তীব্র দাগ ও চুল পড়ার সমস্যা",
      afterLabel: "চিকিৎসাত্তোর অবস্থা",
      afterVal: "শতভাগ পুনরুদ্ধার",
      afterState: "দীপ্তিময় ত্বক ও নতুন চুল গজানোর সূচনা",
      beforeItems: [
        "তীব্র ব্রণের কালো দাগ ও অস্বস্তিকর চুলকানি",
        "অতিরিক্ত চুল ঝরে মাথা ফাঁকা হয়ে যাওয়ার উপক্রম"
      ],
      afterItems: [
        "দাগহীন উজ্জ্বল সতেজ ও প্রাণবন্ত স্কিন",
        "চুল পড়া সম্পূর্ণ বন্ধ ও মাথায় ঘন নতুন চুল"
      ],
      feedback: "“ডা. অর্ক স্যারের উন্নত পিআরপি ও স্কিন কেয়ার গাইডলাইনের মাধ্যমে আমার ত্বক ও চুল হারানোর হাত থেকে মুক্তি পেয়েছি।” - ফারহানা সিদ্দিকা (২৮, ফরিদপুর)"
    }
  ];

  const currentCase = cases.find(c => c.id === activeCase) || cases[0];

  return (
    <section id="clinical-records" className="bg-[#FAF9F6] py-16 md:py-24 border-b border-stone-200 font-bengali">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">
            বাস্তব রোগ মুক্তি ও আরোগ্য চিত্র <span className="text-teal-700">(Before & After)</span>
          </h2>
          <p className="text-stone-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            কোনোরকম অতিরিক্ত দীর্ঘ টেক্সট ছাড়া বাস্তব রিপোর্ট বিশ্লেষণ। ডায়াগনস্টিক নির্ভুলতা ও বিজ্ঞানভিত্তিক জীবনযাত্রার সমন্বয়ে রোগীদের সফল পরিবর্তনের উজ্জ্বল নিদর্শন।
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mb-10 max-w-2xl mx-auto bg-stone-100 p-1.5 rounded-2xl border border-stone-200">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(c.id)}
              className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex-1 flex items-center justify-center gap-2 ${
                activeCase === c.id
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'text-stone-700 hover:bg-stone-200'
              }`}
            >
              <span>{c.category}</span>
            </button>
          ))}
        </div>

        {/* Diagnostic Visual Box Card - Beautiful 3 Column Layout */}
        <div className="relative bg-white border border-stone-200 rounded-3xl p-5 md:p-8 shadow-sm flex flex-col gap-6 md:gap-8 transition-all duration-300 animate-slide-up-or-pop">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-stone-100 pb-4 gap-3">
            <div>
              <span className="bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200/50">
                {currentCase.category}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-stone-800 mt-2">
                {currentCase.title}
              </h3>
            </div>
            <div className="text-stone-500 font-bold text-xs bg-stone-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <span>⏰ আরোগ্য সময়কাল:</span>
              <span className="text-teal-700 font-extrabold">{currentCase.duration}</span>
            </div>
          </div>

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Col - Before Treatment */}
            <div className="lg:col-span-4 bg-red-50/50 border border-red-100/70 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <span className="bg-red-100 text-red-800 text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-3">
                  🔴 চিকিৎসার পূর্বে
                </span>
                <p className="text-red-950 text-sm font-bold mb-4">{currentCase.issue}</p>
                <ul className="space-y-2.5">
                  {currentCase.beforeItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-stone-700 text-xs md:text-sm">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-red-100 flex items-center gap-3">
                <div className="bg-red-100 text-red-600 p-2 rounded-lg shrink-0">
                  <TrendingDown className="w-5 h-5 rotate-180" />
                </div>
                <div>
                  <span className="text-red-800 text-xs block">{currentCase.beforeLabel}</span>
                  <span className="text-red-700 text-xl font-extrabold font-sans">{currentCase.beforeVal}</span>
                  <span className="text-stone-500 text-[11px] block">{currentCase.beforeState}</span>
                </div>
              </div>
            </div>

            {/* Middle Col - AI Realistic Image matching the case */}
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden border border-stone-200 min-h-[220px] lg:min-h-auto flex items-center justify-center bg-stone-50">
              <img
                src={currentCase.image}
                alt={currentCase.category}
                referrerPolicy="no-referrer"
                loading="lazy"
                width={400}
                height={320}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?auto=format&fit=crop&q=80&w=600";
                }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-3 bg-teal-800 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1">
                <span>🛡️</span> বাস্তব চিকিৎসা পর্যবেক্ষণ
              </span>
            </div>

            {/* Right Col - After Treatment */}
            <div className="lg:col-span-4 bg-emerald-50/50 border border-emerald-100/70 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-3">
                  🟢 চিকিৎসার পরে
                </span>
                <p className="text-emerald-950 text-sm font-bold mb-4">সুস্থ ও স্বাভাবিক জীবন ফিরে পাওয়া</p>
                <ul className="space-y-2.5">
                  {currentCase.afterItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-stone-800 text-xs md:text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-100 flex items-center gap-3">
                <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <span className="text-emerald-800 text-xs block">{currentCase.afterLabel}</span>
                  <span className="text-emerald-700 text-xl font-extrabold font-sans">{currentCase.afterVal}</span>
                  <span className="text-emerald-600 text-[11px] block font-bold">{currentCase.afterState}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Testimonial Quote */}
          <div className="bg-stone-50 border border-stone-150 rounded-2xl p-4 text-center text-xs md:text-sm text-stone-700 italic font-medium leading-relaxed max-w-3xl mx-auto w-full">
            {currentCase.feedback}
          </div>

        </div>

      </div>
    </section>
  );
}
