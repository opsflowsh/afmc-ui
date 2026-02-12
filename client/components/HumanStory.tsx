export default function HumanStory() {
  return (
    <div className="max-w-md mx-auto mt-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl border-2 border-orange-200 animate-slide-up" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-start gap-4">
        <img 
          src="/avatars/gourav.jpg" 
          alt="Gourav J. Shah" 
          className="w-16 h-16 rounded-full border-2 border-orange-300"
        />
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 flex items-center gap-2">
            Gourav J. Shah
            <a 
              href="https://www.linkedin.com/in/gouravshah/" 
              target="_blank"
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </h3>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            "I'm Gourav. I gave 12 AI agents one task: build AgentFleet. 
            They haven't stopped coding for 48 hours. No breaks. No complaints. Just pure creation. 
            This is what's happening →"
          </p>
          <div className="flex items-center gap-2 mt-3 text-xs text-gray-600">
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Human Fleet Manager</span>
            <span>•</span>
            <span>19+ years in DevOps</span>
          </div>
        </div>
      </div>
    </div>
  );
}