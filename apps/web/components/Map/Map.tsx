import Map, { MapProvider } from "react-map-gl";
import { commonLocations } from "@/services/constants";
import GeohashLayer from "./GeohashLayer";
import AccountMarker from "./AccountMarker";
import ZoomEffects from "./ZoomEffects";

const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const AppMap = () => {
  return (
    <MapProvider>
      <Map
        id="mainMap"
        mapboxAccessToken={token}
        projection={{ name: "globe" }}
        initialViewState={commonLocations.paris}
        style={{
          width: "100%",
          height: "100%",
        }}
        interactiveLayerIds={["data"]}
        mapStyle="mapbox://styles/nezz0746/closnc6ke00qa01nz5uvf7yad"
      >
        <div className="bg-white flex flex-row gap-2 items-center p-2 absolute top-[6px] left-[6px] border">
          <p className="font-display font-bold tracking-tight text-xl">
            Ensemble
          </p>
        </div>
        <AccountMarker />
        <GeohashLayer />
        <ZoomEffects />
      </Map>
    </MapProvider>
  );
};

export default AppMap;
