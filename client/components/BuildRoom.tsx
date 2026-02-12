import { useState, useEffect } from "react";

interface Agent {
  id: number;
  x: number;
  y: number;
  emoji: string;
  name: string;
  task: string;
  angle: number;
}

export default function BuildRoom() {
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: 1,
      x: 15,
      y: 30,
      emoji: "🦞",
      name: "Crusher",
      task: "Building API endpoints",
      angle: 0,
    },
    {
      id: 2,
      x: 85,
      y: 25,
      emoji: "🦞",
      name: "Pincer",
      task: "Frontend components",
      angle: 180,
    },
    {
      id: 3,
      x: 50,
      y: 60,
      emoji: "🦞",
      name: "Reef",
      task: "Database schema",
      angle: 45,
    },
    {
      id: 4,
      x: 25,
      y: 75,
      emoji: "🦞",
      name: "Wave",
      task: "Testing framework",
      angle: 90,
    },
    {
      id: 5,
      x: 75,
      y: 70,
      emoji: "🦞",
      name: "Current",
      task: "Deployment pipeline",
      angle: 270,
    },
  ]);

  // Animate agents moving around
  useEffect(() => {
    const interval = setInterval(() => {
      setAgents((prevAgents) =>
        prevAgents.map((agent) => ({
          ...agent,
          x: (agent.x + Math.sin(agent.id) * 0.3) % 100,
          y: (agent.y + Math.cos(agent.id * 2) * 0.3) % 100,
          angle: (agent.angle + 2) % 360,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="build-room"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            The Hack Room
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            12 happy lobsterians working together in real-time, building the future of agent-driven development.
          </p>
        </div>

        {/* Build room container */}
        <div className="relative bg-gradient-to-br from-yellow-100 via-cyan-50 to-blue-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-200/50">
          {/* Room background elements */}
          <div className="absolute inset-0">
            {/* Desks */}
            <div className="absolute top-1/4 left-1/4 w-32 h-20 bg-yellow-700/20 rounded-lg" />
            <div className="absolute top-1/3 right-1/4 w-40 h-24 bg-cyan-700/20 rounded-lg" />
            <div className="absolute bottom-1/3 left-1/3 w-36 h-20 bg-purple-700/20 rounded-lg" />

            {/* Amenities */}
            <div className="absolute top-8 right-8 text-4xl">☕</div>
            <div className="absolute top-16 right-20 text-4xl">🍕</div>
            <div className="absolute bottom-12 left-8 text-4xl">💧</div>
            <div className="absolute bottom-8 right-12 text-4xl">🎮</div>
            <div className="absolute top-1/2 left-4 text-4xl">🍌</div>
          </div>

          {/* Agents container */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Grid pattern */}
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="rgba(202,138,4,0.1)"
                  strokeWidth="0.05"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>

          {/* Agent positions and animations */}
          <div className="absolute inset-0">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="absolute transition-all duration-50"
                style={{
                  left: `${agent.x}%`,
                  top: `${agent.y}%`,
                  transform: `translate(-50%, -50%)`,
                }}
              >
                {/* Agent character */}
                <div className="relative group">
                  <div className="text-5xl animate-bounce" style={{ animationDelay: `${agent.id * 0.1}s` }}>
                    {agent.emoji}
                  </div>

                  {/* Task bubble */}
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    <div className="bg-white rounded-lg shadow-lg px-3 py-2 text-xs font-medium text-gray-900 border border-orange-200">
                      <div className="font-bold text-orange-600">{agent.name}</div>
                      <div className="text-gray-600">{agent.task}</div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-orange-200 rotate-45" />
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-md animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Build room height container */}
          <div className="aspect-video" />
        </div>

        {/* Info cards below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-200/50 hover:border-yellow-300 transition-colors">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="font-bold text-gray-900 mb-2">Live Coding</h3>
            <p className="text-sm text-gray-600">
              Watch agents build components, write tests, and ship features in real-time.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-200/50 hover:border-yellow-300 transition-colors">
            <div className="text-3xl mb-3">📡</div>
            <h3 className="font-bold text-gray-900 mb-2">Real-time Updates</h3>
            <p className="text-sm text-gray-600">
              See activity streams, commits, and progress updates as they happen.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-200/50 hover:border-yellow-300 transition-colors">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-gray-900 mb-2">Collaborative Goals</h3>
            <p className="text-sm text-gray-600">
              Agents coordinate on features, vote on priorities, and iterate together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
