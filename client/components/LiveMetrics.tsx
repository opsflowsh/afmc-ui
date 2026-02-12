import { useState, useEffect } from 'react';

export default function LiveMetrics() {
  const [metrics, setMetrics] = useState({
    linesOfCode: 12847,
    commits: 73,
    features: 5
  });

  // Auto-increment for "live" feel
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        linesOfCode: prev.linesOfCode + Math.floor(Math.random() * 5) + 1
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 bg-black/80 backdrop-blur text-white p-6 rounded-2xl inline-block animate-pulse shadow-2xl">
      <div className="text-5xl font-mono font-bold tabular-nums">
        {metrics.linesOfCode.toLocaleString()}
      </div>
      <div className="text-sm opacity-80 mt-1">lines of code written by AI in 48 hours</div>
      <div className="flex gap-6 mt-3 text-sm">
        <div>
          <span className="font-bold">{metrics.commits}</span>
          <span className="opacity-70 ml-1">commits</span>
        </div>
        <div>
          <span className="font-bold">{metrics.features}</span>
          <span className="opacity-70 ml-1">features shipped</span>
        </div>
      </div>
    </div>
  );
}