"use client";

import type { NextPage } from "next";

import useAppAgent from "@/hooks/useAppAgent";
import { truncateAddress } from "@/services/utils";
import { useMap } from "react-map-gl";
import { useCallback } from "react";
import { center as centerOfFeature } from "@turf/turf";
import { geohashToFeature, precisionToZoom } from "@/services/map_utils";
import useAppAddresses from "@/hooks/useAppAddresses";

const Home: NextPage = () => {
  const {mainMap} = useMap() 
  const { agent } = useAppAgent();
  const {stateTile} = useAppAddresses()

  const zoomTo = useCallback((geohash: string) => {
    const center = centerOfFeature(geohashToFeature(geohash)).geometry.coordinates as [number, number]
    
    if(center.length === 2) {
      mainMap?.flyTo({
        center,
        zoom: precisionToZoom[geohash.length],
        speed: 4
      })
    }
  }, [mainMap])

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col flex-grow justify-between pt-4">
        <div className="flex flex-col">
          <div>
            <p>Current State</p>
            {stateTile}
          </div>
          <div>
            
          Local Records
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {agent?.records.map(({geohash, id}) => {
              return (
                <div
                  onClick={(() => {
                    zoomTo(geohash)
                  })}
                  key={geohash}
                  className="border border-primary bg-neutral p-2 hover:bg-primary hover:cursor-pointer hover:text-neutral hover:border-black select-none"
                >
                  <p className="font-bold">{geohash}</p>
                  <p>{truncateAddress(id, 6)}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4"></div>
      </div>
    </div>
  );
};

export default Home;
