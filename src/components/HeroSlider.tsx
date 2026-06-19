import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageSquare } from 'lucide-react';
import { buildWhatsAppURL } from '../utils/whatsapp';

interface Slide {
  bgImage: string;
  badge: string;
  h1Text: string;
  highlightText: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  isPrimaryCtaWhatsApp: boolean;
  primaryWhatsAppType?: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  isSecondaryCtaWhatsApp: boolean;
  secondaryWhatsAppType?: string;
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLive, setShowLive] = useState(false);
  const [liveViewers, setLiveViewers] = useState(0);

  const slides: Slide[] = [
    {
      bgImage: "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?auto=format&fit=crop&q=80&w=1600",
      badge: "সহকারী রেজিস্ট্রার (মেডিসিন বিভাগ), ফরিদপুর মেডিকেল কলেজ হাসপাতাল",
      h1Text: "আপনার সুস্বাস্থ্যই আমার",
      highlightText: "একমাত্র লক্ষ্য",
      subtitle: "মেডিসিন, ডায়বেটিস, উচ্চ রক্তচাপ, হৃদরোগ, কিডনি রোগ, চর্ম ও যৌন, বাত ব্যাথা, মাথা ব্যাথা, মা ও শিশু, শ্বাসকষ্ট, হাঁপানি ও এ্যাজমা রোগে অভিজ্ঞ",
      primaryCtaText: "অ্যাপয়েন্টমেন্ট নিন",
      primaryCtaLink: "#appointment",
      isPrimaryCtaWhatsApp: false,
      secondaryCtaText: "চেম্বার সময়সূচী",
      primaryWhatsAppType: "",
      secondaryCtaLink: "#chamber-schedule",
      isSecondaryCtaWhatsApp: false,
      secondaryWhatsAppType: ""
    },
    {
      bgImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600",
      badge: "চেম্বার ও অনলাইন পরামর্শ",
      h1Text: "সরাসরি অভিজ্ঞ ডাক্তারের",
      highlightText: "নির্ভুল ও নিরাপদ সেবা",
      subtitle: "রোগীর আদর্শ স্বাস্থ্য সুরক্ষায় ফরিদপুর মেডিকেল কলেজ হাসপাতালের অভিজ্ঞ মেডিসিন ডাক্তার ডা. ইমতিয়াজ হোসেন অর্ক",
      primaryCtaText: "সিরিয়াল বুকিং দিন",
      primaryCtaLink: "#appointment",
      isPrimaryCtaWhatsApp: false,
      primaryWhatsAppType: "",
      secondaryCtaText: "যোগাযোগ ঠিকানা",
      secondaryCtaLink: "#contact",
      isSecondaryCtaWhatsApp: false
    },
    {
      bgImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600",
      badge: "বিএমডিসি রেজি. নং: A-86402",
      h1Text: "বিশ্বস্ত ও বিজ্ঞানসম্মত চিকিৎসা",
      highlightText: "এমবিবিএস (MBBS)",
      subtitle: "সহকারী রেজিস্ট্রার (মেডিসিন বিভাগ), ফরিদপুর মেডিকেল কলেজ হাসপাতাল — সর্বাধুনিক ও নিরাপদ চিকিৎসা আদর্শে রোগীর সেবায় নিয়োজিত",
      primaryCtaText: "চেম্বারে আসুন",
      primaryCtaLink: "#contact",
      isPrimaryCtaWhatsApp: false,
      secondaryCtaText: "ফোন করুন",
      secondaryCtaLink: "tel:01849891298",
      isSecondaryCtaWhatsApp: false
    }
  ];

  // Live viewers counter randomization & active hours check (9:00 AM - 10:00 PM) based on Bangladesh Standard Time (BST)
  useEffect(() => {
    const checkAndSetViewers = () => {
      // Get current date/time in Bangladesh Standard Time (UTC+6)
      let hour = 12; // default fallback
      try {
        const bdDateStr = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
        const bdDate = new Date(bdDateStr);
        hour = bdDate.getHours();
      } catch (err) {
        // Fallback if Intl or timezone is unsupported in ancient browsers
        hour = new Date().getUTCHours() + 6;
        if (hour >= 24) hour -= 24;
      }
      
      // Active hours: 9:00 AM to 10:00 PM (22:00)
      const isActive = hour >= 9 && hour < 22;
      setShowLive(isActive);
      if (isActive) {
        setLiveViewers(prev => {
          // If starting or outside of target range (5 to 15)
          if (prev < 5 || prev > 15) {
            return Math.floor(5 + Math.random() * 11); // random between 5 and 15
          }
          const change = Math.floor(Math.random() * 3) - 1; // -1 to +1 variation
          return Math.max(5, Math.min(15, prev + change));
        });
      }
    };

    checkAndSetViewers();
    const viewerInterval = setInterval(checkAndSetViewers, 7000);

    return () => clearInterval(viewerInterval);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Slideshow auto cross-fade every 5 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(slideTimer);
  }, [handleNext]);

  // Smooth scroll functionality for non-whatsapp anchors
  const navigateCta = (link: string, isWhatsApp: boolean) => {
    if (isWhatsApp) {
      window.open(link, '_blank', 'noreferrer');
    } else if (link === '#appointment' || link === '#chamber-schedule') {
      window.dispatchEvent(new Event('open-chamber-modal'));
    } else if (link.startsWith('#')) {
      const element = document.querySelector(link);
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
    } else {
      window.location.href = link;
    }
  };

  return (
    <div id="hero" className="relative w-full h-[100vh] min-h-[580px] bg-dark overflow-hidden">
      {/* Background Slides with crossfade */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ transitionProperty: 'opacity' }}
        >
          {/* Background Image with lazy properties but standard JSX img tag */}
          <img
            src={slide.bgImage}
            alt="Medical Hero Background"
            referrerPolicy="no-referrer"
            loading={idx === 0 ? "eager" : "lazy"}
            width={1200}
            height={800}
            onError={(e) => {
              e.currentTarget.onerror = null;
              const fallbacks = [
                "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
                "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
                "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
              ];
              e.currentTarget.src = fallbacks[idx] || fallbacks[0];
            }}
            className="w-full h-full object-cover select-none scale-[1.01]"
          />
          {/* Theme custom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-dark/95 via-dark/85 to-primary/50"></div>
        </div>
      ))}

      {/* Floating Live Patients Badge */}
      {showLive && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-dark/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-teal-500/30 text-white font-sans text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium">Live: <b className="text-gold font-bold">{liveViewers}</b> জন দেখছেন</span>
        </div>
      )}

      {/* Slides Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-4xl px-6 md:px-12 text-center text-white pointer-events-auto">
          {slides.map((slide, idx) => {
            if (idx !== currentSlide) return null;
            return (
              <div
                key={idx}
                className="flex flex-col items-center animate-fade-in"
              >
                {/* Badge */}
                <div className="inline-block bg-accent/90 backdrop-blur-xs text-white rounded-full px-5 py-1.5 text-xs md:text-sm font-medium border border-teal-200/20 mb-5 tracking-wide font-bengali">
                  {slide.badge}
                </div>

                {/* H1 Heading */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-bengali leading-tight md:leading-[1.25] mb-4 drop-shadow-sm max-w-3xl hyphens-auto break-words">
                  {slide.h1Text}{' '}
                  <span className="text-gold block md:inline-block font-extrabold text-4xl md:text-6xl tracking-wide lg:text-7xl mt-1 md:mt-0">
                    {slide.highlightText}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm md:text-lg lg:text-xl text-white/80 max-w-2xl font-bengali leading-relaxed md:leading-loose mb-10">
                  {slide.subtitle}
                </p>

                {/* Slider Actions buttons with responsive layout */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
                  <button
                    onClick={() => navigateCta(slide.primaryCtaLink, slide.isPrimaryCtaWhatsApp)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-dark font-extrabold px-8 py-3.5 rounded-xl font-bengali shadow-lg transform hover:-translate-y-0.5 transition-all outline-none border-none cursor-pointer text-base"
                  >
                    {slide.isPrimaryCtaWhatsApp && <MessageSquare className="w-5 h-5" />}
                    <span>{slide.primaryCtaText}</span>
                  </button>

                  <button
                    onClick={() => navigateCta(slide.secondaryCtaLink, slide.isSecondaryCtaWhatsApp)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-xl font-bengali border-2 border-white/80 hover:border-white transition-all transform hover:-translate-y-0.5 cursor-pointer text-base"
                  >
                    {!slide.isSecondaryCtaWhatsApp && <Phone className="w-4 h-4 text-white" />}
                    {slide.isSecondaryCtaWhatsApp && <MessageSquare className="w-5 h-5 text-white" />}
                    <span>{slide.secondaryCtaText}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Navigation Arrows (with standard touch zones) */}
      <button
        onClick={handlePrev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-dark/40 hover:bg-dark/75 text-white/80 hover:text-white transition-all opacity-0 hover:opacity-100 md:opacity-100 hover:scale-105 border border-white/5 cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-dark/40 hover:bg-dark/75 text-white/80 hover:text-white transition-all opacity-0 hover:opacity-100 md:opacity-100 hover:scale-105 border border-white/5 cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Bottom dots list */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              i === currentSlide ? 'bg-gold w-6 rounded-md scale-105' : 'bg-white/40 hover:bg-white/70'
            } cursor-pointer`}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
