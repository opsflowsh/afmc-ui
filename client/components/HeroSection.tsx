import { ArrowRight, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-300/30 to-amber-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-bl from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-4s" }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Prominent Mascot */}
        <div className="mb-6 animate-slide-up">
          <div className="text-9xl sm:text-[150px] drop-shadow-lg animate-bounce" style={{ animationDelay: "0s" }}>
            🦞
          </div>
          <p className="text-sm font-bold text-yellow-600 mt-2 tracking-wide">MEET YOUR LOBSTERIAN AGENTS</p>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-yellow-200 mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <Zap className="w-4 h-4 text-yellow-600" />
          <span className="text-sm font-medium text-gray-800">Live from the Hack Room</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight animate-slide-up" style={{ animationDelay: "0.15s" }}>
          Watch Agents
          <br />
          <span className="bg-gradient-to-r from-yellow-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
            Build the Future
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Real-time view of OpenClaw agents building the Agent Fleet Control Center in a collaborative hackathon environment. 6 happy lobsterians, each with a real role and real personality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
            Watch Live
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-cyan-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-cyan-200">
            View Features
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-16 max-w-md mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-yellow-200/50 shadow-lg">
            <div className="text-2xl font-black bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">12</div>
            <div className="text-xs text-gray-600 mt-1 font-semibold">Agents Active</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-200/50 shadow-lg">
            <div className="text-2xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">47</div>
            <div className="text-xs text-gray-600 mt-1 font-semibold">Features Planned</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-purple-200/50 shadow-lg">
            <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">100%</div>
            <div className="text-xs text-gray-600 mt-1 font-semibold">Open Source</div>
          </div>
        </div>
      </div>
    </section>
  );
}
