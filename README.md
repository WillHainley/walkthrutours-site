# walkthrutours.com

Single-file static site — all markup, CSS and JS live in `index.html`. No build step, no
framework, no dependencies. Edit, push, GitHub Pages redeploys. Both machines: clone, edit, push.

Design is the v2 redesign ported from the other laptop (Newsreader + Instrument Sans,
cream/ink/teal, rotating film hero, dark screening-room samples band), integrated here with
the delivered-tours ledger, deposit-first pricing, favicon, OG tags and domain config.

- `index.html` — the whole site
- `media/` — Villa Manatee production film segments + posters (see MEDIA.md)
- `MEDIA.md` — how to swap in the fuller hero reel from the other machine
- `PAYMENTS-SETUP.md` — how to wire the Stripe deposit links
- `CNAME` — custom domain for GitHub Pages

Local preview: `python -m http.server 8777` in this folder.

## Domain (Cloudflare, one time)
Delete the "Coming Soon" DNS records, then add:
- `CNAME  walkthrutours.com  →  willhainley.github.io` (proxied or DNS-only both work; DNS-only is simplest)
- `CNAME  www  →  willhainley.github.io`
Then in the GitHub repo: Settings → Pages → Custom domain shows walkthrutours.com
(the CNAME file sets it) → check **Enforce HTTPS** once the cert issues.
