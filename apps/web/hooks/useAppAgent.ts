import { useAccount } from 'wagmi'
import { useAgentQuery } from '@/rtk/generated'
import { useEffect, useMemo } from 'react'
import { geohashToFeature, precisionToZoom } from '@/services/map_utils'
import useChain from './useChain'
import { useMap } from 'react-map-gl'
import { center } from '@turf/turf'

const useAppAgent = () => {
  const { mainMap } = useMap()
  const { chainId } = useChain()
  const { address } = useAccount()

  const { data, refetch } = useAgentQuery(
    {
      // @ts-ignore
      variables: { id: address?.toLowerCase() },
      chainId,
    },
    {
      skip: !address,
    }
  )

  useEffect(() => {
    if (data?.agent) {
      const currentGeohash = data.agent.currentGeohash
      const agentLocationCenter = center(geohashToFeature(currentGeohash))
      const agenCenter: [number, number] = [
        agentLocationCenter.geometry.coordinates[0],
        agentLocationCenter.geometry.coordinates[1],
      ]
      mainMap?.flyTo({
        center: agenCenter,
        zoom: precisionToZoom[currentGeohash.length],
        speed: 10,
      })
    }
  }, [mainMap, data?.agent])

  return useMemo(() => {
    const geohashes = data?.agent?.records.map((record) => record.geohash) ?? []

    return {
      refetch,
      agent: data?.agent,
      geohashes,
      features: geohashes?.map(geohashToFeature) ?? [],
    }
  }, [data?.agent?.records])
}

export default useAppAgent
