import { Feature, Polygon, bboxPolygon } from "@turf/turf";
import ngeohash from "ngeohash";

export const geohashToFeature = (
  geohash: string
): Feature<Polygon, { geohash: string }> =>
  ({
    ...bboxPolygon(ngeohash.decode_bbox(geohash as string)),
    properties: { geohash },
  } as Feature<Polygon, { geohash: string }>);
