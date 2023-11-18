import { usePosition } from "@/hooks/usePosition";
import { commonLocations } from "@/services/constants";
import { useEffect } from "react";
import { useMap } from "react-map-gl";

const AccountZoomEffects = () => {
  const precisionToZoom: Record<number, number> = {
    2: 3,
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
        speed: 5,
      });
    }
    return () => {
      mainMap?.flyTo({
        center: [
          commonLocations.paris.longitude,
          commonLocations.paris.latitude,
        ],
        zoom: commonLocations.paris.zoom,
        speed: 5,
      });
    };
  }, [precision]);

  return null;
};

export default AccountZoomEffects;
