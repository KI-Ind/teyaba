#!/bin/bash

# Load production environment variables
source .env.production

# Start the backend server using PM2
cd backend
pm2 start ecosystem.config.js

# Configure Nginx to serve the frontend
sudo systemctl reload nginx

echo "✅ Production servers started successfully!"