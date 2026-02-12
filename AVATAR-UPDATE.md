# Custom Avatar Integration for Gourav J. Shah

## Steps to add the custom avatar:

### 1. Save the avatar image
Save your avatar image as: `public/avatars/gourav.jpg`

### 2. Update BuildRoom.tsx to support custom avatars

In `client/components/BuildRoom.tsx`, update the agent display section:

```jsx
// Replace the emoji display:
<div className="text-5xl animate-bounce" style={{ animationDelay: `${agent.id * 0.1}s` }}>
  {agent.emoji}
</div>

// With this code that supports both emoji and avatar:
<div className="animate-bounce" style={{ animationDelay: `${agent.id * 0.1}s` }}>
  {agent.avatar ? (
    <img 
      src={agent.avatar} 
      alt={agent.name}
      className="w-14 h-14 rounded-full border-3 border-white shadow-lg object-cover"
    />
  ) : (
    <div className="text-5xl">{agent.emoji}</div>
  )}
</div>
```

### 3. Update the Agent interface in BuildRoom.tsx

Add the avatar field to the Agent interface:

```typescript
interface Agent {
  id: number;
  x: number;
  y: number;
  emoji: string;
  name: string;
  task: string;
  angle: number;
  avatar?: string;  // Add this line
}
```

### 4. Update ActivityFeed.tsx for consistency

In the activity feed, you could also show the avatar for Gourav:

```jsx
// In the author display section
<h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors flex items-center gap-2">
  {activity.author === "Gourav J. Shah 👨‍💻" && (
    <img src="/avatars/gourav.jpg" alt="Gourav" className="w-6 h-6 rounded-full" />
  )}
  {activity.author}
</h3>
```

## Result

This will display:
- Your custom avatar in the BuildRoom instead of the 👨‍💻 emoji
- A professional, rounded avatar with border and shadow
- Consistent sizing with other agents
- Optional: Avatar in activity feed too

The backend already returns `avatar: '/avatars/gourav.jpg'` for agent ID 13!