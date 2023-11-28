import { useCallback } from 'react'
import { useMap } from 'react-map-gl'
import { center as centerOfFeature } from '@turf/turf'
import { geohashToFeature, precisionToZoom } from '@/services/map_utils'

const useMapUtils = () => {
  const { mainMap } = useMap()

  const flyToGeohash = useCallback(
    (geohash: string, speed: number | undefined = 5) => {
      const center = centerOfFeature(geohashToFeature(geohash)).geometry
        .coordinates as [number, number]

      if (center.length === 2) {
        mainMap?.flyTo({
          center,
          zoom: precisionToZoom[geohash.length],
          speed,
        })
      }
    },
    [mainMap]
  )

  return {
    flyToGeohash,
  }
}

export default useMapUtils
