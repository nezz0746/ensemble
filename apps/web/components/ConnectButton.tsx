import { emojiAvatarForAddress } from "@/services/rainbow";
import { ConnectButton as RainbowKitConnectButton } from "@rainbow-me/rainbowkit";

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
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            className="font-display flex flex-row gap-2"
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="btn btn-outline rounded-none flex-grow"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    className="btn btn-outline rounded-none flex-grow"
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </button>
                );
              }
              return (
                <>
                  <button
                    onClick={openChainModal}
                    className="btn btn-outline rounded-none flex-grow"
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
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
                    className="btn btn-outline rounded-none flex-grow flex flex-row items-center gap-2"
                  >
                    <p className="text-xl">
                      {(emojiAvatarForAddress(account.address) ?? {}).emoji}
                    </p>
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </>
              );
            })()}
          </div>
        );
      }}
    </RainbowKitConnectButton.Custom>
  );
};

export default ConnectButton;
