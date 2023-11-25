import { Feature, MultiLineString, Polygon, Properties } from '@turf/turf'
import { InstateTilePolygon } from './map_utils'

export const subgraphUrls: Record<number, string> = {
  1337: 'http://localhost:8000/subgraphs/name/nezz0746/ns-framework',
  5: 'https://api.thegraph.com/subgraphs/name/nezz0746/instate-goerli',
}

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
}

export const emptyFeature: InstateTilePolygon = {
  type: 'Feature',
  properties: { geohash: '' },
  geometry: {
    type: 'Polygon',
    coordinates: [],
  },
}

export const emptyMultilineString: Feature<MultiLineString, Properties> = {
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'MultiLineString',
    coordinates: [],
  },
}

export const globeFeature: Feature<Polygon> = {
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'Polygon',
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
}
