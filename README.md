# Exploring Digital — Website

Static marketing site (HTML/CSS/JS, no build step) for Exploring Digital,
built from the Figma "Exploring Digital Website Redesign". Deploys for free on
GitHub Pages.

## Pages
`index.html` (Home) · `services.html` · `small-business.html` · `health-tech.html` · `about.html` ·
`contact.html` · `404.html`

Case Studies and Insights are hidden (removed) until there is a real client
result and two or three real posts. Their layouts are in git history
(commit 6e8eada) if you want to bring them back.

Text in `<span class="todo">[…]</span>` is a fill-in placeholder that shows
highlighted on purpose. Replace it with a real fact or cut the line before
launch.

## Structure
```
/
├─ index.html, about.html, …      ← one file per page
├─ assets/
│  ├─ css/styles.css              ← all styling + design tokens
│  ├─ js/site.js                  ← shared header/footer + interactions
│  └─ images/                     ← drop real photos here
├─ .nojekyll                      ← tells GitHub Pages to serve files as-is
└─ robots.txt
```

## Editing

- **Page text:** edit the relevant `.html` file directly.
- **Navigation & footer:** edit once in `assets/js/site.js` (they're injected
  into every page, so you never update six files).
- **Colors & fonts:** edit the `:root` variables at the top of
  `assets/css/styles.css` (e.g. `--green`, `--accent`).
- **Images:** replace the `<div class="img-ph" …></div>` placeholders with
  `<img src="assets/images/your-photo.jpg" alt="…">`. See
  `assets/images/README.txt` for recommended sizes.

## Preview locally
From this folder: `python3 -m http.server 8000`, then open
`http://localhost:8000`.

## Deploy to GitHub Pages
1. Push this folder to the repo's default branch.
2. On GitHub: **Settings → Pages → Build and deployment**, Source =
   "Deploy from a branch", Branch = `main`, folder = `/ (root)`, Save.
3. The site goes live at `https://jameyshiels.github.io/ExploringDigital/`
   within a minute or two.

## Custom domain (GoDaddy)
See the chat for step-by-step DNS records. In short: set your domain under
**Settings → Pages → Custom domain**, then point GoDaddy's DNS at GitHub
(four `A` records + a `www` CNAME) and enable "Enforce HTTPS".

## Notes
- Images shown are on-brand placeholders — swap in real photos.
- The contact form opens a pre-filled email (no server needed).
  To collect submissions on a page instead, connect a free form service
  (Formspree, Basin, etc.) later.
