# Sagar Mahto — Portfolio

A dark, animated developer portfolio. Pure HTML/CSS/JS — no build step, no
npm install. Open `index.html` and it just works.

## What's inside
```
portfolio/
├── index.html      → all the content lives here
├── css/style.css    → theme, layout, animations
├── js/script.js     → cursor, scroll progress, mobile menu, scroll reveals
├── assets/profile.jpg → your photo (hero + about section)
└── README.md
```

## Already filled in
- Name: Sagar Mahto
- Email: shinobuannie3@gmail.com (primary), usnitin7@gmail.com (secondary)
- LinkedIn: linkedin.com/in/sagar-mahto-818659390
- Instagram: instagram.com/offx.sagar
- Photo: `assets/profile.jpg` — used in the hero visual and the About section

## Still to personalize
Open `index.html` and update:
- The 4 project blocks (title, one-line description, tags, and the `href="#"`
  on each `View project ↗` link — point these at your live demos or repos)
- The "About me" paragraphs and stats — currently placeholder text
- The **GitHub** link in the contact section (currently `#` — add yours)
- The skills list in the marquee section, if you want to change it

Colors and fonts live at the top of `css/style.css` under `:root` if you
want to change the palette (currently near-black + lime/coral accents).

## Preview locally
Just double-click `index.html`, or for a local server:
```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Push to GitHub
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy with GitHub Pages
1. On GitHub, go to your repo → **Settings → Pages**
2. Under "Build and deployment", set **Source** to `Deploy from a branch`
3. Branch: `main`, folder: `/ (root)` → **Save**
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/`
   after a minute or two.

If you name the repo `<your-username>.github.io`, it'll be served at the
root of that URL instead (no `/repo-name/` in the path).

## Notes
- Animations use GSAP + ScrollTrigger loaded from a CDN — needs an internet
  connection to animate; the page still works without it (content just
  appears without the scroll-reveal effect).
- Respects `prefers-reduced-motion`.
- Custom cursor is disabled automatically on touch devices.
