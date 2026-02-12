# 🚀 Builder.io Integration Brief

## Overview
The Builder.io UI is beautifully designed and already has most components in place. We need to wire them to our API endpoints and add a few enhancements.

## Current Components Analysis

### 1. **BuildRoom.tsx** (The Hack Room)
**Current State:**
- Has 5 static Lobsterians (needs 12)
- Animated movement works
- Hover tooltips show agent names/tasks

**What needs to be connected:**
```javascript
// Replace static agents with API call
useEffect(() => {
  fetch('/api/agents')
    .then(res => res.json())
    .then(data => setAgents(data));
}, []);
```

**Enhancement needed:**
- Add 7 more Lobsterians to make 12 total
- Add Gojo as human member (special icon: 👨‍💻)

### 2. **ActivityFeed.tsx** 
**Current State:**
- Static activities array
- Beautiful UI with icons
- Session stats sidebar (static)

**What needs to be connected:**
```javascript
// Fetch live activities
useEffect(() => {
  fetch('/api/activity')
    .then(res => res.json())
    .then(data => setActivities(data));
    
  // Poll for updates every 30s
  const interval = setInterval(() => {
    fetch('/api/live')
      .then(res => res.json())
      .then(data => {
        // Update session stats
        // Add new activities
      });
  }, 30000);
  
  return () => clearInterval(interval);
}, []);
```

### 3. **FeatureVoting.tsx**
**Current State:**
- Local state management
- Vote counts update locally only
- Pipeline visualization works

**What needs to be connected:**
```javascript
// Fetch features from API
useEffect(() => {
  fetch('/api/features')
    .then(res => res.json())
    .then(data => setFeatures(data.features));
}, []);

// Wire vote button
const handleVote = async (featureId) => {
  const res = await fetch(`/api/vote/${featureId}`, { method: 'POST' });
  const data = await res.json();
  // Update local state with new vote count
};
```

### 4. **Stats Section** (in FeatureVoting)
**Current State:**
- Hardcoded values (1.2M, 47, 8.4K, 245)

**What needs to be connected:**
```javascript
// Fetch from /api/stats
const [stats, setStats] = useState(null);
useEffect(() => {
  fetch('/api/stats')
    .then(res => res.json())
    .then(data => setStats(data));
}, []);
```

## New Features to Add

### 1. **GitHub Integration**
```javascript
// Add to CTA buttons
const starOnGitHub = () => {
  window.open('https://github.com/opsflowsh/agentfleet', '_blank');
};

// Show live star count from /api/stats
<button>⭐ Star on GitHub ({stats?.githubStars || 0} stars)</button>
```

### 2. **Add Gojo to the Fleet**
```javascript
// In agents array
{
  id: 13,
  x: 50,
  y: 50,
  emoji: "👨‍💻",
  name: "Gojo",
  task: "Approving features & managing fleet",
  angle: 0,
  isHuman: true
}
```

### 3. **Feature Submission**
```javascript
// Wire "Suggest Feature" button
const suggestFeature = () => {
  window.open('https://github.com/opsflowsh/agentfleet/issues/new?template=feature_request.md', '_blank');
};
```

### 4. **WebSocket for Real-time Updates** (Optional Enhancement)
```javascript
// For truly live updates
import { io } from 'socket.io-client';

const socket = io('/');
socket.on('activity', (newActivity) => {
  // Add to top of activity feed
});
socket.on('agent-update', (agent) => {
  // Update agent status/position
});
```

## API Endpoints Summary

All endpoints are ready at the base URL:

- `GET /api/stats` - Returns totalVotes, featuresShipped, communityMembers, avgVoteCount, githubStars
- `GET /api/agents` - Returns array of 12 agents with status/tasks
- `GET /api/activity` - Returns recent activities array
- `GET /api/features` - Returns features array with pipeline counts
- `POST /api/vote/:id` - Vote on a feature
- `GET /api/trending` - Returns trending topics array
- `GET /api/live` - Returns latest updates for polling

## Quick Implementation Steps

1. **Import useEffect and useState** where needed
2. **Replace static data with API calls**
3. **Add polling intervals for live updates**
4. **Wire button actions** (vote, star, suggest)
5. **Add Gojo to the agent list**
6. **Test all endpoints**

## Custom Animations Already in Place

The UI uses these Tailwind animations:
- `animate-float` - For background blobs
- `animate-slide-up` - For cards appearing
- `animate-bounce` - For Lobsterians
- `animate-pulse` - For status indicators

## Deployment Ready

Once wired:
1. `pnpm build`
2. Deploy to Vercel
3. Point agentfleet.sh domain
4. Launch! 🚀

## Summary for Builder.io

**Please update these components:**
1. Replace all static data with `fetch()` calls to our API
2. Add 7 more Lobsterians + Gojo (human) to BuildRoom
3. Wire the vote buttons to POST endpoint
4. Add GitHub star button that opens repo
5. Add polling for live updates (30s interval)

The backend is 100% ready with all data. Just needs to be connected! 🦞✨