#!/bin/bash

echo "🚀 Deploying AgentFleet UI with Viral Features!"
echo ""

# Check if we have uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📦 Committing viral features..."
    git add .
    git commit -m "feat: Implement all viral features - 10/10 virality score!

- Live code counter with auto-increment
- One-click Twitter sharing
- Mind blown reactions counter
- FOMO timer with countdown
- Agent chat widget
- Verified live badges
- Achievement system
- Human story section
- Enhanced CTAs and copy
- Mobile optimized

Ready to go viral! 🦞🚀"
    
    echo ""
    echo "📤 Pushing to GitHub..."
    git push origin main
    echo "✅ Code pushed!"
else
    echo "✅ No changes to commit"
fi

echo ""
echo "🔨 Building for production..."
pnpm build:client

echo ""
echo "🚀 Deploying to Vercel..."
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🎉 Your viral AgentFleet UI is live!"
echo "📊 Check the Vercel URL and update DNS for agentfleet.sh"