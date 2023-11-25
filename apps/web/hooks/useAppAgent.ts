import { useAccount } from 'wagmi'
import { useAgentQuery } from '@/rtk/generated'
import { useEffect, useMemo } from 'react'
import { geohashToFeature } from '@/services/map_utils'
import useChain from './useChain'
import useMapUtils from './useMapUtils'

const useAppAgent = () => {
  const { flyToGeohash } = useMapUtils()
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
      flyToGeohash(currentGeohash)
    }
  }, [flyToGeohash, data?.agent])

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
