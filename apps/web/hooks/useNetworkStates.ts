import { useNetworkStatesQuery } from "@/rtk/generated";
import { useMemo } from "react";

const useNetworkStates = () => {
  const { data } = useNetworkStatesQuery({ variables: {} });

  return useMemo(() => {
    return {
      networkStates: data?.networkStates ?? [],
    };
  }, [data?.networkStates]);
};

export default useNetworkStates;
