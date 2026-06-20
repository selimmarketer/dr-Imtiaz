import { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Progress bar animation
    const startTime = Date.now();
    const duration = 1800; // 1.8s for loading

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(calculatedProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        // Fade out
        setFade(true);
        // Unmount component after transfer transition (200ms)
        const unmountTimeout = setTimeout(() => {
          onComplete();
        }, 300);
        return () => clearTimeout(unmountTimeout);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      id="preloader"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark transition-opacity duration-300 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center max-w-sm px-6 text-center">
        {/* Doctor Portrait with Pulse */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping duration-1000 scale-110"></div>
          <img
            src="https://i.imgur.com/WuzxI4q.jpeg"
            alt="Dr. Emtiaz Hossain Orko"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600";
            }}
            className="w-24 h-24 rounded-full border-3 border-gold object-cover relative z-10"
          />
        </div>

        {/* Doctor Name */}
        <p className="text-2xl font-bold text-white mb-1 transition-all duration-500 delay-100">
          ডা. ইমতিয়াজ হোসেন অর্ক
        </p>

        {/* Doctor Designation */}
        <p className="text-accent text-sm font-medium mb-12">
          মেডিসিন ও হৃদরোগে অভিজ্ঞ • মধুখালী, ফরিদপুর
        </p>

        {/* Progress Bar Container */}
        <div className="w-56 h-1 bg-primary/30 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-gold transition-all duration-[30ms] ease-out rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-white/40 text-xs font-mono">
          {Math.floor(progress)}%
        </span>
      </div>
    </div>
  );
}
