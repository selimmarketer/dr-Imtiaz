import React from 'react';
import {
  MessageSquare,
  FileText,
  PhoneCall,
  ClipboardList,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

interface ProcessStep {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export default function OnlineProcess() {
  const steps: ProcessStep[] = [
    {
      number: "১",
      icon: MessageSquare,
      title: "WhatsApp করুন",
      desc: "01849-891298 নম্বরে আপনার নাম ও সমস্যা লিখে পাঠান।"
    },
    {
      number: "২",
      icon: FileText,
      title: "বিবরণ দিন",
      desc: "নাম, বয়স, সমস্যার বিবরণ, কতদিন এবং পূর্বের রিপোর্ট থাকলে পাঠান।"
    },
    {
      number: "৩",
      icon: PhoneCall,
      title: "ভিডিও/অডিও কল",
      desc: "ডাক্তার নির্ধারিত সময়ে ভিডিও বা অডিও কলে সরাসরি আপনার অবস্থা শুনবেন।"
    },
    {
      number: "৪",
      icon: ClipboardList,
      title: "প্রেসক্রিপশন পান",
      desc: "ডিজিটাল প্রেসক্রিপশন পাবেন ও প্রয়োজনে প্রয়োজনীয় টেস্টের এডভাইস দেওয়া হবে।"
    }
  ];

  const infoRequirements = [
    "রোগীর পূর্ণ নাম ও বয়স",
    "প্রধান সমস্যার বিবরণ",
    "সমস্যাটি কতদিন ধরে রয়েছে",
    "আগের কোনো ওষুধ চললে তার বিবরণ",
    "পূর্বের প্রেসক্রিপশন বা টেস্ট রিপোর্ট (যদি থাকে)"
  ];

  const treatableDiseases = [
    "ডায়াবেটিস নিয়ন্ত্রণ ও পরামর্শ",
    "উচ্চ রক্তচাপ (হাই প্রেশার)",
    "অ্যালার্জি, চর্ম ও চুলকানি রোগ",
    "শ্বাসকষ্ট ও হাঁপানি ও এ্যাজমা",
    "হৃদরোগ ও কিডনির সাধারণ চিকিৎসা",
    "জ্বর, ঠাণ্ডা, কাশি ও পেটের পীড়া",
    "গর্ভকালীন সাধারণ স্বাস্থ্য উপদেশ"
  ];

  return (
    <section
      id="how-works"
      className="bg-bg-light py-16 md:py-24 border-b border-primary/5"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[42px] font-black font-bengali text-dark mb-4">
            অনলাইন পরামর্শ <span className="text-gold border-b-2 border-gold pb-0.5">কীভাবে নেবেন?</span>
          </h2>
          <p className="text-text-muted font-bengali text-base max-w-xl mx-auto leading-relaxed">
            খুবই সহজ ৪টি পদক্ষেপে আপনি ঘরে বসেই নির্ভরযোগ্য ও তথ্যবহুল বিশেষজ্ঞ মোবাইল প্রেসক্রিপশন সেবা গ্রহণ করতে পারেন
          </p>
        </div>

        {/* 4-Step Diagram Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative flex flex-col items-center w-full"
              >
                
                {/* Step Card */}
                <div className="w-full h-full bg-white rounded-2xl shadow-md border border-neutral-100 hover:border-primary/20 px-4 py-6 md:px-6 md:py-8 text-center relative transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between">
                  <div>
                    {/* Absolute Step badge number */}
                    <div className="absolute top-3.5 left-3.5 bg-primary text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm shadow-sm font-sans">
                      {step.number}
                    </div>

                    {/* Icon centered */}
                    <div className="bg-gold/10 text-gold p-3 md:p-3.5 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mx-auto mb-4 border border-gold/10 shadow-inner">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                    </div>

                    {/* Text details */}
                    <h3 className="text-sm md:text-lg font-bold font-bengali text-dark mb-1.5 md:mb-2.5">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-text-muted font-bengali text-xs md:text-sm leading-relaxed mt-auto">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow Connector (Hidden on mobile and last column) */}
                {idx < 3 && (
                  <div className="hidden lg:flex items-center absolute top-[45%] -right-4 translate-x-1/2 -translate-y-1/2 z-10 text-primary bg-[#E8F5E9] p-1.5 rounded-full border border-teal-100">
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Detailed Panels - 2 Column Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-primary rounded-3xl p-6 md:p-10 text-white shadow-xl max-w-5xl mx-auto border border-teal-500/10">
          
          {/* Left Column Information Cards */}
          <div className="lg:col-span-6 font-bengali">
            <h3 className="text-xl font-bold text-gold border-b border-white/10 pb-3 mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              কী কী তথ্য সঙ্গে রাখবেন?
            </h3>
            <ul className="space-y-3.5">
              {infoRequirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column Information Cards */}
          <div className="lg:col-span-6 font-bengali">
            <h3 className="text-xl font-bold text-gold border-b border-white/10 pb-3 mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              কোন রোগগুলো অনলাইনে দেখা যায়?
            </h3>
            <ul className="space-y-3.5">
              {treatableDiseases.map((dis, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span>{dis}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
