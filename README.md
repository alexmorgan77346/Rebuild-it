# 💪 Physique Program — PWA

> Train · Transform · Transcend  
> A fully offline-capable Progressive Web App for Gym, Look Maxing & Meditation.

---

## 📁 Files in this folder

```
physique-pwa/
├── index.html       ← Main app (all content + logic)
├── manifest.json    ← PWA identity (name, icons, theme)
├── sw.js            ← Service Worker (offline caching)
├── icons/
│   ├── icon-192.png ← App icon (home screen)
│   └── icon-512.png ← App icon (splash screen)
└── README.md        ← This file
```

---

## 🚀 Deploy to GitHub Pages (5 steps)

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in
2. Click **"New repository"** (top right `+` button)
3. Name it: `physique-program` (or anything you like)
4. Set to **Public**
5. Click **"Create repository"**

### Step 2 — Upload the files
**Option A — Drag & Drop (easiest):**
1. Open your new repository
2. Click **"uploading an existing file"**
3. Drag ALL files AND the `icons/` folder into the upload box
4. Click **"Commit changes"**

**Option B — Git CLI:**
```bash
git init
git add .
git commit -m "Initial PWA deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/physique-program.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repository → **Settings** tab
2. Scroll to **"Pages"** in the left sidebar
3. Under **Source**, select **"Deploy from a branch"**
4. Branch: **main** / Folder: **/ (root)**
5. Click **Save**

### Step 4 — Get your live URL
- GitHub will show: `https://YOUR_USERNAME.github.io/physique-program/`
- Wait ~60 seconds for first deploy (refresh the Pages settings page)

### Step 5 — Install as PWA
**On Android (Chrome):**
- Open your URL in Chrome
- Tap the **3-dot menu** → "Add to Home screen"
- OR tap the **Install** banner at the bottom of the app

**On iPhone (Safari):**
- Open your URL in Safari
- Tap the **Share button** (box with arrow)
- Scroll down → **"Add to Home Screen"**
- Tap **Add**

**On Desktop (Chrome/Edge):**
- Click the **install icon** in the address bar (right side)
- Or use the banner inside the app

---

## ✅ PWA Features included

| Feature | Status |
|---|---|
| Installable (Add to Home Screen) | ✅ |
| Offline mode (Service Worker) | ✅ |
| Offline indicator toast | ✅ |
| Custom app icon | ✅ |
| Splash screen color | ✅ |
| iOS Safari compatible | ✅ |
| Android Chrome compatible | ✅ |
| Safe area support (notch phones) | ✅ |
| Responsive (mobile/tablet/desktop) | ✅ |
| Landscape mode support | ✅ |

---

## 🔄 Updating the app

1. Edit `index.html` locally
2. In `sw.js`, change `'physique-v1'` to `'physique-v2'` (increment on each update)
3. Push to GitHub — GitHub Pages auto-deploys within ~30s

---

## 🛠 Troubleshooting

**PWA install button not showing?**  
→ Must be served over HTTPS (GitHub Pages provides this automatically)  
→ Must have a valid `manifest.json` and registered service worker

**App not updating after changes?**  
→ Increment the cache version in `sw.js`: `const CACHE = 'physique-v2'`

**Icons not showing?**  
→ Make sure `icons/icon-192.png` and `icons/icon-512.png` are uploaded alongside `index.html`

---

Made with 🔥 — your personal physique companion
