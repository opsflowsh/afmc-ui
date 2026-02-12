# 🚀 Deploy Current Site (Port 8080) to Vercel

## Step 1: Build the Project

```bash
cd /Users/xopsbot/.openclaw/workspace/afmc-ui-builder

# Stop the dev server (Ctrl+C if running)

# Build for production
pnpm build:client
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Deploy
vercel --prod

# When prompted:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? agentfleet-ui
# - In which directory is your code? . (current)
# - Want to modify settings? N
```

### Option B: Using Git + Vercel Dashboard

1. **Push to GitHub:**
```bash
cd /Users/xopsbot/.openclaw/workspace/afmc-ui-builder
git add .
git commit -m "feat: Add all viral features - ready for launch!"
git push origin main
```

2. **Connect in Vercel:**
- Go to https://vercel.com
- Click "New Project"
- Import from GitHub: `opsflowsh/afmc-ui`
- Deploy

## Step 3: Configure Domain

After deployment, Vercel will give you a URL like:
- `agentfleet-ui.vercel.app`

To use custom domain:
1. In Vercel Dashboard → Settings → Domains
2. Add `agentfleet.sh`
3. Update DNS records

## What Gets Deployed

✅ **Frontend:**
- All viral components (counters, chat, badges, etc.)
- Responsive design
- All animations working

✅ **Backend API:**
- `/api/stats` - Live statistics
- `/api/agents` - Agent list with Gourav
- `/api/activity` - Activity feed
- `/api/agent-chat` - Agent conversations
- `/api/features` - Feature voting
- `/api/vote/:id` - Vote endpoint

✅ **Static Assets:**
- `/avatars/gourav.jpg` - Your avatar
- All styles and scripts

## Test After Deployment

1. Visit your Vercel URL
2. Check all features:
   - Live code counter incrementing
   - Agent chat updating
   - Share button working
   - Star button showing GitHub count
   - All animations smooth

## Environment Variables (Optional)

If you need to add any secrets later:
- Vercel Dashboard → Settings → Environment Variables
- Add any API keys or secrets

## Quick Command Summary

```bash
# From the project directory
cd /Users/xopsbot/.openclaw/workspace/afmc-ui-builder

# Build
pnpm build:client

# Deploy
vercel --prod

# Done! 🎉
```

Your site will be live in about 60 seconds!