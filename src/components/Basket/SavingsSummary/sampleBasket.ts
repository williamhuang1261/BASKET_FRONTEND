import { Matrix } from "../../../utils/Optimization/genMatrix";

/**
 * @description A small, clearly synthetic basket (SYN-prefixed suppliers,
 * fixed made-up prices) used only to give the A/B test a real number to
 * display - see docs/prd-ab-testing.md. Not real product/pricing data.
 */
export const SAMPLE_MATRIX: Matrix = [
  {
    ref: { code: "SYN-MILK", standard: "PLU" },
    inStock: true,
    opts: [
      { supplier: "SYN-A", cost: 4.29 },
      { supplier: "SYN-B", cost: 3.99 },
      { supplier: "SYN-C", cost: 4.49 },
    ],
  },
  {
    ref: { code: "SYN-BREAD", standard: "PLU" },
    inStock: true,
    opts: [
      { supplier: "SYN-A", cost: 3.49 },
      { supplier: "SYN-B", cost: 3.79 },
      { supplier: "SYN-C", cost: 2.99 },
    ],
  },
  {
    ref: { code: "SYN-EGGS", standard: "PLU" },
    inStock: true,
    opts: [
      { supplier: "SYN-A", cost: 5.99 },
      { supplier: "SYN-B", cost: 4.99 },
      { supplier: "SYN-C", cost: 5.49 },
    ],
  },
  {
    ref: { code: "SYN-RICE", standard: "PLU" },
    inStock: true,
    opts: [
      { supplier: "SYN-A", cost: 6.49 },
      { supplier: "SYN-B", cost: 7.29 },
      { supplier: "SYN-C", cost: 5.99 },
    ],
  },
  {
    ref: { code: "SYN-CHICKEN", standard: "PLU" },
    inStock: true,
    opts: [
      { supplier: "SYN-A", cost: 11.49 },
      { supplier: "SYN-B", cost: 9.99 },
      { supplier: "SYN-C", cost: 12.29 },
    ],
  },
];

export const SAMPLE_SUPPLIER_COUNT = 3;
