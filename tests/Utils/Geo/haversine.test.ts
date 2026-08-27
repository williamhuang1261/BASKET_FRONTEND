import { describe, expect, it } from "vitest";
import { haversineDistanceKm } from "../../../src/utils/Geo/haversine";

describe("haversineDistanceKm", () => {
  it("Should return 0 for the same point", () => {
    const point = { lat: 45.5017, lon: -73.5673 };
    expect(haversineDistanceKm(point, point)).toBe(0);
  });

  it("Should match the known Paris-to-London great-circle distance within 1%", () => {
    const paris = { lat: 48.8566, lon: 2.3522 };
    const london = { lat: 51.5074, lon: -0.1278 };
    const distance = haversineDistanceKm(paris, london);
    // Published great-circle distance is ~344 km
    expect(distance).toBeGreaterThan(340);
    expect(distance).toBeLessThan(348);
  });

  it("Should be symmetric", () => {
    const a = { lat: 45.5017, lon: -73.5673 };
    const b = { lat: 40.7128, lon: -74.006 };
    expect(haversineDistanceKm(a, b)).toBeCloseTo(haversineDistanceKm(b, a), 10);
  });

  it("Should scale roughly linearly for small distances along one line of longitude", () => {
    // 1 degree of latitude is ~111 km everywhere on the sphere
    const base = { lat: 0, lon: 0 };
    const oneDegree = { lat: 1, lon: 0 };
    const twoDegrees = { lat: 2, lon: 0 };
    const d1 = haversineDistanceKm(base, oneDegree);
    const d2 = haversineDistanceKm(base, twoDegrees);
    expect(d1).toBeCloseTo(111.2, 0);
    expect(d2).toBeCloseTo(d1 * 2, 0);
  });
});
