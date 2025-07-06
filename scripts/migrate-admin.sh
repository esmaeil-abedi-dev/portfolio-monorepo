#!/bin/bash

# This script moves the existing admin project to the monorepo structure
# Usage: ./migrate-admin.sh

# Define paths
SOURCE_DIR="/Users/esmaeilabedi/Desktop/peronal/admin-esmaeilabedi"
TARGET_DIR="/Users/esmaeilabedi/Desktop/peronal/esmaeilabedi-monorepo/apps/admin"

# Create necessary directories
mkdir -p "$TARGET_DIR/app"
mkdir -p "$TARGET_DIR/components"
mkdir -p "$TARGET_DIR/lib"
mkdir -p "$TARGET_DIR/public"

# Copy Next.js app directory
echo "Copying app directory..."
cp -r "$SOURCE_DIR/app/"* "$TARGET_DIR/app/"

# Copy components (excluding those that should be moved to shared packages)
echo "Copying components..."
cp -r "$SOURCE_DIR/components/"* "$TARGET_DIR/components/"

# Copy utility functions
echo "Copying lib directory..."
cp -r "$SOURCE_DIR/lib/"* "$TARGET_DIR/lib/"

# Copy public assets
echo "Copying public directory..."
cp -r "$SOURCE_DIR/public/"* "$TARGET_DIR/public/"

# Copy config files
echo "Copying config files..."
cp "$SOURCE_DIR/next.config.js" "$TARGET_DIR/"
cp "$SOURCE_DIR/tailwind.config.ts" "$TARGET_DIR/"
cp "$SOURCE_DIR/postcss.config.js" "$TARGET_DIR/"
cp "$SOURCE_DIR/tsconfig.json" "$TARGET_DIR/"
cp "$SOURCE_DIR/.env" "$TARGET_DIR/" 2>/dev/null || echo "No .env file found to copy"
cp "$SOURCE_DIR/.env.local" "$TARGET_DIR/" 2>/dev/null || echo "No .env.local file found to copy"

echo "Done migrating admin project to monorepo structure!"
echo "You may now need to update imports to use shared packages."
