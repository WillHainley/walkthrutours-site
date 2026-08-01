# Go live on walkthrutours.com

The GitHub side is already done: the custom domain is set and the `CNAME` file is
committed. Only the DNS records are left, and they are yours to change.

Right now both `walkthrutours.com` and `www` resolve to Cloudflare addresses that
serve the old "Coming Soon" page. Those records have to be replaced.

## The five minute version

1. Sign in at dash.cloudflare.com and pick **walkthrutours.com**, then open **DNS**.
2. **Delete** every `A`, `AAAA` and `CNAME` record whose name is `walkthrutours.com`
   (shown as `@`) or `www`. Those are what serve the Coming Soon page.
3. **Add** these two records:

   | Type | Name | Target | Proxy |
   |---|---|---|---|
   | CNAME | `@` | `willhainley.github.io` | **DNS only** (grey cloud) |
   | CNAME | `www` | `willhainley.github.io` | **DNS only** (grey cloud) |

   Grey cloud matters. With the orange cloud on, GitHub cannot issue its certificate
   and the site can end up in a redirect loop. Turn the proxy on later if you want
   Cloudflare's CDN, and set SSL/TLS mode to **Full** at the same time. Never
   **Flexible**, which loops.
4. Wait a few minutes, then load https://walkthrutours.com in a private window.

## After it resolves

GitHub issues the certificate automatically once it sees the DNS. When
https://walkthrutours.com loads, turn on **Enforce HTTPS**:

```
gh api -X PUT repos/WillHainley/walkthrutours-site/pages -F https_enforced=true
```

Then delete whatever was serving the Coming Soon page so it cannot come back, and
mark prerequisite 0 done in `skills/walkthru-outreach/SKILL.md` over in the
walkthru-tours repo. That prerequisite is what is currently blocking outreach sends.

## While DNS is not switched yet

The old preview link now forwards to walkthrutours.com, so it will look broken until
you finish the steps above. To get the preview back, remove the `CNAME` file, push,
and clear the domain:

```
gh api -X PUT repos/WillHainley/walkthrutours-site/pages -f cname=
```
