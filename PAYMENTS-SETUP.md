# Payments — Stripe Payment Links (10 minutes, one time)

The pricing buttons currently fall back to a pre-filled email. To take real deposits:

1. dashboard.stripe.com → **Payment Links → New** (create a Stripe account first if needed).
2. Create ONE product: "WalkThru Tour deposit" at **$50**, one-time. Create a payment link
   from it. Repeat if you want per-tier links with the tier name in the description
   (recommended so Stripe tells you which size property reserved).
3. In `main.js`, paste each link into `PAYMENT_LINKS` — for example:
   `"1-2 bedrooms": "https://buy.stripe.com/xxxx"`.
4. Commit + push. Pages redeploys automatically.

Notes
- Deposit-before-credits is the business rule: never start generating until the $50 clears.
- The deposit comes off the final price; collect the balance by Stripe invoice or a second
  payment link on delivery.
- Optional later: map checkout to pay.walkthrutours.com in Stripe's settings (adds a CNAME
  in Cloudflare) so the checkout page carries the brand.
