import { useLocalDrop } from '@/context/localDropContext'
import { globeFeature } from '@/services/constants'
import { geohashToFeature } from '@/services/map_utils'
import { fogLayerStyle } from '@/services/mapbox'
import { difference } from '@turf/turf'
import { useMemo } from 'react'
import { Layer, Source } from 'react-map-gl'

const LocalDropFocusRegion = () => {
  const { selected } = useLocalDrop()

  const computed_fog = useMemo(() => {
    if (!selected) return null
    const visibleFeature = geohashToFeature(selected?.geohash)

    return difference(globeFeature, visibleFeature)
  }, [selected])

  return (
    <>
      {computed_fog && (
        <Source id="fog" type="geojson" data={computed_fog}>
          <Layer {...fogLayerStyle} />
        </Source>
      )}
    </>
  )
}

export default LocalDropFocusRegion
