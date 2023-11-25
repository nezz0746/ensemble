import useNetworkState from '@/hooks/useNetworkState'
import { getNetworkStateLayerStyle } from '@/services/mapbox'
import { Layer, Source } from 'react-map-gl'

const NetworkStateLayers = () => {
  const { agentsPerGeohash } = useNetworkState()

  console.log({ agentsPerGeohash })

  return (
    <>
      {agentsPerGeohash.map(({ feature }) => {
        const {
          properties: { geohash },
        } = feature
        const key = `network-state-layer-${geohash}`
        return (
          <Source key={key} id={key} type="geojson" data={feature}>
            <Layer {...getNetworkStateLayerStyle(geohash)} />
          </Source>
        )
      })}
    </>
  )
}

export default NetworkStateLayers
