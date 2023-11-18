import { Source, Layer } from "react-map-gl";
import { usePosition } from "@/hooks/usePosition";
import { fogLayerStyle, getPointLayerStyle } from "@/services/mapbox";
import { useVisitedGeohashesStore } from "@/hooks/useVisitedGeohashes";
import { center, difference, union } from "@turf/turf";
import { emptyFeature, globeFeature } from "@/services/constants";
import { useMemo } from "react";

const FogLayer = () => {
  const {
    position: { feature },
  } = usePosition();
  const { features } = useVisitedGeohashesStore();

  /**
   * FOAM
   */
  const fog = useMemo(() => {
    const fs = [...features, feature];

    return difference(
      globeFeature,
      fs.reduce((acc: any, feature) => {
        const newAcc = union(acc, feature);
        return newAcc !== null ? newAcc : emptyFeature;
      }, emptyFeature)
    );
  }, [feature, features]);

  /**
   * Center of visited geohashes
   */
  const points = useMemo(() => {
    const centers = features.map((f) => {
      return center(f, { properties: f.properties });
    });

    return centers;
  }, [features]);

  return (
    <>
      {points.map((point) => {
        return (
          <Source
            key={point.properties.geohash}
            id={point.properties.geohash}
            type="geojson"
            data={point}
          >
            <Layer {...getPointLayerStyle(point)} />
          </Source>
        );
      })}
      {fog && (
        <Source id="fog" type="geojson" data={fog}>
          <Layer {...fogLayerStyle} />
        </Source>
      )}
    </>
  );
};

export default FogLayer;
