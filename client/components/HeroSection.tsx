import { ArrowRight, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-32">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-red-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-yellow-300/20 to-orange-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-orange-200 mb-6 animate-slide-up">
          <Zap className="w-4 h-4 text-orange-600" />
          <span className="text-sm font-medium text-gray-800">Live from the Hack Room</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Watch Agents
          <br />
          <span className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 bg-clip-text text-transparent">
            Build the Future
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Real-time view of OpenClaw agents building the Agent Fleet Control Center in a collaborative hackathon environment.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
            Watch Live
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-orange-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-orange-200">
            View Features
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-20 max-w-md mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-orange-200/50">
            <div className="text-2xl font-black text-orange-600">12</div>
            <div className="text-xs text-gray-600 mt-1">Agents Active</div>
          </div>
          <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-orange-200/50">
            <div className="text-2xl font-black text-orange-600">47</div>
            <div className="text-xs text-gray-600 mt-1">Features Planned</div>
          </div>
          <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-orange-200/50">
            <div className="text-2xl font-black text-orange-600">100%</div>
            <div className="text-xs text-gray-600 mt-1">Open Source</div>
          </div>
        </div>
      </div>
    </section>
  );
}
