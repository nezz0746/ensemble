import { AppChains } from 'shared-config'
import { useNetwork } from 'wagmi'
import { defaultChain } from 'wagmi-config'
import { localhost } from 'wagmi/chains'

const useChain = () => {
  const { chain } = useNetwork()

  const chainId = (chain?.id ?? defaultChain.id) as AppChains

  return {
    isLocal: chainId === localhost.id,
    chainId,
    chain,
  }
}

export default useChain
