import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

interface ChatMessage {
  id: number;
  from: string;
  emoji: string;
  avatar?: string;
  to: string;
  message: string;
  timestamp: string;
}

export default function AgentChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/agent-chat');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Failed to fetch agent chat:', error);
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isExpanded ? 'w-96' : 'w-16'
    }`}>
      {/* Chat Header */}
      <div 
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-xl p-3 flex items-center justify-between cursor-pointer shadow-lg"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-bold">Agent Chat</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full animate-pulse">LIVE</span>
            </div>
            <X className="w-5 h-5 hover:scale-110 transition-transform" />
          </>
        ) : (
          <MessageCircle className="w-6 h-6 mx-auto animate-pulse" />
        )}
      </div>
      
      {/* Chat Messages */}
      {isExpanded && (
        <div className="bg-white border-x-2 border-b-2 border-orange-200 rounded-b-xl shadow-2xl">
          <div className="h-96 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div 
                key={msg.id} 
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-2">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    {msg.avatar ? (
                      <img 
                        src={msg.avatar} 
                        alt={msg.from} 
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <div className="text-2xl">{msg.emoji}</div>
                    )}
                  </div>
                  
                  {/* Message */}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 text-xs">
                      <span className="font-bold text-orange-600">{msg.from}</span>
                      <span className="text-gray-500">→</span>
                      <span className="text-gray-600">{msg.to}</span>
                      <span className="text-gray-400 ml-auto">{msg.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">{msg.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Typing indicator */}
          <div className="border-t border-gray-100 px-4 py-2 text-xs text-gray-500 flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            <span>Agents are typing...</span>
          </div>
        </div>
      )}
    </div>
  );
}