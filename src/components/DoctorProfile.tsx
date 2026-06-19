import { useEffect, useState, useRef } from 'react';
import { Building2, Clock, ShieldCheck, HeartPulse, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function DoctorProfile() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const qualificationTags = [
    "MBBS",
    "BCS (Health)",
    "২০১৬ সালে MBBS",
    "৩৯ তম বিসিএস স্বাস্থ্য উত্তীর্ণ"
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-bg-light py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Diagnostic Doctor Portrait Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <div className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px]">
                
                {/* Portrait Circular Image */}
                <div className="w-full h-full rounded-full border-4 border-gold shadow-2xl overflow-hidden bg-emerald-950 flex items-center justify-center">
                  <img
                    src="https://i.imgur.com/mRW100c.jpeg"
                    alt="ডাঃ ইমতিয়াজ হোসেন অর্ক - মধুখালী ও ফরিদপুরে অভিজ্ঞ মেডিসিন ও হৃদরোগের ডাক্তার"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width={280}
                    height={280}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600";
                    }}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>

                {/* Floating MBBS badge on bottom right of the image slightly overlapping */}
                <div className="absolute bottom-[-10px] right-[-6px] z-10 bg-primary text-white text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg border border-teal-300/25 flex items-center gap-1 font-sans">
                  <HeartPulse className="w-3.5 h-3.5 text-gold shrink-0 animate-pulse" />
                  <span>MBBS</span>
                </div>
              </div>

              {/* Registration Small Badge Below Portrait, centered, separate from image layout */}
              <div className="mt-6 bg-dark border border-white/5 text-white text-[11px] md:text-xs font-mono font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                বিএমডিসি রেজি. নং: A-86402
              </div>
            </div>

            {/* Verification label */}
            <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-1.5 mt-8 text-primary font-bold font-bengali text-xs sm:text-sm bg-primary/5 border border-primary/10 px-4 py-2.5 rounded-2xl w-full max-w-sm sm:max-w-md mx-auto">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="leading-snug">বিএমডিসি নিবন্ধিত ও সরকারি হাসপাতালের রেজিস্ট্রার</span>
            </div>
          </motion.div>

          {/* Right Column - Main Clinical Profile Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7"
          >
            {/* Main Header */}
            <h2 className="text-3xl md:text-5xl font-black font-bengali text-dark leading-tight mb-2">
              ডা. ইমতিয়াজ হোসেন অর্ক
            </h2>

            {/* Custom underline decoration with gold color */}
            <div className="flex items-center gap-1 mb-6">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-1 bg-gold rounded-full"
              ></motion.div>
              <div className="h-1.5 w-4 bg-[#00897B] rounded-full"></div>
              <div className="h-1 w-2 bg-gold rounded-full"></div>
            </div>

            {/* Qualification tags lists */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              {qualificationTags.map((tag) => (
                <div
                  key={tag}
                  className="bg-emerald-50 text-primary border border-primary/20 font-sans font-bold text-xs md:text-sm px-4 py-1.5 rounded-full shadow-2xs"
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* Current Position Status Panel */}
            <div className="bg-dark text-white rounded-2xl p-5 border border-white/5 shadow-md flex items-start gap-4 mb-5">
              <div className="bg-primary/25 rounded-xl p-3 border border-white/10 text-gold shadow-inner shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="font-bengali flex-1 min-w-0">
                <h4 className="text-gold text-xs font-bold uppercase tracking-wider mb-0.5">বর্তমান কর্মরত পদ</h4>
                <p className="text-[12px] xs:text-sm sm:text-base font-bold text-white mb-0.5 leading-snug whitespace-nowrap">সহকারী রেজিস্ট্রার (মেডিসিন বিভাগ)</p>
                <p className="text-white/80 text-[10.5px] xs:text-xs sm:text-sm whitespace-nowrap">ফরিদপুর মেডিকেল কলেজ হাসপাতাল, ফরিদপুর</p>
              </div>
            </div>

            {/* Academic & Civil Service Career Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6 font-bengali">
              <div className="bg-emerald-50/60 border border-emerald-500/15 p-4 rounded-2xl flex items-center gap-3.5 shadow-3xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0 text-xl">
                  🎓
                </div>
                <div className="text-left">
                  <p className="text-sm md:text-base font-black text-stone-900 leading-snug">২০১৬ সালে MBBS</p>
                </div>
              </div>

              <div className="bg-emerald-50/60 border border-emerald-500/15 p-4 rounded-2xl flex items-center gap-3.5 shadow-3xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0 text-xl">
                  🏛️
                </div>
                <div className="text-left">
                  <p className="text-sm md:text-base font-black text-stone-900 leading-snug">৩৯ তম বিসিএস স্বাস্থ্য উত্তীর্ণ</p>
                </div>
              </div>
            </div>

            {/* Specialties and clinical detail narrative */}
            <div className="font-bengali text-text-muted text-sm md:text-base leading-relaxed mb-6 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-dark font-semibold">
                <div className="flex items-center gap-2 bg-[#F1F8F5] px-3.5 py-2.5 rounded-xl border border-teal-500/10">
                  <span className="text-teal-600 font-bold shrink-0">🩺</span>
                  <span>মেডিসিন ও হৃদরোগে অভিজ্ঞ</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F1F8F5] px-3.5 py-2.5 rounded-xl border border-teal-500/10">
                  <span className="text-teal-600 font-bold shrink-0">🩸</span>
                  <span>ডায়াবেটিস ও উচ্চ রক্তচাপ নিয়ন্ত্রণ</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F1F8F5] px-3.5 py-2.5 rounded-xl border border-teal-500/10">
                  <span className="text-teal-600 font-bold shrink-0">🫁</span>
                  <span>শ্বাসকষ্ট, হাঁপানি ও এ্যাজমা চিকিৎসা</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F1F8F5] px-3.5 py-2.5 rounded-xl border border-teal-500/10">
                  <span className="text-teal-600 font-bold shrink-0">🤝</span>
                  <span>কিডনি, চর্ম-যৌন ও মা-শিশু রোগ</span>
                </div>
              </div>
            </div>

            {/* Timings and details schedule container */}
            <div id="chamber-schedule" className="scroll-mt-32 bg-[#EAD8A4]/15 border-2 border-gold/40 rounded-3xl p-5 md:p-6 mb-8 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-gold/20 text-gold-dark p-2 rounded-xl shrink-0 mt-0.5">
                  <Clock className="w-5.5 h-5.5 text-stone-900" />
                </div>
                <div className="font-bengali text-left">
                  <h4 className="text-stone-900 font-extrabold text-lg leading-tight">
                    চেম্বারে রোগী দেখার সময়সূচি (মধুখালী প্রধান চেম্বার)
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-bold mt-1">
                    📍 মধুখালি চেম্বার : একতা ডায়াগনস্টিক এন্ড ইমেজিং সেন্টার, মধুখালি, উপজেলা কমপ্লেক্সের বিপরীতে।
                  </p>
                </div>
              </div>

              <div className="font-bengali space-y-3">
                {/* Thursday to Monday */}
                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-gold/20 shadow-3xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-left">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-base sm:text-lg shrink-0">🗓️</span>
                    <span className="font-bold text-stone-800 text-[14px] sm:text-[15px] md:text-base">বৃহস্পতিবার থেকে সোমবার:</span>
                  </div>
                  <div className="bg-amber-50/50 rounded-lg px-3 py-1.5 border border-amber-500/10 text-left">
                    <span className="font-black text-emerald-800 text-sm sm:text-[15px] md:text-base block">
                      বিকাল ৩:৩০ মিনিট থেকে সন্ধ্যা ৬:৩০ মিনিট
                    </span>
                  </div>
                </div>

                {/* Friday */}
                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-emerald-500/10 shadow-3xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-left">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-base sm:text-lg shrink-0">🗓️</span>
                    <span className="font-bold text-stone-800 text-[14px] sm:text-[15px] md:text-base">শুক্রবার:</span>
                  </div>
                  <div className="bg-emerald-50/50 rounded-lg px-3 py-1.5 border border-emerald-500/10 text-left">
                    <span className="font-black text-emerald-800 text-sm sm:text-[15px] md:text-base block">
                      সকাল ১০:০০ টা থেকে দুপুর ২:০০ টা পর্যন্ত
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#1B5E35] font-extrabold mt-3 pt-3 border-t border-emerald-500/15 text-center leading-relaxed">📞 ফরিদপুর চেম্বারসমূহ (নূর ও বারাকা ডায়াগনস্টিক সেন্টার) শুধুমাত্র অন-কলে সেবা প্রদান করা হয়।</p>
              </div>
            </div>

            {/* Call to Actions - Phone Booking Focus */}
            <div className="flex justify-center w-full">
              <a
                href="tel:01849891298"
                className="w-full flex items-center justify-center gap-2.5 bg-primary hover:bg-[#154a29] text-white font-extrabold font-bengali px-8 py-4 rounded-2xl shadow-md transition-all transform hover:-translate-y-0.5 text-center text-sm.5 sm:text-base border border-emerald-500/10 active:scale-[0.99]"
              >
                <Phone className="w-4.5 h-4.5 text-white shrink-0 animate-pulse" />
                <span>ফোনে সিরিয়াল নিন (০১৮৪৯-৮৯১২৯৮)</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
