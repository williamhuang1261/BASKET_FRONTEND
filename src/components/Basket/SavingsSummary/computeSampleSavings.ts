import solveBasket from "../../../utils/Optimization/solveBasket";
import { SAMPLE_MATRIX, SAMPLE_SUPPLIER_COUNT } from "./sampleBasket";

export interface SampleSavings {
  singleStoreCost: number;
  optimizedCost: number;
  savingsAmount: number;
  savingsPercent: number;
}

/** How many stores the optimized basket is allowed to split across. */
export const SAMPLE_MAX_STORES = 2;

/**
 * @description Runs solveBasket on the demo sample basket twice: once
 * limited to a single store (the baseline a shopper gets today without this
 * tool) and once allowed up to SAMPLE_MAX_STORES, and returns the real
 * difference. This is the number both A/B variants display, framed
 * differently (see SavingsSummary.tsx) - see docs/prd-ab-testing.md for why
 * this is a fixed sample basket rather than the shopper's own.
 * @returns {SampleSavings}
 */
export const computeSampleSavings = (): SampleSavings => {
  const singleStore = solveBasket(SAMPLE_MATRIX, SAMPLE_SUPPLIER_COUNT, 1);
  const optimized = solveBasket(
    SAMPLE_MATRIX,
    SAMPLE_SUPPLIER_COUNT,
    SAMPLE_MAX_STORES,
  );

  const savingsAmount = singleStore.cost - optimized.cost;
  const savingsPercent =
    singleStore.cost === 0 ? 0 : (savingsAmount / singleStore.cost) * 100;

  return {
    singleStoreCost: singleStore.cost,
    optimizedCost: optimized.cost,
    savingsAmount,
    savingsPercent,
  };
};
