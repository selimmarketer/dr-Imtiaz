import { Star, ShieldCheck } from 'lucide-react';

interface Review {
  id: number;
  stars: number;
  text: string;
  author: string;
  area: string;
  time: string;
  initials: string;
}

export default function Testimonials() {
  const reviews: Review[] = [
    {
      id: 1,
      stars: 5,
      text: "আমার ডায়াবেটিস ৮ বছর ধরে। অনেক ডাক্তার দেখেছি কিন্তু এমন করে কেউ বোঝায়নি। ডা. অর্ক স্যার শুধু ওষুধ দেননি, খাওয়াদাওয়া থেকে শুরু করে সব কিছু বুঝিয়ে দিলেন। এখন সুগার নিয়ন্ত্রণে।",
      author: "মো. আবদুল করিম",
      area: "মধুখালী",
      time: "৩ মাস আগে",
      initials: "আ"
    },
    {
      id: 2,
      stars: 5,
      text: "অনলাইনে নিতে ভয় পাচ্ছিলাম, মনে হচ্ছিল ঠিকঠাক হবে না। কিন্তু স্যার WhatsApp-এ এত সুন্দরভাবে সব শুনলেন, প্রেসক্রিপশন দিলেন। এখন বাচ্চার জ্বর আর কাশিতে আর দূরে যেতে হয় না।",
      author: "সেলিনা বেগম",
      area: "রাজবাড়ী",
      time: "২ মাস আগে",
      initials: "সে"
    },
    {
      id: 3,
      stars: 5,
      text: "বুকে ব্যথা দেখা দিলে অনেক চিন্তায় পড়েছিলাম। স্যার সব পরীক্ষা দেখে বললেন চিন্তার কিছু নেই। এই আশ্বাসটাই অনেক বড় ছিল। সত্যিই ভালো মানুষ ও নিবিড় যত্নশীল ব্যক্তিত্ব।",
      author: "রফিকুল ইসলাম",
      area: "ফরিদপুর সদর",
      time: "৫ মাস আগে",
      initials: "র"
    },
    {
      id: 4,
      stars: 5,
      text: "শ্বাসকষ্টে অনেক কষ্ট পাচ্ছিলাম রাতে। স্যারের কাছে এসে মাত্র ১৫ দিনে অনেকটা ভালো হলাম। চেম্বারে সিরিয়ালের ঝামেলা নেই, সময়মতো সঠিক সময়ে ডেকে দেখেন।",
      author: "নাছিমা খাতুন",
      area: "মধুখালী",
      time: "১ মাস আগে",
      initials: "না"
    },
    {
      id: 5,
      stars: 5,
      text: "আমি ঢাকায় থাকি, মা ফরিদপুরে থাকেন। মাকে নিয়ে চেম্বারে আসা সম্ভব হচ্ছিল না। অনলাইনে স্যারকে দেখালাম। ভিডিও কলে স্যার মাকে দেখলেন, ধৈর্য্য ধরে কথা শুনে ডিজিটাল প্রেসক্রিপশন দিলেন।",
      author: "আরিফ হোসেন",
      area: "ঢাকা",
      time: "৪ মাস আগে",
      initials: "আ"
    },
    {
      id: 6,
      stars: 5,
      text: "কিডনির সমস্যা শুনে প্রথমে অনেক ভয় পেয়েছিলাম। স্যার অনেক সময় নিয়ে ধৈর্য্য ধরে বোঝালেন কী কী করতে হবে। এখন স্যারের নিয়মিত ফলো-আপে রয়েছি, অনেক সুস্থ আছি।",
      author: "জাহানারা বেগম",
      area: "ভাঙ্গা",
      time: "৬ মাস আগে",
      initials: "জা"
    }
  ];

  // We split reviews into two rows to scroll them in opposite directions
  const row1 = [...reviews];
  const row2 = [...reviews].reverse();

  const renderReviewCard = (review: Review, index: number) => (
    <div
      key={`${review.id}-${index}`}
      className="bg-white rounded-2xl shadow-md px-6 py-6 border border-neutral-100 flex flex-col justify-between select-none min-w-[300px] max-w-[340px] h-[240px] shrink-0"
    >
      <div>
        {/* Rating stars & Google tag */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-0.5 text-gold">
            {[...Array(review.stars)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
          {/* Customized Google G branded SVG logo */}
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69c-.29 1.5-.14 3.01-1.34 3.93v3.2h2.24c3.08-2.83 4.8-7 4.8-11.06z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-3.2-3.2c-1.12.75-2.5 1.15-4.16 1.15-3.2 0-5.89-2.16-6.86-5.07H2.43v2.48C4.38 20.3 8.85 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.14 13.97a7.2 7.2 0 0 1 0-4.14V7.35H2.43a12 12 0 0 0 0 9.1l2.71-2.48z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.96 1.19 15.24 0 12 0 8.85 0 4.38 3.7 2.43 7.35l2.71 2.48c.97-2.91 3.66-5.08 6.86-5.08z"
              />
            </svg>
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-neutral-400 font-sans">
              Google
            </span>
          </div>
        </div>

        {/* Narrative text */}
        <p className="text-stone-800 font-bengali text-sm leading-relaxed mb-4 line-clamp-4">
          "{review.text}"
        </p>
      </div>

      {/* Patient info details */}
      <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
        <div className="flex items-center gap-2.5">
          {/* Avatar holding initial initials */}
          <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm tracking-none font-bengali uppercase">
            {review.initials}
          </div>
          <div className="font-bengali">
            <h4 className="text-dark text-xs font-bold">{review.author}</h4>
            <span className="text-[10px] text-stone-500">{review.area} • {review.time}</span>
          </div>
        </div>

        {/* Checked Patient Pill */}
        <div className="flex items-center gap-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full font-bengali border border-emerald-100 uppercase">
          <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
          <span>যাচাইকৃত রোগী</span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials"
      className="bg-bg-light py-16 md:py-24 border-b border-primary/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        
        {/* Google ratings badge info widget */}
        <div className="inline-flex flex-col md:flex-row items-center gap-2 md:gap-4 bg-white px-6 py-3.5 rounded-3xl border border-neutral-100 shadow-sm mb-12 max-w-md mx-auto">
          <div className="flex items-center gap-1 border-b md:border-b-0 md:border-r border-neutral-200 pb-2 md:pb-0 md:pr-4">
            <span className="text-stone-400 font-extrabold text-xs uppercase tracking-wider font-sans">Google Reviews</span>
            <span className="text-primary h-2 w-2 rounded-full hidden md:inline"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-dark tracking-tighter">৪.৯</span>
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-stone-500 font-bengali text-xs">(২৮৭+ বাস্তব রিভিউ)</span>
          </div>
        </div>

        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[42px] font-black font-bengali text-dark mb-4">
            রোগীরা কী বলছেন
          </h2>
          <p className="text-text-muted font-bengali text-base max-w-lg mx-auto">
            সুস্থ হয়ে ওঠা বাস্তব রোগীদের মুখে শুনুন ডা. ইমতিয়াজ স্যারের নির্ভরযোগ্য চিকিৎসাসেবার অভিজ্ঞতা
          </p>
        </div>

        {/* Infinite loops carousel row 1 (Left Scrolling) */}
        <div className="relative w-full flex overflow-hidden mb-6 py-2 select-none">
          <div className="animate-scroll-left flex gap-5">
            {row1.map((item, i) => renderReviewCard(item, i))}
            {row1.map((item, i) => renderReviewCard(item, i + 10))} {/* cloner */}
          </div>
        </div>

        {/* Infinite loops carousel row 2 (Right Scrolling) */}
        <div className="relative w-full flex overflow-hidden py-2 select-none">
          <div className="animate-scroll-right flex gap-5">
            {row2.map((item, i) => renderReviewCard(item, i))}
            {row2.map((item, i) => renderReviewCard(item, i + 10))} {/* cloner */}
          </div>
        </div>

      </div>
    </section>
  );
}
