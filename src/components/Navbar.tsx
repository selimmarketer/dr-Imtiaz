import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ShieldCheck, Clock, Award } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'পরিচিতি', id: '#about' },
    { label: 'সেবাসমূহ', id: '#services' },
    { label: 'চেম্বার সময়', id: '#chamber-schedule' },
    { label: 'অ্যাপয়েন্টমেন্ট', id: '#appointment' },
    { label: 'যোগাযোগ', id: '#contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 110; // Accurate offset for fixed header
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

  const handleOpenChamberModal = () => {
    setMobileMenuOpen(false);
    window.dispatchEvent(new CustomEvent('open-chamber-modal'));
  };

  return (
    <>
      <nav
        id="navbar"
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-emerald-950/95 backdrop-blur-md h-[70px] shadow-lg border-b border-gold/15'
            : 'bg-emerald-900 h-[80px] border-b border-white/5'
        } flex items-center justify-between px-4 sm:px-6 md:px-10`}
      >
        {/* Left Side: Logo & Portrait */}
        <div className="flex items-center gap-3.5">
          {/* Logo portrait */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="https://i.imgur.com/mRW100c.jpeg"
                alt="ডা. ইমতিয়াজ হোসেন অর্ক"
                referrerPolicy="no-referrer"
                width={44}
                height={44}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600";
                }}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-gold/75 object-cover shadow-md"
                style={{ objectPosition: 'center top' }}
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></span>
            </div>
            
            <div className="flex flex-col text-left">
              <span
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-white font-black text-[15px] xs:text-[17px] md:text-[18px] lg:text-[20px] cursor-pointer tracking-wide hover:text-gold transition-colors font-bengali leading-snug"
              >
                ডা. ইমতিয়াজ হোসেন অর্ক
              </span>
              <span className="text-[9px] xs:text-[10px] md:text-[11px] text-white/85 font-bengali font-bold block whitespace-nowrap leading-tight mt-0.5">
                সহকারী রেজিস্ট্রার (মেডিসিন বিভাগ)
              </span>
              <span className="text-[8px] xs:text-[9px] md:text-[10px] text-white/60 font-bengali font-medium block whitespace-nowrap leading-tight">
                ফরিদপুর মেডিকেল কলেজ হাসপাতাল, ফরিদপুর
              </span>
            </div>
          </div>
        </div>

        {/* Center: Tablet & Desktop Nav links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-7 ml-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.id)}
              className="text-white hover:text-gold text-[15px] lg:text-[17px] font-bold tracking-wide transition-all duration-200 relative py-1 group font-bengali cursor-pointer whitespace-nowrap"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Right Side: Tablet & Desktop Contacts */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={handleOpenChamberModal}
            className="flex items-center gap-2 text-gold hover:text-white font-extrabold transition-colors font-bengali text-[15px] lg:text-[16px] bg-transparent border-none cursor-pointer"
          >
            <Phone className="w-4 h-4 text-gold shrink-0" />
            <span>সিরিয়াল নিন (চেম্বার ও সময়সূচী)</span>
          </button>

          <button
            onClick={() => handleLinkClick('#appointment')}
            className="bg-gold hover:bg-gold-dark text-dark font-extrabold font-bengali px-5 py-2.5 rounded-full text-sm md:text-[15px] tracking-wide transition-all duration-200 shadow-md hover:scale-[1.03] cursor-pointer border-none"
          >
            অ্যাপয়েন্টমেন্ট নিন
          </button>
        </div>

        {/* Mobile / Small screen hamburger activator */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:01849891298"
            className="flex items-center justify-center bg-gold/10 border border-gold/30 text-gold p-2.5 rounded-full hover:bg-gold/20 transition-all"
            aria-label="Call Doctor"
          >
            <Phone className="w-4.5 h-4.5" />
          </a>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-gold transition-colors p-2 cursor-pointer bg-white/5 rounded-lg border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer/Overlay - Structured, layered, extremely professional with smooth styling */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-[110] bg-emerald-950/98 text-white flex flex-col justify-start p-4 xs:p-5 sm:p-6 overflow-y-auto md:hidden font-bengali animate-fade-in"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-2">
            <div className="flex items-center gap-3">
              <img
                src="https://i.imgur.com/mRW100c.jpeg"
                alt="ডা. ইমতিয়াজ হোসেন অর্ক"
                referrerPolicy="no-referrer"
                loading="lazy"
                width={40}
                height={40}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600";
                }}
                className="w-10 h-10 rounded-full border-2 border-gold object-cover"
                style={{ objectPosition: 'center top' }}
              />
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-base lg:text-lg text-white leading-tight">
                  ডা. ইমতিয়াজ হোসেন অর্ক
                </span>
                <span className="text-[10px] text-gold font-medium">বিএমডিসি রেজি. নং: A-86402</span>
              </div>
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-gold p-2 bg-white/5 rounded-lg border border-white/10 cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items - Clean tight vertical list with bottom underline dividers */}
          <div className="flex flex-col w-full mb-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.id)}
                className="w-full text-left font-black text-[16px] sm:text-[17px] text-zinc-100 hover:text-gold bg-transparent border-b border-white/10 py-3 px-2 transition-all flex items-center justify-between cursor-pointer group active:bg-white/5"
              >
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">{link.label}</span>
                <span className="text-gold/60 group-hover:text-gold transition-colors text-[18px]">&rsaquo;</span>
              </button>
            ))}
          </div>

          {/* Footer controls for quick appointments directly below list */}
          <div className="w-full pt-1 pb-2">
            <button
              onClick={handleOpenChamberModal}
              className="w-full flex items-center justify-center gap-1.5 bg-gold hover:bg-gold-dark text-dark py-2.5 rounded-lg font-black text-xs sm:text-sm shadow-md transition-all border-none cursor-pointer active:scale-[0.99]"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>সিরিয়াল দিন</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
