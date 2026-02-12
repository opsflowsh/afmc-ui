#!/bin/bash

echo "🚀 Deploying to Vercel..."
echo ""

# Build
echo "🔨 Building production version..."
pnpm build:client

echo ""
echo "📤 Deploying..."
echo ""

# Deploy to Vercel
vercel --prod

echo ""
echo "✅ Done! Your site is live on Vercel!"