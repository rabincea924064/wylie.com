#!/bin/bash

# ==============================================================================
# WYLIE MECHANICAL — CI/CD DEPLOYMENT SCRIPT
# This script handles multi-step S3 sync with explicit Content-Types and caching.
# ==============================================================================

# 1. Configuration
BUCKET_NAME="your-s3-bucket-name"
DISTRIBUTION_ID="your-cloudfront-distribution-id"
BUILD_DIR="out"
SITE_URL="https://www.wyliemechanical.com"

echo "🚀 Starting Deployment for Wylie Mechanical..."

# 2. Build the project
echo "📦 Building project..."
npm run build

if [ ! -d "$BUILD_DIR" ]; then
  echo "❌ Error: Build directory '$BUILD_DIR' not found."
  exit 1
fi

# 3. Phase 1: Sync to remove stale files
echo "🔄 Syncing and deleting stale files..."
aws s3 sync $BUILD_DIR s3://$BUCKET_NAME/ --delete

# 4. Phase 2: Upload with explicit Content-Types and Cache-Control
echo "✨ Setting Content-Types and Caching Strategies..."

# --- 4a. HTML & XML (ALWAYS FRESH) ---
echo "📄 Processing HTML and XML..."
aws s3 cp $BUILD_DIR s3://$BUCKET_NAME/ --recursive \
  --exclude "*" \
  --include "*.html" \
  --include "*.xml" \
  --content-type "text/html" \
  --cache-control "max-age=0, must-revalidate" --metadata-directive REPLACE

# --- 4b. CSS ---
echo "🎨 Processing CSS..."
aws s3 cp $BUILD_DIR s3://$BUCKET_NAME/ --recursive \
  --exclude "*" \
  --include "*.css" \
  --content-type "text/css" \
  --cache-control "max-age=31536000, immutable" --metadata-directive REPLACE

# --- 4c. JavaScript ---
echo "📜 Processing JavaScript..."
aws s3 cp $BUILD_DIR s3://$BUCKET_NAME/ --recursive \
  --exclude "*" \
  --include "*.js" \
  --content-type "application/javascript" \
  --cache-control "max-age=31536000, immutable" --metadata-directive REPLACE

# --- 4d. WebP Images ---
echo "🖼️ Processing WebP Images..."
aws s3 cp $BUILD_DIR s3://$BUCKET_NAME/ --recursive \
  --exclude "*" \
  --include "*.webp" \
  --content-type "image/webp" \
  --cache-control "max-age=31536000, immutable" --metadata-directive REPLACE

# --- 4e. Other Images ---
echo "📸 Processing Other Assets (Images, Icons)..."
aws s3 cp $BUILD_DIR s3://$BUCKET_NAME/ --recursive \
  --exclude "*" \
  --include "*.png" --content-type "image/png" \
  --include "*.jpg" --include "*.jpeg" --content-type "image/jpeg" \
  --include "*.svg" --content-type "image/svg+xml" \
  --include "*.ico" --content-type "image/x-icon" \
  --cache-control "max-age=31536000, immutable" --metadata-directive REPLACE

# --- 4f. Fonts ---
echo "🔤 Processing Fonts..."
aws s3 cp $BUILD_DIR s3://$BUCKET_NAME/ --recursive \
  --exclude "*" \
  --include "*.woff" --include "*.woff2" \
  --content-type "font/woff2" \
  --cache-control "max-age=31536000, immutable" --metadata-directive REPLACE

# 5. Invalidate CloudFront Cache
echo "☁️ Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

# 6. Verification
echo "🔍 Verifying Deployment..."
echo "--------------------------------------------------"
echo "Checking Homepage (HTML):"
curl -I -s $SITE_URL | grep -E "Content-Type|Cache-Control"

echo "Checking Asset (e.g., logo.webp):"
curl -I -s $SITE_URL/images/wylie-logo.webp | grep -E "Content-Type|Cache-Control"

# Check for octet-stream failure
OCTET_CHECK=$(curl -I -s $SITE_URL/images/wylie-logo.webp | grep "application/octet-stream")
if [ -n "$OCTET_CHECK" ]; then
  echo "⚠️ WARNING: octet-stream detected! Content-Type was not set correctly."
else
  echo "✅ Content-Types verified successfully."
fi

echo "🎉 Deployment Complete!"
