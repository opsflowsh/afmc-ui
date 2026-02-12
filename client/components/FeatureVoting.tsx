import { ArrowUp, Check, Clock, Zap } from "lucide-react";
import { useState, useEffect } from "react";

interface Feature {
  id: number;
  title: string;
  description: string;
  votes: number;
  status: "voting" | "approved" | "building" | "shipped";
  eta?: string;
}

interface Stats {
  totalVotes: number;
  featuresShipped: number;
  communityMembers: number;
  avgVoteCount: number;
  githubStars: number;
}

export default function FeatureVoting() {
  const [features, setFeatures] = useState<Feature[]>([
    {
      id: 1,
      title: "Real-time Collaboration",
      description: "Live editing and commenting on agent activities",
      votes: 342,
      status: "building",
      eta: "2 days",
    },
    {
      id: 2,
      title: "Agent Performance Analytics",
      description: "Detailed metrics on agent productivity and efficiency",
      votes: 289,
      status: "approved",
    },
    {
      id: 3,
      title: "Custom Agent Templates",
      description: "Create and share custom agent configurations",
      votes: 267,
      status: "voting",
    },
    {
      id: 4,
      title: "Integration with GitHub",
      description: "Sync commits and PRs directly to AFMC",
      votes: 245,
      status: "voting",
    },
    {
      id: 5,
      title: "Agent Marketplace",
      description: "Browse and install community-built agents",
      votes: 198,
      status: "voting",
    },
    {
      id: 6,
      title: "Video Tutorials",
      description: "Getting started guides for new developers",
      votes: 156,
      status: "shipped",
    },
  ]);

  const [stats, setStats] = useState<Stats>({
    totalVotes: 1200000,
    featuresShipped: 47,
    communityMembers: 8400,
    avgVoteCount: 245,
    githubStars: 0,
  });

  // Fetch features and stats
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch features
        const featuresRes = await fetch("/api/features");
        if (featuresRes.ok) {
          const data = await featuresRes.json();
          setFeatures(data.features);
        }

        // Fetch stats
        const statsRes = await fetch("/api/stats");
        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setStats(statsData);
        }
      } catch (error) {
        console.log("Using default features and stats");
      }
    };

    fetchData();
  }, []);

  const handleVote = async (featureId: number) => {
    try {
      const res = await fetch(`/api/vote/${featureId}`, { method: "POST" });
      if (res.ok) {
        const data = await res.json();

        // Update local state with the response
        setFeatures((prev) =>
          prev.map((f) =>
            f.id === featureId ? { ...f, votes: data.votes } : f
          )
        );
      }
    } catch (error) {
      console.error("Vote failed:", error);
      // Fallback to local increment
      setFeatures((prev) =>
        prev.map((f) =>
          f.id === featureId ? { ...f, votes: f.votes + 1 } : f
        )
      );
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "voting":
        return "bg-cyan-50 border-cyan-200 text-cyan-900";
      case "approved":
        return "bg-purple-50 border-purple-200 text-purple-900";
      case "building":
        return "bg-yellow-50 border-yellow-200 text-yellow-900";
      case "shipped":
        return "bg-green-50 border-green-200 text-green-900";
      default:
        return "bg-gray-50 border-gray-200 text-gray-900";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "voting":
        return <ArrowUp className="w-4 h-4" />;
      case "approved":
        return <Zap className="w-4 h-4" />;
      case "building":
        return <Clock className="w-4 h-4" />;
      case "shipped":
        return <Check className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Request & Vote on Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help shape the future of AFMC. Vote on features you want, watch them move through the development pipeline.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Feature list */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`rounded-2xl p-6 border-2 transition-all hover:shadow-lg animate-slide-up ${getStatusColor(feature.status)}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold">{feature.title}</h3>
                        <div className="flex items-center gap-1 px-3 py-1 bg-white/60 rounded-full text-xs font-semibold">
                          {getStatusIcon(feature.status)}
                          {getStatusLabel(feature.status)}
                        </div>
                      </div>
                      <p className="text-sm opacity-90 mb-3">{feature.description}</p>

                      {feature.eta && (
                        <div className="text-xs font-medium opacity-75">
                          ⏱️ ETA: {feature.eta}
                        </div>
                      )}
                    </div>

                    {/* Vote button */}
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => handleVote(feature.id)}
                        className={`flex flex-col items-center gap-2 px-4 py-3 rounded-xl font-bold transition-all transform hover:scale-110 active:scale-95 ${
                          feature.status === "shipped"
                            ? "bg-white/40 cursor-default"
                            : "bg-white hover:bg-white shadow-md hover:shadow-lg"
                        }`}
                        disabled={feature.status === "shipped"}
                      >
                        <ArrowUp
                          className={`w-6 h-6 ${
                            feature.status === "shipped"
                              ? "text-gray-400"
                              : "text-yellow-600"
                          }`}
                        />
                        <span className="text-sm">{feature.votes}</span>
                      </button>
                    </div>
                  </div>

                  {/* Progress bar for building features */}
                  {feature.status === "building" && (
                    <div className="mt-4 h-2 bg-white/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 w-2/3 rounded-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline visualization */}
          <div className="bg-gradient-to-br from-yellow-50 to-cyan-50 rounded-2xl p-8 border-2 border-yellow-200 h-fit sticky top-24">
            <h3 className="font-bold text-gray-900 mb-6 text-lg">
              Development Pipeline
            </h3>

            <div className="space-y-4">
              {[
                {
                  label: "Voting",
                  count: features.filter((f) => f.status === "voting").length,
                  color: "bg-cyan-500",
                },
                {
                  label: "Approved",
                  count: features.filter((f) => f.status === "approved").length,
                  color: "bg-purple-500",
                },
                {
                  label: "Building",
                  count: features.filter((f) => f.status === "building").length,
                  color: "bg-yellow-500",
                },
                {
                  label: "Shipped",
                  count: features.filter((f) => f.status === "shipped").length,
                  color: "bg-green-500",
                },
              ].map((stage) => (
                <div key={stage.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      {stage.label}
                    </span>
                    <span className="text-lg font-black text-gray-900">
                      {stage.count}
                    </span>
                  </div>
                  <div className="h-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm border border-gray-200">
                    <div
                      className={`h-full ${stage.color} flex items-center justify-end px-3 text-white text-xs font-bold transition-all duration-500`}
                      style={{
                        width: `${(stage.count / features.length) * 100}%`,
                      }}
                    >
                      {stage.count > 0 && stage.count}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => window.open('https://github.com/opsflowsh/agentfleet/issues/new?template=feature_request.md', '_blank')}
              className="w-full mt-8 px-4 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg"
            >
              + Suggest Feature
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Votes", value: (stats.totalVotes / 1000000).toFixed(1) + "M" },
            { label: "Features Shipped", value: stats.featuresShipped },
            { label: "Community Members", value: (stats.communityMembers / 1000).toFixed(1) + "K" },
            { label: "Avg Vote Count", value: stats.avgVoteCount },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-4 text-center shadow-md border border-yellow-100 animate-slide-up"
            >
              <div className="text-2xl font-black bg-gradient-to-r from-yellow-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
