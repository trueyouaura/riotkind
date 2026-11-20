# Riotkind Entertainment website

A responsive, single-page website prototype for **Riotkind Entertainment**, featuring its planned flagship festival **Manic in the Middle**.

**Important:** Riotkind Entertainment and Manic in the Middle are working names pending trademark clearance. The company has not yet been formed and the festival has no announced dates, venue, lineup, or ticket sales.

## Files

- `index.html` — content and semantic structure
- `styles.css` — visual design and mobile styling, including the 2000s-grunge design pass
- `assets/film-grain.png` — locally generated subtle photocopy-style grain texture
- `script.js` — mobile navigation and automatic copyright year
- `.nojekyll` — lets GitHub Pages serve this as a plain static website

## Preview locally

Double-click `index.html` to open in a browser. No Node.js, build step, API keys or database are needed.

## Publish for free using GitHub Pages

1. On GitHub, create a repository, for example `riotkind-website`.
2. Upload `index.html`, `styles.css`, `script.js`, `README.md`, `.nojekyll`, and the complete `assets/` folder to the **root** of the repository (not nested inside another folder).
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

## 2000s-grunge design pass

The current look preserves the original structure while layering in a photocopied gig-poster aesthetic: torn paper edges, washi tape, rough-stamped labels, hand-marked notes, an acid-lime secondary accent, xerox grain and slightly imperfect outlines. All artwork is code/CSS or the included locally generated texture. There are no borrowed band graphics, no purchased assets, and no CSS libraries.

To tone it down, lower the `opacity` of `body::after` in `styles.css`, remove the `.hero-patch` element in `index.html`, or remove the CSS block headed `THE 2000s GRUNGE PASS`. The original design is preserved above that section.

## Riotkind v3: More pink, more purple, more grunge

This revision intensifies the early-2000s photocopied festival-flyer aesthetic with hot pink and deep eggplant colors, a distressed **RIOT** headline, torn-note manifesto strip, extra stickers, hand-marked doodles, scratched ink, and xerox grain. The revised grunge layers live in the last CSS section titled `RIOTKIND v3: 50% MORE GRUNGE` so they are easy to tweak without changing the semantic HTML.

The `assets` directory now contains locally generated background textures and SVG scrawls. These must be uploaded along with the HTML, CSS, and JavaScript files. Content remains clearly marked as a proposed company/festival concept, not an announced event. No domain, server, framework, build tool, or paid service is required.
