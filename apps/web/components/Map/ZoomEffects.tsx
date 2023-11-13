import { usePosition } from "@/hooks/usePosition";
import { useEffect } from "react";
import { useMap } from "react-map-gl";

const ZoomEffects = () => {
  const precisionToZoom: Record<number, number> = {
    2: 4,
    3: 7,
    4: 9,
    5: 12,
    6: 14,
  };

  const {
    position: { precision, latitude, longitude },
  } = usePosition();
  const { mainMap } = useMap();

  useEffect(() => {
    if (precision) {
      mainMap?.flyTo({
        center: [longitude, latitude],
        zoom: precisionToZoom[precision],
      });
    }
  }, [precision]);

  return null;
};

export default ZoomEffects;
