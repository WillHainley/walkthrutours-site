# Updating walkthrutours.com

The site is served by a Cloudflare Worker called `lucky-union-daa5`, using static
assets. DNS never needs to change and email is never touched.

## One time: connect this repo to the Worker

Cloudflare > Workers & Pages > `lucky-union-daa5` > **Settings** > **Build** >
connect `WillHainley/walkthrutours-site`, branch `main`.

- Build command: leave empty
- `wrangler.jsonc` in this repo tells Cloudflare what to serve
- `.assetsignore` keeps these notes out of the deployed site

## Every time after that

Edit `index.html`, commit, push. Cloudflare rebuilds and walkthrutours.com updates.
Either machine, no dashboard, no uploads.

## Until that is connected

Uploading by hand still works: rebuild the clean folder and drag it into
Workers & Pages > lucky-union-daa5 > upload static files.

```
rm -rf dist && mkdir dist && cp index.html favicon.svg dist/ && cp -r media dist/media
```

## Leftovers

- `www` still points at Squarespace and shows Coming Soon. Change that CNAME to
  match the apex when you feel like it.
- `_domainconnect` is a Squarespace leftover and can be deleted.

## Never delete these DNS records
Google Workspace email for willhainley@walkthrutours.com depends on them:
`MX smtp.google.com`, the SPF TXT, `google._domainkey` DKIM, `_dmarc`, and the
google-site-verification TXT. Losing any of them breaks cold outreach.
