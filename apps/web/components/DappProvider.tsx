import { WagmiConfig } from 'wagmi'
import { wagmiConfig } from 'wagmi-config'
import { dimTheme } from 'shared-config'
import { InstateProvider } from '@instate/kit'

type DappProviderProps = {
  children: React.ReactNode
}

const DappProvider = ({ children }: DappProviderProps) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <InstateProvider theme={dimTheme}>{children}</InstateProvider>
    </WagmiConfig>
  )
}

export default DappProvider
