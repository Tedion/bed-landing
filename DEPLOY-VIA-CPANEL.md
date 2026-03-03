# 🚀 Deploy via Hostinger cPanel (SSH Not Available)

Since SSH connection is blocked, use Hostinger's cPanel File Manager instead.

## Step-by-Step Instructions

### 1. Login to Hostinger
- Go to: https://hpanel.hostinger.com
- Login with your Hostinger account credentials

### 2. Open File Manager
- Find your domain: `mediumturquoise-buffalo-583035.hostingersite.com`
- Click **"File Manager"** or **"Manage"** → **"File Manager"**

### 3. Navigate to Web Root
- In File Manager, navigate to:
  ```
  domains/mediumturquoise-buffalo-583035.hostingersite.com/public_html/
  ```
- Or look for `public_html` folder

### 4. Delete OLD Files (IMPORTANT!)
- Select ALL files and folders in `public_html`
- Click **"Delete"** button (or right-click → Delete)
- Confirm deletion
- ⚠️ **This removes the broken old build**

### 5. Upload NEW Build

**Option A: Upload ZIP file (Easiest)**
1. Click **"Upload"** button in File Manager
2. Upload: `/home/teddy/Open-Bed-1/open-bed-fixed-build.zip`
3. Wait for upload to complete
4. Right-click the ZIP file → **"Extract"** or **"Extract Here"**
5. Delete the ZIP file after extraction

**Option B: Upload folder contents**
1. Click **"Upload"** button
2. Upload these files/folders from `/home/teddy/Open-Bed-1/dist/`:
   - `index.html`
   - `.htaccess`
   - `assets/` folder (upload entire folder with all contents)

### 6. Verify Files
Check that these exist in `public_html`:
- ✅ `index.html`
- ✅ `.htaccess`
- ✅ `assets/` folder (with ~86 files inside)

### 7. Test Your Site
1. Visit: http://mediumturquoise-buffalo-583035.hostingersite.com
2. Press **Ctrl+Shift+R** (hard refresh to clear cache)
3. The `TERRACOTTA_BG` error should be **GONE**! ✅

## Alternative: Use SFTP Client (FileZilla)

If cPanel doesn't work, try FileZilla:

1. **Download FileZilla**: https://filezilla-project.org/
2. **Connect**:
   - Host: `mediumturquoise-buffalo-583035.hostingersite.com`
   - Port: `65002`
   - Protocol: **SFTP**
   - Username: `u167611500`
   - Password: `Centriweb2024!`
3. **Navigate** to: `domains/.../public_html/`
4. **Delete** all old files
5. **Upload** all contents from `/home/teddy/Open-Bed-1/dist/`

## Troubleshooting

- **Still seeing error?** Clear browser cache completely (Ctrl+Shift+Delete)
- **Files not uploading?** Check file size limits in cPanel
- **Permission errors?** Set files to 644, folders to 755
