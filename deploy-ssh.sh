#!/bin/bash

# SSH Deployment Script for Open Bed
# Run this from your local machine that has SSH access to Hostinger

set -e

echo "🚀 SSH Deployment Script"
echo "========================"
echo ""

# Verify build exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist/ folder not found. Building now..."
    npm run build
fi

# Server details
HOST="mediumturquoise-buffalo-583035.hostingersite.com"
USER="u167611500"
PORT="65002"
PASSWORD="Centriweb2024!"
REMOTE_DIR="~/domains/mediumturquoise-buffalo-583035.hostingersite.com/public_html"

echo "📋 Server Details:"
echo "   Host: $HOST"
echo "   Port: $PORT"
echo "   User: $USER"
echo "   Remote: $REMOTE_DIR"
echo ""

# Test connection
echo "🔌 Testing SSH connection..."
if sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 -p $PORT $USER@$HOST "echo 'Connection successful'" 2>/dev/null; then
    echo "✅ Connection successful!"
else
    echo "❌ Connection failed. Please check:"
    echo "   1. You're on a network that allows SSH (port 65002)"
    echo "   2. SSH credentials are correct"
    echo "   3. Server is accessible"
    exit 1
fi

echo ""
echo "🗑️  Cleaning old files on server..."
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no -p $PORT $USER@$HOST "rm -rf $REMOTE_DIR/* $REMOTE_DIR/.* 2>/dev/null || true"
echo "✅ Old files removed"

echo ""
echo "📤 Uploading new build..."
sshpass -p "$PASSWORD" rsync -avz --delete --progress \
  -e "ssh -o StrictHostKeyChecking=no -p $PORT" \
  dist/ \
  $USER@$HOST:$REMOTE_DIR/

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Your site should be live at: http://$HOST"
echo ""
echo "💡 Next steps:"
echo "   1. Wait 1-2 minutes for changes to propagate"
echo "   2. Clear browser cache (Ctrl+Shift+R)"
echo "   3. Visit: http://$HOST"
echo "   4. The TERRACOTTA_BG error should be fixed!"
