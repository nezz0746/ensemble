import { Source, FillLayer, Layer } from "react-map-gl";
import { usePosition } from "@/hooks/usePosition";

const GeohashLayer = () => {
  const {
    position: { feature },
  } = usePosition();

  const layerStyle: FillLayer = {
    id: "data",
    type: "fill",
    paint: {
      "fill-color": "black",
      "fill-opacity": 0.2,
      "fill-outline-color": "black",
    },
  };

  return (
    <Source id="data" type="geojson" data={feature}>
      <Layer {...layerStyle} />
    </Source>
  );
};

export default GeohashLayer;
