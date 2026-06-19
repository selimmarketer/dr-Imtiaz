import React from 'react';
import {
  ShieldCheck,
  GraduationCap,
  Wifi,
  Clock,
  MessageCircle
} from 'lucide-react';

interface ChoiceCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export default function WhyChoose() {
  const choices: ChoiceCard[] = [
    {
      icon: ShieldCheck,
      title: "সরকারি BCS ও বিএমডিসি নিবন্ধিত",
      desc: "সরকারি স্বাস্থ্য ক্যাডার চিকিৎসক (নিবন্ধন নং: A-86402), ফরিদপুর মেডিকেল কলেজে কর্মরত।"
    },
    {
      icon: GraduationCap,
      title: "বারডেম (BIRDEM) ডায়াবেটিক ডিগ্রি",
      desc: "বারডেম হাসপাতাল থেকে CCD ডিগ্রিপ্রাপ্ত ডায়াবেটিস ও সুগার নিয়ন্ত্রণের অভিজ্ঞ চিকিৎসক।"
    },
    {
      icon: Wifi,
      title: "২৪/৭ দূরবর্তী অনলাইন WhatsApp সেবা",
      desc: "দূর সম্পর্কের রোগীরা দেশের যেকোনো প্রান্ত থেকে অতি সহজে ভিডিও কলে পরামর্শ নিতে পারেন।"
    },
    {
      icon: Clock,
      title: "বৃহস্পতিবার থেকে সোমবার ও শুক্রবার নিয়মিত চেম্বার",
      desc: "নির্দিষ্ট সময়ে চেম্বারে সরাসরি এবং বাকি সময়গুলোতে দূরবর্তী অনলাইন কল দিয়ে রোগী দেখেন।"
    },
    {
      icon: MessageCircle,
      title: "মানবিক ও সম্পূর্ণ ধৈর্যশীল আচরণ",
      desc: "ভিড়ের মাঝে কোনো তাড়াহুড়ো ছাড়া রোগীকে পর্যাপ্ত সময় দিয়ে হাসি মুখে পরামর্শ নিশ্চিত করেন।"
    }
  ];

  return (
    <section
      id="why-choose"
      className="bg-bg-light py-16 md:py-24 border-b border-primary/5"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title Centered */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[42px] font-black font-bengali text-dark mb-4">
            কেন বেছে নেবেন <span className="text-gold border-b-2 border-primary/20 pb-1">ডা. ইমতিয়াজকে?</span>
          </h2>
          <p className="text-text-muted font-bengali text-base max-w-2xl mx-auto leading-relaxed">
            রোগীর যত্নশীল আরোগ্য ও নিবিড় মানসিক আশ্বস্ততাই আমাদের মূল ভিত্তি। পেশাদারত্ব, সত্যতা আর বিজ্ঞানসম্মত যত্ন একটি ছাদের নিচে
          </p>
        </div>

        {/* Bento Grid with Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {choices.map((choice, idx) => {
            const Icon = choice.icon;
            return (
              <div
                key={idx}
                className={`bg-white border border-primary/10 rounded-3xl p-6 md:p-8 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl transition-all duration-300 transform shadow-sm ${
                  idx === choices.length - 1 ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : ''
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-5">
                  {/* Icon Box */}
                  <div className="bg-gold/10 text-gold p-4 rounded-2xl shrink-0 border border-gold/15">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>

                  {/* Text panel */}
                  <div className="font-bengali">
                    <h3 className="text-lg md:text-xl font-bold text-dark mb-2">
                      {choice.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed md:leading-loose">
                      {choice.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
