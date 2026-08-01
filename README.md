# walkthrutours.com

Hand-coded static site: HTML + CSS + vendored GSAP/ScrollTrigger/Lenis. No build step —
edit, push, GitHub Pages redeploys. Both machines: clone, edit, push.

- `index.html` / `styles.css` / `main.js` — the whole site
- `media/` — Villa Manatee production film segments + posters (the hero footage)
- `vendor/` — pinned animation libraries (no CDN dependency)
- `PAYMENTS-SETUP.md` — how to wire the Stripe deposit links
- `CNAME` — custom domain for GitHub Pages

Local preview: `python -m http.server 8777` in this folder.

## Domain (Cloudflare, one time)
Delete the "Coming Soon" DNS records, then add:
- `CNAME  walkthrutours.com  →  willhainley.github.io` (proxied or DNS-only both work; DNS-only is simplest)
- `CNAME  www  →  willhainley.github.io`
Then in the GitHub repo: Settings → Pages → Custom domain shows walkthrutours.com
(the CNAME file sets it) → check **Enforce HTTPS** once the cert issues.
