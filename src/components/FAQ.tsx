import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1); // default open first item

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "অনলাইন কনসাল্টেশনে কি সত্যিকারের প্রেসক্রিপশন পাওয়া যায়?",
      answer: "হ্যাঁ, সম্পূর্ণ গ্রহণযোগ্য ও বৈধ ডিজিটাল প্রেসক্রিপশন পাওয়া যায়। ডা. ইমতিয়াজ হোসেন অর্ক MBBS, BCS ডাক্তার হিসেবে সরকারি নিবন্ধিত চিকিৎসক। WhatsApp-এ তথ্য প্রদানের পর তিনি ভিডিও/অডিও কলে বিস্তারিত শুনে যে ডিজিটাল প্রেসক্রিপশনটি প্রেরণ করবেন, তা বাংলাদেশের যেকোনো ফার্মেসিতে ওষুধ কেনার ক্ষেত্রে শতভাগ গ্রহণযোগ্য।"
    },
    {
      id: 2,
      question: "চেম্বারে সরাসরি রোগী দেখানোর জন্য কি সিরিয়াল নিতে হবে?",
      answer: "না, সরাসরি চেম্বারে আসলেও রোগী দেখানো সম্ভব। তবে চিকিৎসকের সময়সূচি সমন্বয় এবং সিরিয়ালের অনাকাঙ্ক্ষিত দীর্ঘক্ষণ অপেক্ষা এড়াতে প্রথমে WhatsApp অথবা ফোনের মাধ্যমে কনফার্ম বা বুকিং করে আসা ভালো। প্রধান চেম্বার সময়সূচি: বৃহস্পতিবার থেকে সোমবার: বিকাল ৩:৩০ মিনিট থেকে সন্ধ্যা ৬:৩০ মিনিট, শুক্রবার সকাল ১০টা থেকে দুপুর ২টা।"
    },
    {
      id: 3,
      question: "কনসাল্টেশন ফি কত টাকা রাখা হয়?",
      answer: "চেম্বারে সরাসরি পরিদর্শন ফি এবং দূরবর্তী অনলাইন কনসাল্টেশন ফি সামাজিক ও অত্যন্ত সাশ্রয়ী রাখা হয়েছে যাতে প্রান্তিক ও মধ্যবিত্ত সকল শ্রেণির মানুষ কষ্টহীনভাবে বিশেষজ্ঞ বিজ্ঞানসম্মত স্বাস্থ্যসেবা পেতে পারেন। বর্তমান ফি-র পরিমাণ সরাসরি জানতে অনুগ্রহ করে WhatsApp করুন বা সরাসরি ফোনে কল করুন।"
    },
    {
      id: 4,
      question: "ডায়াবেটিস রোগীকে কি অনলাইনে পুরোপুরি নিয়ন্ত্রণ বা ম্যানেজ করা যায়?",
      answer: "হ্যাঁ, গ্লুকোজ ডায়েরি রিপোর্টিং এবং সুনির্দিষ্ট ডায়েট চার্টিংয়ের ভিত্তিতে WhatsApp এবং ঘরে বসেই সুগার লেভেল পুরোপুরি নিয়ন্ত্রণ করা যায়। রোগীরা প্রতিদিনের সুগার রিডিং ডাক্তার অর্ক স্যারকে আপডেট করে ইনসুলিন ডোজ সমন্বয় করতে পারবেন।"
    },
    {
      id: 5,
      question: "জরুরিভাবে কি কি ডায়াগনস্টিক পরীক্ষা-নিরীক্ষা করার প্রয়োজন হতে পারে?",
      answer: "রোগীর সাধারণ স্বাস্থ্য ও উপসর্গভেদে সাধারণ পরীক্ষা যেমন সিবিসি (Regular CBC), লিপিড প্রোফাইল (Lipid Profile), এইচবিএ১সি (HbA1c), সিরাম ক্রিয়েটিনিন (Serum Creatinine) বা রক্তের গ্লুকোজ পরীক্ষা এবং প্রস্রাবের রুটিন টেস্ট করার প্রয়োজন হতে পারে।"
    },
    {
      id: 6,
      question: "মাঝরাতে হঠাৎ কোনো জরুরি প্রয়োজন হলে কি যোগাযোগ করা যাবে?",
      answer: "নিয়মিত ফলো-আপে থাকা নিবন্ধিত রোগীদের যেকোনো আশঙ্কাজনক বিপত্তিতে সঠিক দিকনির্দেশনা ও চিকিৎসাপত্র সহায়তা পেতে চেম্বার নাম্বারে বা অনলাইন ভিডিও মিডিয়ায় অগ্রাধিকার ভিত্তিতে অতি দ্রুত সাহায্য করা হয়ে থাকে।"
    }
  ];

  const handleToggle = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="bg-dark py-16 md:py-24 border-b border-white/5 relative"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(27,94,53,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(27,94,53,0.07)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[42px] font-black font-bengali text-white mb-4">
            সচরাচর জিজ্ঞাসা
          </h2>
          <p className="text-stone-400 font-bengali text-base max-w-lg mx-auto">
            ডা. অর্ক স্যারের পরামর্শ ও চেম্বার সেবাবলি সম্পর্কে রোগীদের সচরাচর জানতে চাওয়া গুরুত্বপূর্ণ উত্তরগুলো একনজরে
          </p>
        </div>

        {/* List of Accordions */}
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-[#1B5E35]/15 border transition-colors rounded-2xl overflow-hidden ${
                  isOpen ? 'border-gold/40' : 'border-white/10 hover:border-white/20'
                }`}
                style={{ borderLeft: isOpen ? '4px solid var(--color-gold)' : '1px solid rgba(255, 255, 255, 0.1)' }}
              >
                {/* Header click bar */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 cursor-pointer focus:outline-none select-none"
                >
                  <span className="text-white font-bold font-bengali text-sm md:text-base pr-4 leading-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-gold' : ''
                    }`}
                  />
                </button>

                {/* Answer box dynamic accordion */}
                <div
                  className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${
                    isOpen ? 'max-h-[450px] border-t border-white/5 py-4' : 'max-h-0'
                  }`}
                >
                  <div className="text-white/85 font-bengali text-stone-300 text-sm md:text-[15px] leading-relaxed md:leading-loose">
                    {faq.id === 2 ? (
                      <div>
                        <p>{faq.answer.split("প্রধান চেম্বার সময়সূচি:")[0]}</p>
                        <div className="mt-3 bg-white/5 border border-white/10 p-4 rounded-xl text-stone-200">
                          <p className="font-extrabold text-gold text-sm md:text-base mb-2">
                            👑 প্রধান চেম্বার (একতা ডায়াগনস্টিক ও ইমেজিং সেন্টার) সময়সূচি:
                          </p>
                          <div className="space-y-1.5 text-xs md:text-sm pl-1">
                            <p className="flex items-center gap-1.5">
                              <span>⏳</span>
                              <span><strong className="text-white">বৃহস্পতিবার থেকে সোমবার:</strong> <b className="text-gold">বিকাল ৩:৩০ মিনিট থেকে সন্ধ্যা ৬:৩০ মিনিট</b></span>
                            </p>
                            <p className="flex items-center gap-1.5">
                              <span>⏳</span>
                              <span><strong className="text-teal-300 font-sans">শুক্রবার সকাল ১০টা থেকে দুপুর ২টা</strong></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p>{faq.answer}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
