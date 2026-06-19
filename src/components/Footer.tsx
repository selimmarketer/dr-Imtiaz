import { MapPin, Phone, Clock, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  const handleLinkClick = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
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
    <footer
      id="footer"
      className="bg-[#0A1A0F] border-t border-primary/50 text-white pt-16 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Portrait and Doctor Identity info */}
          <div className="lg:col-span-5 font-bengali">
            <div className="flex items-center gap-3.5 mb-5">
              <img
                src="https://i.imgur.com/mRW100c.jpeg"
                alt="ডা. ইমতিয়াজ অর্ক"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600";
                }}
                className="w-12 h-12 rounded-full border-2 border-gold object-cover"
              />
              <div>
                <h3 className="text-white text-lg md:text-xl font-bold">ডা. ইমতিয়াজ হোসেন অর্ক</h3>
                <span className="text-accent text-xs font-semibold block mt-0.5">সহকারী রেজিস্ট্রার (মেডিসিন বিভাগ)</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              এমবিবিএস (MBBS)। সহকারী রেজিস্ট্রার (মেডিসিন বিভাগ), ফরিদপুর মেডিকেল কলেজ হাসপাতাল। তিনি মেডিসিন, ডায়াবেটিস, উচ্চ রক্তচাপ, হৃদরোগ ও অন্যান্য জটিল রোগ চিকিৎসায় নিয়োজিত।
            </p>
            <div className="space-y-1">
              <p className="text-white/50 text-xs flex items-center gap-1.5">
                🏢 প্রধান চেম্বার: একতা ডায়াগনস্টিক ও ইমেজিং সেন্টার (মধুখালী)
              </p>
              <p className="text-white/40 text-[11px] font-mono select-all">
                বিএমডিসি রেজি. নং: A-86402
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 font-bengali">
            <h4 className="text-gold text-xs font-black uppercase tracking-widest mb-6 font-sans">
              দ্রুত লিঙ্ক
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'অ্যাবাউট ডক্টর', id: '#about' },
                { label: 'রোগবিশেষত্ব', id: '#specialty' },
                { label: 'আমাদের সেবাসমূহ', id: '#services' },
                { label: 'অ্যাপয়েন্টমেন্ট নিন', id: '#appointment' },
                { label: 'জিজ্ঞাসিত প্রশ্নাবলী', id: '#faq' },
                { label: 'চেম্বার ও যোগাযোগ', id: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-white/60 hover:text-white hover:translate-x-1 block text-sm font-medium transition-all cursor-pointer font-bengali select-none"
                  >
                    ✦ {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Meta details */}
          <div className="lg:col-span-4 font-bengali">
            <h4 className="text-gold text-xs font-black uppercase tracking-widest mb-6 font-sans">
              সরাসরি যোগাযোগ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/50 text-[11px] font-bold block font-bengali">হেল্পলাইন নম্বর</span>
                  <a href="tel:01849891298" className="text-gold text-base font-bold font-sans hover:underline">
                    01849-891298
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/50 text-[11px] font-bold block font-sans">CLINIC LOCATIONS</span>
                  <p className="text-white/80 text-sm leading-relaxed">
                    প্রধান চেম্বার: একতা ডায়াগনস্টিক ও ইমেজিং সেন্টার (মধুখালী) <br />
                    অন কল: নূর ডায়াগনষ্টিক ও বারাকা ডায়াগনস্টিক, ফরিদপুর
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div className="w-full">
                  <span className="text-gold/80 text-[11px] font-black block font-bengali tracking-widest mb-1.5">রোগী দেখার সময়সূচি</span>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-2 text-white/95 text-center sm:text-left">
                    <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                      ⏳ <span className="text-stone-300 font-bold block mb-0.5">বৃহস্পতিবার থেকে সোমবার:</span>
                      <strong className="text-gold text-sm sm:text-base">বিকাল ৩:৩০ মিনিট থেকে সন্ধ্যা ৬:৩০ মিনিট</strong>
                    </p>
                    <div className="border-t border-white/5 my-1"></div>
                    <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                      ⏳ <strong className="text-teal-300 text-sm sm:text-base block sm:inline">শুক্রবার সকাল ১০টা থেকে দুপুর ২টা</strong>
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            {/* Professional Social Media & Blog Icons Grid */}
            <div className="mt-6">
              <span className="text-white/50 text-[11px] font-bold block font-bengali mb-3 tracking-widest">সামাজিক যোগাযোগ ও ব্লগ</span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://www.facebook.com/drorko16/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-[#1877F2]/10 hover:border-[#1877F2]/40 text-white text-[11px] sm:text-xs font-semibold py-2 px-3 rounded-lg border border-white/10 transition-all duration-300"
                  aria-label="Doctor Facebook Page"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
                  <span>ফেসবুক পেজ</span>
                </a>
                <a
                  href="https://www.facebook.com/emtiazhossain007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-[#3b5998]/10 hover:border-[#3b5998]/40 text-white text-[11px] sm:text-xs font-semibold py-2 px-3 rounded-lg border border-white/10 transition-all duration-300"
                  aria-label="Doctor Facebook Profile"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#3b5998]" />
                  <span>ফেসবুক আইডি</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/emtiaz-hossain-762a4744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/40 text-white text-[11px] sm:text-xs font-semibold py-2 px-3 rounded-lg border border-white/10 transition-all duration-300"
                  aria-label="Doctor LinkedIn Profile"
                >
                  <svg className="w-3.5 h-3.5 fill-[#0A66C2]" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>লিঙ্কডইন</span>
                </a>
                <a
                  href="https://x.com/Emtiaz_hossain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white text-[11px] sm:text-xs font-semibold py-2 px-3 rounded-lg border border-white/10 transition-all duration-300"
                  aria-label="Doctor X Profile"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>এক্স (টুইটার)</span>
                </a>
                <a
                  href="https://www.instagram.com/emtiaz.orko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-pink-600/10 hover:border-pink-500/40 text-white text-[11px] sm:text-xs font-semibold py-2 px-3 rounded-lg border border-white/10 transition-all duration-300"
                  aria-label="Doctor Instagram Profile"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-pink-500 stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>ইনস্টাগ্রাম</span>
                </a>
                <a
                  href="https://www.threads.net/@emtiaz.orko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-neutral-800 hover:border-neutral-500/40 text-white text-[11px] sm:text-xs font-semibold py-2 px-3 rounded-lg border border-white/10 transition-all duration-300"
                  aria-label="Doctor Threads Profile"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-white/90" viewBox="0 0 24 24">
                    <path d="M14.82 21c-1.42 0-2.73-.37-3.93-1.11-1.07-.66-1.92-1.57-2.54-2.71C7.72 16.03 7.4 14.7 7.4 13.16c0-1.56.32-2.9.96-4.04.64-1.14 1.5-2.02 2.57-2.65 1.07-.63 2.25-.94 3.55-.94 1.34 0 2.51.32 3.5.96 1 .64 1.77 1.51 2.3 2.62.53 1.11.8 2.37.8 3.79v1.27c0 1.25-.21 2.25-.63 3-.42.75-1.01 1.33-1.78 1.74-.77.41-1.68.61-2.72.61-1.25 0-2.28-.31-3.08-.94a4.1 4.1 0 0 1-1.39-2.55h-.06c-.46.88-1.11 1.58-1.95 2.1-.84.52-1.81.78-2.91.78-1.56 0-2.82-.47-3.79-1.41-.97-.94-1.45-2.23-1.45-3.87 0-1.63.49-2.93 1.47-3.9 1-.97 2.3-1.45 3.89-1.45 1.18 0 2.19.26 3.03.78.84.52 1.46 1.23 1.87 2.12h.06v-1.13h2.64v6.84c0 .48.07.82.21 1.03.14.21.37.31.69.31.32 0 .58-.12.8-.35.22-.23.37-.58.45-1.05.08-.47.12-1.04.12-1.71V12.92c0-1.05-.18-1.98-.54-2.79-.36-.81-.9-1.44-1.61-1.89s-1.56-.68-2.55-.68c-.96 0-1.81.22-2.56.66-.75.44-1.33 1.06-1.73 1.86s-.6 1.71-.6 2.74c0 .99.19 1.86.58 2.62.39.76.95 1.34 1.67 1.74.72.4 1.55.6 2.5.6.86 0 1.58-.17 2.16-.51.58-.34 1.01-.83 1.29-1.47h.06c.15.54.43.99.85 1.35.42.36.93.54 1.53.54z"/>
                  </svg>
                  <span>থ্রেডস</span>
                </a>
                <a
                  href="https://www.bangla-kobita.com/emtiaz2020/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 flex items-center justify-center gap-2 bg-amber-600/10 hover:bg-amber-600/20 hover:border-amber-500/50 text-amber-300 text-[11px] sm:text-xs font-bold py-2.5 px-3 rounded-lg border border-amber-600/30 transition-all duration-300"
                  aria-label="Doctor Poem and Blog website"
                >
                  <svg className="w-4 h-4 text-amber-400 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  <span>কবিতা ও ব্লগ সাইট (বাংলা কবিতা)</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Developers Agency credit bar */}
        {/* pb-24 included on mobile specifically as instructed to prevent overlapping with floating buttons */}
        <div className="border-t border-white/10 mt-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center font-bengali pb-24 md:pb-6">
          <p className="text-white/40 text-xs">
            © २०२৬ ডা. ইমতিয়াজ হোসেন অর্ক।
          </p>
          <p className="text-white/50 text-xs flex items-center justify-center gap-1">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse shrink-0" />
            <span>& Developed by</span>
            <a
              href="https://www.facebook.com/solviXagencybd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-extrabold hover:underline transition-all underline-offset-2 ml-1"
            >
              SolviX Agency
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
