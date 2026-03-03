#!/bin/bash

# Manual deployment script - run this from your local machine
# This script will upload the fixed build to Hostinger

set -e

echo "🚀 Manual Deployment Script"
echo "=========================="
echo ""

# Verify build exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist/ folder not found. Run 'npm run build' first."
    exit 1
fi

# Server details
HOST="mediumturquoise-buffalo-583035.hostingersite.com"
USER="u167611500"
PORT="65002"
PASSWORD="Centriweb2024!"
REMOTE_DIR="~/domains/mediumturquoise-buffalo-583035.hostingersite.com/public_html"

echo "📦 Uploading files to server..."
echo "Host: $HOST"
echo "Remote: $REMOTE_DIR"
echo ""

# Deploy using rsync
sshpass -p "$PASSWORD" rsync -avz --delete \
  -e "ssh -o StrictHostKeyChecking=no -p $PORT" \
  dist/ \
  $USER@$HOST:$REMOTE_DIR/

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site should be live at: http://$HOST"
echo ""
echo "💡 If you still see errors, try:"
echo "   1. Clear your browser cache (Ctrl+Shift+R)"
echo "   2. Wait 1-2 minutes for DNS/propagation"
echo "   3. Check browser console (F12) for any errors"
