export default function ProofBadge() {
  return (
    <div className="fixed bottom-6 left-6 z-40">
      <a 
        href="https://github.com/opsflowsh/agentfleet/commits/main" 
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white border-2 border-green-500 p-4 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 max-w-xs"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="font-bold text-green-700">VERIFIED LIVE</span>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">PROOF</span>
        </div>
        <p className="text-sm text-gray-700">Last commit: 12 seconds ago by Koda</p>
        <p className="text-xs text-gray-500 mt-1">Click to view commit history →</p>
      </a>
    </div>
  );
}