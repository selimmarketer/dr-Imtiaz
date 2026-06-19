import { MapPin, Clock, Phone, Facebook, MessageSquare } from 'lucide-react';
import { getObfuscatedNumber } from '../utils/whatsapp';

export default function Contact() {
  const handleOpenChamberModal = () => {
    window.dispatchEvent(new CustomEvent('open-chamber-modal'));
  };

  return (
    <section
      id="contact"
      className="bg-dark py-16 md:py-24 border-b border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 font-bengali">
          <h2 className="text-3xl md:text-[42px] font-black text-white mb-4">
            চেম্বার ঠিকানা ও <span className="text-gold">যোগাযোগ</span>
          </h2>
          <p className="text-stone-400 text-base max-w-lg mx-auto">
            একতা ডায়াগনস্টিক ও ইমেজিং সেন্টার, নূর ডায়াগনষ্টিক কিংবা ফরিদপুর বারাকা ডায়াগনস্টিক সেন্টারে সিরিয়াল বুকিং করতে অগ্রিম ফোন দিন
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Google map embed */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="w-full h-full min-h-[340px] rounded-3xl overflow-hidden border border-white/10 shadow-xl relative bg-stone-900">
              <iframe
                title="Faridpur Medical College Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4334346990473!2d89.82025177607739!3d23.62464147875569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe2df380ee4515%3A0xc3fcee437fa8ccae!2sFaridpur%20Medical%20College%20Hospital!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Info Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#1B5E35]/15 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xs flex flex-col justify-between h-full shadow-2xl font-bengali">
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse"></span>
                  যোগাযোগ ও চেম্বার তথ্য
                </h3>

                {/* Items rows with icons list */}
                <div className="space-y-4">
                  {/* Map Pin Location Indicator */}
                  <div className="flex items-start gap-4">
                    <div className="bg-gold/10 text-gold p-2 md:p-2.5 rounded-xl shrink-0 mt-0.5 border border-gold/10">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-bold font-sans">CHAMBER ADDRESSES</p>
                      <p className="text-white text-sm md:text-base font-semibold leading-relaxed mb-1.5 text-gold">
                        📍 একতা ডায়াগনস্টিক ও ইমেজিং সেন্টার (প্রধান চেম্বার), মধুখালী
                      </p>
                      <p className="text-white text-sm md:text-base font-semibold leading-relaxed mb-1.5 text-white/80">
                        📍 নূর ডায়াগনষ্টিক সেন্টার (মেডিকেল কলেজ সংলগ্ন, অন কল)
                      </p>
                      <p className="text-white text-sm md:text-base font-semibold leading-relaxed mb-1.5 text-white/80">
                        📍 বারাকা ডায়াগনস্টিক সেন্টার, ফরিদপুর (অন কল)
                      </p>
                      <p className="text-emerald-400 text-xs font-bold">
                        *ফরিদপুর চেম্বারসমূহ শুধুমাত্র অন কল ভিত্তিতে রোগী দেখা হয়।
                      </p>
                    </div>
                  </div>

                  {/* Clock Schedules 1 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-gold/15 text-gold p-2.5 rounded-xl shrink-0 mt-0.5 border border-gold/30">
                      <Clock className="w-5.5 h-5.5 text-gold" />
                    </div>
                    <div className="w-full">
                      <p className="text-gold/80 text-xs font-black font-bengali tracking-wider mb-1.5">রোগী দেখার সময়সূচি (মধুখালী প্রধান চেম্বার)</p>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 space-y-4 shadow-inner text-left">
                        <div className="font-bengali">
                          <div className="text-[#A5D6A7] text-base md:text-lg font-black leading-snug flex items-center gap-1.5">
                            <span>🗓️</span>
                            <span>বৃহস্পতিবার থেকে সোমবার:</span>
                          </div>
                          <div className="text-gold text-sm md:text-base font-bold mt-1 pl-6">
                            বিকাল ৩:৩০ মিনিট থেকে সন্ধ্যা ৬:৩০ মিনিট
                          </div>
                        </div>
                        <hr className="border-white/10" />
                        <div className="font-bengali">
                          <div className="text-teal-300 text-base md:text-lg font-black leading-snug flex items-center gap-1.5">
                            <span>🗓️</span>
                            <span>শুক্রবার:</span>
                          </div>
                          <div className="text-white text-sm md:text-base font-bold mt-1 pl-6">
                            সকাল ১০:০০ টা থেকে দুপুর ২:০০ টা পর্যন্ত
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Line 1 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-gold/10 text-gold p-2 rounded-xl shrink-0 mt-0.5 border border-gold/10">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-bold font-sans">DIRECT MOBILE & WHATSAPP</p>
                      <a
                        href="tel:01849891298"
                        className="text-gold text-lg md:text-2xl font-bold font-sans hover:underline block"
                      >
                        01849-891298
                      </a>
                    </div>
                  </div>

                  {/* Phone Line 2: Chamber hotlines */}
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-500/10 text-emerald-400 p-2 rounded-xl shrink-0 mt-0.5 border border-emerald-500/20">
                      <MessageSquare className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-emerald-400 text-xs font-bold font-sans">ONLINE VIDEO CONSULTATION</p>
                      <div className="space-y-1 mt-1 font-bengali">
                        <p className="text-white text-sm md:text-base font-semibold">
                          📱 অনলাইনে রোগী দেখাতে সরাসরি WhatsApp-এ যোগাযোগ করুন
                        </p>
                        <p className="text-white/60 text-xs font-medium leading-relaxed max-w-sm mt-0.5">
                          সারা বাংলাদেশ থেকে যেকোনো স্থান থেকে ডা. অর্কের অনলাইন কনসাল্টেশন পেতে সরাসরি আমাদের নম্বরে WhatsApp-এ মেসেজ বা কল করুন। (কোনো নির্দিষ্ট সময়সীমা নেই)
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Three action buttons stacked */}
              <div className="flex flex-col gap-3 mt-8">
                <button
                  onClick={handleOpenChamberModal}
                  className="w-full h-12 flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-dark font-extrabold text-sm rounded-xl transition-all shadow-md active:scale-[0.98] border-none cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-dark shrink-0" />
                  <span>সরাসরি সিরিয়াল বুকিং করুন</span>
                </button>

                <a
                  href={`https://api.whatsapp.com/send?phone=${getObfuscatedNumber()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all active:scale-[0.98] text-center border-none"
                >
                  <span>অনলাইনে চ্যাট ও কনসাল্টেশন</span>
                </a>

                <a
                  href="https://www.facebook.com/drorko16/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 flex items-center justify-center gap-2 bg-transparent hover:bg-blue-600/10 text-white font-bold text-sm rounded-xl border border-blue-500/30 hover:border-blue-500 transition-all active:scale-[0.98]"
                  aria-label="Doctor Facebook Official Page"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2] shrink-0" />
                  <span>ফেসবুক অফিসিয়াল পেজ</span>
                </a>

                {/* Other Social Media Platforms Bar */}
                <div className="mt-4 pt-4 border-t border-white/10 text-center font-bengali">
                  <p className="text-white/40 text-xs font-bold font-bengali tracking-widest mb-3">অন্যান্য সামাজিক প্ল্যাটফর্ম ও ব্লগ</p>
                  <div className="flex flex-wrap items-center justify-center gap-2.5">
                    <a
                      href="https://www.facebook.com/emtiazhossain007/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="ফেসবুক আইডি"
                      className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-[#3b5998]/20 text-white rounded-full border border-white/10 transition-colors"
                      aria-label="Doctor Personal Facebook Profile"
                    >
                      <Facebook className="w-4 h-4 text-[#3b5998] shrink-0" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/emtiaz-hossain-762a4744"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="লিঙ্কডইন"
                      className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-[#0A66C2]/20 rounded-full border border-white/10 transition-colors"
                      aria-label="Doctor LinkedIn Profile"
                    >
                      <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href="https://x.com/Emtiaz_hossain"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="এক্স (টুইটার)"
                      className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
                      aria-label="Doctor X Profile"
                    >
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/emtiaz.orko"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="ইনস্টাগ্রাম"
                      className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-pink-600/10 rounded-full border border-white/10 transition-colors"
                      aria-label="Doctor Instagram"
                    >
                      <svg className="w-4 h-4 fill-none stroke-pink-500 stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="https://www.threads.net/@emtiaz.orko"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="থ্রেডস"
                      className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-neutral-800 rounded-full border border-white/10 transition-colors"
                      aria-label="Doctor Threads Profile"
                    >
                      <svg className="w-4 h-4 fill-current text-white/90" viewBox="0 0 24 24">
                        <path d="M14.82 21c-1.42 0-2.73-.37-3.93-1.11-1.07-.66-1.92-1.57-2.54-2.71C7.72 16.03 7.4 14.7 7.4 13.16c0-1.56.32-2.9.96-4.04.64-1.14 1.5-2.02 2.57-2.65 1.07-.63 2.25-.94 3.55-.94 1.34 0 2.51.32 3.5.96 1 .64 1.77 1.51 2.3 2.62.53 1.11.8 2.37.8 3.79v1.27c0 1.25-.21 2.25-.63 3-.42.75-1.01 1.33-1.78 1.74-.77.41-1.68.61-2.72.61-1.25 0-2.28-.31-3.08-.94a4.1 4.1 0 0 1-1.39-2.55h-.06c-.46.88-1.11 1.58-1.95 2.1-.84.52-1.81.78-2.91.78-1.56 0-2.82-.47-3.79-1.41-.97-.94-1.45-2.23-1.45-3.87 0-1.63.49-2.93 1.47-3.9 1-.97 2.3-1.45 3.89-1.45 1.18 0 2.19.26 3.03.78.84.52 1.46 1.23 1.87 2.12h.06v-1.13h2.64v6.84c0 .48.07.82.21 1.03.14.21.37.31.69.31.32 0 .58-.12.8-.35.22-.23.37-.58.45-1.05.08-.47.12-1.04.12-1.71V12.92c0-1.05-.18-1.98-.54-2.79-.36-.81-.9-1.44-1.61-1.89s-1.56-.68-2.55-.68c-.96 0-1.81.22-2.56.66-.75.44-1.33 1.06-1.73 1.86s-.6 1.71-.6 2.74c0 .99.19 1.86.58 2.62.39.76.95 1.34 1.67 1.74.72.4 1.55.6 2.5.6.86 0 1.58-.17 2.16-.51.58-.34 1.01-.83 1.29-1.47h.06c.15.54.43.99.85 1.35.42.36.93.54 1.53.54z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.bangla-kobita.com/emtiaz2020/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="কবিতা ও ব্লগ সাইট"
                      className="w-10 h-9 px-3 flex items-center justify-center bg-amber-600/10 hover:bg-amber-600/20 text-amber-300 rounded-lg border border-amber-600/30 transition-colors gap-1 text-[11px] font-bold"
                      aria-label="Doctor Bangla Poem Website"
                    >
                      <svg className="w-3.5 h-3.5 text-amber-400 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                      <span>ব্লগ</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
