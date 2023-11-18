import { locationTileAddress, mapAddress } from "wagmi-config";
import useChain from "./useChain";

const useAppAddresses = () => {
  const { chainId } = useChain();

  return {
    locationTile: locationTileAddress[chainId],
    mapAddress: mapAddress[chainId],
  };
};

export default useAppAddresses;
