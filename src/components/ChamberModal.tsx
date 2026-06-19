import { useState, useEffect } from 'react';
import { X, Phone, Clock, MapPin, Calendar, HelpCircle } from 'lucide-react';

export default function ChamberModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    window.addEventListener('open-chamber-modal', handleOpen);
    window.addEventListener('close-chamber-modal', handleClose);

    return () => {
      window.removeEventListener('open-chamber-modal', handleOpen);
      window.removeEventListener('close-chamber-modal', handleClose);
    };
  }, []);

  // Handle ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  // Note: static list is no longer mapped dynamically to keep secondary clinics grouped in one elegant component box as requested
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop with elegant blur */}
      <div 
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-stone-950/80 backdrop-blur-md transition-opacity duration-300"
      ></div>

      {/* Modal Box container */}
      <div 
        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-out z-10 border border-stone-100 font-bengali flex flex-col animate-scale-up"
        style={{ maxHeight: '92vh' }}
      >
        {/* Header Row is simplified and shorter to prevent blocking content on narrow mobile screens */}
        <div className="relative p-4 pb-2 text-center border-b border-stone-100/60 shrink-0">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 bg-stone-100 hover:bg-stone-200 text-stone-600 p-1.5 rounded-full transition-all cursor-pointer border-none"
            aria-label="বন্ধ করুন"
          >
            <X className="w-4 h-4" />
          </button>

          <h3 className="text-base sm:text-lg font-black text-stone-900 flex items-center justify-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            চেম্বার সিরিয়াল বুকিং ও ঠিকানা
          </h3>
          <p className="text-[10.5px] text-emerald-800 font-bold mt-0.5 flex items-center justify-center gap-1">
            <span>👇 সব চেম্বার দেখতে নিচে স্ক্রোল করুন (Scroll Down)</span>
          </p>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-3.5 md:p-4.5 space-y-3.5 max-h-[66vh] custom-scroll">
          {/* Subtext info Banner strip */}
          <div className="bg-[#FFFDF4] border border-amber-200/50 rounded-2xl p-2.5 flex gap-2 text-left">
            <span className="text-base leading-none shrink-0">📢</span>
            <div>
              <h4 className="text-stone-900 font-bold text-xs leading-tight">ফোনে সিরিয়াল নেওয়ার সময়সূচী:</h4>
              <p className="text-[11px] text-stone-700 mt-0.5 leading-snug">
                প্রতিদিন সকাল <span className="font-sans font-bold text-amber-700 bg-amber-50 px-1 py-0.5 rounded border border-amber-200/50">০৮:০০টা</span> থেকে দুপুর <span className="font-sans font-bold text-amber-700 bg-amber-50 px-1 py-0.5 rounded border border-amber-200/50">১২:০০টা</span> পর্যন্ত সিরিয়ালের বুকিং নেওয়া হয়।
              </p>
            </div>
          </div>

          {/* Chambers list cards */}
          <div className="space-y-3.5">
            {/* 1. Ekota Diagnostic (Primary) */}
            <div className="border rounded-2xl p-3 bg-[#F1F9F5] border-emerald-500/20 shadow-xs flex flex-col gap-2">
              <div className="flex gap-2.5 items-center">
                <div className="w-8 h-8 rounded-xl shrink-0 flex items-center justify-center border bg-primary text-white border-primary">
                  <span className="text-sm">👑</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col">
                    <span className="text-[9px] max-w-max font-bold py-0.5 px-1.5 bg-emerald-600 text-white rounded tracking-wider font-bengali mb-0.5">
                      প্রধান চেম্বার
                    </span>
                    <h4 className="text-stone-900 font-extrabold text-xs sm:text-sm leading-tight font-bengali">
                      একতা ডায়াগনস্টিক ও ইমেজিং সেন্টার
                    </h4>
                  </div>
                  <p className="text-stone-500 text-[10px] font-medium flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                    <span>মধুখালী, ফরিদপুর (প্রধান চেম্বার)</span>
                  </p>
                </div>
              </div>

              {/* Patient visiting time info divided into clear separated rows to prevent confusion */}
              <div className="flex flex-col gap-2 rounded-xl px-3 py-2.5 bg-white border-2 border-emerald-500/20 text-stone-900 shadow-3xs font-bengali text-center items-center justify-center">
                <div className="flex items-center justify-center gap-1.5 text-xs font-black text-amber-700">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>রোগী দেখার সময়সূচি:</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm w-full">
                  <div className="text-center px-2 py-2.5 bg-emerald-50/40 rounded-xl border border-emerald-500/10 shadow-3xs">
                    <p className="font-extrabold text-stone-850 text-xs sm:text-[13px] leading-relaxed">
                      🗓️ <span className="text-stone-700 font-bold">বৃহস্পতিবার থেকে সোমবার:</span> <br className="xs:hidden" />
                      <span className="text-emerald-700 font-black block mt-0.5">বিকাল ৩:৩০ মিনিট থেকে সন্ধ্যা ৬:৩০ মিনিট</span>
                    </p>
                  </div>
                  <div className="text-center px-2 py-2.5 bg-emerald-50/40 rounded-xl border border-emerald-500/10 shadow-3xs">
                    <p className="font-extrabold text-stone-850 text-xs sm:text-[13px] leading-relaxed">
                      🗓️ <span className="text-stone-700 font-bold">শুক্রবার:</span> <br className="xs:hidden" />
                      <span className="text-emerald-700 font-black block mt-0.5">সকাল ১০টা থেকে দুপুর ২টা</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-[10px] rounded-lg px-2.5 py-1.5 leading-snug font-bold bg-emerald-50/50 text-emerald-800 border border-emerald-100/40">
                ⚠️ <b>নির্দেশনা:</b> প্রধান চেম্বার — এই সময়সূচী শুধুমাত্র এই চেম্বারের জন্য প্রযোজ্য।
              </div>

              {/* Direct Calling Button with bulletproof wrap layout */}
              <div className="grid grid-cols-1">
                <a
                  href="tel:01849891298"
                  className="w-full flex flex-col xs:flex-row items-center justify-between gap-2 border px-3 py-2 rounded-xl transition-all shadow-2xs group cursor-pointer text-[11px] md:text-xs font-black bg-primary hover:bg-emerald-700 text-white border-primary border-none"
                >
                  <div className="flex items-center gap-1.5 font-bengali text-[11px] sm:text-xs">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse bg-white"></span>
                    <span className="whitespace-nowrap">সরাসরি সিরিয়াল ও WhatsApp:</span>
                  </div>
                  <span className="font-sans flex items-center gap-1 bg-white/10 px-2.5 py-0.5 rounded-md border border-white/20 whitespace-nowrap text-[12px] sm:text-xs">
                    <Phone className="w-3 h-3 shrink-0 text-white" />
                    <span>01849-891298</span>
                  </span>
                </a>
              </div>
            </div>

            {/* 2. Grouped On-Call / Secondary Clinics Block */}
            <div className="border rounded-2xl p-3 bg-stone-50 border-stone-200/60 flex flex-col gap-2.5">
              <div className="flex gap-2.5 items-center pb-2 border-b border-stone-200/60">
                <div className="w-8 h-8 rounded-xl shrink-0 flex items-center justify-center border bg-amber-50 text-amber-800 border-amber-100">
                  <span className="text-sm">🏥</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-stone-900 font-extrabold text-sm leading-tight font-bengali flex items-center gap-1.5">
                    অন কল ও অন্যান্য চেম্বারসমূহ
                  </h4>
                  <p className="text-amber-800 text-[10px] font-bold font-bengali mt-0.5">অন কল সার্ভিস (On-Call Chambers)</p>
                </div>
              </div>

              {/* Listings */}
              <div className="space-y-2.5 font-bengali text-left px-0.5">
                {/* নূর */}
                <div className="flex items-start gap-1.5 text-xs">
                  <span className="text-primary mt-0.5 shrink-0 text-xs">📍</span>
                  <div>
                    <span className="font-extrabold text-stone-900 block leading-tight">নূর ডায়াগনষ্টিক সেন্টার</span>
                    <span className="text-stone-500 text-[10px] block mt-0.5 font-bold">মেডিকেল কলেজ সংলগ্ন, ফরিদপুর</span>
                  </div>
                </div>

                {/* বারাকা */}
                <div className="flex items-start gap-1.5 text-xs">
                  <span className="text-primary mt-0.5 shrink-0 text-xs">📍</span>
                  <div>
                    <span className="font-extrabold text-stone-900 block leading-tight">ফরিদপুর বারাকা ডায়াগনস্টিক সেন্টার</span>
                    <span className="text-stone-500 text-[10px] block mt-0.5 font-bold">মেডিকেল কলেজ ছোট গেট সংলগ্ন, ফরিদপুর</span>
                  </div>
                </div>

                {/* অনলাইন */}
                <div className="flex items-start gap-1.5 text-xs pt-2 border-t border-stone-200/40">
                  <span className="text-emerald-700 mt-0.5 shrink-0 text-xs">📱</span>
                  <div>
                    <span className="font-extrabold text-stone-900 block leading-snug">
                      অনলাইনে রোগী দেখাতে সরাসরি ফোন বা WhatsApp-এ যোগাযোগ করুন
                    </span>
                  </div>
                </div>
              </div>

              {/* Patient visiting time info */}
              <div className="flex flex-col gap-1.5 rounded-xl px-3 py-2 bg-white/85 border border-stone-200 text-stone-700 mt-0.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-amber-700 font-bengali">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>রোগী দেখার সময়সূচি:</span>
                </div>
                <span className="text-[12px] md:text-[13px] font-extrabold leading-relaxed text-stone-800 font-bengali bg-stone-50 px-2 py-0.5 rounded border border-stone-100 max-w-max">
                  অন কল চেম্বার (কোনো স্থায়ী সময়সূচী নেই)
                </span>
              </div>

              {/* Directive */}
              <div className="text-[10px] rounded-lg px-2.5 py-1.5 leading-snug font-bold bg-amber-50/70 text-amber-800 border border-amber-100/40 font-bengali">
                ⚠️ <b>নির্দেশনা:</b> চেম্বারে আসার আগের দিন অবশ্যই ফোন দিয়ে সিরিয়াল বুকিং কনফার্ম করবেন।
              </div>

              {/* Call Action Button with bulletproof stretch layouts */}
              <div className="grid grid-cols-1">
                <a
                  href="tel:01849891298"
                  className="w-full flex flex-col xs:flex-row items-center justify-between gap-2 border px-3 py-2 rounded-xl transition-all shadow-2xs group cursor-pointer text-[11px] md:text-xs font-black bg-white hover:bg-emerald-50 border-stone-200 text-stone-800"
                >
                  <div className="flex items-center gap-1.5 font-bengali text-[11px] sm:text-xs">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse bg-primary"></span>
                    <span className="whitespace-nowrap">অন কল বুকিং ও WhatsApp:</span>
                  </div>
                  <span className="font-sans flex items-center gap-1 bg-stone-100 px-2.5 py-0.5 rounded-md border border-stone-200 whitespace-nowrap text-primary text-[12px] sm:text-xs">
                    <Phone className="w-3 h-3 shrink-0 text-primary" />
                    <span>01849-891298</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Banner */}
        <div className="bg-stone-50 p-3.5 border-t border-stone-100 text-center shrink-0">
          <p className="text-[10px] text-stone-500 font-sans tracking-wide">
            Powered by <b className="text-[#1B5E35] font-black">SolviX Agency</b> — সুস্বাস্থ্যের ডিজিটাল পার্টনার
          </p>
        </div>
      </div>
    </div>
  );
}
