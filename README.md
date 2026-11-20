# RIOTKIND Entertainment | Website v5

This is a **static, GitHub Pages-ready** website for the Riotkind Entertainment working brand. It is based on the selected **Concept B: early-2000s punk / emo collage** identity, and uses the actual outlined Riotkind SVG logo assets, not placeholder text.

## What's inside

- `index.html`: the full accessible single-page site
- `styles.css`: responsive layout, poster-collage design, textures, mobile and reduced-motion styles
- `script.js`: the accessible responsive navigation and current copyright year
- `assets/`: official working Riotkind vector logos, textures and favicon
- `.nojekyll`: makes GitHub Pages serve the static files as provided

## Run it locally

Open `index.html` in a browser. To use a local HTTP server, from this folder run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages (no domain necessary)

1. Create a GitHub repository (for example `riotkind-website`).
2. Upload **the contents of this folder**, with `index.html` at the repository root.
3. Commit the files on the `main` branch.
4. Go to **Settings → Pages → Build and deployment**.
5. Set **Source** to `Deploy from a branch`, select `main`, folder `/(root)`, then Save.
6. GitHub Pages will serve the site at `https://YOUR-USERNAME.github.io/riotkind-website/` once deployment is complete.

All site asset paths are relative. No Node build, paid hosting, backend, API keys or custom domain is required. Google Fonts enhance the design but local fallback fonts are defined.

## Editing guidance

- Change site copy in `index.html`.
- Change core colors and styling in the `:root` block in `styles.css`.
- The primary and icon logos are in `assets/riotkind-primary.svg` and `assets/riotkind-rk-heart.svg`.
- The website intentionally has **no functioning contact form, newsletter signup, social URLs, ticket-sale links, or announcements** until real destinations are available.
- Keep the early-stage copy current and do not list unconfirmed shows, venues, artists, sponsors, or dates.
- The brand and festival names are working names pending trademark clearance. Site publication constitutes public brand use, so consider waiting to publish publicly until comfortable with that risk.

## Accessibility

Semantic regions, a skip-to-content link, focus styling, keyboard-operable mobile navigation with Escape support, reduced-motion styles, and contrast-aware typography are included. Use the icon alone in compact spaces and the outlined main logo in larger placements.

## Credits / status

Riotkind Concept B vector marks originate from the working Riotkind logo kit developed for this project. No purchased or licensed external imagery is required. This is a proposed venture, not an incorporated operating company.
