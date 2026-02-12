import { useState, useEffect } from 'react';

export default function FOMOTimer() {
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t => t > 0 ? t - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 text-center animate-pulse shadow-lg z-50">
      <p className="font-bold flex items-center justify-center gap-3">
        <span>⏰ Next feature ships in: {formatTime(timeLeft)}</span>
        <span className="text-sm">|</span>
        <button
          onClick={scrollToFeatures}
          className="underline hover:no-underline cursor-pointer"
        >
          Vote Now →
        </button>
        <span className="text-sm bg-white/20 px-2 py-0.5 rounded-full">
          🔥 47 spots left
        </span>
      </p>
    </div>
  );
}