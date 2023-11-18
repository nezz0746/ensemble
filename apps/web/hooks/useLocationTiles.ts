import { usePublicClient } from "wagmi";
import useChain from "./useChain";
import useAppAddresses from "./useAppAddresses";
import { mapABI } from "wagmi-config";
import { getAbiItem } from "viem";
import { useEffect } from "react";
import { create } from "zustand";

type LocationTileStore = {
  locationTiles: {
    args: {
      creator: string;
      tileAddress: string;
    };
  }[];
  setLocationTiles: (locationTiles: any[]) => void;
};

export const useLocationTileStore = create<LocationTileStore>((set) => ({
  locationTiles: [],
  setLocationTiles: (locationTiles) => set({ locationTiles }),
}));

const useLocationTiles = () => {
  const { chainId } = useChain();
  const { mapAddress } = useAppAddresses();
  const client = usePublicClient({ chainId });
  const { locationTiles, setLocationTiles } = useLocationTileStore();

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

    setLocationTiles(locationTiles);
  };

  useEffect(() => {
    getCreatedLocationTiles();
  }, []);

  return {
    locationTiles,
  };
};

export default useLocationTiles;
