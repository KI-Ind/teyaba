#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Load environment variables
source .env.production

# Frontend deployment
echo "📦 Building frontend..."
cd frontend
npm install
npm run build
# Copy the built files to your web server directory
sudo cp -r dist/* /var/www/html/teyaba/

# Backend deployment
echo "🔧 Building backend..."
cd ../backend
npm install
npm run build

# Start/Restart backend services with PM2
echo "🚀 Starting backend services..."
pm2 delete teyaba-api || true # Delete if exists
pm2 start ecosystem.config.js

# Nginx configuration update
echo "🔄 Updating Nginx configuration..."
sudo cp ../nginx/teyaba.conf /etc/nginx/sites-available/
sudo ln -sf /etc/nginx/sites-available/teyaba.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

echo "✅ Deployment completed successfully!"