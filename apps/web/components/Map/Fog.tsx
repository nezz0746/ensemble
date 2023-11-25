import { Source, Layer } from 'react-map-gl'
import { usePosition } from '@/hooks/usePosition'
import { fogLayerStyle, getPointLayerStyle } from '@/services/mapbox'
import { center, difference, union } from '@turf/turf'
import { emptyFeature, globeFeature } from '@/services/constants'
import { useMemo } from 'react'
import useAppAgent from '@/hooks/useAppAgent'

const ProfileFogLayer = () => {
  // Position of active agent (draggable)
  const {
    position: { feature },
  } = usePosition()

  // Features fo active agent
  const { features: agentFeatures } = useAppAgent()

  const points = useMemo(() => {
    return agentFeatures.map((f) => {
      return center(f, { properties: f.properties })
    })
  }, [agentFeatures])

  const computed_fog = useMemo(() => {
    const visibleFeatures = [feature, ...agentFeatures]

    return difference(
      globeFeature,
      visibleFeatures.reduce((acc, feature) => {
        const newAcc = union(acc, feature, { properties: feature.properties })
        return newAcc !== null ? newAcc : emptyFeature
      }, emptyFeature)
    )
  }, [feature, agentFeatures])

  return (
    <>
      {points.map((point) => {
        return (
          <Source
            key={point?.properties?.geohash}
            id={`profile-point-${point?.properties?.geohash}`}
            type="geojson"
            data={point}
          >
            <Layer {...getPointLayerStyle(point)} />
          </Source>
        )
      })}
      {computed_fog && (
        <Source id="fog" type="geojson" data={computed_fog}>
          <Layer {...fogLayerStyle} />
        </Source>
      )}
    </>
  )
}

export default ProfileFogLayer
