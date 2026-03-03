# Deployment Guide for Open Bed Website

## Option 1: Automated Deployment (if SSH is accessible)

Run the deployment script:
```bash
./deploy.sh
```

## Option 2: Manual FTP/SFTP Upload

### Using FileZilla or similar FTP client:

1. **Connection Details:**
   - Host: `mediumturquoise-buffalo-583035.hostingersite.com`
   - Port: `65002` (for SFTP) or `21` (for FTP)
   - Username: `u167611500`
   - Password: `Centriweb2024!`
   - Protocol: SFTP (recommended) or FTP

2. **Upload Steps:**
   - Connect to the server
   - Navigate to `public_html` or `www` directory (this is typically the web root)
   - Upload ALL contents from the `dist/` folder:
     - `index.html`
     - `assets/` folder (with all its contents)
   - Ensure file permissions are set correctly (644 for files, 755 for directories)

### Using Command Line SFTP:

```bash
sftp -P 65002 u167611500@mediumturquoise-buffalo-583035.hostingersite.com
# Enter password when prompted: Centriweb2024!
cd public_html
put -r dist/*
exit
```

## Option 3: Using the ZIP File

1. Extract `open-bed-deploy.zip` on your local machine
2. Upload the contents (index.html and assets folder) to `public_html` via FTP/SFTP

## Option 4: cPanel File Manager

1. Log into cPanel
2. Navigate to File Manager
3. Go to `public_html` directory
4. Upload the contents of the `dist/` folder
5. Extract if uploaded as ZIP

## Post-Deployment Checklist

- [ ] Verify `index.html` is in the web root (`public_html` or `www`)
- [ ] Verify `assets/` folder is uploaded with all files
- [ ] Check file permissions (644 for files, 755 for directories)
- [ ] Test the website URL
- [ ] Verify all images and fonts load correctly
- [ ] Test the form submission
- [ ] Check mobile responsiveness

## Troubleshooting

### If files don't appear:
- Check file permissions (should be 644 for files, 755 for directories)
- Ensure files are in the correct directory (`public_html` or `www`)
- Clear browser cache

### If styles don't load:
- Check that the `assets/` folder is uploaded correctly
- Verify file paths in browser console (F12)
- Ensure `.htaccess` allows access to assets (if applicable)

### If SSH connection fails:
- Verify you're on a network that allows SSH connections
- Check if VPN is required
- Use FTP/SFTP instead

## Server Information

- **Host:** mediumturquoise-buffalo-583035.hostingersite.com
- **SSH Port:** 65002
- **Username:** u167611500
- **Password:** Centriweb2024!
- **Web Root:** Typically `~/public_html` or `~/www`
