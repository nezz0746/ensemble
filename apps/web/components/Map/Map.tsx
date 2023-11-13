import Map, { MapProvider } from "react-map-gl";
import { commonLocations } from "@/services/constants";
import GeohashLayer from "./GeohashLayer";
import AccountMarker from "./AccountMarker";
import ZoomEffects from "./ZoomEffects";
import Link from "next/link";

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
        <div className="z-20 absolute top-3 left-3">
          <Link href={"/"}>
            <button className="btn">Home</button>
          </Link>
        </div>
        <AccountMarker />
        <GeohashLayer />
        <ZoomEffects />
      </Map>
    </MapProvider>
  );
};

export default AppMap;
