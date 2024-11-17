#!/bin/bash

# Exit on error
set -e

echo "🛠️ Setting up server environment..."

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx

# Install certbot for SSL
sudo apt install -y certbot python3-certbot-nginx

# Create web directory
sudo mkdir -p /var/www/html/teyaba
sudo chown -R $USER:$USER /var/www/html/teyaba

# Install PostgreSQL (if using locally)
sudo apt install -y postgresql postgresql-contrib

# Setup PM2 startup script
pm2 startup

echo "✅ Server setup completed!"