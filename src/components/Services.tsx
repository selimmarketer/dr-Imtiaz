import React from 'react';
import {
  Heart,
  Activity,
  Wind,
  Droplets,
  User,
  Baby,
  Phone
} from 'lucide-react';

interface ServiceItem {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  type: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: 1,
      icon: Heart,
      title: "হৃদরোগ ও বুকের সমস্যা",
      desc: "উচ্চ রক্তচাপ, বুকে ব্যথা, হার্ট ফেইলিউর, ইরেগুলার হার্টবিট সহ সকল হৃদ সমস্যায় গুণমানসম্পন্ন ও অভিজ্ঞ চিকিৎসাসেবা প্রদান করা হয়।",
      type: "heart"
    },
    {
      id: 2,
      icon: Activity,
      title: "ডায়াবেটিস ম্যানেজমেন্ট",
      desc: "টাইপ-১, টাইপ-২ ডায়াবেটিস, রক্তে শর্বরা নিয়ন্ত্রণ, ডায়াবেটিক ক্ষত ও জটিলতা প্রতিরোধ এবং আধুনিক ও বৈজ্ঞানিক ইনসুলিন গাইডেন্স কেয়ার।",
      type: "diabetes"
    },
    {
      id: 3,
      icon: Wind,
      title: "শ্বাসকষ্ট ও হাঁপানি চিকিৎসা",
      desc: "দীর্ঘস্থায়ী এ্যাজমা, COPD, হুপিং কাশি, শ্বাসনালীর সংক্রমণ, ব্রঙ্কাইটিস এবং ফুসফুসের জটিল কোনো ধূলিকণাজনিত রোগের অভিজ্ঞ চিকিৎসা সুবিধা।",
      type: "breathing"
    },
    {
      id: 4,
      icon: Droplets,
      title: "কিডনি ও মূত্রনালী সমস্যা",
      desc: "কিডনি স্টোন, ক্রনিক কিডনি রোগ (CKD), ইউরিন ইনফেকশন বা মূত্রনালীর জ্বালাপোড়া ও জটিল প্রস্রাবজনিত যন্ত্রণার আধুনিক চিকিৎসা...",
      type: "kidney"
    },
    {
      id: 5,
      icon: User,
      title: "চর্ম ও যৌন রোগ",
      desc: "ত্বকের অ্যালার্জি, একজিমা, সোরিয়াসিস, চুলকানি, এলার্জিক র‍্যাশ ও সাধারণ যৌন স্বাস্থ্য বিষয়ক পারিবারিক গোপন পরামর্শ ও স্থায়ী সমাধান...",
      type: "skin"
    },
    {
      id: 6,
      icon: Baby,
      title: "মা ও শিশু রোগ চিকিৎসাসেবা",
      desc: "গর্ভকালীন পুষ্টি ও বিভিন্ন শারীরিক উপসর্গ উপশম গাইড, নবজাতকের জ্বর, ঠাণ্ডা, পাতলা পায়খানা, ইনফেকশন ও বাচ্চাদের সামগ্রিক দৈহিক প্রবৃদ্ধি...",
      type: "child"
    }
  ];

  const handleServiceClick = (type: string) => {
    let value = "অন্যান্য";
    if (type === "heart") value = "হৃদরোগ/বুকে ব্যথা";
    else if (type === "diabetes") value = "ডায়াবেটিস";
    else if (type === "breathing") value = "শ্বাসকষ্ট/হাঁপানি";
    else if (type === "kidney") value = "কিডনি";
    else if (type === "skin") value = "চর্ম ও যৌন";
    else if (type === "child") value = "মা ও শিশু";

    window.dispatchEvent(new CustomEvent('select-appointment-service', { detail: value }));

    const element = document.querySelector('#appointment');
    if (element) {
      const offset = 110;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="services"
      className="bg-dark py-16 md:py-24 border-b border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[42px] font-black font-bengali text-white mb-4">
            যে সকল রোগের <span className="text-gold">চিকিৎসা দেওয়া হয়</span>
          </h2>
          <p className="text-stone-400 font-bengali text-base max-w-2xl mx-auto leading-relaxed">
            সরকারি হাসপাতালের সমৃদ্ধ ও প্রায়োগিক অভিজ্ঞতার আলোকে নিচের সেবাগুলো প্রদান করা হচ্ছে
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="bg-[#1B5E35]/30 border border-white/10 rounded-3xl p-6 md:p-7 backdrop-blur-sm shadow-lg flex flex-col justify-between hover:translate-y-[-6px] hover:border-gold/40 hover:shadow-2xl transition-all duration-300 relative group"
              >
                <div>
                  {/* Icon wrap */}
                  <div className="bg-gold/10 text-gold p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-4 border border-gold/15 group-hover:scale-105 transition-all">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>

                  {/* Text details */}
                  <h3 className="text-lg md:text-xl font-bold font-bengali text-white mb-2.5 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/85 font-bengali text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Submit / Link trigger action */}
                <button
                  onClick={() => handleServiceClick(service.type)}
                  className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-dark font-black font-bengali py-3 rounded-xl transition-all active:scale-[0.98] shadow-md border-none cursor-pointer text-sm"
                >
                  <Phone className="w-4 h-4 text-dark shrink-0" />
                  <span>সিরিয়াল বুকিং করুন</span>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
