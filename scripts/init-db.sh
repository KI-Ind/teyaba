#!/bin/bash

# Exit on error
set -e

echo "🛠️ Initializing database..."

# Load environment variables
source backend/.env

# Create database tables
PGPASSWORD=$DB_PASSWORD psql -U $DB_USER -h $DB_HOST -p $DB_PORT $DB_NAME -f backend/src/database/migrations/001_initial_schema.sql

echo "✅ Database initialization completed!"