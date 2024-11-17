#!/bin/bash

# Exit on error
set -e

BACKUP_DIR="/var/backups/teyaba"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Backup database (if using local PostgreSQL)
echo "📦 Backing up database..."
pg_dump teyaba > $BACKUP_DIR/db_backup_$DATE.sql

# Backup frontend files
echo "📦 Backing up frontend files..."
tar -czf $BACKUP_DIR/frontend_$DATE.tar.gz /var/www/html/teyaba

# Backup environment files
echo "📦 Backing up environment files..."
cp .env.production $BACKUP_DIR/env_backup_$DATE

# Cleanup old backups (keep last 7 days)
find $BACKUP_DIR -type f -mtime +7 -delete

echo "✅ Backup completed successfully!"