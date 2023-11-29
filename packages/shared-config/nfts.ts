import { Alchemy, Network } from "alchemy-sdk";
import { alchemy_key } from "./variables";

const chainIdToNetwork: Record<number, Network> = {
  1: Network.ETH_MAINNET,
  5: Network.ETH_GOERLI,
  10: Network.OPT_MAINNET,
  420: Network.OPT_GOERLI,
  137: Network.MATIC_MAINNET,
  80001: Network.MATIC_MUMBAI,
  8453: Network.BASE_MAINNET,
  84531: Network.BASE_GOERLI
};

export const getAlchemyNFT = (chainId: number) => {
  return new Alchemy({
    apiKey: alchemy_key,
    network: chainIdToNetwork[chainId],
  }).nft;
};
