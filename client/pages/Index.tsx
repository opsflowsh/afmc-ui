import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BuildRoom from "@/components/BuildRoom";
import ActivityFeed from "@/components/ActivityFeed";
import FeatureVoting from "@/components/FeatureVoting";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <BuildRoom />
      <ActivityFeed />
      <FeatureVoting />

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-red-300/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-gradient-to-bl from-yellow-300/20 to-orange-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-orange-200 shadow-2xl">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Ready to join the revolution?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Star us on GitHub, request features, vote on priorities, and help shape the future of agent-driven development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95">
                ⭐ Star on GitHub
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-orange-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-orange-200">
                📧 Get Updates
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
