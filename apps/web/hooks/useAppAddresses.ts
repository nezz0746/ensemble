import { stateTileAddress, mapAddress } from 'wagmi-config'
import useChain from './useChain'

const useAppAddresses = () => {
  const { chainId } = useChain()

  return {
    // @ts-ignore
    stateTile: stateTileAddress[chainId],
    mapAddress: mapAddress[chainId],
  }
}

export default useAppAddresses
