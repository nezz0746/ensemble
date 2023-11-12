import { create } from "zustand";
import { produce } from "immer";
import { commonLocations } from "@/services/constants";
import { Feature, Polygon, bboxPolygon } from "@turf/turf";
import ngeohash from "ngeohash";

export type Positon = {
  latitude: number;
  longitude: number;
  precision: number;
  geohash: string;
  feature: Feature<Polygon>;
};

type PositionStore = {
  position: Positon;
  updatePosition: (
    latitude: number,
    longitude: number,
    precision?: number
  ) => void;
  setPrecision: (precision: number) => void;
};

export const usePosition = create<PositionStore>((set) => ({
  position: {
    latitude: commonLocations.paris.latitude,
    longitude: commonLocations.paris.longitude,
    precision: 6,
    geohash: "",
    feature: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [],
      },
      properties: {},
    },
  },
  setPrecision: (precision) => {
    set(
      produce((state) => {
        const new_hash = ngeohash.encode(
          state.position.longitude,
          state.position.latitude,
          precision
        );
        state.position.geohash = new_hash;
        state.position.precision = precision;
        state.position.feature = bboxPolygon(ngeohash.decode_bbox(new_hash));
      })
    );
  },
  updatePosition: (latitude, longitude) => {
    set(
      produce((state) => {
        const new_hash = ngeohash.encode(
          longitude,
          latitude,
          state.position.precision
        );
        state.position.latitude = latitude;
        state.position.longitude = longitude;
        state.position.geohash = new_hash;
        state.position.feature = bboxPolygon(ngeohash.decode_bbox(new_hash));
      })
    );
  },
}));
