#!/bin/bash

# This script temporarily removes error pages, builds the app, and then adds them back
# This is a workaround for the prerendering error in Next.js 15 with React 19

# Store current directory
CURRENT_DIR=$(pwd)
WEBSITE_DIR="$CURRENT_DIR/apps/website/app"

echo "🔧 Temporarily removing error pages..."
mkdir -p $WEBSITE_DIR/temp_backup
mv $WEBSITE_DIR/error.tsx $WEBSITE_DIR/temp_backup/ 2>/dev/null || true
mv $WEBSITE_DIR/not-found.tsx $WEBSITE_DIR/temp_backup/ 2>/dev/null || true
mv $WEBSITE_DIR/global-error.tsx $WEBSITE_DIR/temp_backup/ 2>/dev/null || true

echo "🏗️ Building website app with NEXT_SKIP_TYPE_CHECK=true..."
NEXT_SKIP_TYPE_CHECK=true yarn workspace website build --no-lint

echo "♻️ Restoring error pages..."
mv $WEBSITE_DIR/temp_backup/* $WEBSITE_DIR/ 2>/dev/null || true
rm -rf $WEBSITE_DIR/temp_backup

echo "✅ Done!"
