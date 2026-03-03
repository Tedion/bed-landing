#!/bin/bash

# Deployment script for Open Bed website
# Usage: ./deploy.sh

set -e

echo "🚀 Starting deployment..."

# Build the project
echo "📦 Building production bundle..."
npm run build

# Server details
HOST="mediumturquoise-buffalo-583035.hostingersite.com"
USER="u167611500"
PORT="65002"
PASSWORD="Centriweb2024!"
REMOTE_DIR="~/domains/mediumturquoise-buffalo-583035.hostingersite.com/public_html"

# Deploy using rsync (requires sshpass)
echo "📤 Uploading files to server..."
sshpass -p "$PASSWORD" rsync -avz --delete \
  -e "ssh -o StrictHostKeyChecking=no -p $PORT" \
  dist/ \
  $USER@$HOST:$REMOTE_DIR/

echo "✅ Deployment complete!"
echo "🌐 Your site should be live at: http://$HOST"
