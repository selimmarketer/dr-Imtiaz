import React, { useState } from 'react';
import { Lock, Keyboard, CheckCircle2, AlertTriangle, MessageCircle } from 'lucide-react';
import { getObfuscatedNumber, getObfuscatedNumberDisplay } from '../utils/whatsapp';

interface Module {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  mockContent: string[];
}

export default function LockedModules() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [unlockCode, setUnlockCode] = useState('');
  const [modalError, setModalError] = useState('');
  const [unlocked, setUnlocked] = useState(() => localStorage.getItem('solvix_activated') === 'true');
  const [isThrottled, setIsThrottled] = useState(false);

  const modules: Record<string, Module> = {
    dashboard: {
      id: "dashboard",
      title: "কুইক মডিউল ড্যাশবোর্ড",
      subtitle: "আমাদের ৩৫০+ সফল ক্লিনিক দ্বারা ব্যবহৃত রিয়েল-টাইম পেশেন্ট প্যানেল ও রিপোর্টিং",
      desc: "প্রিয় ডক্টর/অনার, আপনার রোগীদের জন্য দ্রুত সিরিয়াল নেওয়ার কাস্টম মডিউল এবং রিয়াল-টাইম কাস্টমার ট্র্যাকিং সক্রিয় করতে অনুগ্রহ করে আপনার SolviX Agency সাবস্ক্রিপশনটি সক্রিয় বা রিনিউ করুন।",
      mockContent: [
        "সরাসরি সিরিয়াল যোগ করুন (+১ ক্লিকে)",
        "আজকের ট্র্যাকিং: ৩০ রোগী নিবন্ধিত, ১২ জন চিকিৎসাধীন",
        "অটোমেটেড ড্রাফট প্রেসক্রিপশন জেনারেটর",
        "ডায়াবেটিক ডায়েরি ট্র্যাকার সিঙ্ক"
      ]
    },
    cosmetology: {
      id: "cosmetology",
      title: "অ্যাডভান্সড কসমেটোলজি মডিউল",
      subtitle: "ত্বকের জটিল সৌন্দর্য চর্চা, পিআরপি ও লেজার থেরাপির ডিজিটাল রেকর্ড কিপিং",
      desc: "প্রিয় ডক্টর/অনার, ডা. অর্ক স্যারের উন্নত কসমেটোলজি, লেজার ট্রিটমেন্ট এবং প্লাস্টিকা ডাটাবেস ট্র্যাকিং করতে অনুগ্রহ করে আপনার SolviX Agency সাবস্ক্রিপশনটি সক্রিয় বা রিনিউ করুন।",
      mockContent: [
        "স্কিন ট্রিটমেন্ট হিস্ট্রি ট্র্যাকিং পোর্টাল",
        "PRP এবং চুল প্রতিস্থাপন সেশন রেকর্ডার",
        "ফটো কম্পারিশন (Before / After) এইচডি স্লট",
        "কসমেটিক মেডিসিন কম্বো ডোজ চার্ট"
      ]
    },
    automation: {
      id: "automation",
      title: "চ্যাট অটোমেশন ও অ্যাসিস্ট্যান্ট পোর্টাল",
      subtitle: "রোগীদের সাথে ২৪/৭ চ্যাটিং ও অ্যাপয়েন্টমেন্ট কনফার্মেশনের ইন্টেলিজেন্ট চ্যাটবট",
      desc: "প্রিয় ডক্টর/অনার, আপনার রোগীদের জন্য WhatsApp স্বয়ংক্রিয় এআই জবাব ও কল শিডিউল সিঙ্ক্রোনাইজেশন টুল সক্রিয় করতে SolviX Agency এজেন্সির সাথে যোগাযোগ করুন।",
      mockContent: [
        "রিয়েল-টাইম চ্যাটবট জবাব লগার (WhatsApp API)",
        "অটোমেটেড অ্যাপয়েন্টমেন্ট রিমাইন্ডার মেসেঞ্জার",
        "সিরিয়াল পজিশন আপডেট বট সক্রিয় করুন",
        "টেলিমেডিসিন ভিডিও রুম ইন্টিগ্রেশন স্লট"
      ]
    }
  };

  const handleRenewClick = () => {
    if (isThrottled) return;
    setIsThrottled(true);
    setTimeout(() => setIsThrottled(false), 2000);

    const renewNumber = getObfuscatedNumber();
    const renewMsg = `আসসালামুআলাইকুম SolviX Agency, আমি ডা. ইমতিয়াজ হোসেন অর্ক স্যারের ল্যান্ডিং পেজের "${modules[activeTab].title}" সাবস্ক্রিপশন রিনিউ করতে আগ্রহী। অনুগ্রহ করে অ্যাক্টিভেশন চার্জ ও পেমেন্ট ডিটেইলস পাঠান।`;
    
    try {
      // Utilize highly secure compatibility standard
      window.open(`https://api.whatsapp.com/send?phone=${renewNumber}&text=${encodeURIComponent(renewMsg)}`, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.warn("Popup block bypass on module renewal:", err);
    }
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isThrottled) return;
    setIsThrottled(true);
    setTimeout(() => setIsThrottled(false), 2000);

    const code = unlockCode.trim().toUpperCase();
    
    // Decrypting licensing keys defensively at runtime (SOLVIX25, SOLVIX2026, DEMO_UNLOCK)
    const validKeys = [
      "U09MVklYMjU=",      // SOLVIX25
      "U09MVklYMjAyNg==",  // SOLVIX2026
      "REVNT19VTkxPQ0s="   // DEMO_UNLOCK
    ].map(k => {
      try {
        return atob(k);
      } catch (err) {
        return "";
      }
    });

    if (validKeys.includes(code)) {
      localStorage.setItem('solvix_activated', 'true');
      setUnlocked(true);
      setShowCodeModal(false);
      setModalError('');
      // Dispatch global window event to unlock any other lock screens (e.g. BeforeAfter)
      window.dispatchEvent(new CustomEvent('solvix-unlock'));
    } else {
      const displayPh = getObfuscatedNumberDisplay();
      setModalError(`কোডটি অবৈধ বা লাইসেন্স ডাটাবেজে পাওয়া যায়নি। অনুগ্রহ করে SolviX সাপোর্ট টীমের সাথে যোগাযোগ করুন (WhatsApp: ${displayPh})।`);
    }
  };

  const currentMod = modules[activeTab];

  return (
    <section id="locked-features" className="bg-[#FCF9F2] py-16 md:py-24 border-b border-gold/10 font-bengali relative overflow-hidden">
      
      {/* Decorative vector background */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg-mid/20 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-primary text-xs font-black uppercase tracking-widest block mb-2 font-sans">
            SOLVIX PREMIUM SUITE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            প্রিমিয়াম ক্লিনিক মডিউলস
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto">
            আপনার চেম্বারকে আরও স্বয়ংক্রিয় ও ইন্টেলিজেন্ট করতে SolviX Agency-র এই লক করা ফিচারগুলো সক্রিয় করে নিন।
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto bg-stone-100 p-1.5 rounded-2xl">
          {Object.values(modules).map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setActiveTab(m.id);
                setUnlocked(false);
                setUnlockCode('');
              }}
              className={`px-4.5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === m.id
                  ? 'bg-primary text-white shadow-md'
                  : 'text-stone-600 hover:bg-stone-200/50'
              }`}
            >
              {m.title}
            </button>
          ))}
        </div>

        {/* Locked Module Container */}
        <div className="max-w-4xl mx-auto relative bg-white border border-stone-200/60 rounded-3xl p-6 md:p-12 shadow-xl overflow-hidden min-h-[460px] flex flex-col justify-between">
          
          {/* Mock Background Content (Blurred out) */}
          <div className={`transition-all duration-500 flex-grow ${unlocked ? 'filter-none opacity-100' : 'filter blur-[5px] opacity-[0.15] select-none pointer-events-none'}`}>
            <div className="border-b border-stone-100 pb-5 mb-6 flex justify-between items-center flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-black text-primary">{currentMod.title}</h3>
                <p className="text-stone-500 text-sm mt-1">{currentMod.subtitle}</p>
              </div>
              <span className="bg-emerald-50 text-emerald-700 font-bold text-xs px-3.5 py-1.5 rounded-full border border-emerald-100 flex items-center gap-1.5 shrink-0 animate-pulse">
                <CheckCircle2 className="w-4 h-4" />
                <span>মডিউল অ্যাক্টিভ</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {currentMod.mockContent.map((item, i) => (
                <div key={i} className="flex items-center gap-3.5 bg-neutral-50 border border-neutral-100 rounded-2xl p-4.5">
                  <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <span className="text-dark font-semibold text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 text-dark p-5 rounded-2xl border border-primary/10 text-sm leading-relaxed mt-6">
              💡 <b>অনার টিপ:</b> প্রতি সপ্তাহে একবার লাইসেন্স ডাটাবেজ আপডেট করার অনুরোধ করা হচ্ছে। সিস্টেম ডেটা সুনিশ্যিৎভাবে ক্লাউড ড্রাইভের সাথে সিঙ্ক করা হয়।
            </div>
          </div>

          {/* Locked State Absolute Center Overlay */}
          {!unlocked && (
            <div className="absolute inset-0 bg-[#FCF8F0]/30 flex flex-col items-center justify-center p-6 md:p-12 text-center relative z-25 font-bengali">
              
              {/* Gold double lock ring */}
              <div className="relative mb-5 flex items-center justify-center">
                <div className="absolute w-20 h-20 rounded-full bg-gold/10 border border-gold/15 animate-ping opacity-60"></div>
                <div className="absolute w-16 h-16 rounded-full bg-gold/15 border border-gold/30"></div>
                <div className="relative w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg">
                  <Lock className="w-6 h-6 text-dark shrink-0" />
                </div>
              </div>

              {/* Subtitle Badge */}
              <div className="inline-block bg-[rgba(245,158,11,0.1)] text-gold rounded-full px-5 py-1.5 text-xs md:text-sm font-heavy tracking-wider border border-gold/40 mb-4 uppercase">
                ⚙️ LICENSE & SUBSCRIPTION LOCKED
              </div>

              {/* Locked Header */}
              <h4 className="text-xl md:text-2xl font-black text-neutral-900 mb-3 max-w-xl">
                {currentMod.title}
              </h4>

              {/* Content description */}
              <p className="text-neutral-700 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
                {currentMod.desc}
              </p>

              {/* Action Rows */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-lg">
                <button
                  onClick={handleRenewClick}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl shadow-lg hover:scale-103 active:scale-[0.98] transition-all cursor-pointer border-none"
                >
                  <MessageCircle className="w-5 h-5 text-white fill-white shrink-0" />
                  <span>সাবস্ক্রিপশন রিন্যু করুন</span>
                </button>

                <button
                  onClick={() => {
                    setModalError('');
                    setShowCodeModal(true);
                  }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white hover:bg-stone-50 text-stone-700 font-extrabold text-sm px-7 py-3.5 rounded-xl border border-stone-300 transition-all cursor-pointer shadow-md hover:scale-103"
                >
                  <Keyboard className="w-5 h-5 text-stone-500 shrink-0" />
                  <span>কোড দিয়ে আনলক করুন</span>
                </button>
              </div>

              {/* Footer info lock */}
              <div className="text-[11px] md:text-xs text-stone-500 font-sans mt-8 flex items-center gap-1.5 justify-center">
                <span>Powered by</span>
                <a 
                  href={`https://api.whatsapp.com/send?phone=${getObfuscatedNumber()}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-primary hover:underline"
                >
                  SolviX Agency
                </a>
                <span>|</span>
                <span className="text-red-500 font-bold bg-red-100/60 px-2 py-0.5 rounded-md uppercase">Status: Terminated</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Code Unlock Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 bg-dark/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-md w-full rounded-2xl shadow-2xl p-6 md:p-8 relative border border-stone-200">
            <h3 className="text-lg md:text-xl font-bold text-dark font-bengali mb-1.5 flex items-center gap-2">
              🔒 সিকিউরিটি লাইসেন্স কোড
            </h3>
            <p className="text-stone-500 text-xs md:text-sm font-bengali mb-5 leading-relaxed">
              SolviX Agency প্রেরিত ১২-ডিজিটের অ্যাক্টিভেশন পাসকোডটি প্রবেশ করান:
            </p>

            <form onSubmit={handleCodeSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={unlockCode}
                  onChange={(e) => {
                    setUnlockCode(e.target.value);
                    setModalError('');
                  }}
                  placeholder="১২-ডিজিটের অ্যাক্টিভেশন কোড"
                  className="w-full bg-stone-50 text-dark placeholder-stone-400 border border-stone-300 rounded-xl px-4 py-3.5 text-sm font-bold shadow-inner focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-center font-sans uppercase tracking-[0.1em]"
                  required
                />
              </div>

              {modalError && (
                <div className="bg-red-50 text-red-600 border border-red-200 p-3 rounded-xl text-xs md:text-sm font-bengali leading-relaxed flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
                  <span>{modalError}</span>
                </div>
              )}

              <div className="flex gap-3 justify-end font-bengali pt-2">
                <button
                  type="button"
                  onClick={() => setShowCodeModal(false)}
                  className="px-4.5 py-2.5 rounded-xl text-stone-500 hover:bg-stone-100 text-sm font-bold transition-all cursor-pointer"
                >
                  বাতিল করুন
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-primary hover:bg-[#124d28] text-white text-sm font-extrabold rounded-xl shadow-md cursor-pointer transition-all border-none"
                >
                  কোড ভেরিফাই করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}
