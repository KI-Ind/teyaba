#!/bin/bash

# Exit on error
set -e

echo "🛠️ Setting up PostgreSQL database..."

# Load environment variables
source backend/.env

# Connect to PostgreSQL and create database and user
sudo -u postgres psql << EOF
-- Create user
CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';

-- Create database
CREATE DATABASE $DB_NAME;

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;
EOF

echo "✅ Database setup completed!"