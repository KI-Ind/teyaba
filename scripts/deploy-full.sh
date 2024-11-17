#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting full deployment process..."

# 1. Initial server setup
echo "🛠️ Setting up server environment..."
./scripts/setup-server.sh

# 2. Create project directories
echo "📁 Creating project directories..."
sudo mkdir -p /var/www/html/teyaba
sudo chown -R $USER:$USER /var/www/html/teyaba

# 3. Database setup
echo "🗄️ Setting up database..."
./scripts/init-db.sh

# 4. Frontend build and deployment
echo "🎨 Building and deploying frontend..."
cd frontend
npm install
npm run build
sudo cp -r dist/* /var/www/html/teyaba/

# 5. Backend build and deployment
echo "⚙️ Building and deploying backend..."
cd ../backend
npm install
npm run build

# 6. Setup PM2 for backend
echo "🔄 Configuring PM2..."
pm2 delete teyaba-api || true # Delete if exists
pm2 start ecosystem.config.js
pm2 save

# 7. Configure Nginx
echo "🌐 Setting up Nginx..."
sudo cp nginx/teyaba.conf /etc/nginx/sites-available/
sudo ln -sf /etc/nginx/sites-available/teyaba.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# 8. Setup SSL with Certbot
echo "🔒 Setting up SSL..."
sudo certbot --nginx -d teyaba.com -d www.teyaba.com --non-interactive --agree-tos --email contact@teyaba.com

echo "✅ Deployment completed successfully!"
echo "🌍 Your application is now available at https://teyaba.com"