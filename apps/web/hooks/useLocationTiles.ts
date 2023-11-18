import { usePublicClient } from "wagmi";
import useChain from "./useChain";
import useAppAddresses from "./useAppAddresses";
import { mapABI } from "wagmi-config";
import { getAbiItem } from "viem";
import { useEffect } from "react";

const useLocationTiles = () => {
  const { chainId } = useChain();
  const { mapAddress } = useAppAddresses();
  const client = usePublicClient({ chainId });

  /**
   * Filter events to search for created location tiles
   */
  const getCreatedLocationTiles = async () => {
    const filter = await client.createEventFilter({
      address: mapAddress,
      event: getAbiItem({ abi: mapABI, name: "TileCreated" }),
      fromBlock: BigInt(0),
    });

    const logs = await client.getFilterLogs({ filter });

    const locationTiles = logs;

    /**
     * TODO: Add location tiles to state
     */
  };

  useEffect(() => {
    getCreatedLocationTiles();
  }, []);
};

export default useLocationTiles;
