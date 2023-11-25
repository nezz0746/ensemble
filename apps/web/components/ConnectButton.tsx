import { emojiAvatarForAddress } from '@/services/rainbow'
import { ConnectButton as RainbowKitConnectButton } from '@rainbow-me/rainbowkit'

const ConnectButton = () => {
  return (
    <RainbowKitConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated')
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
            className="flex flex-row gap-2"
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="btn flex-grow"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect
                  </button>
                )
              }
              if (chain.unsupported) {
                return (
                  <button
                    className="btn flex-grow"
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </button>
                )
              }
              return (
                <div className="flex flex-col-reverse md:flex-row w-full gap-2">
                  <button
                    onClick={openChainModal}
                    className="btn flex-grow"
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="btn flex-grow flex flex-row items-center gap-2"
                  >
                    <p className="text-xl">
                      {(emojiAvatarForAddress(account.address) ?? {}).emoji}
                    </p>
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              )
            })()}
          </div>
        )
      }}
    </RainbowKitConnectButton.Custom>
  )
}

export default ConnectButton
