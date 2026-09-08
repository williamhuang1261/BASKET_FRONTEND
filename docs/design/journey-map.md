# Journey map: deciding whether an extra stop is worth it

Maps the shopper's flow from building a basket to actually shopping, with
each pain point traced back to a specific source: the competitive scan, the
PRD, or a named interview note. Nothing on this map is invented; where a box
has no cited pain point, none was found in the existing research.

## The four stages

1. **Build the basket** — the shopper adds items with no visibility yet into
   which stores are cheapest.
2. **See per-store prices** — per `discovery-competitive-scan.md`, existing
   apps (Flipp, Instacart, generic list apps) stop here: they show prices but
   leave store selection to the shopper.
3. **Decide: worth the stop?** — the stage this project's travel-cost work
   targets. `prd-travel-cost.md` names this gap directly: *"a greedy pick
   with a $0.40 marginal saving is not obviously worth visiting, but the
   current objective cannot tell the two apart from a $40 saving."*
4. **Shop / drive** — the shopper pays whatever time/distance cost was
   decided (or not decided) in stage 3.

## Diagram

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 420" font-family="Helvetica,Arial,sans-serif">
  <rect x="0" y="0" width="1200" height="420" fill="#ffffff"/>
  <!-- Stage boxes -->
  <g font-size="14" fill="#1a1a1a">
    <!-- Stage 1 -->
    <rect x="20" y="40" width="220" height="90" rx="6" fill="#eef4ff" stroke="#3b5bdb"/>
    <text x="130" y="65" text-anchor="middle" font-weight="bold">1. Build the basket</text>
    <text x="130" y="88" text-anchor="middle" font-size="12">Shopper adds items,</text>
    <text x="130" y="104" text-anchor="middle" font-size="12">doesn't yet know the</text>
    <text x="130" y="120" text-anchor="middle" font-size="12">cheapest store split.</text>

    <!-- Stage 2 -->
    <rect x="280" y="40" width="240" height="90" rx="6" fill="#eef4ff" stroke="#3b5bdb"/>
    <text x="400" y="65" text-anchor="middle" font-weight="bold">2. See per-store prices</text>
    <text x="400" y="88" text-anchor="middle" font-size="12">Some apps show cheapest</text>
    <text x="400" y="104" text-anchor="middle" font-size="12">store per item, but leave</text>
    <text x="400" y="120" text-anchor="middle" font-size="12">store selection to the shopper.</text>

    <!-- Stage 3 -->
    <rect x="560" y="40" width="260" height="90" rx="6" fill="#eef4ff" stroke="#3b5bdb"/>
    <text x="690" y="65" text-anchor="middle" font-weight="bold">3. Decide: worth the stop?</text>
    <text x="690" y="88" text-anchor="middle" font-size="12">The gap this project targets:</text>
    <text x="690" y="104" text-anchor="middle" font-size="12">no tool weighs marginal saving</text>
    <text x="690" y="120" text-anchor="middle" font-size="12">against the cost of a trip.</text>

    <!-- Stage 4 -->
    <rect x="860" y="40" width="220" height="90" rx="6" fill="#eef4ff" stroke="#3b5bdb"/>
    <text x="970" y="65" text-anchor="middle" font-weight="bold">4. Shop / drive</text>
    <text x="970" y="88" text-anchor="middle" font-size="12">Visits each chosen store,</text>
    <text x="970" y="104" text-anchor="middle" font-size="12">paying the real time/distance</text>
    <text x="970" y="120" text-anchor="middle" font-size="12">cost decided in stage 3.</text>

    <!-- Arrows -->
    <path d="M240 85 L280 85" stroke="#3b5bdb" stroke-width="2" marker-end="url(#arrow)"/>
    <path d="M520 85 L560 85" stroke="#3b5bdb" stroke-width="2" marker-end="url(#arrow)"/>
    <path d="M820 85 L860 85" stroke="#3b5bdb" stroke-width="2" marker-end="url(#arrow)"/>
  </g>

  <!-- Pain point callouts -->
  <g font-size="12" fill="#7a1f1f">
    <rect x="280" y="160" width="240" height="70" rx="4" fill="#fff1f0" stroke="#c92a2a"/>
    <text x="290" y="178" font-weight="bold">Pain point (competitive scan)</text>
    <text x="290" y="196">No surveyed app decides which</text>
    <text x="290" y="211">set of stores to visit; shopper</text>
    <text x="290" y="226">decides manually every time.</text>

    <rect x="560" y="160" width="260" height="90" rx="4" fill="#fff1f0" stroke="#c92a2a"/>
    <text x="570" y="178" font-weight="bold">Pain point (prd-travel-cost.md)</text>
    <text x="570" y="196">"Two stores are treated as two</text>
    <text x="570" y="211">stores whether next door or</text>
    <text x="570" y="226">across the city" -- objective</text>
    <text x="570" y="241">ignores trip cost entirely.</text>

    <rect x="560" y="270" width="260" height="90" rx="4" fill="#fff1f0" stroke="#c92a2a"/>
    <text x="570" y="288" font-weight="bold">Pain point (P1, P3 interviews)</text>
    <text x="570" y="306">"I'm not driving anywhere for</text>
    <text x="570" y="321">sixty cents"; "every extra store</text>
    <text x="570" y="336">is fifteen minutes I don't have."</text>

    <rect x="860" y="160" width="220" height="70" rx="4" fill="#fff1f0" stroke="#c92a2a"/>
    <text x="870" y="178" font-weight="bold">Pain point (P5 interview)</text>
    <text x="870" y="196">"Stores aren't all equally</text>
    <text x="870" y="211">close" -- flat per-store cost</text>
    <text x="870" y="226">doesn't fit rural shoppers.</text>
  </g>

  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#3b5bdb"/>
    </marker>
  </defs>
</svg>
```

Also saved standalone at [`journey-map.svg`](journey-map.svg).

## Pain points and their source

| Stage | Pain point | Source |
| --- | --- | --- |
| 2 | No surveyed app decides *which set* of stores to visit | `discovery-competitive-scan.md`, "Where Basket differs" |
| 3 | Objective treats two stores as equally costly regardless of distance | `prd-travel-cost.md`, "Problem" |
| 3 | "I'm not driving anywhere for sixty cents" / "every extra store is fifteen minutes I don't have" | `discovery-user-interviews.md`, P1 and P3 |
| 4 | Flat per-store cost doesn't fit shoppers whose stores are unevenly spaced | `discovery-user-interviews.md`, P5 |

## What this is not

A journey map built from the same simulated/informal interview notes as
`personas.md` and `discovery-user-interviews.md` — not a facilitated
mapping session with real shoppers, and not a claim that these are the only
four stages a real shopping journey could have.
