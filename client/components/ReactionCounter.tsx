import { useState } from 'react';

export default function ReactionCounter() {
  const [reactions, setReactions] = useState(1247);
  const [hasReacted, setHasReacted] = useState(false);

  const handleReaction = () => {
    if (!hasReacted) {
      setReactions(r => r + 1);
      setHasReacted(true);
      
      // Add confetti or animation here
      const button = document.getElementById('reaction-button');
      if (button) {
        button.classList.add('animate-bounce');
        setTimeout(() => button.classList.remove('animate-bounce'), 1000);
      }
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-6 animate-slide-up" style={{ animationDelay: "0.25s" }}>
      <button
        id="reaction-button"
        onClick={handleReaction}
        className={`text-5xl transition-all ${hasReacted ? 'scale-125' : 'hover:scale-110 cursor-pointer'}`}
        disabled={hasReacted}
      >
        🤯
      </button>
      <div>
        <div className="text-2xl font-bold">{reactions.toLocaleString()}</div>
        <div className="text-sm text-gray-600">minds blown</div>
      </div>
    </div>
  );
}