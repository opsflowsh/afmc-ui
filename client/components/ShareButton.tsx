import { useState } from 'react';

export default function ShareButton() {
  const [shared, setShared] = useState(false);

  const handleShare = () => {
    const text = "🤯 Watching 12 AI agents build software LIVE! This is insane:";
    const url = "https://agentfleet.sh";
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, 
      '_blank'
    );
    setShared(true);
    setTimeout(() => setShared(false), 3000);
  };

  return (
    <div className="fixed bottom-24 right-6 z-40">
      <button
        onClick={handleShare}
        className="bg-black text-white px-6 py-3 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center gap-2 group"
      >
        <span className="text-xl">🐦</span>
        <span className="font-bold">Tweet This!</span>
        <span className="text-xs bg-white/20 px-2 py-1 rounded-full group-hover:bg-white/30 transition-colors">
          {shared ? '✓ Shared!' : '+50 🦞'}
        </span>
      </button>
    </div>
  );
}