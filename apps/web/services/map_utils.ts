import { Feature, MultiPolygon, Polygon, bboxPolygon } from '@turf/turf'
import ngeohash from 'ngeohash'

export type InstateTilePolygon = Feature<
  MultiPolygon | Polygon,
  {
    geohash: string
  }
>

export const precisionToZoom: Record<number, number> = {
  2: 4,
  3: 7,
  4: 9,
  5: 12,
  6: 14,
}

export function encodeGeohash(lat: number, lng: number, precision: number) {
  return ngeohash.encode(lat, lng, precision)
}

export function getGeohashAsBBox(
  geohash: string
): ngeohash.GeographicBoundingBox {
  const [minLat, minLon, maxLat, maxLon] = ngeohash.decode_bbox(geohash)
  return [minLon, minLat, maxLon, maxLat]
}

export const geohashToFeature = (geohash: string): InstateTilePolygon => ({
  ...bboxPolygon(getGeohashAsBBox(geohash as string)),
  properties: { geohash },
})
