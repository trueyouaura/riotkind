# Riotkind Entertainment website

A responsive, single-page website prototype for **Riotkind Entertainment**, featuring its planned flagship festival **Manic in the Middle**.

**Important:** Riotkind Entertainment and Manic in the Middle are working names pending trademark clearance. The company has not yet been formed and the festival has no announced dates, venue, lineup, or ticket sales.

## Files

- `index.html` — content and semantic structure
- `styles.css` — visual design and mobile styling
- `script.js` — mobile navigation and automatic copyright year
- `.nojekyll` — lets GitHub Pages serve this as a plain static website

## Preview locally

Double-click `index.html` to open in a browser. No Node.js, build step, API keys or database are needed.

## Publish for free using GitHub Pages

1. On GitHub, create a repository, for example `riotkind-website`.
2. Upload all four files to the **root** of the repository (not nested inside another folder).
3. Commit them to the `main` branch.
4. In your repository, go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select **main** and **/(root)**, then **Save**.
7. Your website will be available at `https://YOUR-USERNAME.github.io/riotkind-website/` after deployment.

You do **not** need to purchase a domain. GitHub Free requires a public repository to publish on GitHub Pages. Keep the repository private until you're comfortable putting the working names online.

## Editing

- Change the page wording in `index.html`.
- Change pink, background and other colors near the top of `styles.css` under `:root`.
- Update the flagship festival section once details are actually confirmed.
- Add an official contact email or social links in `#connect` once those accounts exist. No contact address or form is included yet because none has been confirmed.
- If you later change the repository name, GitHub Pages will give you a correspondingly different URL. There are no root-absolute asset paths to break when hosted under a project URL.

## Privacy and accessibility

No analytics, cookies, contact-form collection, or backend. Responsive layout, keyboard-operable mobile menu, visible focus states, semantic headings, skip-to-content link, and reduced-motion support.

Fonts are served from Google Fonts when available; local fallbacks are provided.
