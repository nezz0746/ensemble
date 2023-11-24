import { Feature, Polygon, bboxPolygon } from "@turf/turf";
import ngeohash from "ngeohash";

export const precisionToZoom: Record<number, number> = {
  2: 3,
  3: 7,
  4: 9,
  5: 12,
  6: 14
};

export function encodeGeohash(lat: number, lng: number, precision: number) {
  return ngeohash.encode(lat, lng, precision);
}

export function getGeohashAsBBox(
  geohash: string
): ngeohash.GeographicBoundingBox {
  const [minLat, minLon, maxLat, maxLon] = ngeohash.decode_bbox(geohash);
  return [minLon, minLat, maxLon, maxLat];
}

export const geohashToFeature = (
  geohash: string
): Feature<Polygon, { geohash: string }> =>
  ({
    ...bboxPolygon(getGeohashAsBBox(geohash as string)),
    properties: { geohash }
  } as Feature<Polygon, { geohash: string }>);
