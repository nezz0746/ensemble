import { NetworkState, NetworkStatesQuery } from "@instate/kit";
import { Dialog, DialogContent, Text } from "@rainbow-me/rainbowkit";
import { createContext, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import { useNetworkStatesQuery } from "../rtk/generated";

type NetworkStateStore = {
  networkState: NetworkState | null;
  setNetworkState: (networkState: NetworkState) => void;
};

export const NetworkStateContext = createContext<NetworkStateStore>({
  networkState: null,
  setNetworkState: () => {},
});

const NetworkStateListItem = ({
  networkState,
  selected = false,
}: {
  networkState: NetworkState | NetworkStatesQuery["networkStates"][0];
  selected: boolean;
}) => {
  return (
    <div className="rounded-md bg-secondary text-neutral flex flex-row gap-2 items-center p-2">
      <img
        className="w-8 h-8 aspect-square rounded-md"
        src={networkState?.metadata?.imageGateway}
      />
      <p className="font-bold text-xl">{networkState.metadata?.name}</p>
    </div>
  );
};

/**
 * WIP: Finish this component
 */
const NetworkStateButton = () => {
  const [open, setOpen] = useState(false);
  const { chain } = useNetwork();
  const { data } = useNetworkStatesQuery({
    variables: {},
    chainId: chain?.id,
  });

  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="btn flex flex-row w-full"
      >
        <img
          className="w-8 h-8 aspect-square rounded-md"
          src={data?.networkStates[0]?.metadata?.imageGateway}
        />
        <p className="">{data?.networkStates[0]?.metadata?.name}</p>
      </button>
      <Dialog
        titleId="2"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onMountAutoFocus={() => {}}
      >
        <DialogContent>
          <div className="p-2 flex flex-col gap-4">
            <Text
              as="h1"
              color="modalText"
              id={"NS"}
              size={"18"}
              weight="heavy"
            >
              Network States
            </Text>
            {data?.networkStates.map((networkState) => {
              return (
                <NetworkStateListItem
                  selected
                  key={networkState.id}
                  networkState={networkState}
                />
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NetworkStateButton;
