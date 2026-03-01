#!/bin/bash
# Quick setup script for the blog

echo "🌱 Setting up your blog..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Initialize git if not already done
if [ ! -d ".git" ]; then
  echo "Initializing git repository..."
  git init
  git branch -M main
  git add .
  git commit -m "Initial commit: minimal blog setup"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Create a GitHub repo named 'usualblog'"
echo "2. Run: git remote add origin https://github.com/yourusername/usualblog.git"
echo "3. Run: git push -u origin main"
echo "4. Enable GitHub Pages in repo settings (Actions → Deploy to GitHub Pages)"
echo "5. Sign up at https://plausible.io and add your domain: usualblog.github.io"
echo "6. Update plausibleDomain in quartz.config.ts if needed"
echo ""
echo "For local preview: npx quartz build --serve"
