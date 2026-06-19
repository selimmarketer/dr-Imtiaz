import React, { useState, useEffect } from 'react';
import { MessageSquare, ShieldCheck, Clock, Star, AlertTriangle } from 'lucide-react';
import { getObfuscatedNumber } from '../utils/whatsapp';

interface FormState {
  name: string;
  phone: string;
  service: string;
  desc: string;
  consultationType: 'চেম্বারে সরাসরি' | 'অনলাইন কনসাল্টেশন';
  website: string; // Honeypot field for anti-spam
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
}

// Security sanitization helper to prevent DOM XSS injection
const sanitizeInputHTML = (str: string): string => {
  if (!str) return '';
  return str
    .replace(/&/g, '')
    .replace(/</g, '')
    .replace(/>/g, '')
    .replace(/"/g, '')
    .replace(/'/g, '')
    .replace(/\//g, '')
    .replace(/[<>()[\]\\|;]/g, ''); // strip script execution characters
};

export default function AppointmentForm() {
  const [isThrottled, setIsThrottled] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    service: 'ডায়াবেটিস',
    desc: '',
    consultationType: 'চেম্বারে সরাসরি',
    website: '' // honeypot
  });

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      setErrorText('');
    };
    const handleOffline = () => {
      setIsOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData(prev => ({
          ...prev,
          service: customEvent.detail
        }));
      }
    };

    window.addEventListener('select-appointment-service', handleSelectService);
    return () => {
      window.removeEventListener('select-appointment-service', handleSelectService);
    };
  }, []);

  const [errors, setErrors] = useState<FormErrors>({});

  const servicesList = [
    { value: "হৃদরোগ/বুকে ব্যথা", label: "হৃদরোগ / বুকে ব্যথা" },
    { value: "ডায়াবেটিস", label: "ডায়াবেটিস রক্ত শর্করা" },
    { value: "শ্বাসকষ্ট/হাঁপানি", label: "শ্বাসকষ্ট / হাঁপানি / এ্যাজমা" },
    { value: "কিডনি", label: "কিডনি রোগ ও মূত্রনালী" },
    { value: "গ্যাস্ট্রিক ও লিভার রোগ", label: "গ্যাস্ট্রিক ও লিভার রোগ" },
    { value: "চর্ম ও যৌন", label: "চর্ম, কুষ্ঠ ও যৌন রোগ" },
    { value: "মা ও শিশু", label: "মা ও শিশু রোগ সেবা" },
    { value: "বাত-ব্যথা", label: "বাত-ব্যথা / জয়েন্ট ব্যাথা" },
    { value: "অন্যান্য", label: "অন্যান্য কোনো মেডিসিন সমস্যা" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error dynamically as the patient types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleOpenChamberModal = () => {
    window.dispatchEvent(new CustomEvent('open-chamber-modal'));
  };

  const triggerSubmitWithData = (type: 'চেম্বারে সরাসরি' | 'অনলাইন কনসাল্টেশন', dataToSubmit: FormState) => {
    // Reset error box
    setErrorText('');

    // Prevent spam clicking on form buttons (Rate-limiting / Throttling)
    if (isThrottled) {
      return;
    }

    // Check Honeypot spam trap
    if (dataToSubmit.website) {
      console.warn("Spam detected!");
      return;
    }

    // Offline / Disconnect check
    if (!navigator.onLine || isOffline) {
      setErrorText("আপনার ইন্টারনেট সংযোগটি বিচ্ছিন্ন রয়েছে। অনুগ্রহ করে নেটওয়ার্ক কানেকশনটি চেক করে আবার চেষ্টা করুন।");
      return;
    }

    // Inline validation
    const newErrors: FormErrors = {};
    if (!dataToSubmit.name.trim()) {
      newErrors.name = "অনুগ্রহ করে আপনার নাম লিখুন";
    }

    const bdPhoneRegex = /^01[3-9]\d{8}$/;
    if (!dataToSubmit.phone.trim()) {
      newErrors.phone = "মোবাইল নম্বরটি আবশ্যক";
    } else if (!bdPhoneRegex.test(dataToSubmit.phone.trim())) {
      newErrors.phone = "সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)";
    }

    if (!dataToSubmit.service) {
      newErrors.service = "সমস্যার ধরন নির্বাচন করুন";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setErrorText("অনুগ্রহ করে ওপরের লাল চিহ্নিত আবশ্যক ফিল্ডগুলো পূরণ করুন।");
      return;
    }

    setIsThrottled(true);
    setTimeout(() => {
      setIsThrottled(false);
    }, 2500); // 2.5 seconds click throttle rate limiter

    const cleanName = sanitizeInputHTML(dataToSubmit.name.trim());
    const cleanPhone = sanitizeInputHTML(dataToSubmit.phone.trim());
    const cleanService = sanitizeInputHTML(dataToSubmit.service);
    const cleanDesc = sanitizeInputHTML(dataToSubmit.desc.trim());
    const cleanType = sanitizeInputHTML(type);

    // Structure WhatsApp clinical template details
    const doctorNumber = getObfuscatedNumber();
    const templateMsg = `আসসালামুআলাইকুম, আমি অ্যাপয়েন্টমেন্টের জন্য যোগাযোগ করছি।

নাম: ${cleanName}
মোবাইল: ${cleanPhone}
সমস্যা: ${cleanService}
বিবরণ: ${cleanDesc || 'উল্লেখ নেই'}
পরামর্শের মাধ্যম: ${cleanType}

(Website থেকে)`;

    try {
      // Use highly compatible and secure Universal WhatsApp Link Format list
      const waUrl = `https://api.whatsapp.com/send?phone=${doctorNumber}&text=${encodeURIComponent(templateMsg)}`;
      
      // Open in separate window tab securely
      const newWin = window.open(waUrl, '_blank', 'noopener,noreferrer');
      if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
        window.location.href = waUrl;
      } else {
        // Clear sensitive patient information on success
        setFormData({
          name: '',
          phone: '',
          service: 'ডায়াবেটিস',
          desc: '',
          consultationType: 'চেম্বারে সরাসরি',
          website: ''
        });
        setErrorText('');
      }
    } catch (err) {
      console.error("Submission error caught defensively:", err);
      setErrorText("অ্যাপয়েন্টমেন্ট পাঠানোর সময় একটি ত্রুটি ঘটেছে। অনুগ্রহ করে অফলাইন চেক করুন বা সরাসরি ফোনে কল করুন।");
    }
  };

  const handleSelectConsultationType = (type: 'চেম্বারে সরাসরি' | 'অনলাইন কনসাল্টেশন') => {
    setFormData(prev => {
      const updated = { ...prev, consultationType: type };
      triggerSubmitWithData(type, updated);
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerSubmitWithData(formData.consultationType, formData);
  };

  return (
    <section
      id="appointment"
      className="bg-gradient-to-tr from-dark to-[#1B5E35] py-16 md:py-24 relative overflow-hidden"
    >
      {/* Decorative dynamic circles */}
      <div className="absolute top-10 left-10 w-44 h-44 bg-primary/20 rounded-full filter blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-accent/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-11">
        
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black font-bengali text-white mb-4">
            এখনই <span className="text-gold">অ্যাপয়েন্টমেন্ট নিন</span>
          </h2>
          <button 
            type="button"
            onClick={handleOpenChamberModal}
            className="group block text-center w-full max-w-3xl mx-auto bg-transparent border-none cursor-pointer focus:outline-none transition-all duration-300 hover:scale-[1.01] mt-5"
          >
            <div className="text-xs xs:text-sm sm:text-base font-extrabold font-bengali text-gold hover:text-yellow-300 leading-relaxed bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-4.5 shadow-2xl hover:bg-white/10 transition-colors">
              আজই অ্যাপয়েন্টমেন্ট নিন — <span className="underline decoration-gold/40 decoration-2 underline-offset-4 group-hover:text-white">নিয়মিত সময় ও বিস্তারিত চেম্বার সূচি দেখতে এখানে ক্লিক</span>
            </div>
          </button>
          <p className="text-white/80 font-bengali text-sm xs:text-base max-w-lg mx-auto mt-4">
            নিচের সহজ ফর্মটি পূরণ করুন — আপনার সমস্ত বিবরণ স্বয়ংক্রিয়ভাবে ডাক্তারের WhatsApp-এ চলে যাবে
          </p>
        </div>

        {/* Centered glassmorphism card form */}
        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-6 py-8 md:px-10 md:py-10 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Visual warning for user offline or custom submit error */}
            {(isOffline || errorText) && (
              <div id="appointment-error-box" className="p-4.5 rounded-xl bg-rose-500/15 border border-rose-500/35 text-rose-200 text-sm flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div className="font-bengali leading-relaxed text-left">
                  {isOffline 
                    ? "আপনার ইন্টারনেট সংযোগটি বিচ্ছিন্ন রয়েছে। অনুগ্রহ করে চেক করে আবার চেষ্টা করুন।" 
                    : errorText}
                </div>
              </div>
            )}
            
            {/* Honeypot field (hidden for users, spam bots will fill it) */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="hidden"
              autoComplete="off"
            />

            {/* Field: Patient Name */}
            <div className="flex flex-col font-bengali">
              <label htmlFor="name" className="text-white text-sm font-semibold mb-2">
                রোগীর নাম <span className="text-gold">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="আপনার পূর্ণ নাম"
                className={`w-full rounded-xl bg-white/5 border text-white placeholder-white/40 px-4 py-3 h-12 focus:border-gold outline-none transition-all ${
                  errors.name ? 'border-rose-500 bg-rose-500/5' : 'border-white/20'
                }`}
              />
              {errors.name && (
                <span className="text-rose-400 text-xs mt-1.5 flex items-center gap-1 font-semibold">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  {errors.name}
                </span>
              )}
            </div>

            {/* Field: Mobile number */}
            <div className="flex flex-col font-bengali">
              <label htmlFor="phone" className="text-white text-sm font-semibold mb-2">
                মোবাইল নম্বর <span className="text-gold">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="যেমন: 01XXXXXXXXX"
                className={`w-full rounded-xl bg-white/5 border text-white placeholder-white/40 px-4 py-3 h-12 focus:border-gold outline-none transition-all font-sans ${
                  errors.phone ? 'border-rose-500 bg-rose-500/5' : 'border-white/20'
                }`}
              />
              {errors.phone && (
                <span className="text-rose-400 text-xs mt-1.5 flex items-center gap-1 font-semibold">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Field: Symptoms select list */}
            <div className="flex flex-col font-bengali">
              <label htmlFor="service" className="text-white text-sm font-semibold mb-2">
                প্রধান সমস্যা <span className="text-gold">*</span>
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full rounded-xl bg-neutral-900/60 border border-white/20 text-white px-4 py-2 h-12 focus:border-gold outline-none transition-all appearance-none cursor-pointer"
                >
                  {servicesList.map(item => (
                    <option key={item.value} value={item.value} className="bg-dark text-white">
                      {item.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/50">
                  ▼
                </div>
              </div>
            </div>

            {/* Field: Remarks Text area */}
            <div className="flex flex-col font-bengali">
              <label htmlFor="desc" className="text-white text-sm font-semibold mb-2">
                সমস্যার সংক্ষিপ্ত বিবরণ
              </label>
              <textarea
                id="desc"
                name="desc"
                value={formData.desc}
                onChange={handleInputChange}
                rows={3}
                placeholder="আপনার শারীরিক সমস্যার কথা সংক্ষেপে লিখুন (ঐচ্ছিক)..."
                className="w-full rounded-xl bg-white/5 border border-white/25 text-white placeholder-white/40 px-4 py-3 h-24 focus:border-gold outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* Field: Consultation Type Choice Pills */}
            <div className="flex flex-col font-bengali">
              <label className="text-white text-sm font-semibold mb-3">
                পরামর্শের মাধ্যম <span className="text-gold">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleSelectConsultationType('চেম্বারে সরাসরি')}
                  className={`py-3.5 px-4 rounded-xl font-bold text-center border transition-all text-sm cursor-pointer ${
                    formData.consultationType === 'চেম্বারে সরাসরি'
                      ? 'bg-gold border-gold text-dark font-extrabold shadow-md'
                      : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  🏢 চেম্বারে সরাসরি
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectConsultationType('অনলাইন কনসাল্টেশন')}
                  className={`py-3.5 px-4 rounded-xl font-bold text-center border transition-all text-sm cursor-pointer ${
                    formData.consultationType === 'অনলাইন কনসাল্টেশন'
                      ? 'bg-gold border-gold text-dark font-extrabold shadow-md'
                      : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  📱 অনলাইন ভিডিও কল
                </button>
              </div>
            </div>

            {/* Form Submit Trigger button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-400 hover:to-[#D4AF37] text-dark font-black font-bengali py-3.5 sm:py-4 px-4 rounded-xl text-xs xs:text-sm sm:text-base md:text-lg shadow-xl hover:scale-[1.01] transition-all transform hover:-translate-y-0.5 border-none cursor-pointer mt-4 leading-none"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-dark" />
              <span className="whitespace-nowrap">হোয়াটসঅ্যাপে অ্যাপয়েন্টমেন্ট পাঠান</span>
            </button>

            {/* bottom safety trust badges */}
            <div className="flex items-center justify-center gap-6 mt-6 border-t border-white/10 pt-5">
              <div className="flex items-center gap-1.5 text-white/60 text-xs font-bengali">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                <span>নিরাপদ ও গোপনীয়</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/60 text-xs font-bengali">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>দ্রুত সাড়া দিন</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/60 text-xs font-bengali">
                <Star className="w-4 h-4 text-accent shrink-0" />
                <span>১০% বিশ্বস্ত সেবা</span>
              </div>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
