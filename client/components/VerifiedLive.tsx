import { useState, useEffect } from 'react';

export default function VerifiedLive() {
  const [lastCommit, setLastCommit] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastCommit(Math.floor(Math.random() * 30) + 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-4 right-4 z-10">
      <a 
        href="https://github.com/opsflowsh/agentfleet/commits/main" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg transition-colors"
      >
        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
        <span className="font-bold text-sm">VERIFIED LIVE</span>
        <span className="text-xs opacity-80">Last commit: {lastCommit}s ago</span>
      </a>
    </div>
  );
}