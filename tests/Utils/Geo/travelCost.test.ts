import { describe, expect, it } from "vitest";
import { computeVisitCostByStore } from "../../../src/utils/Geo/travelCost";
import { haversineDistanceKm } from "../../../src/utils/Geo/haversine";

describe("computeVisitCostByStore", () => {
  const home = { lat: 45.5017, lon: -73.5673 };
  const stores = [
    { lat: 45.5088, lon: -73.5878 }, // close
    { lat: 40.7128, lon: -74.006 }, // far (New York)
  ];

  it("Should return one cost per store, aligned to index", () => {
    const cost = computeVisitCostByStore(home, stores, 1);
    expect(cost).toHaveLength(stores.length);
  });

  it("Should scale linearly with costPerKm", () => {
    const atOne = computeVisitCostByStore(home, stores, 1);
    const atThree = computeVisitCostByStore(home, stores, 3);
    atOne.forEach((cost, i) => {
      expect(atThree[i]).toBeCloseTo(cost * 3, 6);
    });
  });

  it("Should match haversineDistanceKm times the rate for each store", () => {
    const costPerKm = 0.5;
    const cost = computeVisitCostByStore(home, stores, costPerKm);
    stores.forEach((store, i) => {
      expect(cost[i]).toBeCloseTo(haversineDistanceKm(home, store) * costPerKm, 10);
    });
  });

  it("Should give the geographically closer store a lower cost", () => {
    const cost = computeVisitCostByStore(home, stores, 1);
    expect(cost[0]).toBeLessThan(cost[1]);
  });
});
