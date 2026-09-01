import { describe, expect, it } from "vitest";
import { computeSampleSavings } from "../../../src/components/Basket/SavingsSummary/computeSampleSavings";
import solveBasket from "../../../src/utils/Optimization/solveBasket";
import {
  SAMPLE_MATRIX,
  SAMPLE_SUPPLIER_COUNT,
} from "../../../src/components/Basket/SavingsSummary/sampleBasket";

describe("computeSampleSavings", () => {
  it("reports a positive savings amount for the sample basket", () => {
    const savings = computeSampleSavings();
    expect(savings.savingsAmount).toBeGreaterThan(0);
    expect(savings.savingsPercent).toBeGreaterThan(0);
  });

  it("matches solveBasket's own single-store and two-store totals", () => {
    const singleStore = solveBasket(SAMPLE_MATRIX, SAMPLE_SUPPLIER_COUNT, 1);
    const optimized = solveBasket(SAMPLE_MATRIX, SAMPLE_SUPPLIER_COUNT, 2);
    const savings = computeSampleSavings();

    expect(savings.singleStoreCost).toBe(singleStore.cost);
    expect(savings.optimizedCost).toBe(optimized.cost);
    expect(savings.savingsAmount).toBeCloseTo(
      singleStore.cost - optimized.cost,
      6,
    );
  });

  it("optimized cost never exceeds the single-store cost", () => {
    const savings = computeSampleSavings();
    expect(savings.optimizedCost).toBeLessThanOrEqual(savings.singleStoreCost);
  });
});
