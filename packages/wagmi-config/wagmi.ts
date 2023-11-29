import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { Chain, ChainProviderFn, configureChains, createConfig } from "wagmi";
import { base, baseGoerli, goerli, localhost } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import {
  projectId,
  alchemy_key,
  localChainEnabled,
  testnetChainEnabled,
  mainnetChainEnabled,
  appName,
} from "shared-config";

let defaultChain: Chain;

let appChains: Chain[] = [];
let providers: ChainProviderFn<Chain>[] = [];

if (localChainEnabled && !testnetChainEnabled && !mainnetChainEnabled) {
  defaultChain = localhost;
  appChains = [localhost];
  providers.push(
    jsonRpcProvider({ rpc: (chain) => ({ http: "http://localhost:8545" }) })
  );
}

if (testnetChainEnabled) {
  defaultChain = goerli;
  appChains = [goerli, baseGoerli];
}

if (mainnetChainEnabled) {
  defaultChain = base;
  appChains = [base];
}

if (testnetChainEnabled || mainnetChainEnabled) {
  providers.push(alchemyProvider({ apiKey: alchemy_key }));
}

console.log({ appChains });

const { chains, publicClient } = configureChains(appChains, providers);

const { connectors } = getDefaultWallets({
  appName,
  projectId,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { wagmiConfig, chains, defaultChain };
