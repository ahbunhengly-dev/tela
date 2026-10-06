# GiantAlliance website

Single-page, hash-routed static site ("Think Giant. Go Beyond."). Plain HTML/CSS/JS, no build step.

```
index.html     page markup
css/styles.css all styles
js/main.js     routing, portfolio data (BIZ), hub animation, EN/ខ្មែរ toggle
img/           logos and photos (extracted from the original single-file export)
```

## Run locally

    python3 -m http.server 8000   # then open http://localhost:8000

## Deploy

Import this folder as a Vercel project (Framework: Other, no build command, output `./`).
