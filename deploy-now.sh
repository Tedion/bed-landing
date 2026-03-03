#!/bin/bash

# Complete SSH Deployment Script
# Run this from your local machine: ./deploy-now.sh

set -e

echo "═══════════════════════════════════════════════════════════"
echo "  🚀 Open Bed - SSH Deployment"
echo "═══════════════════════════════════════════════════════════"
echo ""

# Server details
HOST="mediumturquoise-buffalo-583035.hostingersite.com"
USER="u167611500"
PORT="65002"
PASSWORD="Centriweb2024!"
REMOTE_DIR="~/domains/mediumturquoise-buffalo-583035.hostingersite.com/public_html"

# Verify build exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist/ folder not found!"
    echo "   Building now..."
    npm run build
fi

echo "📋 Deployment Details:"
echo "   Host: $HOST"
echo "   Port: $PORT"
echo "   User: $USER"
echo "   Remote: $REMOTE_DIR"
echo ""

# Test connection
echo "🔌 Step 1: Testing SSH connection..."
if sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 -p $PORT $USER@$HOST "echo '✅ Connected successfully'" 2>/dev/null; then
    echo "✅ Connection successful!"
else
    echo "❌ Connection failed!"
    echo ""
    echo "Possible issues:"
    echo "  1. Network firewall blocking port 65002"
    echo "  2. VPN required"
    echo "  3. Server temporarily unavailable"
    echo ""
    echo "💡 Alternative: Use Hostinger cPanel File Manager"
    echo "   See: DEPLOY-VIA-CPANEL.md"
    exit 1
fi

echo ""
echo "🗑️  Step 2: Cleaning old files on server..."
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no -p $PORT $USER@$HOST "
    cd $REMOTE_DIR 2>/dev/null || mkdir -p $REMOTE_DIR
    rm -rf $REMOTE_DIR/* $REMOTE_DIR/.[^.]* 2>/dev/null || true
    echo '✅ Old files removed'
"

echo ""
echo "📤 Step 3: Uploading new build..."
echo "   This may take a few minutes..."
echo ""

sshpass -p "$PASSWORD" rsync -avz --delete --progress \
  -e "ssh -o StrictHostKeyChecking=no -p $PORT" \
  dist/ \
  $USER@$HOST:$REMOTE_DIR/

echo ""
echo "✅ Step 4: Verifying upload..."
FILE_COUNT=$(sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no -p $PORT $USER@$HOST "find $REMOTE_DIR -type f | wc -l" 2>/dev/null)
echo "   Files uploaded: $FILE_COUNT"

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "  ✅ DEPLOYMENT COMPLETE!"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "🌐 Your site: http://$HOST"
echo ""
echo "💡 Next steps:"
echo "   1. Wait 1-2 minutes for changes to propagate"
echo "   2. Clear browser cache (Ctrl+Shift+R)"
echo "   3. Visit: http://$HOST"
echo "   4. The TERRACOTTA_BG error should be FIXED! ✅"
echo ""
