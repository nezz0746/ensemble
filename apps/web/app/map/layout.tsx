"use client";

import ConnectButton from "@/components/ConnectButton";
import Map, { MapProvider } from "react-map-gl";
import { commonLocations } from "@/services/constants";
import AccountMarker from "@/components/Map/AccountMarker";
import FogLayer from "@/components/Map/Fog";
import AppNavigationBar from "@/components/AppNavigationBar";
import AppMapControls from "@/components/AppMapControls";

const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

type HomeProps = {
  children: React.ReactNode;
};

const Home = ({ children }: HomeProps) => {
  return (
    <div className="h-screen flex flex-row gap-2">
      <div className="w-2/3 relative">
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
            mapStyle="mapbox://styles/nezz0746/closnc6ke00qa01nz5uvf7yad"
          >
            <div className="z-20 absolute top-0 p-3 w-full">
              <AppNavigationBar />
            </div>
            <AccountMarker />
            <FogLayer />
            <div className="absolute w-full bottom-0 p-3">
              <AppMapControls />
            </div>
          </Map>
        </MapProvider>
      </div>
      <div className="w-1/3 p-4">
        <div className="w-full h-full">
          <div className="">
            <ConnectButton />
          </div>

          <div className="py-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
