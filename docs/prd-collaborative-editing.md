# PRD: Real-time collaborative editing on the basket page

## Problem

Basket is a single-user experience today: two people who want to shop
together have no way to see or affect each other's changes to the same
basket. A shopper comparing stores with a housemate has to read numbers out
loud or screen-share instead of just opening the same page.

## What "collaborative" means here

Anyone can turn the current basket page into a shared session by adding a
`?share=<sessionId>` query param to the URL and sending that link to someone
else. Both browsers connect to a small Socket.IO relay: each sees a live
count of how many people currently have the link open, and when either
person changes an item's quantity, unit, method, or supplier, the other
sees that change appear immediately, briefly highlighted so it's obvious it
came from someone else.

## Design

- A session id is just a string in the URL; there is no "create session"
  step or account requirement, matching this project's existing
  no-login-required pattern for the A/B test's anonymous id.
- The server relay is a set of Socket.IO rooms keyed by session id. Joining
  a room broadcasts an updated presence count to everyone in it. An
  `item-changed` event relays the same action object the local reducer
  already applies, to every other socket in the room, never back to the
  sender.
- The client applies a remote `item-changed` exactly like a local one, going
  through the same `basketItemReducer` — there is one code path for "this
  item's state changed," not two.

## What this is not

Not a shared shopping cart. Per this project's own documented limitation,
`BasketResults` still renders the static sample catalog (`data/ItemsEX`) —
there is no persisted, add/remove-able cart backend yet, so nothing here
claims to sync *which items* are in the basket, only the existing per-item
controls (quantity, units, method, supplier) that are already interactive.
Not persistent: presence and room membership live in the Socket.IO server's
memory only, so a server restart drops every active session — there is no
database behind this. Not conflict-resolved: two people changing the same
field at the same instant results in whichever update the server relays
last winning, no merge or lock. And not authenticated: anyone with the link
can join and edit, same trust model as sharing a Google Docs link with
"anyone with the link can edit."

## Success metrics

- Two real browser clients joining the same session id both see a presence
  count of 2, verified against a real local Socket.IO server (not mocked).
- An item-change relay reaches every other client in the room and never the
  sender, and never reaches a client in a different session id.
- The existing single-user flow (no `?share=` param) opens zero socket
  connections and behaves byte-for-byte as it does today.

## Prioritization

This is the smallest real version of "collaborative editing" this project
can honestly claim: a working live-sync mechanism on top of state that
already exists and is already interactive, without overclaiming a shared
cart backend that hasn't been built yet.
