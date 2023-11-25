import { create } from 'zustand'
import { produce } from 'immer'
import { commonLocations } from '@/services/constants'
import {
  InstateTilePolygon,
  encodeGeohash,
  geohashToFeature,
} from '@/services/map_utils'
import { center as centerOfFeature } from '@turf/turf'

export type Positon = {
  latitude: number
  longitude: number
  precision: number
  geohash: string
  feature: InstateTilePolygon
}

type PositionStore = {
  position: Positon
  updatePosition: (
    latitude: number,
    longitude: number,
    precision?: number
  ) => void
  updatePositionWithGeohash: (geohash: string) => void
  setPrecision: (precision: number) => void
}

export const usePosition = create<PositionStore>((set) => ({
  position: {
    latitude: commonLocations.paris.latitude,
    longitude: commonLocations.paris.longitude,
    precision: 2,
    geohash: '',
    feature: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [[commonLocations.paris.latitude, commonLocations.paris.longitude]],
        ],
      },
      properties: { geohash: '' },
    },
  },
  setPrecision: (precision) => {
    set(
      produce((state) => {
        const new_hash = encodeGeohash(
          state.position.latitude,
          state.position.longitude,
          precision
        )
        state.position.geohash = new_hash
        state.position.precision = precision
        state.position.feature = geohashToFeature(new_hash)
      })
    )
  },
  updatePosition: (latitude, longitude) => {
    set(
      produce((state) => {
        const new_hash = encodeGeohash(
          latitude,
          longitude,
          state.position.precision
        )
        state.position.latitude = latitude
        state.position.longitude = longitude
        state.position.geohash = new_hash
        state.position.feature = geohashToFeature(new_hash)
      })
    )
  },
  updatePositionWithGeohash: (geohash) => {
    set(
      produce((state) => {
        const feature = geohashToFeature(geohash)
        const center = centerOfFeature(feature).geometry

        state.position.precision = geohash.length
        state.position.latitude = center.coordinates[1]
        state.position.longitude = center.coordinates[0]
        state.position.geohash = geohash
        state.position.feature = feature
      })
    )
  },
}))
