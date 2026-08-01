# Updating walkthrutours.com

walkthrutours.com is served by a Cloudflare Worker called `lucky-union-daa5`.
DNS is fine and does not need to change. Email (Google Workspace MX, SPF, DKIM,
DMARC) is untouched by any of this.

## One time: point the Worker at this repo

Cloudflare > Workers & Pages > `lucky-union-daa5` > Edit code. Replace everything
with `cloudflare-worker.js` from this repo, then Deploy.

That is the only Cloudflare step there will ever be.

## Every time after that

Edit `index.html`, commit, push. GitHub Pages rebuilds in about a minute and
walkthrutours.com serves it. Both machines update the same way.

## Leftovers you can clean up whenever

- `www` still points at Squarespace (`ext-sq.squarespace.com`) and shows a Coming
  Soon page. Change that CNAME to `willhainley.github.io`, DNS only, grey cloud.
- `_domainconnect` is a Squarespace leftover and can be deleted.

## Never delete these
Google Workspace email for willhainley@walkthrutours.com depends on them:
`MX smtp.google.com`, the SPF TXT, `google._domainkey` DKIM, `_dmarc`, and the
google-site-verification TXT. Losing any of them breaks cold outreach.
