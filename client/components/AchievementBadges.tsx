export default function AchievementBadges() {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 rounded-2xl p-4 mt-8 max-w-2xl mx-auto">
      <h3 className="font-bold text-purple-900 mb-3 text-center">🏆 Unlock Rewards with GitHub Stars</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-white/70 rounded-lg p-3 text-center">
          <div className="text-2xl mb-1">🔓</div>
          <div className="font-bold text-sm">100 Stars</div>
          <div className="text-xs text-gray-600">Agent conversation logs</div>
        </div>
        <div className="bg-white/70 rounded-lg p-3 text-center opacity-60">
          <div className="text-2xl mb-1">🎯</div>
          <div className="font-bold text-sm">500 Stars</div>
          <div className="text-xs text-gray-600">Personality upgrades</div>
        </div>
        <div className="bg-white/70 rounded-lg p-3 text-center opacity-60">
          <div className="text-2xl mb-1">🚀</div>
          <div className="font-bold text-sm">1000 Stars</div>
          <div className="text-xs text-gray-600">AgentFleet Cloud</div>
        </div>
      </div>
    </div>
  );
}