# Replace Emoji with Gourav's Avatar - Implementation Guide

## Avatar is ready at: `/public/avatars/gourav.jpg`

### 1. Update BuildRoom.tsx

**Find this section (around line 240):**
```jsx
<div className="text-5xl animate-bounce" style={{ animationDelay: `${agent.id * 0.1}s` }}>
  {agent.emoji}
</div>
```

**Replace with:**
```jsx
<div className="animate-bounce" style={{ animationDelay: `${agent.id * 0.1}s` }}>
  {agent.id === 13 ? (
    <img 
      src="/avatars/gourav.jpg" 
      alt="Gourav J. Shah"
      className="w-14 h-14 rounded-full border-3 border-white shadow-lg object-cover hover:scale-110 transition-transform"
    />
  ) : (
    <div className="text-5xl">{agent.emoji}</div>
  )}
</div>
```

### 2. Update ActivityFeed.tsx (optional but recommended)

**In the author section, replace:**
```jsx
<h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
  {activity.author}
</h3>
```

**With:**
```jsx
<h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors flex items-center gap-2">
  {activity.author === "Gourav J. Shah 👨‍💻" ? (
    <>
      <img 
        src="/avatars/gourav.jpg" 
        alt="Gourav J. Shah" 
        className="w-6 h-6 rounded-full border border-gray-200"
      />
      <span>Gourav J. Shah</span>
    </>
  ) : (
    activity.author
  )}
</h3>
```

### 3. Remove the 👨‍💻 emoji from display

Since we're using the avatar, we should clean up the emoji from the activity author names. The backend can keep sending it, but the frontend will strip it when displaying with the avatar.

## Result

This will show:
- Your professional avatar in the BuildRoom (14x14 size, rounded)
- Your avatar in activity feed items (6x6 size)
- Hover effects for interactivity
- Clean, professional look replacing the emoji

The avatar file is already in place and ready to use!