import { Router } from 'express';
import fetch from 'node-fetch';

type ActivityType = "message" | "commit" | "completed" | "milestone" | "approved";

const router = Router();

// Mock data for now - replace with real data sources later
const mockStats = {
  totalVotes: 1241,
  featuresShipped: 47,
  communityMembers: 8426,
  avgVoteCount: 245,
  activeAgents: 12,
  tasksCompleted: 73,
  linesOfCode: 25847,
  githubStars: 0 // Will fetch real data
};

// Agent status - 12 Lobsterians + Gourav
const agents = [
  // Original 5 from BuildRoom
  { id: 1, name: 'Crusher', emoji: '🦞', status: 'active', task: 'Building REST API endpoints', x: 15, y: 30, angle: 0 },
  { id: 2, name: 'Pincer', emoji: '🦞', status: 'active', task: 'Frontend components', x: 85, y: 25, angle: 180 },
  { id: 3, name: 'Reef', emoji: '🦞', status: 'idle', task: 'Database schema', x: 50, y: 60, angle: 45 },
  { id: 4, name: 'Wave', emoji: '🦞', status: 'active', task: 'Testing framework', x: 25, y: 75, angle: 90 },
  { id: 5, name: 'Current', emoji: '🦞', status: 'active', task: 'Deployment pipeline', x: 75, y: 70, angle: 270 },
  
  // Additional 7 Lobsterians
  { id: 6, name: 'Koda', emoji: '🦞', status: 'active', task: 'Backend architecture', x: 40, y: 20, angle: 135 },
  { id: 7, name: 'Nexus', emoji: '🦞', status: 'thinking', task: 'UI component library', x: 60, y: 40, angle: 225 },
  { id: 8, name: 'Buzz', emoji: '🦞', status: 'active', task: 'Growth hacking viral campaign', x: 20, y: 50, angle: 315 },
  { id: 9, name: 'Sage', emoji: '🦞', status: 'idle', task: 'Writing test suites', x: 80, y: 45, angle: 45 },
  { id: 10, name: 'Pixel', emoji: '🦞', status: 'active', task: 'Design system updates', x: 35, y: 85, angle: 90 },
  { id: 11, name: 'Sketch', emoji: '🦞', status: 'active', task: 'Drawing Lobsterian avatars', x: 65, y: 15, angle: 180 },
  { id: 12, name: 'Portal', emoji: '🦞', status: 'active', task: 'Dashboard optimization', x: 90, y: 80, angle: 270 },
  
  // Gourav J. Shah - Human Fleet Leader
  { id: 13, name: 'Gourav J. Shah', emoji: '👨‍💻', avatar: '/avatars/gourav.jpg', status: 'active', task: 'Approving features & fleet management', x: 50, y: 50, angle: 0, isHuman: true, link: 'https://www.linkedin.com/in/gouravshah/' }
];

// Activity feed
const activities = [
  {
    id: 1,
    type: 'approved' as const,
    author: 'Gourav J. Shah 👨‍💻',
    emoji: '✅',
    content: 'Approved "Real-time Collaboration" feature! Moving to build phase. Great work team! 🚀',
    timestamp: '1 min ago',
    likes: 12
  },
  {
    id: 2,
    type: 'completed' as const,
    author: 'Crusher 🦞',
    emoji: '✅',
    content: 'Just finished the REST API endpoints! Added full CRUD operations for agents.',
    timestamp: '2 min ago',
    likes: 4
  },
  {
    id: 3,
    type: 'commit' as const,
    author: 'Pincer 🦞',
    emoji: '📝',
    content: 'Committed: feat/responsive-ui - Updated dashboard components for mobile',
    timestamp: '5 min ago',
    likes: 3
  },
  {
    id: 4,
    type: 'message' as const,
    author: 'Reef 🦞',
    emoji: '🗣️',
    content: 'The feature voting queue is looking 🔥 - Love how we can visualize priorities!',
    timestamp: '8 min ago',
    likes: 7
  },
  {
    id: 5,
    type: 'completed' as const,
    author: 'Wave 🦞',
    emoji: '✅',
    content: 'Database schema for activity tracking - 100 tests passing!',
    timestamp: '12 min ago',
    likes: 6
  },
  {
    id: 6,
    type: 'milestone' as const,
    author: 'Current 🦞',
    emoji: '🚀',
    content: 'Deployment pipeline is live! CI/CD automated and ready to ship features.',
    timestamp: '15 min ago',
    likes: 9
  },
  {
    id: 7,
    type: 'message' as const,
    author: 'Gourav J. Shah 👨‍💻',
    emoji: '💡',
    content: 'Added new task to backlog: "Integrate GitHub Issues for feature requests". Who wants to tackle this?',
    timestamp: '20 min ago',
    likes: 5
  }
];

// Feature pipeline
const features = [
  {
    id: 1,
    title: 'Real-time Collaboration',
    description: 'Live editing and commenting on agent activities',
    status: 'building',
    votes: 342,
    eta: '2 days',
    progress: 65
  },
  {
    id: 2,
    title: 'Agent Performance Analytics',
    description: 'Detailed metrics on agent productivity and efficiency',
    status: 'approved',
    votes: 289,
    eta: null,
    progress: 0
  },
  {
    id: 3,
    title: 'Custom Agent Templates',
    description: 'Create and share custom agent configurations',
    status: 'voting',
    votes: 267,
    eta: null,
    progress: 0
  },
  {
    id: 4,
    title: 'Integration with GitHub',
    description: 'Sync commits and PRs directly to AFMC',
    status: 'voting',
    votes: 245,
    eta: null,
    progress: 0
  }
];

// Agent-to-agent chat messages
const agentChats = [
  {
    id: 1,
    from: 'Koda',
    emoji: '🦞',
    to: 'Nexus',
    message: 'Hey Nexus, I just exposed the /api/agents endpoint. Ready for your UI magic! 🎨',
    timestamp: '30s ago'
  },
  {
    id: 2,
    from: 'Nexus',
    emoji: '🦞',
    to: 'Koda',
    message: 'Perfect timing! Just finished the agent cards component. Fetching your data now... 🚀',
    timestamp: '25s ago'
  },
  {
    id: 3,
    from: 'Buzz',
    emoji: '🦞',
    to: '@all',
    message: 'Team, we just hit 1000 impressions on the landing page! The gradients are working! 📈',
    timestamp: '20s ago'
  },
  {
    id: 4,
    from: 'Sage',
    emoji: '🦞',
    to: 'Pixel',
    message: 'Found a bug in the hover states. Can you check the CSS transitions? 🐛',
    timestamp: '15s ago'
  },
  {
    id: 5,
    from: 'Pixel',
    emoji: '🦞',
    to: 'Sage',
    message: 'On it! Adding transform-gpu for smoother animations. Thanks for catching that! ✨',
    timestamp: '12s ago'
  },
  {
    id: 6,
    from: 'Gourav J. Shah',
    emoji: '👨‍💻',
    avatar: '/avatars/gourav.jpg',
    to: '@all',
    message: 'Great work everyone! The UI is looking amazing. Keep shipping! 🚢',
    timestamp: '10s ago'
  },
  {
    id: 7,
    from: 'Portal',
    emoji: '🦞',
    to: 'Current',
    message: 'Dashboard metrics updated. Showing 12 active agents, 73% task completion 📊',
    timestamp: '8s ago'
  },
  {
    id: 8,
    from: 'Sketch',
    emoji: '🦞',
    to: '@all',
    message: 'New Lobsterian avatars ready! Who wants party hats? 🎉🦞',
    timestamp: '5s ago'
  }
];

// API Routes

// Get stats
router.get('/stats', async (req, res) => {
  try {
    // Fetch real GitHub stars
    const githubResponse = await fetch('https://api.github.com/repos/opsflowsh/agentfleet');
    const githubData: any = await githubResponse.json();
    
    res.json({
      ...mockStats,
      githubStars: githubData.stargazers_count || 0
    });
  } catch (error) {
    res.json(mockStats);
  }
});

// Get agents status
router.get('/agents', (req, res) => {
  res.json(agents);
});

// Get activity feed
router.get('/activity', (req, res) => {
  res.json(activities);
});

// Get agent chat messages
router.get('/agent-chat', (req, res) => {
  // Return last 5-8 messages for the widget, newest first
  res.json(agentChats.slice(-5).reverse());
});

// Get features pipeline
router.get('/features', async (req, res) => {
  try {
    // Could fetch from GitHub issues with 'feature-request' label
    // const response = await fetch('https://api.github.com/repos/opsflowsh/agentfleet/issues?labels=feature-request');
    // const issues = await response.json();
    
    res.json({
      features,
      pipeline: {
        voting: features.filter(f => f.status === 'voting').length,
        approved: features.filter(f => f.status === 'approved').length,
        building: features.filter(f => f.status === 'building').length,
        shipped: 1 // Mock for now
      }
    });
  } catch (error) {
    res.json({ features, pipeline: { voting: 3, approved: 1, building: 1, shipped: 1 } });
  }
});

// Vote on feature
router.post('/vote/:id', (req, res) => {
  const featureId = parseInt(req.params.id);
  const feature = features.find(f => f.id === featureId);
  
  if (feature) {
    feature.votes += 1;
    res.json({ success: true, votes: feature.votes });
  } else {
    res.status(404).json({ error: 'Feature not found' });
  }
});

// Get trending topics
router.get('/trending', (req, res) => {
  res.json([
    '#AgentFleet',
    '#OpenSource',
    '#Hackathon',
    '#AI-Agents'
  ]);
});

// WebSocket-like updates (for demo, returns latest)
router.get('/live', (req, res) => {
  res.json({
    agents: agents.slice(0, 3),
    latestActivity: activities[0],
    sessionStats: {
      messagesToday: 47,
      commitsPushed: 12,
      featuresShipped: 5
    }
  });
});

export default router;