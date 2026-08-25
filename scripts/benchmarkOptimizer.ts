/**
 * @description Measures the exhaustive solver against the greedy one on random
 * baskets, reporting runtime and how much money the approximation actually
 * leaves on the table.
 *
 * The README quotes this output. Re-run it with `npm run bench:optimizer` after
 * touching anything under src/utils/Optimization and update the table if the
 * numbers move.
 */
import basketCost from "../src/utils/Optimization/basketCost";
import genCombinations from "../src/utils/Optimization/genCombinations";
import greedyOptimize from "../src/utils/Optimization/greedyOptimize";
import optimize from "../src/utils/Optimization/optimize";
import { searchSpace } from "../src/utils/Optimization/solveBasket";
import { Matrix } from "../src/utils/Optimization/genMatrix";

/** Deterministic LCG, so the table in the README is reproducible. */
const rng = (seed: number) => () =>
  ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);

const randomMatrix = (
  items: number,
  suppliers: number,
  next: () => number,
): Matrix =>
  Array.from({ length: items }, (_, i) => {
    const costs = Array.from({ length: suppliers }, () =>
      next() < 0.25 ? Infinity : Math.round(next() * 1000) / 100,
    );
    return {
      ref: { code: `${i}`, standard: "PLU" as const },
      inStock: costs.some((c) => c !== Infinity),
      opts: costs.map((cost, s) => ({ supplier: `S${s + 1}`, cost })),
    };
  });

interface Row {
  suppliers: number;
  stores: number;
  space: number;
  exactMs: number;
  greedyMs: number;
  meanGap: number;
  worstGap: number;
  exactHits: number;
  trials: number;
}

const ITEMS = 25;
const TRIALS = 40;

// Kept to sizes the exhaustive solver can still finish, since the gap can only
// be measured where the true optimum is known
const CASES: [number, number][] = [
  [8, 3],
  [10, 4],
  [12, 5],
  [14, 6],
  [16, 6],
  [18, 7],
];

const run = (): Row[] =>
  CASES.map(([suppliers, stores]) => {
    let exactMs = 0;
    let greedyMs = 0;
    let gapSum = 0;
    let worstGap = 0;
    let exactHits = 0;
    let trials = 0;

    for (let seed = 1; seed <= TRIALS; seed++) {
      const matrix = randomMatrix(ITEMS, suppliers, rng(seed * 7919));
      const combinations = genCombinations(suppliers, stores);

      const t0 = performance.now();
      const exact = optimize(matrix, combinations);
      exactMs += performance.now() - t0;

      const t1 = performance.now();
      const approx = greedyOptimize(matrix, suppliers, stores);
      greedyMs += performance.now() - t1;

      if (!exact.length || exact[0].cost === Infinity) continue;
      if (approx.cost === Infinity) continue;

      // Sanity: greedy must never beat the true optimum
      if (approx.cost < exact[0].cost - 1e-9) {
        throw new Error(
          `greedy beat the exhaustive optimum at n=${suppliers} k=${stores}`,
        );
      }
      if (basketCost(matrix, approx.suppliers).cost !== approx.cost) {
        throw new Error("greedy reported a cost its own supplier set does not produce");
      }

      trials++;
      const gap = (approx.cost - exact[0].cost) / exact[0].cost;
      gapSum += gap;
      if (gap > worstGap) worstGap = gap;
      if (gap < 1e-9) exactHits++;
    }

    return {
      suppliers,
      stores,
      space: searchSpace(suppliers, stores),
      exactMs: exactMs / TRIALS,
      greedyMs: greedyMs / TRIALS,
      meanGap: trials ? gapSum / trials : 0,
      worstGap,
      exactHits,
      trials,
    };
  });

const pct = (v: number) => `${(v * 100).toFixed(2)}%`;
const ms = (v: number) => `${v.toFixed(3)} ms`;

const rows = run();

console.log(
  `\nBasket of ${ITEMS} items, ${TRIALS} random baskets per row, 1 supplier in 4 does not stock a given item.\n`,
);
console.log(
  "| suppliers | stores | C(n,k) | exhaustive | greedy | speedup | mean gap | worst gap | matched optimum |",
);
console.log(
  "| --- | --- | --- | --- | --- | --- | --- | --- | --- |",
);
for (const r of rows) {
  console.log(
    `| ${r.suppliers} | ${r.stores} | ${r.space.toLocaleString("en-US")} | ${ms(r.exactMs)} | ${ms(r.greedyMs)} | ${(r.exactMs / r.greedyMs).toFixed(0)}x | ${pct(r.meanGap)} | ${pct(r.worstGap)} | ${r.exactHits}/${r.trials} |`,
  );
}
console.log("");
