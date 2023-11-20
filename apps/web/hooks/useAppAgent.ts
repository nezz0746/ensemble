import { useAccount } from "wagmi";
import { useAgentQuery } from "@/rtk/generated";
import { useMemo } from "react";
import { geohashToFeature } from "@/services/map_utils";

const useAppAgent = () => {
  const { address } = useAccount();

  const { data, refetch } = useAgentQuery(
    {
      // @ts-ignore
      variables: { id: address?.toLowerCase() },
    },
    {
      skip: !address,
    }
  );

  return useMemo(() => {
    const geohashes =
      data?.agent?.records.map((record) => record.geohash) ?? [];

    return {
      refetch,
      geohashes,
      features: geohashes?.map(geohashToFeature) ?? [],
    };
  }, [data?.agent?.records]);
};

export default useAppAgent;
