# Payments — Venmo

Live. Handle is `WalkThruTours`, set as `var VENMO_HANDLE` in the pricing script in
`index.html`. Each tier button opens Venmo with $50 and a note already filled in
(the app on phones, the web page on desktop). The venues tier goes to email instead,
since those are quoted individually. Empty the handle and every button falls back to
a pre-filled email, so a lead is never dropped either way.

**Test it once before sending anyone there.** Open the site on your phone, tap a
Reserve button, and check that Venmo opens on the right account with $50 filled in.
Venmo's link format has changed before.

## Two things to know
- **A personal Venmo account is not meant for business payments.** Venmo's user
  agreement puts business activity on a business profile, and personal accounts
  taking regular payments can get frozen while they review it, with the money held.
  Creating a business profile under the same login takes a few minutes. Do it before
  volume picks up, not after a payment is stuck.
- **Some owners will not use Venmo at all**, particularly older ones and anyone
  expensing it. Stripe Payment Links are the drop-in second option: create a $50
  one-time link at dashboard.stripe.com and swap the URL in the same script. Worth
  doing the first time someone asks to pay by card.

## The business rule
No deposit (Will, 2026-10-06). Build first, the client watches it, and they pay the
full price on approval: rentals $75 / $125 / $175 by bedrooms, land $50. Rendering is
local and free now (no Higgsfield), so there is no up-front cost to protect.

