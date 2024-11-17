#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting frontend build process..."

# Install dependencies
npm install

# Build the application
npm run build

echo "✅ Frontend build completed successfully!"