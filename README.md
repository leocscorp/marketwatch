# MarketWatch — Personal Stock Dashboard PWA

A mobile-first stock dashboard that installs as a home screen app and saves all your data locally on the device.

---

## Deploy to GitHub Pages (5 minutes)

### 1. Create a GitHub repository
- Go to github.com → **New repository**
- Name it `marketwatch` (or anything you like)
- Set it to **Public**
- Click **Create repository**

### 2. Upload the files
- Click **Add file → Upload files**
- Drag the entire contents of this folder (all files and the `icons/` folder)
- Commit with message: `Initial deploy`

### 3. Enable GitHub Pages
- Go to your repo → **Settings → Pages**
- Under **Source**, select `Deploy from a branch`
- Branch: `main`, folder: `/ (root)`
- Click **Save**
- Wait ~60 seconds, then your URL will be: `https://YOUR_USERNAME.github.io/marketwatch/`

---

## Install as a home screen app (PWA)

### iPhone (Safari)
1. Open `https://YOUR_USERNAME.github.io/marketwatch/` in **Safari**
2. Tap the **Share** button (box with arrow at bottom)
3. Tap **Add to Home Screen**
4. Tap **Add**

### Android (Chrome)
1. Open the URL in **Chrome**
2. Tap the **⋮ menu** → **Add to Home screen**
3. Tap **Add**

From now on, open it from the home screen icon — it runs like a native app.

---

## What gets saved (persists forever)
- **Watchlist** — your stocks, tap `+ Add` to add/remove
- **Portfolio holdings** — ticker, avg cost, current price, shares
- **Drawn chart lines** — support/resistance levels survive app close
- **Notes** — per-ticker research notes

All data is stored in the device's localStorage (~5MB limit, more than enough).

---

## Connecting the Python backend (optional)
Run `data_fetcher.py` on your computer and update the fetch URLs in `index.html` from mock data to `http://localhost:5000/api/...` for live prices.
