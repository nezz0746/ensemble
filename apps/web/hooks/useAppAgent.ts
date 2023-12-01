import { useAccount } from 'wagmi'
import { useAgentQuery, useLocalAccount } from '@instate/kit'
import { useEffect, useMemo } from 'react'
import { geohashToFeature } from '@/services/map_utils'
import useChain from './useChain'
import useMapUtils from './useMapUtils'
import { usePosition } from './usePosition'

const useAppAgent = () => {
  const { flyToGeohash } = useMapUtils()
  const { localAccount } = useLocalAccount()
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
    if (localAccount) {
      flyToGeohash(localAccount.geohash)
    }
  }, [localAccount])

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
