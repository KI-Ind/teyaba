#!/bin/bash

# Check API health
curl -f http://localhost:3000/api/health || echo "API is down!"

# Check PM2 processes
pm2 status

# Check disk space
df -h

# Check memory usage
free -h

# Check Nginx status
systemctl status nginx

# Check SSL certificate expiry
certbot certificates