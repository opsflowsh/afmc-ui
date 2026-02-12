# Quick Update for Builder.io

## Make Gourav J. Shah's name clickable to LinkedIn

In `client/components/BuildRoom.tsx`, update the tooltip to make the human manager's name clickable:

```jsx
// In the Task bubble section, replace:
<div className="font-bold text-orange-600">{agent.name}</div>

// With:
<div className="font-bold text-orange-600">
  {agent.id === 13 ? (
    <a 
      href="https://www.linkedin.com/in/gouravshah/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:underline"
      onClick={(e) => e.stopPropagation()}
    >
      {agent.name}
    </a>
  ) : (
    agent.name
  )}
</div>
```

Also update the description text:
```jsx
// Change from:
12 happy lobsterians + 1 human manager (Gojo) working together

// To:
12 happy lobsterians + 1 human manager (Gourav J. Shah) working together
```

This will make Gourav J. Shah's name clickable in the hover tooltip, linking to his LinkedIn profile.