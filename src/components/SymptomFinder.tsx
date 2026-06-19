import React from 'react';
import {
  Heart,
  Activity,
  Wind,
  Droplets,
  User,
  Baby,
  Thermometer,
  Bone,
  Brain,
  Stethoscope,
  Phone,
} from 'lucide-react';
import { buildWhatsAppURL } from '../utils/whatsapp';

interface SymptomChip {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  type: string;
}

export default function SymptomFinder() {
  const chips: SymptomChip[] = [
    { icon: Heart, label: "হৃদরোগ / বুকে ব্যথা", type: "heart" },
    { icon: Activity, label: "ডায়াবেটিস / রক্তে শর্করা", type: "diabetes" },
    { icon: Activity, label: "উচ্চ রক্তচাপ / প্রেসার", type: "bp" },
    { icon: Wind, label: "সরাসরি শ্বাসকষ্ট / হাঁপানি", type: "breathing" },
    { icon: Droplets, label: "কিডনি সমস্যা", type: "kidney" },
    { icon: Activity, label: "গ্যাস্ট্রিক ও লিভার রোগ", type: "gastric" },
    { icon: User, label: "চর্ম ও যৌন রোগ", type: "skin" },
    { icon: Baby, label: "মা ও শিশু রোগ", type: "child" },
    { icon: Bone, label: "বাত-ব্যথা / জয়েন্ট ব্যথা", type: "ortho" },
    { icon: Brain, label: "মাথাব্যথা / মাইগ্রেন", type: "neuro" },
    { icon: Thermometer, label: "জ্বর / সাধারণ অসুখ", type: "general" },
    { icon: Stethoscope, label: "অন্যান্য সমস্যা", type: "other" },
  ];

  const handleChipClick = (type: string) => {
    const waUrl = buildWhatsAppURL(type);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOpenChamberModal = () => {
    window.dispatchEvent(new CustomEvent('open-chamber-modal'));
  };

  return (
    <section
      id="specialty"
      className="bg-dark py-16 md:py-20 border-b border-white/5 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#1B5E35_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 text-center">
        
        {/* Title area */}
        <h2 className="text-3xl md:text-5xl font-black font-bengali text-white mb-4">
          আপনার সমস্যাটি <span className="text-gold">কোনটি?</span>
        </h2>
        <p className="text-teal-400 font-bengali text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          নিচের যেকোনো সমস্যায় ক্লিক করুন — সরাসরি ডাক্তারের হোয়াটসঅ্যাপে যোগাযোগ করুন
        </p>

        {/* Symptoms Chips Grid - Formatted as symmetric, responsive grid of equal heights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 mb-10 max-w-4xl mx-auto">
          {chips.map((chip, index) => {
            const Icon = chip.icon;
            return (
              <button
                key={index}
                onClick={() => handleChipClick(chip.type)}
                className="flex flex-col items-center justify-center gap-2.5 p-3.5 bg-white/5 text-white/95 hover:bg-gold hover:text-dark rounded-2xl border border-white/10 hover:border-gold font-bengali font-bold text-xs xs:text-sm md:text-base transition-all duration-300 transform hover:-translate-y-0.5 select-none hover:shadow-lg hover:shadow-gold/10 group cursor-pointer h-[110px] sm:h-[120px] w-full"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:text-dark shrink-0 transition-colors" />
                <span className="leading-snug text-center font-bold text-xs xs:text-[13px] sm:text-[14px] md:text-base">{chip.label}</span>
              </button>
            );
          })}
        </div>

        {/* Footnote instruction */}
        <p className="text-white/40 text-xs md:text-sm font-bengali mb-10 italic">
          * সরাসরি হোয়াটসঅ্যাপে আপনার কাঙ্ক্ষিত সমস্যাটি উল্লেখ করে দ্রুত সিরিয়াল বুকিং করতে পারবেন।
        </p>

        {/* Bottom Banner Strip CTA */}
        <button
          onClick={handleOpenChamberModal}
          className="block w-full max-w-4xl mx-auto bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-dark font-black font-bengali px-4 py-4 rounded-2xl shadow-xl transition-all hover:scale-[1.01] duration-300 active:scale-[0.99] group overflow-hidden relative border-none cursor-pointer"
        >
          {/* subtle glow visual effect inside the border */}
          <div className="absolute inset-0 bg-white/15 translate-y-10 group-hover:translate-y-0 transition-transform duration-500"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
            <span className="flex items-center gap-1.5 text-sm md:text-base leading-none">
              <Phone className="w-5 h-5 shrink-0" />
              আজই অ্যাপয়েন্টমেন্ট নিন — নিয়মিত সময় ও বিস্তারিত চেম্বার সূচি দেখতে এখানে ক্লিক
            </span>
            <span className="bg-dark/10 h-4 w-px hidden md:inline"></span>
            <span className="font-sans font-extrabold text-sm md:text-base flex items-center gap-1 bg-dark/10 px-3 py-1 rounded-lg">
              01849-891298
            </span>
          </div>
        </button>

      </div>
    </section>
  );
}
