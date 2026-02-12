import Layout from "@/components/Layout";
import BuildRoom from "@/components/BuildRoom";
import ActivityFeed from "@/components/ActivityFeed";
import FeatureVoting from "@/components/FeatureVoting";

export default function Index() {
  return (
    <Layout>
      {/* Hero with Mascot and Quick CTA */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-300/30 to-amber-300/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-bl from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-4s" }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Prominent Mascot */}
          <div className="mb-4 animate-slide-up">
            <div className="text-8xl sm:text-[140px] drop-shadow-lg animate-bounce" style={{ animationDelay: "0s" }}>
              🦞
            </div>
            <p className="text-sm font-bold text-yellow-600 mt-2 tracking-wide">MEET YOUR LOBSTERIAN AGENTS</p>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Watch Agents
            <br />
            <span className="bg-gradient-to-r from-yellow-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Build the Future
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6 animate-slide-up" style={{ animationDelay: "0.15s" }}>
            Watch 12 happy lobsterians and 1 human fleet manager build the Agent Fleet Control Center in real-time.
          </p>
        </div>
      </section>

      {/* The main attraction - Hack Room */}
      <BuildRoom />

      {/* Activity and voting below */}
      <ActivityFeed />
      <FeatureVoting />

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-300/30 to-amber-300/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-gradient-to-bl from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-yellow-200 shadow-2xl">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Ready to join the revolution?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Star us on GitHub, request features, vote on priorities, and help shape the future of agent-driven development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => window.open('https://github.com/opsflowsh/agentfleet', '_blank')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95"
              >
                ⭐ Star on GitHub
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-yellow-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-yellow-200">
                📧 Get Updates
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
