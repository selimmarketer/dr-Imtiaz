import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function QuickAppointment() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <div id="quick-appointment-strip" className="bg-gold py-4 px-4 md:px-8 shadow-md relative z-30 font-bengali">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left message (Desktop only as requested) */}
        <div className="hidden md:flex items-center gap-3 text-dark font-black text-lg">
          <Phone className="w-6 h-6 text-dark shrink-0" />
          <span>সহজ সিরিয়াল ও চেম্বার বুকিং</span>
        </div>

        {/* Form Container or Success State */}
        {submitted ? (
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 border-2 border-emerald-500 bg-stone-900 p-4 rounded-2xl text-white text-center sm:text-left transition-all shadow-md">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <CheckCircle2 className="w-5.5 h-5.5 text-emerald-400 shrink-0" />
              <p className="text-xs sm:text-sm font-extrabold text-[#E2E8F0] leading-relaxed">
                ধন্যবাদ! আপনার নম্বরটি সফলভাবে গ্রহণ করা হয়েছে। সিরিয়াল নিশ্চিত করতে এখনই কল দিতে পারেন: <a href="tel:01849891298" className="text-gold hover:underline font-bold font-sans text-sm xs:text-base ml-1">01849-891298</a>
              </p>
            </div>
            <button
              onClick={() => { setPhone(''); setSubmitted(false); }}
              className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl border-none font-black cursor-pointer shrink-0 transition-colors"
            >
              নতুন বুকিং
            </button>
          </div>
        ) : (
          <form onSubmit={handleBook} className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3 flex-grow max-w-2xl">
            <div className="relative w-full flex-grow">
              <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-stone-500">
                <Phone className="w-4.5 h-4.5 shrink-0" />
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="আপনার মোবাইল নম্বর লিখুন (যেমন: 018XXXXXXXX)"
                className="w-full bg-white text-dark placeholder-stone-500 border border-transparent rounded-xl py-3 pl-11 pr-4 text-sm font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all font-sans"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full sm:w-auto shrink-0 bg-dark hover:bg-neutral-900 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:scale-103 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 border-none"
            >
              <span>সিরিয়াল অনুরোধ পাঠান</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </form>
        )}
        
      </div>
    </div>
  );
}
