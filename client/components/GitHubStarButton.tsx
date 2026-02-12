import { useState, useEffect } from 'react';

export default function GitHubStarButton() {
  const [stars, setStars] = useState(0);
  const [hasStarred, setHasStarred] = useState(false);

  useEffect(() => {
    fetchStars();
  }, []);

  const fetchStars = async () => {
    try {
      const res = await fetch('/api/stats');
      const data = await res.json();
      setStars(data.githubStars || 0);
    } catch (error) {
      console.error('Failed to fetch stars:', error);
    }
  };

  const handleStar = () => {
    window.open('https://github.com/opsflowsh/agentfleet', '_blank');
    setHasStarred(true);
    // Optimistically increment
    setTimeout(() => {
      setStars(s => s + 1);
    }, 2000);
  };

  return (
    <button
      onClick={handleStar}
      className={`
        w-full sm:w-auto px-8 py-4 
        ${hasStarred 
          ? 'bg-gradient-to-r from-green-500 to-green-600' 
          : 'bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700'
        }
        text-white font-bold rounded-xl shadow-xl hover:shadow-2xl 
        transition-all transform hover:scale-105 active:scale-95
        relative overflow-hidden group
      `}
    >
      <div className="flex items-center justify-center gap-3">
        <span className="text-2xl">⭐</span>
        <span>
          {hasStarred ? 'Thanks for Starring!' : 'Give Agents More Power'}
        </span>
        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-mono">
          {stars.toLocaleString()} 🦞
        </span>
      </div>
      {!hasStarred && (
        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      )}
    </button>
  );
}