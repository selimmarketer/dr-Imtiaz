import { useEffect, useState, useRef } from 'react';

// Live Bengali digits converter helper
export function toBengaliNumber(num: number): string {
  const digits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num
    .toString()
    .split('')
    .map(char => (/\d/.test(char) ? digits[parseInt(char)] : char))
    .join('');
}

interface CounterProps {
  end: number;
  suffix?: string;
}

function StatsCounter({ end, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1500; // 1.5 seconds animation
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return (
    <span ref={ref} className="text-3xl md:text-5xl font-black text-gold font-sans leading-none block mb-1">
      {toBengaliNumber(count)}{suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section
      id="stats-strip"
      className="bg-primary py-8 md:py-10 border-y border-white/10 relative z-30"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-4 divide-y divide-white/10 lg:divide-y-0 lg:divide-x divide-solid">
          
          {/* Stat Box 1 */}
          <div className="text-center pt-4 first:pt-0 lg:pt-0 flex flex-col justify-center items-center font-bengali">
            <StatsCounter end={5000} suffix="+" />
            <h3 className="text-white text-sm md:text-base font-semibold mb-0.5">সন্তুষ্ট রোগী</h3>
            <span className="text-white/60 text-xs">এবং ক্রমাগত বাড়ছে...</span>
          </div>

          {/* Stat Box 2 */}
          <div className="text-center pt-6 lg:pt-0 flex flex-col justify-center items-center font-bengali">
            <StatsCounter end={8} suffix="+" />
            <h3 className="text-white text-sm md:text-base font-semibold mb-0.5">বছরের অভিজ্ঞতা</h3>
            <span className="text-white/60 text-xs">ক্রমাগত চিকিৎসাসেবা</span>
          </div>

          {/* Stat Box 3 */}
          <div className="text-center pt-6 lg:pt-0 flex flex-col justify-center items-center font-bengali px-2">
            <span className="text-3xl md:text-[38px] font-black text-gold block leading-none mb-1 font-sans">
              ৫ দিন
            </span>
            <h3 className="text-white text-sm md:text-base font-semibold mb-0.5">সাপ্তাহিক চেম্বার</h3>
            <span className="text-white/60 text-xs text-center leading-normal">বৃহস্পতিবার থেকে সোমবার (শুক্রবারসহ)</span>
          </div>

          {/* Stat Box 4 */}
          <div className="text-center pt-6 lg:pt-0 flex flex-col justify-center items-center font-bengali">
            <span className="text-3xl md:text-5xl font-black text-gold font-bengali leading-none block mb-1">
              ২৪/৭
            </span>
            <h3 className="text-white text-sm md:text-base font-semibold mb-0.5 font-bengali">অনলাইন সেবা</h3>
            <span className="text-white/60 text-xs">সরাসরি WhatsApp-এ</span>
          </div>

        </div>
      </div>
    </section>
  );
}
