/**
 * @description A point on the Earth's surface, in decimal degrees.
 * @interface StoreCoordinate
 */
export interface StoreCoordinate {
  lat: number;
  lon: number;
}

/** Mean Earth radius in kilometres, treating the Earth as a perfect sphere. */
const EARTH_RADIUS_KM = 6371;

const toRadians = (degrees: number): number => (degrees * Math.PI) / 180;

/**
 * @description Great-circle distance between two coordinates, via the
 * Haversine formula.
 *
 * This treats the Earth as a sphere, not an ellipsoid, which introduces up to
 * ~0.5% error versus a more exact model (e.g. Vincenty). That is acceptable
 * at store-to-store distances and is the same trade-off most routing systems
 * make before ever touching a real road network - see
 * `docs/prd-geospatial-travel-cost.md` for what this is and is not.
 *
 * @param {StoreCoordinate} a - First point
 * @param {StoreCoordinate} b - Second point
 * @example
 * haversineDistanceKm({ lat: 48.8566, lon: 2.3522 }, { lat: 51.5074, lon: -0.1278 })
 * // ~343.5 (Paris to London)
 * @returns {number} Distance in kilometres
 */
export const haversineDistanceKm = (
  a: StoreCoordinate,
  b: StoreCoordinate,
): number => {
  const dLat = toRadians(b.lat - a.lat);
  const dLon = toRadians(b.lon - a.lon);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);

  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;

  return 2 * EARTH_RADIUS_KM * Math.asin(Math.min(1, Math.sqrt(h)));
};
