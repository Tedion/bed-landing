# 🚀 Step-by-Step Deployment Guide

Let's deploy together! Follow these steps:

## Step 1: Open Hostinger cPanel
1. Go to: **https://hpanel.hostinger.com**
2. Login with your Hostinger credentials
3. Find your domain: `mediumturquoise-buffalo-583035.hostingersite.com`
4. Click **"Manage"** or look for **"File Manager"**

## Step 2: Navigate to Web Root
In File Manager:
- Look for folder: `domains`
- Open: `mediumturquoise-buffalo-583035.hostingersite.com`
- Open: `public_html`
- **You should now be in:** `public_html/` folder

## Step 3: Delete Old Files
**⚠️ IMPORTANT: Delete old files first!**
1. In `public_html`, select **ALL** files and folders
2. Click **"Delete"** button (or right-click → Delete)
3. Confirm deletion
4. This removes the broken old build

## Step 4: Upload New Build

### Option A: Upload ZIP (Recommended - Easier)
1. Click **"Upload"** button at the top
2. Click **"Select Files"** or drag and drop
3. Navigate to: `/home/teddy/Open-Bed-1/`
4. Select: `open-bed-fixed-build.zip` (11MB)
5. Click **"Upload"** and wait for completion
6. After upload, **right-click** on `open-bed-fixed-build.zip`
7. Select **"Extract"** or **"Extract Here"**
8. Wait for extraction
9. **Delete** the ZIP file after extraction (keep only extracted files)

### Option B: Upload Folder Contents
1. Click **"Upload"** button
2. Navigate to: `/home/teddy/Open-Bed-1/dist/`
3. Select **ALL** files:
   - `index.html`
   - `.htaccess`
   - `assets/` folder (entire folder)
4. Upload all files
5. Make sure `assets/` folder is uploaded with all its contents (~86 files)

## Step 5: Verify Upload
Check that these exist in `public_html`:
- ✅ `index.html` (should be there)
- ✅ `.htaccess` (hidden file, make sure it's uploaded)
- ✅ `assets/` folder (click to verify it has ~86 files inside)

## Step 6: Test Your Site
1. Open a new browser tab
2. Go to: **http://mediumturquoise-buffalo-583035.hostingersite.com**
3. Press **Ctrl+Shift+R** (Windows/Linux) or **Cmd+Shift+R** (Mac) to hard refresh
4. The `TERRACOTTA_BG` error should be **GONE**! ✅

## Troubleshooting

**Still seeing error?**
- Clear browser cache completely: Ctrl+Shift+Delete → Clear all
- Try incognito/private browsing mode
- Wait 2-3 minutes for changes to propagate
- Check browser console (F12) for any new errors

**Files not uploading?**
- Check file size limits in cPanel
- Try uploading files one by one
- Use SFTP client (FileZilla) instead

**Need help?**
- Check that you're in the correct `public_html` folder
- Verify file permissions (should be 644 for files, 755 for folders)
