# Payments — Venmo (30 seconds)

The pricing buttons open a pre-filled $50 Venmo deposit. One value turns them on.

1. In `index.html`, find `var VENMO_HANDLE = "";` in the pricing script.
2. Put your Venmo username between the quotes, **without the @** — for example
   `var VENMO_HANDLE = "Will-Hainley";` (it is the handle in your Venmo profile URL).
3. Commit and push. Pages redeploys in about a minute.

That is it. Each button then opens Venmo with the amount ($50) and the note
("WalkThru Tours deposit, 3-4 bedrooms") already filled in — the app on phones,
the web page on desktop. The venues tier always goes to email instead, since
those are quoted individually.

While the handle is empty every button falls back to a pre-filled email, so a lead
is never dropped.

## The business rule
Deposit before credits. Do not start generating until the $50 lands. The deposit
comes off the price; collect the balance on approval, same handle.

## Later, if card payments matter
Some owners will not use Venmo. Stripe Payment Links are the drop-in upgrade: create
a $50 one-time link at dashboard.stripe.com and use it in place of the Venmo URL in
the same script. Worth doing only once someone actually asks to pay by card.
