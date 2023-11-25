import { useNetworkStateQuery } from '@/rtk/generated'
import useChain from './useChain'
import { useMemo } from 'react'
import { useParams } from 'next/navigation'
import { InstateTilePolygon, geohashToFeature } from '@/services/map_utils'

const useNetworkState = (address?: string) => {
  const { address: addressParam } = useParams()
  const { chainId } = useChain()

  const { data: currentNetworkState } = useNetworkStateQuery({
    chainId,
    variables: { id: address || (addressParam as string) },
  })

  return {
    currentNetworkState,
    agentsPerGeohash: useMemo(() => {
      return Object.values(
        currentNetworkState?.networkState?.agents
          .map(({ agent }) => agent)
          ?.reduce(
            (acc, agent) => {
              if (acc[agent.currentGeohash] === undefined) {
                acc[agent.currentGeohash] = {
                  population: 1,
                  feature: geohashToFeature(agent.currentGeohash),
                }
              } else {
                acc[agent.currentGeohash].population += 1
              }
              return acc
            },
            {} as Record<
              string,
              {
                population: number
                feature: InstateTilePolygon
              }
            >
          ) ?? {}
      )
    }, [currentNetworkState]),
  }
}

export default useNetworkState
