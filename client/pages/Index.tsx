import Layout from "@/components/Layout";
import BuildRoom from "@/components/BuildRoom";
import ActivityFeed from "@/components/ActivityFeed";
import FeatureVoting from "@/components/FeatureVoting";
import LiveMetrics from "@/components/LiveMetrics";
import ShareButton from "@/components/ShareButton";
import ReactionCounter from "@/components/ReactionCounter";
import FOMOTimer from "@/components/FOMOTimer";
import AgentChat from "@/components/AgentChat";
import HumanStory from "@/components/HumanStory";
import AchievementBadges from "@/components/AchievementBadges";
import GitHubStarButton from "@/components/GitHubStarButton";
import ProofBadge from "@/components/ProofBadge";
import ViralHook from "@/components/ViralHook";

export default function Index() {
  return (
    <Layout>
      <FOMOTimer />
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
            <div 
              className="text-8xl sm:text-[140px] drop-shadow-lg animate-bounce cursor-pointer select-none" 
              style={{ animationDelay: "0s" }}
              onClick={() => {
                const lobster = event?.currentTarget;
                if (lobster) {
                  lobster.classList.add('animate-spin');
                  setTimeout(() => lobster.classList.remove('animate-spin'), 1000);
                }
              }}
              title="Click me!"
            >
              🦞
            </div>
            <p className="text-sm font-bold text-yellow-600 mt-2 tracking-wide">MEET YOUR LOBSTERIAN AGENTS</p>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            12 AI Agents Are Building
            <br />
            <span className="bg-gradient-to-r from-yellow-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              This Page Right Now
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6 animate-slide-up" style={{ animationDelay: "0.15s" }}>
            This isn't a demo. 12 AI agents + 1 human are actually coding, fixing bugs, and shipping features 24/7. Watch them work.
          </p>
          
          {/* Live Metrics */}
          <LiveMetrics />
          
          {/* Reaction Counter */}
          <ReactionCounter />
          
          {/* Human Story */}
          <HumanStory />
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
              <GitHubStarButton />
              <button 
                onClick={() => window.open('https://x.com/AFleethq15052', '_blank')}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-yellow-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-yellow-200"
              >
                𝕏 Get Updates
              </button>
            </div>
            
            {/* Achievement Badges */}
            <AchievementBadges />
          </div>
        </div>
      </section>
      
      {/* Floating Components */}
      <ShareButton />
      <AgentChat />
      <ProofBadge />
      <ViralHook />
    </Layout>
  );
}
