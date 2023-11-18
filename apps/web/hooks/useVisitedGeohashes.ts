import { useAccount, usePublicClient } from "wagmi";
import useChain from "./useChain";
import useAppAddresses from "./useAppAddresses";
import { useEffect } from "react";
import { getAbiItem } from "viem";
import { mapABI } from "wagmi-config";
import { create } from "zustand";
import { Feature, Polygon, bboxPolygon } from "@turf/turf";
import ngeohash from "ngeohash";

type VisitedGeohashesStore = {
  geohashes: string[];
  features: Feature<Polygon, { geohash: string }>[];
  setFeatures: (
    features: Feature<Polygon, { geohash: string }>[],
    geohashes: string[]
  ) => void;
};

export const useVisitedGeohashesStore = create<VisitedGeohashesStore>(
  (set) => ({
    features: [],
    geohashes: [],
    setFeatures: (features, geohashes) => {
      set({ features, geohashes });
    },
  })
);

const useVisitedGeohashes = () => {
  const { features, setFeatures, geohashes } = useVisitedGeohashesStore();
  const { chainId } = useChain();
  const { address } = useAccount();
  const { mapAddress } = useAppAddresses();
  const client = usePublicClient({ chainId });

  /**
   * Filter events to get accounts records & corresponding geohashes
   */
  const getAccountRecords = async () => {
    const block = (await client.getBlockNumber()) - 1000n;

    const filter = await client.createEventFilter({
      address: mapAddress,
      event: getAbiItem({ abi: mapABI, name: "RecordTileEntered" }),
      fromBlock: block < 0 ? 0n : block,
      args: {
        recipient: address,
      },
    });

    const logs = await client.getFilterLogs({ filter });

    const geohashes = logs
      .map((log) => {
        return log.args.geohash;
      })
      .filter(Boolean) as string[];

    setFeatures(
      geohashes.map(
        (hash) =>
          ({
            ...bboxPolygon(ngeohash.decode_bbox(hash as string)),
            properties: { geohash: hash },
          } as Feature<Polygon, { geohash: string }>)
      ),
      geohashes
    );
  };

  useEffect(() => {
    getAccountRecords();

    return () => {
      setFeatures([], []);
    };
  }, [address]);

  return {
    features,
    geohashes,
    getAccountRecords,
  };
};

export default useVisitedGeohashes;
