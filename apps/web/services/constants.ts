import { Feature, Polygon } from "@turf/turf";

export const commonLocations = {
  toulouse: {
    longitude: 1.444209,
    latitude: 43.604652,
    zoom: 0,
  },
  paris: {
    longitude: 2.3488,
    latitude: 48.8534,
    zoom: 2,
  },
  lille: {
    longitude: 3.057256,
    latitude: 50.631813,
    zoom: 0,
  },
};

export const globeFeature: Feature<Polygon> = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-180.0, 90.0],
        [180.0, 90.0],
        [180.0, -90.0],
        [-180.0, -90.0],
        [-180.0, 90.0],
      ],
    ],
  },
};
