# Wireframes: savings-summary screen

Two low-fidelity wireframes: the screen as it is actually shipped
(`src/components/Basket/SavingsSummary/SavingsSummary.tsx`), and one
proposed revision that is explicitly **not implemented** — a design proposal
only.

## Diagram

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500" font-family="Helvetica,Arial,sans-serif">
  <rect x="0" y="0" width="900" height="500" fill="#ffffff"/>

  <!-- LEFT: as shipped -->
  <g>
    <text x="40" y="30" font-size="16" font-weight="bold" fill="#1a1a1a">As shipped (SavingsSummary.tsx)</text>
    <rect x="40" y="50" width="340" height="220" rx="8" fill="#ffffff" stroke="#999" stroke-width="1.5"/>
    <text x="210" y="110" text-anchor="middle" font-size="20" font-weight="bold" fill="#1a1a1a">You saved 12%</text>
    <text x="210" y="140" text-anchor="middle" font-size="12" fill="#555">by splitting this basket across 3</text>
    <text x="210" y="156" text-anchor="middle" font-size="12" fill="#555">stores instead of one</text>
    <rect x="140" y="190" width="140" height="40" rx="4" fill="#b7e4c7" stroke="#2f9e44"/>
    <text x="210" y="215" text-anchor="middle" font-size="13" font-weight="bold">See full basket</text>
    <text x="60" y="300" font-size="11" fill="#777">Fields shown: message (variant A</text>
    <text x="60" y="315" font-size="11" fill="#777">percent / variant B dollar), fixed</text>
    <text x="60" y="330" font-size="11" fill="#777">subtext, single CTA button. Matches</text>
    <text x="60" y="345" font-size="11" fill="#777">the real component 1:1 -- no field</text>
    <text x="60" y="360" font-size="11" fill="#777">shown here that isn't in the code.</text>
  </g>

  <!-- RIGHT: proposed revision -->
  <g>
    <text x="480" y="30" font-size="16" font-weight="bold" fill="#1a1a1a">Proposed revision (not implemented)</text>
    <rect x="480" y="50" width="380" height="290" rx="8" fill="#ffffff" stroke="#3b5bdb" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="670" y="100" text-anchor="middle" font-size="20" font-weight="bold" fill="#1a1a1a">You saved 12%</text>
    <text x="670" y="128" text-anchor="middle" font-size="12" fill="#555">by splitting this basket across 3</text>
    <text x="670" y="144" text-anchor="middle" font-size="12" fill="#555">stores instead of one</text>

    <rect x="510" y="160" width="320" height="90" rx="4" fill="#eef4ff" stroke="#3b5bdb"/>
    <text x="520" y="178" font-size="11" font-weight="bold" fill="#1a1a1a">Per-store breakdown (new)</text>
    <text x="520" y="196" font-size="11" fill="#1a1a1a">IGA: kept, saves $6.10 (worth the stop)</text>
    <text x="520" y="212" font-size="11" fill="#1a1a1a">Metro: kept, saves $2.80 (worth the stop)</text>
    <text x="520" y="228" font-size="11" fill="#1a1a1a">Provigo: dropped, saved only $0.40</text>
    <text x="520" y="244" font-size="10" fill="#7a1f1f">(not worth visitCostPerStore)</text>

    <rect x="590" y="270" width="160" height="40" rx="4" fill="#b7e4c7" stroke="#2f9e44"/>
    <text x="670" y="295" text-anchor="middle" font-size="13" font-weight="bold">See full basket</text>

    <text x="490" y="365" font-size="11" fill="#777">Addresses P4 ("factor in that a store</text>
    <text x="490" y="380" font-size="11" fill="#777">isn't worth visiting unless it saves</text>
    <text x="490" y="395" font-size="11" fill="#777">something real") and Priya's/Marcus's</text>
    <text x="490" y="410" font-size="11" fill="#777">need to see *why* each store was kept</text>
    <text x="490" y="425" font-size="11" fill="#777">or dropped, not just the final total.</text>
  </g>
</svg>
```

Also saved standalone at [`wireframes.svg`](wireframes.svg).

## As shipped

Matches `SavingsSummary.tsx` element-for-element: a headline message (the
A/B-tested framing — percent for variant A, dollar amount for variant B, see
`prd-ab-testing.md`), one line of fixed subtext naming the store count, and
a single "See full basket" button that logs a conversion event and navigates
to `/basket`. No field on this wireframe that isn't in the real component.

## Proposed revision (not implemented)

Adds a per-store breakdown line beneath the existing headline: which stores
were kept, the saving each contributed, and which store the solver dropped
and why. This directly answers two things surfaced in
`discovery-user-interviews.md`:

- **P4:** *"Instead of just telling it 'max 3 stores', I'd rather it just
  factor in that a store isn't worth visiting unless it saves me something
  real."* Today's screen states the total saving but not the reasoning; the
  breakdown makes the solver's per-store decision visible.
- **Personas (`personas.md`):** Priya wants to know *why* a store made the
  cut, not just the total; Marcus wants to see the tool's reasoning, not just
  its answer.

The data this needs (`visitCostPerStore`, per-store savings) already exists
in `solveBasket`'s output — see `prd-travel-cost.md` — this wireframe
only proposes surfacing it. It is not wired into the real component.

## Tooling note

No Figma account or API was reachable in this environment when this was
built. Per the fallback already agreed for this extension, both diagrams
are hand-authored inline SVG committed directly to the repo rather than a
live Figma file. If Figma access becomes available later, these can be
recreated there without changing what they show.
