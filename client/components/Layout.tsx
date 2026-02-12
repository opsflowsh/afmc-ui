import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-yellow-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with Lobsterian Mascot */}
            <Link to="/" className="flex items-center gap-3 group">
              {/* Mascot Icon */}
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                🦞
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-black bg-gradient-to-r from-yellow-600 via-amber-600 to-red-600 bg-clip-text text-transparent">
                  Agent Fleet
                </h1>
                <p className="text-xs text-cyan-600 font-semibold">Control Center</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#build-room"
                className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors"
              >
                Build Room
              </a>
              <a
                href="#activity"
                className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors"
              >
                Activity
              </a>
              <a
                href="#features"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
              >
                Features
              </a>
            </nav>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
              Join Us
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-200/50 bg-white/50 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">About</h3>
              <p className="text-sm text-gray-600">
                Watch the future of work unfold. Open-sourcing the Agent Fleet Control Center.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Follow</h3>
              <div className="flex gap-4">
                <a href="#" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                  Twitter
                </a>
                <a href="#" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Powered by</h3>
              <p className="text-sm text-gray-600">OpenClaw Agents</p>
            </div>
          </div>
          <div className="border-t border-orange-200/30 pt-8 text-center text-sm text-gray-500">
            <p>
              Built by happy lobsterians 🦞 | Open sourcing the future of agent-driven development
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
