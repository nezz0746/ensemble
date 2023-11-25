import { useNetworkStatesQuery } from '@/rtk/generated'
import { useMemo } from 'react'
import useChain from './useChain'

const useNetworkStates = () => {
  const { chainId } = useChain()
  const { data } = useNetworkStatesQuery({ variables: {}, chainId })

  return useMemo(() => {
    return {
      networkStates: data?.networkStates ?? [],
    }
  }, [data?.networkStates])
}

export default useNetworkStates
