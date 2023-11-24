import { Source, Layer } from 'react-map-gl'
import { usePosition } from '@/hooks/usePosition'
import { fogLayerStyle, getPointLayerStyle } from '@/services/mapbox'
import { center, difference, union } from '@turf/turf'
import { emptyFeature, globeFeature } from '@/services/constants'
import { useMemo } from 'react'
import useAppAgent from '@/hooks/useAppAgent'
import { usePathname } from 'next/navigation'

const FogLayer = () => {
  const pathName = usePathname()

  const isProfile = pathName.includes('/profile')

  const {
    position: { feature },
  } = usePosition()
  const { features } = useAppAgent()

  const agentFeatures = isProfile ? features : []

  const visibleFeatures = isProfile ? [feature, ...agentFeatures] : [feature]

  const fog = useMemo(() => {
    return difference(
      globeFeature,
      visibleFeatures.reduce((acc: any, feature) => {
        const newAcc = union(acc, feature)
        return newAcc !== null ? newAcc : emptyFeature
      }, emptyFeature)
    )
  }, [visibleFeatures])

  const points = useMemo(() => {
    return agentFeatures.map((f) => {
      return center(f, { properties: f.properties })
    })
  }, [agentFeatures])

  return (
    <>
      {points.map((point) => {
        return (
          <Source
            key={point?.properties.geohash}
            id={point?.properties.geohash}
            type="geojson"
            data={point}
          >
            <Layer {...getPointLayerStyle(point)} />
          </Source>
        )
      })}
      {fog && (
        <Source id="fog" type="geojson" data={fog}>
          <Layer {...fogLayerStyle} />
        </Source>
      )}
    </>
  )
}

export default FogLayer
